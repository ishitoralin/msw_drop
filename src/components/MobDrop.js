import { useMemo } from 'react';
import helper from '../utils/helpers';
import '../style/MobDrop.css'

const MobDrop = ({ name, keywords }) => {
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
                                <span className='drop-item-name'>
                                    {helper.highlightKeyword(item.displayName, keywords)}
                                </span>
                            </div>
                        ))}
                    </div>
                )
            ))}
        </>
    );
};

export default MobDrop;