import mobs from '../data/mob.json';

const MobStats = ({ name }) => {
    const [lv, hp, mp, exp, eva, pdf, mdf, acc] = mobs[name];
    
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
        </>
    );
}

export default MobStats;