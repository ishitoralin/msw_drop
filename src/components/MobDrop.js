import drops from '../data/drop_data_tmp.json';
import itemDict from '../init/drop';

const MobDrop = ({ name }) => {
    const itemList = drops[name] || [];
    const equipment = [];
    const specialEquipment = []; // arrow, shuriken, bullet
    const scrolls = []; // 

    const consumables = [];
    const materials = [];

    const handleSortItems = () => {
        for (const item of itemList) {
            const itemCode = itemDict[item];
            if (itemCode >= 1000001 && itemCode <= 1999999) {
                equipment.push(item);
            } else if (itemCode >= 2060000 && itemCode <= 2079999) {
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

        equipment.push(...specialEquipment);
    };

    handleSortItems();

    const categorizedItems = [
        { title: 'equipments', items: equipment },
        { title: 'consumables', items: consumables },
        { title: 'materials', items: materials },
        { title: 'scrolls', items: scrolls }
    ];

    return (
        <>
            {categorizedItems.map(({ title, items }) => (
                items.length && (
                    <div key={title} className='drop-category'>
                        <div className='drop-items'>
                            {items.map((item, index) => (
                                <div key={index} className='drop-item'>
                                    <img
                                        className='drop-item-img'
                                        src={`${process.env.PUBLIC_URL}/images/${encodeURIComponent(item)}.png`}
                                        alt={item}
                                    />
                                    <span className='drop-item-name'>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            ))}
        </>
    );
};

export default MobDrop;