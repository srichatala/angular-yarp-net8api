import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { Weather } from '../models/weather';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient ) { }

  getWeatherData(): Observable<Weather[]>{
    return this.http.get<Weather[]>(environment.weatherapi+"WeatherForecast");
  }
}
