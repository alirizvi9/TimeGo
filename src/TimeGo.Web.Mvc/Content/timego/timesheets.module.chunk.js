webpackJsonp(["timesheets.module"],{

/***/ "../../../../../src/app/timesheets/actions/timesheets.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_PERIODS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_PERIODS_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GET_Tasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GET_Tasks_COMPLETE; });
/* unused harmony export ADD */
/* unused harmony export ADD_COMPLETE */
/* unused harmony export EDIT */
/* unused harmony export EDIT_COMPLETE */
/* unused harmony export CHANGE_STATUS */
/* unused harmony export CHANGE_STATUS_COMPLETE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return GetAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return GetCompleteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return GetPeriodAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return GetPeriodCompleteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return GetTasksAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return GetTasksCompleteAction; });
/* unused harmony export SaveAction */
/* unused harmony export SaveCompleteAction */
/* unused harmony export EditAction */
/* unused harmony export EditCompleteAction */
/* unused harmony export ChangeStatusAction */
/* unused harmony export ChangeStatusCompleteAction */
var GET = '[Timesheets] Get Timesheets';
var GET_COMPLETE = '[Timesheets] Get Timesheets Complete';
var GET_PERIODS = '[Timesheets] Get periods';
var GET_PERIODS_COMPLETE = '[Timesheets] Get periods Complete';
var GET_Tasks = '[Timesheets] Get Tasks';
var GET_Tasks_COMPLETE = '[Timesheets] Get Tasks Complete';
var ADD = '[Timesheets] Add time line';
var ADD_COMPLETE = '[Timesheets] Add time line Complete';
var EDIT = '[Timesheets] Edit time line';
var EDIT_COMPLETE = '[Timesheets] Edit time line Complete';
var CHANGE_STATUS = '[Timesheets] Change status';
var CHANGE_STATUS_COMPLETE = '[Timesheets] Change status Complete';
var GetAction = (function () {
    function GetAction(payload) {
        this.payload = payload;
        this.type = GET;
    }
    return GetAction;
}());

var GetCompleteAction = (function () {
    function GetCompleteAction(payload) {
        this.payload = payload;
        this.type = GET_COMPLETE;
    }
    return GetCompleteAction;
}());

var GetPeriodAction = (function () {
    function GetPeriodAction(payload) {
        this.payload = payload;
        this.type = GET_PERIODS;
    }
    return GetPeriodAction;
}());

var GetPeriodCompleteAction = (function () {
    function GetPeriodCompleteAction(payload) {
        this.payload = payload;
        this.type = GET_PERIODS_COMPLETE;
    }
    return GetPeriodCompleteAction;
}());

var GetTasksAction = (function () {
    function GetTasksAction(payload) {
        this.payload = payload;
        this.type = GET_Tasks;
    }
    return GetTasksAction;
}());

var GetTasksCompleteAction = (function () {
    function GetTasksCompleteAction(payload) {
        this.payload = payload;
        this.type = GET_Tasks_COMPLETE;
    }
    return GetTasksCompleteAction;
}());

var SaveAction = (function () {
    function SaveAction(payload) {
        this.payload = payload;
        this.type = ADD;
    }
    return SaveAction;
}());

var SaveCompleteAction = (function () {
    function SaveCompleteAction(payload) {
        this.payload = payload;
        this.type = ADD_COMPLETE;
    }
    return SaveCompleteAction;
}());

var EditAction = (function () {
    function EditAction(payload) {
        this.payload = payload;
        this.type = EDIT;
    }
    return EditAction;
}());

var EditCompleteAction = (function () {
    function EditCompleteAction(payload) {
        this.payload = payload;
        this.type = EDIT_COMPLETE;
    }
    return EditCompleteAction;
}());

var ChangeStatusAction = (function () {
    function ChangeStatusAction(payload) {
        this.payload = payload;
        this.type = CHANGE_STATUS;
    }
    return ChangeStatusAction;
}());

var ChangeStatusCompleteAction = (function () {
    function ChangeStatusCompleteAction(payload) {
        this.payload = payload;
        this.type = CHANGE_STATUS_COMPLETE;
    }
    return ChangeStatusCompleteAction;
}());

//# sourceMappingURL=timesheets.js.map

/***/ }),

/***/ "../../../../../src/app/timesheets/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export COMPONENTS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__timesheets_timesheets__ = __webpack_require__("../../../../../src/app/timesheets/components/timesheets/timesheets.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_4__timesheets_timesheets__["a" /* TimesheetsComponent */]
];
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */]
        ],
        declarations: COMPONENTS,
        exports: COMPONENTS,
    })
], ComponentsModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/timesheets/components/timesheets/timesheets.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-8 push-md-2\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Timesheets\r\n      </div>\r\n      <div class=\"card-block\">\r\n        <div class=\"form-group\">\r\n          <select (change)=\"selectPeriod.emit($event.target.value)\" class=\"form-control col-md-3\">\r\n            <option [value]=\"0\">none</option>\r\n            <option [value]=\"period.Id\" *ngFor=\"let period of periods\">{{period.PeriodStart | date: 'EEE d-MMM'}} to {{period.PeriodEnd | date: 'EEE d-MMM'}}</option>\r\n          </select>\r\n        </div>\r\n        <div *ngIf=\"isLoaded\" class=\"form-group\">\r\n          <div *ngFor=\"let line of timesheets.Lines\">\r\n            <div class=\"row form-group\">\r\n              <div class=\"col-md-2\">{{line.Date | date: 'EEE d-MMM'}}</div>\r\n              <div class=\"col-md-2\"><input type=\"time\" [(ngModel)]=\"line.StartTime\" class=\"form-control\" /> </div>\r\n              to\r\n              <div class=\"col-md-2\"> <input type=\"time\" [(ngModel)]=\"line.EndTime\" class=\"form-control\" /></div>\r\n              <div class=\"col-md-2\">\r\n                <select [(ngModel)]=\"line.TaskId\" class=\"form-control\">\r\n                  <option [value]=\"0\">none</option>\r\n                  <option *ngFor=\"let task of tasks\" [ngValue]=\"task.id\">{{task.TaskName}}</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                0 hr\r\n              </div>\r\n            </div>\r\n            <div class=\"row form-group\">\r\n              <div class=\"col-md-1\">\r\n                <button type=\"button\" class=\"btn btn-outline-primary\">+</button>\r\n              </div>\n              <div class=\"col-md-4\">\r\n                add another line for {{line.Date | date: 'EEE d-MMM'}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-2 row\" *ngIf=\"isLoaded\">\r\n            <b>Total time: 0 hr </b>\r\n          </div>\r\n          <div class=\"row\" *ngIf=\"isLoaded\">\r\n            <label class=\"col-md-2\">Notes: </label>\r\n            <textarea rows=\"4\" class=\"col-md-4\" cols=\"50\" [(ngModel)]=\"timesheets.EmployeeNotes\"></textarea>\r\n          </div>\r\n          <div class=\"row col-md-2\">\r\n            <button type=\"button\" class=\"btn btn-primary\">Save</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/timesheets/components/timesheets/timesheets.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/timesheets/components/timesheets/timesheets.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimesheetsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_timesheets_model__ = __webpack_require__("../../../../../src/app/timesheets/models/timesheets.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_timesheets_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_timesheets_model__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimesheetsComponent = (function () {
    function TimesheetsComponent() {
        this.isLoaded = false;
        this.loading = false;
        this.selectPeriod = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    TimesheetsComponent.prototype.ngOnInit = function () {
    };
    TimesheetsComponent.prototype.totalLineTime = function (line) {
        var result = (+line.EndTime.valueOf() - +line.StartTime.valueOf()) / 1000 / 60 / 60;
        return result;
    };
    TimesheetsComponent.prototype.totalTime = function (lines) {
        var time = 0;
        for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
            var line = lines_1[_i];
            time += this.totalLineTime(line);
        }
        return time;
    };
    return TimesheetsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_timesheets_model__["Timesheets"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_timesheets_model__["Timesheets"]) === "function" && _a || Object)
], TimesheetsComponent.prototype, "timesheets", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], TimesheetsComponent.prototype, "isLoaded", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], TimesheetsComponent.prototype, "loading", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], TimesheetsComponent.prototype, "periods", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], TimesheetsComponent.prototype, "tasks", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], TimesheetsComponent.prototype, "selectPeriod", void 0);
TimesheetsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'up-timesheets',
        template: __webpack_require__("../../../../../src/app/timesheets/components/timesheets/timesheets.html"),
        styles: [__webpack_require__("../../../../../src/app/timesheets/components/timesheets/timesheets.scss")]
    })
], TimesheetsComponent);

var _a;
//# sourceMappingURL=timesheets.js.map

/***/ }),

/***/ "../../../../../src/app/timesheets/containers/timesheets-page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimesheetsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__("../../../../../src/app/timesheets/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_timesheets__ = __webpack_require__("../../../../../src/app/timesheets/actions/timesheets.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TimesheetsPageComponent = (function () {
    function TimesheetsPageComponent(store) {
        this.store = store;
        this.timesheets$ = store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["e" /* getTimesheet */]);
        this.isLoaded$ = store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["a" /* getIsLoadedStatus */]);
        this.loading$ = store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["b" /* getLoadingStatus */]);
        this.periods$ = store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["c" /* getPeriods */]);
        this.tasks$ = store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["d" /* getTasks */]);
    }
    TimesheetsPageComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_timesheets__["i" /* GetPeriodAction */](0));
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_timesheets__["k" /* GetTasksAction */](0));
    };
    TimesheetsPageComponent.prototype.selectPeriod = function (id) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_timesheets__["g" /* GetAction */](id));
    };
    return TimesheetsPageComponent;
}());
TimesheetsPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'timesheets-page',
        changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* ChangeDetectionStrategy */].OnPush,
        template: "\n    <up-timesheets [timesheets]=\"timesheets$ | async\" [isLoaded]=\"isLoaded$ | async\" [periods]=\"periods$ | async\" [tasks]=\"tasks$ | async\" [loading]=\"loading$ | async\" (selectPeriod)=\"selectPeriod($event)\"></up-timesheets>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]) === "function" && _a || Object])
], TimesheetsPageComponent);

var _a;
//# sourceMappingURL=timesheets-page.js.map

/***/ }),

/***/ "../../../../../src/app/timesheets/effects/timesheets.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimesheetsEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_skip__ = __webpack_require__("../../../../rxjs/add/operator/skip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_skip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_skip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__timesheets_service__ = __webpack_require__("../../../../../src/app/timesheets/timesheets.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__ = __webpack_require__("../../../../../src/app/timesheets/actions/timesheets.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var TimesheetsEffects = (function () {
    function TimesheetsEffects(actions$, timesheetsService) {
        var _this = this;
        this.actions$ = actions$;
        this.timesheetsService = timesheetsService;
        this.get$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["a" /* GET */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (query) {
            var nextGet$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["a" /* GET */]).skip(1);
            return _this.timesheetsService.getTimesheet(query)
                .takeUntil(nextGet$)
                .map(function (timesheet) { return new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["h" /* GetCompleteAction */](timesheet); })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["h" /* GetCompleteAction */](null)); });
        });
        this.getPeriods$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["c" /* GET_PERIODS */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .switchMap(function () {
            var nextGet$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["c" /* GET_PERIODS */]).skip(1);
            return _this.timesheetsService.getPeriods()
                .takeUntil(nextGet$)
                .map(function (result) { return new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["j" /* GetPeriodCompleteAction */](result); })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["j" /* GetPeriodCompleteAction */](null)); });
        });
        this.getTasks$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["e" /* GET_Tasks */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .switchMap(function () {
            var nextGet$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["e" /* GET_Tasks */]).skip(1);
            return _this.timesheetsService.getTasks()
                .takeUntil(nextGet$)
                .map(function (result) { return new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["l" /* GetTasksCompleteAction */](result); })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["l" /* GetTasksCompleteAction */](null)); });
        });
    }
    return TimesheetsEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], TimesheetsEffects.prototype, "get$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === "function" && _b || Object)
], TimesheetsEffects.prototype, "getPeriods$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === "function" && _c || Object)
], TimesheetsEffects.prototype, "getTasks$", void 0);
TimesheetsEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* Actions */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_10__timesheets_service__["a" /* TimesheetsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__timesheets_service__["a" /* TimesheetsService */]) === "function" && _e || Object])
], TimesheetsEffects);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=timesheets.js.map

/***/ }),

/***/ "../../../../../src/app/timesheets/models/timesheets.model.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=timesheets.model.js.map

/***/ }),

/***/ "../../../../../src/app/timesheets/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return reducers; });
/* unused harmony export getTimesheetsState */
/* unused harmony export getTimesheetsEntityState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getPeriods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getTimesheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLoadingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getIsLoadedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getTasks; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timesheets__ = __webpack_require__("../../../../../src/app/timesheets/reducers/timesheets.ts");


var reducers = {
    timesheetsPage: __WEBPACK_IMPORTED_MODULE_1__timesheets__["f" /* reducer */]
};
var getTimesheetsState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createFeatureSelector */])('timesheetsPage');
var getTimesheetsEntityState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getTimesheetsState, function (state) { return state.timesheetsPage; });
var getPeriods = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getTimesheetsEntityState, __WEBPACK_IMPORTED_MODULE_1__timesheets__["c" /* getPeriods */]);
var getTimesheet = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getTimesheetsEntityState, __WEBPACK_IMPORTED_MODULE_1__timesheets__["e" /* getTimesheet */]);
var getLoadingStatus = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getTimesheetsEntityState, __WEBPACK_IMPORTED_MODULE_1__timesheets__["b" /* getLoadingStatus */]);
var getIsLoadedStatus = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getTimesheetsEntityState, __WEBPACK_IMPORTED_MODULE_1__timesheets__["a" /* getIsLoadedStatus */]);
var getTasks = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getTimesheetsEntityState, __WEBPACK_IMPORTED_MODULE_1__timesheets__["d" /* getTasks */]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/timesheets/reducers/timesheets.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["f"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getPeriods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLoadingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getIsLoadedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getTimesheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getTasks; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_timesheets__ = __webpack_require__("../../../../../src/app/timesheets/actions/timesheets.ts");

var initialState = {
    timesheet: null,
    isLoaded: false,
    loading: false,
    periods: [],
    periodId: 0,
    tasks: []
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_timesheets__["a" /* GET */]:
            {
                var periodId = action.payload;
                return {
                    timesheet: state.timesheet,
                    isLoaded: true,
                    loading: true,
                    periods: state.periods,
                    periodId: periodId,
                    tasks: state.tasks
                };
            }
        case __WEBPACK_IMPORTED_MODULE_0__actions_timesheets__["b" /* GET_COMPLETE */]: {
            var timesheet = action.payload;
            return {
                timesheet: timesheet,
                isLoaded: true,
                loading: false,
                periods: state.periods,
                periodId: state.periodId,
                tasks: state.tasks
            };
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_timesheets__["c" /* GET_PERIODS */]:
            {
                return {
                    timesheet: state.timesheet,
                    isLoaded: true,
                    loading: false,
                    periods: state.periods,
                    periodId: state.periodId,
                    tasks: state.tasks
                };
            }
        case __WEBPACK_IMPORTED_MODULE_0__actions_timesheets__["d" /* GET_PERIODS_COMPLETE */]: {
            var periods = action.payload;
            return {
                timesheet: state.timesheet,
                isLoaded: true,
                loading: false,
                periods: periods,
                periodId: state.periodId,
                tasks: state.tasks
            };
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_timesheets__["e" /* GET_Tasks */]:
            {
                return {
                    timesheet: state.timesheet,
                    isLoaded: true,
                    loading: false,
                    periods: state.periods,
                    periodId: state.periodId,
                    tasks: state.tasks
                };
            }
        case __WEBPACK_IMPORTED_MODULE_0__actions_timesheets__["f" /* GET_Tasks_COMPLETE */]: {
            var tasks = action.payload;
            return {
                timesheet: state.timesheet,
                isLoaded: true,
                loading: false,
                periods: state.periods,
                periodId: state.periodId,
                tasks: tasks
            };
        }
        default: {
            return state;
        }
    }
}
var getPeriods = function (state) { return state.periods; };
var getLoadingStatus = function (state) { return state.loading; };
var getIsLoadedStatus = function (state) { return state.isLoaded; };
var getTimesheet = function (state) { return state.timesheet; };
var getTasks = function (state) { return state.tasks; };
//# sourceMappingURL=timesheets.js.map

/***/ }),

/***/ "../../../../../src/app/timesheets/timesheets-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimesheetsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_timesheets_page__ = __webpack_require__("../../../../../src/app/timesheets/containers/timesheets-page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AlwaysAuthGuard__ = __webpack_require__("../../../../../src/app/AlwaysAuthGuard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__containers_timesheets_page__["a" /* TimesheetsPageComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__AlwaysAuthGuard__["a" /* AlwaysAuthGuard */]],
        data: {
            title: 'timesheets'
        }
    }
];
var TimesheetsRoutingModule = (function () {
    function TimesheetsRoutingModule() {
    }
    return TimesheetsRoutingModule;
}());
TimesheetsRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], TimesheetsRoutingModule);

//# sourceMappingURL=timesheets-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/timesheets/timesheets.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesheetsModule", function() { return TimesheetsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__timesheets_routing_module__ = __webpack_require__("../../../../../src/app/timesheets/timesheets-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__timesheets_service__ = __webpack_require__("../../../../../src/app/timesheets/timesheets.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__containers_timesheets_page__ = __webpack_require__("../../../../../src/app/timesheets/containers/timesheets-page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__effects_timesheets__ = __webpack_require__("../../../../../src/app/timesheets/effects/timesheets.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_datepicker__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_index__ = __webpack_require__("../../../../../src/app/timesheets/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reducers__ = __webpack_require__("../../../../../src/app/timesheets/reducers/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var TimesheetsModule = (function () {
    function TimesheetsModule() {
    }
    return TimesheetsModule;
}());
TimesheetsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_6__timesheets_routing_module__["a" /* TimesheetsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_11__components_index__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["i" /* StoreModule */].forFeature('timesheetsPage', __WEBPACK_IMPORTED_MODULE_12__reducers__["f" /* reducers */]),
            __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["c" /* EffectsModule */].forFeature([__WEBPACK_IMPORTED_MODULE_9__effects_timesheets__["a" /* TimesheetsEffects */]]),
            __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_datepicker__["b" /* DatepickerModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_datepicker__["a" /* BsDatepickerModule */].forRoot(),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__containers_timesheets_page__["a" /* TimesheetsPageComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__timesheets_service__["a" /* TimesheetsService */]]
    })
], TimesheetsModule);

//# sourceMappingURL=timesheets.module.js.map

/***/ }),

/***/ "../../../../../src/app/timesheets/timesheets.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimesheetsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TimesheetsService = (function () {
    function TimesheetsService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': 'Bearer ' + commonServerData.Token,
            'Content-Type': 'application/json'
        });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    TimesheetsService.prototype.getTimesheet = function (idPeriod) {
        return this.http.get("/api/Timesheets?periodId=" + idPeriod, this.options).map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    TimesheetsService.prototype.getPeriods = function () {
        return this.http.get("/api/periods/", this.options).map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    TimesheetsService.prototype.getTasks = function () {
        return this.http.get("/api/tasks/", this.options).map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    TimesheetsService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    return TimesheetsService;
}());
TimesheetsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TimesheetsService);

var _a;
//# sourceMappingURL=timesheets.service.js.map

/***/ })

});
//# sourceMappingURL=timesheets.module.chunk.js.map