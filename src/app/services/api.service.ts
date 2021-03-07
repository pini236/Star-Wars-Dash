import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseModel } from '../models/base-model';
import { Pilot } from '../models/pilot';
import { Planet } from '../models/planet';
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURL: string = environment.swapi.baseURL;
  constructor(private http: HttpClient) { }

  getPeople(nextURL: string = null): Observable<BaseModel<Pilot>> {
    return this.http.get<BaseModel<Pilot>>(nextURL || `${this.baseURL}people/`);
  }
  getPlanets(nextURL: string = null): Observable<BaseModel<Planet>> {
    return this.http.get<BaseModel<Planet>>(nextURL || `${this.baseURL}planets/`);

  }
  getVehicles(nextURL: string = null): Observable<BaseModel<Vehicle>> {
    return this.http.get<BaseModel<Vehicle>>(nextURL || `${this.baseURL}vehicles/`);
  }
}
