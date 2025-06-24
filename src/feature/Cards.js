import mobs from '../data/mob.json';
import MobStats from '../components/MobStats';

const Cards = () => {
  const mobsName = Object.keys(mobs);
  
  return (
    <>
      <div className="container text-center">
        <div className="row g-3">
          {mobsName.map((name, index) => {
            return (
              <div key={index} className="mob-card-container col col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className='mob-card'>
                  <img src={`/images/${name}.png`} alt={name} ></img>
                  <div className='mob-card-name'>{name}</div>
                  <div>
                    <MobStats name={name}></MobStats>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div >
    </>
  );
}

export default Cards;