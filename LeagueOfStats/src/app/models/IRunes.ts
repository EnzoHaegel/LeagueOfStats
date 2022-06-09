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

export interface IRune {
    id: number;
    name: string;
    majorChangePatchVersion: string;
    tooltip: string;
    shortDesc: string;
    longDesc: string;
    iconPath: string;
    endOfGameStatDescs: string[];
}
