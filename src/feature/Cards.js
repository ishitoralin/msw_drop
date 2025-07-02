import { useState, useRef, useEffect } from 'react';
import mobsName from '../data/validNames.json';
import mobs from '../data/mob.json';
import MobImage from '../components/MobImage';
import MobName from '../components/MobName';
import MobProperty from "../components/MobProperty";
import MobStats from '../components/MobStats';
import MobMap from '../components/MobMap';
import MobDrop from '../components/MobDrop';
import '../style/MobCard.css'

const Cards = () => {
  const [visibleCount, setVisibleCount] = useState(20);
  const loaderRef = useRef(null);

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
      {/* {mobsName.map((name, index) => ( */}
      {mobsName.slice(0, visibleCount).map((name, index) => (
        <div key={index} className="mob-card-container text-center">
          <div className='mob-card'>
            <MobImage name={name} />
            <MobName name={name} />
            <MobProperty property={mobs[name][9]} />
            <MobStats name={name} />
            <MobMap name={name}></MobMap>
            <MobDrop name={name} />
          </div>
        </div>
      ))}

      <div ref={loaderRef} style={{ height: '1px' }} />
    </div>
  );
};

export default Cards;
