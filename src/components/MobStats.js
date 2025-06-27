import mobs from '../data/mob.json';
import map from '../data/map.json';

const MobStats = ({ name }) => {
    const [lv, hp, mp, exp, eva, pdf, mdf, acc] = mobs[name];
    const mapDict = map[name]

    return (
        <>
            <div className="mob-card-col-lg-container">
                <div>等級：{lv}</div>
            </div>
            <div className="mob-card-col-sm-container">
                <div>血量：{hp}</div>
                <div>魔力：{mp}</div>
            </div>
            <div className="mob-card-col-sm-container">
                <div>經驗：{exp}</div>
                <div>迴避：{eva}</div>
            </div>
            <div className="mob-card-col-sm-container">
                <div>物防：{pdf}</div>
                <div>魔防：{mdf}</div>
            </div>
            <div className="mob-card-col-lg-container">
                <div>命中需求：{acc}</div>
            </div>
            <div className="mob-card-col-lg-map">
                {Object.keys(mapDict).map((item, index) => {
                    return (
                        <div key={index} style={{ textAlign: 'left', width: '100%' }}>{item}</div>
                    )
                })}
            </div>
        </>
    );
}

export default MobStats;