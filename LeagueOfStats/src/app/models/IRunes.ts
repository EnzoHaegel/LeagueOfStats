export interface IRunes {
    id: number;
    key: string;
    icon: string;
    name: string;
    shortDesc: string;
    longDesc: string;
}

export interface ISlots {
    runes: IRunes[];
}

export interface IStyles {
    id: number;
    key: string;
    icon: string;
    name: string;
    slots: ISlots[];
}
