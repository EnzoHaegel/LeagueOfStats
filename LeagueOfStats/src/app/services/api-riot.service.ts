import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { MapperRiotApiService } from './mapper-riot-api.service';
import { ILeague, ISummoner } from '../models/IRiot';

@Injectable({
  providedIn: 'root'
})
export class ApiRiotService {
  public BASE_URL = 'http://localhost:3000/api/';

  public headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
  });

  constructor(
    private http: HttpClient,
    private mapperRiotApiService: MapperRiotApiService
  ) { }

  public getSummonerByName(name: string): Observable<ISummoner> {
    return this.http.get(this.BASE_URL + 'summoner/' + name, { headers: this.headers }).pipe(
      map(data => this.mapperRiotApiService.mapSummoner(data))
    );
  }

  public getLeagueBySummonerId(id: string): Observable<ILeague[]> {
    return this.http.get(this.BASE_URL + 'league/' + id, { headers: this.headers }).pipe(
      map((data: any) => data.map((league: any) => this.mapperRiotApiService.mapLeague(league)))
    );
  }

  public getMatchsIdBySummonerPuuid(puuid: string, start: number, count: number): Observable<string[]> {
    let options = "?start=" + start + "&count=" + count;

    return this.http.get(this.BASE_URL + 'matches/' + puuid + options, { headers: this.headers }).pipe(
      map((data: any) => data)
    );
  }

  public getMatchsById(id: string): Observable<any> {
    return this.http.get(this.BASE_URL + 'match/' + id, { headers: this.headers }).pipe(
      map((data: any) => this.mapperRiotApiService.mapMatch(data))
    );
  }

  public getChampionNameById(id: number): Observable<string> {
    return this.http.get(this.BASE_URL + 'championName/' + id, { headers: this.headers }).pipe(
      map((data: any) => data)
    );
  }
}
