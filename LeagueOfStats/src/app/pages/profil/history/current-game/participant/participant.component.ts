import { Component, Input, OnInit } from '@angular/core';
import { ISpectator } from 'src/app/models/ISpectator';
import { ChampionsService } from 'src/app/services/champions.service';
import { RunesService } from 'src/app/services/runes.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss']
})
export class ParticipantComponent implements OnInit {
  @Input() index: number = 0;
  @Input() spectator!: ISpectator;
  @Input() summonerId: string = '';

  constructor(
    public championsService: ChampionsService,
    public runeService: RunesService,
  ) { }

  ngOnInit(): void {
  }

  public getChampionIconById(championId: number): any {
    return 'assets/champion/' + this.championsService.getChampionInternalNameById(championId) + '.png';
  }
}
