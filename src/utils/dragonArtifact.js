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
    '英雄冰晶石': null,
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

  extractMaterials(item, quantity = 1) {
    let materials = {};
    const dependencies = this.pool[item];

    if (dependencies !== null && dependencies !== undefined) {
      if (typeof dependencies === 'object') {
        for (const [material, count] of Object.entries(dependencies)) {
          const extractedMaterials = this.extractMaterials(material, count * quantity);
          materials = this.mergeMaterials(materials, extractedMaterials);
        }
      } else {
        const extractedMaterials = this.extractMaterials(dependencies, quantity);
        materials = this.mergeMaterials(materials, extractedMaterials);
      }
    } else {
      materials[item] = quantity;
    }

    return materials;
  }

  mergeMaterials(materials1, materials2) {
    const mergedMaterials = { ...materials1 };

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

class CommonMaterialPool extends MaterialPool {
  constructor() {
    const commonUpdate = {
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
            '英雄冰晶石': {'稀有冰晶石': 10, '閃粉': 50, '生命精華': 50, '銅幣': 100000},
            '稀有冰晶石': {'高級冰晶石': 10, '閃粉': 5, '生命精華': 5, '銅幣': 10000},
            '高級冰晶石': null,
    };
    const commonPool = { ...base_pool, ...commonUpdate };
    super(commonPool);
  }
}

class RareMaterialPool extends MaterialPool {
  constructor() {
    const rareUpdate = {
        '英雄月陰石': {'稀有月陰石': 10, '閃粉': 25, '黑鐵': 5000, '銅幣': 20000},
        '英雄邪念珠': {'稀有邪念珠': 10, '閃粉': 25, '黑鐵': 5000, '銅幣': 20000},
        '英雄伏魔神珠': {'稀有伏魔神珠': 10, '閃粉': 25, '黑鐵': 5000, '銅幣': 20000},
        '英雄武魂': {'稀有武魂': 10, '閃粉': 25, '黑鐵': 5000, '銅幣': 20000},
        '英雄靈石': {'稀有靈石': 10, '閃粉': 25, '黑鐵': 5000, '銅幣': 20000},
        '英雄礦片': {'稀有礦片': 10, '閃粉': 25, '黑鐵': 5000, '銅幣': 20000},
        '英雄鋼鐵': {'稀有鋼鐵': 10, '閃粉': 25, '黑鐵': 5000, '銅幣': 20000},
        '英雄白金': {'稀有白金': 10, '閃粉': 25, '黑鐵': 5000, '銅幣': 20000},
        '稀有月陰石': null,
        '稀有邪念珠': null,
        '稀有伏魔神珠': null,
        '稀有武魂': null,
        '稀有靈石': null,
        '稀有礦片': null,
        '稀有鋼鐵': null,
        '稀有白金': null,
        '英雄冰晶石': {'稀有冰晶石': 10, '閃粉': 50, '生命精華': 50, '銅幣': 100000},
        '稀有冰晶石': null,
        '稀有萬年鋼鐵': null,
        '稀有萬年寒玉': null,
        '稀有萬年寒鐵': null,
    };
    const rarePool = { ...base_pool, ...rareUpdate };
    super(rarePool);
  }
}

class EpicMaterialPool extends MaterialPool {
  constructor() {
    const epicUpdate = {
        '英雄月陰石': null,
        '英雄邪念珠': null,
        '英雄伏魔神珠': null,
        '英雄武魂': null,
        '英雄靈石': null,
        '英雄礦片': null,
        '英雄鋼鐵': null,
        '英雄白金': null,
        '英雄冰晶石': null,
        '英雄萬年鋼鐵': null,
        '英雄萬年寒玉': null,
        '英雄萬年寒鐵': null,
    };
    const epicPool = { ...base_pool, ...epicUpdate };
    super(epicPool);
  }
}

class LegendaryMaterialPool extends MaterialPool {
  constructor() {
    const legendaryUpdate = {
        '傳說月陰石': null,
        '傳說邪念珠': null,
        '傳說伏魔神珠': null,
        '傳說武魂': null,
        '傳說靈石': null,
        '傳說礦片': null,
        '傳說鋼鐵': null,
        '傳說白金': null,
        '傳說冰晶石': null,
        '傳說萬年鋼鐵': null,
        '傳說萬年寒玉': null,
        '傳說萬年寒鐵': null,

    };
    const legendaryPool = { ...base_pool, ...legendaryUpdate };
    super(legendaryPool);
  }
}

const commonPool = new CommonMaterialPool();
const rarePool = new RareMaterialPool();
const epicPool = new EpicMaterialPool();
const legendaryPool = new LegendaryMaterialPool();

const commonMaterials = commonPool.extractMaterials('英雄萬年寒玉', 30);
const rareMaterials = rarePool.extractMaterials('英雄萬年寒玉', 30);
const epicMaterials = epicPool.extractMaterials('英雄萬年寒玉', 1);
const legendaryMaterials = legendaryPool.extractMaterials('傳說寶冠', 1);


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

export function getInventoriesInit() {
    let inventoryNum = [];
    const level_mapping = [
                {name: 'Legendary', show_name: '傳說'},
                {name: 'Epic', show_name: '英雄'},
                {name: 'Rare', show_name: '稀有'},
                {name: 'Uncommon', show_name: '高級'}
            ];

            inventoryBase.forEach(item => {
                let temp = [];
                level_mapping.forEach(level => {
                  if (['萬年鋼鐵', '萬年寒鐵', '萬年寒玉'].includes(item.name) && level.name === '高級') {
                    return; // Skip the current iteration
                  }
                  temp.push({
                    show_name: `${level.show_name}${item.show_name}`,
                    name: `${level.name}${item.name}`,
                    level: level.name,
                    class: item.name,
                    value: null
                  });
                });
                if (temp.length > 0) {
                  inventoryNum.push(temp);
                }
            });
            inventoryNum.push([
                {show_name: '龍鐵', name: '龍鐵', level: 'Uncommon', class: '龍鐵', value: null},
                {show_name: '黑鐵', name: '黑鐵', level: 'Uncommon', class: '黑鐵', value: null},
                {show_name: '生命精華', name: '生命精華', level: 'Uncommon', class: '生命精華', value: null},
                {show_name: '閃粉', name: '閃粉', level: 'Uncommon', class: '閃粉', value: null},
                {show_name: '銅幣', name: '銅幣', level: 'Uncommon', class: '銅幣', value: null},
            ]);

            return inventoryNum;
}

export function getMaterialFromPool(poolLevel, item, num = 1) {
    // merge the poolLevel and item to get the material
    item = poolLevel + item;
  if (poolLevel === "普通") {
    return commonPool.extractMaterials(item, num);
  } else if (poolLevel === "稀有") {
    return rarePool.extractMaterials(item, num);
  } else if (poolLevel === "英雄") {
    return epicPool.extractMaterials(item, num);
  } else if (poolLevel === "傳說") {
    return legendaryPool.extractMaterials(item, num);
  } else {
    return null;
  }
}

console.log(epicMaterials);