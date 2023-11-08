import { Component, inject, OnInit, Signal } from '@angular/core';
import {WeatherService} from "../weather.service";
import {LocationService} from "../location.service";
import {Router} from "@angular/router";
import {ConditionsAndZip} from '../conditions-and-zip.type';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent implements OnInit {

  private weatherService = inject(WeatherService);
  private router = inject(Router);
  protected locationService = inject(LocationService);
  protected currentConditionsByZip: Signal<ConditionsAndZip[]> = this.weatherService.getCurrentConditions();

  ngOnInit(): void {
    this.addCurrentCondition();
    this.removeCurrentCondition();
  }

  /**
  * @description Subscribes to subject and remove the current conditions to the weatherService 
  * when a zipcode is received.
  */
  private removeCurrentCondition(): void {
    this.locationService.removeLocation$.subscribe((zipcode) => {
      if (zipcode) {
        this.weatherService.removeCurrentConditions(zipcode);
      }
    });
  }

  /**
  * @description Subscribes to subject and add the current conditions to the weatherService 
  * when a zipcode is received.
  */
  private addCurrentCondition(): void {
    this.locationService.addLocation$.subscribe((zipcode) => {
      if (zipcode) {
        this.weatherService.addCurrentConditions(zipcode);
      }
    });
  }

  public showForecast(zipcode: string): void {
    this.router.navigate(['/forecast', zipcode])
  }
}
