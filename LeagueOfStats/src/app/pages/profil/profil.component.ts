import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Banner } from 'src/app/models/Banner';
import { ISummoner, ILeague, IMasteries } from 'src/app/models/IRiot';
import { ApiRiotService } from 'src/app/services/api-riot.service';
import { ChampionsService } from 'src/app/services/champions.service';
import { RiotPicturesService } from 'src/app/services/riot-pictures.service';

interface Region {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  @Input() inputUsername: string | undefined;

  public regionList: Region[] = [
    {value: 'euw', viewValue: 'EUW'},
    {value: 'na', viewValue: 'NA'},
    {value: 'kr', viewValue: 'KR'},
    {value: 'eun', viewValue: 'EUN'},
    {value: 'br', viewValue: 'BR'},
    {value: 'oc', viewValue: 'OC'},
    {value: 'la', viewValue: 'LA'},
    {value: 'tr', viewValue: 'TR'},
    {value: 'jp', viewValue: 'JP'},
    {value: 'ru', viewValue: 'RU'},
  ]

  public selectedRegion: string = "";

  public banner!: Banner;

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
      if (params['region']) {
        this.selectedRegion = params['region'];
        localStorage.setItem("region", params['region']);
      }
      if (params['user'] && params['user'] !== '') {
        this.getSummonerByName(params['user'], this.selectedRegion ?? "euw");
        this.resetProfile();
      } else if (params['puuid']) {
        this.getSummonerByPuuid(params['puuid']);
        this.resetProfile();
      } else if (params['user'] && params['user'] !== '' && params['user'] !== localStorage.getItem("username")) {
        this.username.setValue(params['user']);
        localStorage.setItem("username", params['user']);
        this.onSearch();
      } else if (this.username.value === '' && this.inputUsername) {
        this.username.setValue(this.inputUsername);
        localStorage.setItem("username", this.inputUsername);
        this.onSearch();
      } else if (localStorage.getItem("username")) {
        this.username.setValue(localStorage.getItem("username"));
        this.onSearch();
      }
    });
    this.selectedRegion = localStorage.getItem("region") ? localStorage.getItem("region")! : 'euw';
  }

  public onSearch(): void {
    localStorage.setItem("username", this.username.value);
    localStorage.setItem("region", this.selectedRegion);
    this.resetProfile();
    this.router.navigate(['/'], { queryParams: { user: this.username.value, region: this.selectedRegion } }).then(() => {
      window.location.reload();
    });
  }

  public resetProfile(): void {
    localStorage.clear();
    this.summoner = undefined;
    this.league = undefined;
    this.masteries = undefined;
  }

  public getSummonerByName(username: string, region: string): void {
    this.apiRiotService.getSummonerByName(username, region).subscribe(data => {
      this.summoner = data;
      this.getLeagueById();
      this.getMasteriesById();
    });
  }

  public getSummonerByPuuid(puuid: string): void {
    this.apiRiotService.getSummonerByPuuid(puuid).subscribe(data => {
      this.summoner = data;
      this.username.setValue(data.name);
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
    });
  }

  public getChampionIconById(championId: number): any {
    return 'assets/champion/' + this.championsService.getChampionInternalNameById(championId) + '.png';
  }

  public isSmurf(): boolean {
    let count = 0;
    if (!this.summoner) {
      return false;
    }
    if (this.summoner.summonerLevel < 70) {
      count += 1;
    }
    if (this.summoner.summonerLevel < 40) {
      count += 2;
    }
    if (this.summoner.profileIconId < 40) {
      count += 1;
    }
    if (this.getRankedLeague('RANKED_SOLO_5x5') && (this.getRankedLeague('RANKED_SOLO_5x5')!.wins + this.getRankedLeague('RANKED_SOLO_5x5')!.losses) < 70) {
      count += 1;
    }
    if (this.getRankedLeague('RANKED_SOLO_5x5') && this.calcWinrate(this.getRankedLeague('RANKED_SOLO_5x5')) > 60) {
      count += 1;
    }
    if (this.getRankedLeague('RANKED_SOLO_5x5') && this.calcWinrate(this.getRankedLeague('RANKED_SOLO_5x5')) < 40) {
      count -= 1;
    }
    if (count > 2) {
      return true;
    } else {
      return false;
    }
  }
}
