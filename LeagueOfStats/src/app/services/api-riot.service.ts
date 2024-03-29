import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { MapperRiotApiService } from './mapper-riot-api.service';
import { ILeague, IMasteries, ISummoner } from '../models/IRiot';

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
      map((data: any) => this.mapperRiotApiService.mapSummoner(data))
    );
  }

  public postSummonerByName(name: string, region: string): Observable<ISummoner> {
    return this.http.post(this.BASE_URL + 'summoner/' + name, { region: localStorage.getItem("region") ? localStorage.getItem("region")! : 'euw'}, { headers: this.headers }).pipe(
      map((data: any) => this.mapperRiotApiService.mapSummoner(data))
    );
  }

  public getLeagueBySummonerId(id: string): Observable<ILeague[]> {
    return this.http.post(this.BASE_URL + 'league/' + id, { region: localStorage.getItem("region") ? localStorage.getItem("region")! : 'euw'}, { headers: this.headers }).pipe(
      map((data: any) => data.map((league: any) => this.mapperRiotApiService.mapLeague(league)))
    );
  }

  public getLeagueBySummonerName(name: string): Observable<ILeague[]> {
    return this.http.post(this.BASE_URL + 'rank/' + name, { region: localStorage.getItem("region") ? localStorage.getItem("region")! : 'euw'}, { headers: this.headers }).pipe(
      map((data: any) => data.map((league: any) => this.mapperRiotApiService.mapLeague(league)))
    );
  }

  public getMatchsIdBySummonerPuuid(puuid: string, start: number, count: number): Observable<string[]> {
    let options = "?start=" + start + "&count=" + count;

    return this.http.post(this.BASE_URL + 'matches/' + puuid + options, { region: localStorage.getItem("region") ? localStorage.getItem("region")! : 'euw'}, { headers: this.headers }).pipe(
      map((data: any) => data)
    );
  }

  public getMatchsById(id: string): Observable<any> {
    return this.http.post(this.BASE_URL + 'match/' + id, { region: localStorage.getItem("region") ? localStorage.getItem("region")! : 'euw'}, { headers: this.headers }).pipe(
      map((data: any) => this.mapperRiotApiService.mapMatch(data))
    );
  }

  public getChampionNameById(id: number): Observable<string> {
    return this.http.post(this.BASE_URL + 'championName/' + id, { region: localStorage.getItem("region") ? localStorage.getItem("region")! : 'euw'}, { headers: this.headers }).pipe(
      map((data: any) => data)
    );
  }

  public getSummonerByPuuid(puuid: string): Observable<ISummoner> {
    return this.http.post(this.BASE_URL + 'summoner/puuid/' + puuid, { region: localStorage.getItem("region") ? localStorage.getItem("region")! : 'euw'}, { headers: this.headers }).pipe(
      map(data => this.mapperRiotApiService.mapSummoner(data))
    );
  }

  public getMasteriesBySummonerId(id: string): Observable<IMasteries[]> {
    return this.http.post(this.BASE_URL + 'masteries/' + id, { region: localStorage.getItem("region") ? localStorage.getItem("region")! : 'euw'}, { headers: this.headers }).pipe(
      map((data: any) => data.map((mastery: any) => this.mapperRiotApiService.mapMasteries(mastery)))
    );
  }

  public getSummonerNameByPuuid(puuid: string): Observable<string> {
    return this.http.post(this.BASE_URL + 'summoner/puuid/' + puuid, { region: localStorage.getItem("region") ? localStorage.getItem("region")! : 'euw'}, { headers: this.headers }).pipe(
      map((data: any) => data.name)
    );
  }

  public getActiveGameBySummonerId(id: string): Observable<any> {
    return this.http.post(this.BASE_URL + 'active-games/' + id, { region: localStorage.getItem("region") ? localStorage.getItem("region")! : 'euw'}, { headers: this.headers }).pipe(
      map((data: any) => this.mapperRiotApiService.mapISpectator(data))
    );
  }
}
