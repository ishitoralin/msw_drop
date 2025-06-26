import items from '../data/item.json';

const itemDict = {};

const reverseItemKeyValue = () => {
    Object.entries(items).forEach(([key, value]) => {
        itemDict[value] = parseInt(key); // 反轉 key-value 對
    });
};

reverseItemKeyValue();

export default itemDict;
