webpackJsonp(["timesheets.module"],{

/***/ "../../../../../src/app/timesheets/actions/timesheets.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return GET_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return GET_PERIODS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return GET_PERIODS_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return GET_Tasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return GET_Tasks_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD; });
/* unused harmony export ADD_COMPLETE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EDIT; });
/* unused harmony export EDIT_COMPLETE */
/* unused harmony export CHANGE_STATUS */
/* unused harmony export CHANGE_STATUS_COMPLETE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return GetAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return GetCompleteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return GetPeriodAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return GetPeriodCompleteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return GetTasksAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return GetTasksCompleteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return EditAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return EditCompleteAction; });
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

var AddAction = (function () {
    function AddAction(payload) {
        this.payload = payload;
        this.type = ADD;
    }
    return AddAction;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_timepicker__ = __webpack_require__("../../../../ngx-bootstrap/timepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__timesheets_timesheets__ = __webpack_require__("../../../../../src/app/timesheets/components/timesheets/timesheets.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_5__timesheets_timesheets__["a" /* TimesheetsComponent */]
];
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_timepicker__["a" /* TimepickerModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */]
        ],
        declarations: COMPONENTS,
        exports: COMPONENTS,
    })
], ComponentsModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/timesheets/components/timesheets/timesheets.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-8 push-md-2\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\n        TIMESHEETS\r\n      </div>\r\n      <div class=\"card-block\">\r\n        <div class=\"form-group row\">\n            <h5 class=\"col-md-1 timego-center\">Period</h5>\r\n            <select (change)=\"selectPeriod.emit($event.target.value)\" [(ngModel)]=\"periodId\" class=\"form-control col-md-3\">\r\n              <option [value]=\"0\">none</option>\r\n              <option [value]=\"period.Id\" *ngFor=\"let period of periods\">{{period.PeriodStart | date: 'EEE d-MMM'}} to {{period.PeriodEnd | date: 'EEE d-MMM'}}</option>\r\n            </select>\r\n        </div>\r\n        <div *ngIf=\"isLoaded && timesheets != null\" class=\"form-group\">\r\n          <div *ngFor=\"let line of timesheets.Lines; let i = index\">\r\n            <div class=\"row form-group timego-line\">\r\n              <h5 class=\"col-md-2 timego-center\">{{line.Date | date: 'EEE d-MMM'}}</h5>\r\n              <div class=\"col-md-4\">\r\n                <select [(ngModel)]=\"line.TaskId\" class=\"form-control col-md-8\">\r\n                  <option [value]=\"0\">none</option>\r\n                  <option [value]=\"task.Id\" *ngFor=\"let task of tasks\">{{task.TaskName}}</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"col-md-4 row\">\r\n                <timepicker [(ngModel)]=\"line.StartTime\" [arrowkeys]=\"true\" [showMeridian]=\"false\" [mousewheel]=\"false\" [showSpinners]=\"false\" class=\"timego-timepicker\"></timepicker>\r\n                <i class=\"fa fa-arrows-h fa-lg timego-rangetimepiker-icon\"></i>\r\n                <timepicker [(ngModel)]=\"line.EndTime\" [min]=\"line.StartTime\" [mousewheel]=\"false\" [showMeridian]=\"false\" [arrowkeys]=\"false\" [showSpinners]=\"false\" class=\"timego-timepicker\"></timepicker>\r\n              </div>\r\n              <div class=\"col-md-2 timego-center\">\r\n                <b>\r\n                  {{totalLineTimeHr(line)}} h {{totalLineTimeMin(line)}} m\r\n                </b>\r\n              </div>\r\n            </div>\r\n            <div class=\"row form-group border-bottom\" *ngIf=\"i === (timesheets.Lines.length - 1) || timesheets.Lines[i].Date != timesheets.Lines[i+1].Date\">\r\n              <div class=\"col-md-1\">\r\n                <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"addLine.emit(line.Date)\">+</button>\r\n              </div>\r\n              <div class=\"col-md-4 timego-center\">\r\n                add another line for {{line.Date | date: 'EEE d-MMM'}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4 row form-group\" *ngIf=\"isLoaded\">\r\n            <h5>\r\n              Total time: {{totalTimeHr(timesheets.Lines)}} h {{totalTimeMin(timesheets.Lines)}} m\r\n            </h5>\r\n          </div>\r\n          <div class=\"row form-group\" *ngIf=\"isLoaded\">\r\n            <label class=\"col-md-1\">Notes: </label>\r\n            <textarea rows=\"4\" class=\"col-md-11\" cols=\"50\" [(ngModel)]=\"timesheets.EmployeeNotes\"></textarea>\r\n          </div>\r\n          <div class=\"form-group float-right\">\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"save.emit({Period: periodId, Timesheets: timesheets})\">Save</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

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
        this.addLine = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.save = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.mytime = new Date();
    }
    TimesheetsComponent.prototype.ngOnInit = function () {
    };
    TimesheetsComponent.prototype.totalLineTimeHr = function (line) {
        var endTime = new Date(line.EndTime);
        var startTime = new Date(line.StartTime);
        var diffMs = (+endTime.valueOf() - +startTime.valueOf());
        var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
        return diffHrs;
    };
    TimesheetsComponent.prototype.totalLineTimeMin = function (line) {
        var endTime = new Date(line.EndTime);
        var startTime = new Date(line.StartTime);
        var diffMs = (+endTime.valueOf() - +startTime.valueOf());
        var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
        return diffMins;
    };
    TimesheetsComponent.prototype.totalLineTimeMs = function (line) {
        var endTime = new Date(line.EndTime);
        var startTime = new Date(line.StartTime);
        var diffMs = (+endTime.valueOf() - +startTime.valueOf());
        return diffMs;
    };
    TimesheetsComponent.prototype.Start = function (line) {
        var startTime = new Date(line.StartTime);
        return startTime;
    };
    TimesheetsComponent.prototype.End = function (line) {
        var endTime = new Date(line.EndTime);
        return endTime;
    };
    TimesheetsComponent.prototype.totalTimeHr = function (lines) {
        var time = 0;
        for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
            var line = lines_1[_i];
            time += this.totalLineTimeMs(line);
        }
        var diffHrs = Math.floor((time % 86400000) / 3600000); // hours
        return diffHrs;
    };
    TimesheetsComponent.prototype.totalTimeMin = function (lines) {
        var time = 0;
        for (var _i = 0, lines_2 = lines; _i < lines_2.length; _i++) {
            var line = lines_2[_i];
            time += this.totalLineTimeMs(line);
        }
        var diffMins = Math.round(((time % 86400000) % 3600000) / 60000); // minutes
        return diffMins;
    };
    TimesheetsComponent.prototype.updateDoB = function (e) {
        var res = e;
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
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], TimesheetsComponent.prototype, "addLine", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], TimesheetsComponent.prototype, "save", void 0);
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
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_timesheets__["n" /* GetPeriodAction */](0));
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_timesheets__["p" /* GetTasksAction */](0));
    };
    TimesheetsPageComponent.prototype.selectPeriod = function (id) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_timesheets__["l" /* GetAction */](id));
    };
    TimesheetsPageComponent.prototype.addLine = function (date) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_timesheets__["b" /* AddAction */](date));
    };
    TimesheetsPageComponent.prototype.save = function (model) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_timesheets__["d" /* EditAction */](model));
    };
    return TimesheetsPageComponent;
}());
TimesheetsPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'timesheets-page',
        changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* ChangeDetectionStrategy */].OnPush,
        template: "\n    <up-timesheets [timesheets]=\"timesheets$ | async\" [isLoaded]=\"isLoaded$ | async\" [periods]=\"periods$ | async\" [tasks]=\"tasks$ | async\" [loading]=\"loading$ | async\" (selectPeriod)=\"selectPeriod($event)\" (addLine)=\"addLine($event)\" (save)=\"save($event)\"></up-timesheets>\n  ",
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
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["f" /* GET */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (query) {
            var nextGet$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["f" /* GET */]).skip(1);
            return _this.timesheetsService.getTimesheet(query)
                .takeUntil(nextGet$)
                .map(function (timesheet) { return new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["m" /* GetCompleteAction */](timesheet); })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["m" /* GetCompleteAction */](null)); });
        });
        this.getPeriods$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["h" /* GET_PERIODS */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .switchMap(function () {
            var nextGet$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["h" /* GET_PERIODS */]).skip(1);
            return _this.timesheetsService.getPeriods()
                .takeUntil(nextGet$)
                .map(function (result) { return new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["o" /* GetPeriodCompleteAction */](result); })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["o" /* GetPeriodCompleteAction */](null)); });
        });
        this.getTasks$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["j" /* GET_Tasks */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .switchMap(function () {
            var nextGet$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["j" /* GET_Tasks */]).skip(1);
            return _this.timesheetsService.getTasks()
                .takeUntil(nextGet$)
                .map(function (result) { return new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["q" /* GetTasksCompleteAction */](result); })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["q" /* GetTasksCompleteAction */](null)); });
        });
        this.edit = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["c" /* EDIT */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (query) {
            var nextGet$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["f" /* GET */]);
            return _this.timesheetsService.editTimesheet(query.Timesheets)
                .takeUntil(nextGet$)
                .map(function (result) { return new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["l" /* GetAction */](query.Period); })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["e" /* EditCompleteAction */](null)); });
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
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === "function" && _d || Object)
], TimesheetsEffects.prototype, "edit", void 0);
TimesheetsEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* Actions */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_10__timesheets_service__["a" /* TimesheetsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__timesheets_service__["a" /* TimesheetsService */]) === "function" && _f || Object])
], TimesheetsEffects);

var _a, _b, _c, _d, _e, _f;
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
        case __WEBPACK_IMPORTED_MODULE_0__actions_timesheets__["f" /* GET */]:
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
        case __WEBPACK_IMPORTED_MODULE_0__actions_timesheets__["g" /* GET_COMPLETE */]: {
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
        case __WEBPACK_IMPORTED_MODULE_0__actions_timesheets__["h" /* GET_PERIODS */]:
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
        case __WEBPACK_IMPORTED_MODULE_0__actions_timesheets__["i" /* GET_PERIODS_COMPLETE */]: {
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
        case __WEBPACK_IMPORTED_MODULE_0__actions_timesheets__["j" /* GET_Tasks */]:
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
        case __WEBPACK_IMPORTED_MODULE_0__actions_timesheets__["k" /* GET_Tasks_COMPLETE */]: {
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
        case __WEBPACK_IMPORTED_MODULE_0__actions_timesheets__["a" /* ADD */]: {
            var date = action.payload;
            var lines = state.timesheet.Lines;
            var newLine = {
                Date: date,
                EndTime: new Date(),
                Id: 0,
                StartTime: new Date(),
                Task: "",
                TaskId: 0
            };
            lines.push(newLine);
            lines = lines.sort(function (obj1, obj2) {
                if (obj1.Date > obj2.Date) {
                    return 1;
                }
                if (obj1.Date < obj2.Date) {
                    return -1;
                }
                return 0;
            });
            var timesheet = state.timesheet;
            timesheet.Lines = lines;
            return {
                timesheet: timesheet,
                isLoaded: true,
                loading: false,
                periods: state.periods,
                periodId: state.periodId,
                tasks: state.tasks
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
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_index__ = __webpack_require__("../../../../../src/app/timesheets/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_timepicker__ = __webpack_require__("../../../../ngx-bootstrap/timepicker/index.js");
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
            __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_timepicker__["a" /* TimepickerModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_6__timesheets_routing_module__["a" /* TimesheetsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_10__components_index__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["i" /* StoreModule */].forFeature('timesheetsPage', __WEBPACK_IMPORTED_MODULE_12__reducers__["f" /* reducers */]),
            __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["c" /* EffectsModule */].forFeature([__WEBPACK_IMPORTED_MODULE_9__effects_timesheets__["a" /* TimesheetsEffects */]]),
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_RequestService__ = __webpack_require__("../../../../../src/app/services/RequestService.ts");
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
    function TimesheetsService(requestService) {
        this.requestService = requestService;
    }
    TimesheetsService.prototype.getTimesheet = function (idPeriod) {
        return this.requestService.get("/api/Timesheets?periodId=" + idPeriod);
    };
    TimesheetsService.prototype.getPeriods = function () {
        return this.requestService.get("/api/periods/");
    };
    TimesheetsService.prototype.getTasks = function () {
        return this.requestService.get("/api/tasks/");
    };
    TimesheetsService.prototype.editTimesheet = function (timesheets) {
        return this.requestService.post("/api/tasks/", timesheets);
    };
    return TimesheetsService;
}());
TimesheetsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_RequestService__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_RequestService__["a" /* RequestService */]) === "function" && _a || Object])
], TimesheetsService);

var _a;
//# sourceMappingURL=timesheets.service.js.map

/***/ })

});
//# sourceMappingURL=timesheets.module.chunk.js.map