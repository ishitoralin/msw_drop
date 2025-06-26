import mobs from '../data/mob.json';
import MobCard from '../components/MobCard';
import MobDrop from '../components/MobDrop';

const Cards = () => {
  const mobsName = Object.keys(mobs);
  
  const itemDict = {}


  return (
    <>
      <div className="container-fluid text-center">
        <div className="row g-3">
          {mobsName.map((name, index) => (
            <MobCard key={index} name={name} itemDict={itemDict} />
          ))}
        </div>
      </div >
    </>
  );
}

export default Cards;