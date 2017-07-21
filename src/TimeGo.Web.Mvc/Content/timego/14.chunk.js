webpackJsonp([14],{

/***/ "../../../../../src/app/dashboard/dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */],
        data: {
            title: 'Dashboard'
        }
    }
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    return DashboardRoutingModule;
}());
DashboardRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], DashboardRoutingModule);

//# sourceMappingURL=dashboard-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"h4 m-0\">89.9%</div>\r\n          <div>Lorem ipsum...</div>\r\n          <div class=\"progress progress-xs my-3\">\r\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet enim.</small>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"h4 m-0\">12.124</div>\r\n          <div>Lorem ipsum...</div>\r\n          <div class=\"progress progress-xs my-3\">\r\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet enim.</small>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"h4 m-0\">$98.111,00</div>\r\n          <div>Lorem ipsum...</div>\r\n          <div class=\"progress progress-xs my-3\">\r\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet enim.</small>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"h4 m-0\">2 TB</div>\r\n          <div>Lorem ipsum...</div>\r\n          <div class=\"progress progress-xs my-3\">\r\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet enim.</small>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n  </div><!--/.row-->\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\" ng-controller=\"mainChartCtrl\">\r\n        <div class=\"card-header\">\r\n          Traffic\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-8 px-4\">\r\n              <div class=\"chart-wrapper\" style=\"height:370px;\">\r\n                <canvas baseChart class=\"chart\"\r\n                [datasets]=\"mainChartData\"\r\n                [labels]=\"mainChartLabels\"\r\n                [options]=\"mainChartOptions\"\r\n                [colors]=\"mainChartColours\"\r\n                [legend]=\"mainChartLegend\"\r\n                [chartType]=\"mainChartType\"\r\n                (chartHover)=\"chartHovered($event)\"\r\n                (chartClick)=\"chartClicked($event)\"></canvas>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4 px-4\">\r\n              <div>Visits <span class=\"font-weight-bold float-right\">(40% - 29.703 Users)</span></div>\r\n              <div class=\"progress progress-sm mt-2 mb-3\">\r\n                <div class=\"progress-bar bg-success\" style=\"width: 40%\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n              </div>\r\n\r\n              <div>Unique <span class=\"font-weight-bold float-right\">(20% - 24.093 Unique Users)</span></div>\r\n              <div class=\"progress progress-sm mt-2 mb-3\">\r\n                <div class=\"progress-bar bg-info\" style=\"width: 20%\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n              </div>\r\n\r\n              <div>Pageviews <span class=\"font-weight-bold float-right\">(60% - 78.706 Views)</span></div>\r\n              <div class=\"progress progress-sm mt-2 mb-3\">\r\n                <div class=\"progress-bar bg-warning\" style=\"width: 60%\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n              </div>\r\n\r\n              <div>New Users <span class=\"font-weight-bold float-right\">(80% - 22.123 Users)</span></div>\r\n            \t<div class=\"progress progress-sm mt-2 mb-3\">\r\n                <div class=\"progress-bar bg-danger\" style=\"width: 80%\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n              </div>\r\n\r\n              <div>Bounce Rate <span class=\"font-weight-bold float-right\">(40.15%)</span></div>\r\n              <div class=\"progress progress-sm mt-2 mb-3\">\r\n                <div class=\"progress-bar bg-success\" style=\"width: 40%\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n              </div>\r\n\r\n              <div>Visits <span class=\"font-weight-bold float-right\">(40% - 29.703 Users)</span></div>\r\n              <div class=\"progress progress-sm mt-2 mb-3\">\r\n                <div class=\"progress-bar bg-success\" style=\"width: 40%\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n              </div>\r\n\r\n              <div>Unique <span class=\"font-weight-bold float-right\">(20% - 24.093 Unique Users)</span></div>\r\n              <div class=\"progress progress-sm mt-2 mb-3\">\r\n                <div class=\"progress-bar bg-info\" style=\"width: 20%\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div><!--/.card-->\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"social-box facebook\">\r\n        <i class=\"fa fa-facebook\"></i>\r\n        <div class=\"chart-wrapper\" style=\"height:90px;\">\r\n          <canvas baseChart class=\"chart\"\r\n          [datasets]=\"socialChartData1\"\r\n          [labels]=\"socialChartLabels\"\r\n          [options]=\"socialChartOptions\"\r\n          [colors]=\"socialChartColours\"\r\n          [legend]=\"socialChartLegend\"\r\n          [chartType]=\"socialChartType\"\r\n          (chartHover)=\"chartHovered($event)\"\r\n          (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n        <ul>\r\n          <li>\r\n            <strong>89k</strong>\r\n            <span>friends</span>\r\n          </li>\r\n          <li>\r\n            <strong>459</strong>\r\n            <span>feeds</span>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <!--/.social-box-->\r\n    </div>\r\n    <!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"social-box twitter\">\r\n        <i class=\"fa fa-twitter\"></i>\r\n        <div class=\"chart-wrapper\" style=\"height:90px;\">\r\n          <canvas baseChart class=\"chart\"\r\n          [datasets]=\"socialChartData2\"\r\n          [labels]=\"socialChartLabels\"\r\n          [options]=\"socialChartOptions\"\r\n          [colors]=\"socialChartColours\"\r\n          [legend]=\"socialChartLegend\"\r\n          [chartType]=\"socialChartType\"\r\n          (chartHover)=\"chartHovered($event)\"\r\n          (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n        <ul>\r\n          <li>\r\n            <strong>973k</strong>\r\n            <span>followers</span>\r\n          </li>\r\n          <li>\r\n            <strong>1.792</strong>\r\n            <span>tweets</span>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <!--/.social-box-->\r\n    </div>\r\n    <!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"social-box linkedin\">\r\n        <i class=\"fa fa-linkedin\"></i>\r\n        <div class=\"chart-wrapper\" style=\"height:90px;\">\r\n          <canvas baseChart class=\"chart\"\r\n          [datasets]=\"socialChartData3\"\r\n          [labels]=\"socialChartLabels\"\r\n          [options]=\"socialChartOptions\"\r\n          [colors]=\"socialChartColours\"\r\n          [legend]=\"socialChartLegend\"\r\n          [chartType]=\"socialChartType\"\r\n          (chartHover)=\"chartHovered($event)\"\r\n          (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n        <ul>\r\n          <li>\r\n            <strong>500+</strong>\r\n            <span>contacts</span>\r\n          </li>\r\n          <li>\r\n            <strong>292</strong>\r\n            <span>feeds</span>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <!--/.social-box-->\r\n    </div>\r\n    <!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"social-box google-plus\">\r\n        <i class=\"fa fa-google-plus\"></i>\r\n        <div class=\"chart-wrapper\" style=\"height:90px;\">\r\n          <canvas baseChart class=\"chart\"\r\n          [datasets]=\"socialChartData4\"\r\n          [labels]=\"socialChartLabels\"\r\n          [options]=\"socialChartOptions\"\r\n          [colors]=\"socialChartColours\"\r\n          [legend]=\"socialChartLegend\"\r\n          [chartType]=\"socialChartType\"\r\n          (chartHover)=\"chartHovered($event)\"\r\n          (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n        <ul>\r\n          <li>\r\n            <strong>894</strong>\r\n            <span>followers</span>\r\n          </li>\r\n          <li>\r\n            <strong>92</strong>\r\n            <span>circles</span>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <!--/.social-box-->\r\n    </div>\r\n    <!--/.col-->\r\n  </div>\r\n  <!--/.row-->\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Traffic &amp; Sales\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12 col-lg-4\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"callout callout-info\">\r\n                    <small class=\"text-muted\">New Clients</small>\r\n                    <br>\r\n                    <strong class=\"h4\">9,123</strong>\r\n                    <div class=\"chart-wrapper\" style=\"width:100px;height:30px;\">\r\n                      <canvas baseChart class=\"chart\"\r\n                      [datasets]=\"sparklineChartData1\"\r\n                      [labels]=\"sparklineChartLabels\"\r\n                      [options]=\"sparklineChartOptions\"\r\n                      [colors]=\"sparklineChartInfo\"\r\n                      [legend]=\"sparklineChartLegend\"\r\n                      [chartType]=\"sparklineChartType\"\r\n                      (chartHover)=\"chartHovered($event)\"\r\n                      (chartClick)=\"chartClicked($event)\"></canvas>\r\n                    </div>\r\n                  </div>\r\n                </div><!--/.col-->\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"callout callout-danger\">\r\n                    <small class=\"text-muted\">Recuring Clients</small>\r\n                    <br>\r\n                    <strong class=\"h4\">22,643</strong>\r\n                    <div class=\"chart-wrapper\" style=\"width:100px;height:30px;\">\r\n                      <canvas baseChart class=\"chart\"\r\n                      [datasets]=\"sparklineChartData2\"\r\n                      [labels]=\"sparklineChartLabels\"\r\n                      [options]=\"sparklineChartOptions\"\r\n                      [colors]=\"sparklineChartDanger\"\r\n                      [legend]=\"sparklineChartLegend\"\r\n                      [chartType]=\"sparklineChartType\"\r\n                      (chartHover)=\"chartHovered($event)\"\r\n                      (chartClick)=\"chartClicked($event)\"></canvas>\r\n                    </div>\r\n                  </div>\r\n                </div><!--/.col-->\r\n              </div><!--/.row-->\r\n              <hr class=\"mt-0\">\r\n              <ul class=\"horizontal-bars\">\r\n                <li>\r\n                  <div class=\"title\">\r\n                    Monday\r\n                  </div>\r\n                  <div class=\"bars\">\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 34%\" aria-valuenow=\"34\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 78%\" aria-valuenow=\"78\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <div class=\"title\">\r\n                    Tuesday\r\n                  </div>\r\n                  <div class=\"bars\">\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 56%\" aria-valuenow=\"56\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 94%\" aria-valuenow=\"94\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <div class=\"title\">\r\n                    Wednesday\r\n                  </div>\r\n                  <div class=\"bars\">\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 12%\" aria-valuenow=\"12\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 67%\" aria-valuenow=\"67\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <div class=\"title\">\r\n                    Thursday\r\n                  </div>\r\n                  <div class=\"bars\">\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 43%\" aria-valuenow=\"43\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 91%\" aria-valuenow=\"91\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <div class=\"title\">\r\n                    Friday\r\n                  </div>\r\n                  <div class=\"bars\">\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 22%\" aria-valuenow=\"22\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 73%\" aria-valuenow=\"73\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <div class=\"title\">\r\n                    Saturday\r\n                  </div>\r\n                  <div class=\"bars\">\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 53%\" aria-valuenow=\"53\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 82%\" aria-valuenow=\"82\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <div class=\"title\">\r\n                    Sunday\r\n                  </div>\r\n                  <div class=\"bars\">\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 9%\" aria-valuenow=\"9\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 69%\" aria-valuenow=\"69\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li class=\"legend\">\r\n                  <span class=\"badge badge-pill badge-info\"></span> <small>New clients</small> &nbsp; <span class=\"badge badge-pill badge-danger\"></span> <small>Recurring clients</small>\r\n                </li>\r\n              </ul>\r\n            </div><!--/.col-->\r\n            <div class=\"col-sm-6 col-lg-4\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"callout callout-warning\">\r\n                    <small class=\"text-muted\">Pageviews</small>\r\n                    <br>\r\n                    <strong class=\"h4\">78,623</strong>\r\n                    <div class=\"chart-wrapper\" style=\"width:100px;height:30px;\">\r\n                      <canvas baseChart class=\"chart\"\r\n                      [datasets]=\"sparklineChartData1\"\r\n                      [labels]=\"sparklineChartLabels\"\r\n                      [options]=\"sparklineChartOptions\"\r\n                      [colors]=\"sparklineChartWarning\"\r\n                      [legend]=\"sparklineChartLegend\"\r\n                      [chartType]=\"sparklineChartType\"\r\n                      (chartHover)=\"chartHovered($event)\"\r\n                      (chartClick)=\"chartClicked($event)\"></canvas>\r\n                    </div>\r\n                  </div>\r\n                </div><!--/.col-->\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"callout callout-success\">\r\n                    <small class=\"text-muted\">Organic</small>\r\n                    <br>\r\n                    <strong class=\"h4\">49,123</strong>\r\n                    <div class=\"chart-wrapper\" style=\"width:100px;height:30px;\">\r\n                      <canvas baseChart class=\"chart\"\r\n                      [datasets]=\"sparklineChartData2\"\r\n                      [labels]=\"sparklineChartLabels\"\r\n                      [options]=\"sparklineChartOptions\"\r\n                      [colors]=\"sparklineChartSuccess\"\r\n                      [legend]=\"sparklineChartLegend\"\r\n                      [chartType]=\"sparklineChartType\"\r\n                      (chartHover)=\"chartHovered($event)\"\r\n                      (chartClick)=\"chartClicked($event)\"></canvas>\r\n                    </div>\r\n                  </div>\r\n                </div><!--/.col-->\r\n              </div><!--/.row-->\r\n              <hr class=\"mt-0\">\r\n              <ul class=\"horizontal-bars type-2\">\r\n                <li>\r\n                  <i class=\"icon-user\"></i>\r\n                  <span class=\"title\">Male</span>\r\n                  <span class=\"value\">43%</span>\r\n                  <div class=\"bars\">\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 43%\" aria-valuenow=\"43\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <i class=\"icon-user-female\"></i>\r\n                  <span class=\"title\">Female</span>\r\n                  <span class=\"value\">37%</span>\r\n                  <div class=\"bars\">\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 37%\" aria-valuenow=\"37\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li class=\"divider\"></li>\r\n                <li>\r\n                  <i class=\"icon-globe\"></i>\r\n                  <span class=\"title\">Organic Search</span>\r\n                  <span class=\"value\">191,235 <span class=\"text-muted small\">(56%)</span></span>\r\n                  <div class=\"bars\">\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 56%\" aria-valuenow=\"56\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <i class=\"icon-social-facebook\"></i>\r\n                  <span class=\"title\">Facebook</span>\r\n                  <span class=\"value\">51,223 <span class=\"text-muted small\">(15%)</span></span>\r\n                  <div class=\"bars\">\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 15%\" aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <i class=\"icon-social-twitter\"></i>\r\n                  <span class=\"title\">Twitter</span>\r\n                  <span class=\"value\">37,564 <span class=\"text-muted small\">(11%)</span></span>\r\n                  <div class=\"bars\">\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 11%\" aria-valuenow=\"11\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <i class=\"icon-social-linkedin\"></i>\r\n                  <span class=\"title\">LinkedIn</span>\r\n                  <span class=\"value\">27,319 <span class=\"text-muted small\">(8%)</span></span>\r\n                  <div class=\"bars\">\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 8%\" aria-valuenow=\"8\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li class=\"divider text-center\">\r\n                  <button type=\"button\" class=\"btn btn-sm btn-link text-muted\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\"show more\"><i class=\"icon-options\"></i></button>\r\n                </li>\r\n              </ul>\r\n            </div><!--/.col-->\r\n            <div class=\"col-sm-6 col-lg-4\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"callout\">\r\n                    <small class=\"text-muted\">CTR</small>\r\n                    <br>\r\n                    <strong class=\"h4\">23%</strong>\r\n                    <div class=\"chart-wrapper\" style=\"width:100px;height:30px;\">\r\n                      <canvas baseChart class=\"chart\"\r\n                      [datasets]=\"sparklineChartData1\"\r\n                      [labels]=\"sparklineChartLabels\"\r\n                      [options]=\"sparklineChartOptions\"\r\n                      [colors]=\"sparklineChartDefault\"\r\n                      [legend]=\"sparklineChartLegend\"\r\n                      [chartType]=\"sparklineChartType\"\r\n                      (chartHover)=\"chartHovered($event)\"\r\n                      (chartClick)=\"chartClicked($event)\"></canvas>\r\n                    </div>\r\n                  </div>\r\n                </div><!--/.col-->\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"callout callout-primary\">\r\n                    <small class=\"text-muted\">Bounce Rate</small>\r\n                    <br>\r\n                    <strong class=\"h4\">5%</strong>\r\n                    <div class=\"chart-wrapper\" style=\"width:100px;height:30px;\">\r\n                      <canvas baseChart class=\"chart\"\r\n                      [datasets]=\"sparklineChartData2\"\r\n                      [labels]=\"sparklineChartLabels\"\r\n                      [options]=\"sparklineChartOptions\"\r\n                      [colors]=\"sparklineChartPrimary\"\r\n                      [legend]=\"sparklineChartLegend\"\r\n                      [chartType]=\"sparklineChartType\"\r\n                      (chartHover)=\"chartHovered($event)\"\r\n                      (chartClick)=\"chartClicked($event)\"></canvas>\r\n                    </div>\r\n                  </div>\r\n                </div><!--/.col-->\r\n              </div><!--/.row-->\r\n              <hr class=\"mt-0\">\r\n              <ul class=\"icons-list\">\r\n                <li>\r\n                  <i class=\"icon-screen-desktop bg-primary\"></i>\r\n                  <div class=\"desc\">\r\n                    <div class=\"title\">iMac 4k</div>\r\n                    <small>Lorem ipsum dolor sit amet</small>\r\n                  </div>\r\n                  <div class=\"value\">\r\n                    <div class=\"small text-muted\">Sold this week</div>\r\n                    <strong>1.924</strong>\r\n                  </div>\r\n                  <div class=\"actions\">\r\n                    <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i></button>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <i class=\"icon-screen-smartphone bg-info\"></i>\r\n                  <div class=\"desc\">\r\n                    <div class=\"title\">Samsung Galaxy Edge</div>\r\n                    <small>Lorem ipsum dolor sit amet</small>\r\n                  </div>\r\n                  <div class=\"value\">\r\n                    <div class=\"small text-muted\">Sold this week</div>\r\n                    <strong>1.224</strong>\r\n                  </div>\r\n                  <div class=\"actions\">\r\n                    <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i></button>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <i class=\"icon-screen-smartphone bg-warning\"></i>\r\n                  <div class=\"desc\">\r\n                    <div class=\"title\">iPhone 6S</div>\r\n                    <small>Lorem ipsum dolor sit amet</small>\r\n                  </div>\r\n                  <div class=\"value\">\r\n                    <div class=\"small text-muted\">Sold this week</div>\r\n                    <strong>1.163</strong>\r\n                  </div>\r\n                  <div class=\"actions\">\r\n                    <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i></button>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <i class=\"icon-user bg-danger\"></i>\r\n                  <div class=\"desc\">\r\n                    <div class=\"title\">Premium accounts</div>\r\n                    <small>Lorem ipsum dolor sit amet</small>\r\n                  </div>\r\n                  <div class=\"value\">\r\n                    <div class=\"small text-muted\">Sold this week</div>\r\n                    <strong>928</strong>\r\n                  </div>\r\n                  <div class=\"actions\">\r\n                    <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i></button>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <i class=\"icon-social-spotify bg-success\"></i>\r\n                  <div class=\"desc\">\r\n                    <div class=\"title\">Spotify Subscriptions</div>\r\n                    <small>Lorem ipsum dolor sit amet</small>\r\n                  </div>\r\n                  <div class=\"value\">\r\n                    <div class=\"small text-muted\">Sold this week</div>\r\n                    <strong>893</strong>\r\n                  </div>\r\n                  <div class=\"actions\">\r\n                    <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i></button>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <i class=\"icon-cloud-download bg-danger\"></i>\r\n                  <div class=\"desc\">\r\n                    <div class=\"title\">Ebook</div>\r\n                    <small>Lorem ipsum dolor sit amet</small>\r\n                  </div>\r\n                  <div class=\"value\">\r\n                    <div class=\"small text-muted\">Downloads</div>\r\n                    <strong>121.924</strong>\r\n                  </div>\r\n                  <div class=\"actions\">\r\n                    <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i></button>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <i class=\"icon-camera bg-warning\"></i>\r\n                  <div class=\"desc\">\r\n                    <div class=\"title\">Photos</div>\r\n                    <small>Lorem ipsum dolor sit amet</small>\r\n                  </div>\r\n                  <div class=\"value\">\r\n                    <div class=\"small text-muted\">Uploaded</div>\r\n                    <strong>12.125</strong>\r\n                  </div>\r\n                  <div class=\"actions\">\r\n                    <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i></button>\r\n                  </div>\r\n                </li>\r\n                <li class=\"divider text-center\">\r\n                  <button type=\"button\" class=\"btn btn-sm btn-link text-muted\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"show more\"><i class=\"icon-options\"></i></button>\r\n                </li>\r\n              </ul>\r\n            </div><!--/.col-->\r\n          </div><!--/.row-->\r\n          <br>\r\n          <table class=\"table table-hover table-outline mb-0 hidden-sm-down\">\r\n            <thead class=\"thead-default\">\r\n              <tr>\r\n                <th class=\"text-center\"><i class=\"icon-people\"></i></th>\r\n                <th>User</th>\r\n                <th class=\"text-center\">Country</th>\r\n                <th>Usage</th>\r\n                <th class=\"text-center\">Payment Method</th>\r\n                <th>Activity</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td class=\"text-center\">\r\n                  <div class=\"avatar\">\r\n                    <img src=\"assets/img/avatars/1.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\" src=\"assets/img/avatars/1.jpg\">\r\n                    <span class=\"avatar-status badge-success\"></span>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div>Yiorgos Avraamu</div>\r\n                  <div class=\"small text-muted\">\r\n                    <span>New</span> | Registered: Jan 1, 2015\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <img src=\"assets/img/flags/USA.png\" alt=\"USA\" style=\"height:24px;\" src=\"assets/img/flags/USA.png\">\r\n                </td>\r\n                <td>\r\n                  <div class=\"clearfix\">\r\n                    <div class=\"float-left\">\r\n                      <strong>50%</strong>\r\n                    </div>\r\n                    <div class=\"float-right\">\r\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <i class=\"fa fa-cc-mastercard\" style=\"font-size:24px\"></i>\r\n                </td>\r\n                <td>\r\n                  <div class=\"small text-muted\">Last login</div>\r\n                  <strong>10 sec ago</strong>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"text-center\">\r\n                  <div class=\"avatar\">\r\n                    <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\" src=\"assets/img/avatars/2.jpg\">\r\n                    <span class=\"avatar-status badge-danger\"></span>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div>Avram Tarasios</div>\r\n                  <div class=\"small text-muted\">\r\n\r\n                    <span>Recurring</span> | Registered: Jan 1, 2015\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <img src=\"assets/img/flags/Brazil.png\" alt=\"Brazil\" style=\"height:24px;\" src=\"assets/img/flags/Brazil.png\">\r\n                </td>\r\n                <td>\r\n                  <div class=\"clearfix\">\r\n                    <div class=\"float-left\">\r\n                      <strong>10%</strong>\r\n                    </div>\r\n                    <div class=\"float-right\">\r\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 10%\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <i class=\"fa fa-cc-visa\" style=\"font-size:24px\"></i>\r\n                </td>\r\n                <td>\r\n                  <div class=\"small text-muted\">Last login</div>\r\n                  <strong>5 minutes ago</strong>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"text-center\">\r\n                  <div class=\"avatar\">\r\n                    <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\" src=\"assets/img/avatars/3.jpg\">\r\n                    <span class=\"avatar-status badge-warning\"></span>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div>Quintin Ed</div>\r\n                  <div class=\"small text-muted\">\r\n                    <span>New</span> | Registered: Jan 1, 2015\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <img src=\"assets/img/flags/India.png\" alt=\"India\" style=\"height:24px;\" src=\"assets/img/flags/India.png\">\r\n                </td>\r\n                <td>\r\n                  <div class=\"clearfix\">\r\n                    <div class=\"float-left\">\r\n                      <strong>74%</strong>\r\n                    </div>\r\n                    <div class=\"float-right\">\r\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 74%\" aria-valuenow=\"74\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <i class=\"fa fa-cc-stripe\" style=\"font-size:24px\"></i>\r\n                </td>\r\n                <td>\r\n                  <div class=\"small text-muted\">Last login</div>\r\n                  <strong>1 hour ago</strong>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"text-center\">\r\n                  <div class=\"avatar\">\r\n                    <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\" src=\"assets/img/avatars/4.jpg\">\r\n                    <span class=\"avatar-status badge-default\"></span>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div>Enéas Kwadwo</div>\r\n                  <div class=\"small text-muted\">\r\n                    <span>New</span> | Registered: Jan 1, 2015\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <img src=\"assets/img/flags/France.png\" alt=\"France\" style=\"height:24px;\" src=\"assets/img/flags/France.png\">\r\n                </td>\r\n                <td>\r\n                  <div class=\"clearfix\">\r\n                    <div class=\"float-left\">\r\n                      <strong>98%</strong>\r\n                    </div>\r\n                    <div class=\"float-right\">\r\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 98%\" aria-valuenow=\"98\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <i class=\"fa fa-paypal\" style=\"font-size:24px\"></i>\r\n                </td>\r\n                <td>\r\n                  <div class=\"small text-muted\">Last login</div>\r\n                  <strong>Last month</strong>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"text-center\">\r\n                  <div class=\"avatar\">\r\n                    <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\" src=\"assets/img/avatars/5.jpg\">\r\n                    <span class=\"avatar-status badge-success\"></span>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div>Agapetus Tadeáš</div>\r\n                  <div class=\"small text-muted\">\r\n                    <span>New</span> | Registered: Jan 1, 2015\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <img src=\"assets/img/flags/Spain.png\" alt=\"Spain\" style=\"height:24px;\" src=\"assets/img/flags/Spain.png\">\r\n                </td>\r\n                <td>\r\n                  <div class=\"clearfix\">\r\n                    <div class=\"float-left\">\r\n                      <strong>22%</strong>\r\n                    </div>\r\n                    <div class=\"float-right\">\r\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 22%\" aria-valuenow=\"22\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <i class=\"fa fa-google-wallet\" style=\"font-size:24px\"></i>\r\n                </td>\r\n                <td>\r\n                  <div class=\"small text-muted\">Last login</div>\r\n                  <strong>Last week</strong>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"text-center\">\r\n                  <div class=\"avatar\">\r\n                    <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\" src=\"assets/img/avatars/6.jpg\">\r\n                    <span class=\"avatar-status badge-danger\"></span>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div>Friderik Dávid</div>\r\n                  <div class=\"small text-muted\">\r\n                    <span>New</span> | Registered: Jan 1, 2015\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <img src=\"assets/img/flags/Poland.png\" alt=\"Poland\" style=\"height:24px;\" src=\"assets/img/flags/Poland.png\">\r\n                </td>\r\n                <td>\r\n                  <div class=\"clearfix\">\r\n                    <div class=\"float-left\">\r\n                      <strong>43%</strong>\r\n                    </div>\r\n                    <div class=\"float-right\">\r\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 43%\" aria-valuenow=\"43\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <i class=\"fa fa-cc-amex\" style=\"font-size:24px\"></i>\r\n                </td>\r\n                <td>\r\n                  <div class=\"small text-muted\">Last login</div>\r\n                  <strong>Yesterday</strong>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n  </div><!--/.row-->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
        this.brandPrimary = '#20a8d8';
        this.brandSuccess = '#4dbd74';
        this.brandInfo = '#63c2de';
        this.brandWarning = '#f8cb00';
        this.brandDanger = '#f86c6b';
        // dropdown buttons
        this.status = { isopen: false };
        this.mainChartElements = 27;
        this.mainChartData1 = [];
        this.mainChartData2 = [];
        this.mainChartData3 = [];
        this.mainChartData = [
            {
                data: this.mainChartData1,
                label: 'Current'
            },
            {
                data: this.mainChartData2,
                label: 'Previous'
            },
            {
                data: this.mainChartData3,
                label: 'BEP'
            }
        ];
        this.mainChartLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        this.mainChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            drawOnChartArea: false,
                        },
                        ticks: {
                            callback: function (value) {
                                return value.charAt(0);
                            }
                        }
                    }],
                yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            maxTicksLimit: 5,
                            stepSize: Math.ceil(250 / 5),
                            max: 250
                        }
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                }
            },
            legend: {
                display: false
            }
        };
        this.mainChartColours = [
            {
                backgroundColor: this.convertHex(this.brandInfo, 10),
                borderColor: this.brandInfo,
                pointHoverBackgroundColor: '#fff'
            },
            {
                backgroundColor: 'transparent',
                borderColor: this.brandSuccess,
                pointHoverBackgroundColor: '#fff'
            },
            {
                backgroundColor: 'transparent',
                borderColor: this.brandDanger,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 1,
                borderDash: [8, 5]
            }
        ];
        this.mainChartLegend = false;
        this.mainChartType = 'line';
        // social box charts
        this.socialChartData1 = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Facebook'
            }
        ];
        this.socialChartData2 = [
            {
                data: [1, 13, 9, 17, 34, 41, 38],
                label: 'Twitter'
            }
        ];
        this.socialChartData3 = [
            {
                data: [78, 81, 80, 45, 34, 12, 40],
                label: 'LinkedIn'
            }
        ];
        this.socialChartData4 = [
            {
                data: [35, 23, 56, 22, 97, 23, 64],
                label: 'Google+'
            }
        ];
        this.socialChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.socialChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                    }],
                yAxes: [{
                        display: false,
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                }
            },
            legend: {
                display: false
            }
        };
        this.socialChartColours = [
            {
                backgroundColor: 'rgba(255,255,255,.1)',
                borderColor: 'rgba(255,255,255,.55)',
                pointHoverBackgroundColor: '#fff'
            }
        ];
        this.socialChartLegend = false;
        this.socialChartType = 'line';
        // sparkline charts
        this.sparklineChartData1 = [
            {
                data: [35, 23, 56, 22, 97, 23, 64],
                label: 'Clients'
            }
        ];
        this.sparklineChartData2 = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Clients'
            }
        ];
        this.sparklineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.sparklineChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                    }],
                yAxes: [{
                        display: false,
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                }
            },
            legend: {
                display: false
            }
        };
        this.sparklineChartDefault = [
            {
                backgroundColor: 'transparent',
                borderColor: '#d1d4d7',
            }
        ];
        this.sparklineChartPrimary = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandPrimary,
            }
        ];
        this.sparklineChartInfo = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandInfo,
            }
        ];
        this.sparklineChartDanger = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandDanger,
            }
        ];
        this.sparklineChartWarning = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandWarning,
            }
        ];
        this.sparklineChartSuccess = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandSuccess,
            }
        ];
        this.sparklineChartLegend = false;
        this.sparklineChartType = 'line';
    }
    DashboardComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    //convert Hex to RGBA
    DashboardComponent.prototype.convertHex = function (hex, opacity) {
        hex = hex.replace('#', '');
        var r = parseInt(hex.substring(0, 2), 16);
        var g = parseInt(hex.substring(2, 4), 16);
        var b = parseInt(hex.substring(4, 6), 16);
        var rgba = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
        return rgba;
    };
    // events
    DashboardComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    // mainChart
    DashboardComponent.prototype.random = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        //generate random values for mainChart
        for (var i = 0; i <= this.mainChartElements; i++) {
            this.mainChartData1.push(this.random(50, 200));
            this.mainChartData2.push(this.random(80, 100));
            this.mainChartData3.push(65);
        }
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html")
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_routing_module__ = __webpack_require__("../../../../../src/app/dashboard/dashboard-routing.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__dashboard_routing_module__["a" /* DashboardRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__["ChartsModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */]]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ })

});
//# sourceMappingURL=14.chunk.js.map