import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { MapperRiotApiService } from './mapper-riot-api.service';
import { ILeague, ISummoner } from '../models/IRiot';

@Injectable({
  providedIn: 'root'
})
export class ApiRiotService {

  public api_key = "api_key=RGAPI-e2d9f7f3-93d5-489a-b18a-d791a8d6be8a";

  public headers = new HttpHeaders({
  });

  constructor(
    private http: HttpClient,
    private mapperRiotApiService: MapperRiotApiService
  ) { }

  public getSummonerByName(name: string): Observable<ISummoner> {
    let url = 'https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + name + '?' + this.api_key;

    return this.http.get(url, { headers: this.headers }).pipe(
      map(data => this.mapperRiotApiService.mapSummoner(data))
    );
  }

  public getLeagueBySummonerId(id: string): Observable<ILeague[]> {
    let url = 'https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/' + id + '?' + this.api_key;

    return this.http.get(url, { headers: this.headers }).pipe(
      map((data: any) => data.map((league: any) => this.mapperRiotApiService.mapLeague(league)))
    );
  }

  public getMatchsIdBySummonerPuuid(puuid: string, start: number, count: number): Observable<string[]> {
    let url = 'https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/' + puuid + '/ids';
    url += "?start=" + start + "&count=" + count + "&" + this.api_key;

    return this.http.get(url, { headers: this.headers }).pipe(
      map((data: any) => data)
    );
  }

  public getMatchsById(id: string): Observable<any> {
    let url = 'https://europe.api.riotgames.com/lol/match/v5/matches/' + id + '?' + this.api_key;

    return this.http.get(url, { headers: this.headers }).pipe(
      map((data: any) => this.mapperRiotApiService.mapMatch(data))
    );
  }
}
