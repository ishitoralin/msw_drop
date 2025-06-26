import mobs from '../data/validNames.json';
import MobCard from '../components/MobCard';

const Cards = () => {
  return (
    <div className="container-fluid text-center">
      <div className="row g-3">
        {mobs.map((name, index) => (
          <MobCard key={index} name={name} />
        ))}
      </div>
    </div >
  );
}

export default Cards;