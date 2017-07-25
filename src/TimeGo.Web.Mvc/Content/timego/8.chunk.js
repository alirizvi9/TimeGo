webpackJsonp([8],{

/***/ "../../../../../src/app/uikits/email/compose.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"card email-app\">\r\n        <nav>\r\n          <a href=\"#\" class=\"btn btn-danger btn-block\">New Email</a>\r\n\r\n          <ul class=\"nav\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-inbox\"></i> Inbox <span class=\"badge badge-danger\">4</span></a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-star\"></i> Stared</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-rocket\"></i> Sent</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-trash-o\"></i> Trash</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-bookmark\"></i> Important<span class=\"badge badge-info\">5</span></a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-inbox\"></i> Inbox <span class=\"badge badge-danger\">4</span></a>\r\n            </li>\r\n          </ul>\r\n        </nav>\r\n\r\n        <main>\r\n\r\n          <div class=\"message clearfix\">\r\n\r\n            <p class=\"text-center\">New Message</p>\r\n\r\n            <form>\r\n              <div class=\"form-group row\">\r\n                <label for=\"to\" class=\"col-sm-1 form-control-label\">To:</label>\r\n                <div class=\"col-sm-11\">\r\n                  <input type=\"email\" class=\"form-control\" id=\"to\" placeholder=\"Type email\">\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row\">\r\n                <label for=\"cc\" class=\"col-sm-1 form-control-label\">CC:</label>\r\n                <div class=\"col-sm-11\">\r\n                  <input type=\"email\" class=\"form-control\" id=\"cc\" placeholder=\"Type email\">\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row\">\r\n                <label for=\"bcc\" class=\"col-sm-1 form-control-label\">BCC:</label>\r\n                <div class=\"col-sm-11\">\r\n                  <input type=\"email\" class=\"form-control\" id=\"bcc\" placeholder=\"Type email\">\r\n                </div>\r\n              </div>\r\n\r\n            </form>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-11 offset-sm-1\">\r\n\r\n                <div class=\"btn-toolbar\" role=\"toolbar\">\r\n\r\n                  <div class=\"btn-group\">\r\n                    <button type=\"button\" class=\"btn btn-secondary\"><span class=\"fa fa-bold\"></span></button>\r\n                    <button type=\"button\" class=\"btn btn-secondary\"><span class=\"fa fa-italic\"></span></button>\r\n                    <button type=\"button\" class=\"btn btn-secondary\"><span class=\"fa fa-underline\"></span></button>\r\n                  </div>\r\n\r\n                  <div class=\"btn-group\">\r\n                    <button type=\"button\" class=\"btn btn-secondary\"><span class=\"fa fa-align-left\"></span></button>\r\n                    <button type=\"button\" class=\"btn btn-secondary\"><span class=\"fa fa-align-right\"></span></button>\r\n                    <button type=\"button\" class=\"btn btn-secondary\"><span class=\"fa fa-align-center\"></span></button>\r\n                    <button type=\"button\" class=\"btn btn-secondary\"><span class=\"fa fa-align-justify\"></span></button>\r\n                  </div>\r\n\r\n                  <div class=\"btn-group\">\r\n                    <button type=\"button\" class=\"btn btn-secondary\"><span class=\"fa fa-indent\"></span></button>\r\n                    <button type=\"button\" class=\"btn btn-secondary\"><span class=\"fa fa-outdent\"></span></button>\r\n                  </div>\r\n\r\n                  <div class=\"btn-group\">\r\n                    <button type=\"button\" class=\"btn btn-secondary\"><span class=\"fa fa-list-ul\"></span></button>\r\n                    <button type=\"button\" class=\"btn btn-secondary\"><span class=\"fa fa-list-ol\"></span></button>\r\n                  </div>\r\n\r\n                  <button type=\"button\" class=\"btn btn-secondary\"><span class=\"fa fa-trash-o\"></span></button>\r\n                  <button type=\"button\" class=\"btn btn-secondary\"><span class=\"fa fa-paperclip\"></span></button>\r\n\r\n                  <div class=\"btn-group\">\r\n                    <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\"><span class=\"fa fa-tags\"></span> <span class=\"caret\"></span></button>\r\n                    <ul class=\"dropdown-menu\">\r\n                      <li><a href=\"#\">add label <span class=\"badge badge-danger\"> Home</span></a></li>\r\n                      <li><a href=\"#\">add label <span class=\"badge badge-info\">Job</span></a></li>\r\n                      <li><a href=\"#\">add label <span class=\"badge badge-success\">Clients</span></a></li>\r\n                      <li><a href=\"#\">add label <span class=\"badge badge-warning\">News</span></a></li>\r\n                    </ul>\r\n                  </div>\r\n\r\n                </div>\r\n\r\n                <br/>\r\n\r\n                <div class=\"form-group\">\r\n\r\n                  <textarea class=\"form-control\" id=\"message\" name=\"body\" rows=\"12\" placeholder=\"Click here to reply\"></textarea>\r\n\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n\r\n                  <button type=\"submit\" class=\"btn btn-success\">Send</button>\r\n                  <button type=\"submit\" class=\"btn btn-secondary\">Draft</button>\r\n                  <button type=\"submit\" class=\"btn btn-danger\">Discard</button>\r\n\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </main>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/uikits/email/compose.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComposeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComposeComponent = (function () {
    function ComposeComponent() {
    }
    return ComposeComponent;
}());
ComposeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/uikits/email/compose.component.html")
    })
], ComposeComponent);

//# sourceMappingURL=compose.component.js.map

/***/ }),

/***/ "../../../../../src/app/uikits/email/email-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compose_component__ = __webpack_require__("../../../../../src/app/uikits/email/compose.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inbox_component__ = __webpack_require__("../../../../../src/app/uikits/email/inbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_component__ = __webpack_require__("../../../../../src/app/uikits/email/message.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        data: {
            title: 'Email App'
        },
        children: [
            {
                path: 'compose',
                component: __WEBPACK_IMPORTED_MODULE_2__compose_component__["a" /* ComposeComponent */],
                data: {
                    title: 'Compose'
                }
            },
            {
                path: 'inbox',
                component: __WEBPACK_IMPORTED_MODULE_3__inbox_component__["a" /* InboxComponent */],
                data: {
                    title: 'Inbox'
                }
            },
            {
                path: 'message',
                component: __WEBPACK_IMPORTED_MODULE_4__message_component__["a" /* MessageComponent */],
                data: {
                    title: 'Message'
                }
            }
        ]
    }
];
var EmailRoutingModule = (function () {
    function EmailRoutingModule() {
    }
    return EmailRoutingModule;
}());
EmailRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], EmailRoutingModule);

//# sourceMappingURL=email-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/uikits/email/email.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compose_component__ = __webpack_require__("../../../../../src/app/uikits/email/compose.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inbox_component__ = __webpack_require__("../../../../../src/app/uikits/email/inbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_component__ = __webpack_require__("../../../../../src/app/uikits/email/message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__email_routing_module__ = __webpack_require__("../../../../../src/app/uikits/email/email-routing.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailModule", function() { return EmailModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Email



// Routing

var EmailModule = (function () {
    function EmailModule() {
    }
    return EmailModule;
}());
EmailModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__email_routing_module__["a" /* EmailRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__compose_component__["a" /* ComposeComponent */],
            __WEBPACK_IMPORTED_MODULE_3__inbox_component__["a" /* InboxComponent */],
            __WEBPACK_IMPORTED_MODULE_4__message_component__["a" /* MessageComponent */]
        ]
    })
], EmailModule);

//# sourceMappingURL=email.module.js.map

/***/ }),

/***/ "../../../../../src/app/uikits/email/inbox.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"card email-app\">\r\n        <nav>\r\n            <a href=\"#\" class=\"btn btn-danger btn-block\">New Email</a>\r\n\r\n            <ul class=\"nav\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-inbox\"></i> Inbox <span class=\"badge badge-danger\">4</span></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-star\"></i> Stared</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-rocket\"></i> Sent</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-trash-o\"></i> Trash</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-bookmark\"></i> Important<span class=\"badge badge-info\">5</span></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-inbox\"></i> Inbox <span class=\"badge badge-danger\">4</span></a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n\r\n        <main>\r\n            <div class=\"toolbar\">\r\n                <span class=\"btn-group\">\r\n                    <button type=\"button\" class=\"btn btn-secondary\"><span class=\"fa fa-envelope\"></span></button>\r\n                    <button type=\"button\" class=\"btn btn-secondary\"><span class=\"fa fa-star\"></span></button>\r\n                    <button type=\"button\" class=\"btn btn-secondary\"><span class=\"fa fa-star-o\"></span></button>\r\n                    <button type=\"button\" class=\"btn btn-secondary\"><span class=\"fa fa-bookmark-o\"></span></button>\r\n                </span>\r\n\r\n                <span class=\"btn-group\">\r\n                    <button type=\"button\" class=\"btn btn-secondary\"><span class=\"fa fa-mail-reply\"></span></button>\r\n                    <button type=\"button\" class=\"btn btn-secondary\"><span class=\"fa fa-mail-reply-all\"></span></button>\r\n                    <button type=\"button\" class=\"btn btn-secondary\"><span class=\"fa fa-mail-forward\"></span></button>\r\n                </span>\r\n\r\n                <button type=\"button\" class=\"btn btn-secondary\"><span class=\"fa fa-trash-o\"></span></button>\r\n\r\n                <span class=\"btn-group\">\r\n                    <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\"><span class=\"fa fa-tags\"></span> <span class=\"caret\"></span></button>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a href=\"#\">add label <span class=\"badge badge-danger\"> Home</span></a></li>\r\n                        <li><a href=\"#\">add label <span class=\"badge badge-info\">Job</span></a></li>\r\n                        <li><a href=\"#\">add label <span class=\"badge badge-success\">Clients</span></a></li>\r\n                        <li><a href=\"#\">add label <span class=\"badge badge-warning\">News</span></a></li>\r\n                    </ul>\r\n                </span>\r\n\r\n                <span class=\"btn-group float-right\">\r\n                    <button type=\"button\" class=\"btn btn-secondary\"><span class=\"fa fa-chevron-left\"></span></button>\r\n                    <button type=\"button\" class=\"btn btn-secondary\"><span class=\"fa fa-chevron-right\"></span></button>\r\n                </span>\r\n            </div>\r\n\r\n            <ul class=\"messages-list\">\r\n\r\n                <li class=\"unread\">\r\n                    <a ui-sref=\"app.uikits.email.compose\">\r\n                        <div class=\"header\">\r\n                            <span class=\"action\"><i class=\"fa fa-square-o\"></i></span>\r\n                            <span class=\"from\">Lukasz Holeczek</span>\r\n                            <span class=\"date\"><span class=\"fa fa-paper-clip\"></span> Today, 3:47 PM</span>\r\n                        </div>\r\n                        <div class=\"title\">\r\n                            <span class=\"action\"><i class=\"fa fa-star-o\"></i></span>\r\n                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n                        </div>\r\n                        <div class=\"description\">\r\n                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n                        </div>\r\n                    </a>\r\n                </li>\r\n\r\n                <li>\r\n                    <a ui-sref=\"app.uikits.email.compose\">\r\n                        <div class=\"header\">\r\n                            <span class=\"action\"><i class=\"fa fa-square-o\"></i></span>\r\n                            <span class=\"from\">Lukasz Holeczek</span>\r\n                            <span class=\"date\"><span class=\"fa fa-paper-clip\"></span> Today, 3:47 PM</span>\r\n                        </div>\r\n                        <div class=\"title\">\r\n                            <span class=\"action\"><i class=\"fa fa-star-o\"></i></span>\r\n                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n                        </div>\r\n                        <div class=\"description\">\r\n                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n                        </div>\r\n                    </a>\r\n                </li>\r\n\r\n                <li>\r\n                    <a ui-sref=\"app.uikits.email.compose\">\r\n                        <div class=\"header\">\r\n                            <span class=\"action\"><i class=\"fa fa-square-o\"></i></span>\r\n                            <span class=\"from\">Lukasz Holeczek</span>\r\n                            <span class=\"date\">Today, 3:47 PM</span>\r\n                        </div>\r\n                        <div class=\"title\">\r\n                            <span class=\"action\"><i class=\"fa fa-star-o\"></i></span>\r\n                            Lorem ipsum dolor sit amet.\r\n                        </div>\r\n                        <div class=\"description\">\r\n                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n                        </div>\r\n                    </a>\r\n                </li>\r\n\r\n                <li class=\"unread\">\r\n                    <a ui-sref=\"app.uikits.email.compose\">\r\n                        <div class=\"header\">\r\n                            <span class=\"action\"><i class=\"fa fa-square-o\"></i></span>\r\n                            <span class=\"from\">Lukasz Holeczek</span>\r\n                            <span class=\"date\">Today, 3:47 PM</span>\r\n                        </div>\r\n                        <div class=\"title\">\r\n                            <span class=\"action\"><i class=\"fa fa-star-o\"></i></span>\r\n                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n                        </div>\r\n                        <div class=\"description\">\r\n                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n                        </div>\r\n                    </a>\r\n                </li>\r\n\r\n                <li class=\"unread\">\r\n                    <a ui-sref=\"app.uikits.email.compose\">\r\n                        <div class=\"header\">\r\n                            <span class=\"action\"><i class=\"fa fa-square-o\"></i></span>\r\n                            <span class=\"from\">Lukasz Holeczek</span>\r\n                            <span class=\"date\">Today, 3:47 PM</span>\r\n                        </div>\r\n                        <div class=\"title\">\r\n                            <span class=\"action\"><i class=\"fa fa-star-o\"></i></span>\r\n                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n                        </div>\r\n                        <div class=\"description\">\r\n                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n                        </div>\r\n\r\n                    </a>\r\n                </li>\r\n\r\n                <li>\r\n                    <a ui-sref=\"app.uikits.email.compose\">\r\n                        <div class=\"header\">\r\n                            <span class=\"action\"><i class=\"fa fa-square-o\"></i></span>\r\n                            <span class=\"from\">Lukasz Holeczek</span>\r\n                            <span class=\"date\">Today, 3:47 PM</span>\r\n                        </div>\r\n                        <div class=\"title\">\r\n                            <span class=\"action\"><i class=\"fa fa-star-o\"></i></span>\r\n                            Lorem ipsum dolor sit amet.\r\n                        </div>\r\n                        <div class=\"description\">\r\n                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n                        </div>\r\n                    </a>\r\n                </li>\r\n\r\n                <li class=\"unread\">\r\n                    <a ui-sref=\"app.uikits.email.compose\">\r\n                        <div class=\"header\">\r\n                            <span class=\"action\"><i class=\"fa fa-square-o\"></i></span>\r\n                            <span class=\"from\">Lukasz Holeczek</span>\r\n                            <span class=\"date\">Today, 3:47 PM</span>\r\n                        </div>\r\n                        <div class=\"title\">\r\n                            <span class=\"action\"><i class=\"fa fa-star-o\"></i></span>\r\n                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n                        </div>\r\n                        <div class=\"description\">\r\n                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n                        </div>\r\n                    </a>\r\n                </li>\r\n\r\n                <li>\r\n                    <a ui-sref=\"app.uikits.email.compose\">\r\n                        <div class=\"header\">\r\n                            <span class=\"action\"><i class=\"fa fa-square-o\"></i></span>\r\n                            <span class=\"from\">Lukasz Holeczek</span>\r\n                            <span class=\"date\">Today, 3:47 PM</span>\r\n                        </div>\r\n                        <div class=\"title\">\r\n                            <span class=\"action\"><i class=\"fa fa-star-o\"></i></span>\r\n                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n                        </div>\r\n                        <div class=\"description\">\r\n                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n                        </div>\r\n                    </a>\r\n                </li>\r\n\r\n                <li>\r\n                    <a ui-sref=\"app.uikits.email.compose\">\r\n                        <div class=\"header\">\r\n                            <span class=\"action\"><i class=\"fa fa-square-o\"></i></span>\r\n                            <span class=\"from\">Lukasz Holeczek</span>\r\n                            <span class=\"date\">Today, 3:47 PM</span>\r\n                        </div>\r\n                        <div class=\"title\">\r\n                            <span class=\"action\"><i class=\"fa fa-star-o\"></i></span>\r\n                            Lorem ipsum dolor sit amet.\r\n                        </div>\r\n                        <div class=\"description\">\r\n                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n                        </div>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </main>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/uikits/email/inbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InboxComponent = (function () {
    function InboxComponent() {
    }
    return InboxComponent;
}());
InboxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/uikits/email/inbox.component.html")
    })
], InboxComponent);

//# sourceMappingURL=inbox.component.js.map

/***/ }),

/***/ "../../../../../src/app/uikits/email/message.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"card email-app\">\r\n        <nav>\r\n          <a href=\"#\" class=\"btn btn-danger btn-block\">New Email</a>\r\n\r\n          <ul class=\"nav\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-inbox\"></i> Inbox <span class=\"badge badge-danger\">4</span></a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-star\"></i> Stared</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-rocket\"></i> Sent</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-trash-o\"></i> Trash</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-bookmark\"></i> Important<span class=\"badge badge-info\">5</span></a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-inbox\"></i> Inbox <span class=\"badge badge-danger\">4</span></a>\r\n            </li>\r\n          </ul>\r\n        </nav>\r\n\r\n        <main>\r\n          <div class=\"toolbar\">\r\n            <span class=\"btn-group\">\r\n              <button type=\"button\" class=\"btn btn-secondary\"><span class=\"fa fa-star\"></span></button>\r\n              <button type=\"button\" class=\"btn btn-secondary\"><span class=\"fa fa-star-o\"></span></button>\r\n              <button type=\"button\" class=\"btn btn-secondary\"><span class=\"fa fa-bookmark-o\"></span></button>\r\n            </span>\r\n\r\n            <span class=\"btn-group\">\r\n              <button type=\"button\" class=\"btn btn-secondary\"><span class=\"fa fa-mail-reply\"></span></button>\r\n              <button type=\"button\" class=\"btn btn-secondary\"><span class=\"fa fa-mail-reply-all\"></span></button>\r\n              <button type=\"button\" class=\"btn btn-secondary\"><span class=\"fa fa-mail-forward\"></span></button>\r\n            </span>\r\n\r\n            <button type=\"button\" class=\"btn btn-secondary\"><span class=\"fa fa-trash-o\"></span></button>\r\n\r\n            <span class=\"btn-group\">\r\n              <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\"><span class=\"fa fa-tags\"></span> <span class=\"caret\"></span></button>\r\n              <ul class=\"dropdown-menu\">\r\n                <li><a href=\"#\">add label <span class=\"badge badge-danger\"> Home</span></a></li>\r\n                <li><a href=\"#\">add label <span class=\"badge badge-info\">Job</span></a></li>\r\n                <li><a href=\"#\">add label <span class=\"badge badge-success\">Clients</span></a></li>\r\n                <li><a href=\"#\">add label <span class=\"badge badge-warning\">News</span></a></li>\r\n              </ul>\r\n            </span>\r\n          </div>\r\n\r\n          <div class=\"message\">\r\n\r\n\r\n\r\n            <div class=\"message-title\">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</div>\r\n            <div class=\"header\">\r\n\r\n              <img class=\"avatar\" src=\"img/avatars/7.jpg\">\r\n\r\n\r\n              <div class=\"from\">\r\n                <span>Lukasz Holeczek</span>\r\n                lukasz@bootstrapmaster.com\r\n              </div>\r\n              <div class=\"date\">Today, <b>3:47 PM</b></div>\r\n\r\n              <div class=\"menu\"></div>\r\n\r\n            </div>\r\n\r\n            <div class=\"content\">\r\n              <p>\r\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n              </p>\r\n              <blockquote>\r\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n              </blockquote>\r\n            </div>\r\n\r\n            <div class=\"attachments\">\r\n              <ul>\r\n                <li>\r\n                  <span class=\"badge badge-danger\">zip</span> <b>bootstrap.zip</b> <i>(2,5MB)</i>\r\n                  <span class=\"quickMenu\">\r\n                    <a href=\"#\" class=\"fa fa-search\"><i></i></a>\r\n                    <a href=\"#\" class=\"fa fa-share\"><i></i></a>\r\n                    <a href=\"#\" class=\"fa fa-cloud-download\"><i></i></a>\r\n                  </span>\r\n                </li>\r\n                <li>\r\n                  <span class=\"badge badge-info\">txt</span> <b>readme.txt</b> <i>(7KB)</i>\r\n                  <span class=\"quickMenu\">\r\n                    <a href=\"#\" class=\"fa fa-search\"><i></i></a>\r\n                    <a href=\"#\" class=\"fa fa-share\"><i></i></a>\r\n                    <a href=\"#\" class=\"fa fa-cloud-download\"><i></i></a>\r\n                  </span>\r\n                </li>\r\n                <li>\r\n                  <span class=\"badge badge-success\">xls</span> <b>spreadsheet.xls</b> <i>(984KB)</i>\r\n                  <span class=\"quickMenu\">\r\n                    <a href=\"#\" class=\"fa fa-search\"><i></i></a>\r\n                    <a href=\"#\" class=\"fa fa-share\"><i></i></a>\r\n                    <a href=\"#\" class=\"fa fa-cloud-download\"><i></i></a>\r\n                  </span>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n\r\n            <form method=\"post\" action=\"\">\r\n\r\n              <div class=\"form-group\">\r\n\r\n                <textarea class=\"form-control\" id=\"message\" name=\"body\" rows=\"12\" placeholder=\"Click here to reply\"></textarea>\r\n\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n\r\n                <button tabindex=\"3\" type=\"submit\" class=\"btn btn-success\">Send message</button>\r\n\r\n              </div>\r\n\r\n            </form>\r\n\r\n          </div>\r\n\r\n\r\n        </main>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/uikits/email/message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageComponent = (function () {
    function MessageComponent() {
    }
    return MessageComponent;
}());
MessageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/uikits/email/message.component.html")
    })
], MessageComponent);

//# sourceMappingURL=message.component.js.map

/***/ })

});
//# sourceMappingURL=8.chunk.js.map