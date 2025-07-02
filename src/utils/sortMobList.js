const fs = require('fs');
const path = require('path');
const mobList = require('../data/mob.json');

const imagePath = path.join(__dirname, '../../public/images');
const dataPath = path.join(__dirname, '../data');

const checkImageExists = (name) => {
    const filePath = path.join(imagePath, `${(name)}.png`);
    return fs.existsSync(filePath);
};

const sortMobList = () => {
    const validNames = Object.entries(mobList)
        .filter(([name]) => checkImageExists(name))
        .map(([name]) => name);

    fs.writeFileSync(
        path.join(dataPath, 'validNames.json'),
        JSON.stringify(validNames, null, 2),
        'utf-8'
    );

};



sortMobList();
