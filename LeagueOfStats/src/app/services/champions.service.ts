import { Injectable } from '@angular/core';
import champion from '../../assets/champion.json';
import { IChampion, IChampions } from '../models/IChampions';

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {

  public champions: IChampions = champion.data;

  constructor() { }

  public getChampionInternalNameById(id: number | string): string {
    for (let key in this.champions) {
      if (this.champions[key].key === id.toString()) {
        return this.champions[key].id;
      }
    }
    return '';
  }

  public getChampionRealNameById(id: number | string): string {
    for (let key in this.champions) {
      if (this.champions[key].key === id.toString()) {
        return this.champions[key].name;
      }
    }
    return '';
  }

  public getChampionIdByInternalName(name: number | string): string {
    for (let key in this.champions) {
      if (this.champions[key].id === name.toString()) {
        return key;
      }
    }
    return '';
  }

  public getChampionJson(): string {
    return JSON.stringify(champion);
  }

  public getChampions(): IChampions {
    return this.champions;
  }

  public mapToChampionArray(): IChampion[] {
    const champions: IChampion[] = [];
    for (let key in this.champions) {
      champions.push(this.champions[key]);
    }
    return champions;
  }
}
