import { Injectable } from '@angular/core';
import { CURRENT_CONDITION_PREFIX } from '../utils/utils';


@Injectable({
  providedIn: 'root'
})

export class StorageService {

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

  setDataInLocalWithTime(keyValue: string, data: any): void {
    const currentTime = new Date().getTime();
    const dataWithTimestamp = { data, timestamp: currentTime };

    localStorage.setItem(keyValue, JSON.stringify(dataWithTimestamp));
  }

  generateConcatKeyValue(zipcode: string, prefix: string) {
    return `${prefix}:${zipcode}`
  }

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

      // Check if the data is expired
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
   * the keyvalue is still valid regarding expiration time 
   * @param zipcode 
   * @param timeExpiration //TODO: add it later 
   * @returns 
   */
  isCurrentConditionInLocalAndValid(zipcode: string): boolean {
    const keyValue = this.generateConcatKeyValue(zipcode, CURRENT_CONDITION_PREFIX);
    const currentCondition = this.getDataFromLocal(keyValue);

    if (currentCondition) { //if key exist in local storage check if it is expired
      if (!this.isDataExpired(keyValue, 0.5)) {//30 sec test
        console.log('Data not expired ! retrieve value for ', keyValue, ' in local storage');
        return true;
      } else { //if key expired we remove it from local storage
        console.log('Data expired ! removing key ', keyValue, ' and API will be requested');
        this.removeDataFromLocal(keyValue);
        return false;
      }
    }

    console.log('key for ', zipcode, ' does not exist');
    return false; //key does not exist in local storage
  }

}
