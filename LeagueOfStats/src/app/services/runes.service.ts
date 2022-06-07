import { Injectable } from '@angular/core';
import runes from '../../assets/runes.json';
import { IRunes, IStyles } from '../models/IRunes';

@Injectable({
  providedIn: 'root'
})
export class RunesService {

  public runes: IStyles[] = runes

  constructor() { }

  public getRuneFromId(id: string | number): IRunes | undefined {
    for (let i = 0; i < this.runes.length; i++) {
      for (let j = 0; j < this.runes[i].slots.length; j++) {
        for (let k = 0; k < this.runes[i].slots[j].runes.length; k++) {
          if (this.runes[i].slots[j].runes[k].id === id) {
            return this.runes[i].slots[j].runes[k];
          }
        }
      }
    }
    return undefined;
  }

  public getTypeFromId(id: string | number): IStyles | undefined {
    for (let i = 0; i < this.runes.length; i++) {
      for (let j = 0; j < this.runes[i].slots.length; j++) {
        for (let k = 0; k < this.runes[i].slots[j].runes.length; k++) {
          if (this.runes[i].slots[j].runes[k].id === id) {
            return this.runes[i];
          }
        }
      }
    }
    return undefined;
  }

  public returnRuneIcon(rune: IRunes | undefined): string {
    if (!rune)
      return '';
    return 'https://ddragon.canisback.com/img/' + rune.icon;
  }

  public returnTypeIcon(rune: IStyles | undefined): string {
    if (!rune)
      return '';
    return 'https://ddragon.canisback.com/img/' + rune.icon;
  }
}
