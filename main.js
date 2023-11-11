(self["webpackChunkng_weather"] = self["webpackChunkng_weather"] || []).push([["main"],{

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css?ngResource */ 6715);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AppComponent = (_class = class AppComponent {
  constructor() {}
}, _class.ctorParameters = () => [], _class);
AppComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AppComponent);


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _components_main_page_zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main-page/zipcode-entry/zipcode-entry.component */ 6642);
/* harmony import */ var _common_services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/services/location.service */ 3899);
/* harmony import */ var _components_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/forecasts-list/forecasts-list.component */ 726);
/* harmony import */ var _common_services_weather_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/services/weather.service */ 1037);
/* harmony import */ var _components_main_page_current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main-page/current-conditions/current-conditions.component */ 7154);
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main-page/main-page.component */ 4766);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ 34);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/service-worker */ 1509);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ 553);
/* harmony import */ var _common_components_tab_list_tab_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/components/tab-list/tab-list.component */ 8630);
/* harmony import */ var _common_components_tab_tab_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/components/tab/tab.component */ 38);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















let AppModule = class AppModule {};
AppModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _components_main_page_zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_1__.ZipcodeEntryComponent, _components_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_3__.ForecastsListComponent, _components_main_page_current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_5__.CurrentConditionsComponent, _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__.MainPageComponent, _common_components_tab_list_tab_list_component__WEBPACK_IMPORTED_MODULE_9__.TabListComponent, _common_components_tab_tab_component__WEBPACK_IMPORTED_MODULE_10__.TabComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule, _app_routing__WEBPACK_IMPORTED_MODULE_7__.routing, _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__.ServiceWorkerModule.register('/ngsw-worker.js', {
    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.production
  })],
  providers: [_common_services_location_service__WEBPACK_IMPORTED_MODULE_2__.LocationService, _common_services_weather_service__WEBPACK_IMPORTED_MODULE_4__.WeatherService],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
})], AppModule);


/***/ }),

/***/ 34:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routing: () => (/* binding */ routing)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/forecasts-list/forecasts-list.component */ 726);
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main-page/main-page.component */ 4766);



const appRoutes = [{
  path: '',
  component: _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__.MainPageComponent
}, {
  path: 'forecast/:zipcode',
  component: _components_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__.ForecastsListComponent
}];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(appRoutes, {});

/***/ }),

/***/ 8630:
/*!******************************************************************!*\
  !*** ./src/app/common/components/tab-list/tab-list.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabListComponent: () => (/* binding */ TabListComponent)
/* harmony export */ });
/* harmony import */ var _tab_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-list.component.html?ngResource */ 7615);
/* harmony import */ var _tab_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-list.component.css?ngResource */ 3714);
/* harmony import */ var _tab_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tab_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _tab_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tab/tab.component */ 38);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let TabListComponent = (_class = class TabListComponent {
  constructor() {
    this.selectedTabChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.removeTab = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  }
  /**
   * @description Check if the input is a string
   * @param input
   */
  isString(input) {
    return typeof input === "string";
  }
  /**
   * @description Update selectedTab and notify parent of changes
   * @param clickedTabIndex index of selected tab by user
   */
  selectTab(clickedTabIndex) {
    this.selectedTab = clickedTabIndex;
    this.selectedTabChange.emit(clickedTabIndex);
  }
  /**
   * @description allow to close the tab on click
   * @param clickedTabIndex index of selected tab by user
   */
  closeTab(clickedTabIndex) {
    this.removeTab.emit(clickedTabIndex);
  }
  /**
   * @description Update visually which tab to show or not based on the selectedTab index
   */
  ngAfterContentChecked() {
    if (this.tabs && this.tabs.length) {
      const selectedTabIndex = this.selectedTab;
      this.tabs.forEach((tab, tabIndex) => {
        const style = tab.elementRef.nativeElement.style;
        style.display = tabIndex === selectedTabIndex ? "block" : "none";
      });
    }
  }
}, _class.propDecorators = {
  tabs: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ContentChildren,
    args: [_tab_tab_component__WEBPACK_IMPORTED_MODULE_2__.TabComponent]
  }],
  selectedTab: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  selectedTabChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
  }],
  removeTab: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
  }]
}, _class);
TabListComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-tab-list',
  template: _tab_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_tab_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TabListComponent);


/***/ }),

/***/ 38:
/*!********************************************************!*\
  !*** ./src/app/common/components/tab/tab.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabComponent: () => (/* binding */ TabComponent)
/* harmony export */ });
/* harmony import */ var _tab_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab.component.html?ngResource */ 1016);
/* harmony import */ var _tab_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab.component.css?ngResource */ 1812);
/* harmony import */ var _tab_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tab_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let TabComponent = (_class = class TabComponent {
  constructor() {
    this.elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef); //use of elementRef to display or not tab
  }
}, _class.propDecorators = {
  title: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  singleData: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }]
}, _class);
TabComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-tab',
  template: _tab_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_tab_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TabComponent);


/***/ }),

/***/ 3899:
/*!*****************************************************!*\
  !*** ./src/app/common/services/location.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOCATIONS: () => (/* binding */ LOCATIONS),
/* harmony export */   LocationService: () => (/* binding */ LocationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 462);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


const LOCATIONS = "locations";
let LocationService = (_class = class LocationService {
  constructor() {
    this.locations = [];
    //expose locations observable to emits zipcodes on any changes
    this.locations$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    let locString = localStorage.getItem(LOCATIONS);
    if (locString) {
      this.locations = JSON.parse(locString);
      this.locations$.next(this.locations);
    }
  }
  addLocation(zipcode) {
    if (this.locations.includes(zipcode)) {
      return alert('This location is already in the tabs');
    }
    this.locations.push(zipcode);
    localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
    this.locations$.next(this.locations);
  }
  removeLocation(zipcode) {
    let index = this.locations.indexOf(zipcode);
    if (index !== -1) {
      this.locations.splice(index, 1);
      localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
      this.locations$.next(this.locations);
    }
  }
}, _class.ctorParameters = () => [], _class);
LocationService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], LocationService);


/***/ }),

/***/ 9799:
/*!****************************************************!*\
  !*** ./src/app/common/services/storage.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageService: () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ 903);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let StorageService = (_class = class StorageService {
  constructor() {
    this.defaultTimeout = 0.5;
  }
  setDataInLocal(keyValue, data) {
    localStorage.setItem(keyValue, data);
  }
  getDataFromLocal(keyValue) {
    return localStorage.getItem(keyValue);
  }
  removeDataFromLocal(keyValue) {
    localStorage.removeItem(keyValue);
  }
  /**
   * @description put the data in localStorage with an additionnal attribute
   * to determine at which time it was put in the localStorage
   * @param keyValue
   * @param data
   */
  setDataInLocalWithTime(keyValue, data) {
    const currentTime = new Date().getTime();
    const dataWithTimestamp = {
      data,
      timestamp: currentTime
    };
    localStorage.setItem(keyValue, JSON.stringify(dataWithTimestamp));
  }
  /**
   * @description generate a concatenation of two input in order to set a new keyValue
   *  format of keyvallue (e.g: prefix:zipcode => Toto:1000)
   * @param zipcode
   * @param prefix
   */
  generateConcatKeyValue(zipcode, prefix) {
    return `${prefix}:${zipcode}`;
  }
  /**
   * @description return if the value in local storage is expired or not
   * @param keyValue keyValue used to stock in local storage
   * @param timeoutInMinutes user timeout for a data to be expired
   */
  isDataExpired(keyValue, timeoutInMinutes) {
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
      console.log(keyValue + ' is expired ? ' + (timeDifferenceInMinutes > timeoutInMinutes));
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
  isKeyInLocalAndValid(keyValue, timeExpiration = this.defaultTimeout) {
    const currentCondition = this.getDataFromLocal(keyValue);
    if (currentCondition) {
      //if key exist in local storage check if it is expired
      if (!this.isDataExpired(keyValue, timeExpiration)) {
        console.log('Data not expired ! retrieve value for ', keyValue, ' in local storage.');
        return true;
      } else {
        //if key expired we remove it from local storage
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
  getTimeoutExpiration() {
    const timeout = this.getDataFromLocal(_utils_utils__WEBPACK_IMPORTED_MODULE_0__.TIMEOUT_LOCALSTORAGE_KEY);
    if (timeout) {
      return JSON.parse(timeout);
    }
    return this.defaultTimeout;
  }
}, _class.ctorParameters = () => [], _class);
StorageService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
})], StorageService);


/***/ }),

/***/ 1037:
/*!****************************************************!*\
  !*** ./src/app/common/services/weather.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherService: () => (/* binding */ WeatherService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3994);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9681);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.service */ 9799);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ 903);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8175);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3303);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 5746);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WeatherService_1;






let WeatherService = WeatherService_1 = (_class = class WeatherService {
  constructor(http) {
    this.http = http;
    this.currentConditions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)([]);
    this.storageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService);
    this.timeout = this.storageService.getTimeoutExpiration();
    this._destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
  /**
  * @description retrieve all the current conditions
  * @param zipcodes
  */
  loadCurrentConditions(zipcodes) {
    this.currentConditions.set([]); // prevent to put again the data on component init
    for (let zipcode of zipcodes) {
      this.addCurrentConditions(zipcode);
    }
  }
  /**
   * @description Add the current condition either from the local storage or from the API
   * if the data do not exist in the local storage and is valid
   * @param zipcode
   */
  addCurrentConditions(zipcode) {
    console.log('--------------NEW GET CONDITION CALL---------------');
    const keyValue = this.storageService.generateConcatKeyValue(zipcode, _utils_utils__WEBPACK_IMPORTED_MODULE_1__.CURRENT_CONDITION_PREFIX);
    if (this.storageService.isKeyInLocalAndValid(keyValue, this.timeout)) {
      const existingCurrentCondition = JSON.parse(this.storageService.getDataFromLocal(keyValue));
      this.currentConditions.mutate(conditions => {
        conditions.push({
          zip: zipcode,
          ...existingCurrentCondition
        });
        console.log('conditions filled by local storage: ', conditions);
      });
    } else {
      // Here we make a request to get the current conditions data from the API. Note the use of backticks and an expression to insert the zipcode
      this.http.get(`${WeatherService_1.URL}/weather?zip=${zipcode},us&units=imperial&APPID=${WeatherService_1.APPID}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
        // Handle the error from the API
        console.error('HTTP Error has been catched');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed$)).subscribe(data => {
        // Handle successful request from the API
        this.storageService.setDataInLocalWithTime(keyValue, data);
        this.currentConditions.mutate(conditions => {
          conditions.push({
            zip: zipcode,
            data
          });
          console.log('conditions filled by http: ', conditions);
        });
      });
    }
  }
  removeCurrentConditions(zipcode) {
    this.currentConditions.mutate(conditions => {
      for (let i in conditions) {
        if (conditions[i].zip == zipcode) conditions.splice(+i, 1);
      }
    });
  }
  getCurrentConditions() {
    return this.currentConditions.asReadonly();
  }
  /**
   * @description retrieve the forecast data from the local storage or the API
   * if the data is not already in the local storage and valid
   * @param zipcode
   */
  getForecast(zipcode) {
    console.log('--------------NEW GET FORECAST CALL---------------');
    const keyValue = this.storageService.generateConcatKeyValue(zipcode, _utils_utils__WEBPACK_IMPORTED_MODULE_1__.CURRENT_FORECAST_PREFIX);
    if (this.storageService.isKeyInLocalAndValid(keyValue, this.timeout)) {
      const localForecast = JSON.parse(this.storageService.getDataFromLocal(keyValue));
      console.log('forecast filled by local storage: ', localForecast.data);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(localForecast.data);
    } else {
      // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
      return this.http.get(`${WeatherService_1.URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService_1.APPID}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(data => {
        console.log('forecast filled by https: ', data);
        this.storageService.setDataInLocalWithTime(keyValue, data);
      }));
    }
  }
  getWeatherIcon(id) {
    if (id >= 200 && id <= 232) return WeatherService_1.ICON_URL + "art_storm.png";else if (id >= 501 && id <= 511) return WeatherService_1.ICON_URL + "art_rain.png";else if (id === 500 || id >= 520 && id <= 531) return WeatherService_1.ICON_URL + "art_light_rain.png";else if (id >= 600 && id <= 622) return WeatherService_1.ICON_URL + "art_snow.png";else if (id >= 801 && id <= 804) return WeatherService_1.ICON_URL + "art_clouds.png";else if (id === 741 || id === 761) return WeatherService_1.ICON_URL + "art_fog.png";else return WeatherService_1.ICON_URL + "art_clear.png";
  }
  /**
  * @description Unsubscribe to prevent any memory leak
  */
  ngOnDestroy() {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}, _class.URL = 'https://api.openweathermap.org/data/2.5', _class.APPID = '5a4b2d457ecbef9eb2a71e480b947604', _class.ICON_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/', _class.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient
}], _class);
WeatherService = WeatherService_1 = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], WeatherService);


/***/ }),

/***/ 903:
/*!***************************************!*\
  !*** ./src/app/common/utils/utils.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CURRENT_CONDITION_PREFIX: () => (/* binding */ CURRENT_CONDITION_PREFIX),
/* harmony export */   CURRENT_FORECAST_PREFIX: () => (/* binding */ CURRENT_FORECAST_PREFIX),
/* harmony export */   SELECTED_TAB_LOCALSTORAGE_KEY: () => (/* binding */ SELECTED_TAB_LOCALSTORAGE_KEY),
/* harmony export */   TIMEOUT_LOCALSTORAGE_KEY: () => (/* binding */ TIMEOUT_LOCALSTORAGE_KEY)
/* harmony export */ });
const CURRENT_CONDITION_PREFIX = 'Condition';
const CURRENT_FORECAST_PREFIX = 'Forecast';
const TIMEOUT_LOCALSTORAGE_KEY = 'Timeout';
const SELECTED_TAB_LOCALSTORAGE_KEY = 'SelectedTab';

/***/ }),

/***/ 726:
/*!***********************************************************************!*\
  !*** ./src/app/components/forecasts-list/forecasts-list.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForecastsListComponent: () => (/* binding */ ForecastsListComponent)
/* harmony export */ });
/* harmony import */ var _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecasts-list.component.html?ngResource */ 5422);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecasts-list.component.css?ngResource */ 8314);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _common_services_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/services/weather.service */ 1037);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let ForecastsListComponent = (_class = class ForecastsListComponent {
  constructor(weatherService, route) {
    this.weatherService = weatherService;
    route.params.subscribe(params => {
      this.zipcode = params['zipcode'];
      weatherService.getForecast(this.zipcode).subscribe(data => this.forecast = data);
    });
  }
}, _class.ctorParameters = () => [{
  type: _common_services_weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
}], _class);
ForecastsListComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-forecasts-list',
  template: _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ForecastsListComponent);


/***/ }),

/***/ 7154:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/main-page/current-conditions/current-conditions.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentConditionsComponent: () => (/* binding */ CurrentConditionsComponent)
/* harmony export */ });
/* harmony import */ var _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-conditions.component.html?ngResource */ 7282);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-conditions.component.css?ngResource */ 7722);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _common_services_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/services/weather.service */ 1037);
/* harmony import */ var _common_services_location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/services/location.service */ 3899);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2484);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 3303);
/* harmony import */ var app_common_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/common/services/storage.service */ 9799);
/* harmony import */ var app_common_utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/common/utils/utils */ 903);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let CurrentConditionsComponent = class CurrentConditionsComponent {
  constructor() {
    this.weatherService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_common_services_weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router);
    this.storageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(app_common_services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService);
    this._destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.locationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_common_services_location_service__WEBPACK_IMPORTED_MODULE_3__.LocationService);
    this.currentConditionsByZip = this.weatherService.getCurrentConditions();
  }
  ngOnInit() {
    this.loadLocationsChange();
  }
  //Set getter and setter for custom two way data binding selectedTab
  get selectedTabIndex() {
    return JSON.parse(this.storageService.getDataFromLocal(app_common_utils_utils__WEBPACK_IMPORTED_MODULE_5__.SELECTED_TAB_LOCALSTORAGE_KEY));
  }
  set selectedTabIndex(userTabSelected) {
    this.storageService.setDataInLocal(app_common_utils_utils__WEBPACK_IMPORTED_MODULE_5__.SELECTED_TAB_LOCALSTORAGE_KEY, userTabSelected);
  }
  /**
  * @description listen to locations and load current conditions from weather service
  */
  loadLocationsChange() {
    this.locationService.locations$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed$)).subscribe(locations => {
      this.weatherService.loadCurrentConditions(locations);
    });
  }
  /**
  * @description remove selected tab from the list and the localstorage
  */
  removeCurrentCondition(tabIndex) {
    const filteredZipcode = this.currentConditionsByZip()[tabIndex].zip;
    this.locationService.removeLocation(filteredZipcode);
  }
  showForecast(zipcode) {
    this.router.navigate(['/forecast', zipcode]);
  }
  getLocationTitle(location) {
    return `${location.data.name} (${location.zip})`;
  }
  /**
  * @description Unsubscribe to prevent any memory leak
  */
  ngOnDestroy() {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
};
CurrentConditionsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-current-conditions',
  template: _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CurrentConditionsComponent);


/***/ }),

/***/ 4766:
/*!*************************************************************!*\
  !*** ./src/app/components/main-page/main-page.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainPageComponent: () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page.component.html?ngResource */ 595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let MainPageComponent = class MainPageComponent {};
MainPageComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-main-page',
  template: _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], MainPageComponent);


/***/ }),

/***/ 6642:
/*!*******************************************************************************!*\
  !*** ./src/app/components/main-page/zipcode-entry/zipcode-entry.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZipcodeEntryComponent: () => (/* binding */ ZipcodeEntryComponent)
/* harmony export */ });
/* harmony import */ var _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zipcode-entry.component.html?ngResource */ 8929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _common_services_location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/services/location.service */ 3899);
/* harmony import */ var app_common_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/common/services/storage.service */ 9799);
/* harmony import */ var app_common_utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/common/utils/utils */ 903);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let ZipcodeEntryComponent = (_class = class ZipcodeEntryComponent {
  constructor() {
    this.storageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(app_common_services_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService);
    this.location = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_common_services_location_service__WEBPACK_IMPORTED_MODULE_1__.LocationService);
    this.defaultTimeoutValue = JSON.parse(this.storageService.getDataFromLocal(app_common_utils_utils__WEBPACK_IMPORTED_MODULE_3__.TIMEOUT_LOCALSTORAGE_KEY)) || this.storageService.defaultTimeout;
  }
  /**
   * @description add a zipcode to show in tab
   * @param zipcode
   */
  addLocation(zipcode) {
    if (zipcode !== '') {
      this.location.addLocation(zipcode);
    }
  }
  /**
   * @description save time before token expiration in local storage
   * @param timeout
   */
  saveTimeout(timeout) {
    this.storageService.setDataInLocal(app_common_utils_utils__WEBPACK_IMPORTED_MODULE_3__.TIMEOUT_LOCALSTORAGE_KEY, timeout);
  }
}, _class.ctorParameters = () => [], _class);
ZipcodeEntryComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-zipcode-entry',
  template: _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], ZipcodeEntryComponent);


/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
  production: false
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4737);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);

/***/ }),

/***/ 6715:
/*!**********************************************!*\
  !*** ./src/app/app.component.css?ngResource ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3714:
/*!******************************************************************************!*\
  !*** ./src/app/common/components/tab-list/tab-list.component.css?ngResource ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.tabs-container {

    .tab {
        display: flex;
        padding: 10px;
        text-align: center;
        align-items: baseline;
        background-color: lightgray;
        cursor: pointer;
        font-size: 15px;
        border: 1px solid black;
        margin-right: 8px;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;

        &:hover {
            background-color: lightblue;
            border-top-right-radius: 8px;
            border-top-left-radius: 8px;
        }

        &.active {
            color: white;
            background-color: rgb(54, 54, 165);
        }
    }

    .tab p {
        align-items: center;
        margin-right: 20px;
    }

    .close-icon {
        background-color: lightblue;
        cursor: pointer;
    }
}`, "",{"version":3,"sources":["webpack://./src/app/common/components/tab-list/tab-list.component.css"],"names":[],"mappings":"AAAA;;IAEI;QACI,aAAa;QACb,aAAa;QACb,kBAAkB;QAClB,qBAAqB;QACrB,2BAA2B;QAC3B,eAAe;QACf,eAAe;QACf,uBAAuB;QACvB,iBAAiB;QACjB,4BAA4B;QAC5B,2BAA2B;;QAE3B;YACI,2BAA2B;YAC3B,4BAA4B;YAC5B,2BAA2B;QAC/B;;QAEA;YACI,YAAY;YACZ,kCAAkC;QACtC;IACJ;;IAEA;QACI,mBAAmB;QACnB,kBAAkB;IACtB;;IAEA;QACI,2BAA2B;QAC3B,eAAe;IACnB;AACJ","sourcesContent":[".tabs-container {\r\n\r\n    .tab {\r\n        display: flex;\r\n        padding: 10px;\r\n        text-align: center;\r\n        align-items: baseline;\r\n        background-color: lightgray;\r\n        cursor: pointer;\r\n        font-size: 15px;\r\n        border: 1px solid black;\r\n        margin-right: 8px;\r\n        border-top-right-radius: 8px;\r\n        border-top-left-radius: 8px;\r\n\r\n        &:hover {\r\n            background-color: lightblue;\r\n            border-top-right-radius: 8px;\r\n            border-top-left-radius: 8px;\r\n        }\r\n\r\n        &.active {\r\n            color: white;\r\n            background-color: rgb(54, 54, 165);\r\n        }\r\n    }\r\n\r\n    .tab p {\r\n        align-items: center;\r\n        margin-right: 20px;\r\n    }\r\n\r\n    .close-icon {\r\n        background-color: lightblue;\r\n        cursor: pointer;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1812:
/*!********************************************************************!*\
  !*** ./src/app/common/components/tab/tab.component.css?ngResource ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.tabShown {
    border: 2px solid black;
    padding: 30px;
}`, "",{"version":3,"sources":["webpack://./src/app/common/components/tab/tab.component.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,aAAa;AACjB","sourcesContent":[".tabShown {\r\n    border: 2px solid black;\r\n    padding: 30px;\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8314:
/*!***********************************************************************************!*\
  !*** ./src/app/components/forecasts-list/forecasts-list.component.css?ngResource ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.icon {
  width: 45px;
  height: 45px;
  position: absolute;
  right: 20px;
  top: -2px;
}
`, "",{"version":3,"sources":["webpack://./src/app/components/forecasts-list/forecasts-list.component.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,SAAS;AACX","sourcesContent":[".icon {\r\n  width: 45px;\r\n  height: 45px;\r\n  position: absolute;\r\n  right: 20px;\r\n  top: -2px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7722:
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/main-page/current-conditions/current-conditions.component.css?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.close {
  cursor: pointer;
}
.flex {
  display: flex;
  justify-content: space-between;
}
`, "",{"version":3,"sources":["webpack://./src/app/components/main-page/current-conditions/current-conditions.component.css"],"names":[],"mappings":"AAAA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,8BAA8B;AAChC","sourcesContent":[".close {\r\n  cursor: pointer;\r\n}\r\n.flex {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<router-outlet></router-outlet>\n";

/***/ }),

/***/ 7615:
/*!*******************************************************************************!*\
  !*** ./src/app/common/components/tab-list/tab-list.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"tabs-container\">\r\n  <ul class=\"nav nav-tabs\">\r\n    <li *ngFor=\"let tab of tabs; index as currentTab\" class=\"tab\" [ngClass]=\"{'active': currentTab === selectedTab }\" (click)=\"selectTab(currentTab)\">\r\n      <ng-container *ngIf=\"isString(tab.title); else displayTemplate\">\r\n        <p class=\"title\">{{ tab.title }}</p>\r\n      </ng-container>\r\n      <ng-template #displayTemplate>\r\n        <ng-container [ngTemplateOutlet]=\"tab.title\"></ng-container>\r\n      </ng-template>\r\n      <button class=\"close-icon\" (click)=\"closeTab(currentTab)\">X</button>\r\n    </li>\r\n  </ul>\r\n  <ng-content></ng-content>\r\n</div>";

/***/ }),

/***/ 1016:
/*!*********************************************************************!*\
  !*** ./src/app/common/components/tab/tab.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"tabShown\">\r\n  <ng-container [ngTemplateOutlet]=\"content\" [ngTemplateOutletContext]=\"{$implicit: singleData}\"></ng-container>\r\n</div>\r\n";

/***/ }),

/***/ 5422:
/*!************************************************************************************!*\
  !*** ./src/app/components/forecasts-list/forecasts-list.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div>\r\n  <div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n      <h3 class=\"panel-title\">5-day forecast for {{forecast?.city.name}}</h3>\r\n\r\n    </div>\r\n    <ul class=\"list-group\">\r\n      <li *ngFor=\"let dailyForecast of forecast?.list\" class=\"list-group-item\">\r\n        {{ (dailyForecast.dt * 1000) | date:'EEEE, MMM d'}}:\r\n        {{dailyForecast.weather[0].main}}\r\n        - Min: {{dailyForecast.temp.min | number:'.0-0'}}\r\n        - Max: {{dailyForecast.temp.max | number:'.0-0'}}\r\n\r\n        <img [src]=\"weatherService.getWeatherIcon(dailyForecast.weather[0].id)\" class=\"icon\">\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n<button class=\"btn btn-success\" [routerLink]=\"'/'\" >< Back to main page</button>\r\n";

/***/ }),

/***/ 7282:
/*!******************************************************************************************************!*\
  !*** ./src/app/components/main-page/current-conditions/current-conditions.component.html?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-tab-list (removeTab)=\"removeCurrentCondition($event)\"\r\n[(selectedTab)]=\"selectedTabIndex\">\r\n  <app-tab \r\n    *ngFor=\"let location of currentConditionsByZip()\" \r\n    [title]=\"getLocationTitle(location)\" \r\n    [singleData]=\"location\"\r\n    [content]=\"weatherTemplate\">\r\n  </app-tab>\r\n</app-tab-list>\r\n\r\n<ng-template #weatherTemplate let-location>\r\n    <div class=\"well flex\" (click)=\"showForecast(location.zip)\">\r\n      <div>\r\n        <h3>{{ location.data.name }} ({{ location.zip }})</h3>\r\n        <h4>Current conditions: {{ location.data.weather[0].main }}</h4>\r\n        <h4>Temperatures today:</h4>\r\n        <p>\r\n          Current {{ location.data.main.temp | number : \".0-0\" }} - Max\r\n          {{ location.data.main.temp_max | number : \".0-0\" }} - Min\r\n          {{ location.data.main.temp_min | number : \".0-0\" }}\r\n        </p>\r\n        <p>\r\n          <a [routerLink]=\"['/forecast', location.zip]\"\r\n            >Show 5-day forecast for {{ location.data.name }}</a\r\n          >\r\n        </p>\r\n      </div>\r\n      <div>\r\n        <img\r\n          [src]=\"weatherService.getWeatherIcon(location.data.weather[0].id)\"\r\n        />\r\n      </div>\r\n    </div>\r\n</ng-template>\r\n\r\n\r\n<!-- TEST ANOTHER CONTEXT FOR SAME COMPONENT -->\r\n\r\n<!-- UNCOMMENT BELOW CODE TO TEST -->\r\n<!-- <app-tab-list>\r\n  <app-tab title=\"Hello, Click me\" [content]=\"presentationTemplate\"> </app-tab>\r\n</app-tab-list> -->\r\n<!-- UNCOMMENT ABOVE CODE TO TEST -->\r\n\r\n\r\n<!-- TEST ANOTHER CONTEXT FOR SAME COMPONENT WITH TITLE AS A TEMPLATE AS WELL -->\r\n\r\n<!-- UNCOMMENT BELOW CODE TO TEST -->\r\n<!-- <app-tab-list>\r\n  <app-tab [title]=\"customTitle\" [content]=\"presentationTemplate\"> </app-tab>\r\n</app-tab-list> -->\r\n<!-- UNCOMMENT ABOVE CODE TO TEST -->\r\n\r\n<!-- FOR TEST PURPOSE OF COMMENTED CODE ABOVE (DO NOT TOUCH PLEASE) -->\r\n<ng-template #customTitle>\r\n  <div style=\"display: flex; flex-direction: column;\">\r\n    <h4>Let your imagination do the rest</h4> <br>\r\n    <h7>I handle the tabs ;)</h7>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #presentationTemplate>\r\n    <span><h1>Greetings</h1></span> <br>\r\n    <p>My name is Mohamed GUEYE. </p> <br>\r\n    <p>I love to code and I am really excited by angular 17, nice to meet you.</p> <br>\r\n    <p>Have a nice day :)</p> \r\n</ng-template>\r\n\r\n";

/***/ }),

/***/ 595:
/*!**************************************************************************!*\
  !*** ./src/app/components/main-page/main-page.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid\">\r\n\r\n  <app-zipcode-entry> </app-zipcode-entry>\r\n  <app-current-conditions></app-current-conditions>\r\n\r\n</div>\r\n";

/***/ }),

/***/ 8929:
/*!********************************************************************************************!*\
  !*** ./src/app/components/main-page/zipcode-entry/zipcode-entry.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"well\">\r\n  <h2>Enter a zipcode:</h2>\r\n  <input type=\"number\" #zipcode placeholder=\"Zipcode\" class=\"form-control\">\r\n  <br>\r\n  <button class=\"btn btn-primary\" (click)=\"addLocation(zipcode.value)\">\r\n    Add location\r\n  </button>\r\n  <h2>Enter a timeout (minutes):</h2>\r\n    <input type=\"number\" #timeout placeholder=\"timeout for cache in minutes\" [value]=\"defaultTimeoutValue\" class=\"form-control\">\r\n  <br>\r\n  <button class=\"btn btn-primary\" (click)=\"saveTimeout(timeout.value)\">\r\n    Save timeout\r\n  </button>\r\n  <br>\r\n</div>\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map