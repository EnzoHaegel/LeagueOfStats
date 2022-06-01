export interface ISummonerSpell {
    id: string;
    name: string;
    description: string;
    tooltip: string;
    maxrank: number;
    cooldown: number[];
    cooldownBurn: string;
    cost: number[];
    costBurn: string;
    datavalues: {};
    effect: (number[] | null)[];
    effectBurn: (string | null)[];
    vars: {};
    key: string;
    summonerLevel: number;
    modes: string[];
    costType: string;
    maxammo: string;
    range: number[];
    rangeBurn: string;
    image: {
        full: string;
        sprite: string;
        group: string;
        x: number;
        y: number;
        w: number;
        h: number;
    };
    resource: string;
}

export interface ISummonerSpells {
    data: {
        [key: string]: ISummonerSpell;
    };
    type: string;
    version: string;
}

export interface ISummonerSpellsResponse {
    data: ISummonerSpells;
}

export interface ISummoners {
    [key: string]: ISummonerSpell;
}
