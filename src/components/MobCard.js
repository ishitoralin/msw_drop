import { useState } from 'react';
import MobStats from '../components/MobStats';

const MobCard = ({ name }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleError = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="mob-card-container col col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
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
            </div>
        </div>
    );
};

export default MobCard;