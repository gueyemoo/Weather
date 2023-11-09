import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const LOCATIONS : string = "locations";

@Injectable()
export class LocationService {

  locations : string[] = [];

  //expose three observables to emits zipcodes on changes
  locations$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  addLocation$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {
    // let locString = localStorage.getItem(LOCATIONS);
    // if (locString) {
    //   this.locations = JSON.parse(locString);
    //   this.locations$.next(this.locations);
    // }
  }

  addLocation(zipcode : string) {
    if (this.locations.indexOf(zipcode) !== -1) {
      return alert('Location exist');
    }
    this.locations.push(zipcode);
    localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
    this.addLocation$.next(zipcode);
  }

  removeLocation(zipcode : string) {
    let index = this.locations.indexOf(zipcode);
    if (index !== -1){
      this.locations.splice(index, 1);
      localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
      this.locations$.next(this.locations);
    }
  }
}
