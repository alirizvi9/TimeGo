webpackJsonp(["profile.module"],{

/***/ "../../../../../src/app/common/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConstants; });
var AppConstants = (function () {
    function AppConstants() {
    }
    return AppConstants;
}());

AppConstants.weekDays = [
    { text: 'Sunday', id: 7 },
    { text: 'Monday', id: 1 },
    { text: 'Tuesday', id: 2 },
    { text: 'Wednesday', id: 3 },
    { text: 'Thursday', id: 4 },
    { text: 'Friday', id: 5 },
    { text: 'Saturday', id: 6 }
];
AppConstants.timesheets = [
    { text: '1', id: 1 },
    { text: '2', id: 2 },
    { text: '3', id: 3 },
    { text: '4', id: 4 }
];
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "../../../../../src/app/profile/actions/profile-edit.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SAVE; });
/* unused harmony export SAVE_COMPLETE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GetAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GetCompleteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SaveAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SaveCompleteAction; });
var GET = '[Profile Edit] Get';
var GET_COMPLETE = '[Profile Edit] Get Complete';
var SAVE = '[Profile Edit] Save';
var SAVE_COMPLETE = '[Profile Edit] Save Complete';
var GetAction = (function () {
    function GetAction(payload) {
        if (payload === void 0) { payload = null; }
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
        this.type = SAVE;
    }
    return SaveAction;
}());

var SaveCompleteAction = (function () {
    function SaveCompleteAction(payload) {
        if (payload === void 0) { payload = null; }
        this.payload = payload;
        this.type = SAVE_COMPLETE;
    }
    return SaveCompleteAction;
}());

//# sourceMappingURL=profile-edit.js.map

/***/ }),

/***/ "../../../../../src/app/profile/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export COMPONENTS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_edit_profile_edit__ = __webpack_require__("../../../../../src/app/profile/components/profile-edit/profile-edit.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_4__profile_edit_profile_edit__["a" /* ProfileEditComponent */]
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
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */]
        ],
        declarations: COMPONENTS,
        exports: COMPONENTS,
    })
], ComponentsModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/profile/components/profile-edit/profile-edit.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-8 push-md-2\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        MY PROFILE\r\n      </div>\r\n      <div class=\"card-block\" *ngIf=\"isLoaded\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label for=\"company-name\">Company Name</label>\r\n              <div class=\"input-group mb-3 required\">\r\n                <span class=\"input-group-addon\">\r\n                  <i class=\"icon-organization\"></i>\r\n                </span>\r\n                <input type=\"text\" class=\"form-control\" id=\"company-name\" placeholder=\"Company name\" [(ngModel)]=\"company.CompanyName\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label for=\"contact-name\">Contact Name</label>\r\n              <div class=\"input-group mb-3 required\">\r\n                <span class=\"input-group-addon\">\r\n                  <i class=\"icon-user\"></i>\r\n                </span>\r\n                <input type=\"text\" class=\"form-control\" id=\"contact-name\" placeholder=\"Contact name\" [(ngModel)]=\"company.ContactName\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label for=\"phone-number\">Phone Number</label>\r\n              <div class=\"input-group mb-3 required\">\r\n                <span class=\"input-group-addon\">\r\n                  <i class=\"icon-phone\"></i>\r\n                </span>\r\n                <input type=\"text\" class=\"form-control\" id=\"phone-number\" placeholder=\"Phone number\" [(ngModel)]=\"company.PhoneNumber\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label for=\"email\">Email</label>\r\n              <div class=\"input-group mb-3 required\">\r\n                <span class=\"input-group-addon\">\r\n                  <i class=\"\">@</i>\r\n                </span>\r\n                <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email\" [(ngModel)]=\"company.EmailAddress\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label for=\"vacation-approver-email\">Vacation Approver Email</label>\r\n              <div class=\"input-group mb-3 required\">\r\n                <span class=\"input-group-addon\">\r\n                  <i class=\"\">@</i>\r\n                </span>\r\n                <input type=\"email\" class=\"form-control\" id=\"vacation-approver-email\" placeholder=\"Vacation Approver Email\" [(ngModel)]=\"company.VacationApproverEmail\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label for=\"week-day\">Work Week Start Day</label>\r\n              <div class=\"input-group mb-3 required\">\r\n                <span class=\"input-group-addon\">\r\n                  <i class=\"icon-calendar\"></i>\r\n                </span>\r\n                <select id=\"week-day\" class=\"form-control\" [(ngModel)]=\"company.WorkWeekStartDay\">\r\n                  <option *ngFor=\"let c of weekDays\" [ngValue]=\"c.id\">{{c.text}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label for=\"timesheets\">Timesheets Weeks in advance</label>\r\n              <div class=\"input-group mb-3 required\">\r\n                <span class=\"input-group-addon\">\r\n                  <i class=\"icon-globe\"></i>\r\n                </span>\r\n                <select id=\"timesheets\" class=\"form-control\" [(ngModel)]=\"company.TimesheetsWeeks\">\r\n                  <option *ngFor=\"let c of timesheets\" [ngValue]=\"c.id\">{{c.text}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label for=\"companyUrl\">Company Url</label>\r\n              <div class=\"input-group\">\r\n                <input type=\"text\" class=\"form-control\" id=\"companyUrl\" [(ngModel)]=\"company.TimeGoUrl\">\r\n                <span class=\"input-group-addon\">\r\n                  <i class=\"\">.timego.com/</i>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\n        <div class=\"form-group float-right\">\r\n          <input type=\"button\" class=\"btn btn-primary\" value=\"Save\" (click)=\"save.emit(company)\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/profile/components/profile-edit/profile-edit.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/components/profile-edit/profile-edit.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_company_profile_model__ = __webpack_require__("../../../../../src/app/profile/models/company-profile.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_company_profile_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_company_profile_model__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_constants__ = __webpack_require__("../../../../../src/app/common/constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileEditComponent = (function () {
    function ProfileEditComponent() {
        this.isLoaded = false;
        this.save = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.weekDays = __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* AppConstants */].weekDays;
        this.timesheets = __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* AppConstants */].timesheets;
    }
    return ProfileEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_company_profile_model__["CompanyProfile"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_company_profile_model__["CompanyProfile"]) === "function" && _a || Object)
], ProfileEditComponent.prototype, "company", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], ProfileEditComponent.prototype, "isLoaded", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], ProfileEditComponent.prototype, "save", void 0);
ProfileEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'pc-profile-edit',
        template: __webpack_require__("../../../../../src/app/profile/components/profile-edit/profile-edit.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/components/profile-edit/profile-edit.scss")]
    })
], ProfileEditComponent);

var _a;
//# sourceMappingURL=profile-edit.js.map

/***/ }),

/***/ "../../../../../src/app/profile/containers/profile-page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileEditPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__("../../../../../src/app/profile/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_profile_edit__ = __webpack_require__("../../../../../src/app/profile/actions/profile-edit.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileEditPageComponent = (function () {
    function ProfileEditPageComponent(store) {
        this.store = store;
        this.company$ = store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["a" /* getCompanyEntity */]);
        this.isLoaded$ = store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["b" /* getLoadingStatus */]);
    }
    ProfileEditPageComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_profile_edit__["c" /* GetAction */]({}));
    };
    ProfileEditPageComponent.prototype.saveProfile = function (company) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_profile_edit__["f" /* SaveAction */](company));
    };
    return ProfileEditPageComponent;
}());
ProfileEditPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'profile-page',
        changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* ChangeDetectionStrategy */].OnPush,
        template: "\n    <pc-profile-edit [company]=\"company$ | async\" [isLoaded]=\"isLoaded$ | async\" (save)=\"saveProfile($event)\"></pc-profile-edit>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]) === "function" && _a || Object])
], ProfileEditPageComponent);

var _a;
//# sourceMappingURL=profile-page.js.map

/***/ }),

/***/ "../../../../../src/app/profile/effects/profile-edit.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileEditEffects; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_empty__ = __webpack_require__("../../../../rxjs/observable/empty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_empty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_service__ = __webpack_require__("../../../../../src/app/profile/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__actions_profile_edit__ = __webpack_require__("../../../../../src/app/profile/actions/profile-edit.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ProfileEditEffects = (function () {
    function ProfileEditEffects(actions$, profileService) {
        var _this = this;
        this.actions$ = actions$;
        this.profileService = profileService;
        this.get$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_12__actions_profile_edit__["a" /* GET */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .switchMap(function () {
            var nextGet$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_12__actions_profile_edit__["a" /* GET */]).skip(1);
            return _this.profileService
                .getCurrentProfile()
                .takeUntil(nextGet$)
                .map(function (company) { return new __WEBPACK_IMPORTED_MODULE_12__actions_profile_edit__["d" /* GetCompleteAction */](company); })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_12__actions_profile_edit__["d" /* GetCompleteAction */](null)); });
        });
        this.save$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_12__actions_profile_edit__["e" /* SAVE */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (company) {
            if (!company)
                return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_empty__["empty"])();
            return _this.profileService
                .editCurrentProfile(company)
                .map(function (result) { return new __WEBPACK_IMPORTED_MODULE_12__actions_profile_edit__["g" /* SaveCompleteAction */](result); })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_12__actions_profile_edit__["g" /* SaveCompleteAction */](null)); });
        });
    }
    return ProfileEditEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], ProfileEditEffects.prototype, "get$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === "function" && _b || Object)
], ProfileEditEffects.prototype, "save$", void 0);
ProfileEditEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* Actions */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_11__profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__profile_service__["a" /* ProfileService */]) === "function" && _d || Object])
], ProfileEditEffects);

var _a, _b, _c, _d;
//# sourceMappingURL=profile-edit.js.map

/***/ }),

/***/ "../../../../../src/app/profile/models/company-profile.model.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=company-profile.model.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_profile_page__ = __webpack_require__("../../../../../src/app/profile/containers/profile-page.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__containers_profile_page__["a" /* ProfileEditPageComponent */],
        data: {
            title: 'Profile'
        }
    }
];
var ProfileRoutingModule = (function () {
    function ProfileRoutingModule() {
    }
    return ProfileRoutingModule;
}());
ProfileRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], ProfileRoutingModule);

//# sourceMappingURL=profile-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_routing_module__ = __webpack_require__("../../../../../src/app/profile/profile-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__containers_profile_page__ = __webpack_require__("../../../../../src/app/profile/containers/profile-page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_service__ = __webpack_require__("../../../../../src/app/profile/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__effects_profile_edit__ = __webpack_require__("../../../../../src/app/profile/effects/profile-edit.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_index__ = __webpack_require__("../../../../../src/app/profile/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__reducers__ = __webpack_require__("../../../../../src/app/profile/reducers/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ProfileModule = (function () {
    function ProfileModule() {
    }
    return ProfileModule;
}());
ProfileModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_6__profile_routing_module__["a" /* ProfileRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_10__components_index__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["i" /* StoreModule */].forFeature('profile', __WEBPACK_IMPORTED_MODULE_11__reducers__["c" /* reducers */]),
            __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["c" /* EffectsModule */].forFeature([__WEBPACK_IMPORTED_MODULE_9__effects_profile_edit__["a" /* ProfileEditEffects */]])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__containers_profile_page__["a" /* ProfileEditPageComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__profile_service__["a" /* ProfileService */]]
    })
], ProfileModule);

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
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


var ProfileService = (function () {
    function ProfileService(requestService) {
        this.requestService = requestService;
    }
    ProfileService.prototype.getProfile = function (id) {
        return this.requestService.get("/api/Profile/" + id);
    };
    ProfileService.prototype.getCurrentProfile = function () {
        return this.requestService.get("/api/Profile/");
    };
    ProfileService.prototype.editCurrentProfile = function (model) {
        return this.requestService.post("/api/Profile/", model);
    };
    return ProfileService;
}());
ProfileService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_RequestService__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_RequestService__["a" /* RequestService */]) === "function" && _a || Object])
], ProfileService);

var _a;
//# sourceMappingURL=profile.service.js.map

/***/ }),

/***/ "../../../../../src/app/profile/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return reducers; });
/* unused harmony export getEditProfileState */
/* unused harmony export getEditProfileEntityState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCompanyEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLoadingStatus; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_edit__ = __webpack_require__("../../../../../src/app/profile/reducers/profile-edit.ts");


var reducers = {
    profileEdit: __WEBPACK_IMPORTED_MODULE_1__profile_edit__["c" /* reducer */]
};
var getEditProfileState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createFeatureSelector */])('profile');
var getEditProfileEntityState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getEditProfileState, function (state) { return state.profileEdit; });
var getCompanyEntity = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getEditProfileEntityState, __WEBPACK_IMPORTED_MODULE_1__profile_edit__["a" /* getCompany */]);
var getLoadingStatus = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getEditProfileEntityState, __WEBPACK_IMPORTED_MODULE_1__profile_edit__["b" /* getLoadingStatus */]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/profile/reducers/profile-edit.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["c"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCompany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLoadingStatus; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_profile_edit__ = __webpack_require__("../../../../../src/app/profile/actions/profile-edit.ts");

var initialState = {
    company: null,
    isLoaded: false
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_profile_edit__["a" /* GET */]:
            {
                return {
                    company: state.company,
                    isLoaded: false
                };
            }
        case __WEBPACK_IMPORTED_MODULE_0__actions_profile_edit__["b" /* GET_COMPLETE */]: {
            var loadedCompany = action.payload;
            return {
                company: loadedCompany,
                isLoaded: true
            };
        }
        default: {
            return state;
        }
    }
}
var getCompany = function (state) { return state.company; };
var getLoadingStatus = function (state) { return state.isLoaded; };
//# sourceMappingURL=profile-edit.js.map

/***/ })

});
//# sourceMappingURL=profile.module.chunk.js.map