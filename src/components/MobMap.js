import map from '../data/map.json';
import '../style/MobStats.css'

const MobMap = ({ name }) => {
    const mapDict = map[name]

    return (
        <div className="mob-card-col-lg-map">
            {Object.keys(mapDict).map((item, index) => {
                return (
                    <div key={index} style={{ textAlign: 'left', width: '100%' }}>🗺️{item}</div>
                )
            })}
        </div>
    )
}

export default MobMap