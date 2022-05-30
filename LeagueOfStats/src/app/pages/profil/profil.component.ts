import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ISummoner, ILeague, IMasteries } from 'src/app/models/IRiot';
import { ApiRiotService } from 'src/app/services/api-riot.service';
import { ChampionsService } from 'src/app/services/champions.service';
import { RiotPicturesService } from 'src/app/services/riot-pictures.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  @Input() inputUsername: string | undefined;

  public username = new FormControl('');

  public summoner: ISummoner | undefined;

  public league: ILeague[] | undefined;

  public masteries: IMasteries[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private riotPicturesService: RiotPicturesService,
    private apiRiotService: ApiRiotService,
    private championsService: ChampionsService,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['user'] && params['user'] !== '') {
        this.getSummonerByName(params['user']);
      }
      if (params['user'] && params['user'] !== '' && params['user'] !== localStorage.getItem("username")) {
        this.username.setValue(params['user']);
        localStorage.setItem("username", params['user']);
        this.onSearch();
      }
    });
    if (this.username.value === '' && this.inputUsername) {
      this.username.setValue(this.inputUsername);
      localStorage.setItem("username", this.inputUsername);
      this.onSearch();
    } else if (localStorage.getItem("username")) {
      this.username.setValue(localStorage.getItem("username"));
    }
  }

  public onSearch(): void {
    localStorage.setItem("username", this.username.value);
    this.router.navigate(['/'], { queryParams: { user: this.username.value } }).then(() => {
      window.location.reload();
    });
  }

  public getSummonerByName(username: string): void {
    this.apiRiotService.getSummonerByName(username).subscribe(data => {
      this.summoner = data;
      this.getLeagueById();
      this.getMasteriesById();
    });
  }

  public getIconById(): string {
    if (!this.summoner) {
      return '';
    }
    return this.riotPicturesService.getSummonerIcon(this.summoner?.profileIconId);
  }

  public getLeagueById() {
    if (!this.summoner) {
      this.league = [];
      return;
    }
    this.apiRiotService.getLeagueBySummonerId(this.summoner?.id).subscribe(data => {
      this.league = data;
    });
  }

  public getRankedLeague(leagueName: string): ILeague | undefined {
    if (!this.league) {
      return undefined;
    }
    return this.league.find(league => league.queueType === leagueName);
  }

  public lowerCaseAllNotFirstLetter(str: string): string {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  public calcWinrate(league: ILeague | undefined): number {
    if (!league) {
      return 0;
    }
    return Math.round((league.wins / (league.wins + league.losses)) * 100);
  }

  public getMasteriesById() {
    if (!this.summoner) {
      this.masteries = [];
      return;
    }
    this.apiRiotService.getMasteriesBySummonerId(this.summoner?.id).subscribe(data => {
      this.masteries = data;
      this.fillMasteryIcon();
    });
  }

  public getChampionIconById(championId: number): any {
    return 'assets/champion/' + this.championsService.getChampionInternalNameById(championId) + '.png';
  }

  public fillMasteryIcon() {
    if (!this.masteries) {
      return;
    }
    // for 5 first masteries
  }
}
