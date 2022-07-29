import { Component, Input, OnInit } from '@angular/core';
import { IPerks } from 'src/app/models/IRiot';

@Component({
  selector: 'app-more-game-infos',
  templateUrl: './more-game-infos.component.html',
  styleUrls: ['./more-game-infos.component.scss']
})
export class MoreGameInfosComponent implements OnInit {
  @Input() runes!: IPerks;

  constructor() { }

  ngOnInit(): void {
  }
}
