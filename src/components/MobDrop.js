import { useMemo } from 'react';
import drops from '../data/drop_data_tmp.json';
import alias from '../data/alias.json';
import helper from '../init/helpers';
import '../style/MobDrop.css'

const MobDrop = ({ name }) => {
    const categorizedItems = useMemo(() => {
        return helper.getItemDrops(name);
    }, [name]);

    return (
        <>
            {categorizedItems && categorizedItems.map(({ title, items }) => (
                items.length > 0 && (
                    <div key={title} className={`drop-item-${title} drop-category`} >
                        {items.map((item, index) => (
                            <div key={`${title}-${index}`} className={`drop-item`}>
                                <img
                                    className='drop-item-img'
                                    src={`${process.env.PUBLIC_URL}/images/${encodeURIComponent(item.name)}.png`}
                                    alt={item.displayName}
                                />
                                <span className='drop-item-name'>{item.displayName}</span>
                            </div>
                        ))}
                    </div>
                )
            ))}
        </>
    );
};

export default MobDrop;