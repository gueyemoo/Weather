import { Component, inject } from '@angular/core';
import { LocationService } from "../../../common/services/location.service";
import { StorageService } from 'app/common/services/storage.service';
import { TIMEOUT_LOCALSTORAGE_KEY } from 'app/common/utils/utils';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html'
})
export class ZipcodeEntryComponent {
  defaultTimeoutValue: number;

  private storageService = inject(StorageService);
  private location = inject(LocationService);

  constructor() {
    this.defaultTimeoutValue = JSON.parse(this.storageService.getDataFromLocal(TIMEOUT_LOCALSTORAGE_KEY))
      || this.storageService.defaultTimeout;
  }

  /**
   * @description add a zipcode to show in tab
   * @param zipcode 
   */
  addLocation(zipcode: string) {
    if (zipcode !== '') {
      this.location.addLocation(zipcode);
    }
  }

  /**
   * @description save time before token expiration in local storage
   * @param timeout 
   */
  saveTimeout(timeout: number) {
    this.storageService.setDataInLocal(TIMEOUT_LOCALSTORAGE_KEY, timeout);
  }

}
