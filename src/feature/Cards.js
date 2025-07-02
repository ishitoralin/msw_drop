import { useState, useRef, useEffect, useMemo } from 'react';
import mobsName from '../data/validNames.json';
import mobs from '../data/mob.json';
import bossTime from '../data/boss_time.json';
import helper from '../utils/helpers';  // 載入helper
import MobImage from '../components/MobImage';
import MobName from '../components/MobName';
import MobProperty from "../components/MobProperty";
import MobStats from '../components/MobStats';
import MobMap from '../components/MobMap';
import MobDrop from '../components/MobDrop';
import '../style/MobCard.css'

const Cards = ({ keywords }) => {
  const [visibleCount, setVisibleCount] = useState(20);
  const loaderRef = useRef(null);

  const filteredMobs = useMemo(() => {
    if (!keywords && keywords !== 0) return mobsName;
    const lower = keywords.toLowerCase();

    return mobsName.filter(name => {
      const fullName = bossTime[name] ? `${name} (BOSS)` : name;
      const drops = (helper.getItemList(name) ?? [])

      return (
        fullName.toLowerCase().includes(lower) ||
        drops.some(dropName => dropName.toLowerCase().includes(lower))
      );
    });
  }, [keywords]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount(prev =>
            Math.min(prev + 10, mobsName.length)
          );
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentLoader = loaderRef.current;
    if (currentLoader) observer.observe(currentLoader);

    return () => {
      if (currentLoader) observer.unobserve(currentLoader);
    };
  }, []);

  return (
    <div className="cards-container">
      {filteredMobs.slice(0, visibleCount).map((name, index) => (
        <div key={index} className="mob-card-container text-center">
          <div className='mob-card'>
            <MobImage name={name} />
            <MobName name={name} keywords={keywords} />
            <MobProperty property={mobs[name][9]} />
            <MobStats name={name} />
            <MobMap name={name} />
            <MobDrop name={name} keywords={keywords} />
          </div>
        </div>
      ))}

      <div ref={loaderRef} style={{ height: '1px' }} />
    </div>
  );
};

export default Cards;
