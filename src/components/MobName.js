import bossTime from '../data/boss_time.json';
import '../style/MobCard.css'

const MobName = ({ name }) => {
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

export default MobName