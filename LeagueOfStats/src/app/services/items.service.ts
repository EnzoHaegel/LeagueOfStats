import { Injectable } from '@angular/core';
import items from '../../assets/item.json';
import { IItem, IItems } from '../models/IItems';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  public items: IItems = items.data;

  constructor() { }

  public getItem(id: string | number): IItem {
    return this.items[id.toString()];
  } 

  public getDescription(id: string | number): string {
    return this.items[id.toString()].description;
  }

  public getIItemArray(): IItem[] {
    const items: IItem[] = [];
    for (let key in this.items) {
      items.push(this.items[key]);
    }
    return items;
  }
}
