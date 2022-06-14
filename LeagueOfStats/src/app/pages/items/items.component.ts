import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IItem } from 'src/app/models/IItems';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  public items: IItem[] = [];

  public displayedItems: IItem[] = [];

  public searchedItem = new FormControl('');

  constructor(public itemsService: ItemsService) {}

  ngOnInit(): void {
    this.items = this.itemsService.getIItemArray();
    this.items = this.items.filter((item) => item.gold.total !== 0);
    this.displayedItems = this.items;
  }

  public onSearch(): void {
    this.displayedItems = this.items.filter((item) =>
      item.name.toLowerCase().includes(this.searchedItem.value.toLowerCase())
    );
  }

  public onChangeEvent(event: any): void {
    if (event.target.value === '') {
      this.displayedItems = this.items;
    } else {
      this.displayedItems = this.items.filter((item) =>
        item.name.toLowerCase().includes(event.target.value.toLowerCase())
      );
    }
  }

  public getItemId(item: IItem): number {
    const id = item.image.full.split('.')[0];
    return parseInt(id, 10);
  }
}
