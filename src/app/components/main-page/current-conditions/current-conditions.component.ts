import { Component, inject, OnInit, Signal } from '@angular/core';
import { WeatherService } from "../../../common/services/weather.service";
import { LOCATIONS, LocationService } from "../../../common/services/location.service";
import { Router } from "@angular/router";
import { ConditionsAndZip } from '../../../common/types/conditions-and-zip.type';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent implements OnInit {

  private locations: string[] = [];
  private weatherService = inject(WeatherService);
  private router = inject(Router);
  protected locationService = inject(LocationService);
  protected currentConditionsByZip: Signal<ConditionsAndZip[]> = this.weatherService.getCurrentConditions();


  ngOnInit(): void {
    //temporary use local storage for init here for test, to clean up
    console.log('currentConditionsByZip(): ', this.currentConditionsByZip());
    let locString = localStorage.getItem(LOCATIONS);
    if (locString) {
      this.locations = JSON.parse(locString);
    }
    this.weatherService.loadCurrentConditions(this.locations);
    this.addCurrentCondition();
  }

  /**
  * @description Subscribes to subject and remove the current conditions to the weatherService 
  * when a zipcode is received.
  */
  public removeCurrentCondition(tabIndex: number): void {
    const filteredZipcode = this.currentConditionsByZip()[tabIndex].zip;
    this.locationService.removeLocation(filteredZipcode);
    this.weatherService.removeCurrentConditions(filteredZipcode);
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
