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

export const physicalDefense = [
    new Tier('Tier 8', [
        new Level(35, '藥草葉', 4, '靈芝', 4),
        new Level(36, '藥草葉', 6, '靈芝', 6),
        new Level(37, '藥草葉', 9, '靈芝', 9),
        new Level(38, '藥草葉', 13, '靈芝', 13),
        new Level(39, '藥草葉', 19, '靈芝', 19),
    ], 'Epic'),
    new Tier('Tier 9', [
        new Level(40, '藥草葉', 10, '靈芝', 10),
        new Level(41, '藥草葉', 15, '靈芝', 15),
        new Level(42, '藥草葉', 22, '靈芝', 22),
        new Level(43, '藥草葉', 33, '靈芝', 33),
        new Level(44, '藥草葉', 49, '靈芝', 49),
    ], 'Epic'),
    new Tier('Tier 10', [
        new Level(45, '藥草葉', 20, '靈芝', 20),
        new Level(46, '藥草葉', 30, '靈芝', 30),
        new Level(47, '藥草葉', 45, '靈芝', 45),
        new Level(48, '藥草葉', 67, '靈芝', 67),
        new Level(49, '藥草葉', 100, '靈芝', 100),
    ], 'Epic'),
    new Tier('Tier 11', [
        new Level(50, '藥草葉', 20, '靈芝', 20),
        new Level(51, '藥草葉', 30, '靈芝', 30),
        new Level(52, '藥草葉', 45, '靈芝', 45),
        new Level(53, '藥草葉', 67, '靈芝', 67),
        new Level(54, '藥草葉', 100, '靈芝', 100),
    ],'Epic'),
    new Tier('Tier512', [
        new Level(55, '藥草葉', 50, '靈芝', 50),
        new Level(56, '藥草葉', 50, '靈芝', 50),
        new Level(57, '藥草葉', 50, '靈芝', 50),
        new Level(58, '藥草葉', 50, '靈芝', 50),
        new Level(59, '藥草葉', 50, '靈芝', 50),
    ], 'Epic'),
    new Tier('Tier013', [
        new Level(60, '藥草葉', 60, '靈芝', 60),
        new Level(61, '藥草葉', 60, '靈芝', 60),
        new Level(62, '藥草葉', 60, '靈芝', 60),
        new Level(63, '藥草葉', 60, '靈芝', 60),
        new Level(64, '藥草葉', 60, '靈芝', 60),
    ],'Epic'),
    new Tier('Tier514', [
        new Level(65, '藥草葉', 5, '靈芝', 5),
        new Level(66, '藥草葉', 5, '靈芝', 5),
        new Level(67, '藥草葉', 5, '靈芝', 5),
        new Level(68, '藥草葉', 5, '靈芝', 5),
        new Level(69, '藥草葉', 5, '靈芝', 5),
    ], 'Legendary'),
    new Tier('Tier015', [
        new Level(70, '藥草葉', 10, '靈芝', 10),
        new Level(71, '藥草葉', 10, '靈芝', 10),
        new Level(72, '藥草葉', 10, '靈芝', 10),
        new Level(73, '藥草葉', 10, '靈芝', 10),
        new Level(74, '藥草葉', 10, '靈芝', 10),
    ], 'Legendary'),
    new Tier('Tier516', [
        new Level(75, '藥草葉', 15, '靈芝', 15),
        new Level(76, '藥草葉', 15, '靈芝', 15),
        new Level(77, '藥草葉', 15, '靈芝', 15),
        new Level(78, '藥草葉', 15, '靈芝', 15),
        new Level(79, '藥草葉', 15, '靈芝', 15),
    ], 'Legendary'),
    new Tier('Tier017', [
        new Level(80, '藥草葉', 20, '靈芝', 20),
        new Level(81, '藥草葉', 20, '靈芝', 20),
        new Level(82, '藥草葉', 20, '靈芝', 20),
        new Level(83, '藥草葉', 20, '靈芝', 20),
        new Level(84, '藥草葉', 20, '靈芝', 20),
    ], 'Legendary'),
    new Tier('Tier518', [
        new Level(85, '藥草葉', 25, '靈芝', 25),
        new Level(86, '藥草葉', 25, '靈芝', 25),
        new Level(87, '藥草葉', 25, '靈芝', 25),
        new Level(88, '藥草葉', 25, '靈芝', 25),
        new Level(89, '藥草葉', 25, '靈芝', 25),
    ], 'Legendary'),
    new Tier('Tier019', [
        new Level(90, '藥草葉', 30, '靈芝', 30),
        new Level(91, '藥草葉', 30, '靈芝', 30),
        new Level(92, '藥草葉', 30, '靈芝', 30),
        new Level(93, '藥草葉', 30, '靈芝', 30),
        new Level(94, '藥草葉', 30, '靈芝', 30),
    ], 'Legendary'),

];

export const hp = [
    new Tier('Tier 8', [
        new Level(35, '藥草葉', 4, '毒角片', 20),
        new Level(36, '藥草葉', 6, '毒角片', 20),
        new Level(37, '藥草葉', 9, '毒角片', 20),
        new Level(38, '藥草葉', 13, '毒角片', 20),
        new Level(39, '藥草葉', 19, '毒角片', 20),
    ], 'Epic'),
    new Tier('Tier 9', [
        new Level(40, '藥草葉', 10, '毒角片', 30),
        new Level(41, '藥草葉', 15, '毒角片', 30),
        new Level(42, '藥草葉', 22, '毒角片', 30),
        new Level(43, '藥草葉', 33, '毒角片', 30),
        new Level(44, '藥草葉', 49, '毒角片', 30),
    ], 'Epic'),
    new Tier('Tier 10', [
        new Level(45, '藥草葉', 20, '毒角片', 40),
        new Level(46, '藥草葉', 30, '毒角片', 40),
        new Level(47, '藥草葉', 45, '毒角片', 40),
        new Level(48, '藥草葉', 67, '毒角片', 40),
        new Level(49, '藥草葉', 100, '毒角片', 40),
    ], 'Epic'),
    new Tier('Tier 11', [
        new Level(50, '藥草葉', 20, '毒角片', 50),
        new Level(51, '藥草葉', 30, '毒角片', 50),
        new Level(52, '藥草葉', 45, '毒角片', 50),
        new Level(53, '藥草葉', 67, '毒角片', 50),
        new Level(54, '藥草葉', 100, '毒角片', 50),
    ], 'Epic'),
    new Tier('Tier 12', [
        new Level(55, '藥草葉', 50, '毒角片', 50),
        new Level(56, '藥草葉', 50, '毒角片', 50),
        new Level(57, '藥草葉', 50, '毒角片', 50),
        new Level(58, '藥草葉', 50, '毒角片', 50),
        new Level(59, '藥草葉', 50, '毒角片', 50),
    ], 'Epic'),
    new Tier('Tier 13', [
        new Level(60, '藥草葉', 60, '毒角片', 70),
        new Level(61, '藥草葉', 60, '毒角片', 70),
        new Level(62, '藥草葉', 60, '毒角片', 70),
        new Level(63, '藥草葉', 60, '毒角片', 70),
        new Level(64, '藥草葉', 60, '毒角片', 70),
    ], 'Epic'),
    new Tier('Tier 14', [
        new Level(65, '藥草葉', 5, '毒角片', 4),
        new Level(66, '藥草葉', 5, '毒角片', 4),
        new Level(67, '藥草葉', 5, '毒角片', 4),
        new Level(68, '藥草葉', 5, '毒角片', 4),
        new Level(69, '藥草葉', 5, '毒角片', 4),
    ], 'Legendary'),
    new Tier('Tier 15', [
        new Level(70, '藥草葉', 10, '毒角片', 5),
        new Level(71, '藥草葉', 10, '毒角片', 5),
        new Level(72, '藥草葉', 10, '毒角片', 5),
        new Level(73, '藥草葉', 10, '毒角片', 5),
        new Level(74, '藥草葉', 10, '毒角片', 5),
    ], 'Legendary'),
    new Tier('Tier 16', [
        new Level(75, '藥草葉', 15, '毒角片', 6),
        new Level(76, '藥草葉', 15, '毒角片', 6),
        new Level(77, '藥草葉', 15, '毒角片', 6),
        new Level(78, '藥草葉', 15, '毒角片', 6),
        new Level(79, '藥草葉', 15, '毒角片', 6),
    ], 'Legendary'),
    new Tier('Tier 17', [
        new Level(80, '藥草葉', 20, '毒角片', 7),
        new Level(81, '藥草葉', 20, '毒角片', 7),
        new Level(82, '藥草葉', 20, '毒角片', 7),
        new Level(83, '藥草葉', 20, '毒角片', 7),
        new Level(84, '藥草葉', 20, '毒角片', 7),
    ], 'Legendary'),
    new Tier('Tier 18', [
        new Level(85, '藥草葉', 25, '毒角片', 8),
        new Level(86, '藥草葉', 25, '毒角片', 8),
        new Level(87, '藥草葉', 25, '毒角片', 8),
        new Level(88, '藥草葉', 25, '毒角片', 8),
        new Level(89, '藥草葉', 25, '毒角片', 8),
    ], 'Legendary'),
    new Tier('Tier 19', [
        new Level(90, '藥草葉', 30, '毒角片', 9),
        new Level(91, '藥草葉', 30, '毒角片', 9),
        new Level(92, '藥草葉', 30, '毒角片', 9),
        new Level(93, '藥草葉', 30, '毒角片', 9),
        new Level(94, '藥草葉', 30, '毒角片', 9),
    ], 'Legendary'),

];

export const eva = [
    new Tier('Tier 8', [
        new Level(35, '靈芝', 4, '毒角片', 20),
        new Level(36, '靈芝', 6, '毒角片', 20),
        new Level(37, '靈芝', 9, '毒角片', 20),
        new Level(38, '靈芝', 13, '毒角片', 20),
        new Level(39, '靈芝', 19, '毒角片', 20),
    ], 'Epic'),
    new Tier('Tier 9', [
        new Level(40, '靈芝', 10, '毒角片', 30),
        new Level(41, '靈芝', 15, '毒角片', 30),
        new Level(42, '靈芝', 22, '毒角片', 30),
        new Level(43, '靈芝', 33, '毒角片', 30),
        new Level(44, '靈芝', 49, '毒角片', 30),
    ], 'Epic'),
    new Tier('Tier 10', [
        new Level(45, '靈芝', 20, '毒角片', 40),
        new Level(46, '靈芝', 30, '毒角片', 40),
        new Level(47, '靈芝', 45, '毒角片', 40),
        new Level(48, '靈芝', 67, '毒角片', 40),
        new Level(49, '靈芝', 100, '毒角片', 40),
    ], 'Epic'),
    new Tier('Tier 11', [
        new Level(50, '靈芝', 20, '毒角片', 50),
        new Level(51, '靈芝', 30, '毒角片', 50),
        new Level(52, '靈芝', 45, '毒角片', 50),
        new Level(53, '靈芝', 67, '毒角片', 50),
        new Level(54, '靈芝', 100, '毒角片', 50),
    ], 'Epic'),
    new Tier('Tier 12', [
        new Level(55, '靈芝', 50, '毒角片', 50),
        new Level(56, '靈芝', 50, '毒角片', 50),
        new Level(57, '靈芝', 50, '毒角片', 50),
        new Level(58, '靈芝', 50, '毒角片', 50),
        new Level(59, '靈芝', 50, '毒角片', 50),
    ], 'Epic'),
    new Tier('Tier 13', [
        new Level(60, '靈芝', 60, '毒角片', 70),
        new Level(61, '靈芝', 60, '毒角片', 70),
        new Level(62, '靈芝', 60, '毒角片', 70),
        new Level(63, '靈芝', 60, '毒角片', 70),
        new Level(64, '靈芝', 60, '毒角片', 70),
    ], 'Epic'),
    new Tier('Tier 14', [
        new Level(65, '靈芝', 5, '毒角片', 4),
        new Level(66, '靈芝', 5, '毒角片', 4),
        new Level(67, '靈芝', 5, '毒角片', 4),
        new Level(68, '靈芝', 5, '毒角片', 4),
        new Level(69, '靈芝', 5, '毒角片', 4),
    ], 'Legendary'),
    new Tier('Tier 15', [
        new Level(70, '靈芝', 10, '毒角片', 5),
        new Level(71, '靈芝', 10, '毒角片', 5),
        new Level(72, '靈芝', 10, '毒角片', 5),
        new Level(73, '靈芝', 10, '毒角片', 5),
        new Level(74, '靈芝', 10, '毒角片', 5),
    ], 'Legendary'),
    new Tier('Tier 16', [
        new Level(75, '靈芝', 15, '毒角片', 6),
        new Level(76, '靈芝', 15, '毒角片', 6),
        new Level(77, '靈芝', 15, '毒角片', 6),
        new Level(78, '靈芝', 15, '毒角片', 6),
        new Level(79, '靈芝', 15, '毒角片', 6),
    ], 'Legendary'),
    new Tier('Tier 17', [
        new Level(80, '靈芝', 20, '毒角片', 7),
        new Level(81, '靈芝', 20, '毒角片', 7),
        new Level(82, '靈芝', 20, '毒角片', 7),
        new Level(83, '靈芝', 20, '毒角片', 7),
        new Level(84, '靈芝', 20, '毒角片', 7),
    ], 'Legendary'),
    new Tier('Tier 18', [
        new Level(85, '靈芝', 25, '毒角片', 8),
        new Level(86, '靈芝', 25, '毒角片', 8),
        new Level(87, '靈芝', 25, '毒角片', 8),
        new Level(88, '靈芝', 25, '毒角片', 8),
        new Level(89, '靈芝', 25, '毒角片', 8),
    ], 'Legendary'),
    new Tier('Tier 19', [
        new Level(90, '靈芝', 30, '毒角片', 9),
        new Level(91, '靈芝', 30, '毒角片', 9),
        new Level(92, '靈芝', 30, '毒角片', 9),
        new Level(93, '靈芝', 30, '毒角片', 9),
        new Level(94, '靈芝', 30, '毒角片', 9),
    ], 'Legendary'),

];

export const attack = [
    new Tier('Tier 8', [
        new Level(35, '藥草根', 4, '百年果', 20),
        new Level(36, '藥草根', 6, '百年果', 20),
        new Level(37, '藥草根', 9, '百年果', 20),
        new Level(38, '藥草根', 13, '百年果', 20),
        new Level(39, '藥草根', 19, '百年果', 20),
    ], 'Epic'),
    new Tier('Tier 9', [
        new Level(40, '藥草根', 10, '百年果', 30),
        new Level(41, '藥草根', 15, '百年果', 30),
        new Level(42, '藥草根', 22, '百年果', 30),
        new Level(43, '藥草根', 33, '百年果', 30),
        new Level(44, '藥草根', 49, '百年果', 30),
    ], 'Epic'),
    new Tier('Tier 10', [
        new Level(45, '藥草根', 20, '百年果', 40),
        new Level(46, '藥草根', 30, '百年果', 40),
        new Level(47, '藥草根', 45, '百年果', 40),
        new Level(48, '藥草根', 67, '百年果', 40),
        new Level(49, '藥草根', 100, '百年果', 40),
    ], 'Epic'),
    new Tier('Tier 11', [
        new Level(50, '藥草根', 20, '百年果', 50),
        new Level(51, '藥草根', 30, '百年果', 50),
        new Level(52, '藥草根', 45, '百年果', 50),
        new Level(53, '藥草根', 67, '百年果', 50),
        new Level(54, '藥草根', 100, '百年果', 50),
    ], 'Epic'),
    new Tier('Tier 12', [
        new Level(55, '藥草根', 50, '百年果', 50),
        new Level(56, '藥草根', 50, '百年果', 50),
        new Level(57, '藥草根', 50, '百年果', 50),
        new Level(58, '藥草根', 50, '百年果', 50),
        new Level(59, '藥草根', 50, '百年果', 50),
    ], 'Epic'),
    new Tier('Tier 13', [
        new Level(60, '藥草根', 60, '百年果', 70),
        new Level(61, '藥草根', 60, '百年果', 70),
        new Level(62, '藥草根', 60, '百年果', 70),
        new Level(63, '藥草根', 60, '百年果', 70),
        new Level(64, '藥草根', 60, '百年果', 70),
    ], 'Epic'),
    new Tier('Tier 14', [
        new Level(65, '藥草根', 5, '百年果', 4),
        new Level(66, '藥草根', 5, '百年果', 4),
        new Level(67, '藥草根', 5, '百年果', 4),
        new Level(68, '藥草根', 5, '百年果', 4),
        new Level(69, '藥草根', 5, '百年果', 4),
    ], 'Legendary'),
    new Tier('Tier 15', [
        new Level(70, '藥草根', 10, '百年果', 5),
        new Level(71, '藥草根', 10, '百年果', 5),
        new Level(72, '藥草根', 10, '百年果', 5),
        new Level(73, '藥草根', 10, '百年果', 5),
        new Level(74, '藥草根', 10, '百年果', 5),
    ], 'Legendary'),
    new Tier('Tier 16', [
        new Level(75, '藥草根', 15, '百年果', 6),
        new Level(76, '藥草根', 15, '百年果', 6),
        new Level(77, '藥草根', 15, '百年果', 6),
        new Level(78, '藥草根', 15, '百年果', 6),
        new Level(79, '藥草根', 15, '百年果', 6),
    ], 'Legendary'),
    new Tier('Tier 17', [
        new Level(80, '藥草根', 20, '百年果', 7),
        new Level(81, '藥草根', 20, '百年果', 7),
        new Level(82, '藥草根', 20, '百年果', 7),
        new Level(83, '藥草根', 20, '百年果', 7),
        new Level(84, '藥草根', 20, '百年果', 7),
    ], 'Legendary'),
    new Tier('Tier 18', [
        new Level(85, '藥草根', 25, '百年果', 8),
        new Level(86, '藥草根', 25, '百年果', 8),
        new Level(87, '藥草根', 25, '百年果', 8),
        new Level(88, '藥草根', 25, '百年果', 8),
        new Level(89, '藥草根', 25, '百年果', 8),
    ], 'Legendary'),
    new Tier('Tier 19', [
        new Level(90, '藥草根', 30, '百年果', 9),
        new Level(91, '藥草根', 30, '百年果', 9),
        new Level(92, '藥草根', 30, '百年果', 9),
        new Level(93, '藥草根', 30, '百年果', 9),
        new Level(94, '藥草根', 30, '百年果', 9),
    ], 'Legendary'),

];

export const spellDefense = [
    new Tier('Tier 8', [
        new Level(35, '藥草葉', 4, '藥草根', 4),
        new Level(36, '藥草葉', 6, '藥草根', 6),
        new Level(37, '藥草葉', 9, '藥草根', 9),
        new Level(38, '藥草葉', 13, '藥草根', 13),
        new Level(39, '藥草葉', 19, '藥草根', 19),
    ], 'Epic'),
    new Tier('Tier 9', [
        new Level(40, '藥草葉', 10, '藥草根', 10),
        new Level(41, '藥草葉', 15, '藥草根', 15),
        new Level(42, '藥草葉', 22, '藥草根', 22),
        new Level(43, '藥草葉', 33, '藥草根', 33),
        new Level(44, '藥草葉', 49, '藥草根', 49),
    ],'Epic'),
    new Tier('Tier 10', [
        new Level(45, '藥草葉', 20, '藥草根', 20),
        new Level(46, '藥草葉', 30, '藥草根', 30),
        new Level(47, '藥草葉', 45, '藥草根', 45),
        new Level(48, '藥草葉', 67, '藥草根', 67),
        new Level(49, '藥草葉', 100, '藥草根', 100),
    ], 'Epic'),
    new Tier('Tier 11', [
        new Level(50, '藥草葉', 20, '藥草根', 20),
        new Level(51, '藥草葉', 30, '藥草根', 30),
        new Level(52, '藥草葉', 45, '藥草根', 45),
        new Level(53, '藥草葉', 67, '藥草根', 67),
        new Level(54, '藥草葉', 100, '藥草根', 100),
    ],'Epic'),
    new Tier('Tier 12', [
        new Level(55, '藥草葉', 50, '藥草根', 50),
        new Level(56, '藥草葉', 50, '藥草根', 50),
        new Level(57, '藥草葉', 50, '藥草根', 50),
        new Level(58, '藥草葉', 50, '藥草根', 50),
        new Level(59, '藥草葉', 50, '藥草根', 50),
    ], 'Epic'),
    new Tier('Tier 13', [
        new Level(60, '藥草葉', 60, '藥草根', 60),
        new Level(61, '藥草葉', 60, '藥草根', 60),
        new Level(62, '藥草葉', 60, '藥草根', 60),
        new Level(63, '藥草葉', 60, '藥草根', 60),
        new Level(64, '藥草葉', 60, '藥草根', 60),
    ],'Epic'),
    new Tier('Tier 14', [
        new Level(65, '藥草葉', 5, '藥草根', 5),
        new Level(66, '藥草葉', 5, '藥草根', 5),
        new Level(67, '藥草葉', 5, '藥草根', 5),
        new Level(68, '藥草葉', 5, '藥草根', 5),
        new Level(69, '藥草葉', 5, '藥草根', 5),
    ], 'Legendary'),
    new Tier('Tier 15', [
        new Level(70, '藥草葉', 10, '藥草根', 10),
        new Level(71, '藥草葉', 10, '藥草根', 10),
        new Level(72, '藥草葉', 10, '藥草根', 10),
        new Level(73, '藥草葉', 10, '藥草根', 10),
        new Level(74, '藥草葉', 10, '藥草根', 10),
    ], 'Legendary'),
    new Tier('Tier 16', [
        new Level(75, '藥草葉', 15, '藥草根', 15),
        new Level(76, '藥草葉', 15, '藥草根', 15),
        new Level(77, '藥草葉', 15, '藥草根', 15),
        new Level(78, '藥草葉', 15, '藥草根', 15),
        new Level(79, '藥草葉', 15, '藥草根', 15),
    ], 'Legendary'),
    new Tier('Tier 17', [
        new Level(80, '藥草葉', 20, '藥草根', 20),
        new Level(81, '藥草葉', 20, '藥草根', 20),
        new Level(82, '藥草葉', 20, '藥草根', 20),
        new Level(83, '藥草葉', 20, '藥草根', 20),
        new Level(84, '藥草葉', 20, '藥草根', 20),
    ], 'Legendary'),
    new Tier('Tier 18', [
        new Level(85, '藥草葉', 25, '藥草根', 25),
        new Level(86, '藥草葉', 25, '藥草根', 25),
        new Level(87, '藥草葉', 25, '藥草根', 25),
        new Level(88, '藥草葉', 25, '藥草根', 25),
        new Level(89, '藥草葉', 25, '藥草根', 25),
    ], 'Legendary'),
    new Tier('Tier 19', [
        new Level(90, '藥草葉', 30, '藥草根', 30),
        new Level(91, '藥草葉', 30, '藥草根', 30),
        new Level(92, '藥草葉', 30, '藥草根', 30),
        new Level(93, '藥草葉', 30, '藥草根', 30),
        new Level(94, '藥草葉', 30, '藥草根', 30),
    ], 'Legendary'),
];

export const mp = [
    new Tier('Tier 8', [
        new Level(35, '藥草葉', 4, '花幽飲', 20),
        new Level(36, '藥草葉', 6, '花幽飲', 20),
        new Level(37, '藥草葉', 9, '花幽飲', 20),
        new Level(38, '藥草葉', 13, '花幽飲', 20),
        new Level(39, '藥草葉', 19, '花幽飲', 20),
    ], 'Epic'),
    new Tier('Tier 9', [
        new Level(40, '藥草葉', 10, '花幽飲', 30),
        new Level(41, '藥草葉', 15, '花幽飲', 30),
        new Level(42, '藥草葉', 22, '花幽飲', 30),
        new Level(43, '藥草葉', 33, '花幽飲', 30),
        new Level(44, '藥草葉', 49, '花幽飲', 30),
    ], 'Epic'),
    new Tier('Tier 10', [
        new Level(45, '藥草葉', 20, '花幽飲', 40),
        new Level(46, '藥草葉', 30, '花幽飲', 40),
        new Level(47, '藥草葉', 45, '花幽飲', 40),
        new Level(48, '藥草葉', 67, '花幽飲', 40),
        new Level(49, '藥草葉', 100, '花幽飲', 40),
    ], 'Epic'),
    new Tier('Tier 11', [
        new Level(50, '藥草葉', 20, '花幽飲', 50),
        new Level(51, '藥草葉', 30, '花幽飲', 50),
        new Level(52, '藥草葉', 45, '花幽飲', 50),
        new Level(53, '藥草葉', 67, '花幽飲', 50),
        new Level(54, '藥草葉', 100, '花幽飲', 50),
    ], 'Epic'),
    new Tier('Tier 12', [
        new Level(55, '藥草葉', 50, '花幽飲', 50),
        new Level(56, '藥草葉', 50, '花幽飲', 50),
        new Level(57, '藥草葉', 50, '花幽飲', 50),
        new Level(58, '藥草葉', 50, '花幽飲', 50),
        new Level(59, '藥草葉', 50, '花幽飲', 50),
    ], 'Epic'),
    new Tier('Tier 13', [
        new Level(60, '藥草葉', 60, '花幽飲', 70),
        new Level(61, '藥草葉', 60, '花幽飲', 70),
        new Level(62, '藥草葉', 60, '花幽飲', 70),
        new Level(63, '藥草葉', 60, '花幽飲', 70),
        new Level(64, '藥草葉', 60, '花幽飲', 70),
    ], 'Epic'),
    new Tier('Tier 14', [
        new Level(65, '藥草葉', 5, '花幽飲', 4),
        new Level(66, '藥草葉', 5, '花幽飲', 4),
        new Level(67, '藥草葉', 5, '花幽飲', 4),
        new Level(68, '藥草葉', 5, '花幽飲', 4),
        new Level(69, '藥草葉', 5, '花幽飲', 4),
    ], 'Legendary'),
    new Tier('Tier 15', [
        new Level(70, '藥草葉', 10, '花幽飲', 5),
        new Level(71, '藥草葉', 10, '花幽飲', 5),
        new Level(72, '藥草葉', 10, '花幽飲', 5),
        new Level(73, '藥草葉', 10, '花幽飲', 5),
        new Level(74, '藥草葉', 10, '花幽飲', 5),
    ], 'Legendary'),
    new Tier('Tier 16', [
        new Level(75, '藥草葉', 15, '花幽飲', 6),
        new Level(76, '藥草葉', 15, '花幽飲', 6),
        new Level(77, '藥草葉', 15, '花幽飲', 6),
        new Level(78, '藥草葉', 15, '花幽飲', 6),
        new Level(79, '藥草葉', 15, '花幽飲', 6),
    ], 'Legendary'),
    new Tier('Tier 17', [
        new Level(80, '藥草葉', 20, '花幽飲', 7),
        new Level(81, '藥草葉', 20, '花幽飲', 7),
        new Level(82, '藥草葉', 20, '花幽飲', 7),
        new Level(83, '藥草葉', 20, '花幽飲', 7),
        new Level(84, '藥草葉', 20, '花幽飲', 7),
    ], 'Legendary'),
    new Tier('Tier 18', [
        new Level(85, '藥草葉', 25, '花幽飲', 8),
        new Level(86, '藥草葉', 25, '花幽飲', 8),
        new Level(87, '藥草葉', 25, '花幽飲', 8),
        new Level(88, '藥草葉', 25, '花幽飲', 8),
        new Level(89, '藥草葉', 25, '花幽飲', 8),
    ], 'Legendary'),
    new Tier('Tier 19', [
        new Level(90, '藥草葉', 30, '花幽飲', 9),
        new Level(91, '藥草葉', 30, '花幽飲', 9),
        new Level(92, '藥草葉', 30, '花幽飲', 9),
        new Level(93, '藥草葉', 30, '花幽飲', 9),
        new Level(94, '藥草葉', 30, '花幽飲', 9),
    ], 'Legendary'),

];

export const accuracy = [
    new Tier('Tier 8', [
        new Level(35, '靈芝', 4, '花幽飲', 20),
        new Level(36, '靈芝', 6, '花幽飲', 20),
        new Level(37, '靈芝', 9, '花幽飲', 20),
        new Level(38, '靈芝', 13, '花幽飲', 20),
        new Level(39, '靈芝', 19, '花幽飲', 20),
    ], 'Epic'),
    new Tier('Tier 9', [
        new Level(40, '靈芝', 10, '花幽飲', 30),
        new Level(41, '靈芝', 15, '花幽飲', 30),
        new Level(42, '靈芝', 22, '花幽飲', 30),
        new Level(43, '靈芝', 33, '花幽飲', 30),
        new Level(44, '靈芝', 49, '花幽飲', 30),
    ], 'Epic'),
    new Tier('Tier 10', [
        new Level(45, '靈芝', 20, '花幽飲', 40),
        new Level(46, '靈芝', 30, '花幽飲', 40),
        new Level(47, '靈芝', 45, '花幽飲', 40),
        new Level(48, '靈芝', 67, '花幽飲', 40),
        new Level(49, '靈芝', 100, '花幽飲', 40),
    ], 'Epic'),
    new Tier('Tier 11', [
        new Level(50, '靈芝', 20, '花幽飲', 50),
        new Level(51, '靈芝', 30, '花幽飲', 50),
        new Level(52, '靈芝', 45, '花幽飲', 50),
        new Level(53, '靈芝', 67, '花幽飲', 50),
        new Level(54, '靈芝', 100, '花幽飲', 50),
    ], 'Epic'),
    new Tier('Tier 12', [
        new Level(55, '靈芝', 50, '花幽飲', 50),
        new Level(56, '靈芝', 50, '花幽飲', 50),
        new Level(57, '靈芝', 50, '花幽飲', 50),
        new Level(58, '靈芝', 50, '花幽飲', 50),
        new Level(59, '靈芝', 50, '花幽飲', 50),
    ], 'Epic'),
    new Tier('Tier 13', [
        new Level(60, '靈芝', 60, '花幽飲', 70),
        new Level(61, '靈芝', 60, '花幽飲', 70),
        new Level(62, '靈芝', 60, '花幽飲', 70),
        new Level(63, '靈芝', 60, '花幽飲', 70),
        new Level(64, '靈芝', 60, '花幽飲', 70),
    ], 'Epic'),
    new Tier('Tier 14', [
        new Level(65, '靈芝', 5, '花幽飲', 4),
        new Level(66, '靈芝', 5, '花幽飲', 4),
        new Level(67, '靈芝', 5, '花幽飲', 4),
        new Level(68, '靈芝', 5, '花幽飲', 4),
        new Level(69, '靈芝', 5, '花幽飲', 4),
    ], 'Legendary'),
    new Tier('Tier 15', [
        new Level(70, '靈芝', 10, '花幽飲', 5),
        new Level(71, '靈芝', 10, '花幽飲', 5),
        new Level(72, '靈芝', 10, '花幽飲', 5),
        new Level(73, '靈芝', 10, '花幽飲', 5),
        new Level(74, '靈芝', 10, '花幽飲', 5),
    ], 'Legendary'),
    new Tier('Tier 16', [
        new Level(75, '靈芝', 15, '花幽飲', 6),
        new Level(76, '靈芝', 15, '花幽飲', 6),
        new Level(77, '靈芝', 15, '花幽飲', 6),
        new Level(78, '靈芝', 15, '花幽飲', 6),
        new Level(79, '靈芝', 15, '花幽飲', 6),
    ], 'Legendary'),
    new Tier('Tier 17', [
        new Level(80, '靈芝', 20, '花幽飲', 7),
        new Level(81, '靈芝', 20, '花幽飲', 7),
        new Level(82, '靈芝', 20, '花幽飲', 7),
        new Level(83, '靈芝', 20, '花幽飲', 7),
        new Level(84, '靈芝', 20, '花幽飲', 7),
    ], 'Legendary'),
    new Tier('Tier 18', [
        new Level(85, '靈芝', 25, '花幽飲', 8),
        new Level(86, '靈芝', 25, '花幽飲', 8),
        new Level(87, '靈芝', 25, '花幽飲', 8),
        new Level(88, '靈芝', 25, '花幽飲', 8),
        new Level(89, '靈芝', 25, '花幽飲', 8),
    ], 'Legendary'),
    new Tier('Tier 19', [
        new Level(90, '靈芝', 30, '花幽飲', 9),
        new Level(91, '靈芝', 30, '花幽飲', 9),
        new Level(92, '靈芝', 30, '花幽飲', 9),
        new Level(93, '靈芝', 30, '花幽飲', 9),
        new Level(94, '靈芝', 30, '花幽飲', 9),
    ], 'Legendary'),

];