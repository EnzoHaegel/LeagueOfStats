export interface ISummoner {
    id: string;
    accountId: string;
    puuid: string;
    name: string;
    profileIconId: number;
    revisionDate: number;
    summonerLevel: number;
}

export interface ILeague {
    leagueId: string;
    queueType: string;
    tier: string;
    rank: string;
    summonerId: string;
    summonerName: string;
    leaguePoints: number;
    wins: number;
    losses: number;
    veteran: boolean;
    inactive: boolean;
    freshBlood: boolean;
    hotStreak: boolean;
}

// {
//     "id": "Os_pok6009bWwaD2SMmBT1DoASK7F_w8jXeS-5-6YpZgZbY",
//     "accountId": "cikjpOv0iFcdjCz4S64vwHr58olJQ7712SBXZhv48Q9d97s",
//     "puuid": "iBuiyZM7xvHshdDIYwQi4F6fU-pJlmj-eqA-m6s2pOeVVcVhvMC7ABALsZiIOytR5h6QVaUZbJFIAg",
//     "name": "KataRirina",
//     "profileIconId": 4210,
//     "revisionDate": 1652909991000,
//     "summonerLevel": 346
// }

export interface IMatchMetadata {
    dataVersion: string;
    matchId: number;
    participants: string[];
    usernames: string[];
}

export interface IMatch {
    metadata: IMatchMetadata;
    info: IInfo;
}

export interface IInfo {
    gameId: number;
    gameDuration: number;
    gameCreation: number;
    gameVersion: string;
    gameMode: string;
    gameType: string;
    participants: IParticipant[];
    platformId: string;
    queueId: number;
    teams: ITeam[];
    tournamentCode: string;
}

export interface ITeam {
    bans: ITeamBan[];
    objectives: IObjectives;
    teamId: number;
    win: boolean;
}

export interface ITeamBan {
    pickTurn: number;
    championId: number;
}

export interface IObjectives {
    baron: IObjective;
    champion: IObjective;
    dragon: IObjective;
    inhibitor: IObjective;
    riftHerald: IObjective;
    tower: IObjective;
}

export interface IObjective {
    first: boolean;
    kills: number;
}

export interface IParticipant {
    username: string | undefined;
    ddragonChampionIcon: string | undefined;
    championName: string | undefined;
    assists: number;
    baronKills: number;
    championId: number;
    championLevel: number;
    combatPlayerScore: number;
    deaths: number;
    doubleKills: number;
    firstBloodAssist: boolean;
    firstBloodKill: boolean;
    firstInhibitorAssist: boolean;
    firstInhibitorKill: boolean;
    firstTowerAssist: boolean;
    firstTowerKill: boolean;
    goldEarned: number;
    goldSpent: number;
    inhibitorKills: number;
    item0: number;
    item1: number;
    item2: number;
    item3: number;
    item4: number;
    item5: number;
    item6: number;
    killingSprees: number;
    kills: number;
    largestCriticalStrike: number;
    largestKillingSpree: number;
    largestMultiKill: number;
    magicDamageDealt: number;
    magicDamageDealtToChampions: number;
    magicDamageTaken: number;
    minionsKilled: number;
    neutralMinionsKilled: number;
    neutralMinionsKilledEnemyJungle: number;
    neutralMinionsKilledTeamJungle: number;
    nodeCapture: number;
    nodeCaptureAssist: number;
    nodeNeutralize: number;
    nodeNeutralizeAssist: number;
    objectivePlayerScore: number;
    pentaKills: number;
    physicalDamageDealt: number;
    physicalDamageDealtToChampions: number;
    physicalDamageTaken: number;
    quadraKills: number;
    sightWardsBoughtInGame: number;
    teamObjective: number;
    totalDamageDealt: number;
    totalDamageDealtToChampions: number;
    totalDamageTaken: number;
    totalHeal: number;
    totalHealToChampions: number;
    totalPlayerScore: number;
    totalScoreRank: number;
    totalTimeCrowdControlDealt: number;
    totalUnitsHealed: number;
    towerKills: number;
    tripleKills: number;
    trueDamageDealt: number;
    trueDamageDealtToChampions: number;
    trueDamageTaken: number;
    unrealKills: number;
    visionWardsBoughtInGame: number;
    wardsKilled: number;
    wardsPlaced: number;
    win: boolean;
    perks: IPerks;
}

export interface IPerks {
    statPerks: IStatPerks;
    styles: IStyles[];
}

export interface IStatPerks {
    defense: number;
    flex: number;
    offense: number;
}

export interface IStyles {
    description: string;
    selections: IPerkSelection[];
    style: number;
}

export interface IPerkSelection {
    perk: number;
    var1: number;
    var2: number;
    var3: number;
}

export interface IPlayer {
    currentPlatformId: string;
    summonerName: string;
    matchHistoryUri: string;
    platformId: string;
    currentAccountId: string;
    profileIcon: number;
    summonerId: string;
    accountId: string;
}

export interface IMasteries {
    championId: number;
    championLevel: number;
    championPoints: number;
    lastPlayTime: number;
    championPointsSinceLastLevel: number;
    championPointsUntilNextLevel: number;
    chestGranted: boolean;
    tokensEarned: number;
    summonerId: string;
}
