import { useState, useRef, useEffect } from 'react';
import mobs from '../data/validNames.json';
import MobCard from '../components/MobCard';

const Cards = () => {
  const [visibleCount, setVisibleCount] = useState(20);
  const loaderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount(prev =>
            Math.min(prev + 10, mobs.length)
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
      {mobs.slice(0, visibleCount).map((name, index) => (
        <MobCard key={index} name={name} />
      ))}

      <div ref={loaderRef} style={{ height: '1px' }} />
    </div>
  );
};

export default Cards;
