import items from '../data/item_tmp.json';
import alias from '../data/alias.json';
import dropData from '../data/drop_data_tmp.json'


class Data {
    constructor() {
        this.itemCodeDict = items
        this.itemDict = {}
        this.itemDrop = {}
        this.itemCategoryMap = {};
        this.__reverseItemKeyValue();
        this.__processData()
    }

    __reverseItemKeyValue() {
        Object.entries(items).forEach(([key, value]) => {
            this.itemDict[value] = parseInt(key); // 反轉 key-value 對
        });
    }

    __categorizeItem(item) {
        if (this.itemCategoryMap[item]) return this.itemCategoryMap[item];

        const itemCode = this.itemDict[item];
        if (!itemCode) return null;

        let category = null;
        if (itemCode >= 1000001 && itemCode <= 1999999) {
            category = 'equipment';
        } else if ((itemCode >= 2060000 && itemCode <= 2079999) || (itemCode >= 2330000 && itemCode <= 2339999)) {
            category = 'specialEquipment';
        } else if (itemCode >= 2040000 && itemCode <= 2049999) {
            category = 'scroll';
        } else if (itemCode >= 2000000 && itemCode <= 2999999) {
            category = 'consumable';
        } else if (itemCode >= 4000000 && itemCode <= 4999999) {
            category = 'material';
        }

        this.itemCategoryMap[item] = category;
        return category;
    }

    __getDisplayName(item) {
        const aliasName = alias[item];
        return aliasName ? `${item} (${aliasName})` : item;
    }

    __processData() {
        const data = Object.entries(dropData);

        for (const [name, items] of data) {
            const categorized = {
                equipment: [],
                specialEquipment: [],
                scroll: [],
                consumable: [],
                material: []
            };

            for (const item of items) {
                const category = this.__categorizeItem(item);
                if (category && categorized[category]) {
                    const displayName = this.__getDisplayName(item);
                    categorized[category].push({
                        name: item,
                        displayName: displayName
                    });
                }
            }

            // ✅ 移到資料填入後再排序 scroll
            categorized.scroll.sort((a, b) => {
                const getPercent = (str) => {
                    const match = str.displayName.match(/(\d+)%/);
                    return match ? parseInt(match[1], 10) : 0;
                };
                return getPercent(b) - getPercent(a); // 若你要大到小
            });

            const equipment = [...categorized.equipment, ...categorized.specialEquipment];
            const consumables = [...categorized.consumable, ...categorized.scroll];
            const materials = categorized.material;

            this.itemDrop[name] = [
                { title: 'equipments', items: equipment },
                { title: 'materials', items: materials },
                { title: 'consumables', items: consumables },
            ];
        }
    }

    getItemDict() {
        return this.itemDict
    }

    getItemList(name) {
        return dropData[name]
    }

    getItemDrops(name) {
        return this.itemDrop[name]
    }

    highlightKeyword(text, keyword) {
        if (!keyword) return text;
        const regex = new RegExp(`(${keyword})`, 'gi');
        const parts = text.split(regex);

        return parts.map((part, index) =>
            part.toLowerCase() === keyword.toLowerCase() ? (
                <span key={index} className="highlight">{part}</span>
            ) : (
                part
            )
        );
    }
}

const helper = new Data();
export default helper