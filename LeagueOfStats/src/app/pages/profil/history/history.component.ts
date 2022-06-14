import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IMatch, IParticipant } from 'src/app/models/IRiot';
import { ApiRiotService } from 'src/app/services/api-riot.service';
import { ChampionsService } from 'src/app/services/champions.service';
import { ItemsService } from 'src/app/services/items.service';
import { RiotPicturesService } from 'src/app/services/riot-pictures.service';
import { RunesService } from 'src/app/services/runes.service';
import { SummonersService } from 'src/app/services/summoners.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  animations: [
    trigger(
      'more', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    )
  ],
})
export class HistoryComponent implements OnInit {
  @Input() inputUsername: string | undefined;

  public matches: IMatch[] = [];

  public onlyRankeds: boolean = false;

  public user_puuid: string = "";

  public summonerName: string = "";

  public username = new FormControl('');

  constructor(
    private apiRiotService: ApiRiotService,
    public riotPicturesService: RiotPicturesService,
    private route: ActivatedRoute,
    public championsService: ChampionsService,
    public summonersService: SummonersService,
    public itemsService: ItemsService,
    public runesService: RunesService,
  ) { }

  ngOnInit(): void {
    // get username from query params
    this.route.queryParams.subscribe(params => {
      if (params['puuid']) {
        this.matches = [];
        this.getMatchesId(params['puuid'], 0, 2);
        this.user_puuid = params['puuid'];
      } else if (params['user']) {
        this.summonerName = params['user'];
        this.username.setValue(params['user']);
        this.onSearch();
      }
    });

    if (this.username.value === '' && this.inputUsername) {
      this.username.setValue(this.inputUsername);
      this.getSummonerByName();
    } else if (this.username.value === '' && localStorage.getItem("username")) {
      this.username.setValue(localStorage.getItem("username"));
      this.getSummonerByName();
    }
  }

  public getMatchesId(puuid: string, start: number, count: number): void {
    this.apiRiotService.getMatchsIdBySummonerPuuid(puuid, start, count).subscribe(data => {
      data.map(id => this.getMatches(id));
    });
  }

  public getMatches(id: string): void {
    this.apiRiotService.getMatchsById(id).subscribe((data: IMatch) => {
      this.matches.push(data);
      // sort matches by info.gameEndTimestamp, the higher the first
      this.matches.sort((a, b) => {
        return b.info.gameEndTimestamp - a.info.gameEndTimestamp;
      });
    });
  }

  public getSummonerByName(): void {
    // save username in local storage
    localStorage.setItem("username", this.username.value);
    
    this.apiRiotService.getSummonerByName(this.username.value).subscribe(data => {
      this.getMatchesId(data.puuid, 0, 10);
      this.user_puuid = data.puuid;
    });
  }

  public getSummonerNameByPuuid(puuid: string): Observable<string> {
    return this.apiRiotService.getSummonerNameByPuuid(puuid);
  }

  public onSearch(): void {
    this.matches = [];
    this.getSummonerByName();
  }

  public getStatsOfPlayer(match: IMatch): IParticipant {
    let player_number = 0;

    // get index of player in team
    for (let i = 0; i < match.metadata.participants.length; i++) {
      if (match.metadata.participants[i] === this.user_puuid) {
        player_number = i;
      }
    }
    return match.info.participants[player_number];
  }

  public getChampionIconById(championId: number): any {
    return 'assets/champion/' + this.championsService.getChampionInternalNameById(championId) + '.png';
  }

  public loadMore(): void {
    this.getMatchesId(this.user_puuid, this.matches.length, 10);
  }

  public secondesToMinutes(secondes: number): string {
    return Math.floor(secondes / 60) + ":" + ((secondes % 60 < 10) ? '0' + (secondes % 60) : '' + (secondes % 60));
  }

  public getGameTypeName(gameMode: string, gameType: string): string {
    if (gameMode != "CLASSIC")
      return "";
    switch (gameType) {
      case "CUSTOM_GAME":
        return "Custom";
      case "TUTORIAL_GAME":
        return "Tutorial";
      case "MATCHED_GAME":
        return "Ranked";
      default:
        return "";
    }
  }

  public calcKda(participant: IParticipant): string {
    return ((participant.kills + participant.assists) / participant.deaths).toFixed(2).toString();
  }

  public nowSinceGameEndTimestamp(timestamp: number): string {
    let now = new Date().getTime();
    let diff = now - timestamp;

    // return since when game ended in the highest value (days or hours or minutes)
    if (diff > 86400000) {
      return Math.floor(diff / 86400000) + " days ago";
    } else if (diff > 3600000) {
      return Math.floor(diff / 3600000) + " hours ago";
    } else if (diff > 60000) {
      return Math.floor(diff / 60000) + " minutes ago";
    } else {
      return Math.floor(diff / 1000) + " seconds ago";
    }
  }

  public moreInfos(match: IMatch): void {
    match.more = !match.more;
  }

  public tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    if (tabChangeEvent.index === 0) {
      this.onlyRankeds = false;
    } else if (tabChangeEvent.index === 1) {
      this.onlyRankeds = true;
    }
  }

  public getMatchesRanked(): IMatch[] {
    if (this.onlyRankeds) {
      return this.matches.filter(match => match.info.gameMode === "CLASSIC" && match.info.gameType === "MATCHED_GAME");
    } else {
      return this.matches;
    }
  }
}
