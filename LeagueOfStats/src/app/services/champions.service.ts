import { Injectable } from '@angular/core';
import champion from '../../assets/champion.json';
import { IChampion } from '../models/IChampions';

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {

  public champions: IChampion[] = champion.data;

  constructor() { }

  public getChampionInternalNameById(id: number | string): string {
    for (let champion of this.champions) {
      if (champion.key == id.toString()) {
        return champion.id;
      }
    }
    return ''
  }

  public getChampionRealNameById(id: number | string): string {
    for (let champion of this.champions) {
      if (champion.key == id.toString()) {
        return champion.name;
      }
    }
    return ''
  }

  public getChampionIdByInternalName(name: number | string): string {
    for (let champion of this.champions) {
      if (champion.id == name.toString()) {
        return champion.key;
      }
    }
    return ''
  }

  public getChampionJson(): string {
    return JSON.stringify(champion);
  }

  public getChampions(): IChampion[] {
    return this.champions;
  }
}
