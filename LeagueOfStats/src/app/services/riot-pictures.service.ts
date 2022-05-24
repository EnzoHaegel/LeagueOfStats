import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RiotPicturesService {

  constructor() { }

  public getSummonerIcon(iconId: string): string {
    return `https://ddragon.leagueoflegends.com/cdn/12.6.1/img/profileicon/${iconId}.png`;
  }

  public getChampionIcon(championName: string): string {
    return `https://ddragon.leagueoflegends.com/cdn/12.6.1/img/champion/${championName}.png`;
  }

  public getItemIcon(itemId: number): string {
    return `https://ddragon.leagueoflegends.com/cdn/12.6.1/img/item/${itemId}.png`;
  }

  public getSpellIcon(spellId: string): string {
    return `https://ddragon.leagueoflegends.com/cdn/12.6.1/img/spell/${spellId}.png`;
  }

  public getRuneIcon(runeId: string): string {
    return `https://ddragon.leagueoflegends.com/cdn/12.6.1/img/rune/${runeId}.png`;
  }

  public getPerkIcon(perkId: string): string {
    return `https://ddragon.leagueoflegends.com/cdn/12.6.1/img/perk-icons/${perkId}.png`;
  }

  public getPerkStyleIcon(perkStyleId: string): string {
    return `https://ddragon.leagueoflegends.com/cdn/12.6.1/img/perk-style/${perkStyleId}.png`;
  }

  public getPerkSubStyleIcon(perkSubStyleId: string): string {
    return `https://ddragon.leagueoflegends.com/cdn/12.6.1/img/perk-substyle/${perkSubStyleId}.png`;
  }

  public getMapIcon(mapId: string): string {
    return `https://ddragon.leagueoflegends.com/cdn/12.6.1/img/map/${mapId}.png`;
  }

  public getEmblemIcon(emblemId: string): string {
    return `https://ddragon.leagueoflegends.com/cdn/12.6.1/img/profileicon/${emblemId}.png`;
  }

  public getEmblemIconByName(name: string): string {
    return `https://ddragon.leagueoflegends.com/cdn/12.6.1/img/profileicon/${name}.png`;
  }

  public getEmblemIconBySummonerId(summonerId: string): string {
    return `https://ddragon.leagueoflegends.com/cdn/12.6.1/img/profileicon/${summonerId}.png`;
  }
}
