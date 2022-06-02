import { Component, Input, OnInit } from '@angular/core';
import { IChampion } from 'src/app/models/IChampions';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {
  @Input() champion: IChampion | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
