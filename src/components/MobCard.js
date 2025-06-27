import MobStats from '../components/MobStats';
import MobDrop from '../components/MobDrop';
import bossTime from '../data/boss_time.json';

const MobCard = ({ name }) => {
    const checkBossName = () => {
        if (bossTime[name]) {
            return (
                <div className='mob-card-name '>
                    <span>
                        {name} (BOSS)
                    </span>
                    <span className='boss-card-respawn-time'>
                        ⏳{bossTime[name]}
                    </span>
                </div>
            )
        } else {
            return (<div className='mob-card-name'>{name}</div>)
        }
    }

    return (
        <div className="mob-card-container text-center">
            <div className='mob-card'>
                <div className='mob-card-img-container'>
                    <img
                        className='mob-card-img'
                        src={`${process.env.PUBLIC_URL}/images/${encodeURIComponent(name)}.png`}
                        alt={name}
                    />
                </div>

                {checkBossName()}
                <MobStats name={name} />
                <MobDrop name={name} />
            </div>
        </div>
    );
};

export default MobCard;