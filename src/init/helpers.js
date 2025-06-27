import items from '../data/item_tmp.json';

class Data {
    constructor() {
        this.itemDict = {}
        this.__reverseItemKeyValue();
    }

    __reverseItemKeyValue() {
        Object.entries(items).forEach(([key, value]) => {
            this.itemDict[value] = parseInt(key); // 反轉 key-value 對
        });
    }

    getItemDict() {
        return this.itemDict;
    }
}

const helper = new Data();
export default helper