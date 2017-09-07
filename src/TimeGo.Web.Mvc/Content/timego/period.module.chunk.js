webpackJsonp(["period.module"],{

/***/ "../../../../../src/app/periods/actions/period.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return GET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return GET_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CHANGE_STATUS; });
/* unused harmony export CHANGE_STATUS_COMPLETE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return GetAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return GetCompleteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return SaveAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return SaveCompleteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ChangeStatusAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ChangeStatusCompleteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return DeleteAction; });
var GET = '[Period] Get periods';
var GET_COMPLETE = '[Period] Get Complete';
var ADD = '[Period] Add period';
var ADD_COMPLETE = '[Period] Add period Complete';
var CHANGE_STATUS = '[Period] Change status';
var CHANGE_STATUS_COMPLETE = '[Period] Change status Complete';
var DELETE = '[Period] Delete period';
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

var DeleteAction = (function () {
    function DeleteAction(payload) {
        this.payload = payload;
        this.type = DELETE;
    }
    return DeleteAction;
}());

//# sourceMappingURL=period.js.map

/***/ }),

/***/ "../../../../../src/app/periods/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export COMPONENTS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_datepicker__ = __webpack_require__("../../../../ng2-datepicker/lib-dist/ng2-datepicker.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_pagination__ = __webpack_require__("../../../../ngx-bootstrap/pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__period_list_period_list__ = __webpack_require__("../../../../../src/app/periods/components/period-list/period-list.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_6__period_list_period_list__["a" /* PeriodListComponent */]
];
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_pagination__["a" /* PaginationModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4_ng2_datepicker__["a" /* DatePickerModule */],
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

/***/ "../../../../../src/app/periods/components/period-list/period-list.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-8 push-md-2\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        TIMESHEETS PERIODS\r\n      </div>\r\n      <div class=\"card-block\" *ngIf=\"isLoaded\">\r\n        <div class=\"form-group float-right\">\r\n          <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#addmodal\">\r\n            Add Period\r\n          </button>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <table class=\"table table-hover table-outline mb-0 hidden-sm-down\" *ngIf=\"isLoaded\">\r\n            <thead class=\"thead-default\">\r\n              <tr>\r\n                <td class=\"text-center\">Period Start Date <a class=\"fa fa-sort\" (click)=\"order.emit('PeriodStart')\"></a></td>\r\n                <td class=\"text-center\">Period End Date <a class=\"fa fa-sort\" (click)=\"order.emit('PeriodEnd')\"></a></td>\r\n                <td class=\"text-center\">Reminder 1 Date <a class=\"fa fa-sort\" (click)=\"order.emit('Reminder1Date')\"></a></td>\r\n                <td class=\"text-center\">Reminder 2 Date <a class=\"fa fa-sort\" (click)=\"order.emit('Reminder2Date')\"></a></td>\r\n                <td class=\"text-center\">Period Status <a class=\"fa fa-sort\" (click)=\"order.emit('LockStatusId')\"></a></td>\r\n                <td class=\"text-center\">Action </td>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let period of periods\">\r\n                <td class=\"text-center\">{{period.PeriodStart | date: 'dd-MMM-yy'}}</td>\r\n                <td class=\"text-center\">{{period.PeriodEnd | date: 'dd-MMM-yy'}}</td>\r\n                <td class=\"text-center\">{{period.Reminder1 | date: 'dd-MMM-yy'}}</td>\r\n                <td class=\"text-center\">{{period.Reminder2 | date: 'dd-MMM-yy'}}</td>\r\n                <td class=\"text-center\" *ngIf=\"period.Status == 'Locked'\"><span class=\"badge badge-danger timego-status\">{{period.Status}}</span></td>\r\n                <td class=\"text-center\" *ngIf=\"period.Status == 'Unlocked'\"><span class=\"badge badge-success timego-status\">{{period.Status}}</span></td>\r\n                <td class=\"text-center\">\r\n                  <button type=\"button\" *ngIf=\"period.Status == 'Unlocked'\" class=\"btn btn-sm btn-danger\" (click)=\"changeStatusAction({id: period.Id, status: 'Locked'})\">Lock</button>\r\n                  <button type=\"button\" *ngIf=\"period.Status == 'Locked'\" class=\"btn btn-sm btn-success\" (click)=\"changeStatusAction({id: period.Id, status: 'Unlocked'})\">Unlock</button>\n                  <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"delete.emit({id: period.Id, paging: pagingModel})\">Delete</button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <pagination [totalItems]=\"pagingModel.count\" [(ngModel)]=\"pagingModel.page\" (pageChanged)=\"changePage.emit({\r\n            orderBy: pagingModel.orderBy,\r\n            page: $event.page,\r\n            pageSize: pagingModel.pageSize,\r\n            IsAscending: !pagingModel.IsAscending,\r\n            count: pagingModel.count,\r\n            IsOrder: false})\"></pagination>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"addmodal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Add period\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header timego-modal\">\r\n        <h4 class=\"modal-title\">Add period</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">×</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body timego-modal\">\r\n        <div class=\"form-group\">\r\n          <label for=\"company-name\">Start date</label>\r\n          <div class=\"input-group mb-3 required\">\r\n            <span class=\"input-group-addon\">\r\n              <i class=\"icon-calendar\"></i>\r\n            </span>\r\n            <!--<ng2-datepicker [(ngModel)]=\"addTimeoff.StartDate\" class=\"col-md-12\"></ng2-datepicker>-->\r\n            <input required [(ngModel)]=\"addPeriod.StartDate\" type=\"date\" class=\"datepicker\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"company-name\">Reminder 1 Date</label>\r\n          <div class=\"input-group mb-3 required\">\r\n            <span class=\"input-group-addon\">\r\n              <i class=\"icon-calendar\"></i>\r\n            </span>\r\n            <input required [(ngModel)]=\"addPeriod.Reminder1\" type=\"date\" class=\"datepicker\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"company-name\">Reminder 2 Date</label>\r\n          <div class=\"input-group mb-3 required\">\r\n            <span class=\"input-group-addon\">\r\n              <i class=\"icon-calendar\"></i>\r\n            </span>\r\n            <input required [(ngModel)]=\"addPeriod.Reminder2\" type=\"date\" class=\"datepicker\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"addPeriodAction(addPeriod)\">Add</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/periods/components/period-list/period-list.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeriodListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_period_list_paging_model__ = __webpack_require__("../../../../../src/app/periods/models/period-list-paging.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_period_list_paging_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_period_list_paging_model__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PeriodListComponent = (function () {
    function PeriodListComponent() {
        this.isLoaded = false;
        this.loading = false;
        this.order = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.add = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.changeStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.changePage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.delete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.addPeriod = {
            Reminder1: new Date(),
            Reminder2: new Date(),
            StartDate: new Date()
        };
    }
    PeriodListComponent.prototype.ngOnInit = function () {
        this.role = commonServerData.Role;
    };
    PeriodListComponent.prototype.addPeriodAction = function (model) {
        this.add.emit(model);
        this.changePage.emit(this.pagingModel);
    };
    PeriodListComponent.prototype.changeStatusAction = function (model) {
        this.changeStatus.emit(model);
        this.changePage.emit(this.pagingModel);
    };
    return PeriodListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], PeriodListComponent.prototype, "periods", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], PeriodListComponent.prototype, "isLoaded", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], PeriodListComponent.prototype, "loading", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_period_list_paging_model__["PeriodListPagingModel"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_period_list_paging_model__["PeriodListPagingModel"]) === "function" && _a || Object)
], PeriodListComponent.prototype, "pagingModel", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], PeriodListComponent.prototype, "order", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], PeriodListComponent.prototype, "add", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], PeriodListComponent.prototype, "changeStatus", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], PeriodListComponent.prototype, "changePage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], PeriodListComponent.prototype, "delete", void 0);
PeriodListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'up-period-list',
        template: __webpack_require__("../../../../../src/app/periods/components/period-list/period-list.html"),
        styles: [__webpack_require__("../../../../../src/app/periods/components/period-list/period.scss")]
    })
], PeriodListComponent);

var _a;
//# sourceMappingURL=period-list.js.map

/***/ }),

/***/ "../../../../../src/app/periods/components/period-list/period.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/periods/containers/period-page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeriodPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__("../../../../../src/app/periods/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_period__ = __webpack_require__("../../../../../src/app/periods/actions/period.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PeriodPageComponent = (function () {
    function PeriodPageComponent(store) {
        this.store = store;
        this.periods$ = store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["d" /* getPeriods */]);
        this.isLoaded$ = store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["a" /* getIsLoadedStatus */]);
        this.loading$ = store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["b" /* getLoadingStatus */]);
        this.pagingModel$ = store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["c" /* getPagingModel */]);
    }
    PeriodPageComponent.prototype.ngOnInit = function () {
        var pagingModelView = {
            orderBy: "id",
            page: 1,
            pageSize: 10,
            IsAscending: true,
            count: 10,
            IsOrder: true
        };
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_period__["j" /* GetAction */](pagingModelView));
    };
    PeriodPageComponent.prototype.orderPeriods = function (orderBy) {
        var pagingModelView = {
            orderBy: orderBy,
            page: 1,
            pageSize: 10,
            IsAscending: true,
            count: 10,
            IsOrder: true
        };
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_period__["j" /* GetAction */](pagingModelView));
    };
    PeriodPageComponent.prototype.addPeriod = function (model) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_period__["l" /* SaveAction */](model));
        this.orderPeriods("id");
    };
    PeriodPageComponent.prototype.changeStatus = function (model) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_period__["d" /* ChangeStatusAction */](model));
        this.orderPeriods("id");
    };
    PeriodPageComponent.prototype.changePage = function (model) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_period__["j" /* GetAction */](model));
    };
    PeriodPageComponent.prototype.delete = function (model) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_period__["g" /* DeleteAction */](model));
    };
    return PeriodPageComponent;
}());
PeriodPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'period-page',
        changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* ChangeDetectionStrategy */].OnPush,
        template: "\n    <up-period-list [periods]=\"periods$ | async\" [isLoaded]=\"isLoaded$ | async\" [pagingModel]=\"pagingModel$ | async\" [loading]=\"loading$ | async\" (order)=\"orderPeriods($event)\" (add)=\"addPeriod($event)\" (delete)=\"delete($event)\" (changeStatus)=\"changeStatus($event)\" (changePage)=\"changePage($event)\"></up-period-list>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]) === "function" && _a || Object])
], PeriodPageComponent);

var _a;
//# sourceMappingURL=period-page.js.map

/***/ }),

/***/ "../../../../../src/app/periods/effects/period.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeriodEffects; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__period_service__ = __webpack_require__("../../../../../src/app/periods/period.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__actions_period__ = __webpack_require__("../../../../../src/app/periods/actions/period.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var PeriodEffects = (function () {
    function PeriodEffects(actions$, periodService) {
        var _this = this;
        this.actions$ = actions$;
        this.periodService = periodService;
        this.get$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_period__["h" /* GET */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (query) {
            var nextGet$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_11__actions_period__["h" /* GET */]).skip(1);
            return _this.periodService
                .getPeriodList(query)
                .takeUntil(nextGet$)
                .map(function (users) { return new __WEBPACK_IMPORTED_MODULE_11__actions_period__["k" /* GetCompleteAction */](users); })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_period__["k" /* GetCompleteAction */](null)); });
        });
        this.save$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_period__["a" /* ADD */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (query) {
            var nextGet$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_11__actions_period__["a" /* ADD */]).skip(1);
            return _this.periodService
                .addPeriod(query)
                .takeUntil(nextGet$)
                .map(function (result) { return new __WEBPACK_IMPORTED_MODULE_11__actions_period__["m" /* SaveCompleteAction */](result); })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_period__["m" /* SaveCompleteAction */](null)); });
        });
        this.change$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_period__["c" /* CHANGE_STATUS */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (model) {
            var nextGet$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_11__actions_period__["c" /* CHANGE_STATUS */]).skip(1);
            return _this.periodService
                .changeStatus(model)
                .takeUntil(nextGet$)
                .map(function (result) { return new __WEBPACK_IMPORTED_MODULE_11__actions_period__["e" /* ChangeStatusCompleteAction */](result); })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_period__["e" /* ChangeStatusCompleteAction */](null)); });
        });
        this.delete$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_period__["f" /* DELETE */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (model) {
            var nextGet$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_11__actions_period__["h" /* GET */]);
            return _this.periodService
                .delete(model.id)
                .takeUntil(nextGet$)
                .map(function (result) { return new __WEBPACK_IMPORTED_MODULE_11__actions_period__["j" /* GetAction */](model.paging); })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_period__["m" /* SaveCompleteAction */](null)); });
        });
    }
    return PeriodEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], PeriodEffects.prototype, "get$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === "function" && _b || Object)
], PeriodEffects.prototype, "save$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === "function" && _c || Object)
], PeriodEffects.prototype, "change$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === "function" && _d || Object)
], PeriodEffects.prototype, "delete$", void 0);
PeriodEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* Actions */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_10__period_service__["a" /* PeriodService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__period_service__["a" /* PeriodService */]) === "function" && _f || Object])
], PeriodEffects);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=period.js.map

/***/ }),

/***/ "../../../../../src/app/periods/models/period-list-paging.model.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=period-list-paging.model.js.map

/***/ }),

/***/ "../../../../../src/app/periods/period-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeriodRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_period_page__ = __webpack_require__("../../../../../src/app/periods/containers/period-page.ts");
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
        component: __WEBPACK_IMPORTED_MODULE_2__containers_period_page__["a" /* PeriodPageComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__AlwaysAuthGuard__["a" /* AlwaysAuthGuard */]],
        data: {
            title: 'Period'
        }
    }
];
var PeriodRoutingModule = (function () {
    function PeriodRoutingModule() {
    }
    return PeriodRoutingModule;
}());
PeriodRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], PeriodRoutingModule);

//# sourceMappingURL=period-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/periods/period.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeriodModule", function() { return PeriodModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__period_routing_module__ = __webpack_require__("../../../../../src/app/periods/period-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__period_service__ = __webpack_require__("../../../../../src/app/periods/period.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__containers_period_page__ = __webpack_require__("../../../../../src/app/periods/containers/period-page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__effects_period__ = __webpack_require__("../../../../../src/app/periods/effects/period.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_index__ = __webpack_require__("../../../../../src/app/periods/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__reducers__ = __webpack_require__("../../../../../src/app/periods/reducers/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var PeriodModule = (function () {
    function PeriodModule() {
    }
    return PeriodModule;
}());
PeriodModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_6__period_routing_module__["a" /* PeriodRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_10__components_index__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["i" /* StoreModule */].forFeature('periodPage', __WEBPACK_IMPORTED_MODULE_11__reducers__["e" /* reducers */]),
            __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["c" /* EffectsModule */].forFeature([__WEBPACK_IMPORTED_MODULE_9__effects_period__["a" /* PeriodEffects */]])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__containers_period_page__["a" /* PeriodPageComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__period_service__["a" /* PeriodService */]]
    })
], PeriodModule);

//# sourceMappingURL=period.module.js.map

/***/ }),

/***/ "../../../../../src/app/periods/period.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeriodService; });
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


var PeriodService = (function () {
    function PeriodService(requestService) {
        this.requestService = requestService;
    }
    PeriodService.prototype.getPeriodList = function (pagingModel) {
        return this.requestService.post("/api/periodPage/", pagingModel);
    };
    PeriodService.prototype.addPeriod = function (addModel) {
        return this.requestService.post("/api/AddPeriod/", addModel);
    };
    PeriodService.prototype.changeStatus = function (changeStatus) {
        return this.requestService.post("/api/ChangePeriodStatus/", changeStatus);
    };
    PeriodService.prototype.delete = function (id) {
        return this.requestService.get("/api/deleteperiod?id=" + id);
    };
    return PeriodService;
}());
PeriodService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_RequestService__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_RequestService__["a" /* RequestService */]) === "function" && _a || Object])
], PeriodService);

var _a;
//# sourceMappingURL=period.service.js.map

/***/ }),

/***/ "../../../../../src/app/periods/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return reducers; });
/* unused harmony export getPeriodState */
/* unused harmony export getPeriodEntityState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getPeriods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLoadingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getIsLoadedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getPagingModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__period__ = __webpack_require__("../../../../../src/app/periods/reducers/period.ts");


var reducers = {
    periodPage: __WEBPACK_IMPORTED_MODULE_1__period__["e" /* reducer */]
};
var getPeriodState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createFeatureSelector */])('periodPage');
var getPeriodEntityState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getPeriodState, function (state) { return state.periodPage; });
var getPeriods = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getPeriodEntityState, __WEBPACK_IMPORTED_MODULE_1__period__["d" /* getPeriods */]);
var getLoadingStatus = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getPeriodEntityState, __WEBPACK_IMPORTED_MODULE_1__period__["b" /* getLoadingStatus */]);
var getIsLoadedStatus = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getPeriodEntityState, __WEBPACK_IMPORTED_MODULE_1__period__["a" /* getIsLoadedStatus */]);
var getPagingModel = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getPeriodEntityState, __WEBPACK_IMPORTED_MODULE_1__period__["c" /* getPagingModel */]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/periods/reducers/period.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["e"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getPeriods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLoadingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getIsLoadedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getPagingModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_period__ = __webpack_require__("../../../../../src/app/periods/actions/period.ts");

var initialState = {
    periods: [],
    isLoaded: false,
    loading: false,
    pagingModel: {
        orderBy: "id",
        page: 1,
        pageSize: 10,
        IsAscending: true,
        count: 10,
        IsOrder: true
    }
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_period__["h" /* GET */]:
            var pagingModel = action.payload;
            pagingModel.IsAscending = !pagingModel.IsOrder ? state.pagingModel.IsAscending : pagingModel != null && pagingModel.orderBy != "id" ? pagingModel.orderBy != state.pagingModel.orderBy || !state.pagingModel.IsAscending : true;
            {
                return {
                    periods: state.periods,
                    isLoaded: true,
                    loading: true,
                    pagingModel: pagingModel,
                };
            }
        case __WEBPACK_IMPORTED_MODULE_0__actions_period__["i" /* GET_COMPLETE */]: {
            var loadedPeriods = action.payload;
            return {
                periods: loadedPeriods.Results,
                isLoaded: true,
                loading: false,
                pagingModel: {
                    IsAscending: state.pagingModel.IsAscending,
                    count: loadedPeriods.Count,
                    orderBy: state.pagingModel.orderBy,
                    page: state.pagingModel.page,
                    pageSize: state.pagingModel.pageSize,
                    IsOrder: true
                }
            };
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_period__["a" /* ADD */]:
            {
                return {
                    periods: state.periods,
                    isLoaded: true,
                    loading: true,
                    pagingModel: state.pagingModel,
                };
            }
        case __WEBPACK_IMPORTED_MODULE_0__actions_period__["b" /* ADD_COMPLETE */]: {
            return {
                periods: state.periods,
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
var getPeriods = function (state) { return state.periods; };
var getLoadingStatus = function (state) { return state.loading; };
var getIsLoadedStatus = function (state) { return state.isLoaded; };
var getPagingModel = function (state) { return state.pagingModel; };
//# sourceMappingURL=period.js.map

/***/ })

});
//# sourceMappingURL=period.module.chunk.js.map