import { Component, Input, OnInit } from '@angular/core';
import { IItem } from 'src/app/models/IItems';

@Component({
  selector: 'app-item-popover',
  templateUrl: './item-popover.component.html',
  styleUrls: ['./item-popover.component.scss']
})
export class ItemPopoverComponent implements OnInit {
  @Input() item!: IItem;

  constructor() { }

  ngOnInit(): void {
  }

}
