import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IMatch, IParticipant } from 'src/app/models/IRiot';
import { ApiRiotService } from 'src/app/services/api-riot.service';
import { RiotPicturesService } from 'src/app/services/riot-pictures.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  @Input() inputUsername: string | undefined;

  public matches: IMatch[] = [];

  public user_puuid: string = "";

  // username form
  public username = new FormControl('');

  constructor(
    private apiRiotService: ApiRiotService,
    public riotPicturesService: RiotPicturesService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // get username from query params
    this.route.queryParams.subscribe(params => {
      if (params['puuid']) {
        this.matches = [];
        this.getMatchesId(params['puuid'], 0, 5);
        this.user_puuid = params['puuid'];
      }
    });

    if (this.username.value === '' && this.inputUsername) {
      this.username.setValue(this.inputUsername);
      this.getSummonerByName();
    } else if (localStorage.getItem("username")) {
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
      this.matches[this.matches.length - 1].info.participants.map(participant => {
        this.fillChampionIconByParticipant(participant);
      });
    });
  }

  public getSummonerByName(): void {
    // save username in local storage
    localStorage.setItem("username", this.username.value);

    this.apiRiotService.getSummonerByName(this.username.value).subscribe(data => {
      this.getMatchesId(data.puuid, 0, 5);
      this.user_puuid = data.puuid;
    });
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

  public fillChampionIconByParticipant(participant: IParticipant): void {
    this.apiRiotService.getChampionNameById(participant.championId).subscribe(data => {
      participant.ddragonChampionIcon = this.riotPicturesService.getChampionIcon(data);
      participant.championName = data;
    });
  }

  public loadMore(): void {
    this.getMatchesId(this.user_puuid, this.matches.length, 5);
  }

  public secondesToMinutes(secondes: number): string {
    return Math.floor(secondes / 60) + ":" + (secondes % 60);
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
}
