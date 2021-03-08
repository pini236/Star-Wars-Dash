import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { catchError, concatMap, expand, map, reduce } from "rxjs/operators";
import { Observable, of } from 'rxjs';
import { Pilot } from '../models/pilot';
import { Planet } from '../models/planet';
import { Vehicle } from '../models/vehicle';
import { BaseModel } from '../models/base-model';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public people: { [url: string]: Array<Pilot> } = {};
  public vehicles: Array<Vehicle> = [];
  public planets: { [url: string]: Array<Planet> } = {};
  constructor(private apiService: ApiService) { }

  public getAllVehicles(): Observable<any> {
    return this.apiService.getVehicles().pipe(
      expand((data) => {
        return data.next ? this.apiService.getVehicles(data.next) : of();
      }), reduce((acc, data: any) => {
        return acc.concat(data.results);
      }, []),
      catchError((error => of(error)))
    );
  }
  public getAllPeople(): Observable<any> {
    return this.apiService.getPeople().pipe(
      expand((data) => {
        return data.next ? this.apiService.getPeople(data.next) : of();
      }), reduce((acc, data: any) => {
        data.results.map((v) => this.people[v.url] = v)
        return this.people;

      }, []),
      catchError((error => of(error)))
    );
  }
  public getAllPlanets(): Observable<any> {
    return this.apiService.getPlanets().pipe(
      expand((data) => {
        return data.next ? this.apiService.getPlanets(data.next) : of();
      }), reduce((acc, data: any) => {
        data.results.map((v) => this.planets[v.url] = v)
        return this.planets;
      }, []),
      catchError((error => of(error)))
    );
  }
  public getPlanet(name: string): Observable<Planet> {
    return this.apiService.searchPlanet(name).pipe(map((res) => res.results[0]));
  }
  topPopulationByVehicle(vehicle: string) {

  }

  planetsPopulation() {

  }
}
