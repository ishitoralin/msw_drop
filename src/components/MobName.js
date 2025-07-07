import bossTime from '../data/boss_time.json';
import helper from '../utils/helpers';
import '../style/MobCard.css';

const MobName = ({ name, keywords }) => {
    const displayName = helper.highlightKeyword(name, keywords);

    return (
        <div className='mob-card-name'>
            <span style={{ fontSize: '16px' }}>
                {displayName}
                {bossTime[name] && ' (BOSS)'}
            </span>
            {bossTime[name] && (
                <span className='boss-card-respawn-time'>
                    ⏳{bossTime[name]}
                </span>
            )}
        </div>
    );
};

export default MobName;
