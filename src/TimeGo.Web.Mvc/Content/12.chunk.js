webpackJsonp([12],{

/***/ "../../../../../src/app/plugins/spinners/spinners-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__spinners_component__ = __webpack_require__("../../../../../src/app/plugins/spinners/spinners.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnersRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__spinners_component__["a" /* SpinnersComponent */],
        data: {
            title: 'Spinners'
        }
    }
];
var SpinnersRoutingModule = (function () {
    function SpinnersRoutingModule() {
    }
    return SpinnersRoutingModule;
}());
SpinnersRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], SpinnersRoutingModule);

//# sourceMappingURL=spinners-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/plugins/spinners/spinners.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <i class=\"fa fa-spinner\"></i> Spinners - SpinKit\r\n      <div class=\"card-actions\">\r\n        <a href=\"https://github.com/tobiasahlin/SpinKit\"><small class=\"text-muted\">docs</small></a>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <p>\r\n        Simple loading spinners animated with CSS. SpinKit uses hardware accelerated (translate and opacity) CSS animations to create smooth and easily customizable animations.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-spinner\"></i> Rotating plane\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"sk-rotating-plane\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-spinner\"></i> Double bounce\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"sk-double-bounce\">\r\n            <div class=\"sk-child sk-double-bounce1\"></div>\r\n            <div class=\"sk-child sk-double-bounce2\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-spinner\"></i> Wave\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"sk-wave\">\r\n            <div class=\"sk-rect sk-rect1\"></div>\r\n            <div class=\"sk-rect sk-rect2\"></div>\r\n            <div class=\"sk-rect sk-rect3\"></div>\r\n            <div class=\"sk-rect sk-rect4\"></div>\r\n            <div class=\"sk-rect sk-rect5\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-spinner\"></i> Wandering cubes\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"sk-wandering-cubes\">\r\n            <div class=\"sk-cube sk-cube1\"></div>\r\n            <div class=\"sk-cube sk-cube2\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-spinner\"></i> Pulse\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"sk-spinner sk-spinner-pulse\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-spinner\"></i> Chasing dots\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"sk-chasing-dots\">\r\n            <div class=\"sk-child sk-dot1\"></div>\r\n            <div class=\"sk-child sk-dot2\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-spinner\"></i> Three bounce\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"sk-three-bounce\">\r\n            <div class=\"sk-child sk-bounce1\"></div>\r\n            <div class=\"sk-child sk-bounce2\"></div>\r\n            <div class=\"sk-child sk-bounce3\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-spinner\"></i> Circle\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"sk-circle\">\r\n            <div class=\"sk-circle1 sk-child\"></div>\r\n            <div class=\"sk-circle2 sk-child\"></div>\r\n            <div class=\"sk-circle3 sk-child\"></div>\r\n            <div class=\"sk-circle4 sk-child\"></div>\r\n            <div class=\"sk-circle5 sk-child\"></div>\r\n            <div class=\"sk-circle6 sk-child\"></div>\r\n            <div class=\"sk-circle7 sk-child\"></div>\r\n            <div class=\"sk-circle8 sk-child\"></div>\r\n            <div class=\"sk-circle9 sk-child\"></div>\r\n            <div class=\"sk-circle10 sk-child\"></div>\r\n            <div class=\"sk-circle11 sk-child\"></div>\r\n            <div class=\"sk-circle12 sk-child\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-spinner\"></i> Cube grid\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"sk-cube-grid\">\r\n            <div class=\"sk-cube sk-cube1\"></div>\r\n            <div class=\"sk-cube sk-cube2\"></div>\r\n            <div class=\"sk-cube sk-cube3\"></div>\r\n            <div class=\"sk-cube sk-cube4\"></div>\r\n            <div class=\"sk-cube sk-cube5\"></div>\r\n            <div class=\"sk-cube sk-cube6\"></div>\r\n            <div class=\"sk-cube sk-cube7\"></div>\r\n            <div class=\"sk-cube sk-cube8\"></div>\r\n            <div class=\"sk-cube sk-cube9\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-spinner\"></i> Fading circle\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"sk-fading-circle\">\r\n            <div class=\"sk-circle1 sk-circle\"></div>\r\n            <div class=\"sk-circle2 sk-circle\"></div>\r\n            <div class=\"sk-circle3 sk-circle\"></div>\r\n            <div class=\"sk-circle4 sk-circle\"></div>\r\n            <div class=\"sk-circle5 sk-circle\"></div>\r\n            <div class=\"sk-circle6 sk-circle\"></div>\r\n            <div class=\"sk-circle7 sk-circle\"></div>\r\n            <div class=\"sk-circle8 sk-circle\"></div>\r\n            <div class=\"sk-circle9 sk-circle\"></div>\r\n            <div class=\"sk-circle10 sk-circle\"></div>\r\n            <div class=\"sk-circle11 sk-circle\"></div>\r\n            <div class=\"sk-circle12 sk-circle\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-spinner\"></i> Folding Cube\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"sk-folding-cube\">\r\n            <div class=\"sk-cube1 sk-cube\"></div>\r\n            <div class=\"sk-cube2 sk-cube\"></div>\r\n            <div class=\"sk-cube4 sk-cube\"></div>\r\n            <div class=\"sk-cube3 sk-cube\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/plugins/spinners/spinners.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SpinnersComponent = (function () {
    function SpinnersComponent() {
    }
    return SpinnersComponent;
}());
SpinnersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/plugins/spinners/spinners.component.html")
    })
], SpinnersComponent);

//# sourceMappingURL=spinners.component.js.map

/***/ }),

/***/ "../../../../../src/app/plugins/spinners/spinners.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__spinners_component__ = __webpack_require__("../../../../../src/app/plugins/spinners/spinners.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__spinners_routing_module__ = __webpack_require__("../../../../../src/app/plugins/spinners/spinners-routing.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnersModule", function() { return SpinnersModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Spinners

//Routing

//
var SpinnersModule = (function () {
    function SpinnersModule() {
    }
    return SpinnersModule;
}());
SpinnersModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__spinners_routing_module__["a" /* SpinnersRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__spinners_component__["a" /* SpinnersComponent */]
        ]
    })
], SpinnersModule);

//# sourceMappingURL=spinners.module.js.map

/***/ })

});
//# sourceMappingURL=12.chunk.js.map