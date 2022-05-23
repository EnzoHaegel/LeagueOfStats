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

const match = {
    "info": {
        "gameCreation": 1653253552000,
        "gameDuration": 995,
        "gameEndTimestamp": 1653254656513,
        "gameId": 5885481534,
        "gameMode": "URF",
        "gameName": "teambuilder-match-5885481534",
        "gameStartTimestamp": 1653253661012,
        "gameType": "MATCHED_GAME",
        "gameVersion": "12.9.439.127",
        "mapId": 11,
        "participants": [
            {
                "assists": 4,
                "baronKills": 0,
                "bountyLevel": 0,
                "champExperience": 20353,
                "champLevel": 19,
                "championId": 105,
                "championName": "Fizz",
                "championTransform": 0,
                "consumablesPurchased": 1,
                "damageDealtToBuildings": 1502,
                "damageDealtToObjectives": 2931,
                "damageDealtToTurrets": 1502,
                "damageSelfMitigated": 9945,
                "deaths": 13,
                "detectorWardsPlaced": 0,
                "doubleKills": 2,
                "dragonKills": 1,
                "eligibleForProgression": true,
                "firstBloodAssist": false,
                "firstBloodKill": false,
                "firstTowerAssist": false,
                "firstTowerKill": false,
                "gameEndedInEarlySurrender": false,
                "gameEndedInSurrender": false,
                "goldEarned": 15279,
                "goldSpent": 13950,
                "individualPosition": "Invalid",
                "inhibitorKills": 0,
                "inhibitorTakedowns": 0,
                "inhibitorsLost": 2,
                "item0": 6655,
                "item1": 3100,
                "item2": 3020,
                "item3": 4645,
                "item4": 3089,
                "item5": 0,
                "item6": 3363,
                "itemsPurchased": 18,
                "killingSprees": 3,
                "kills": 13,
                "lane": "NONE",
                "largestCriticalStrike": 0,
                "largestKillingSpree": 4,
                "largestMultiKill": 2,
                "longestTimeSpentLiving": 157,
                "magicDamageDealt": 57394,
                "magicDamageDealtToChampions": 15513,
                "magicDamageTaken": 3108,
                "neutralMinionsKilled": 4,
                "nexusKills": 0,
                "nexusLost": 1,
                "nexusTakedowns": 0,
                "objectivesStolen": 0,
                "objectivesStolenAssists": 0,
                "participantId": 1,
                "pentaKills": 0,
                "perks": {
                    "statPerks": {
                        "defense": 5002,
                        "flex": 5008,
                        "offense": 5008
                    },
                    "styles": [
                        {
                            "description": "primaryStyle",
                            "selections": [
                                {
                                    "perk": 8112,
                                    "var1": 1573,
                                    "var2": 0,
                                    "var3": 0
                                },
                                {
                                    "perk": 8143,
                                    "var1": 766,
                                    "var2": 0,
                                    "var3": 0
                                },
                                {
                                    "perk": 8138,
                                    "var1": 30,
                                    "var2": 0,
                                    "var3": 0
                                },
                                {
                                    "perk": 8135,
                                    "var1": 400,
                                    "var2": 5,
                                    "var3": 0
                                }
                            ],
                            "style": 8100
                        },
                        {
                            "description": "subStyle",
                            "selections": [
                                {
                                    "perk": 9111,
                                    "var1": 878,
                                    "var2": 340,
                                    "var3": 0
                                },
                                {
                                    "perk": 8014,
                                    "var1": 553,
                                    "var2": 0,
                                    "var3": 0
                                }
                            ],
                            "style": 8000
                        }
                    ]
                },
                "physicalDamageDealt": 9140,
                "physicalDamageDealtToChampions": 1994,
                "physicalDamageTaken": 22166,
                "profileIcon": 4589,
                "puuid": "4aJ5G-CJEjIpOn_2VbNDO9lklodEzwf8a-g6dwl-IhzdN6kVa2ljEO-m_zzsAgHHhONBqhdMjqF1AQ",
                "quadraKills": 0,
                "riotIdName": "",
                "riotIdTagline": "",
                "role": "SUPPORT",
                "sightWardsBoughtInGame": 0,
                "spell1Casts": 65,
                "spell2Casts": 45,
                "spell3Casts": 126,
                "spell4Casts": 12,
                "summoner1Casts": 14,
                "summoner1Id": 14,
                "summoner2Casts": 8,
                "summoner2Id": 4,
                "summonerId": "4efygzJSpqzfH713FKcCIi02-sTtthFB1ylpF4nvKbnRqGA",
                "summonerLevel": 236,
                "summonerName": "ĆR7",
                "teamEarlySurrendered": false,
                "teamId": 100,
                "teamPosition": "",
                "timeCCingOthers": 7,
                "timePlayed": 995,
                "totalDamageDealt": 68074,
                "totalDamageDealtToChampions": 18957,
                "totalDamageShieldedOnTeammates": 0,
                "totalDamageTaken": 26319,
                "totalHeal": 681,
                "totalHealsOnTeammates": 0,
                "totalMinionsKilled": 94,
                "totalTimeCCDealt": 95,
                "totalTimeSpentDead": 385,
                "totalUnitsHealed": 1,
                "tripleKills": 0,
                "trueDamageDealt": 1538,
                "trueDamageDealtToChampions": 1448,
                "trueDamageTaken": 1044,
                "turretKills": 0,
                "turretTakedowns": 0,
                "turretsLost": 10,
                "unrealKills": 0,
                "visionScore": 12,
                "visionWardsBoughtInGame": 0,
                "wardsKilled": 0,
                "wardsPlaced": 5,
                "win": false
            },
            {
                "assists": 1,
                "baronKills": 0,
                "bountyLevel": 0,
                "champExperience": 15627,
                "champLevel": 16,
                "championId": 67,
                "championName": "Vayne",
                "championTransform": 0,
                "consumablesPurchased": 0,
                "damageDealtToBuildings": 4434,
                "damageDealtToObjectives": 4434,
                "damageDealtToTurrets": 4434,
                "damageSelfMitigated": 5321,
                "deaths": 9,
                "detectorWardsPlaced": 0,
                "doubleKills": 1,
                "dragonKills": 0,
                "eligibleForProgression": true,
                "firstBloodAssist": false,
                "firstBloodKill": false,
                "firstTowerAssist": false,
                "firstTowerKill": false,
                "gameEndedInEarlySurrender": false,
                "gameEndedInSurrender": false,
                "goldEarned": 9750,
                "goldSpent": 9000,
                "individualPosition": "Invalid",
                "inhibitorKills": 0,
                "inhibitorTakedowns": 0,
                "inhibitorsLost": 2,
                "item0": 6672,
                "item1": 3046,
                "item2": 1053,
                "item3": 1043,
                "item4": 0,
                "item5": 3006,
                "item6": 3340,
                "itemsPurchased": 13,
                "killingSprees": 1,
                "kills": 3,
                "lane": "NONE",
                "largestCriticalStrike": 399,
                "largestKillingSpree": 2,
                "largestMultiKill": 2,
                "longestTimeSpentLiving": 291,
                "magicDamageDealt": 51,
                "magicDamageDealtToChampions": 51,
                "magicDamageTaken": 381,
                "neutralMinionsKilled": 0,
                "nexusKills": 0,
                "nexusLost": 1,
                "nexusTakedowns": 0,
                "objectivesStolen": 0,
                "objectivesStolenAssists": 0,
                "participantId": 2,
                "pentaKills": 0,
                "perks": {
                    "statPerks": {
                        "defense": 5002,
                        "flex": 5008,
                        "offense": 5005
                    },
                    "styles": [
                        {
                            "description": "primaryStyle",
                            "selections": [
                                {
                                    "perk": 8008,
                                    "var1": 12,
                                    "var2": 0,
                                    "var3": 0
                                },
                                {
                                    "perk": 9111,
                                    "var1": 214,
                                    "var2": 80,
                                    "var3": 0
                                },
                                {
                                    "perk": 9104,
                                    "var1": 0,
                                    "var2": 0,
                                    "var3": 0
                                },
                                {
                                    "perk": 8017,
                                    "var1": 243,
                                    "var2": 0,
                                    "var3": 0
                                }
                            ],
                            "style": 8000
                        },
                        {
                            "description": "subStyle",
                            "selections": [
                                {
                                    "perk": 8139,
                                    "var1": 348,
                                    "var2": 0,
                                    "var3": 0
                                },
                                {
                                    "perk": 8135,
                                    "var1": 70,
                                    "var2": 2,
                                    "var3": 0
                                }
                            ],
                            "style": 8100
                        }
                    ]
                },
                "physicalDamageDealt": 40363,
                "physicalDamageDealtToChampions": 4114,
                "physicalDamageTaken": 13763,
                "profileIcon": 4149,
                "puuid": "WKCp1TW6XeOjTh1XMUPAEeShACiG0tWEyz2yJZmfr96rMBxH8Zoo-D78-Vqo2NnFq4LYNNp9YIjOCQ",
                "quadraKills": 0,
                "riotIdName": "",
                "riotIdTagline": "",
                "role": "SUPPORT",
                "sightWardsBoughtInGame": 0,
                "spell1Casts": 29,
                "spell2Casts": 0,
                "spell3Casts": 9,
                "spell4Casts": 9,
                "summoner1Casts": 6,
                "summoner1Id": 3,
                "summoner2Casts": 7,
                "summoner2Id": 4,
                "summonerId": "ZwfDkjsdqICGZDxDC2oCmA9vhg-mAup9u7tWfWHB-NF8kjU",
                "summonerLevel": 144,
                "summonerName": "livę forever",
                "teamEarlySurrendered": false,
                "teamId": 100,
                "teamPosition": "",
                "timeCCingOthers": 4,
                "timePlayed": 995,
                "totalDamageDealt": 50397,
                "totalDamageDealtToChampions": 5363,
                "totalDamageShieldedOnTeammates": 0,
                "totalDamageTaken": 15735,
                "totalHeal": 409,
                "totalHealsOnTeammates": 0,
                "totalMinionsKilled": 68,
                "totalTimeCCDealt": 7,
                "totalTimeSpentDead": 236,
                "totalUnitsHealed": 1,
                "tripleKills": 0,
                "trueDamageDealt": 9983,
                "trueDamageDealtToChampions": 1197,
                "trueDamageTaken": 1590,
                "turretKills": 1,
                "turretTakedowns": 1,
                "turretsLost": 10,
                "unrealKills": 0,
                "visionScore": 12,
                "visionWardsBoughtInGame": 0,
                "wardsKilled": 0,
                "wardsPlaced": 8,
                "win": false
            },
            {
                "assists": 8,
                "baronKills": 0,
                "bountyLevel": 0,
                "champExperience": 20171,
                "champLevel": 18,
                "championId": 59,
                "championName": "JarvanIV",
                "championTransform": 0,
                "consumablesPurchased": 6,
                "damageDealtToBuildings": 0,
                "damageDealtToObjectives": 0,
                "damageDealtToTurrets": 0,
                "damageSelfMitigated": 16872,
                "deaths": 10,
                "detectorWardsPlaced": 0,
                "doubleKills": 0,
                "dragonKills": 0,
                "eligibleForProgression": true,
                "firstBloodAssist": false,
                "firstBloodKill": false,
                "firstTowerAssist": false,
                "firstTowerKill": false,
                "gameEndedInEarlySurrender": false,
                "gameEndedInSurrender": false,
                "goldEarned": 11946,
                "goldSpent": 11350,
                "individualPosition": "Invalid",
                "inhibitorKills": 0,
                "inhibitorTakedowns": 0,
                "inhibitorsLost": 2,
                "item0": 3158,
                "item1": 3142,
                "item2": 6692,
                "item3": 3814,
                "item4": 3134,
                "item5": 0,
                "item6": 3340,
                "itemsPurchased": 29,
                "killingSprees": 1,
                "kills": 5,
                "lane": "NONE",
                "largestCriticalStrike": 0,
                "largestKillingSpree": 2,
                "largestMultiKill": 1,
                "longestTimeSpentLiving": 289,
                "magicDamageDealt": 7113,
                "magicDamageDealtToChampions": 1724,
                "magicDamageTaken": 1033,
                "neutralMinionsKilled": 0,
                "nexusKills": 0,
                "nexusLost": 1,
                "nexusTakedowns": 0,
                "objectivesStolen": 0,
                "objectivesStolenAssists": 0,
                "participantId": 3,
                "pentaKills": 0,
                "perks": {
                    "statPerks": {
                        "defense": 5002,
                        "flex": 5008,
                        "offense": 5008
                    },
                    "styles": [
                        {
                            "description": "primaryStyle",
                            "selections": [
                                {
                                    "perk": 8128,
                                    "var1": 589,
                                    "var2": 11,
                                    "var3": 0
                                },
                                {
                                    "perk": 8143,
                                    "var1": 577,
                                    "var2": 0,
                                    "var3": 0
                                },
                                {
                                    "perk": 8138,
                                    "var1": 18,
                                    "var2": 0,
                                    "var3": 0
                                },
                                {
                                    "perk": 8135,
                                    "var1": 400,
                                    "var2": 5,
                                    "var3": 0
                                }
                            ],
                            "style": 8100
                        },
                        {
                            "description": "subStyle",
                            "selections": [
                                {
                                    "perk": 9111,
                                    "var1": 353,
                                    "var2": 260,
                                    "var3": 0
                                },
                                {
                                    "perk": 8014,
                                    "var1": 356,
                                    "var2": 0,
                                    "var3": 0
                                }
                            ],
                            "style": 8000
                        }
                    ]
                },
                "physicalDamageDealt": 36777,
                "physicalDamageDealtToChampions": 12498,
                "physicalDamageTaken": 20418,
                "profileIcon": 5292,
                "puuid": "vDtwgg1jzQ5hPkDVzDRENqIe6AhinNzn8bbn84s75OHSQA0oL_nbnEQHhMb48j8twuPbafZ1YBHBPQ",
                "quadraKills": 0,
                "riotIdName": "",
                "riotIdTagline": "",
                "role": "SUPPORT",
                "sightWardsBoughtInGame": 0,
                "spell1Casts": 79,
                "spell2Casts": 95,
                "spell3Casts": 77,
                "spell4Casts": 16,
                "summoner1Casts": 6,
                "summoner1Id": 4,
                "summoner2Casts": 8,
                "summoner2Id": 3,
                "summonerId": "QO8wb_NyK08cvLuBByPObGV7TyPT1gyG9fedGzSybZ3mt60",
                "summonerLevel": 109,
                "summonerName": "TheCometRock",
                "teamEarlySurrendered": false,
                "teamId": 100,
                "teamPosition": "",
                "timeCCingOthers": 13,
                "timePlayed": 995,
                "totalDamageDealt": 44390,
                "totalDamageDealtToChampions": 14337,
                "totalDamageShieldedOnTeammates": 0,
                "totalDamageTaken": 22246,
                "totalHeal": 421,
                "totalHealsOnTeammates": 0,
                "totalMinionsKilled": 48,
                "totalTimeCCDealt": 263,
                "totalTimeSpentDead": 273,
                "totalUnitsHealed": 1,
                "tripleKills": 0,
                "trueDamageDealt": 500,
                "trueDamageDealtToChampions": 114,
                "trueDamageTaken": 793,
                "turretKills": 0,
                "turretTakedowns": 0,
                "turretsLost": 10,
                "unrealKills": 0,
                "visionScore": 2,
                "visionWardsBoughtInGame": 0,
                "wardsKilled": 1,
                "wardsPlaced": 1,
                "win": false
            },
            {
                "assists": 15,
                "baronKills": 0,
                "bountyLevel": 0,
                "champExperience": 23517,
                "champLevel": 20,
                "championId": 37,
                "championName": "Sona",
                "championTransform": 0,
                "consumablesPurchased": 1,
                "damageDealtToBuildings": 0,
                "damageDealtToObjectives": 199,
                "damageDealtToTurrets": 0,
                "damageSelfMitigated": 14449,
                "deaths": 16,
                "detectorWardsPlaced": 0,
                "doubleKills": 0,
                "dragonKills": 0,
                "eligibleForProgression": true,
                "firstBloodAssist": false,
                "firstBloodKill": false,
                "firstTowerAssist": false,
                "firstTowerKill": false,
                "gameEndedInEarlySurrender": false,
                "gameEndedInSurrender": false,
                "goldEarned": 12947,
                "goldSpent": 12150,
                "individualPosition": "Invalid",
                "inhibitorKills": 0,
                "inhibitorTakedowns": 0,
                "inhibitorsLost": 2,
                "item0": 6655,
                "item1": 3020,
                "item2": 3100,
                "item3": 3011,
                "item4": 1058,
                "item5": 1058,
                "item6": 3363,
                "itemsPurchased": 20,
                "killingSprees": 1,
                "kills": 7,
                "lane": "NONE",
                "largestCriticalStrike": 0,
                "largestKillingSpree": 2,
                "largestMultiKill": 1,
                "longestTimeSpentLiving": 88,
                "magicDamageDealt": 27775,
                "magicDamageDealtToChampions": 12770,
                "magicDamageTaken": 1811,
                "neutralMinionsKilled": 0,
                "nexusKills": 0,
                "nexusLost": 1,
                "nexusTakedowns": 0,
                "objectivesStolen": 0,
                "objectivesStolenAssists": 0,
                "participantId": 4,
                "pentaKills": 0,
                "perks": {
                    "statPerks": {
                        "defense": 5002,
                        "flex": 5008,
                        "offense": 5008
                    },
                    "styles": [
                        {
                            "description": "primaryStyle",
                            "selections": [
                                {
                                    "perk": 8128,
                                    "var1": 647,
                                    "var2": 16,
                                    "var3": 0
                                },
                                {
                                    "perk": 8139,
                                    "var1": 1023,
                                    "var2": 0,
                                    "var3": 0
                                },
                                {
                                    "perk": 8138,
                                    "var1": 30,
                                    "var2": 0,
                                    "var3": 0
                                },
                                {
                                    "perk": 8135,
                                    "var1": 400,
                                    "var2": 5,
                                    "var3": 0
                                }
                            ],
                            "style": 8100
                        },
                        {
                            "description": "subStyle",
                            "selections": [
                                {
                                    "perk": 8233,
                                    "var1": 7,
                                    "var2": 10,
                                    "var3": 0
                                },
                                {
                                    "perk": 8236,
                                    "var1": 24,
                                    "var2": 0,
                                    "var3": 0
                                }
                            ],
                            "style": 8200
                        }
                    ]
                },
                "physicalDamageDealt": 2074,
                "physicalDamageDealtToChampions": 1608,
                "physicalDamageTaken": 23961,
                "profileIcon": 4902,
                "puuid": "Nus0awh-ImOjtA9_wIiWlKW1Fuvr58an2zhI1udvG1ryr5ngvPNQ0Oot4hxkQ7nU9oumJUNC3iEExA",
                "quadraKills": 0,
                "riotIdName": "",
                "riotIdTagline": "",
                "role": "SUPPORT",
                "sightWardsBoughtInGame": 0,
                "spell1Casts": 80,
                "spell2Casts": 88,
                "spell3Casts": 62,
                "spell4Casts": 13,
                "summoner1Casts": 14,
                "summoner1Id": 14,
                "summoner2Casts": 10,
                "summoner2Id": 4,
                "summonerId": "8B9dzgZKGvmoWwIigLcncmcmb8fBtIhJBXhyBFc6MjJ-69Fi",
                "summonerLevel": 499,
                "summonerName": "Deliα",
                "teamEarlySurrendered": false,
                "teamId": 100,
                "teamPosition": "",
                "timeCCingOthers": 9,
                "timePlayed": 995,
                "totalDamageDealt": 31011,
                "totalDamageDealtToChampions": 15541,
                "totalDamageShieldedOnTeammates": 630,
                "totalDamageTaken": 26913,
                "totalHeal": 3904,
                "totalHealsOnTeammates": 1156,
                "totalMinionsKilled": 26,
                "totalTimeCCDealt": 29,
                "totalTimeSpentDead": 401,
                "totalUnitsHealed": 4,
                "tripleKills": 0,
                "trueDamageDealt": 1162,
                "trueDamageDealtToChampions": 1162,
                "trueDamageTaken": 1141,
                "turretKills": 0,
                "turretTakedowns": 0,
                "turretsLost": 10,
                "unrealKills": 0,
                "visionScore": 19,
                "visionWardsBoughtInGame": 0,
                "wardsKilled": 0,
                "wardsPlaced": 13,
                "win": false
            },
            {
                "assists": 3,
                "baronKills": 0,
                "bountyLevel": 0,
                "champExperience": 18609,
                "champLevel": 18,
                "championId": 102,
                "championName": "Shyvana",
                "championTransform": 0,
                "consumablesPurchased": 0,
                "damageDealtToBuildings": 1972,
                "damageDealtToObjectives": 2266,
                "damageDealtToTurrets": 1972,
                "damageSelfMitigated": 10791,
                "deaths": 11,
                "detectorWardsPlaced": 0,
                "doubleKills": 0,
                "dragonKills": 0,
                "eligibleForProgression": true,
                "firstBloodAssist": false,
                "firstBloodKill": false,
                "firstTowerAssist": false,
                "firstTowerKill": false,
                "gameEndedInEarlySurrender": false,
                "gameEndedInSurrender": false,
                "goldEarned": 12912,
                "goldSpent": 11750,
                "individualPosition": "Invalid",
                "inhibitorKills": 0,
                "inhibitorTakedowns": 0,
                "inhibitorsLost": 2,
                "item0": 4628,
                "item1": 4645,
                "item2": 1026,
                "item3": 3089,
                "item4": 3802,
                "item5": 0,
                "item6": 3340,
                "itemsPurchased": 14,
                "killingSprees": 0,
                "kills": 5,
                "lane": "NONE",
                "largestCriticalStrike": 0,
                "largestKillingSpree": 0,
                "largestMultiKill": 1,
                "longestTimeSpentLiving": 116,
                "magicDamageDealt": 81698,
                "magicDamageDealtToChampions": 15307,
                "magicDamageTaken": 753,
                "neutralMinionsKilled": 16,
                "nexusKills": 0,
                "nexusLost": 1,
                "nexusTakedowns": 0,
                "objectivesStolen": 0,
                "objectivesStolenAssists": 0,
                "participantId": 5,
                "pentaKills": 0,
                "perks": {
                    "statPerks": {
                        "defense": 5002,
                        "flex": 5008,
                        "offense": 5008
                    },
                    "styles": [
                        {
                            "description": "primaryStyle",
                            "selections": [
                                {
                                    "perk": 8128,
                                    "var1": 606,
                                    "var2": 15,
                                    "var3": 0
                                },
                                {
                                    "perk": 8143,
                                    "var1": 317,
                                    "var2": 0,
                                    "var3": 0
                                },
                                {
                                    "perk": 8138,
                                    "var1": 16,
                                    "var2": 0,
                                    "var3": 0
                                },
                                {
                                    "perk": 8135,
                                    "var1": 270,
                                    "var2": 4,
                                    "var3": 0
                                }
                            ],
                            "style": 8100
                        },
                        {
                            "description": "subStyle",
                            "selections": [
                                {
                                    "perk": 8210,
                                    "var1": 1,
                                    "var2": 0,
                                    "var3": 0
                                },
                                {
                                    "perk": 8236,
                                    "var1": 24,
                                    "var2": 0,
                                    "var3": 0
                                }
                            ],
                            "style": 8200
                        }
                    ]
                },
                "physicalDamageDealt": 7408,
                "physicalDamageDealtToChampions": 1181,
                "physicalDamageTaken": 17559,
                "profileIcon": 22,
                "puuid": "yN_RQ6nhJUVpnFJAlPjch1PrCsVX4MmR4qt2Z630TQv1DjRZTL-athxElTl-x0ww-dtD1xQmDvakRw",
                "quadraKills": 0,
                "riotIdName": "",
                "riotIdTagline": "",
                "role": "SUPPORT",
                "sightWardsBoughtInGame": 0,
                "spell1Casts": 30,
                "spell2Casts": 139,
                "spell3Casts": 121,
                "spell4Casts": 22,
                "summoner1Casts": 9,
                "summoner1Id": 4,
                "summoner2Casts": 11,
                "summoner2Id": 6,
                "summonerId": "Bh5yyIikB74K0fAOVCPp3HhvuwgLY5JfEgxBiiE2wCH7tc2bcE4hGV3-9g",
                "summonerLevel": 39,
                "summonerName": "cycu ninja",
                "teamEarlySurrendered": false,
                "teamId": 100,
                "teamPosition": "",
                "timeCCingOthers": 1,
                "timePlayed": 995,
                "totalDamageDealt": 89138,
                "totalDamageDealtToChampions": 16489,
                "totalDamageShieldedOnTeammates": 0,
                "totalDamageTaken": 20625,
                "totalHeal": 0,
                "totalHealsOnTeammates": 0,
                "totalMinionsKilled": 89,
                "totalTimeCCDealt": 1,
                "totalTimeSpentDead": 287,
                "totalUnitsHealed": 0,
                "tripleKills": 0,
                "trueDamageDealt": 32,
                "trueDamageDealtToChampions": 0,
                "trueDamageTaken": 2311,
                "turretKills": 0,
                "turretTakedowns": 0,
                "turretsLost": 10,
                "unrealKills": 0,
                "visionScore": 13,
                "visionWardsBoughtInGame": 0,
                "wardsKilled": 0,
                "wardsPlaced": 11,
                "win": false
            },
            {
                "assists": 4,
                "baronKills": 0,
                "bountyLevel": 0,
                "champExperience": 21911,
                "champLevel": 19,
                "championId": 18,
                "championName": "Tristana",
                "championTransform": 0,
                "consumablesPurchased": 1,
                "damageDealtToBuildings": 9626,
                "damageDealtToObjectives": 23769,
                "damageDealtToTurrets": 9626,
                "damageSelfMitigated": 5384,
                "deaths": 8,
                "detectorWardsPlaced": 0,
                "doubleKills": 3,
                "dragonKills": 1,
                "eligibleForProgression": true,
                "firstBloodAssist": false,
                "firstBloodKill": false,
                "firstTowerAssist": false,
                "firstTowerKill": true,
                "gameEndedInEarlySurrender": false,
                "gameEndedInSurrender": false,
                "goldEarned": 17577,
                "goldSpent": 17300,
                "individualPosition": "Invalid",
                "inhibitorKills": 0,
                "inhibitorTakedowns": 0,
                "inhibitorsLost": 0,
                "item0": 6671,
                "item1": 3031,
                "item2": 3006,
                "item3": 6676,
                "item4": 3094,
                "item5": 3072,
                "item6": 3364,
                "itemsPurchased": 23,
                "killingSprees": 6,
                "kills": 18,
                "lane": "NONE",
                "largestCriticalStrike": 667,
                "largestKillingSpree": 5,
                "largestMultiKill": 4,
                "longestTimeSpentLiving": 159,
                "magicDamageDealt": 9300,
                "magicDamageDealtToChampions": 3422,
                "magicDamageTaken": 8439,
                "neutralMinionsKilled": 24,
                "nexusKills": 0,
                "nexusLost": 0,
                "nexusTakedowns": 0,
                "objectivesStolen": 0,
                "objectivesStolenAssists": 0,
                "participantId": 6,
                "pentaKills": 0,
                "perks": {
                    "statPerks": {
                        "defense": 5002,
                        "flex": 5008,
                        "offense": 5008
                    },
                    "styles": [
                        {
                            "description": "primaryStyle",
                            "selections": [
                                {
                                    "perk": 9923,
                                    "var1": 55,
                                    "var2": 91,
                                    "var3": 0
                                },
                                {
                                    "perk": 8126,
                                    "var1": 477,
                                    "var2": 0,
                                    "var3": 0
                                },
                                {
                                    "perk": 8138,
                                    "var1": 18,
                                    "var2": 0,
                                    "var3": 0
                                },
                                {
                                    "perk": 8135,
                                    "var1": 400,
                                    "var2": 5,
                                    "var3": 0
                                }
                            ],
                            "style": 8100
                        },
                        {
                            "description": "subStyle",
                            "selections": [
                                {
                                    "perk": 9111,
                                    "var1": 1068,
                                    "var2": 440,
                                    "var3": 0
                                },
                                {
                                    "perk": 8014,
                                    "var1": 790,
                                    "var2": 0,
                                    "var3": 0
                                }
                            ],
                            "style": 8000
                        }
                    ]
                },
                "physicalDamageDealt": 89658,
                "physicalDamageDealtToChampions": 23399,
                "physicalDamageTaken": 7007,
                "profileIcon": 5227,
                "puuid": "f196xGL-XRzXtQ_VI7JM1J7FHh71-3W0ojknWigPLk8k5m6n1lqXp-SvRIYzchC--LhyaPxU6_wjjA",
                "quadraKills": 1,
                "riotIdName": "",
                "riotIdTagline": "",
                "role": "SUPPORT",
                "sightWardsBoughtInGame": 0,
                "spell1Casts": 65,
                "spell2Casts": 46,
                "spell3Casts": 51,
                "spell4Casts": 4,
                "summoner1Casts": 3,
                "summoner1Id": 3,
                "summoner2Casts": 6,
                "summoner2Id": 4,
                "summonerId": "LBelhq6CwJ2duoQCyhcIi7XwQoQ2dnoTURMasx6i5U6igVnaL1yeYPKs0Q",
                "summonerLevel": 128,
                "summonerName": "Chaoerzi",
                "teamEarlySurrendered": false,
                "teamId": 200,
                "teamPosition": "",
                "timeCCingOthers": 4,
                "timePlayed": 995,
                "totalDamageDealt": 106003,
                "totalDamageDealtToChampions": 27699,
                "totalDamageShieldedOnTeammates": 0,
                "totalDamageTaken": 18773,
                "totalHeal": 805,
                "totalHealsOnTeammates": 0,
                "totalMinionsKilled": 57,
                "totalTimeCCDealt": 52,
                "totalTimeSpentDead": 222,
                "totalUnitsHealed": 1,
                "tripleKills": 1,
                "trueDamageDealt": 7044,
                "trueDamageDealtToChampions": 878,
                "trueDamageTaken": 3325,
                "turretKills": 2,
                "turretTakedowns": 3,
                "turretsLost": 1,
                "unrealKills": 0,
                "visionScore": 21,
                "visionWardsBoughtInGame": 0,
                "wardsKilled": 3,
                "wardsPlaced": 9,
                "win": true
            },
            {
                "assists": 3,
                "baronKills": 0,
                "bountyLevel": 2,
                "champExperience": 24639,
                "champLevel": 21,
                "championId": 254,
                "championName": "Vi",
                "championTransform": 0,
                "consumablesPurchased": 0,
                "damageDealtToBuildings": 9713,
                "damageDealtToObjectives": 20906,
                "damageDealtToTurrets": 9713,
                "damageSelfMitigated": 15137,
                "deaths": 5,
                "detectorWardsPlaced": 0,
                "doubleKills": 3,
                "dragonKills": 0,
                "eligibleForProgression": true,
                "firstBloodAssist": false,
                "firstBloodKill": false,
                "firstTowerAssist": false,
                "firstTowerKill": false,
                "gameEndedInEarlySurrender": false,
                "gameEndedInSurrender": false,
                "goldEarned": 17350,
                "goldSpent": 14000,
                "individualPosition": "Invalid",
                "inhibitorKills": 1,
                "inhibitorTakedowns": 1,
                "inhibitorsLost": 0,
                "item0": 6692,
                "item1": 3508,
                "item2": 6676,
                "item3": 3111,
                "item4": 3031,
                "item5": 1018,
                "item6": 3340,
                "itemsPurchased": 19,
                "killingSprees": 3,
                "kills": 16,
                "lane": "NONE",
                "largestCriticalStrike": 1104,
                "largestKillingSpree": 7,
                "largestMultiKill": 2,
                "longestTimeSpentLiving": 251,
                "magicDamageDealt": 440,
                "magicDamageDealtToChampions": 0,
                "magicDamageTaken": 11023,
                "neutralMinionsKilled": 28,
                "nexusKills": 0,
                "nexusLost": 0,
                "nexusTakedowns": 0,
                "objectivesStolen": 0,
                "objectivesStolenAssists": 0,
                "participantId": 7,
                "pentaKills": 0,
                "perks": {
                    "statPerks": {
                        "defense": 5003,
                        "flex": 5008,
                        "offense": 5008
                    },
                    "styles": [
                        {
                            "description": "primaryStyle",
                            "selections": [
                                {
                                    "perk": 8112,
                                    "var1": 1318,
                                    "var2": 0,
                                    "var3": 0
                                },
                                {
                                    "perk": 8143,
                                    "var1": 1299,
                                    "var2": 0,
                                    "var3": 0
                                },
                                {
                                    "perk": 8138,
                                    "var1": 18,
                                    "var2": 0,
                                    "var3": 0
                                },
                                {
                                    "perk": 8105,
                                    "var1": 13,
                                    "var2": 5,
                                    "var3": 0
                                }
                            ],
                            "style": 8100
                        },
                        {
                            "description": "subStyle",
                            "selections": [
                                {
                                    "perk": 9111,
                                    "var1": 1416,
                                    "var2": 380,
                                    "var3": 0
                                },
                                {
                                    "perk": 8014,
                                    "var1": 919,
                                    "var2": 0,
                                    "var3": 0
                                }
                            ],
                            "style": 8000
                        }
                    ]
                },
                "physicalDamageDealt": 148055,
                "physicalDamageDealtToChampions": 28327,
                "physicalDamageTaken": 8139,
                "profileIcon": 4210,
                "puuid": "iBuiyZM7xvHshdDIYwQi4F6fU-pJlmj-eqA-m6s2pOeVVcVhvMC7ABALsZiIOytR5h6QVaUZbJFIAg",
                "quadraKills": 0,
                "riotIdName": "",
                "riotIdTagline": "",
                "role": "SUPPORT",
                "sightWardsBoughtInGame": 0,
                "spell1Casts": 147,
                "spell2Casts": 0,
                "spell3Casts": 96,
                "spell4Casts": 12,
                "summoner1Casts": 8,
                "summoner1Id": 4,
                "summoner2Casts": 7,
                "summoner2Id": 6,
                "summonerId": "Os_pok6009bWwaD2SMmBT1DoASK7F_w8jXeS-5-6YpZgZbY",
                "summonerLevel": 346,
                "summonerName": "KataRirina",
                "teamEarlySurrendered": false,
                "teamId": 200,
                "teamPosition": "",
                "timeCCingOthers": 31,
                "timePlayed": 995,
                "totalDamageDealt": 150220,
                "totalDamageDealtToChampions": 28986,
                "totalDamageShieldedOnTeammates": 0,
                "totalDamageTaken": 20490,
                "totalHeal": 2031,
                "totalHealsOnTeammates": 0,
                "totalMinionsKilled": 108,
                "totalTimeCCDealt": 169,
                "totalTimeSpentDead": 163,
                "totalUnitsHealed": 1,
                "tripleKills": 0,
                "trueDamageDealt": 1725,
                "trueDamageDealtToChampions": 659,
                "trueDamageTaken": 1327,
                "turretKills": 4,
                "turretTakedowns": 5,
                "turretsLost": 1,
                "unrealKills": 0,
                "visionScore": 19,
                "visionWardsBoughtInGame": 0,
                "wardsKilled": 0,
                "wardsPlaced": 12,
                "win": true
            },
            {
                "assists": 12,
                "baronKills": 0,
                "bountyLevel": 3,
                "champExperience": 19828,
                "champLevel": 18,
                "championId": 11,
                "championName": "MasterYi",
                "championTransform": 0,
                "consumablesPurchased": 0,
                "damageDealtToBuildings": 3182,
                "damageDealtToObjectives": 12241,
                "damageDealtToTurrets": 3182,
                "damageSelfMitigated": 6518,
                "deaths": 8,
                "detectorWardsPlaced": 0,
                "doubleKills": 1,
                "dragonKills": 1,
                "eligibleForProgression": true,
                "firstBloodAssist": true,
                "firstBloodKill": false,
                "firstTowerAssist": false,
                "firstTowerKill": false,
                "gameEndedInEarlySurrender": false,
                "gameEndedInSurrender": false,
                "goldEarned": 13141,
                "goldSpent": 11050,
                "individualPosition": "Invalid",
                "inhibitorKills": 1,
                "inhibitorTakedowns": 1,
                "inhibitorsLost": 0,
                "item0": 6691,
                "item1": 3134,
                "item2": 3006,
                "item3": 6676,
                "item4": 6695,
                "item5": 0,
                "item6": 3340,
                "itemsPurchased": 19,
                "killingSprees": 1,
                "kills": 7,
                "lane": "NONE",
                "largestCriticalStrike": 665,
                "largestKillingSpree": 3,
                "largestMultiKill": 3,
                "longestTimeSpentLiving": 269,
                "magicDamageDealt": 1053,
                "magicDamageDealtToChampions": 0,
                "magicDamageTaken": 8697,
                "neutralMinionsKilled": 24,
                "nexusKills": 1,
                "nexusLost": 0,
                "nexusTakedowns": 1,
                "objectivesStolen": 0,
                "objectivesStolenAssists": 0,
                "participantId": 8,
                "pentaKills": 0,
                "perks": {
                    "statPerks": {
                        "defense": 5003,
                        "flex": 5008,
                        "offense": 5005
                    },
                    "styles": [
                        {
                            "description": "primaryStyle",
                            "selections": [
                                {
                                    "perk": 8008,
                                    "var1": 9,
                                    "var2": 0,
                                    "var3": 0
                                },
                                {
                                    "perk": 9111,
                                    "var1": 1309,
                                    "var2": 380,
                                    "var3": 0
                                },
                                {
                                    "perk": 9104,
                                    "var1": 8,
                                    "var2": 50,
                                    "var3": 0
                                },
                                {
                                    "perk": 8014,
                                    "var1": 252,
                                    "var2": 0,
                                    "var3": 0
                                }
                            ],
                            "style": 8000
                        },
                        {
                            "description": "subStyle",
                            "selections": [
                                {
                                    "perk": 8138,
                                    "var1": 18,
                                    "var2": 0,
                                    "var3": 0
                                },
                                {
                                    "perk": 8135,
                                    "var1": 400,
                                    "var2": 5,
                                    "var3": 0
                                }
                            ],
                            "style": 8100
                        }
                    ]
                },
                "physicalDamageDealt": 57382,
                "physicalDamageDealtToChampions": 10932,
                "physicalDamageTaken": 8022,
                "profileIcon": 5117,
                "puuid": "u2_4Q3R88P2KBYu_LOYD3BxmAcgxvf24xfI47pcM0a5T76JCof6Ci-cvJh0t3jbOqJyzsB-dJAqUdA",
                "quadraKills": 0,
                "riotIdName": "",
                "riotIdTagline": "",
                "role": "SUPPORT",
                "sightWardsBoughtInGame": 0,
                "spell1Casts": 45,
                "spell2Casts": 4,
                "spell3Casts": 26,
                "spell4Casts": 11,
                "summoner1Casts": 7,
                "summoner1Id": 3,
                "summoner2Casts": 6,
                "summoner2Id": 4,
                "summonerId": "680s-y9Ajd3Db0Jy5H4Hx4SnDaWRus6nknSA3Ip15T8vWHe3",
                "summonerLevel": 144,
                "summonerName": "012309",
                "teamEarlySurrendered": false,
                "teamId": 200,
                "teamPosition": "",
                "timeCCingOthers": 4,
                "timePlayed": 995,
                "totalDamageDealt": 70856,
                "totalDamageDealtToChampions": 15777,
                "totalDamageShieldedOnTeammates": 0,
                "totalDamageTaken": 17360,
                "totalHeal": 868,
                "totalHealsOnTeammates": 0,
                "totalMinionsKilled": 36,
                "totalTimeCCDealt": 50,
                "totalTimeSpentDead": 251,
                "totalUnitsHealed": 1,
                "tripleKills": 1,
                "trueDamageDealt": 12420,
                "trueDamageDealtToChampions": 4844,
                "trueDamageTaken": 640,
                "turretKills": 0,
                "turretTakedowns": 2,
                "turretsLost": 1,
                "unrealKills": 0,
                "visionScore": 1,
                "visionWardsBoughtInGame": 0,
                "wardsKilled": 0,
                "wardsPlaced": 1,
                "win": true
            },
            {
                "assists": 20,
                "baronKills": 0,
                "bountyLevel": 0,
                "champExperience": 21275,
                "champLevel": 19,
                "championId": 235,
                "championName": "Senna",
                "championTransform": 0,
                "consumablesPurchased": 0,
                "damageDealtToBuildings": 5746,
                "damageDealtToObjectives": 16696,
                "damageDealtToTurrets": 5746,
                "damageSelfMitigated": 4203,
                "deaths": 6,
                "detectorWardsPlaced": 0,
                "doubleKills": 1,
                "dragonKills": 1,
                "eligibleForProgression": true,
                "firstBloodAssist": true,
                "firstBloodKill": false,
                "firstTowerAssist": false,
                "firstTowerKill": false,
                "gameEndedInEarlySurrender": false,
                "gameEndedInSurrender": false,
                "goldEarned": 13548,
                "goldSpent": 12750,
                "individualPosition": "Invalid",
                "inhibitorKills": 0,
                "inhibitorTakedowns": 1,
                "inhibitorsLost": 0,
                "item0": 3006,
                "item1": 6676,
                "item2": 6672,
                "item3": 3124,
                "item4": 3094,
                "item5": 0,
                "item6": 3363,
                "itemsPurchased": 20,
                "killingSprees": 1,
                "kills": 4,
                "lane": "NONE",
                "largestCriticalStrike": 261,
                "largestKillingSpree": 3,
                "largestMultiKill": 2,
                "longestTimeSpentLiving": 472,
                "magicDamageDealt": 1238,
                "magicDamageDealtToChampions": 79,
                "magicDamageTaken": 8112,
                "neutralMinionsKilled": 12,
                "nexusKills": 0,
                "nexusLost": 0,
                "nexusTakedowns": 0,
                "objectivesStolen": 0,
                "objectivesStolenAssists": 0,
                "participantId": 9,
                "pentaKills": 0,
                "perks": {
                    "statPerks": {
                        "defense": 5002,
                        "flex": 5008,
                        "offense": 5005
                    },
                    "styles": [
                        {
                            "description": "primaryStyle",
                            "selections": [
                                {
                                    "perk": 8008,
                                    "var1": 19,
                                    "var2": 1,
                                    "var3": 0
                                },
                                {
                                    "perk": 9111,
                                    "var1": 596,
                                    "var2": 480,
                                    "var3": 0
                                },
                                {
                                    "perk": 9104,
                                    "var1": 8,
                                    "var2": 50,
                                    "var3": 0
                                },
                                {
                                    "perk": 8017,
                                    "var1": 581,
                                    "var2": 0,
                                    "var3": 0
                                }
                            ],
                            "style": 8000
                        },
                        {
                            "description": "subStyle",
                            "selections": [
                                {
                                    "perk": 8135,
                                    "var1": 400,
                                    "var2": 5,
                                    "var3": 0
                                },
                                {
                                    "perk": 8139,
                                    "var1": 636,
                                    "var2": 0,
                                    "var3": 0
                                }
                            ],
                            "style": 8100
                        }
                    ]
                },
                "physicalDamageDealt": 73086,
                "physicalDamageDealtToChampions": 11015,
                "physicalDamageTaken": 5169,
                "profileIcon": 5293,
                "puuid": "bOZ8_HdyKH7Ew7OTqjSloY_54OVdX0QpOnj4ysXSJeNREigmPG2f-Jzl-NH0I0Z1gUYW8DCE3ksArg",
                "quadraKills": 0,
                "riotIdName": "",
                "riotIdTagline": "",
                "role": "SUPPORT",
                "sightWardsBoughtInGame": 0,
                "spell1Casts": 150,
                "spell2Casts": 84,
                "spell3Casts": 8,
                "spell4Casts": 6,
                "summoner1Casts": 5,
                "summoner1Id": 4,
                "summoner2Casts": 9,
                "summoner2Id": 3,
                "summonerId": "w_ur_0kQaAiIqkQCWNXeJa01XLeCEvBIiPfN2K8Hv6hOHhw",
                "summonerLevel": 422,
                "summonerName": "RiZkii",
                "teamEarlySurrendered": false,
                "teamId": 200,
                "teamPosition": "",
                "timeCCingOthers": 35,
                "timePlayed": 995,
                "totalDamageDealt": 77845,
                "totalDamageDealtToChampions": 11594,
                "totalDamageShieldedOnTeammates": 887,
                "totalDamageTaken": 13477,
                "totalHeal": 7876,
                "totalHealsOnTeammates": 3960,
                "totalMinionsKilled": 62,
                "totalTimeCCDealt": 481,
                "totalTimeSpentDead": 174,
                "totalUnitsHealed": 5,
                "tripleKills": 0,
                "trueDamageDealt": 3520,
                "trueDamageDealtToChampions": 498,
                "trueDamageTaken": 196,
                "turretKills": 2,
                "turretTakedowns": 4,
                "turretsLost": 1,
                "unrealKills": 0,
                "visionScore": 7,
                "visionWardsBoughtInGame": 0,
                "wardsKilled": 0,
                "wardsPlaced": 5,
                "win": true
            },
            {
                "assists": 14,
                "baronKills": 0,
                "bountyLevel": 0,
                "champExperience": 22157,
                "champLevel": 20,
                "championId": 64,
                "championName": "LeeSin",
                "championTransform": 0,
                "consumablesPurchased": 0,
                "damageDealtToBuildings": 4740,
                "damageDealtToObjectives": 6801,
                "damageDealtToTurrets": 4740,
                "damageSelfMitigated": 18152,
                "deaths": 6,
                "detectorWardsPlaced": 0,
                "doubleKills": 1,
                "dragonKills": 0,
                "eligibleForProgression": true,
                "firstBloodAssist": false,
                "firstBloodKill": true,
                "firstTowerAssist": false,
                "firstTowerKill": false,
                "gameEndedInEarlySurrender": false,
                "gameEndedInSurrender": false,
                "goldEarned": 16256,
                "goldSpent": 14600,
                "individualPosition": "Invalid",
                "inhibitorKills": 0,
                "inhibitorTakedowns": 1,
                "inhibitorsLost": 0,
                "item0": 3142,
                "item1": 3111,
                "item2": 3156,
                "item3": 3814,
                "item4": 6692,
                "item5": 3035,
                "item6": 3340,
                "itemsPurchased": 24,
                "killingSprees": 2,
                "kills": 14,
                "lane": "NONE",
                "largestCriticalStrike": 0,
                "largestKillingSpree": 6,
                "largestMultiKill": 2,
                "longestTimeSpentLiving": 355,
                "magicDamageDealt": 36882,
                "magicDamageDealtToChampions": 3587,
                "magicDamageTaken": 9414,
                "neutralMinionsKilled": 28,
                "nexusKills": 0,
                "nexusLost": 0,
                "nexusTakedowns": 0,
                "objectivesStolen": 0,
                "objectivesStolenAssists": 0,
                "participantId": 10,
                "pentaKills": 0,
                "perks": {
                    "statPerks": {
                        "defense": 5003,
                        "flex": 5008,
                        "offense": 5005
                    },
                    "styles": [
                        {
                            "description": "primaryStyle",
                            "selections": [
                                {
                                    "perk": 8128,
                                    "var1": 1067,
                                    "var2": 20,
                                    "var3": 0
                                },
                                {
                                    "perk": 8143,
                                    "var1": 831,
                                    "var2": 0,
                                    "var3": 0
                                },
                                {
                                    "perk": 8138,
                                    "var1": 18,
                                    "var2": 0,
                                    "var3": 0
                                },
                                {
                                    "perk": 8105,
                                    "var1": 13,
                                    "var2": 5,
                                    "var3": 0
                                }
                            ],
                            "style": 8100
                        },
                        {
                            "description": "subStyle",
                            "selections": [
                                {
                                    "perk": 9111,
                                    "var1": 1348,
                                    "var2": 560,
                                    "var3": 0
                                },
                                {
                                    "perk": 8014,
                                    "var1": 552,
                                    "var2": 0,
                                    "var3": 0
                                }
                            ],
                            "style": 8000
                        }
                    ]
                },
                "physicalDamageDealt": 69012,
                "physicalDamageDealtToChampions": 20040,
                "physicalDamageTaken": 7196,
                "profileIcon": 4549,
                "puuid": "bGkB3KDlpG5xANxpYJWR2BCiK_JnNTzLRry3LU_fbtfD2lgQ_1-aZtt2vd8JIl90d35EjvStu_I7gA",
                "quadraKills": 0,
                "riotIdName": "",
                "riotIdTagline": "",
                "role": "SUPPORT",
                "sightWardsBoughtInGame": 0,
                "spell1Casts": 162,
                "spell2Casts": 101,
                "spell3Casts": 72,
                "spell4Casts": 11,
                "summoner1Casts": 6,
                "summoner1Id": 4,
                "summoner2Casts": 7,
                "summoner2Id": 1,
                "summonerId": "SOHZHxrE12fMLui_XqddIQ1OJ8RcyZEoKYcNQTpy8fvsryI",
                "summonerLevel": 370,
                "summonerName": "plz be kind ",
                "teamEarlySurrendered": false,
                "teamId": 200,
                "teamPosition": "",
                "timeCCingOthers": 13,
                "timePlayed": 995,
                "totalDamageDealt": 105894,
                "totalDamageDealtToChampions": 23628,
                "totalDamageShieldedOnTeammates": 524,
                "totalDamageTaken": 19043,
                "totalHeal": 1378,
                "totalHealsOnTeammates": 0,
                "totalMinionsKilled": 99,
                "totalTimeCCDealt": 146,
                "totalTimeSpentDead": 137,
                "totalUnitsHealed": 1,
                "tripleKills": 0,
                "trueDamageDealt": 0,
                "trueDamageDealtToChampions": 0,
                "trueDamageTaken": 2432,
                "turretKills": 1,
                "turretTakedowns": 5,
                "turretsLost": 1,
                "unrealKills": 0,
                "visionScore": 22,
                "visionWardsBoughtInGame": 0,
                "wardsKilled": 0,
                "wardsPlaced": 13,
                "win": true
            }
        ],
        "platformId": "EUW1",
        "queueId": 900,
        "teams": [
            {
                "bans": [],
                "objectives": {
                    "baron": {
                        "first": false,
                        "kills": 0
                    },
                    "champion": {
                        "first": false,
                        "kills": 33
                    },
                    "dragon": {
                        "first": true,
                        "kills": 1
                    },
                    "inhibitor": {
                        "first": false,
                        "kills": 0
                    },
                    "riftHerald": {
                        "first": false,
                        "kills": 0
                    },
                    "tower": {
                        "first": false,
                        "kills": 1
                    }
                },
                "teamId": 100,
                "win": false
            },
            {
                "bans": [],
                "objectives": {
                    "baron": {
                        "first": false,
                        "kills": 0
                    },
                    "champion": {
                        "first": true,
                        "kills": 59
                    },
                    "dragon": {
                        "first": false,
                        "kills": 3
                    },
                    "inhibitor": {
                        "first": true,
                        "kills": 2
                    },
                    "riftHerald": {
                        "first": false,
                        "kills": 0
                    },
                    "tower": {
                        "first": true,
                        "kills": 10
                    }
                },
                "teamId": 200,
                "win": true
            }
        ],
        "tournamentCode": ""
    }
}

export interface IMatchMetadata {
    dataVersion: number;
    matchId: number;
    participants: string[];
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
    perks: IPerk[];
}

export interface IPerk {
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
