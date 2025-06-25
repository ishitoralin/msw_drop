import mobs from '../data/mob.json';
import MobCard from '../components/MobCard';

const Cards = () => {
  const mobsName = Object.keys(mobs);

  return (
    <>
      <div className="container-fluid text-center">
        <div className="row g-3">
          {mobsName.map((name, index) => (
            <MobCard key={index} name={name} />
          ))}
        </div>
      </div >
    </>
  );
}

export default Cards;