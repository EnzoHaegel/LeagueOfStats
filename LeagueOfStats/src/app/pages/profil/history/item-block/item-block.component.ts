import { Component, Input, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-item-block',
  templateUrl: './item-block.component.html',
  styleUrls: ['./item-block.component.scss']
})
export class ItemBlockComponent implements OnInit {
  @Input() itemId!: number;

  constructor(
    public itemsService: ItemsService,
  ) { }

  ngOnInit(): void {
  }

}
