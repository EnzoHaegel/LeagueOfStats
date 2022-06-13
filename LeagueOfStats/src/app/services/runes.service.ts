import { Injectable } from '@angular/core';
import runes from '../../assets/runes.json';
import rune from '../../assets/statsmods.json';
import { IRune, IRunes, IStyles } from '../models/IRunes';

@Injectable({
  providedIn: 'root'
})
export class RunesService {

  public runes: IStyles[] = runes;

  public rune: IRune[] = rune;

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

  public getStyleFromStyleId(id: string | number): IStyles {
    for (let i = 0; i < this.runes.length; i++) {
      if (this.runes[i].id === id) {
        return this.runes[i];
      }
    }
    return this.runes[0];
  }

  public returnRuneIcon(rune: IRunes | undefined): string {
    if (!rune)
      return '';
    return 'https://ddragon.canisback.com/img/' + rune.icon;
  }

  public returnRuneIconById(id: string | number): string {
    return this.returnRuneIcon(this.getRuneFromId(id));
  }

  public returnTypeIconById(id: string | number): string {
    return this.returnTypeIcon(this.getStyleFromStyleId(id));
  }

  public returnTypeIcon(rune: IStyles | undefined): string {
    if (!rune)
      return '';
    return 'https://ddragon.canisback.com/img/' + rune.icon;
  }

  public getStatsModsIcon(id: string | number): string {
    for (let i = 0; i < this.rune.length; i++) {
      if (this.rune[i].id === id) {
        return 'https://ddragon.canisback.com/img/' + this.rune[i].iconPath.split('v1/')[1];
      }
    }
    return '';
  }

  public getDescription(id: string | number): string {
    for (let i = 0; i < this.rune.length; i++) {
      if (this.rune[i].id === id) {
        return this.rune[i].longDesc;
      }
    }
    return '';
  }

  public getRuneWithRunes(runes: IRunes): IRune {
    for (let i = 0; i < this.rune.length; i++) {
      if (this.rune[i].id === runes.id) {
        return this.rune[i];
      }
    }
    return this.rune[0];
  }

  public getRuneWithId(id: string | number): IRune {
    for (let i = 0; i < this.rune.length; i++) {
      if (this.rune[i].id === id) {
        return this.rune[i];
      }
    }
    return this.rune[0];
  }
}
