import { Injectable } from '@angular/core';
import { CURRENT_CONDITION_PREFIX, TIMEOUT_LOCALSTORAGE_KEY } from '../utils/utils';
import { CurrentConditions } from 'app/components/main-page/current-conditions/current-conditions.type';
import { Forecast } from 'app/components/forecasts-list/forecast.type';


@Injectable({
  providedIn: 'root'
})

export class StorageService {

  defaultTimeout: number = 0.5;

  constructor() { }

  setDataInLocal(keyValue: string, data: string): void {
    localStorage.setItem(keyValue, data);
  }

  getDataFromLocal(keyValue: string) {
    return localStorage.getItem(keyValue)
  }

  removeDataFromLocal(keyValue: string) {
    localStorage.removeItem(keyValue);

  }

  /**
   * @description put the data in localStorage with an additionnal attribute
   * to determine at which time it was put in the localStorage
   * @param keyValue 
   * @param data 
   */
  setDataInLocalWithTime(keyValue: string, data: CurrentConditions | Forecast): void {
    const currentTime = new Date().getTime();
    const dataWithTimestamp = { data, timestamp: currentTime };

    localStorage.setItem(keyValue, JSON.stringify(dataWithTimestamp));
  }

  /**
   * @description generate a concatenation of two input in order to set a new keyValue
   *  format of keyvallue (e.g: prefix:zipcode => Toto:1000)
   * @param zipcode 
   * @param prefix 
   */
  generateConcatKeyValue(zipcode: string, prefix: string) {
    return `${prefix}:${zipcode}`
  }

  /**
   * @description return if the value in local storage is expired or not
   * @param keyValue keyValue used to stock in local storage
   * @param timeoutInMinutes user timeout for a data to be expired
   */
  isDataExpired(keyValue: string, timeoutInMinutes: number): boolean {
    const storedData = this.getDataFromLocal(keyValue);

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const currentTime = new Date().getTime();
      const dataTimestamp = parsedData.timestamp;

      // Calculate the time difference in minutes: divide result by 1000*60 as 
      // 1000 is number of milliseconds in one second
      // 60 is number of second in one minute
      const timeDifferenceInMinutes = (currentTime - dataTimestamp) / (1000 * 60);

      // return if the data is expired
      console.log('timeDiff in minutes for(', keyValue, ') : ', timeDifferenceInMinutes);
      console.log('timeout in minutes set by user: ', timeoutInMinutes);
      console.log(keyValue + ' is expired ? ' + (timeDifferenceInMinutes > timeoutInMinutes))
      return timeDifferenceInMinutes > timeoutInMinutes;
    }

    // If the data does not exist in local storage, we consider it as expired
    return true;
  }

  /**
   * @description Check if the keyvalue based on zipcode exist in local storage and 
   * if the keyvalue is still valid regarding expiration time 
   * @param keyValue keyvalue stored in local storage
   * @param timeExpiration (optionnal parameter) to set the time before keyValue expire
   */
  isKeyInLocalAndValid(keyValue: string, timeExpiration: number = this.defaultTimeout): boolean {
    const currentCondition = this.getDataFromLocal(keyValue);

    if (currentCondition) { //if key exist in local storage check if it is expired
      if (!this.isDataExpired(keyValue, timeExpiration)) {
        console.log('Data not expired ! retrieve value for ', keyValue, ' in local storage.');
        return true;
      } else { //if key expired we remove it from local storage
        console.log('Data expired ! removing key ', keyValue, ' and API will be requested.');
        this.removeDataFromLocal(keyValue);
        return false;
      }
    }

    console.log('key for ', keyValue, ' does not exist in local storage.');
    return false; //key does not exist in local storage
  }

  /**
   * @description retrieve the time setted by user for expiration of a keyvalue
   */
  getTimeoutExpiration(): number {
    const timeout = this.getDataFromLocal(TIMEOUT_LOCALSTORAGE_KEY)
    if (timeout) {
      return JSON.parse(timeout);
    }
    return this.defaultTimeout;
  }
}
