import { useState } from 'react';
import MobStats from '../components/MobStats';
import MobDrop from '../components/MobDrop';

const MobCard = ({ name }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleError = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="mob-card-container col col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div className='mob-card'>
                <div>
                    <img
                        className='mob-card-img-container'
                        src={`${process.env.PUBLIC_URL}/images/${encodeURIComponent(name)}.png`}
                        alt={name}
                        onError={handleError}
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