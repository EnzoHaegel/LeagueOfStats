import { Injectable } from '@angular/core';
import { ISummoners, ISummonerSpell } from '../models/ISummoners';
import summoners from '../../assets/summoner.json';

@Injectable({
  providedIn: 'root'
})
export class SummonersService {

  public summoners: ISummoners = summoners.data;

  constructor() { }

  public getSummonerByName(name: string): ISummonerSpell {
    return this.summoners['Summoner'+name];
  }

  public getSummonerByKey(key: string): ISummonerSpell | undefined {
    // for each summoners find the one with the .key
    for (let summoner in this.summoners) {
      if (this.summoners[summoner].key === key) {
        return this.summoners[summoner];
      }
    }
    return undefined;
  }

  public getPictureByName(name: string): string {
    return this.summoners['Summoner'+name].image.full;
  }

  public getPictureByKey(key: string | number): string {
    return this.getSummonerByKey(key.toString()) ? this.getSummonerByKey(key.toString())!.image.full : '';
  }
}
