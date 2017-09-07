webpackJsonp(["timesheets.module"],{

/***/ "../../../../../src/app/timesheets/actions/timesheets.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return APPROVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return APPROVE_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return SUBMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return SUBMIT_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return REQUEST_TO_UNLOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return REQUEST_TO_UNLOCK_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return GET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return GET_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return GET_PERIODS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return GET_PERIODS_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return GET_Tasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return GET_Tasks_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return GET_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return GET_USERS_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD; });
/* unused harmony export ADD_COMPLETE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return EDIT; });
/* unused harmony export EDIT_COMPLETE */
/* unused harmony export CHANGE_STATUS */
/* unused harmony export CHANGE_STATUS_COMPLETE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return GetAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return GetCompleteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return GetPeriodAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return GetPeriodCompleteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return GetTasksAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return GetTasksCompleteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return GetUsersAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return GetUsersCompleteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AddAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return DeleteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return EditAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return EditCompleteAction; });
/* unused harmony export ChangeStatusAction */
/* unused harmony export ChangeStatusCompleteAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ApproveAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ApproveCompleteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return SubmitAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return SubmitCompleteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return ToUnlockAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return ToUnlockCompleteAction; });
var APPROVE = '[Timesheets] Approve Timesheets';
var APPROVE_COMPLETE = '[Timesheets] Approve Timesheets Complete';
var SUBMIT = '[Timesheets] Submit Timesheets';
var SUBMIT_COMPLETE = '[Timesheets] Submit Timesheets Complete';
var REQUEST_TO_UNLOCK = '[Timesheets] Request to Unlock Timesheets';
var REQUEST_TO_UNLOCK_COMPLETE = '[Timesheets] Request to Unlock Timesheets Complete';
var GET = '[Timesheets] Get Timesheets';
var GET_COMPLETE = '[Timesheets] Get Timesheets Complete';
var GET_PERIODS = '[Timesheets] Get periods';
var GET_PERIODS_COMPLETE = '[Timesheets] Get periods Complete';
var GET_Tasks = '[Timesheets] Get Tasks';
var GET_Tasks_COMPLETE = '[Timesheets] Get Tasks Complete';
var GET_USERS = '[Timesheets] Get Users';
var GET_USERS_COMPLETE = '[Timesheets] Get Users Complete';
var ADD = '[Timesheets] Add time line';
var ADD_COMPLETE = '[Timesheets] Add time line Complete';
var DELETE = '[Timesheets] Delete time line';
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

var GetUsersAction = (function () {
    function GetUsersAction(payload) {
        this.payload = payload;
        this.type = GET_USERS;
    }
    return GetUsersAction;
}());

var GetUsersCompleteAction = (function () {
    function GetUsersCompleteAction(payload) {
        this.payload = payload;
        this.type = GET_USERS_COMPLETE;
    }
    return GetUsersCompleteAction;
}());

var AddAction = (function () {
    function AddAction(payload) {
        this.payload = payload;
        this.type = ADD;
    }
    return AddAction;
}());

var DeleteAction = (function () {
    function DeleteAction(payload) {
        this.payload = payload;
        this.type = DELETE;
    }
    return DeleteAction;
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

var ApproveAction = (function () {
    function ApproveAction(payload) {
        this.payload = payload;
        this.type = APPROVE;
    }
    return ApproveAction;
}());

var ApproveCompleteAction = (function () {
    function ApproveCompleteAction(payload) {
        this.payload = payload;
        this.type = APPROVE_COMPLETE;
    }
    return ApproveCompleteAction;
}());

var SubmitAction = (function () {
    function SubmitAction(payload) {
        this.payload = payload;
        this.type = SUBMIT;
    }
    return SubmitAction;
}());

var SubmitCompleteAction = (function () {
    function SubmitCompleteAction(payload) {
        this.payload = payload;
        this.type = SUBMIT_COMPLETE;
    }
    return SubmitCompleteAction;
}());

var ToUnlockAction = (function () {
    function ToUnlockAction(payload) {
        this.payload = payload;
        this.type = REQUEST_TO_UNLOCK;
    }
    return ToUnlockAction;
}());

var ToUnlockCompleteAction = (function () {
    function ToUnlockCompleteAction(payload) {
        this.payload = payload;
        this.type = REQUEST_TO_UNLOCK_COMPLETE;
    }
    return ToUnlockCompleteAction;
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

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-8 push-md-2\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        TIMESHEETS\r\n      </div>\r\n      <div class=\"card-block\">\r\n        <div class=\"form-group row\">\r\n            <h5 class=\"col-md-1 timego-center\">Period</h5>\r\n            <select (change)=\"selectPeriod.emit({periodId: $event.target.value, userId: userId})\" [(ngModel)]=\"periodId\" class=\"form-control col-md-3\">\r\n              <option [value]=\"0\">none</option>\r\n              <option [value]=\"period.Id\" *ngFor=\"let period of periods\">{{period.PeriodStart | date: 'EEE d-MMM'}} to {{period.PeriodEnd | date: 'EEE d-MMM'}}</option>\r\n            </select>\r\n          <h5 class=\"col-md-2 timego-center\" *ngIf=\"role == 'Task Manager'\">Employees</h5>\r\n          <select *ngIf=\"role == 'Task Manager'\" (change)=\"selectPeriod.emit({periodId: periodId, userId: $event.target.value})\" [(ngModel)]=\"userId\" class=\"form-control col-md-3\">\r\n            <option [value]=\"0\">none</option>\r\n            <option [value]=\"user.Id\" *ngFor=\"let user of users\">{{user.FirstName}} {{user.LastName}}</option>\r\n          </select>\r\n        </div>\r\n        <div *ngIf=\"isLoaded && timesheets != null\" class=\"form-group\">\r\n          <div *ngFor=\"let line of timesheets.Lines; let i = index\">\r\n            <div class=\"row form-group timego-line\">\r\n              <h5 class=\"col-md-2 timego-center\">{{line.Date | date: 'EEE d-MMM'}}</h5>\r\n              <div class=\"col-md-4\">\r\n                <select [(ngModel)]=\"line.TaskId\" class=\"form-control col-md-8\">\r\n                  <option [value]=\"0\">none</option>\r\n                  <option [value]=\"task.Id\" *ngFor=\"let task of tasks\">{{task.TaskName}}</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"col-md-4 row\">\r\n                <timepicker [(ngModel)]=\"line.StartTime\" [arrowkeys]=\"true\" [showMeridian]=\"false\" [mousewheel]=\"false\" [showSpinners]=\"false\" class=\"timego-timepicker\"></timepicker>\r\n                <i class=\"fa fa-arrows-h fa-lg timego-rangetimepiker-icon\"></i>\r\n                <timepicker [(ngModel)]=\"line.EndTime\" [min]=\"line.StartTime\" [mousewheel]=\"false\" [showMeridian]=\"false\" [arrowkeys]=\"false\" [showSpinners]=\"false\" class=\"timego-timepicker\"></timepicker>\r\n              </div>\r\n              <div class=\"col-md-1 timego-center\">\r\n                <b>\r\n                  {{totalLineTimeHr(line)}} h {{totalLineTimeMin(line)}} m\r\n                </b>\r\n              </div>\r\n              <div class=\"col-md-1\">\r\n                <button type=\"button\" class=\"btn btn-danger\" \r\n                        *ngIf=\"!((i === (timesheets.Lines.length - 1) || timesheets.Lines[i].Date != timesheets.Lines[i+1].Date) && (i === 0 || timesheets.Lines[i].Date != timesheets.Lines[i-1].Date))\" \r\n                        (click)=\"delete.emit(line)\"><i class=\"fa fa-remove\"></i> Delete</button>\r\n                <button type=\"button\" class=\"btn btn-danger\" \r\n                        *ngIf=\"(i === (timesheets.Lines.length - 1) || timesheets.Lines[i].Date != timesheets.Lines[i+1].Date) && (i === 0 || timesheets.Lines[i].Date != timesheets.Lines[i-1].Date)\" \r\n                        (click)=\"delete.emit(line)\" disabled><i class=\"fa fa-remove\"></i> Delete</button>\r\n              </div>\r\n            </div>\r\n            <div class=\"row form-group border-bottom\" *ngIf=\"i === (timesheets.Lines.length - 1) || timesheets.Lines[i].Date != timesheets.Lines[i+1].Date\">\r\n              <div class=\"col-md-1\">\r\n                <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"addLine.emit(line.Date)\">+</button>\r\n              </div>\r\n              <div class=\"col-md-4 timego-center\">\r\n                add another line for {{line.Date | date: 'EEE d-MMM'}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4 row form-group\" *ngIf=\"isLoaded\">\r\n            <h5>\r\n              Total time: {{totalTimeHr(timesheets.Lines)}} h {{totalTimeMin(timesheets.Lines)}} m\r\n            </h5>\r\n          </div>\r\n          <div class=\"row form-group\" *ngIf=\"isLoaded && role == 'Employee'\">\r\n            <label class=\"col-md-1\">Employee Notes: </label>\r\n            <textarea rows=\"4\" class=\"col-md-10\" cols=\"50\" [(ngModel)]=\"timesheets.EmployeeNotes\"></textarea>\r\n          </div>\r\n          <div class=\"row form-group\" *ngIf=\"isLoaded && role == 'Task Manager'\">\r\n            <label class=\"col-md-1\">Employee Notes: {{timesheets.EmployeeNotes}}</label>\r\n          </div>\r\n          <div class=\"row form-group\" *ngIf=\"isLoaded && role == 'Task Manager'\">\r\n            <label class=\"col-md-1\">Approver Notes: </label>\r\n            <textarea rows=\"4\" class=\"col-md-10\" cols=\"50\" [(ngModel)]=\"timesheets.ApproverNotes\"></textarea>\r\n          </div>\n          <div class=\"row form-group\" *ngIf=\"isLoaded && role == 'Task Manager'\">\r\n            <div class=\"checkbox push-md-1 col-md-3\">\r\n              <label>\r\n                Locked for User: <input type=\"checkbox\" [(ngModel)]=\"timesheets.Lock\" >\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group float-right\">\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"save.emit({Period: periodId, Timesheets: timesheets})\">Approve</button>\r\n            <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"isLoaded && role == 'Task Manager'\" (click)=\"submit.emit(timesheets.Id)\">Request Resubmit</button>\n            <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"isLoaded && role == 'Employee'\" [disabled]=\"timesheets.Lock\" (click)=\"submit.emit(timesheets.Id)\">Submit</button>\r\n            <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"isLoaded && role == 'Employee'\" [disabled]=\"timesheets.Lock\" (click)=\"unlock.emit(timesheets.Id)\">Request to Unlock</button>\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"approve.emit(timesheets.Id)\">Save</button>\r\n          </div>\n          <div class=\"row form-group\" *ngIf=\"isLoaded && role == 'Employee'\">\r\n            <label class=\"col-md-10\">Submited on: {{timesheets.SubmittedOn | date: 'd-MMM-yy'}}</label>\r\n          </div>\n          <div class=\"row form-group\" *ngIf=\"isLoaded && role == 'Employee'\">\r\n            <label class=\"col-md-10\">Employee Notes: {{timesheets.ApproverNotes}}</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

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
        this.submite = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.approve = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.unlock = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.delete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.mytime = new Date();
    }
    TimesheetsComponent.prototype.ngOnInit = function () {
        this.role = commonServerData.Role;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], TimesheetsComponent.prototype, "users", void 0);
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
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], TimesheetsComponent.prototype, "submite", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], TimesheetsComponent.prototype, "approve", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], TimesheetsComponent.prototype, "unlock", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], TimesheetsComponent.prototype, "delete", void 0);
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
        this.users$ = store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["f" /* getUsers */]);
    }
    TimesheetsPageComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_timesheets__["v" /* GetPeriodAction */](0));
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_timesheets__["x" /* GetTasksAction */](0));
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_timesheets__["z" /* GetUsersAction */](0));
    };
    TimesheetsPageComponent.prototype.selectPeriod = function (model) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_timesheets__["t" /* GetAction */](model));
    };
    TimesheetsPageComponent.prototype.addLine = function (date) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_timesheets__["d" /* AddAction */](date));
    };
    TimesheetsPageComponent.prototype.save = function (model) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_timesheets__["j" /* EditAction */](model));
    };
    TimesheetsPageComponent.prototype.delete = function (model) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_timesheets__["h" /* DeleteAction */](model));
    };
    TimesheetsPageComponent.prototype.submit = function (id) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_timesheets__["F" /* SubmitAction */](id));
    };
    TimesheetsPageComponent.prototype.unlock = function (id) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_timesheets__["H" /* ToUnlockAction */](id));
    };
    TimesheetsPageComponent.prototype.approve = function (id) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_timesheets__["e" /* ApproveAction */](id));
    };
    return TimesheetsPageComponent;
}());
TimesheetsPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'timesheets-page',
        changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* ChangeDetectionStrategy */].OnPush,
        template: "\n    <up-timesheets [timesheets]=\"timesheets$ | async\" [isLoaded]=\"isLoaded$ | async\" [periods]=\"periods$ | async\" \n    [users]=\"users$ | async\" [tasks]=\"tasks$ | async\" [loading]=\"loading$ | async\" \n    (selectPeriod)=\"selectPeriod($event)\" (addLine)=\"addLine($event)\" \n    (save)=\"save($event)\" (delete)=\"delete($event)\" (submit)=\"submit($event)\" (approve)=\"approve($event)\" (unlock)=\"unlock($event)\"></up-timesheets>\n  ",
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
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["l" /* GET */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (query) {
            var nextGet$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["l" /* GET */]).skip(1);
            return _this.timesheetsService.getTimesheet(query)
                .takeUntil(nextGet$)
                .map(function (timesheet) { return new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["u" /* GetCompleteAction */](timesheet); })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["u" /* GetCompleteAction */](null)); });
        });
        this.getPeriods$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["n" /* GET_PERIODS */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .switchMap(function () {
            var nextGet$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["n" /* GET_PERIODS */]).skip(1);
            return _this.timesheetsService.getPeriods()
                .takeUntil(nextGet$)
                .map(function (result) { return new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["w" /* GetPeriodCompleteAction */](result); })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["w" /* GetPeriodCompleteAction */](null)); });
        });
        this.getTasks$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["p" /* GET_Tasks */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .switchMap(function () {
            var nextGet$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["p" /* GET_Tasks */]).skip(1);
            return _this.timesheetsService.getTasks()
                .takeUntil(nextGet$)
                .map(function (result) { return new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["y" /* GetTasksCompleteAction */](result); })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["y" /* GetTasksCompleteAction */](null)); });
        });
        this.getUsers$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["r" /* GET_USERS */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .switchMap(function () {
            var nextGet$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["s" /* GET_USERS_COMPLETE */]);
            return _this.timesheetsService.getUsers()
                .takeUntil(nextGet$)
                .map(function (result) { return new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["A" /* GetUsersCompleteAction */](result); })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["A" /* GetUsersCompleteAction */](null)); });
        });
        this.approve$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["b" /* APPROVE */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (query) {
            var nextGet$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["c" /* APPROVE_COMPLETE */]);
            return _this.timesheetsService.approve(query)
                .takeUntil(nextGet$)
                .map(function (result) { return new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["f" /* ApproveCompleteAction */](result); })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["f" /* ApproveCompleteAction */](null)); });
        });
        this.submite$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["D" /* SUBMIT */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (query) {
            var nextGet$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["E" /* SUBMIT_COMPLETE */]);
            return _this.timesheetsService.submit(query)
                .takeUntil(nextGet$)
                .map(function (result) { return new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["G" /* SubmitCompleteAction */](result); })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["G" /* SubmitCompleteAction */](null)); });
        });
        this.unlock = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["B" /* REQUEST_TO_UNLOCK */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (query) {
            var nextGet$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["C" /* REQUEST_TO_UNLOCK_COMPLETE */]);
            return _this.timesheetsService.unlock(query)
                .takeUntil(nextGet$)
                .map(function (result) { return new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["I" /* ToUnlockCompleteAction */](result); })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["I" /* ToUnlockCompleteAction */](null)); });
        });
        this.edit$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["i" /* EDIT */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (query) {
            var nextGet$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["l" /* GET */]);
            return _this.timesheetsService.editTimesheet(query.Timesheets)
                .takeUntil(nextGet$)
                .map(function (result) { return new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["t" /* GetAction */]({ PeriodId: query.Period, UserId: query.User }); })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["k" /* EditCompleteAction */](null)); });
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
], TimesheetsEffects.prototype, "getUsers$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === "function" && _e || Object)
], TimesheetsEffects.prototype, "approve$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === "function" && _f || Object)
], TimesheetsEffects.prototype, "submite$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === "function" && _g || Object)
], TimesheetsEffects.prototype, "unlock", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === "function" && _h || Object)
], TimesheetsEffects.prototype, "edit$", void 0);
TimesheetsEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* Actions */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_10__timesheets_service__["a" /* TimesheetsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__timesheets_service__["a" /* TimesheetsService */]) === "function" && _k || Object])
], TimesheetsEffects);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=timesheets.js.map

/***/ }),

/***/ "../../../../../src/app/timesheets/models/timesheets.model.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=timesheets.model.js.map

/***/ }),

/***/ "../../../../../src/app/timesheets/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return reducers; });
/* unused harmony export getTimesheetsState */
/* unused harmony export getTimesheetsEntityState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getPeriods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getTimesheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLoadingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getIsLoadedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getUsers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timesheets__ = __webpack_require__("../../../../../src/app/timesheets/reducers/timesheets.ts");


var reducers = {
    timesheetsPage: __WEBPACK_IMPORTED_MODULE_1__timesheets__["g" /* reducer */]
};
var getTimesheetsState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createFeatureSelector */])('timesheetsPage');
var getTimesheetsEntityState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getTimesheetsState, function (state) { return state.timesheetsPage; });
var getPeriods = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getTimesheetsEntityState, __WEBPACK_IMPORTED_MODULE_1__timesheets__["c" /* getPeriods */]);
var getTimesheet = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getTimesheetsEntityState, __WEBPACK_IMPORTED_MODULE_1__timesheets__["e" /* getTimesheet */]);
var getLoadingStatus = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getTimesheetsEntityState, __WEBPACK_IMPORTED_MODULE_1__timesheets__["b" /* getLoadingStatus */]);
var getIsLoadedStatus = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getTimesheetsEntityState, __WEBPACK_IMPORTED_MODULE_1__timesheets__["a" /* getIsLoadedStatus */]);
var getTasks = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getTimesheetsEntityState, __WEBPACK_IMPORTED_MODULE_1__timesheets__["d" /* getTasks */]);
var getUsers = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getTimesheetsEntityState, __WEBPACK_IMPORTED_MODULE_1__timesheets__["f" /* getUsers */]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/timesheets/reducers/timesheets.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["g"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getPeriods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLoadingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getIsLoadedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getTimesheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getUsers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_timesheets__ = __webpack_require__("../../../../../src/app/timesheets/actions/timesheets.ts");

var initialState = {
    timesheet: null,
    isLoaded: false,
    loading: false,
    periods: [],
    periodId: 0,
    tasks: [],
    users: []
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_timesheets__["l" /* GET */]:
            {
                var periodId = action.payload;
                return {
                    timesheet: state.timesheet,
                    isLoaded: true,
                    loading: true,
                    periods: state.periods,
                    periodId: periodId,
                    tasks: state.tasks,
                    users: state.users
                };
            }
        case __WEBPACK_IMPORTED_MODULE_0__actions_timesheets__["m" /* GET_COMPLETE */]: {
            var timesheet = action.payload;
            return {
                timesheet: timesheet,
                isLoaded: true,
                loading: false,
                periods: state.periods,
                periodId: state.periodId,
                tasks: state.tasks,
                users: state.users
            };
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_timesheets__["n" /* GET_PERIODS */]:
            {
                return {
                    timesheet: state.timesheet,
                    isLoaded: true,
                    loading: false,
                    periods: state.periods,
                    periodId: state.periodId,
                    tasks: state.tasks,
                    users: state.users
                };
            }
        case __WEBPACK_IMPORTED_MODULE_0__actions_timesheets__["o" /* GET_PERIODS_COMPLETE */]: {
            var periods = action.payload;
            return {
                timesheet: state.timesheet,
                isLoaded: true,
                loading: false,
                periods: periods,
                periodId: state.periodId,
                tasks: state.tasks,
                users: state.users
            };
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_timesheets__["p" /* GET_Tasks */]:
            {
                return {
                    timesheet: state.timesheet,
                    isLoaded: true,
                    loading: false,
                    periods: state.periods,
                    periodId: state.periodId,
                    tasks: state.tasks,
                    users: state.users
                };
            }
        case __WEBPACK_IMPORTED_MODULE_0__actions_timesheets__["q" /* GET_Tasks_COMPLETE */]: {
            var tasks = action.payload;
            return {
                timesheet: state.timesheet,
                isLoaded: true,
                loading: false,
                periods: state.periods,
                periodId: state.periodId,
                tasks: tasks,
                users: state.users
            };
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_timesheets__["s" /* GET_USERS_COMPLETE */]: {
            var users = action.payload;
            return {
                timesheet: state.timesheet,
                isLoaded: true,
                loading: false,
                periods: state.periods,
                periodId: state.periodId,
                tasks: state.tasks,
                users: users
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
                tasks: state.tasks,
                users: state.users
            };
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_timesheets__["g" /* DELETE */]: {
            var line = action.payload;
            var lines = state.timesheet.Lines;
            var index = lines.indexOf(line, 0);
            if (index > -1) {
                lines.splice(index, 1);
            }
            var timesheet = state.timesheet;
            timesheet.Lines = lines;
            return {
                timesheet: timesheet,
                isLoaded: true,
                loading: false,
                periods: state.periods,
                periodId: state.periodId,
                tasks: state.tasks,
                users: state.users
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
var getUsers = function (state) { return state.users; };
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
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["i" /* StoreModule */].forFeature('timesheetsPage', __WEBPACK_IMPORTED_MODULE_12__reducers__["g" /* reducers */]),
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
    TimesheetsService.prototype.getTimesheet = function (model) {
        return this.requestService.post("/api/GetTimesheets/", model);
    };
    TimesheetsService.prototype.getPeriods = function () {
        return this.requestService.get("/api/periods/");
    };
    TimesheetsService.prototype.getTasks = function () {
        return this.requestService.get("/api/tasks/");
    };
    TimesheetsService.prototype.editTimesheet = function (timesheets) {
        return this.requestService.post("/api/Timesheets/", timesheets);
    };
    TimesheetsService.prototype.getUsers = function () {
        return this.requestService.get("/api/GetUsers/");
    };
    TimesheetsService.prototype.approve = function (id) {
        return this.requestService.get("/api/ApproveTimesheets?id=" + id);
    };
    TimesheetsService.prototype.submit = function (id) {
        return this.requestService.get("/api/SubmitTimesheets?id=" + id);
    };
    TimesheetsService.prototype.unlock = function (id) {
        return this.requestService.get("/api/UnlockTimesheets?id=" + id);
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