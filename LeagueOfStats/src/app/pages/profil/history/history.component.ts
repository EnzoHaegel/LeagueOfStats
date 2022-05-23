import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IMatch } from 'src/app/models/IRiot';
import { ApiRiotService } from 'src/app/services/api-riot.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  public matchesId!: string[];

  public matches!: IMatch[];

  public username = new FormControl('');

  constructor(
    private apiRiotService: ApiRiotService
  ) { }

  ngOnInit(): void {
  }

  public getMatchesId(puuid: string): void {
    this.apiRiotService.getMatchsIdBySummonerPuuid(puuid, 0, 10).subscribe(data => {
      this.matchesId = data;
      data.map(id => this.getMatches(id));
    });
  }

  public getMatches(id: string): void {
    this.apiRiotService.getMatchsById(id).subscribe((data: IMatch) => {
      this.matches.push(data);
    });
  }

  public getSummonerByName(): void {
    this.apiRiotService.getSummonerByName(this.username.value).subscribe(data => {
      this.getMatchesId(data.puuid);
    });
  }

  public onSearch(): void {
    this.getSummonerByName();
  }
}
