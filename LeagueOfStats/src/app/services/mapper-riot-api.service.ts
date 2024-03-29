import { Injectable } from '@angular/core';
import { IInfo, ILeague, IMasteries, IMatch, IMatchMetadata, IObjective, IObjectives, IParticipant, IPerks, IPerkSelection, IStatPerks, IStyles, ISummoner, ITeam, ITeamBan } from '../models/IRiot';
import { IBannedChampion, IGameCustomizationObject, IObserver, IParticipantS, IPerksS, ISpectator } from '../models/ISpectator';

@Injectable({
  providedIn: 'root'
})
export class MapperRiotApiService {

  constructor() { }

  public mapSummoner(summoner: any): ISummoner {
    return {
      id: summoner.id,
      accountId: summoner.accountId,
      puuid: summoner.puuid,
      name: summoner.name,
      profileIconId: summoner.profileIconId,
      revisionDate: summoner.revisionDate,
      summonerLevel: summoner.summonerLevel
    };
  }

  public mapLeague(league: any): ILeague {
    return {
      leagueId: league.leagueId,
      queueType: league.queueType,
      tier: league.tier,
      rank: league.rank,
      summonerId: league.summonerId,
      summonerName: league.summonerName,
      leaguePoints: league.leaguePoints,
      wins: league.wins,
      losses: league.losses,
      veteran: league.veteran,
      inactive: league.inactive,
      freshBlood: league.freshBlood,
      hotStreak: league.hotStreak
    };
  }

  public mapMatch(match: any): IMatch {
    return {
      metadata: this.mapMetadata(match.metadata),
      info: this.mapInfo(match.info),
      more: false,
    }
  }

  public mapMetadata(metadata: any): IMatchMetadata {
    return {
      dataVersion: metadata.dataVersion,
      matchId: metadata.matchId,
      participants: metadata.participants,
      usernames: [],
    }
  }

  public mapInfo(info: any): IInfo {
    return {
      gameId: info.gameId,
      gameDuration: info.gameDuration,
      gameEndTimestamp: info.gameEndTimestamp,
      gameCreation: info.gameCreation,
      gameVersion: info.gameVersion,
      gameMode: info.gameMode,
      gameType: info.gameType,
      participants: info.participants.map((p: any) => this.mapParticipant(p)),
      platformId: info.platformId,
      queueId: info.queueId,
      teams: info.teams.map((t: any) => this.mapTeam(t)),
      tournamentCode: info.tournamentCode,
    }
  }

  public mapParticipant(participant: any): IParticipant {
    return {
      spell1Casts: participant.spell1Casts,
      spell2Casts: participant.spell2Casts,
      spell3Casts: participant.spell3Casts,
      spell4Casts: participant.spell4Casts,
      summoner1Casts: participant.summoner1Casts,
      summoner1Id: participant.summoner1Id,
      summoner2Casts: participant.summoner2Casts,
      summoner2Id: participant.summoner2Id,
      totalMinionsKilled: participant.totalMinionsKilled,
      summonerName: participant.summonerName,
      ddragonChampionIcon: undefined,
      championName: participant.championName,
      assists: participant.assists,
      baronKills: participant.baronKills,
      championId: participant.championId,
      championLevel: participant.championLevel,
      combatPlayerScore: participant.combatPlayerScore,
      deaths: participant.deaths,
      doubleKills: participant.doubleKills,
      firstBloodAssist: participant.firstBloodAssist,
      firstBloodKill: participant.firstBloodKill,
      firstInhibitorAssist: participant.firstInhibitorAssist,
      firstInhibitorKill: participant.firstInhibitorKill,
      firstTowerAssist: participant.firstTowerAssist,
      firstTowerKill: participant.firstTowerKill,
      goldEarned: participant.goldEarned,
      goldSpent: participant.goldSpent,
      inhibitorKills: participant.inhibitorKills,
      individualPosition: participant.individualPosition,
      item0: participant.item0,
      item1: participant.item1,
      item2: participant.item2,
      item3: participant.item3,
      item4: participant.item4,
      item5: participant.item5,
      item6: participant.item6,
      killingSprees: participant.killingSprees,
      kills: participant.kills,
      largestCriticalStrike: participant.largestCriticalStrike,
      largestKillingSpree: participant.largestKillingSpree,
      largestMultiKill: participant.largestMultiKill,
      magicDamageDealt: participant.magicDamageDealt,
      magicDamageDealtToChampions: participant.magicDamageDealtToChampions,
      magicDamageTaken: participant.magicDamageTaken,
      minionsKilled: participant.minionsKilled,
      neutralMinionsKilled: participant.neutralMinionsKilled,
      neutralMinionsKilledEnemyJungle: participant.neutralMinionsKilledEnemyJungle,
      neutralMinionsKilledTeamJungle: participant.neutralMinionsKilledTeamJungle,
      nodeCapture: participant.nodeCapture,
      nodeCaptureAssist: participant.nodeCaptureAssist,
      nodeNeutralize: participant.nodeNeutralize,
      nodeNeutralizeAssist: participant.nodeNeutralizeAssist,
      objectivePlayerScore: participant.objectivePlayerScore,
      pentaKills: participant.pentaKills,
      physicalDamageDealt: participant.physicalDamageDealt,
      physicalDamageDealtToChampions: participant.physicalDamageDealtToChampions,
      physicalDamageTaken: participant.physicalDamageTaken,
      quadraKills: participant.quadraKills,
      sightWardsBoughtInGame: participant.sightWardsBoughtInGame,
      teamObjective: participant.teamObjective,
      totalDamageDealt: participant.totalDamageDealt,
      totalDamageDealtToChampions: participant.totalDamageDealtToChampions,
      totalDamageTaken: participant.totalDamageTaken,
      totalHeal: participant.totalHeal,
      totalHealToChampions: participant.totalHealToChampions,
      totalPlayerScore: participant.totalPlayerScore,
      totalScoreRank: participant.totalScoreRank,
      totalTimeCrowdControlDealt: participant.totalTimeCrowdControlDealt,
      totalUnitsHealed: participant.totalUnitsHealed,
      towerKills: participant.towerKills,
      tripleKills: participant.tripleKills,
      trueDamageDealt: participant.trueDamageDealt,
      trueDamageDealtToChampions: participant.trueDamageDealtToChampions,
      trueDamageTaken: participant.trueDamageTaken,
      unrealKills: participant.unrealKills,
      visionWardsBoughtInGame: participant.visionWardsBoughtInGame,
      wardsKilled: participant.wardsKilled,
      wardsPlaced: participant.wardsPlaced,
      win: participant.win,
      perks: this.mapPerks(participant.perks),
    };
  }

  public mapPerks(perks: any): IPerks {
    return {
      statPerks: this.mapStatPerks(perks.statPerks),
      styles: perks.styles.map((style: any) => this.mapStyles(style)),
    }
  }

  public mapStatPerks(statPerks: any): IStatPerks {
    return {
      defense: statPerks.defense,
      flex: statPerks.flex,
      offense: statPerks.offense,
    }
  }

  public mapStyles(styles: any): IStyles {
    return {
      description: styles.description,
      selections: styles.selections.map((selection: any) => this.mapPerkSelection(selection)),
      style: styles.style,
    };
  }

  public mapPerkSelection(selection: any): IPerkSelection {
    return {
      perk: selection.perk,
      var1: selection.var1,
      var2: selection.var2,
      var3: selection.var3,
    };
  }

  public mapTeam(team: any): ITeam {
    return {
      bans: team.bans.map((b: any) => this.mapTeamBan(b)),
      objectives: this.mapObjectives(team.objectives),
      teamId: team.teamId,
      win: team.win,
    };
  }

  public mapObjectives(objectives: any): IObjectives {
    return {
      baron: this.mapObjective(objectives.baron),
      champion: this.mapObjective(objectives.champion),
      dragon: this.mapObjective(objectives.dragon),
      inhibitor: this.mapObjective(objectives.inhibitor),
      riftHerald: this.mapObjective(objectives.riftHerald),
      tower: this.mapObjective(objectives.tower),
    };
  }

  public mapObjective(objective: any): IObjective {
    return {
      first: objective.first,
      kills: objective.kills,
    };
  }

  public mapTeamBan(ban: any): ITeamBan {
    return {
      championId: ban.championId,
      pickTurn: ban.pickTurn,
    };
  }

  public mapMasteries(masteries: any): IMasteries {
    return {
      championId: masteries.championId,
      championLevel: masteries.championLevel,
      championPoints: masteries.championPoints,
      lastPlayTime: masteries.lastPlayTime,
      championPointsSinceLastLevel: masteries.championPointsSinceLastLevel,
      championPointsUntilNextLevel: masteries.championPointsUntilNextLevel,
      chestGranted: masteries.chestGranted,
      tokensEarned: masteries.tokensEarned,
      summonerId: masteries.summonerId,
    };
  }

  public mapISpectator(spectator: any): ISpectator {
    return {
      gameId: spectator.gameId,
      gameType: spectator.gameType,
      gameStartTime: spectator.gameStartTime,
      mapId: spectator.mapId,
      gameLength: spectator.gameLength,
      platformId: spectator.platformId,
      gameMode: spectator.gameMode,
      bannedChampions: spectator.bannedChampions.map((b: any) => this.mapBannedChampion(b)),
      gameQueueConfigId: spectator.gameQueueConfigId,
      observers: this.mapObserver(spectator.observers),
      participants: spectator.participants.map((p: any) => this.mapParticipantS(p)),
    };
  }

  public mapObserver(observer: any): IObserver {
    return {
      encryptionKey: observer.encryptionKey,
    };
  }

  public mapGameCustomizationObject(gameCustomizationObject: any): IGameCustomizationObject {
    return {
      category: gameCustomizationObject.category,
      content: gameCustomizationObject.content,
    };
  }

  public mapPerksS(perks: any): IPerksS {
    return {
      perkIds: perks.perkIds,
      perkStyle: perks.perkStyle,
      perkSubStyle: perks.perkSubStyle,
    };
  }

  public mapParticipantS(participant: any): IParticipantS {
    return {
      championId: participant.championId,
      perks: this.mapPerksS(participant.perks),
      profileIconId: participant.profileIconId,
      bot: participant.bot,
      teamId: participant.teamId,
      summonerName: participant.summonerName,
      summonerId: participant.summonerId,
      spell1Id: participant.spell1Id,
      spell2Id: participant.spell2Id,
      gameCustomizationObjects: participant.gameCustomizationObjects.map((g: any) => this.mapGameCustomizationObject(g)),
    };
  }

  public mapBannedChampion(bannedChampion: any): IBannedChampion {
    return {
      pickTurn: bannedChampion.pickTurn,
      championId: bannedChampion.championId,
      teamId: bannedChampion.teamId,
    };
  }
}
