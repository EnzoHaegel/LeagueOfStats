import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IChampion } from 'src/app/models/IChampions';
import { ChampionsService } from 'src/app/services/champions.service';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss']
})
export class ChampionsComponent implements OnInit {

  public champions: IChampion[] = [];

  public displayedChampions: IChampion[] = [];

  public searchedChampion = new FormControl('');

  constructor(
    public championsService: ChampionsService,
  ) { }

  ngOnInit(): void {
    this.champions = this.championsService.getChampions();
    this.displayedChampions = this.champions;
  }

  public onSearch(): void {
    this.displayedChampions = this.champions.filter(champion => champion.name.toLowerCase().includes(this.searchedChampion.value.toLowerCase()));
  }

  public onChangeEvent(event: any): void {
    if (event.target.value === '') {
      this.displayedChampions = this.champions;
    } else {
      this.displayedChampions = this.champions.filter(champion => champion.name.toLowerCase().includes(event.target.value.toLowerCase()));
    }
  }
}
