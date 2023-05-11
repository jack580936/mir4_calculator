class Tier {
  constructor(name, levels, classification = null) {
    this.name = name;
    this.levels = levels;
    this.classification = classification;
  }
}

class Level {
  constructor(level, upgradeItem1, upgradeAmount1, upgradeItem2, upgradeAmount2) {
    this.level = level;
    this.upgradeItem1 = upgradeItem1;
    this.upgradeAmount1 = upgradeAmount1;
    this.upgradeItem2 = upgradeItem2;
    this.upgradeAmount2 = upgradeAmount2;
  }
}

const physicalDefense = [
  new Tier('Tier 8', [
    new Level(36, '藥草葉', 4, '靈芝', 4),
    new Level(37, '藥草葉', 6, '靈芝', 6),
    new Level(38, '藥草葉', 9, '靈芝', 9),
    new Level(39, '藥草葉', 13, '靈芝', 13),
    new Level(40, '藥草葉', 19, '靈芝', 19),
  ], 'Epic'),
  new Tier('Tier 9', [
    new Level(41, '藥草葉', 10, '靈芝', 10),
    new Level(42, '藥草葉', 15, '靈芝', 15),
    new Level(43, '藥草葉', 22, '靈芝', 22),
    new Level(44, '藥草葉', 33, '靈芝', 33),
    new Level(45, '藥草葉', 49, '靈芝', 49),
  ]),
  new Tier('Tier 10', [
    new Level(46, '藥草葉', 20, '靈芝', 20),
    new Level(47, '藥草葉', 30, '靈芝', 30),
    new Level(48, '藥草葉', 45, '靈芝', 45),
    new Level(49, '藥草葉', 67, '靈芝', 67),
    new Level(50, '藥草葉', 100, '靈芝', 100),
  ], 'Epic'),
    ];