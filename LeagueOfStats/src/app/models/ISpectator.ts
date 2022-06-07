export interface ISpectator {
    gameId: number;
    gameType: string;
    gameStartTime: number;
    mapId: number;
    gameLength: number;
    platformId: string;
    gameMode: string;
    bannedChampions: IBannedChampion[];
    gameQueueConfigId: number;
    observers: IObserver;
    participants: IParticipantS[];
}

export interface IBannedChampion {
    pickTurn: number;
    championId: number;
    teamId: number;
}

export interface IParticipantS {
    championId: number;
    perks: IPerksS;
    profileIconId: number;
    bot: boolean;
    teamId: number;
    summonerName: string;
    summonerId: string;
    spell1Id: number;
    spell2Id: number;
    gameCustomizationObjects: IGameCustomizationObject[];
}

export interface IPerksS {
    perkIds: number[];
    perkStyle: number;
    perkSubStyle: number;
}

export interface IGameCustomizationObject {
    category: string;
    content: string;
}

export interface IObserver {
    encryptionKey: string;
}
