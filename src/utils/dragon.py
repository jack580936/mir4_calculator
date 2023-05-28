base_pool = {
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
    '傳說龍珠': None,
    '英雄龍珠': None,
    '傳說龍角': None,
    '英雄龍角': None,
    '傳說月陰石': {'英雄陰石': 10, '閃粉': 125, '黑鐵': 25000, '銅幣': 100000},
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
    '英雄冰晶石': None,
    '閃粉': None,
    '黑鐵': None,
    '銅幣': None,
    '生命精華': None,
    '龍鐵': None,

}


class MaterialPool:
    def __init__(self, pool):
        self.pool = pool

    def extract_materials(self, item, quantity=1):
        materials = {}
        dependencies = self.pool.get(item)

        if dependencies is not None:
            if isinstance(dependencies, dict):
                for material, count in dependencies.items():
                    extracted_materials = self.extract_materials(material, count * quantity)
                    materials = self.merge_materials(materials, extracted_materials)
            else:
                extracted_materials = self.extract_materials(dependencies, quantity)
                materials = self.merge_materials(materials, extracted_materials)
        else:
            materials[item] = quantity

        return materials

    @staticmethod
    def merge_materials(materials1, materials2):
        merged_materials = dict(materials1)

        for material, count in materials2.items():
            if material in merged_materials:
                merged_materials[material] += count
            else:
                merged_materials[material] = count

        return merged_materials


class CommonMaterialPool(MaterialPool):
    def __init__(self):
        common_update = {
            # common pool dictionary here (including the additional keys and changed values)
            '英雄月陰石': {'稀有陰石': 10, '閃粉': 25, '黑鐵': 5000, '銅幣': 20000},
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
            '高級月陰石': None,
            '高級邪念珠': None,
            '高級伏魔神珠': None,
            '高級武魂': None,
            '高級靈石': None,
            '高級礦片': None,
            '高級鋼鐵': None,
            '高級白金': None,
            '英雄冰晶石': {'稀有冰晶石': 10, '閃粉': 50, '生命精華': 50, '銅幣': 100000},
            '稀有冰晶石': {'高級冰晶石': 10, '閃粉': 5, '生命精華': 5, '銅幣': 10000},
            '高級冰晶石': None,
            # additional keys and changed values here
        }
        (common_pool := base_pool.copy()).update(common_update)
        super().__init__(common_pool)


class RareMaterialPool(MaterialPool):
    def __init__(self):
        rare_update = {
            # rare pool dictionary here (same as the common pool without the additional keys and changed values)
            '英雄月陰石': {'稀有陰石': 10, '閃粉': 25, '黑鐵': 5000, '銅幣': 20000},
            '英雄邪念珠': {'稀有邪念珠': 10, '閃粉': 25, '黑鐵': 5000, '銅幣': 20000},
            '英雄伏魔神珠': {'稀有伏魔神珠': 10, '閃粉': 25, '黑鐵': 5000, '銅幣': 20000},
            '英雄武魂': {'稀有武魂': 10, '閃粉': 25, '黑鐵': 5000, '銅幣': 20000},
            '英雄靈石': {'稀有靈石': 10, '閃粉': 25, '黑鐵': 5000, '銅幣': 20000},
            '英雄礦片': {'稀有礦片': 10, '閃粉': 25, '黑鐵': 5000, '銅幣': 20000},
            '英雄鋼鐵': {'稀有鋼鐵': 10, '閃粉': 25, '黑鐵': 5000, '銅幣': 20000},
            '英雄白金': {'稀有白金': 10, '閃粉': 25, '黑鐵': 5000, '銅幣': 20000},
            '稀有月陰石': None,
            '稀有邪念珠': None,
            '稀有伏魔神珠': None,
            '稀有武魂': None,
            '稀有靈石': None,
            '稀有礦片': None,
            '稀有鋼鐵': None,
            '稀有白金': None,
            '英雄冰晶石': {'稀有冰晶石': 10, '閃粉': 50, '生命精華': 50, '銅幣': 100000},
            '稀有冰晶石': None,
            # common pool keys without the additional keys and changed values
        }
        (rare_pool := base_pool.copy()).update(rare_update)
        super().__init__(rare_pool)


class EpicMaterialPool(MaterialPool):
    def __init__(self):
        epic_update = {
            # rare pool dictionary here (same as the common pool without the additional keys and changed values)
            '英雄月陰石': None,
            '英雄邪念珠': None,
            '英雄伏魔神珠': None,
            '英雄武魂': None,
            '英雄靈石': None,
            '英雄礦片': None,
            '英雄鋼鐵': None,
            '英雄白金': None,
            '英雄冰晶石': None,
        }
        (rare_pool := base_pool.copy()).update(epic_update)
        super().__init__(rare_pool)


class LegendaryMaterialPool(MaterialPool):
    def __init__(self):
        legendary_update = {
            '傳說月陰石': None,
            '傳說邪念珠': None,
            '傳說伏魔神珠': None,
            '傳說武魂': None,
            '傳說靈石': None,
            '傳說礦片': None,
            '傳說鋼鐵': None,
            '傳說白金': None,
            '傳說冰晶石': None,
        }
        (legendary_pool := base_pool.copy()).update(legendary_update)
        super().__init__(legendary_pool)


# Usage:
CommonPool = CommonMaterialPool()
RarePool = RareMaterialPool()
EpicPool = EpicMaterialPool()
LegendaryPool = LegendaryMaterialPool()

'''get a pool from argument then use the pool's method to get a material
    like give level = "傳說" and item = "神笏" then use LegendaryPool.get_material(item)
'''


def get_material_from_pool(level, item):
    if level == "普通":
        return CommonPool.extract_materials(item)
    elif level == "稀有":
        return RarePool.extract_materials(item)
    elif level == "史詩":
        return EpicPool.extract_materials(item)
    elif level == "傳說":
        return LegendaryPool.extract_materials(item)
    else:
        return None

print(get_material_from_pool("傳說", "傳說神笏"))