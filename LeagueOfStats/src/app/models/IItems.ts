export interface IItems {
    [key: string]: IItem;
}

// "1001": {
//     "name": "Boots",
//     "description": "<mainText><stats><attention>25</attention> Move Speed</stats></mainText><br>",
//     "colloq": ";",
//     "plaintext": "Slightly increases Move Speed",
//     "into": ["3158", "3006", "3009", "3020", "3047", "3111", "3117"],
//     "image": {
//       "full": "1001.png",
//       "sprite": "item0.png",
//       "group": "item",
//       "x": 0,
//       "y": 0,
//       "w": 48,
//       "h": 48
//     },
//     "gold": { "base": 300, "purchasable": true, "total": 300, "sell": 210 },
//     "tags": ["Boots"],
//     "maps": { "11": true, "12": true, "21": true, "22": false },
//     "stats": { "FlatMovementSpeedMod": 25 }
//   },

export interface IItem {
    name: string;
    description: string;
    colloq: string;
    plaintext: string;
    into?: string[];
    from?: string[];
    image: {
        full: string;
        sprite: string;
        group: string;
        x: number;
        y: number;
        w: number;
        h: number;
    };
    gold: {
        base: number;
        purchasable: boolean;
        total: number;
        sell: number;
    };
    tags: string[];
    maps: { [key: string]: boolean };
    stats: { [key: string]: number };
}
