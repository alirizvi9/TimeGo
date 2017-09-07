webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dashboard/dashboard.module": [
		"../../../../../src/app/dashboard/dashboard.module.ts",
		"dashboard.module"
	],
	"./periods/period.module": [
		"../../../../../src/app/periods/period.module.ts",
		"common",
		"period.module"
	],
	"./profile/profile.module": [
		"../../../../../src/app/profile/profile.module.ts",
		"profile.module"
	],
	"./tasks/tasks.module": [
		"../../../../../src/app/tasks/tasks.module.ts",
		"tasks.module"
	],
	"./timeoff/timeoff.module": [
		"../../../../../src/app/timeoff/timeoff.module.ts",
		"common",
		"timeoff.module"
	],
	"./timesheets/timesheets.module": [
		"../../../../../src/app/timesheets/timesheets.module.ts",
		"timesheets.module"
	],
	"./users/users.module": [
		"../../../../../src/app/users/users.module.ts",
		"common",
		"users.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/AdminAuthGuard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AdminAuthGuard = (function () {
    function AdminAuthGuard() {
    }
    AdminAuthGuard.prototype.canActivate = function () {
        return commonServerData != null && commonServerData.Token != null && commonServerData.Role == "Admin";
    };
    return AdminAuthGuard;
}());
AdminAuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], AdminAuthGuard);

//# sourceMappingURL=AdminAuthGuard.js.map

/***/ }),

/***/ "../../../../../src/app/AlwaysAuthGuard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlwaysAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlwaysAuthGuard = (function () {
    function AlwaysAuthGuard(router) {
        this.router = router;
    }
    AlwaysAuthGuard.prototype.canActivate = function () {
        console.log('AlwaysAuthGuard');
        if (commonServerData != null && commonServerData.Token != null)
            return true;
        window.location.href = '/Login';
        return false;
    };
    return AlwaysAuthGuard;
}());
AlwaysAuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AlwaysAuthGuard);

var _a;
//# sourceMappingURL=AlwaysAuthGuard.js.map

/***/ }),

/***/ "../../../../../src/app/TaskManagerAuthGuard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskManagerAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TaskManagerAuthGuard = (function () {
    function TaskManagerAuthGuard() {
    }
    TaskManagerAuthGuard.prototype.canActivate = function () {
        return commonServerData != null && commonServerData.Token != null && commonServerData.Role == "Task Manager";
    };
    return TaskManagerAuthGuard;
}());
TaskManagerAuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], TaskManagerAuthGuard);

//# sourceMappingURL=TaskManagerAuthGuard.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        // tslint:disable-next-line
        selector: 'body',
        template: '<router-outlet></router-outlet>'
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store_devtools__ = __webpack_require__("../../../../@ngrx/store-devtools/@ngrx/store-devtools.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__AlwaysAuthGuard__ = __webpack_require__("../../../../../src/app/AlwaysAuthGuard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__AdminAuthGuard__ = __webpack_require__("../../../../../src/app/AdminAuthGuard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__TaskManagerAuthGuard__ = __webpack_require__("../../../../../src/app/TaskManagerAuthGuard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_RequestService__ = __webpack_require__("../../../../../src/app/services/RequestService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap_tabs__ = __webpack_require__("../../../../ngx-bootstrap/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_nav_dropdown_directive__ = __webpack_require__("../../../../../src/app/shared/nav-dropdown.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__layouts_full_layout_component__ = __webpack_require__("../../../../../src/app/layouts/full-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__dialogs_dialogs_module__ = __webpack_require__("../../../../../src/app/dialogs/dialogs.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















// Routing Module

//Layouts



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_16__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["i" /* StoreModule */].forRoot({}),
            !__WEBPACK_IMPORTED_MODULE_19__environments_environment__["a" /* environment */].production ? __WEBPACK_IMPORTED_MODULE_6__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument() : [],
            __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["c" /* EffectsModule */].forRoot([]),
            __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap_tabs__["a" /* TabsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_18__dialogs_dialogs_module__["a" /* DialogsModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_http__["c" /* HttpModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_17__layouts_full_layout_component__["a" /* FullLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_14__shared_nav_dropdown_directive__["a" /* NAV_DROPDOWN_DIRECTIVES */]
        ],
        providers: [{
                provide: __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* LocationStrategy */],
                useClass: __WEBPACK_IMPORTED_MODULE_3__angular_common__["c" /* HashLocationStrategy */]
            }, __WEBPACK_IMPORTED_MODULE_7__AlwaysAuthGuard__["a" /* AlwaysAuthGuard */], __WEBPACK_IMPORTED_MODULE_8__AdminAuthGuard__["a" /* AdminAuthGuard */], __WEBPACK_IMPORTED_MODULE_9__TaskManagerAuthGuard__["a" /* TaskManagerAuthGuard */], __WEBPACK_IMPORTED_MODULE_10__services_RequestService__["a" /* RequestService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layouts_full_layout_component__ = __webpack_require__("../../../../../src/app/layouts/full-layout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__layouts_full_layout_component__["a" /* FullLayoutComponent */],
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'timesheets',
                loadChildren: './timesheets/timesheets.module#TimesheetsModule'
            },
            {
                path: 'tasks',
                loadChildren: './tasks/tasks.module#TasksModule'
            },
            {
                path: 'timeoff',
                loadChildren: './timeoff/timeoff.module#TimeoffModule'
            },
            {
                path: 'periods',
                loadChildren: './periods/period.module#PeriodModule'
            },
            {
                path: 'profile',
                loadChildren: './profile/profile.module#ProfileModule'
            },
            {
                path: 'users',
                loadChildren: './users/users.module#UsersModule'
            }
        ]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/dialogs/dialogs.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subscription_subscription_component__ = __webpack_require__("../../../../../src/app/dialogs/subscription/subscription.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_timepicker__ = __webpack_require__("../../../../ngx-bootstrap/timepicker/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DialogsModule = (function () {
    function DialogsModule() {
    }
    return DialogsModule;
}());
DialogsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_timepicker__["a" /* TimepickerModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["b" /* ModalModule */].forRoot(),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__subscription_subscription_component__["a" /* SubscriptionDialogComponent */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__subscription_subscription_component__["a" /* SubscriptionDialogComponent */]]
    })
], DialogsModule);

//# sourceMappingURL=dialogs.module.js.map

/***/ }),

/***/ "../../../../../src/app/dialogs/subscription/subscription.component.html":
/***/ (function(module, exports) {

module.exports = "<div bsModal #subscriptionModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Subscription</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"closeModal()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Subscription works</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModal()\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dialogs/subscription/subscription.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialogs/subscription/subscription.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubscriptionDialogComponent = (function () {
    function SubscriptionDialogComponent() {
        this.mytime = new Date();
    }
    SubscriptionDialogComponent.prototype.ngOnInit = function () {
    };
    SubscriptionDialogComponent.prototype.showModal = function () {
        this.modal.show();
    };
    SubscriptionDialogComponent.prototype.closeModal = function () {
        this.modal.hide();
    };
    return SubscriptionDialogComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('subscriptionModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _a || Object)
], SubscriptionDialogComponent.prototype, "modal", void 0);
SubscriptionDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'subscription-modal',
        template: __webpack_require__("../../../../../src/app/dialogs/subscription/subscription.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dialogs/subscription/subscription.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SubscriptionDialogComponent);

var _a;
//# sourceMappingURL=subscription.component.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/full-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header navbar\">\r\n  <button class=\"navbar-toggler d-lg-none\" type=\"button\" appMobileSidebarToggler>&#9776;</button>\r\n  <ul class=\"nav navbar-nav d-md-down-none\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link navbar-toggler\" href=\"#\" appSidebarToggler>&#9776;</a>\r\n    </li>\r\n    <li class=\"nav-item px-3\">\r\n      <a class=\"nav-link\" routerLink=\"/dashboard\">Dashboard</a>\r\n    </li>\r\n    <li class=\"nav-item px-3\">\r\n      <a class=\"nav-link\" routerLink=\"/timesheets\">Timesheets</a>\r\n    </li>\r\n    <li class=\"nav-item px-3\">\r\n      <a class=\"nav-link\" routerLink=\"/periods\">Timesheets Periods</a>\r\n    </li>\r\n    <li class=\"nav-item px-3\">\r\n      <a class=\"nav-link\" routerLink=\"/tasks\">Tasks</a>\r\n    </li>\r\n    <li class=\"nav-item px-3\">\r\n      <a class=\"nav-link\" routerLink=\"/timeoff\">Timeoff Requests</a>\r\n    </li>\r\n  </ul>\r\n  <ul class=\"nav navbar-nav ml-auto\">\r\n    <li class=\"nav-item d-md-down-none\">\r\n      <a class=\"nav-link\" href=\"#\"><i class=\"icon-location-pin\"></i></a>\r\n    </li>\r\n    <li class=\"nav-item dropdown\" dropdown placement=\"bottom right\">\r\n      <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle (click)=\"false\">\r\n        <img src=\"assets/img/avatars/default.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n      </a>\r\n      <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\r\n        <div class=\"dropdown-header text-center\"><strong>Manage</strong></div>\r\n        <a class=\"dropdown-item\" routerLink=\"/users\"><i class=\"fa fa-user\"></i>Users</a>\r\n        <a class=\"dropdown-item\"><i class=\"fa fa-file\"></i>Users Rates</a>\r\n        <div class=\"dropdown-header text-center\"><strong>Settings</strong></div>\r\n        <a class=\"dropdown-item\" routerLink=\"/profile\"><i class=\"fa fa-user\"></i>Profile</a>\r\n        <a class=\"dropdown-item\" (click)=\"subscriptionModal.showModal()\"><i class=\"fa fa-wrench\"></i>Subcription</a>\r\n        <div class=\"divider\"></div>\r\n        <a class=\"dropdown-item\" (click)=\"logout()\"><i class=\"fa fa-lock\"></i> Logout</a>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n  \r\n</header>\r\n\r\n<div class=\"app-body\">\r\n  <main class=\"main\">\r\n    <div class=\"container-fluid\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </main>\r\n</div>\r\n\r\n<footer class=\"app-footer\">\r\n  <a href=\"https://timego.com\">TimeGo</a> &copy; 2017 TimeGo Inc.\r\n</footer>\r\n\r\n<subscription-modal #subscriptionModal></subscription-modal>"

/***/ }),

/***/ "../../../../../src/app/layouts/full-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FullLayoutComponent = (function () {
    function FullLayoutComponent() {
        this.disabled = false;
        this.status = { isopen: false };
    }
    FullLayoutComponent.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    FullLayoutComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    FullLayoutComponent.prototype.logout = function () {
        window.location.href = '/account/logout';
    };
    FullLayoutComponent.prototype.ngOnInit = function () { };
    return FullLayoutComponent;
}());
FullLayoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/layouts/full-layout.component.html")
    }),
    __metadata("design:paramtypes", [])
], FullLayoutComponent);

//# sourceMappingURL=full-layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/RequestService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequestService = (function () {
    function RequestService(http, router) {
        this.http = http;
        this.router = router;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Authorization': 'Bearer ' + commonServerData.Token,
            'Content-Type': 'application/json'
        });
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    RequestService.prototype.get = function (path) {
        return this.intercept(this.http.get(path, this.options).map(function (res) { return res.json(); }));
    };
    RequestService.prototype.post = function (path, body) {
        return this.intercept(this.http.post(path, body, this.options).map(function (res) { return res.json(); }));
    };
    RequestService.prototype.intercept = function (observable) {
        var _this = this;
        return observable.catch(function (err) {
            if (err.status === 401) {
                return _this.unauthorised();
            }
            else if (err.status === 403) {
                return _this.forbidden();
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(err);
            }
        });
    };
    RequestService.prototype.unauthorised = function () {
        window.location.href = '/Login';
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].empty();
    };
    RequestService.prototype.forbidden = function () {
        this.router.navigate(['/']);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].empty();
    };
    return RequestService;
}());
RequestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object])
], RequestService);

var _a, _b;
//# sourceMappingURL=RequestService.js.map

/***/ }),

/***/ "../../../../../src/app/shared/nav-dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NavDropdownDirective */
/* unused harmony export NavDropdownToggleDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NAV_DROPDOWN_DIRECTIVES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavDropdownDirective = (function () {
    function NavDropdownDirective(el) {
        this.el = el;
    }
    NavDropdownDirective.prototype.toggle = function () {
        this.el.nativeElement.classList.toggle('open');
    };
    return NavDropdownDirective;
}());
NavDropdownDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appNavDropdown]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], NavDropdownDirective);

/**
* Allows the dropdown to be toggled via click.
*/
var NavDropdownToggleDirective = (function () {
    function NavDropdownToggleDirective(dropdown) {
        this.dropdown = dropdown;
    }
    NavDropdownToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        this.dropdown.toggle();
    };
    return NavDropdownToggleDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NavDropdownToggleDirective.prototype, "toggleOpen", null);
NavDropdownToggleDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appNavDropdownToggle]'
    }),
    __metadata("design:paramtypes", [NavDropdownDirective])
], NavDropdownToggleDirective);

var NAV_DROPDOWN_DIRECTIVES = [NavDropdownDirective, NavDropdownToggleDirective];
var _a;
//# sourceMappingURL=nav-dropdown.directive.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map