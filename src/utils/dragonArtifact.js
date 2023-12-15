const base_pool = {
    '傳說寶冠': {'傳說龍珠': 1, '傳說龍角': 1, '傳說萬年寒玉': 50, '龍鐵': 5000, '黑鐵': 50000000},
    '英雄寶冠': {'英雄龍珠': 1, '英雄龍角': 1, '英雄萬年寒玉': 30, '龍鐵': 500, '黑鐵': 5000000},
    '稀有寶冠': {'稀有龍珠': 1, '稀有龍角': 1, '稀有萬年寒玉': 10, '龍鐵': 50, '黑鐵': 500000},
    '傳說神笏': {'傳說龍珠': 1, '傳說龍鱗': 1, '傳說萬年鋼鐵': 50, '龍鐵': 5000, '黑鐵': 50000000},
    '英雄神笏': {'英雄龍珠': 1, '英雄龍鱗': 1, '英雄萬年鋼鐵': 30, '龍鐵': 500, '黑鐵': 5000000},
    '稀有神笏': {'稀有龍珠': 1, '稀有龍鱗': 1, '稀有萬年鋼鐵': 10, '龍鐵': 50, '黑鐵': 500000},
    '傳說翼裝': {'傳說龍珠': 1, '傳說龍皮': 1, '傳說萬年寒鐵': 50, '龍鐵': 5000, '黑鐵': 50000000},
    '英雄翼裝': {'英雄龍珠': 1, '英雄龍皮': 1, '英雄萬年寒鐵': 30, '龍鐵': 500, '黑鐵': 5000000},
    '稀有翼裝': {'稀有龍珠': 1, '稀有龍皮': 1, '稀有萬年寒鐵': 10, '龍鐵': 50, '黑鐵': 500000},
    '傳說印': {'傳說龍珠': 1, '傳說龍爪': 1, '傳說萬年鋼鐵': 50, '龍鐵': 5000, '黑鐵': 50000000},
    '英雄印': {'英雄龍珠': 1, '英雄龍爪': 1, '英雄萬年鋼鐵': 30, '龍鐵': 500, '黑鐵': 5000000},
    '稀有印': {'稀有龍珠': 1, '稀有龍爪': 1, '稀有萬年鋼鐵': 10, '龍鐵': 50, '黑鐵': 500000},
    '傳說天書': {'傳說龍珠': 1, '傳說龍眼': 1, '傳說萬年寒玉': 50, '龍鐵': 5000, '黑鐵': 50000000},
    '英雄天書': {'英雄龍珠': 1, '英雄龍眼': 1, '英雄萬年寒玉': 30, '龍鐵': 500, '黑鐵': 5000000},
    '稀有天書': {'稀有龍珠': 1, '稀有龍眼': 1, '稀有萬年寒玉': 10, '龍鐵': 50, '黑鐵': 500000},
    '傳說龍珠': null,
    '英雄龍珠': null,
    '傳說龍角': null,
    '英雄龍角': null,
    '傳說月陰石': {'英雄月陰石': 10, '閃粉': 125, '黑鐵': 25000, '銅幣': 100000},
    '傳說邪念珠': {'英雄邪念珠': 10, '閃粉': 125, '黑鐵': 25000, '銅幣': 100000},
    '傳說伏魔神珠': {'英雄伏魔神珠': 10, '閃粉': 125, '黑鐵': 25000, '銅幣': 100000},
    '傳說武魂': {'英雄武魂': 10, '閃粉': 125, '黑鐵': 25000, '銅幣': 100000},
    '傳說靈石': {'英雄靈石': 10, '閃粉': 125, '黑鐵': 25000, '銅幣': 100000},
    '傳說礦片': {'英雄礦片': 10, '閃粉': 125, '黑鐵': 25000, '銅幣': 100000},
    '傳說鋼鐵': {'英雄鋼鐵': 10, '閃粉': 125, '黑鐵': 25000, '銅幣': 100000},
    '傳說白金': {'英雄白金': 10, '閃粉': 125, '黑鐵': 25000, '銅幣': 100000},
    '英雄月陰石': {'稀有月陰石': 10, '閃粉': 25, '黑鐵': 5000, '銅幣': 20000},
    '英雄邪念珠': {'稀有邪念珠': 10, '閃粉': 25, '黑鐵': 5000, '銅幣': 20000},
    '英雄伏魔神珠': {'稀有伏魔神珠': 10, '閃粉': 25, '黑鐵': 5000, '銅幣': 20000},
    '英雄武魂': {'稀有武魂': 10, '閃粉': 25, '黑鐵': 5000, '銅幣': 20000},
    '英雄靈石': {'稀有靈石': 10, '閃粉': 25, '黑鐵': 5000, '銅幣': 20000},
    '英雄礦片': {'稀有礦片': 10, '閃粉': 25, '黑鐵': 5000, '銅幣': 20000},
    '英雄鋼鐵': {'稀有鋼鐵': 10, '閃粉': 25, '黑鐵': 5000, '銅幣': 20000},
    '英雄白金': {'稀有白金': 10, '閃粉': 25, '黑鐵': 5000, '銅幣': 20000},
    '稀有月陰石': {'高級月陰石': 10, '閃粉': 5, '黑鐵': 1000, '銅幣': 2000},
    '稀有邪念珠': {'高級邪念珠': 10, '閃粉': 5, '黑鐵': 1000, '銅幣': 2000},
    '稀有伏魔神珠': {'高級伏魔神珠': 10, '閃粉': 5, '黑鐵': 1000, '銅幣': 2000},
    '稀有武魂': {'高級武魂': 10, '閃粉': 5, '黑鐵': 1000, '銅幣': 2000},
    '稀有靈石': {'高級靈石': 10, '閃粉': 5, '黑鐵': 1000, '銅幣': 2000},
    '稀有礦片': {'高級礦片': 10, '閃粉': 5, '黑鐵': 1000, '銅幣': 2000},
    '稀有鋼鐵': {'高級鋼鐵': 10, '閃粉': 5, '黑鐵': 1000, '銅幣': 2000},
    '稀有白金': {'高級白金': 10, '閃粉': 5, '黑鐵': 1000, '銅幣': 2000},
    '高級月陰石': null,
    '高級邪念珠': null,
    '高級伏魔神珠': null,
    '高級武魂': null,
    '高級靈石': null,
    '高級礦片': null,
    '高級鋼鐵': null,
    '高級白金': null,
    '傳說萬年鋼鐵': {'傳說鋼鐵': 20, '傳說邪念珠': 20, '傳說月陰石': 20, '傳說冰晶石': 10, '黑鐵': 250000, '龍鐵': 25},
    '英雄萬年鋼鐵': {'英雄鋼鐵': 20, '英雄邪念珠': 20, '英雄月陰石': 20, '英雄冰晶石': 10, '黑鐵': 50000, '龍鐵': 5},
    '稀有萬年鋼鐵': {'稀有鋼鐵': 20, '稀有邪念珠': 20, '稀有月陰石': 20, '稀有冰晶石': 10, '黑鐵': 10000, '龍鐵': 1},
    '傳說萬年寒鐵': {'傳說鋼鐵': 20, '傳說伏魔神珠': 20, '傳說武魂': 20, '傳說冰晶石': 10, '黑鐵': 250000, '龍鐵': 25},
    '英雄萬年寒鐵': {'英雄鋼鐵': 20, '英雄伏魔神珠': 20, '英雄武魂': 20, '英雄冰晶石': 10, '黑鐵': 50000, '龍鐵': 5},
    '稀有萬年寒鐵': {'稀有鋼鐵': 20, '稀有伏魔神珠': 20, '稀有武魂': 20, '稀有冰晶石': 10, '黑鐵': 10000, '龍鐵': 1},
    '傳說萬年寒玉': {'傳說白金': 20, '傳說礦片': 20, '傳說靈石': 20, '傳說冰晶石': 10, '黑鐵': 250000, '龍鐵': 25},
    '英雄萬年寒玉': {'英雄白金': 20, '英雄礦片': 20, '英雄靈石': 20, '英雄冰晶石': 10, '黑鐵': 50000, '龍鐵': 5},
    '稀有萬年寒玉': {'稀有白金': 20, '稀有礦片': 20, '稀有靈石': 20, '稀有冰晶石': 10, '黑鐵': 10000, '龍鐵': 1},
    '傳說冰晶石': {'英雄冰晶石': 10, '閃粉': 250, '生命精華': 250, '銅幣': 1000000},
    '英雄冰晶石': {'稀有冰晶石': 10, '閃粉': 50, '生命精華': 50, '銅幣': 100000},
    '稀有冰晶石': {'高級冰晶石': 10, '閃粉': 5, '生命精華': 5, '銅幣': 10000},
    '高級冰晶石': null,
    '閃粉': null,
    '黑鐵': null,
    '銅幣': null,
    '生命精華': null,
    '龍鐵': null,
};


class MaterialPool {
    constructor(pool) {
        this.pool = pool;
    }

    extractMaterials(item, quantity = 1, stopKeywords = []) {
        let materials = {};
        const dependencies = this.pool[item];

        if (dependencies !== null && dependencies !== undefined && !stopKeywords.includes(item)) {
            if (typeof dependencies === 'object') {
                for (const [material, count] of Object.entries(dependencies)) {
                    const extractedMaterials = this.extractMaterials(material, count * quantity, stopKeywords);
                    materials = this.mergeMaterials(materials, extractedMaterials);
                }
            } else {
                const extractedMaterials = this.extractMaterials(dependencies, quantity, stopKeywords);
                materials = this.mergeMaterials(materials, extractedMaterials);
            }
        } else {
            materials[item] = quantity;
        }

        return materials;
    }

    mergeMaterials(materials1, materials2) {
        const mergedMaterials = {...materials1};

        for (const [material, count] of Object.entries(materials2)) {
            if (material in mergedMaterials) {
                mergedMaterials[material] += count;
            } else {
                mergedMaterials[material] = count;
            }
        }

        return mergedMaterials;
    }
}

// const commonPool = new MaterialPool(base_pool);
// const commonMaterials = commonPool.extractMaterials('英雄鋼鐵', 1, ['傳說鋼鐵','傳說月陰石','傳說邪念珠','傳說伏魔神珠','傳說武魂','傳說礦片','傳說靈石','傳說白金','傳說冰晶石']);
// const rareMaterials = rarePool.extractMaterials('英雄萬年寒玉', 30);
// const epicMaterials = epicPool.extractMaterials('英雄萬年寒玉', 1);
// const legendaryMaterials = legendaryPool.extractMaterials('傳說寶冠', 1);
// console.log(commonMaterials);

const inventoryBase = [
    {name: '萬年鋼鐵', show_name: '萬年鋼鐵'},
    {name: '萬年寒鐵', show_name: '萬年寒鐵'},
    {name: '萬年寒玉', show_name: '萬年寒玉'},
    {name: '月陰石', show_name: '月陰石'},
    {name: '邪念珠', show_name: '邪念珠'},
    {name: '伏魔神珠', show_name: '伏魔神珠'},
    {name: '武魂', show_name: '武魂'},
    {name: '靈石', show_name: '靈石'},
    {name: '礦片', show_name: '礦片'},
    {name: '鋼鐵', show_name: '鋼鐵'},
    {name: '白金', show_name: '白金'},
    {name: '冰晶石', show_name: '冰晶石'},
];

export function getInventoriesInit(SelectLevel, DragonArtifactOption) {
    const levelMapping = {
        'Legendary': '傳說',
        'Epic': '英雄',
        'Rare': '稀有',
        'Uncommon': '高級'
    };

    const showInventoryColumnMap = {
        '神笏': ['萬年鋼鐵', '月陰石', '邪念珠', '鋼鐵', '冰晶石'],
        '印': ['萬年鋼鐵', '月陰石', '邪念珠', '鋼鐵', '冰晶石'],
        '寶冠': ['萬年寒玉', '礦片', '靈石', '白金', '冰晶石'],
        '天書': ['萬年寒玉', '礦片', '靈石', '白金', '冰晶石'],
        '翼裝': ['萬年寒鐵', '武魂', '伏魔神珠', '鋼鐵', '冰晶石']
    };

    const showInventoryColumn = showInventoryColumnMap[DragonArtifactOption] || [];

    const skipLevelMap = {
        '傳說': [],
        '英雄': ['Legendary'],
        '稀有': ['Legendary', 'Epic'],
        '高級': ['Legendary', 'Epic', 'Rare']
    };
    const uncommonMaterials = ['萬年鋼鐵', '萬年寒玉', '萬年寒鐵'];
    const skipLevel = skipLevelMap[SelectLevel] || ['Legendary', 'Epic', 'Rare', 'Uncommon'];

    const inventoryNum = Object.keys(levelMapping).reduce((result, level) => {
        if (skipLevel.includes(level) || !showInventoryColumn.length) {
            return result;
        }

        const inventoryItems = showInventoryColumn.map(item => {
            // 如果是 Uncommon 等級，而且物品是 ['萬年鋼鐵', '萬年寒玉', '萬年寒鐵']，則跳過
            if (level === 'Uncommon' && uncommonMaterials.includes(item)) {
                return null;
            }

            return {
                show_name: `${levelMapping[level]}${item}`,
                name: `${level}${item}`,
                level: level,
                class: item,
                value: null
            };
        });

        // 过滤掉为 null 的项目
        const filteredInventoryItems = inventoryItems.filter(item => item !== null);

        result.push(filteredInventoryItems);

        return result;
    }, []);

    inventoryNum.push([
        {show_name: '龍鐵', name: '龍鐵', level: 'Uncommon', class: '龍鐵', value: null},
        {show_name: '黑鐵', name: '黑鐵', level: 'Uncommon', class: '黑鐵', value: null},
        {show_name: '生命精華', name: '生命精華', level: 'Uncommon', class: '生命精華', value: null},
        {show_name: '閃粉', name: '閃粉', level: 'Uncommon', class: '閃粉', value: null},
        {show_name: '銅幣', name: '銅幣', level: 'Uncommon', class: '銅幣', value: null},
    ]);

    return inventoryNum;
}

// console.log(getInventoriesInit('Legendary','神笏'));
export function getDragonArtifactMaterial(Level, item, num = 1) {
    const materialKey = Level + item;
    const materialPool = new MaterialPool(base_pool);
    let stopTarget = [];

    switch (item) {
        case "神笏":
        case "印":
            stopTarget.push(Level + "萬年鋼鐵");
            break;
        case "寶冠":
        case "天書":
            stopTarget.push(Level + "萬年寒玉");
            break;
        case "翼裝":
            stopTarget.push(Level + "萬年寒鐵");
            break;
        default:
            break;
    }
    return materialPool.extractMaterials(materialKey, num, stopTarget);
}

// console.log(getDragonArtifactMaterial('英雄', '天書', 2));

function getMaterialPool(TargetLevel) {
    const levelListMap = {
        '傳說': ['傳說', '英雄', '稀有', '高級'],
        '英雄': ['英雄', '稀有', '高級'],
        '稀有': ['稀有', '高級'],
        '高級': ['高級']
    };
    const levelMap = {
        '傳說': ['傳說鋼鐵', '傳說月陰石', '傳說邪念珠', '傳說伏魔神珠', '傳說武魂', '傳說礦片', '傳說靈石', '傳說白金', '傳說冰晶石'],
        '英雄': ['英雄鋼鐵', '英雄月陰石', '英雄邪念珠', '英雄伏魔神珠', '英雄武魂', '英雄礦片', '英雄靈石', '英雄白金', '英雄冰晶石'],
        '稀有': ['稀有鋼鐵', '稀有月陰石', '稀有邪念珠', '稀有伏魔神珠', '稀有武魂', '稀有礦片', '稀有靈石', '稀有白金', '稀有冰晶石'],
        '高級': ['高級鋼鐵', '高級月陰石', '高級邪念珠', '高級伏魔神珠', '高級武魂', '高級礦片', '高級靈石', '高級白金', '高級冰晶石']
    };

    return levelListMap[TargetLevel].map(level => levelMap[level]);
}

function getNeedFromLevel(TargetLevel, currentCalcLevel, TargetMaterial) {
    const materialMap = {
        '萬年鋼鐵': [
            ['傳說鋼鐵', '傳說月陰石', '傳說邪念珠', '傳說冰晶石'],
            ['英雄鋼鐵', '英雄月陰石', '英雄邪念珠', '英雄冰晶石'],
            ['稀有鋼鐵', '稀有月陰石', '稀有邪念珠', '稀有冰晶石'],
            ['高級鋼鐵', '高級月陰石', '高級邪念珠', '高級冰晶石']
        ],
        '萬年寒鐵': [
            ['傳說鋼鐵', '傳說伏魔神珠', '傳說武魂', '傳說冰晶石'],
            ['英雄鋼鐵', '英雄伏魔神珠', '英雄武魂', '英雄冰晶石'],
            ['稀有鋼鐵', '稀有伏魔神珠', '稀有武魂', '稀有冰晶石'],
            ['高級鋼鐵', '高級伏魔神珠', '高級武魂', '高級冰晶石']
        ],
        '萬年寒玉': [
            ['傳說白金', '傳說礦片', '傳說靈石', '傳說冰晶石'],
            ['英雄白金', '英雄礦片', '英雄靈石', '英雄冰晶石'],
            ['稀有白金', '稀有礦片', '稀有靈石', '稀有冰晶石'],
            ['高級白金', '高級礦片', '高級靈石', '高級冰晶石']
        ]
    };

    const materials = materialMap[TargetMaterial.match(/(萬年鋼鐵|萬年寒鐵|萬年寒玉)/)[0]];
    if (TargetLevel !== '傳說') {
        materials.shift();
        if (TargetLevel !== '英雄') {
            materials.shift();
            if (TargetLevel !== '稀有') {
                materials.shift();
            }
        }
    }

    let need = [];
    // currentCalcLevel = 1 or 2 or 3 or 4
    // 傳說 = 0, 英雄 = 1, 稀有 = 2, 高級 = 3
    for (let i = 0; i <= currentCalcLevel; i++) {
        need = need.concat(materials[i]);
    }
    // 主要龍神器材料大家都要算
    need.push(TargetMaterial);

    return need;
}


function getInventoryCost(materialPool, totalInventory, stopTarget, calcInventoryColumn, wholeNeeded) {
    let inventoryCost = {};
    // 通貨
    let currency = ['龍鐵', '黑鐵', '生命精華', '閃粉', '銅幣'];
    totalInventory.flat().forEach(item => {
        if ([...currency, ...calcInventoryColumn].includes(item.show_name)) {
            if (item.value >= wholeNeeded[item.show_name] && !currency.includes(item.show_name) ) {
                if (item.show_name.includes(['萬年鋼鐵', '萬年寒鐵', '萬年寒玉']) && wholeNeeded[item.show_name] > 0) {
                    item.value = wholeNeeded[item.show_name];
                }
                item.value = wholeNeeded[item.show_name];
            }
            const needMaterials = materialPool.extractMaterials(item.show_name, item.value, stopTarget);
            Object.assign(inventoryCost, dictAdd(needMaterials, inventoryCost));
        }
    });

    return inventoryCost;
}

// two dict add
function dictAdd(dict1, dict2) {
    let result = {};
    for (let key in dict1) {
        if (dict2[key] !== undefined) {
            result[key] = dict1[key] + dict2[key];
        } else {
            result[key] = dict1[key];
        }
    }
    return result;
}

function dictMinus(dict1, dict2) {
    let result = {};
    for (let key in dict1) {
        if (dict2[key] !== undefined) {
            result[key] = (dict1[key] - dict2[key]) > 0 ? dict1[key] - dict2[key] : 0;
        } else {
            result[key] = dict1[key];
        }
    }
    return result;
}

// 整理所需材料的順序
function sortMaterial(material) {
    return Object.fromEntries(Object.entries(material).sort((a, b) => b[0].length - a[0].length));
}


export function getEachLevelMaterialFromPool(TargetLevel, TargetMaterial, TargetNum, totalInventory) {

    const materialPool = new MaterialPool(base_pool);
    const stopTarget = getMaterialPool(TargetLevel);
    let material = [];

    for (let i = 0; i < stopTarget.length; i++) {
        // sort by key
        let currentCalcLevel = i;
        let wholeNeeded = materialPool.extractMaterials(TargetMaterial, TargetNum, stopTarget[i]);
        const calcInventoryColumn = getNeedFromLevel(TargetLevel, currentCalcLevel, TargetMaterial);
        let totalHave = getInventoryCost(materialPool, totalInventory, stopTarget[i], calcInventoryColumn,wholeNeeded);

        let sortedResult = sortMaterial(dictMinus(wholeNeeded, totalHave));

        material.push(sortedResult);
        if (material[TargetMaterial] !== undefined) {
            break;
        }
    }
    return material;
}


// const totalInventoryTest = [
//     [
//         {show_name: '傳說鋼鐵', name: '傳說鋼鐵', level: 'Legendary', class: '傳說鋼鐵', value: 0},
//         {show_name: '英雄鋼鐵', name: '英雄鋼鐵', level: 'Epic', class: '英雄鋼鐵', value: 601},
//         {show_name: '稀有鋼鐵', name: '稀有鋼鐵', level: 'Rare', class: '稀有鋼鐵', value: 0},
//         {show_name: '高級鋼鐵', name: '高級鋼鐵', level: 'common', class: '高級鋼鐵', value: null},
//     ],
//     [
//         {show_name: '龍鐵', name: '龍鐵', level: 'Uncommon', class: '龍鐵', value: 800},
//         {show_name: '黑鐵', name: '黑鐵', level: 'Uncommon', class: '黑鐵', value: null},
//         {show_name: '生命精華', name: '生命精華', level: 'Uncommon', class: '生命精華', value: null},
//         {show_name: '閃粉', name: '閃粉', level: 'Uncommon', class: '閃粉', value: 0},
//         {show_name: '銅幣', name: '銅幣', level: 'Uncommon', class: '銅幣', value: null},
//     ],
//     [
//         {show_name: '傳說萬年鋼鐵', name: '傳說萬年鋼鐵', level: 'Legendary', class: '傳說萬年鋼鐵', value: null},
//         {show_name: '英雄萬年鋼鐵', name: '英雄萬年鋼鐵', level: 'Epic', class: '英雄萬年鋼鐵', value: null},
//         {show_name: '稀有萬年鋼鐵', name: '稀有萬年鋼鐵', level: 'Rare', class: '稀有萬年鋼鐵', value: null},
//     ],
//
// ];
//
// console.log(getEachLevelMaterialFromPool('英雄', '英雄萬年鋼鐵', 30, totalInventoryTest));


