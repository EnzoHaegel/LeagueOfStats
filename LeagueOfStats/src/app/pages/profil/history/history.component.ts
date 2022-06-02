import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IMatch, IParticipant } from 'src/app/models/IRiot';
import { ApiRiotService } from 'src/app/services/api-riot.service';
import { ChampionsService } from 'src/app/services/champions.service';
import { ItemsService } from 'src/app/services/items.service';
import { RiotPicturesService } from 'src/app/services/riot-pictures.service';
import { SummonersService } from 'src/app/services/summoners.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  @Input() inputUsername: string | undefined;

  public matches: IMatch[] = [];

  public user_puuid: string = "";

  public username = new FormControl('');

  constructor(
    private apiRiotService: ApiRiotService,
    public riotPicturesService: RiotPicturesService,
    private route: ActivatedRoute,
    public championsService: ChampionsService,
    public summonersService: SummonersService,
    public itemsService: ItemsService,
  ) { }

  ngOnInit(): void {
    // get username from query params
    this.route.queryParams.subscribe(params => {
      if (params['puuid']) {
        this.matches = [];
        this.getMatchesId(params['puuid'], 0, 10);
        this.user_puuid = params['puuid'];
      } else if (params['user']) {
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
      console.log(data);
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
}
