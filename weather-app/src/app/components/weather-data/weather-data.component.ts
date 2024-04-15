import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Weather } from 'src/app/models/weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.css']
})
export class WeatherDataComponent implements OnInit {
  weatherData: Weather[] = [];
  constructor(private weatherService:WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeatherData().subscribe((response)=>{
      this.weatherData = response;
    });
  }

}
