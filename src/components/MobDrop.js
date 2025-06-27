import { useMemo } from 'react';
import drops from '../data/drop_data_tmp.json';
import helper from '../init/helpers';

const MobDrop = ({ name }) => {
    const categorizedItems = useMemo(() => {
        const itemDict = helper.getItemDict();
        const itemList = drops[name] || [];

        const equipment = [];
        const specialEquipment = []; // arrow, shuriken, bullet
        const scrolls = []; // 
        const consumables = [];
        const materials = [];

        for (const item of itemList) {
            const itemCode = itemDict[item];
            if (itemCode >= 1000001 && itemCode <= 1999999) {
                equipment.push(item);
            } else if ((itemCode >= 2060000 && itemCode <= 2079999) || (itemCode >= 2330000 && itemCode <= 2339999)) {
                specialEquipment.push(item);
            } else if (itemCode >= 2330000 && itemCode <= 2339999) {
                equipment.push(item);
            } else if (itemCode >= 2040000 && itemCode <= 2049999) {
                scrolls.push(item);
            } else if (itemCode >= 2000000 && itemCode <= 2999999) {
                consumables.push(item);
            } else if (itemCode >= 4000000 && itemCode <= 4999999) {
                materials.push(item);
            }
        }

        scrolls.sort((a, b) => {
            const getPercent = (str) => {
                const match = str.match(/(\d+)%/);
                return match ? parseInt(match[1], 10) : 0;
            };
            return getPercent(a) - getPercent(b);
        });
        equipment.push(...specialEquipment);
        consumables.push(...scrolls);

        return [
            { title: 'equipments', items: equipment },
            { title: 'materials', items: materials },
            { title: 'consumables', items: consumables },
            // { title: 'scrolls', items: scrolls }
        ]
    }, [name]);

    return (
        <>
            {categorizedItems.map(({ title, items }) => (
                items.length > 0 && (
                    <div key={title} className={`drop-item-${title} drop-category`} >
                        {items.map((item, index) => (
                            <div key={`${title}-${index}`} className={`drop-item`}>
                                <img
                                    className='drop-item-img'
                                    src={`${process.env.PUBLIC_URL}/images/${encodeURIComponent(item)}.png`}
                                    alt={item}
                                />
                                <span className='drop-item-name'>{item}</span>
                            </div>
                        ))}
                    </div>
                )
            ))}
        </>
    );
};

export default MobDrop;