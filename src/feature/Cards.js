import mobs from '../data/validNames.json';
import MobCard from '../components/MobCard';

const Cards = () => {
  return (
    <div className='cards-container'>
      {
        mobs.map((name, index) => (
          <MobCard key={index} name={name} />
        ))
      }
    </div>
  );
}

export default Cards;