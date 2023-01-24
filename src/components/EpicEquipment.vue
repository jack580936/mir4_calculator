<script setup>
import {objectToString} from "@vue/shared";
// import {getAssetsImg} from '@/assets'
</script>

<template>
  <div class="epic_equipment">
    <div class="row col-12">
      <div id="equipment" class="col-12 col-xl-6">
        <div id="equipment_num" class="equipment_num mb-3 col-12 col-xl-4 ">
          <h4 class="col-12">製作數量</h4>
          <template v-for="item in list" class="material">
            <div class="input-group input-group-sm">
              <img :src="`src/assets/${item.key}.png`" :class="`input-group img-thumbnail Epic`" alt="...">
              <label class="input-group-text">{{ item.name }} </label>
              <input v-model.number="item.value" :min="minimum" :max="maximum"
                     oninput="validity.valid||(value='');" class="form-control" type="number">
            </div>
          </template>
        </div>
        <h4 class="col-12">庫存</h4>
        <template v-for="material_category in init_inventory">
          <div class="inventory mb-3 col-12 col-sm-6 col-xl-6 col-xxl-4">
            <template v-for="(material,index) in material_category" :key="index">
              <div class="input-group input-group-sm">
                <img :src="`src/assets/${material.class}.png`" :class="`input-group img-thumbnail ${material.level}`"
                     alt>
                <label class="input-group-text">{{ material.show_name }}</label>
                <input v-model.number="material.value" :min="minimum"
                       oninput="validity.valid||(value='');"
                       class="form-control" type="number">
              </div>
            </template>
          </div>
        </template>

        <div class="inventory mb-3 col-12 col-xl-6 col-xxl-4">
          <template v-for="item in currencies" class="material">
            <div class="input-group input-group-sm">
              <img :src="`src/assets/${item.name}.png`" class="input-group img-thumbnail Uncommon" alt="...">
              <label class="input-group-text">{{ item.show_name }}</label>
              <input v-model.number="item.value" :min="minimum" oninput="validity.valid||(value='');"
                     class="form-control" type="number">
            </div>
          </template>
        </div>
      </div>
      <div v-if="showAnswer(list)" class="answer col-12 col-xl-6">
        <h4 class="col-12"> 你還需要以下材料： </h4>
        <div class="requirement col-12 col-xl-12">
          <div v-for="strategy in result_data_for_display" class="list-group list-group-flush col-12 col-md-4">
            <h4 v-if="list" class="list-group-item">{{ strategy.type_name }}</h4>
            <template v-for="material_name in strategy.method">
              <div class="list-group list-group-sm answer-img">
                <img v-if="material_name.value>0 && !['dark_steel', 'powder', 'money'].includes(material_name.name)" :src="`src/assets/${material_name.name}.png`" :class="`list-group-item img-thumbnail ${strategy.class}`" alt="...">
                <img v-else-if="material_name.value>0 && ['dark_steel', 'powder', 'money'].includes(material_name.name)" :src="`src/assets/${material_name.name}.png`" :class="`list-group-item img-thumbnail Uncommon`" alt="...">
                <label v-if="material_name.value>0" class="material list-group-item col-12">{{ material_name.show_name }} : {{ material_name.value.toLocaleString() }}</label>
                <label v-else-if="material_name.value<0" class="material list-group-item col-12">{{ material_name.value }} : enough</label>
              </div>
            </template>
          </div>
        </div>
        <div class="charge list-group list-group-flush col-12">
          <h4> 製作費用：</h4>
          <template v-for="(value,key) in {'dark_steel': '黑鐵','money':'銅幣'}">
            <div class="list-group create">
              <img v-if="manufacture_fee()[key]>0" :src="`src/assets/${key}.png`" :class="`list-group-item img-thumbnail Uncommon`" alt="...">
              <label v-if="manufacture_fee()[key]>0" class="list-group-item col-12">{{value}}：{{ manufacture_fee()[key].toLocaleString() }}</label>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "epic_equipment",
      minimum: 0,
      maximum: 100,
      materials: {
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
        {key: 'weapon', value: null, name: '英雄武器'},
        {key: 'armor', value: null, name: '英雄防具'},
        {key: 'accessories', value: null, name: '英雄飾品'},
        {key: 'secondary_weapon', value: null, name: '英雄副武器'},
        {key: 'earrings', value: null, name: '英雄耳環'},
      ],
      inventory_num: [],
      total_cost: {},
      cost: {},
      display_cost: {}
    }
  },
  computed: {
    result_data_for_display() {
      return [{method: this.total_needed('Epic'), type_name: "英雄",class:'Epic'},
        {method: this.total_needed('Rare'), type_name: "稀有",class:'Rare'},
        {method: this.total_needed('Uncommon'), type_name: "高級",class:'Uncommon'}]
    },
    init_inventory() {
      return this.inventories()
    },

  },
  methods: {
    showAnswer(weaponList) {
     for(const weapon of weaponList){
      console.log(weapon.value)
      if(weapon.value > 0){
        return true
        }
     }
      return false
    },
    total_needed(level) {
      let total_needed = {}
      let total_inventory = {}
      this.inventory_num.forEach((inventory) => {
        inventory.forEach((material) => {
          total_inventory[material.name] = material.value
        })
      })

      let weapon_needed = this.get_material(level, 'weapon')
      let armor_needed = this.get_material(level, 'armor')
      let accessories_needed = this.get_material(level, 'accessories')
      let secondary_weapon_needed = this.get_material(level, 'secondary_weapon')
      let earrings_needed = this.get_material(level, 'earrings')

      total_needed = this.subtractInventory(level, this.mergeDictionaries(weapon_needed, armor_needed, accessories_needed, secondary_weapon_needed, earrings_needed), total_inventory)
      this.cost[level] = JSON.parse(JSON.stringify(total_needed))
      this.total_cost[level] = this.material_upgrade_cost(level, this.cost)
      return this.changeShowName(this.mergeDictionaries(total_needed, this.total_cost[level]))
    },
    inventories() {
      this.name_mapping.forEach(item => {
        let temp = [];
        [{name: 'Epic', show_name: '英雄'},
          {name: 'Rare', show_name: '稀有'},
          {name: 'Uncommon', show_name: '高級'}].forEach(level => {
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
      // return this.inventory_num
      return this.inventory_num
    },
    get_manufacturing_quantity() {
      let quantity = {}
      this.list.forEach((item) => {
        quantity[item.key] = item.value
      })
      return quantity
    },
    get_material(level, type) {
      let total_material = {}
      for (const [key, value] of Object.entries(this.materials[type])) {
        let mapper = {
          Epic: 1,
          Rare: 10,
          Uncommon: 100,
        }
        let weight = mapper[level]
        if (!(['dark_steel', 'money'].includes(key))) {
          total_material[key] = value * weight * this.get_manufacturing_quantity()[type];
        }
      }

      return total_material
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

      for (const key in needed) {
        const EpicValue = total_inventory[`Epic_${key}`];
        const RareValue = total_inventory[`Rare_${key}`];
        const UncommonValue = total_inventory[`Uncommon_${key}`];
        // if(classification === 'Epic'){
        //   result[key] = needed[key] - EpicValue ;
        // }else if(classification === 'Rare'){
        //   result[key] = needed[key] - EpicValue*10 - RareValue ;
        // }else if(classification === 'Uncommon') {
        //   result[key] = needed[key] - EpicValue*100 - RareValue * 10 - UncommonValue;
        // }
        let mapper = {
          Epic: [1, 0, 0],
          Rare: [10, 1, 0],
          Uncommon: [100, 10, 1]
        }
        let weight = mapper[classification]
        let value;
        result[key] = (value = (needed[key] - EpicValue * weight[0] - RareValue * weight[1] - UncommonValue * weight[2])) > 0 ? value : null
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
      for (const [key, value] of Object.entries(this.materials)) {
        total_fee['dark_steel'] += value.dark_steel * this.get_manufacturing_quantity()[key]
        total_fee['money'] += value.money * this.get_manufacturing_quantity()[key]
      }
      return total_fee
    },
    material_upgrade_cost(classification, total_cost) {
      let darkSteel = 0, powder = 0, money = 0 // 最後我還需要多少黑鐵、閃粉、錢
      let inventory_ds = this.currencies[0]['value'], inventory_powder = this.currencies[1]['value'],
          inventory_money = this.currencies[2]['value'] // 目前有多少黑鐵、閃粉、錢

      if (classification === 'Epic') {
        Object.assign(this.display_cost, {'Epic': {}})
      } else if (classification === 'Rare') {
        for (let [_, v] of Object.entries(total_cost['Epic'])) {
          darkSteel += v * 5000
          powder += v * 25
          money += v * 20000
        }

        Object.assign(this.display_cost, {
          'Rare': {
            'dark_steel': inventory_ds < darkSteel ? (darkSteel - inventory_ds) : 0,
            'powder': inventory_powder < powder ? (powder - inventory_powder) : 0,
            'money': inventory_money < money ? (money - inventory_money) : 0
          }
        })
      } else if (classification === 'Uncommon') {
        for (let [_, v] of Object.entries(total_cost['Rare'])) {
          darkSteel += v * 1000
          powder += v * 2
          money += v * 2000
        }
        Object.assign(this.display_cost, {
          'Uncommon': {
            'dark_steel': inventory_ds < darkSteel ? (darkSteel - inventory_ds) : 0,
            'powder': inventory_powder < powder ? (powder - inventory_powder) : 0,
            'money': inventory_money < money ? (money - inventory_money) : 0
          }
        })
      }
      return this.display_cost[classification]
    },
  }
}
</script>
