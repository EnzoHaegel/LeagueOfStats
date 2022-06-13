export interface IItems {
    [key: string]: IItem;
}

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
