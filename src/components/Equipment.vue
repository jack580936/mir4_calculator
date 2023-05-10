<script setup>
</script>

<template>
    <div class="epic_equipment tab_page_bg container-fluid">
        <div class="row col-12">
            <div id="equipment" class="col-12 col-xl-6">
                <div id="equipment_num" class="equipment_num mb-3 col-12 col-xl-6 ">
                    <h4 class="col-12">製作數量</h4>
                    <template v-for="item in list" class="material">
                        <div class="input-group input-group-sm">
                          <img :src="getImageUrl(`${item.key}.png`)" :class="`input-group img-thumbnail ${this.ClassName}`" alt="...">
                          <label class="input-group-text">{{ item.name }} </label>
                          <button class="btn add-btn" type="button" @mousedown="startCount(item,100, $event)" @mouseup="stopInterval" @mouseleave="stopInterval">+</button>
                          <input v-model.number="item.value" :min="minimum" :max="maximum"
                                 oninput="validity.valid||(value='');" class="form-control" type="number">
                          <button class="btn minus-btn" type="button" @mousedown="startDecrement(item,0,$event)" @mouseup="stopInterval" @mouseleave="stopInterval">-</button>
                        </div>
                    </template>
                </div>
                <h4 class="col-12">庫存</h4>
                <template v-for="material_category in init_inventory">
                    <div class="inventory mb-3 col-12 col-sm-6 col-xl-6 col-xxl-4">
                        <template v-for="(material,index) in material_category" :key="index">
                          <div class="input-group input-group-sm">
                            <img :src="getImageUrl(`${material.class}.png`)" :class="`input-group img-thumbnail ${material.level}`"
                                 alt>
                            <label class="input-group-text">{{ material.show_name }}</label>
                            <button class="btn add-btn" type="button" @mousedown="startCount(material,0 ,$event)" @mouseup="stopInterval" @mouseleave="stopInterval">+</button>
                            <input v-model.number="material.value" :min="minimum"
                                   oninput="validity.valid||(value='');"
                                   class="form-control" type="number">
                            <button class="btn minus-btn" type="button" @mousedown="startDecrement(material,0 ,$event)" @mouseup="stopInterval" @mouseleave="stopInterval">-</button>
                          </div>
                        </template>
                    </div>
                </template>

                <div class="inventory mb-3 col-12 col-xl-6 col-xxl-4">
                    <template v-for="item in currencies" class="material">
                        <div class="input-group input-group-sm">
                          <img :src="getImageUrl(`${item.name}.png`)" class="input-group img-thumbnail Uncommon" alt="...">
                          <label class="input-group-text">{{ item.show_name }}</label>
                          <button class="btn add-btn" type="button" @mousedown="startCount(item,0 ,$event)" @mouseup="stopInterval" @mouseleave="stopInterval">+</button>
                          <input v-model.number="item.value" :min="minimum" oninput="validity.valid||(value='');"
                                 class="form-control" type="number">
                          <button class="btn minus-btn" type="button" @mousedown="startDecrement(item,0 ,$event)" @mouseup="stopInterval" @mouseleave="stopInterval">-</button>
                        </div>
                    </template>
                </div>
            </div>
            <div v-if="showAnswer(list)" class="answer col-12 col-xl-6">
                <h4 class="col-12"> 你還需要以下材料： </h4>
                <div class="requirement col-12 col-xl-12">
                    <div v-for="strategy in result_data_for_display"
                         class="list-group list-group-flush col-12 col-md-4">
                        <h4 v-if="list" class="list-group-item">{{ strategy.type_name }}</h4>
                        <template v-for="material_name in strategy.method">
                            <div class="list-group list-group-sm answer-img">
                                <img v-if="material_name.value>0 && !['dark_steel', 'powder', 'money'].includes(material_name.name)"
                                     :src="getImageUrl(`${material_name.name}.png`)"
                                     :class="`list-group-item img-thumbnail ${strategy.class}`"
                                     alt="...">
                                <img v-else-if="material_name.value>0 && ['dark_steel', 'powder', 'money'].includes(material_name.name)"
                                     :src="getImageUrl(`${material_name.name}.png`)"
                                     :class="`list-group-item img-thumbnail Uncommon`" alt="...">
                                <label v-if="material_name.value>0" class="material list-group-item col-12">{{
                                    material_name.show_name
                                    }} : {{ material_name.value.toLocaleString() }}</label>
                                <label v-else-if="material_name.value<0" class="material list-group-item col-12">{{
                                    material_name.value
                                    }} : enough</label>
                            </div>
                        </template>
                    </div>
                </div>
                <div class="charge list-group list-group-flush col-12">
                    <h4> 製作費用：</h4>
                    <template v-for="(value,key) in {'dark_steel': '黑鐵','money':'銅幣'}">
                        <div class="list-group create">
                            <img v-if="manufacture_fee()[key]>0" :src="getImageUrl(`${key}.png`)"
                                 :class="`list-group-item img-thumbnail Uncommon`"
                                 alt="...">
                            <label v-if="manufacture_fee()[key]>0"
                                   class="list-group-item col-12">{{ value }}：{{
                                manufacture_fee()[key].toLocaleString()
                                }}</label>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {getImageUrl} from "@/utils";

export default {
    name: "Equipment",
    props: {
        EquipmentLevel: {
            // ex: 傳說
            type: String,
            required: true
        },
        ClassName: {
            // ex: Legendary
            type: String,
            required: true
        },
    },
    data() {
        return {
            minimum: 0,
            maximum: 100,
            materials: {
                Epic: {
                    weapon: {
                        'moon': 100,
                        'evil': 100,
                        'steel': 300,
                        'dark_steel': 100000,
                        'money': 800000,
                    },
                    armor: {
                        'bead': 100,
                        'soul': 100,
                        'steel': 300,
                        'dark_steel': 50000,
                        'money': 400000,
                    },
                    accessories: {
                        'stone': 100,
                        'ore': 100,
                        'platinum': 300,
                        'dark_steel': 100000,
                        'money': 800000,
                    },
                    secondary_weapon: {
                        'moon': 100,
                        'evil': 100,
                        'steel': 300,
                        'dark_steel': 800000,
                        'money': 800000,
                    },
                    earrings: {
                        'stone': 100,
                        'ore': 100,
                        'platinum': 300,
                        'dark_steel': 800000,
                        'money': 800000,
                    },
                },
                Legendary: {
                    weapon: {
                        'moon': 100,
                        'evil': 100,
                        'steel': 300,
                        'dark_steel': 1000000,
                        'money': 10000000,
                    },
                    armor: {
                        'bead': 100,
                        'soul': 100,
                        'steel': 300,
                        'dark_steel': 500000,
                        'money': 5000000,
                    },
                    accessories: {
                        'stone': 100,
                        'ore': 100,
                        'platinum': 300,
                        'dark_steel': 1000000,
                        'money': 10000000,
                    },
                    secondary_weapon: {
                        'moon': 100,
                        'evil': 100,
                        'steel': 300,
                        'dark_steel': 10000000,
                        'money': 10000000,
                    },
                    earrings: {
                        'stone': 100,
                        'ore': 100,
                        'platinum': 300,
                        'dark_steel': 10000000,
                        'money': 10000000,
                    },
                }
            },
            currencies: [
                {name: 'dark_steel', show_name: '黑鐵', value: null},
                {name: 'powder', show_name: '閃粉', value: null},
                {name: 'money', show_name: '銅幣', value: null},
            ],

            name_mapping: [
                {name: 'moon', show_name: '月陰石'},
                {name: 'evil', show_name: '邪念珠'},
                {name: 'bead', show_name: '伏魔神珠'},
                {name: 'soul', show_name: '武魂'},
                {name: 'stone', show_name: '靈石'},
                {name: 'ore', show_name: '礦片'},
                {name: 'steel', show_name: '鋼鐵'},
                {name: 'platinum', show_name: '白金'},
                {name: 'dark_steel', show_name: '黑鐵'},
                {name: 'powder', show_name: '閃粉'},
                {name: 'money', show_name: '銅幣'},
            ],
            list: [
                {key: 'weapon', value: null, name: this.EquipmentLevel + '武器'},
                {key: 'armor', value: null, name: this.EquipmentLevel + '防具'},
                {key: 'accessories', value: null, name: this.EquipmentLevel + '飾品'},
                {key: 'secondary_weapon', value: null, name: this.EquipmentLevel + '副武器'},
                {key: 'earrings', value: null, name: this.EquipmentLevel + '耳環'},
            ],
            inventory_num: [],
            total_cost: {},
            cost: {},
            display_cost: {}
        }
    },
    computed: {
        result_data_for_display() {
            let type_name = "英雄";
            let class_name = "Epic";

            if (this.EquipmentLevel === '傳說') {
                type_name = "傳說";
                class_name = "Legendary";
                return [
                    {method: this.total_needed(class_name), type_name: type_name, class: class_name},
                    {method: this.total_needed('Epic'), type_name: "英雄 ➙ " + type_name, class: 'Epic'},
                    {method: this.total_needed('Rare'), type_name: "稀有 ➙ " + type_name, class: 'Rare'},
                    {method: this.total_needed('Uncommon'), type_name: "高級 ➙ " + type_name, class: 'Uncommon'},
                ];
            }

            return [
                {method: this.total_needed(class_name), type_name: type_name, class: class_name},
                {method: this.total_needed('Rare'), type_name: "稀有 ➙ " + type_name, class: 'Rare'},
                {method: this.total_needed('Uncommon'), type_name: "高級 ➙ " + type_name, class: 'Uncommon'}
            ];
        },
        init_inventory() {
            return this.inventories();
        }
    },
    methods: {
        showAnswer(weaponList) {
            for (const weapon of weaponList) {
                if (weapon.value > 0) {
                    return true
                }
            }
            return false
        },
        getImageUrl,
        total_needed(level) {
            let total_needed = {}
            let total_inventory = {}
            this.inventory_num.forEach((inventory) => {
                inventory.forEach((material) => {
                    total_inventory[material.name] = material.value
                })
            })
            let weapon_needed = this.getMaterial(level, 'weapon')
            let armor_needed = this.getMaterial(level, 'armor')
            let accessories_needed = this.getMaterial(level, 'accessories')
            let secondary_weapon_needed = this.getMaterial(level, 'secondary_weapon')
            let earrings_needed = this.getMaterial(level, 'earrings')
            total_needed = this.subtractInventory(level, this.mergeDictionaries(weapon_needed, armor_needed, accessories_needed, secondary_weapon_needed, earrings_needed), total_inventory)
            this.cost[level] = JSON.parse(JSON.stringify(total_needed))
            this.total_cost[level] = this.material_upgrade_cost(level, this.cost)


            return this.changeShowName(this.mergeDictionaries(total_needed, this.total_cost[level]))
        },
        inventories() {
            const level_mapping = [
                {name: 'Legendary', show_name: '傳說'},
                {name: 'Epic', show_name: '英雄'},
                {name: 'Rare', show_name: '稀有'},
                {name: 'Uncommon', show_name: '高級'}
            ];
            // if (this.ClassName === 'Legendary') {
            //     level_mapping.pop()
            // }
            if (this.ClassName === 'Epic') {
                level_mapping.shift()
            }
            this.name_mapping.forEach(item => {
                let temp = [];
                level_mapping.forEach(level => {
                    if (!['dark_steel', 'powder', 'money'].includes(item.name)) {
                        temp.push({
                            show_name: `${level.show_name}${item.show_name}`,
                            name: `${level.name}_${item.name}`,
                            level: level.name,
                            class: item.name,
                            value: null
                        })
                    }
                })
                if (temp.length > 0) {
                    this.inventory_num.push(temp)
                }
            })
            return this.inventory_num
        },
        getManufacturingQuantity() {
            let quantity = {}
            this.list.forEach((item) => {
                quantity[item.key] = item.value
            })
            return quantity
        },
        getMaterial(level, type) {
            const totalMaterial = {};
            const mapper = {
                Uncommon: {Uncommon: 1},
                Rare: {Rare: 1, Uncommon: 10},
                Epic: {Epic: 1, Rare: 10, Uncommon: 100},
                Legendary: {Legendary: 1, Epic: 10, Rare: 100, Uncommon: 1000}
            };
            const weight = mapper[this.ClassName];
            for (const [key, value] of Object.entries(this.materials[this.ClassName][type])) {
                if (!(['dark_steel', 'money'].includes(key))) {
                    totalMaterial[key] = value * weight[level] * this.getManufacturingQuantity()[type];
                }
            }
            return totalMaterial;
        },
        mergeDictionaries(...dicts) {
            let result = {}
            for (let i = 0; i < dicts.length; i++) {
                let dict = dicts[i];
                for (let key in dict) {
                    if (result[key]) {
                        result[key] += dict[key];
                    } else {
                        result[key] = dict[key];
                    }
                }
            }

            return result;
        },
        subtractInventory(classification, needed, total_inventory) {
        const result = {};
        let mapper, weight;
            mapper = {
                Legendary: [1, 0, 0,0],
                Epic: [10, 1, 0, 0],
                Rare: [100, 10, 1,0],
                Uncommon: [1000, 100, 10,1]
            };
            for (const key in needed) {
                const LegendaryValue = total_inventory[`Legendary_${key}`] || 0;
                const EpicValue = total_inventory[`Epic_${key}`] || 0;
                const RareValue = total_inventory[`Rare_${key}`] || 0;
                const UncommonValue = total_inventory[`Uncommon_${key}`] || 0;

                weight = mapper[classification];
                let value;
                result[key] = (value = (needed[key] - LegendaryValue * weight[0] - EpicValue * weight[1] - RareValue * weight[2] - UncommonValue * weight[3])) > 0 ? value : null;
            }
            return result;
        },
        changeShowName(result) {
            let test = {}
            for (const [key, value] of Object.entries(result)) {
                for (const mapping of this.name_mapping) {
                    if (mapping.name === key) {
                        // result[mapping.show_name] = value;
                        // delete result[key];
                        test[mapping.name] = {'name': mapping.name, 'value': value, 'show_name': mapping.show_name};

                        break;
                    }
                }
            }
            return test
        },
        manufacture_fee() {
            let total_fee = {'dark_steel': null, 'money': null}
            for (const [key, value] of Object.entries(this.materials[this.ClassName])) {
                total_fee['dark_steel'] += value.dark_steel * this.getManufacturingQuantity()[key]
                total_fee['money'] += value.money * this.getManufacturingQuantity()[key]
            }
            return total_fee
        },
        calculateCost(classification, total_cost, target_level='') {
            const upgrade_rules = {
                'Legendary': {},
                'Epic': {
                    'Legendary': {'dark_steel': 25000, 'powder': 125, 'money': 100000}
                },
                'Rare': {
                    'Epic': {'dark_steel': 5000, 'powder': 25, 'money': 20000}
                },
                'Uncommon': {
                    'Rare': {'dark_steel': 1000, 'powder': 2, 'money': 2000},
                }
            }
            let darkSteel = 0, powder = 0, money = 0
            let upgrade_cost = {}

            if (target_level === '') {
                upgrade_cost = upgrade_rules[classification]
            } else {
                let current_level = classification
                while (current_level !== target_level) {
                    upgrade_cost = {...upgrade_rules[current_level], ...upgrade_cost}
                    current_level = Object.keys(upgrade_rules[current_level])[0]
                }
            }

            for (const [upgradeLvl, multiplier] of Object.entries(upgrade_cost)) {
                if (this.ClassName === 'Epic' && upgradeLvl === 'Legendary') {
                    continue
                }
                for (const [_, v] of Object.entries(total_cost[upgradeLvl])) {
                    darkSteel += v * multiplier['dark_steel']
                    powder += v * multiplier['powder']
                    money += v * multiplier['money']
                }
            }
            return [darkSteel, powder, money]
        },
        material_upgrade_cost(classification, total_cost) {

            const [darkSteel, powder, money] = this.calculateCost(classification, total_cost, this.ClassName)

            Object.assign(this.display_cost, {
                [classification]: {
                    'dark_steel': this.currencies[0]['value'] < darkSteel ? (darkSteel - this.currencies[0]['value']) : 0,
                    'powder': this.currencies[1]['value'] < powder ? (powder - this.currencies[1]['value']) : 0,
                    'money': this.currencies[2]['value'] < money ? (money - this.currencies[2]['value']) : 0
                }
            })
            return this.display_cost[classification]
        },
        startCount(item, max=0 ,event) {
            if (event.button !== 0) {
                this.stopInterval();
                return
            }

            this.interval = setInterval(() => {
              if ((item.value < max || max === 0) && event.button === 0) {
                  item.value++;
              } else {
                  this.stopInterval();
              }
          }, 50);
        },
        stopInterval() {
          clearInterval(this.interval)
          this.interval = null
        },
        startDecrement(item, min=0 ,event) {
            if (event.button !== 0) {
                this.stopInterval();
                return
            }

            this.interval = setInterval(() => {
              if ((item.value > min) && event.button === 0) {
                  item.value--;
              } else {
                  this.stopInterval();
              }
          }, 50);
        },
    },
    mounted() {
      const container = document.querySelector('.container-fluid');
      let isMouseDown = false;
      let startX = 0;
      let startY = 0;
      let scrollLeft = 0;
      let scrollTop = 0;
        container.addEventListener('mousedown', (e) => {
        isMouseDown = true;
        startX = e.pageX - container.offsetLeft;
        startY = e.pageY - container.offsetTop;
        scrollLeft = container.scrollLeft;
        scrollTop = container.scrollTop;
      });

      container.addEventListener('mouseleave', () => {
        isMouseDown = false;
      });

      container.addEventListener('mouseup', () => {
        isMouseDown = false;
      });

      container.addEventListener('mousemove', (e) => {
        if (!isMouseDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const y = e.pageY - container.offsetTop;
        const walk_y = (y - startY) * 2; // 控制滾動速度，調整這個值可以改變速度
        const walk_x = (x - startX) * 2; // 控制滾動速度，調整這個值可以改變速度
        container.scrollLeft = scrollLeft - walk_x;
        container.scrollTop = scrollTop - walk_y;
      });

      container.addEventListener('touchstart', (e) => {
        isMouseDown = true;
        startX = e.touches[0].pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
      });
    }
}
</script>

<style scoped>

.container-fluid {
    overflow: auto;
}

</style>