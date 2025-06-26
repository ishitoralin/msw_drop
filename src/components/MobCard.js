import MobStats from '../components/MobStats';
import MobDrop from '../components/MobDrop';

const MobCard = ({ name }) => {
    return (
        <div className="mob-card-container col col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div className='mob-card'>
                <div className='mob-card-img-container'>
                    <img
                        className='mob-card-img'
                        src={`${process.env.PUBLIC_URL}/images/${encodeURIComponent(name)}.png`}
                        alt={name}
                    />
                </div>
                <div className='mob-card-name'>{name}</div>
                <MobStats name={name} />
                <MobDrop name={name} />
            </div>
        </div>
    );
};

export default MobCard;