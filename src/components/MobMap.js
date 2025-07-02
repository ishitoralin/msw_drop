import { useState } from 'react';
import map from '../data/map.json';
import '../style/MobMap.css';

const MobMap = ({ name }) => {
    const mapDict = map[name];
    const [showMap, setShowMap] = useState(false);

    const handleShowMap = () => {
        setShowMap(!showMap);
    };

    if (!mapDict) return null;

    return (
        <div className='map-container'>
            <button className='show-map-button' onClick={handleShowMap}>
                {!showMap ? <i className="bi bi-caret-right" /> : <i className="bi bi-caret-down" />} 出現地圖
            </button>

            {showMap && (
                <div className="mob-card-col-lg-map">
                    {Object.keys(mapDict).map((item, index) => (
                        <div key={index} style={{ textAlign: 'left', width: '100%' }}>
                            🗺️{item}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MobMap;
