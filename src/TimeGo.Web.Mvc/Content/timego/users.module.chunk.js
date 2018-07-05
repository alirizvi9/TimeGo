webpackJsonp(["users.module"],{

/***/ "../../../../../src/app/users/actions/users.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return GET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return GET_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return EDIT_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return INVITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return INVITE_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return REINVITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return REINVITE_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return GetAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return GetCompleteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return SaveAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return SaveCompleteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return EditAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return EditCompleteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return InviteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return InviteCompleteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return ReInviteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return ReInviteCompleteAction; });
var GET = '[Users] Get users';
var GET_COMPLETE = '[Users] Get Complete';
var ADD = '[Users] Add user';
var ADD_COMPLETE = '[Users] Add User Complete';
var EDIT = '[Users] Edit user';
var EDIT_COMPLETE = '[Users] Edit User Complete';
var INVITE = '[Users] Invite user';
var INVITE_COMPLETE = '[Users] Invite User Complete';
var REINVITE = '[Users] ReInvite user';
var REINVITE_COMPLETE = '[Users] ReInvite user Complete';
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

var InviteAction = (function () {
    function InviteAction(payload) {
        this.payload = payload;
        this.type = INVITE;
    }
    return InviteAction;
}());

var InviteCompleteAction = (function () {
    function InviteCompleteAction(payload) {
        this.payload = payload;
        this.type = INVITE_COMPLETE;
    }
    return InviteCompleteAction;
}());

var ReInviteAction = (function () {
    function ReInviteAction(payload) {
        this.payload = payload;
        this.type = REINVITE;
    }
    return ReInviteAction;
}());

var ReInviteCompleteAction = (function () {
    function ReInviteCompleteAction(payload) {
        this.payload = payload;
        this.type = REINVITE_COMPLETE;
    }
    return ReInviteCompleteAction;
}());

//# sourceMappingURL=users.js.map

/***/ }),

/***/ "../../../../../src/app/users/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export COMPONENTS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_pagination__ = __webpack_require__("../../../../ngx-bootstrap/pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_list_users_list__ = __webpack_require__("../../../../../src/app/users/components/users-list/users-list.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_HttpLoaderFactory__ = __webpack_require__("../../../../../src/app/services/HttpLoaderFactory.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_5__users_list_users_list__["a" /* UsersListComponent */]
];
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_pagination__["a" /* PaginationModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: __WEBPACK_IMPORTED_MODULE_8__services_HttpLoaderFactory__["a" /* HttpLoaderFactory */],
                    deps: [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]]
                }
            })
        ],
        declarations: COMPONENTS,
        exports: COMPONENTS,
    })
], ComponentsModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/users/components/users-list/users-list.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        {{ 'EmployeeHeader' | translate }}\r\n      </div>\r\n      <div class=\"card-block\" *ngIf=\"isLoaded\">\r\n        <div class=\"form-group float-right\">\r\n          <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#addModal\">\r\n            {{ 'AddEmployee' | translate }}\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#inviteModal\">\r\n            {{ 'InviteEmployee' | translate }}\r\n          </button>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <table class=\"table table-hover table-outline mb-0 hidden-sm-down\" *ngIf=\"isLoaded\">\r\n            <thead class=\"thead-default\">\r\n              <tr>\r\n                <td class=\"text-center\">{{ 'EmployeeId' | translate }} <a [ngClass]=\"getArrowClass('id')\" (click)=\"order.emit('id')\"></a></td>\r\n                <td class=\"text-center\">{{ 'FirstName' | translate }} <a [ngClass]=\"getArrowClass('FirstName')\" (click)=\"order.emit('FirstName')\"></a></td>\r\n                <td class=\"text-center\">{{ 'LastName' | translate }} <a [ngClass]=\"getArrowClass('LastName')\" (click)=\"order.emit('LastName')\"></a></td>\r\n                <td class=\"text-center\">{{ 'Email' | translate }} <a [ngClass]=\"getArrowClass('EmailAddress')\" (click)=\"order.emit('EmailAddress')\"></a></td>\r\n                <td class=\"text-center\">{{ 'Phone' | translate }} <a [ngClass]=\"getArrowClass('PhoneNumber')\" (click)=\"order.emit('PhoneNumber')\"></a></td>\r\n                <td class=\"text-center\">{{ 'Last4SS' | translate }} <a [ngClass]=\"getArrowClass('SocialSecurityNumber')\" (click)=\"order.emit('SocialSecurityNumber')\"></a></td>\r\n                <td class=\"text-center\">{{ 'IsAdmin' | translate }} <a [ngClass]=\"getArrowClass('IsAdmin')\" (click)=\"order.emit('IsAdmin')\"></a></td>\r\n                <td class=\"text-center\">{{ 'IsActive' | translate }} <a [ngClass]=\"getArrowClass('IsActive')\" (click)=\"order.emit('IsActive')\"></a></td>\n                <td class=\"text-center\">{{ 'IsRegistrated' | translate }} <a [ngClass]=\"getArrowClass('IsRegistrate')\" (click)=\"order.emit('IsRegistrate')\"></a></td>\r\n                <td class=\"text-center\">{{ 'CalculateOvertime' | translate }} <a [ngClass]=\"getArrowClass('IsOvertimeCalculated')\" (click)=\"order.emit('IsOvertimeCalculated')\"></a></td>\r\n                <td class=\"text-center\">{{ 'Action' | translate }} </td>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let user of users\">\r\n                <td class=\"text-center\">{{user.Id}}</td>\r\n                <td class=\"text-center\">{{user.FirstName}}</td>\r\n                <td class=\"text-center\">{{user.LastName}}</td>\r\n                <td class=\"text-center\">{{user.Email}}</td>\r\n                <td class=\"text-center\">{{user.Phone}}</td>\r\n                <td class=\"text-center\">{{user.Last4Ss}}</td>\r\n                <td class=\"text-center\" *ngIf=\"user.IsAdmin\"><span class=\"badge badge-success timego-status\">{{user.IsAdmin ? 'Yes' : 'No'}}</span></td>\r\n                <td class=\"text-center\" *ngIf=\"!user.IsAdmin\"><span class=\"badge badge-danger timego-status\">{{user.IsAdmin ? 'Yes' : 'No'}}</span></td>\r\n                <td class=\"text-center\" *ngIf=\"user.IsActive\"><span class=\"badge badge-success timego-status\">{{user.IsActive ? 'Yes' : 'No'}}</span></td>\r\n                <td class=\"text-center\" *ngIf=\"!user.IsActive\"><span class=\"badge badge-danger timego-status\">{{user.IsActive ? 'Yes' : 'No'}}</span></td>\n\n                <td class=\"text-center\" *ngIf=\"user.IsRegistrate\"><span class=\"badge badge-success timego-status\">{{'Registrated'}}</span></td>\n                <td class=\"text-center\" *ngIf=\"!user.IsRegistrate && oldIvite(user)\"><span class=\"badge badge-danger timego-status\">{{'No Confirmed'}}</span></td>\r\n                <td class=\"text-center\" *ngIf=\"!user.IsRegistrate && !oldIvite(user)\"><span class=\"badge badge-warning timego-status\">{{'Waiting'}}</span></td>\n\r\n                <td class=\"text-center\" *ngIf=\"user.IsOvertimeCalculated\"><span class=\"badge badge-success timego-status\">{{user.IsOvertimeCalculated ? 'Yes' : 'No'}}</span></td>\r\n                <td class=\"text-center\" *ngIf=\"!user.IsOvertimeCalculated\"><span class=\"badge badge-danger timego-status\">{{user.IsOvertimeCalculated ? 'Yes' : 'No'}}</span></td>\r\n                <td class=\"text-center\">\n                    <button type=\"button\" class=\"btn btn-sm btn-primary\" data-toggle=\"modal\" data-target=\"#editModal\" (click)=\"cloneEditUser(user)\">{{ 'Edit' | translate }}</button>\n                    <button [disabled]=\"user.IsRegistrate\" type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"reinvite.emit(user.Id)\">{{ 'ReInvite' | translate }}</button>\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <pagination [totalItems]=\"pagingModel.count\" [(ngModel)]=\"pagingModel.page\" (pageChanged)=\"changePage.emit({\r\n            orderBy: pagingModel.orderBy,\r\n            page: $event.page,\r\n            pageSize: pagingModel.pageSize,\r\n            IsAscending: pagingModel.IsAscending,\r\n            count: pagingModel.count,\r\n            IsOrder: false})\"></pagination>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"addModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"add employee\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header timego-modal\">\r\n        <h4 class=\"modal-title\">{{ 'Add' | translate }} {{ 'Employee' | translate }}</h4>\r\n        <button type=\"button\"  (click)=\"cleanAddModel()\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">×</span>\r\n        </button>\r\n      </div>\r\n      <div [formGroup]=\"addform\">\r\n        <div class=\"modal-body timego-modal\">\r\n          <div class=\"form-group\">\r\n            <label for=\"company-name\">{{ 'FirstName' | translate }}</label>\r\n            <div class=\"input-group mb-3 required\">\r\n              <span class=\"input-group-addon\">\r\n                <i class=\"icon-user\"></i>\r\n              </span>\r\n              <input type=\"text\" formControlName=\"FirstName\" class=\"form-control\" id=\"company-name\" placeholder=\"{{ 'FirstName' | translate }}\" [(ngModel)]=\"addEmployee.FirstName\" />\r\n            </div>\r\n            <div class=\"form-control-feedback validation-error\"\r\n                 *ngIf=\"addform.controls.FirstName.errors && (addform.controls.FirstName.dirty || addform.controls.FirstName.touched)\">\r\n              <p *ngIf=\"addform.controls.FirstName.errors.required\">{{ 'FieldIsRequired' | translate }}</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"company-name\">{{ 'LastName' | translate }}</label>\r\n            <div class=\"input-group mb-3 required\">\r\n              <span class=\"input-group-addon\">\r\n                <i class=\"icon-user\"></i>\r\n              </span>\r\n              <input type=\"text\" formControlName=\"LastName\" class=\"form-control\" id=\"company-name\" placeholder=\"{{ 'LastName' | translate }}\" [(ngModel)]=\"addEmployee.LastName\" />\r\n            </div>\r\n            <div class=\"form-control-feedback validation-error\"\r\n                 *ngIf=\"addform.controls.LastName.errors && (addform.controls.LastName.dirty || addform.controls.LastName.touched)\">\r\n              <p *ngIf=\"addform.controls.LastName.errors.required\">{{ 'FieldIsRequired' | translate }}</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"company-name\">{{ 'Email' | translate }}</label>\r\n            <div class=\"input-group mb-3 required\">\r\n              <span class=\"input-group-addon\">\r\n                <i class=\"\">@</i>\r\n              </span>\r\n              <input type=\"email\" formControlName=\"Email\" class=\"form-control\" id=\"company-name\" placeholder=\"{{ 'Email' | translate }}\" [(ngModel)]=\"addEmployee.Email\" />\r\n            </div>\r\n            <div class=\"form-control-feedback validation-error\"\r\n                 *ngIf=\"addform.controls.Email.errors && (addform.controls.Email.dirty || addform.controls.Email.touched)\">\r\n              <p *ngIf=\"addform.controls.Email.errors.required\">{{ 'FieldIsRequired' | translate }}</p>\r\n              <p *ngIf=\"addform.controls.Email.errors.pattern\">{{ 'EmailNotValid' | translate }}</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"company-name\">{{ 'Password' | translate }}</label>\r\n            <div class=\"input-group mb-3 required\">\r\n              <span class=\"input-group-addon\">\r\n                <i class=\"icon-lock\"></i>\r\n              </span>\r\n              <input type=\"password\" formControlName=\"Password\" class=\"form-control\" id=\"company-name\" placeholder=\"{{ 'Password' | translate }}\" [(ngModel)]=\"addEmployee.Password\" />\r\n            </div>\r\n            <div class=\"form-control-feedback validation-error\"\r\n                 *ngIf=\"addform.controls.Password.errors && (addform.controls.Password.dirty || addform.controls.Password.touched)\">\r\n              <p *ngIf=\"addform.controls.Password.errors.required\">{{ 'FieldIsRequired' | translate }}</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"company-name\">{{ 'PhoneNumber' | translate }}</label>\r\n            <div class=\"input-group mb-3 required\">\r\n              <span class=\"input-group-addon\">\r\n                <i class=\"icon-phone\"></i>\r\n              </span>\r\n              <input type=\"text\" formControlName=\"PhoneNumber\" class=\"form-control\" id=\"company-name\" placeholder=\"{{ 'PhoneNumber' | translate }}\" [(ngModel)]=\"addEmployee.PhoneNumber\" />\r\n            </div>\r\n            <div class=\"form-control-feedback validation-error\"\r\n                 *ngIf=\"addform.controls.PhoneNumber.errors && (addform.controls.PhoneNumber.dirty || addform.controls.PhoneNumber.touched)\">\r\n              <p *ngIf=\"addform.controls.PhoneNumber.errors.required\">{{ 'FieldIsRequired' | translate }}</p>\r\n            </div>\r\n          </div>\n          <div class=\"cntr\">\r\n            <label for=\"admin\" class=\"label-cbx\">\r\n              <input id=\"admin\" type=\"checkbox\" class=\"invisible\" [(ngModel)]=\"addEmployee.IsAdmin\">\r\n              <div class=\"checkbox\">\r\n                <svg width=\"20px\" height=\"20px\" viewBox=\"0 0 20 20\">\r\n                  <path d=\"M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z\"></path>\r\n                  <polyline points=\"4 11 8 15 16 6\"></polyline>\r\n                </svg>\r\n              </div>\r\n              <span>{{ 'IsAdmin' | translate }}</span>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button *ngIf=\"!addform.valid\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"add.emit(addEmployee)\" disabled>{{ 'Add' | translate }}</button>\r\n          <button *ngIf=\"addform.valid\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"add.emit(addEmployee)\">{{ 'Add' | translate }}</button>\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cleanAddModel()\" data-dismiss=\"modal\">{{ 'Close' | translate }}</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"inviteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"invite employee\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header timego-modal\">\r\n        <h4 class=\"modal-title\">{{ 'Invite' | translate }} {{ 'Employee' | translate }}</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"cleanInviteModel()\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">×</span>\r\n        </button>\r\n      </div>\r\n      <div [formGroup]=\"inviteform\">\r\n        <div class=\"modal-body timego-modal\">\r\n          <div class=\"form-group\">\r\n            <label for=\"company-name\">{{ 'FirstName' | translate }}</label>\r\n            <div class=\"input-group mb-3 required\">\r\n              <span class=\"input-group-addon\">\r\n                <i class=\"icon-user\"></i>\r\n              </span>\r\n              <input type=\"text\" formControlName=\"FirstName\" class=\"form-control\" id=\"company-name\" placeholder=\"{{ 'FirstName' | translate }}\" [(ngModel)]=\"inviteModel.FirstName\" />\r\n            </div>\r\n            <div class=\"form-control-feedback validation-error\"\r\n                 *ngIf=\"inviteform.controls.FirstName.errors && (inviteform.controls.FirstName.dirty || inviteform.controls.FirstName.touched)\">\r\n              <p *ngIf=\"inviteform.controls.FirstName.errors.required\">{{ 'FieldIsRequired' | translate }}</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"company-name\">{{ 'LastName' | translate }}</label>\r\n            <div class=\"input-group mb-3 required\">\r\n              <span class=\"input-group-addon\">\r\n                <i class=\"icon-user\"></i>\r\n              </span>\r\n              <input type=\"text\" formControlName=\"LastName\" class=\"form-control\" id=\"company-name\" placeholder=\"{{ 'LastName' | translate }}\" [(ngModel)]=\"inviteModel.LastName\" />\r\n            </div>\r\n            <div class=\"form-control-feedback validation-error\"\r\n                 *ngIf=\"inviteform.controls.LastName.errors && (inviteform.controls.LastName.dirty || inviteform.controls.LastName.touched)\">\r\n              <p *ngIf=\"inviteform.controls.LastName.errors.required\">{{ 'FieldIsRequired' | translate }}</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"company-name\">{{ 'Email' | translate }}</label>\r\n            <div class=\"input-group mb-3 required\">\r\n              <span class=\"input-group-addon\">\r\n                <i class=\"\">@</i>\r\n              </span>\r\n              <input type=\"text\" class=\"form-control\" id=\"company-name\" placeholder=\"{{ 'Email' | translate }}\" [(ngModel)]=\"inviteModel.Email\" formControlName=\"Email\" />\r\n            </div>\r\n            <div class=\"form-control-feedback validation-error\"\r\n                 *ngIf=\"inviteform.controls.Email.errors && (inviteform.controls.Email.dirty || inviteform.controls.Email.touched)\">\r\n              <p *ngIf=\"inviteform.controls.Email.errors.required\">{{ 'FieldIsRequired' | translate }}</p>\r\n              <p *ngIf=\"inviteform.controls.Email.errors.pattern\">{{ 'EmailNotValid' | translate }}</p>\r\n            </div>\r\n          </div>\n          <div class=\"cntr\">\r\n            <label for=\"adminInvite\" class=\"label-cbx\">\r\n              <input id=\"adminInvite\" type=\"checkbox\" class=\"invisible\" [(ngModel)]=\"inviteModel.IsAdmin\">\r\n              <div class=\"checkbox\">\r\n                <svg width=\"20px\" height=\"20px\" viewBox=\"0 0 20 20\">\r\n                  <path d=\"M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z\"></path>\r\n                  <polyline points=\"4 11 8 15 16 6\"></polyline>\r\n                </svg>\r\n              </div>\r\n              <span>{{ 'IsAdmin' | translate }}</span>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button *ngIf=\"!inviteform.valid\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"invite.emit(inviteModel)\" disabled>{{ 'Invite' | translate }}</button>\r\n          <button *ngIf=\"inviteform.valid\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"invite.emit(inviteModel)\">{{ 'Invite' | translate }}</button>\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cleanInviteModel()\" data-dismiss=\"modal\">{{ 'Close' | translate }}</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\n<div class=\"modal fade\" id=\"editModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit employee\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header timego-modal\">\r\n        <h4 class=\"modal-title\">{{ 'Edit' | translate }} {{ 'Employee' | translate }}</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">×</span>\r\n        </button>\r\n      </div>\r\n      <div [formGroup]=\"editform\">\r\n        <div class=\"modal-body timego-modal\">\n          <div class=\"form-group\">\r\n            <label for=\"company-name\">{{ 'FirstName' | translate }}</label>\r\n            <div class=\"input-group mb-3 required\">\r\n              <span class=\"input-group-addon\">\r\n                <i class=\"icon-user\"></i>\r\n              </span>\r\n              <input type=\"text\" formControlName=\"FirstName\" class=\"form-control\" id=\"company-name\" placeholder=\"{{ 'FirstName' | translate }}\" [(ngModel)]=\"editModel.FirstName\" />\r\n            </div>\r\n            <div class=\"form-control-feedback validation-error\"\r\n                 *ngIf=\"editform.controls.FirstName.errors && (editform.controls.FirstName.dirty || editform.controls.FirstName.touched)\">\r\n              <p *ngIf=\"editform.controls.FirstName.errors.required\">{{ 'FieldIsRequired' | translate }}</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"company-name\">{{ 'LastName' | translate }}</label>\r\n            <div class=\"input-group mb-3 required\">\r\n              <span class=\"input-group-addon\">\r\n                <i class=\"icon-user\"></i>\r\n              </span>\r\n              <input type=\"text\" formControlName=\"LastName\" class=\"form-control\" id=\"company-name\" placeholder=\"{{ 'LastName' | translate }}\" [(ngModel)]=\"editModel.LastName\" />\r\n            </div>\r\n            <div class=\"form-control-feedback validation-error\"\r\n                 *ngIf=\"editform.controls.LastName.errors && (editform.controls.LastName.dirty || editform.controls.LastName.touched)\">\r\n              <p *ngIf=\"editform.controls.LastName.errors.required\">{{ 'FieldIsRequired' | translate }}</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"company-name\">{{ 'Email' | translate }}</label>\r\n            <div class=\"input-group mb-3 required\">\r\n              <span class=\"input-group-addon\">\r\n                <i class=\"\">@</i>\r\n              </span>\r\n              <input type=\"text\" class=\"form-control\" id=\"company-name\" placeholder=\"{{ 'Email' | translate }}\" [(ngModel)]=\"editModel.Email\" formControlName=\"Email\" />\r\n            </div>\r\n            <div class=\"form-control-feedback validation-error\"\r\n                 *ngIf=\"editform.controls.Email.errors && (editform.controls.Email.dirty || editform.controls.Email.touched)\">\r\n              <p *ngIf=\"editform.controls.Email.errors.required\">{{ 'FieldIsRequired' | translate }}</p>\r\n              <p *ngIf=\"editform.controls.Email.errors.pattern\">{{ 'EmailNotValid' | translate }}</p>\r\n            </div>\r\n          </div>\n          <div class=\"cntr\">\r\n            <label for=\"adminedit\" class=\"label-cbx\">\r\n              <input id=\"adminedit\" type=\"checkbox\" class=\"invisible\" [(ngModel)]=\"editModel.isAdmin\">\r\n              <div class=\"checkbox\">\r\n                <svg width=\"20px\" height=\"20px\" viewBox=\"0 0 20 20\">\r\n                  <path d=\"M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z\"></path>\r\n                  <polyline points=\"4 11 8 15 16 6\"></polyline>\r\n                </svg>\r\n              </div>\r\n              <span>{{ 'IsAdmin' | translate }}</span>\r\n            </label>\r\n          </div>\n          <div class=\"cntr\">\r\n            <label for=\"IsActiveEdit\" class=\"label-cbx\">\r\n              <input id=\"IsActiveEdit\" type=\"checkbox\" class=\"invisible\" [(ngModel)]=\"editModel.IsActive\">\r\n              <div class=\"checkbox\">\r\n                <svg width=\"20px\" height=\"20px\" viewBox=\"0 0 20 20\">\r\n                  <path d=\"M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z\"></path>\r\n                  <polyline points=\"4 11 8 15 16 6\"></polyline>\r\n                </svg>\r\n              </div>\r\n              <span>{{ 'IsActive' | translate }}</span>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button *ngIf=\"!editform.valid\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"edit.emit(editModel)\" disabled>{{ 'Save' | translate }}</button>\r\n          <button *ngIf=\"editform.valid\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"edit.emit(editModel)\">{{ 'Save' | translate }}</button>\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">{{ 'Close' | translate }}</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/users/components/users-list/users-list.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/components/users-list/users-list.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_users_list_paging_model__ = __webpack_require__("../../../../../src/app/users/models/users-list-paging.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_users_list_paging_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_users_list_paging_model__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersListComponent = (function () {
    function UsersListComponent(translate) {
        this.translate = translate;
        this.isLoaded = false;
        this.loading = false;
        this.order = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.changePage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.add = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.invite = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.reinvite = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.edit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.addEmployee = {
            Email: "",
            FirstName: "",
            LastName: "",
            Password: "",
            PhoneNumber: "",
            IsAdmin: false
        };
        this.inviteModel = {
            Email: "",
            FirstName: "",
            LastName: "",
            IsAdmin: false
        };
        this.editModel = {
            email: "",
            firstName: "",
            id: 0,
            isActive: true,
            isAdmin: true,
            isOvertimeCalculated: true,
            last4Ss: "",
            lastName: "",
            phone: "",
            InviteOn: new Date(),
            IsRegistrate: true
        };
        translate.addLangs(["en", "fr"]);
        translate.setDefaultLang('en');
    }
    UsersListComponent.prototype.cloneEditUser = function (user) {
        this.editModel = Object.assign({}, user);
    };
    UsersListComponent.prototype.getArrowClass = function (field) {
        if (field != this.pagingModel.orderBy)
            return "fa fa-sort";
        if (this.pagingModel.IsAscending)
            return "fa fa-sort-asc";
        return "fa fa-sort-desc";
    };
    UsersListComponent.prototype.ngOnInit = function () {
        this.inviteform = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            FirstName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required),
            LastName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required),
            Email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern("^.+@.+\\..+$"))
        });
        this.editform = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            FirstName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required),
            LastName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required),
            Email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern("^.+@.+\\..+$"))
        });
        this.addform = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            FirstName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required),
            LastName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required),
            Email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern("^.+@.+\\..+$")),
            Password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(8)),
            PhoneNumber: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required)
        });
    };
    UsersListComponent.prototype.oldIvite = function (user) {
        var inviteTime = new Date(user.InviteOn);
        var dateNow = new Date();
        var diffMs = (+dateNow.valueOf() - +inviteTime.valueOf());
        var days = (diffMs / (1000 * 60 * 60 * 24));
        return days >= 14;
    };
    UsersListComponent.prototype.cleanAddModel = function () {
        this.addEmployee = {
            Email: "",
            FirstName: "",
            LastName: "",
            Password: "",
            PhoneNumber: "",
            IsAdmin: false
        };
    };
    UsersListComponent.prototype.cleanInviteModel = function () {
        this.inviteModel = {
            Email: "",
            FirstName: "",
            LastName: "",
            IsAdmin: false
        };
    };
    return UsersListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], UsersListComponent.prototype, "users", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], UsersListComponent.prototype, "isLoaded", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], UsersListComponent.prototype, "loading", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_users_list_paging_model__["UsersListPagingModel"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_users_list_paging_model__["UsersListPagingModel"]) === "function" && _a || Object)
], UsersListComponent.prototype, "pagingModel", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], UsersListComponent.prototype, "order", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], UsersListComponent.prototype, "changePage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], UsersListComponent.prototype, "add", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], UsersListComponent.prototype, "invite", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], UsersListComponent.prototype, "reinvite", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], UsersListComponent.prototype, "edit", void 0);
UsersListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'up-users-list',
        template: __webpack_require__("../../../../../src/app/users/components/users-list/users-list.html"),
        styles: [__webpack_require__("../../../../../src/app/users/components/users-list/users-list.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]) === "function" && _b || Object])
], UsersListComponent);

var _a, _b;
//# sourceMappingURL=users-list.js.map

/***/ }),

/***/ "../../../../../src/app/users/containers/users-page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__("../../../../../src/app/users/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_users__ = __webpack_require__("../../../../../src/app/users/actions/users.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsersPageComponent = (function () {
    function UsersPageComponent(store) {
        this.store = store;
        this.users$ = store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["d" /* getUsersList */]);
        this.isLoaded$ = store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["a" /* getIsLoadedStatus */]);
        this.loading$ = store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["b" /* getLoadingStatus */]);
        this.pagingModel$ = store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["c" /* getPagingModel */]);
    }
    UsersPageComponent.prototype.ngOnInit = function () {
        var pagingModelView = {
            orderBy: "id",
            page: 1,
            pageSize: 10,
            IsAscending: true,
            count: 1,
            IsOrder: true
        };
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_users__["i" /* GetAction */](pagingModelView));
    };
    UsersPageComponent.prototype.orderUser = function (orderBy) {
        var pagingModelView = {
            orderBy: orderBy,
            page: 1,
            pageSize: 10,
            IsAscending: true,
            count: 1,
            IsOrder: true
        };
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_users__["i" /* GetAction */](pagingModelView));
    };
    UsersPageComponent.prototype.changePage = function (model) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_users__["i" /* GetAction */](model));
    };
    UsersPageComponent.prototype.add = function (model) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_users__["s" /* SaveAction */](model));
    };
    UsersPageComponent.prototype.invite = function (model) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_users__["m" /* InviteAction */](model));
    };
    UsersPageComponent.prototype.reinvite = function (id) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_users__["q" /* ReInviteAction */](id));
    };
    UsersPageComponent.prototype.edit = function (model) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_users__["e" /* EditAction */](model));
    };
    return UsersPageComponent;
}());
UsersPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'users-page',
        changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* ChangeDetectionStrategy */].OnPush,
        template: "\n    <up-users-list [users]=\"users$ | async\" [pagingModel]=\"pagingModel$ | async\" [isLoaded]=\"isLoaded$ | async\" [loading]=\"loading$ | async\" \n    (order)=\"orderUser($event)\" (changePage)=\"changePage($event)\" (invite)=\"invite($event)\" (add)=\"add($event)\" (edit)=\"edit($event)\" (reinvite)=\"reinvite($event)\"></up-users-list>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]) === "function" && _a || Object])
], UsersPageComponent);

var _a;
//# sourceMappingURL=users-page.js.map

/***/ }),

/***/ "../../../../../src/app/users/effects/users.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersEffects; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__users_service__ = __webpack_require__("../../../../../src/app/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__actions_users__ = __webpack_require__("../../../../../src/app/users/actions/users.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var UsersEffects = (function () {
    function UsersEffects(actions$, usersService) {
        var _this = this;
        this.actions$ = actions$;
        this.usersService = usersService;
        this.get$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_users__["g" /* GET */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (query) {
            var nextGet$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_11__actions_users__["g" /* GET */]).skip(1);
            _this.pagingModel = query;
            return _this.usersService
                .getUsersList(query)
                .takeUntil(nextGet$)
                .map(function (users) { return new __WEBPACK_IMPORTED_MODULE_11__actions_users__["j" /* GetCompleteAction */](users); })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_users__["j" /* GetCompleteAction */](null)); });
        });
        this.add$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_users__["a" /* ADD */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (query) {
            var nextGet$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_11__actions_users__["a" /* ADD */]).skip(1);
            return _this.usersService
                .addEmployee(query)
                .takeUntil(nextGet$)
                .map(function (result) { return new __WEBPACK_IMPORTED_MODULE_11__actions_users__["t" /* SaveCompleteAction */](result); })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_users__["t" /* SaveCompleteAction */](null)); });
        });
        this.invite$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_users__["k" /* INVITE */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (query) {
            var nextGet$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_11__actions_users__["k" /* INVITE */]).skip(1);
            return _this.usersService
                .inviteEmployee(query)
                .takeUntil(nextGet$)
                .map(function (result) { return new __WEBPACK_IMPORTED_MODULE_11__actions_users__["n" /* InviteCompleteAction */](result); })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_users__["n" /* InviteCompleteAction */](null)); });
        });
        this.reinvite$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_users__["o" /* REINVITE */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (query) {
            var nextGet$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_11__actions_users__["o" /* REINVITE */]).skip(1);
            return _this.usersService
                .reinviteEmployee(query)
                .takeUntil(nextGet$)
                .map(function (result) { return new __WEBPACK_IMPORTED_MODULE_11__actions_users__["r" /* ReInviteCompleteAction */](result); })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_users__["r" /* ReInviteCompleteAction */](null)); });
        });
        this.edit$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_users__["c" /* EDIT */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (query) {
            var nextGet$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_11__actions_users__["c" /* EDIT */]).skip(1);
            return _this.usersService
                .editEmployee(query)
                .takeUntil(nextGet$)
                .map(function (result) { return new __WEBPACK_IMPORTED_MODULE_11__actions_users__["f" /* EditCompleteAction */](result); })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_users__["f" /* EditCompleteAction */](null)); });
        });
        this.update$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_users__["b" /* ADD_COMPLETE */], __WEBPACK_IMPORTED_MODULE_11__actions_users__["d" /* EDIT_COMPLETE */], __WEBPACK_IMPORTED_MODULE_11__actions_users__["l" /* INVITE_COMPLETE */], __WEBPACK_IMPORTED_MODULE_11__actions_users__["p" /* REINVITE_COMPLETE */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (query) {
            var nextGet$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_11__actions_users__["h" /* GET_COMPLETE */]);
            return _this.usersService
                .getUsersList(_this.pagingModel)
                .takeUntil(nextGet$)
                .map(function (users) { return new __WEBPACK_IMPORTED_MODULE_11__actions_users__["j" /* GetCompleteAction */](users); })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_users__["j" /* GetCompleteAction */](null)); });
        });
    }
    return UsersEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], UsersEffects.prototype, "get$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === "function" && _b || Object)
], UsersEffects.prototype, "add$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === "function" && _c || Object)
], UsersEffects.prototype, "invite$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === "function" && _d || Object)
], UsersEffects.prototype, "reinvite$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === "function" && _e || Object)
], UsersEffects.prototype, "edit$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === "function" && _f || Object)
], UsersEffects.prototype, "update$", void 0);
UsersEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* Actions */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_10__users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__users_service__["a" /* UsersService */]) === "function" && _h || Object])
], UsersEffects);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=users.js.map

/***/ }),

/***/ "../../../../../src/app/users/models/users-list-paging.model.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=users-list-paging.model.js.map

/***/ }),

/***/ "../../../../../src/app/users/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return reducers; });
/* unused harmony export getUsersState */
/* unused harmony export getUsersEntityState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getUsersList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLoadingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getIsLoadedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getPagingModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users__ = __webpack_require__("../../../../../src/app/users/reducers/users.ts");


var reducers = {
    usersPage: __WEBPACK_IMPORTED_MODULE_1__users__["e" /* reducer */]
};
var getUsersState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createFeatureSelector */])('usersPage');
var getUsersEntityState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getUsersState, function (state) { return state.usersPage; });
var getUsersList = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getUsersEntityState, __WEBPACK_IMPORTED_MODULE_1__users__["d" /* getUsers */]);
var getLoadingStatus = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getUsersEntityState, __WEBPACK_IMPORTED_MODULE_1__users__["b" /* getLoadingStatus */]);
var getIsLoadedStatus = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getUsersEntityState, __WEBPACK_IMPORTED_MODULE_1__users__["a" /* getIsLoadedStatus */]);
var getPagingModel = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getUsersEntityState, __WEBPACK_IMPORTED_MODULE_1__users__["c" /* getPagingModel */]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/users/reducers/users.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["e"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLoadingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getIsLoadedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getPagingModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_users__ = __webpack_require__("../../../../../src/app/users/actions/users.ts");

var initialState = {
    users: [],
    isLoaded: false,
    loading: false,
    pagingModel: {
        orderBy: "id",
        page: 1,
        pageSize: 10,
        IsAscending: true,
        count: 1,
        IsOrder: true
    }
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_users__["g" /* GET */]:
            var pagingModel = action.payload;
            pagingModel.IsAscending = !pagingModel.IsOrder ? state.pagingModel.IsAscending : pagingModel != null ? pagingModel.orderBy != state.pagingModel.orderBy || !state.pagingModel.IsAscending : true;
            {
                return {
                    users: state.users,
                    isLoaded: true,
                    loading: true,
                    pagingModel: pagingModel,
                };
            }
        case __WEBPACK_IMPORTED_MODULE_0__actions_users__["h" /* GET_COMPLETE */]: {
            var loadedUsers = action.payload;
            return {
                users: loadedUsers.Results,
                isLoaded: true,
                loading: false,
                pagingModel: {
                    IsAscending: state.pagingModel.IsAscending,
                    count: loadedUsers.Count,
                    orderBy: state.pagingModel.orderBy,
                    page: state.pagingModel.page,
                    pageSize: state.pagingModel.pageSize,
                    IsOrder: true
                }
            };
        }
        default: {
            return state;
        }
    }
}
var getUsers = function (state) { return state.users; };
var getLoadingStatus = function (state) { return state.loading; };
var getIsLoadedStatus = function (state) { return state.isLoaded; };
var getPagingModel = function (state) { return state.pagingModel; };
//# sourceMappingURL=users.js.map

/***/ }),

/***/ "../../../../../src/app/users/users-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AlwaysAuthGuard__ = __webpack_require__("../../../../../src/app/AlwaysAuthGuard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TaskManagerAuthGuard__ = __webpack_require__("../../../../../src/app/TaskManagerAuthGuard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_users_page__ = __webpack_require__("../../../../../src/app/users/containers/users-page.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__containers_users_page__["a" /* UsersPageComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__AlwaysAuthGuard__["a" /* AlwaysAuthGuard */], __WEBPACK_IMPORTED_MODULE_3__TaskManagerAuthGuard__["a" /* TaskManagerAuthGuard */]],
        data: {
            title: 'Users'
        }
    }
];
var UsersRoutingModule = (function () {
    function UsersRoutingModule() {
    }
    return UsersRoutingModule;
}());
UsersRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], UsersRoutingModule);

//# sourceMappingURL=users-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/users/users.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users_routing_module__ = __webpack_require__("../../../../../src/app/users/users-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__users_service__ = __webpack_require__("../../../../../src/app/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__containers_users_page__ = __webpack_require__("../../../../../src/app/users/containers/users-page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__effects_users__ = __webpack_require__("../../../../../src/app/users/effects/users.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_index__ = __webpack_require__("../../../../../src/app/users/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__reducers__ = __webpack_require__("../../../../../src/app/users/reducers/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var UsersModule = (function () {
    function UsersModule() {
    }
    return UsersModule;
}());
UsersModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_6__users_routing_module__["a" /* UsersRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_10__components_index__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["i" /* StoreModule */].forFeature('usersPage', __WEBPACK_IMPORTED_MODULE_11__reducers__["e" /* reducers */]),
            __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["c" /* EffectsModule */].forFeature([__WEBPACK_IMPORTED_MODULE_9__effects_users__["a" /* UsersEffects */]])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__containers_users_page__["a" /* UsersPageComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__users_service__["a" /* UsersService */]]
    })
], UsersModule);

//# sourceMappingURL=users.module.js.map

/***/ }),

/***/ "../../../../../src/app/users/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
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


var UsersService = (function () {
    function UsersService(requestService) {
        this.requestService = requestService;
    }
    UsersService.prototype.getUsersList = function (pagingModel) {
        return this.requestService.post("/api/GetUsers/", pagingModel);
    };
    UsersService.prototype.addEmployee = function (model) {
        return this.requestService.post("/api/AddEmployee/", model);
    };
    UsersService.prototype.inviteEmployee = function (model) {
        return this.requestService.post("/api/InviteEmployee", model);
    };
    UsersService.prototype.editEmployee = function (model) {
        return this.requestService.post("/api/EditEmployee", model);
    };
    UsersService.prototype.reinviteEmployee = function (id) {
        return this.requestService.get("/api/ReInviteEmployee?id=" + id);
    };
    return UsersService;
}());
UsersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_RequestService__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_RequestService__["a" /* RequestService */]) === "function" && _a || Object])
], UsersService);

var _a;
//# sourceMappingURL=users.service.js.map

/***/ })

});
//# sourceMappingURL=users.module.chunk.js.map