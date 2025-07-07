import { useState } from 'react';
import mapData from '../data/map.json';
import area from '../data/area.json';
import mapException from '../data/map_exception.json'
import '../style/MobMap.css';

const MobMap = ({ name }) => {
    const [showMap, setShowMap] = useState(false);
    const mapDict = mapData[name];
    if (!mapDict) return null;


    const handleShowMap = () => {
        setShowMap(!showMap);
    };

    const handleHideInvalidMap = () => {
        const result = []
        for (const [map, area] of Object.entries(mapDict)) {
            if (!mapException[map]) {
                result.push(
                    <div key={map} className='mob-map-item'>
                        🗺️{map}
                    </div>
                )
            }
        }

        return result
    }

    return (
        <div className='map-container'>
            <button className='show-map-button' onClick={handleShowMap}>
                {!showMap ? <i className="bi bi-caret-right" /> : <i className="bi bi-caret-down" />} 出現地圖
            </button>

            {showMap && (
                <div className="mob-card-col-lg-map">
                    {handleHideInvalidMap()}
                </div>
            )}
        </div>
    );
};

export default MobMap;
