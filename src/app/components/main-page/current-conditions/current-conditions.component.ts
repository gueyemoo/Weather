import { Component, inject, OnDestroy, OnInit, Signal } from '@angular/core';
import { WeatherService } from "../../../common/services/weather.service";
import { LocationService } from "../../../common/services/location.service";
import { Router } from "@angular/router";
import { ConditionsAndZip } from '../../../common/types/conditions-and-zip.type';
import { Subject } from 'rxjs';
import { takeUntil } from "rxjs/operators";

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent implements OnInit, OnDestroy {

  private weatherService = inject(WeatherService);
  private router = inject(Router);
  private _destroyed$: Subject<void> = new Subject<void>();
  protected locationService = inject(LocationService);
  protected currentConditionsByZip: Signal<ConditionsAndZip[]> = this.weatherService.getCurrentConditions();

  ngOnInit(): void {
    this.loadLocationsChange();
  }

  /**
  * @description listen to locations and load current conditions from service
  */
  private loadLocationsChange(): void {
    this.locationService.locations$
      .pipe(takeUntil(this._destroyed$))
      .subscribe((locations) => {
        this.weatherService.loadCurrentConditions(locations);
      });
  }

  /**
  * @description remove selected tab from the list and the localstorage
  */
  public removeCurrentCondition(tabIndex: number): void {
    const filteredZipcode = this.currentConditionsByZip()[tabIndex].zip;
    this.locationService.removeLocation(filteredZipcode);
    this.weatherService.removeCurrentConditions(filteredZipcode);
  }

  public showForecast(zipcode: string): void {
    this.router.navigate(['/forecast', zipcode])
  }

  public getLocationTitle(location: any): string {
    return `${location.data.name} (${location.zip})`;
  }

  /**
  * @description Unsubscribe to prevent any memory leak
  */
  ngOnDestroy() {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
