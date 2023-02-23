import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISpectator } from 'src/app/models/ISpectator';
import { ApiRiotService } from 'src/app/services/api-riot.service';
import { ChampionsService } from 'src/app/services/champions.service';

@Component({
  selector: 'app-current-game',
  templateUrl: './current-game.component.html',
  styleUrls: ['./current-game.component.scss'],
})
export class CurrentGameComponent implements OnInit {
  @Input() summonerName!: string;
  @Input() region: string | undefined;

  public summonerId!: string;

  public spectator: ISpectator | undefined;

  public date = new Date().getTime();

  constructor(
    private apiRiotService: ApiRiotService,
    public router: Router,
    private route: ActivatedRoute,
    public championsService: ChampionsService,
  ) {
      setInterval(() => {
        this.date = new Date().getTime();
      }, 1000)
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['summonerId']) {
        this.summonerId = params['summonerId'];
        this.apiRiotService.getActiveGameBySummonerId(this.summonerId).subscribe(
          (spectator: ISpectator) => {
            this.spectator = spectator;
          }
        );
      }
    });
    if (!this.summonerId) {
      this.apiRiotService.postSummonerByName(this.summonerName, this.region ?? '').subscribe(summoner => {
        this.summonerId = summoner.id;
        this.apiRiotService
          .getActiveGameBySummonerId(summoner.id)
          .subscribe((spectator: ISpectator) => {
            this.spectator = spectator;
          });
      });
    }
  }

  public isSpectatorRoute(): boolean {
    return this.router.url.includes('spectator');
  }

  public timestampToMinSeconds(timestamp: number): string {
    const minutes = Math.floor(timestamp / 60000);
    const seconds = Math.floor(timestamp % 60000 / 1000);
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }
}
