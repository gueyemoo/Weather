import { Component, inject } from '@angular/core';
import { LocationService } from "../../../common/services/location.service";
import { StorageService } from 'app/common/services/storage.service';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html'
})
export class ZipcodeEntryComponent {
  zipcodeInput: string = '';

  defaultTimeoutValue: number;

  private storageService = inject(StorageService);
  private location = inject(LocationService);

  constructor() {
    this.defaultTimeoutValue = JSON.parse(this.storageService.getDataFromLocal('timeout'))
      || this.storageService.defaultTimeout;
  }

  addLocation(zipcode: string) {
    this.location.addLocation(zipcode);
  }

  saveTimeout(timeout: number) {
    this.storageService.setDataInLocal('timeout', timeout);
  }

}
