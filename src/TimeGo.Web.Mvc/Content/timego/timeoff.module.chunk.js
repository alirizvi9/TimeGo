webpackJsonp(["timeoff.module"],{

/***/ "../../../../../src/app/timeoff/actions/timeoff.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return GET_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CHANGE_STATUS; });
/* unused harmony export CHANGE_STATUS_COMPLETE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return GetAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return GetCompleteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return SaveAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SaveCompleteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ChangeStatusAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ChangeStatusCompleteAction; });
var GET = '[Timeoff] Get timeoff requests';
var GET_COMPLETE = '[Timeoff] Get Complete';
var ADD = '[Timeoff] Add timeoff request';
var ADD_COMPLETE = '[Timeoff] Add timeoff request Complete';
var CHANGE_STATUS = '[Timeoff] Change status';
var CHANGE_STATUS_COMPLETE = '[Timeoff] Change status Complete';
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

//# sourceMappingURL=timeoff.js.map

/***/ }),

/***/ "../../../../../src/app/timeoff/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export COMPONENTS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__timeoff_list_timeoff_list__ = __webpack_require__("../../../../../src/app/timeoff/components/timeoff-list/timeoff-list.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_4__timeoff_list_timeoff_list__["a" /* TimeoffListComponent */]
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

/***/ "../../../../../src/app/timeoff/components/timeoff-list/timeoff-list.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Timeoff requests\r\n        <button type=\"button\" class=\"btn btn-sm btn-success float-right\" data-toggle=\"modal\" data-target=\"#addmodal\">\r\n          Add\r\n        </button>\r\n      </div>\r\n      <div class=\"card-block\" *ngIf=\"isLoaded\">\r\n        <table class=\"table table-hover table-outline mb-0 hidden-sm-down\" *ngIf=\"isLoaded\">\r\n          <thead class=\"thead-default\">\r\n            <tr>\r\n              <td class=\"text-center\">User Name <a class=\"fa fa-sort\" (click)=\"order.emit('id')\"></a></td>\r\n              <td class=\"text-center\">Start Date <a class=\"fa fa-sort\" (click)=\"order.emit('FromDate')\"></a></td>\r\n              <td class=\"text-center\">End Date <a class=\"fa fa-sort\" (click)=\"order.emit('ToDate')\"></a></td>\r\n              <td class=\"text-center\">Returning to work <a class=\"fa fa-sort\" (click)=\"order.emit('ReturningToWork')\"></a></td>\r\n              <td class=\"text-center\">Reasone <a class=\"fa fa-sort\" (click)=\"order.emit('Reason')\"></a></td>\r\n              <td class=\"text-center\">Status <a class=\"fa fa-sort\" (click)=\"order.emit('ApprovalStatusId')\"></a></td>\r\n              <td class=\"text-center\" *ngIf=\"role == 'Task Manager'\">Action </td>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let timeoff of timeoffrequests\">\r\n              <td class=\"text-center\">{{timeoff.UserName}}</td>\r\n              <td class=\"text-center\">{{timeoff.StartDate | date: 'dd/MM/yyyy'}}</td>\r\n              <td class=\"text-center\">{{timeoff.EndDate | date: 'dd/MM/yyyy'}}</td>\r\n              <td class=\"text-center\">{{timeoff.ReturningToWork | date: 'dd/MM/yyyy'}}</td>\r\n              <td class=\"text-center\">{{timeoff.Reasone}}</td>\r\n              <td class=\"text-center\">{{timeoff.Status}}</td>\r\n              <td class=\"text-center\" *ngIf=\"role == 'Task Manager'\">\r\n                <button type=\"button\" *ngIf=\"timeoff.Status == 'Waiting for Approval' || timeoff.Status == 'Denined'\" class=\"btn btn-success\" (click)=\"changeStatus.emit({id: timeoff.Id, status: 'Accepted'})\">Accepted</button>\r\n                <button type=\"button\" *ngIf=\"timeoff.Status == 'Accepted' || timeoff.Status == 'Waiting for Approval'\" class=\"btn btn-danger\" (click)=\"changeStatus.emit({id: timeoff.Id, status: 'Denined'})\">Denined</button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"addmodal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Add Timeoff request\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header timego-modal\">\r\n        <h4 class=\"modal-title\">Add Timeoff request</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">×</span>\r\n        </button>\r\n      </div>\r\n        <div class=\"modal-body timego-modal\">\r\n          <div class=\"form-group\">\r\n            <label for=\"company-name\">Start date</label>\r\n            <div class=\"input-group mb-3 required\">\r\n              <span class=\"input-group-addon\">\r\n                <i class=\"icon-calendar\"></i>\r\n              </span>\r\n              <input required [(ngModel)]=\"addTimeoff.StartDate\" type=\"date\" class=\"datepicker\"/>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"company-name\">End date</label>\r\n            <div class=\"input-group mb-3 required\">\r\n              <span class=\"input-group-addon\">\r\n                <i class=\"icon-calendar\"></i>\r\n              </span>\r\n              <input required [(ngModel)]=\"addTimeoff.EndDate\" type=\"date\" class=\"datepicker\"/>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"company-name\">Returning to work</label>\r\n            <div class=\"input-group mb-3 required\">\r\n              <span class=\"input-group-addon\">\r\n                <i class=\"icon-calendar\"></i>\r\n              </span>\r\n              <input required [(ngModel)]=\"addTimeoff.ReturningToWork\" type=\"date\" class=\"datepicker\"/>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"company-name\">Reasone</label>\r\n            <div class=\"input-group mb-3 required\">\r\n              <span class=\"input-group-addon\">\r\n                <i class=\"icon-note\"></i>\r\n              </span>\r\n              <input type=\"text\" class=\"form-control\" id=\"company-name\" placeholder=\"Reasone\" [(ngModel)]=\"addTimeoff.Reasone\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"add.emit(addTimeoff)\">Add</button>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/timeoff/components/timeoff-list/timeoff-list.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/timeoff/components/timeoff-list/timeoff-list.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeoffListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_timeoff_list_paging_model__ = __webpack_require__("../../../../../src/app/timeoff/models/timeoff-list-paging.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_timeoff_list_paging_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_timeoff_list_paging_model__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimeoffListComponent = (function () {
    function TimeoffListComponent() {
        this.isLoaded = false;
        this.loading = false;
        this.order = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.add = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.changeStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.changePage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.addTimeoff = {
            StartDate: new Date(),
            EndDate: new Date(),
            Reasone: "",
            ReturningToWork: new Date(),
        };
    }
    TimeoffListComponent.prototype.ngOnInit = function () {
        this.role = commonServerData.Role;
    };
    return TimeoffListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], TimeoffListComponent.prototype, "timeoffrequests", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], TimeoffListComponent.prototype, "isLoaded", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], TimeoffListComponent.prototype, "loading", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_timeoff_list_paging_model__["TimeoffListPagingModel"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_timeoff_list_paging_model__["TimeoffListPagingModel"]) === "function" && _a || Object)
], TimeoffListComponent.prototype, "pagingModel", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], TimeoffListComponent.prototype, "order", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], TimeoffListComponent.prototype, "add", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], TimeoffListComponent.prototype, "changeStatus", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], TimeoffListComponent.prototype, "changePage", void 0);
TimeoffListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'up-timeoff-list',
        template: __webpack_require__("../../../../../src/app/timeoff/components/timeoff-list/timeoff-list.html"),
        styles: [__webpack_require__("../../../../../src/app/timeoff/components/timeoff-list/timeoff-list.scss")]
    })
], TimeoffListComponent);

var _a;
//# sourceMappingURL=timeoff-list.js.map

/***/ }),

/***/ "../../../../../src/app/timeoff/containers/timeoff-page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeoffPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__("../../../../../src/app/timeoff/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_timeoff__ = __webpack_require__("../../../../../src/app/timeoff/actions/timeoff.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TimeoffPageComponent = (function () {
    function TimeoffPageComponent(store) {
        this.store = store;
        this.timeoffrequests$ = store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["d" /* getTimeoffRequests */]);
        this.isLoaded$ = store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["a" /* getIsLoadedStatus */]);
        this.loading$ = store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["b" /* getLoadingStatus */]);
        this.pagingModel$ = store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["c" /* getPagingModel */]);
    }
    TimeoffPageComponent.prototype.ngOnInit = function () {
        var pagingModelView = {
            orderBy: "id",
            page: 1,
            pageSize: 10,
            IsAscending: true,
            count: 10
        };
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_timeoff__["h" /* GetAction */](pagingModelView));
    };
    TimeoffPageComponent.prototype.orderTimeoffrequests = function (orderBy) {
        var pagingModelView = {
            orderBy: orderBy,
            page: 1,
            pageSize: 10,
            IsAscending: true,
            count: 10
        };
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_timeoff__["h" /* GetAction */](pagingModelView));
    };
    TimeoffPageComponent.prototype.addTimeoffrequest = function (model) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_timeoff__["j" /* SaveAction */](model));
        this.orderTimeoffrequests("id");
    };
    TimeoffPageComponent.prototype.changeStatus = function (model) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_timeoff__["d" /* ChangeStatusAction */](model));
        this.orderTimeoffrequests("id");
    };
    TimeoffPageComponent.prototype.changePage = function (model) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_timeoff__["h" /* GetAction */](model));
    };
    return TimeoffPageComponent;
}());
TimeoffPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'timeoff-page',
        changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* ChangeDetectionStrategy */].OnPush,
        template: "\n    <up-timeoff-list [timeoffrequests]=\"timeoffrequests$ | async\" [isLoaded]=\"isLoaded$ | async\" [pagingModel]=\"pagingModel$ | async\" [loading]=\"loading$ | async\" (order)=\"orderTimeoffrequests($event)\" (add)=\"addTimeoffrequest($event)\" (changeStatus)=\"changeStatus($event)\" (changePage)=\"changePage($event)\"></up-timeoff-list>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]) === "function" && _a || Object])
], TimeoffPageComponent);

var _a;
//# sourceMappingURL=timeoff-page.js.map

/***/ }),

/***/ "../../../../../src/app/timeoff/effects/timeoff.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeoffEffects; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__timeoff_service__ = __webpack_require__("../../../../../src/app/timeoff/timeoff.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__actions_timeoff__ = __webpack_require__("../../../../../src/app/timeoff/actions/timeoff.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var TimeoffEffects = (function () {
    function TimeoffEffects(actions$, timeoffService) {
        var _this = this;
        this.actions$ = actions$;
        this.timeoffService = timeoffService;
        this.get$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timeoff__["f" /* GET */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (query) {
            var nextGet$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timeoff__["f" /* GET */]).skip(1);
            return _this.timeoffService
                .getTimeoffList(query)
                .takeUntil(nextGet$)
                .map(function (users) { return new __WEBPACK_IMPORTED_MODULE_11__actions_timeoff__["i" /* GetCompleteAction */](users); })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_timeoff__["i" /* GetCompleteAction */](null)); });
        });
        this.save$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timeoff__["a" /* ADD */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (query) {
            var nextGet$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timeoff__["a" /* ADD */]).skip(1);
            return _this.timeoffService
                .addTimeoff(query)
                .takeUntil(nextGet$)
                .map(function (result) { return new __WEBPACK_IMPORTED_MODULE_11__actions_timeoff__["k" /* SaveCompleteAction */](result); })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_timeoff__["k" /* SaveCompleteAction */](null)); });
        });
        this.change$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timeoff__["c" /* CHANGE_STATUS */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (model) {
            var nextGet$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timeoff__["c" /* CHANGE_STATUS */]).skip(1);
            return _this.timeoffService
                .changeStatus(model)
                .takeUntil(nextGet$)
                .map(function (result) { return new __WEBPACK_IMPORTED_MODULE_11__actions_timeoff__["e" /* ChangeStatusCompleteAction */](result); })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_timeoff__["e" /* ChangeStatusCompleteAction */](null)); });
        });
    }
    return TimeoffEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], TimeoffEffects.prototype, "get$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === "function" && _b || Object)
], TimeoffEffects.prototype, "save$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === "function" && _c || Object)
], TimeoffEffects.prototype, "change$", void 0);
TimeoffEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* Actions */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_10__timeoff_service__["a" /* TimeoffService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__timeoff_service__["a" /* TimeoffService */]) === "function" && _e || Object])
], TimeoffEffects);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=timeoff.js.map

/***/ }),

/***/ "../../../../../src/app/timeoff/models/timeoff-list-paging.model.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=timeoff-list-paging.model.js.map

/***/ }),

/***/ "../../../../../src/app/timeoff/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return reducers; });
/* unused harmony export getTimeoffState */
/* unused harmony export getTimeoffEntityState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getTimeoffRequests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLoadingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getIsLoadedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getPagingModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timeoff__ = __webpack_require__("../../../../../src/app/timeoff/reducers/timeoff.ts");


var reducers = {
    timeoffPage: __WEBPACK_IMPORTED_MODULE_1__timeoff__["e" /* reducer */]
};
var getTimeoffState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createFeatureSelector */])('timeoffPage');
var getTimeoffEntityState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getTimeoffState, function (state) { return state.timeoffPage; });
var getTimeoffRequests = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getTimeoffEntityState, __WEBPACK_IMPORTED_MODULE_1__timeoff__["d" /* getTimeoffRequests */]);
var getLoadingStatus = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getTimeoffEntityState, __WEBPACK_IMPORTED_MODULE_1__timeoff__["b" /* getLoadingStatus */]);
var getIsLoadedStatus = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getTimeoffEntityState, __WEBPACK_IMPORTED_MODULE_1__timeoff__["a" /* getIsLoadedStatus */]);
var getPagingModel = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getTimeoffEntityState, __WEBPACK_IMPORTED_MODULE_1__timeoff__["c" /* getPagingModel */]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/timeoff/reducers/timeoff.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["e"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getTimeoffRequests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLoadingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getIsLoadedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getPagingModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_timeoff__ = __webpack_require__("../../../../../src/app/timeoff/actions/timeoff.ts");

var initialState = {
    timeoffRequests: [],
    isLoaded: false,
    loading: false,
    pagingModel: {
        orderBy: "id",
        page: 1,
        pageSize: 10,
        IsAscending: true,
        count: 10
    }
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_timeoff__["f" /* GET */]:
            var pagingModel = action.payload;
            pagingModel.IsAscending = pagingModel != null && pagingModel.orderBy != "id" ? pagingModel.orderBy != state.pagingModel.orderBy || !state.pagingModel.IsAscending : true;
            {
                return {
                    timeoffRequests: state.timeoffRequests,
                    isLoaded: true,
                    loading: true,
                    pagingModel: pagingModel,
                };
            }
        case __WEBPACK_IMPORTED_MODULE_0__actions_timeoff__["g" /* GET_COMPLETE */]: {
            var loadedTimeoffRequests = action.payload;
            return {
                timeoffRequests: loadedTimeoffRequests.Results,
                isLoaded: true,
                loading: false,
                pagingModel: {
                    IsAscending: state.pagingModel.IsAscending,
                    count: loadedTimeoffRequests.Count,
                    orderBy: state.pagingModel.orderBy,
                    page: state.pagingModel.page,
                    pageSize: state.pagingModel.pageSize
                }
            };
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_timeoff__["a" /* ADD */]:
            {
                return {
                    timeoffRequests: state.timeoffRequests,
                    isLoaded: true,
                    loading: true,
                    pagingModel: state.pagingModel,
                };
            }
        case __WEBPACK_IMPORTED_MODULE_0__actions_timeoff__["b" /* ADD_COMPLETE */]: {
            return {
                timeoffRequests: state.timeoffRequests,
                isLoaded: true,
                loading: false,
                pagingModel: state.pagingModel
            };
        }
        default: {
            return state;
        }
    }
}
var getTimeoffRequests = function (state) { return state.timeoffRequests; };
var getLoadingStatus = function (state) { return state.loading; };
var getIsLoadedStatus = function (state) { return state.isLoaded; };
var getPagingModel = function (state) { return state.pagingModel; };
//# sourceMappingURL=timeoff.js.map

/***/ }),

/***/ "../../../../../src/app/timeoff/timeoff-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeoffRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_timeoff_page__ = __webpack_require__("../../../../../src/app/timeoff/containers/timeoff-page.ts");
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
        component: __WEBPACK_IMPORTED_MODULE_2__containers_timeoff_page__["a" /* TimeoffPageComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__AlwaysAuthGuard__["a" /* AlwaysAuthGuard */]],
        data: {
            title: 'Timeoff'
        }
    }
];
var TimeoffRoutingModule = (function () {
    function TimeoffRoutingModule() {
    }
    return TimeoffRoutingModule;
}());
TimeoffRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], TimeoffRoutingModule);

//# sourceMappingURL=timeoff-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/timeoff/timeoff.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoffModule", function() { return TimeoffModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__timeoff_routing_module__ = __webpack_require__("../../../../../src/app/timeoff/timeoff-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__timeoff_service__ = __webpack_require__("../../../../../src/app/timeoff/timeoff.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__containers_timeoff_page__ = __webpack_require__("../../../../../src/app/timeoff/containers/timeoff-page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__effects_timeoff__ = __webpack_require__("../../../../../src/app/timeoff/effects/timeoff.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_index__ = __webpack_require__("../../../../../src/app/timeoff/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__reducers__ = __webpack_require__("../../../../../src/app/timeoff/reducers/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var TimeoffModule = (function () {
    function TimeoffModule() {
    }
    return TimeoffModule;
}());
TimeoffModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_6__timeoff_routing_module__["a" /* TimeoffRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_10__components_index__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["i" /* StoreModule */].forFeature('timeoffPage', __WEBPACK_IMPORTED_MODULE_11__reducers__["e" /* reducers */]),
            __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["c" /* EffectsModule */].forFeature([__WEBPACK_IMPORTED_MODULE_9__effects_timeoff__["a" /* TimeoffEffects */]]),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__containers_timeoff_page__["a" /* TimeoffPageComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__timeoff_service__["a" /* TimeoffService */]]
    })
], TimeoffModule);

//# sourceMappingURL=timeoff.module.js.map

/***/ }),

/***/ "../../../../../src/app/timeoff/timeoff.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeoffService; });
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





var TimeoffService = (function () {
    function TimeoffService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': 'Bearer ' + commonServerData.Token,
            'Content-Type': 'application/json'
        });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    TimeoffService.prototype.getTimeoffList = function (pagingModel) {
        return this.http.post("/api/Timeoff/", pagingModel, this.options).map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    TimeoffService.prototype.addTimeoff = function (addModel) {
        return this.http.post("/api/AddTimeoff/", addModel, this.options).map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    TimeoffService.prototype.changeStatus = function (changeStatus) {
        return this.http.post("/api/ChangeTimeoffStatus/", changeStatus, this.options).map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    TimeoffService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    return TimeoffService;
}());
TimeoffService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TimeoffService);

var _a;
//# sourceMappingURL=timeoff.service.js.map

/***/ })

});
//# sourceMappingURL=timeoff.module.chunk.js.map