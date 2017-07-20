webpackJsonp([11],{

/***/ "../../../../../src/app/uikits/invoicing/invoice-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoice_component__ = __webpack_require__("../../../../../src/app/uikits/invoicing/invoice.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'invoice',
        component: __WEBPACK_IMPORTED_MODULE_2__invoice_component__["a" /* InvoiceComponent */],
        data: {
            title: 'Invoice'
        }
    }
];
var InvoiceRoutingModule = (function () {
    function InvoiceRoutingModule() {
    }
    return InvoiceRoutingModule;
}());
InvoiceRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], InvoiceRoutingModule);

//# sourceMappingURL=invoice-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/uikits/invoicing/invoice.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        Invoice <strong>#90-98792</strong>\r\n        <a href=\"#\" class=\"btn btn-sm btn-info float-right\" onclick=\"javascript:window.print();\"><i class=\"fa fa-print\"></i> Print</a>\r\n        <a href=\"#\" class=\"btn btn-sm btn-info float-right\"><i class=\"fa fa-save\"></i> Save</a>\r\n    </div>\r\n    <div class=\"card-block\">\r\n        <div class=\"row mb-4\">\r\n\r\n            <div class=\"col-sm-4\">\r\n                <h6 class=\"mb-3\">From:</h6>\r\n                <div><strong>BootstrapMaster.com</strong></div>\r\n                <div>Konopnickiej 42</div>\r\n                <div>43-190 Mikolow, Poland</div>\r\n                <div>Email: lukasz@bootstrapmaster.com</div>\r\n                <div>Phone: +48 123 456 789</div>\r\n            </div><!--/.col-->\r\n\r\n            <div class=\"col-sm-4\">\r\n                <h6 class=\"mb-3\">To:</h6>\r\n                <div><strong>BootstrapMaster.com</strong></div>\r\n                <div>Konopnickiej 42</div>\r\n                <div>43-190 Mikolow, Poland</div>\r\n                <div>Email: lukasz@bootstrapmaster.com</div>\r\n                <div>Phone: +48 123 456 789</div>\r\n            </div><!--/.col-->\r\n\r\n            <div class=\"col-sm-4\">\r\n                <h6 class=\"mb-3\">Details:</h6>\r\n                <div>Invoice <strong>#90-98792</strong></div>\r\n                <div>March 30, 2013</div>\r\n                <div>VAT: PL9877281777</div>\r\n                <div>Account Name: BootstrapMaster.com</div>\r\n                <div><strong>SWIFT code: 99 8888 7777 6666 5555</strong></div>\r\n            </div><!--/.col-->\r\n\r\n        </div><!--/.row-->\r\n\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-striped\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"center\">#</th>\r\n                        <th>Item</th>\r\n                        <th>Description</th>\r\n                        <th class=\"center\">Quantity</th>\r\n                        <th class=\"right\">Unit Cost</th>\r\n                        <th class=\"right\">Total</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                        <td class=\"center\">1</td>\r\n                        <td class=\"left\">Origin License</td>\r\n                        <td class=\"left\">Extended License</td>\r\n                        <td class=\"center\">1</td>\r\n                        <td class=\"right\">$999,00</td>\r\n                        <td class=\"right\">$999,00</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"center\">2</td>\r\n                        <td class=\"left\">Custom Services</td>\r\n                        <td class=\"left\">Instalation and Customization (cost per hour)</td>\r\n                        <td class=\"center\">20</td>\r\n                        <td class=\"right\">$150,00</td>\r\n                        <td class=\"right\">$3.000,00</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"center\">3</td>\r\n                        <td class=\"left\">Hosting</td>\r\n                        <td class=\"left\">1 year subcription</td>\r\n                        <td class=\"center\">1</td>\r\n                        <td class=\"right\">$499,00</td>\r\n                        <td class=\"right\">$499,00</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"center\">4</td>\r\n                        <td class=\"left\">Platinum Support</td>\r\n                        <td class=\"left\">1 year subcription 24/7</td>\r\n                        <td class=\"center\">1</td>\r\n                        <td class=\"right\">$3.999,00</td>\r\n                        <td class=\"right\">$3.999,00</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-lg-4 col-sm-5\">\r\n                <div class=\"well\">\r\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n                </div>\r\n            </div><!--/.col-->\r\n\r\n            <div class=\"col-lg-4 offset-lg-4 col-sm-5 offset-sm-2\">\r\n                <table class=\"table table-clear\">\r\n                    <tbody>\r\n                        <tr>\r\n                            <td class=\"left\"><strong>Subtotal</strong></td>\r\n                            <td class=\"right\">$8.497,00</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"left\"><strong>Discount (20%)</strong></td>\r\n                            <td class=\"right\">$1,699,40</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"left\"><strong>VAT (10%)</strong></td>\r\n                            <td class=\"right\">$679,76</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"left\"><strong>Total</strong></td>\r\n                            <td class=\"right\"><strong>$7.477,36</strong></td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n                <a href=\"#\" class=\"btn btn-success\"><i class=\"fa fa-usd\"></i> Proceed to Payment</a>\r\n            </div><!--/.col-->\r\n\r\n        </div><!--/.row-->\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/uikits/invoicing/invoice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InvoiceComponent = (function () {
    function InvoiceComponent() {
    }
    return InvoiceComponent;
}());
InvoiceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/uikits/invoicing/invoice.component.html")
    })
], InvoiceComponent);

//# sourceMappingURL=invoice.component.js.map

/***/ }),

/***/ "../../../../../src/app/uikits/invoicing/invoice.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoice_component__ = __webpack_require__("../../../../../src/app/uikits/invoicing/invoice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invoice_routing_module__ = __webpack_require__("../../../../../src/app/uikits/invoicing/invoice-routing.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceModule", function() { return InvoiceModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Invoice

//Routing

//
var InvoiceModule = (function () {
    function InvoiceModule() {
    }
    return InvoiceModule;
}());
InvoiceModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__invoice_routing_module__["a" /* InvoiceRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__invoice_component__["a" /* InvoiceComponent */]
        ]
    })
], InvoiceModule);

//# sourceMappingURL=invoice.module.js.map

/***/ })

});
//# sourceMappingURL=11.chunk.js.map