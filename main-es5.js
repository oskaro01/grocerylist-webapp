function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function _$$_lazy_route_resource_lazy_recursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function _src_app_appRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _grocerylist_grocerylist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./grocerylist/grocerylist.component */
    "./src/app/grocerylist/grocerylist.component.ts");
    /* harmony import */


    var _editlist_editlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./editlist/editlist.component */
    "./src/app/editlist/editlist.component.ts");
    /* harmony import */


    var _newlist_newlist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./newlist/newlist.component */
    "./src/app/newlist/newlist.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/Mylist',
      pathMatch: 'full'
    }, {
      path: 'Mylist',
      component: _grocerylist_grocerylist_component__WEBPACK_IMPORTED_MODULE_2__["GrocerylistComponent"],
      pathMatch: 'full'
    }, {
      path: 'Editlist/:id',
      component: _editlist_editlist_component__WEBPACK_IMPORTED_MODULE_3__["EditlistComponent"]
    }, {
      path: 'Newlist',
      component: _newlist_newlist_component__WEBPACK_IMPORTED_MODULE_4__["NewlistComponent"]
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function _src_app_appComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./nav-bar/nav-bar.component */
    "./src/app/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'grocerylist';
    });

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 0,
      consts: [["id", "page-wrap"], ["id", "max-width-colum"], ["id", "content-wrap"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-nav-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function _src_app_appModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _grocerylist_grocerylist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./grocerylist/grocerylist.component */
    "./src/app/grocerylist/grocerylist.component.ts");
    /* harmony import */


    var _editlist_editlist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./editlist/editlist.component */
    "./src/app/editlist/editlist.component.ts");
    /* harmony import */


    var _newlist_newlist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./newlist/newlist.component */
    "./src/app/newlist/newlist.component.ts");
    /* harmony import */


    var _listing_data_form_listing_data_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./listing-data-form/listing-data-form.component */
    "./src/app/listing-data-form/listing-data-form.component.ts");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./nav-bar/nav-bar.component */
    "./src/app/nav-bar/nav-bar.component.ts");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _grocerylist_grocerylist_component__WEBPACK_IMPORTED_MODULE_6__["GrocerylistComponent"], _editlist_editlist_component__WEBPACK_IMPORTED_MODULE_7__["EditlistComponent"], _newlist_newlist_component__WEBPACK_IMPORTED_MODULE_8__["NewlistComponent"], _listing_data_form_listing_data_form_component__WEBPACK_IMPORTED_MODULE_9__["ListingDataFormComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _grocerylist_grocerylist_component__WEBPACK_IMPORTED_MODULE_6__["GrocerylistComponent"], _editlist_editlist_component__WEBPACK_IMPORTED_MODULE_7__["EditlistComponent"], _newlist_newlist_component__WEBPACK_IMPORTED_MODULE_8__["NewlistComponent"], _listing_data_form_listing_data_form_component__WEBPACK_IMPORTED_MODULE_9__["ListingDataFormComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/editlist/editlist.component.ts":
  /*!************************************************!*\
    !*** ./src/app/editlist/editlist.component.ts ***!
    \************************************************/

  /*! exports provided: EditlistComponent */

  /***/
  function _src_app_editlist_editlistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditlistComponent", function () {
      return EditlistComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _mylist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../mylist.service */
    "./src/app/mylist.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _listing_data_form_listing_data_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../listing-data-form/listing-data-form.component */
    "./src/app/listing-data-form/listing-data-form.component.ts");

    function EditlistComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit List");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-listing-data-form", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSubmit", function EditlistComponent_div_0_Template_app_listing_data_form_onSubmit_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.onSubmit($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentName", ctx_r0.Mylist.name)("currentQuantity", ctx_r0.Mylist.quantity)("currentPrice", ctx_r0.Mylist.price);
      }
    }

    function EditlistComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 1);
      }
    }

    var EditlistComponent = /*#__PURE__*/function () {
      function EditlistComponent(route, router, mylistService) {
        _classCallCheck(this, EditlistComponent);

        this.route = route;
        this.router = router;
        this.mylistService = mylistService;
      }

      return _createClass(EditlistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var id = this.route.snapshot.paramMap.get('id');
          this.mylistService.getListingById(id).subscribe(function (Mylist) {
            return _this.Mylist = Mylist;
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(_ref) {
          var _this2 = this;

          var name = _ref.name,
              quantity = _ref.quantity,
              price = _ref.price;
          this.mylistService.editList(this.Mylist.id, name, quantity, price).subscribe(function () {
            _this2.router.navigateByUrl('/Mylist');
          });
        }
      }]);
    }();

    EditlistComponent.ɵfac = function EditlistComponent_Factory(t) {
      return new (t || EditlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mylist_service__WEBPACK_IMPORTED_MODULE_2__["MylistService"]));
    };

    EditlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditlistComponent,
      selectors: [["app-editlist"]],
      decls: 2,
      vars: 2,
      consts: [["class", "create-list-container", 4, "ngIf"], [1, "create-list-container"], [1, "create-list-title"], ["buttonText", "Save", 3, "currentName", "currentQuantity", "currentPrice", "onSubmit"]],
      template: function EditlistComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditlistComponent_div_0_Template, 4, 3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditlistComponent_div_1_Template, 1, 0, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Mylist);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.Mylist);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _listing_data_form_listing_data_form_component__WEBPACK_IMPORTED_MODULE_4__["ListingDataFormComponent"]],
      styles: ["body[_ngcontent-%COMP%] {\r\n    font-family: Arial, sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: #F5F5F5;\r\n    box-sizing: border-box;\r\n}\r\n#page-wrap[_ngcontent-%COMP%] {\r\n    background-color: #FFF;\r\n    min-height: 100vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 16px;\r\n}\r\n#max-width-column[_ngcontent-%COMP%] {\r\n    max-width: 800px;\r\n    width: 100%;\r\n    padding: 16px;\r\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\r\n    border-radius: 5px;\r\n    background-color: #FFF;\r\n}\r\n#app-heading[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-top: 0;\r\n    margin-bottom: 50px;\r\n    color: #333;\r\n}\r\n\r\n.newlistButton[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    background-color: #FFF;\r\n    border: 1px solid #333;\r\n    color: #333;\r\n    border-radius: 5px;\r\n    padding: 8px 24px;\r\n    font-size: 13px;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    transition: background-color 0.2s;\r\n    text-decoration: none; \r\n    margin: 0 auto; \r\n}\r\n\r\n.buttons-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: 20px;\r\n}\r\n\r\n.newlistButton[_ngcontent-%COMP%]:hover {\r\n    background-color: #F0F0F0;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    #max-width-column[_ngcontent-%COMP%] {\r\n        padding: 19px;\r\n    }\r\n    .content-box[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        text-align: center;\r\n        padding: 16px;\r\n    }\r\n    .buttons-container[_ngcontent-%COMP%] {\r\n        justify-content: center;\r\n        margin: 20px 0;\r\n    }\r\n    .newlistButton[_ngcontent-%COMP%] {\r\n        font-size: 12px;\r\n        padding: 6px 8px;\r\n    }\r\n    #app-heading[_ngcontent-%COMP%] {\r\n        font-size: 24px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdGxpc3QvZWRpdGxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0I7QUFDbEI7SUFDSSw4QkFBOEI7SUFDOUIsU0FBUztJQUNULFVBQVU7SUFDVix5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7QUFFQSx1QkFBdUI7QUFDdkI7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMscUJBQXFCLEVBQUUscUJBQXFCO0lBQzVDLGNBQWMsRUFBRSxtQ0FBbUM7QUFDdkQ7QUFFQSxxQ0FBcUM7QUFDckM7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjtBQUVBLGFBQWE7QUFDYjtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBLG1DQUFtQztBQUNuQztJQUNJO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksc0JBQXNCO1FBQ3RCLGtCQUFrQjtRQUNsQixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSx1QkFBdUI7UUFDdkIsY0FBYztJQUNsQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZWRpdGxpc3QvZWRpdGxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdsb2JhbCBzdHlsZXMgKi9cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbiNwYWdlLXdyYXAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbiNtYXgtd2lkdGgtY29sdW1uIHtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbn1cclxuXHJcbiNhcHAtaGVhZGluZyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4vKiBOZXcgQnV0dG9uIFN0eWxpbmcgKi9cclxuLm5ld2xpc3RCdXR0b24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyAvKiBSZW1vdmUgdW5kZXJsaW5lICovXHJcbiAgICBtYXJnaW46IDAgYXV0bzsgLyogQ2VudGVyIHRoZSBidXR0b24gaG9yaXpvbnRhbGx5ICovXHJcbn1cclxuXHJcbi8qIEZsZXhib3ggY29udGFpbmVyIGZvciB0aGUgYnV0dG9uICovXHJcbi5idXR0b25zLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4vKiBPbiBob3ZlciAqL1xyXG4ubmV3bGlzdEJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwO1xyXG59XHJcblxyXG4vKiBNZWRpYSBxdWVyeSBmb3IgcmVzcG9uc2l2ZW5lc3MgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAjbWF4LXdpZHRoLWNvbHVtbiB7XHJcbiAgICAgICAgcGFkZGluZzogMTlweDtcclxuICAgIH1cclxuICAgIC5jb250ZW50LWJveCB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgIH1cclxuICAgIC5idXR0b25zLWNvbnRhaW5lciB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICB9XHJcbiAgICAubmV3bGlzdEJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCA4cHg7XHJcbiAgICB9XHJcbiAgICAjYXBwLWhlYWRpbmcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditlistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-editlist',
          templateUrl: './editlist.component.html',
          styleUrls: ['./editlist.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _mylist_service__WEBPACK_IMPORTED_MODULE_2__["MylistService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/grocerylist/grocerylist.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/grocerylist/grocerylist.component.ts ***!
    \******************************************************/

  /*! exports provided: GrocerylistComponent */

  /***/
  function _src_app_grocerylist_grocerylistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GrocerylistComponent", function () {
      return GrocerylistComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _mylist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../mylist.service */
    "./src/app/mylist.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function GrocerylistComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GrocerylistComponent_div_14_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var listing_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.onDeleteClicked(listing_r1.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var listing_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](listing_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" - ", listing_r1.quantity, " - Tk ", listing_r1.price, ". ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/Editlist/", listing_r1.id, "");
      }
    }

    var GrocerylistComponent = /*#__PURE__*/function () {
      function GrocerylistComponent(MylistService) {
        _classCallCheck(this, GrocerylistComponent);

        this.MylistService = MylistService;
        this.Mylist = [];
      } //getListing mehtod is returing an observable 


      return _createClass(GrocerylistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.MylistService.getListing() //calls to retuen some data
          .subscribe(function (Mylist) {
            return _this3.Mylist = Mylist;
          }); //call back func that get called getListing Observable produces an event
        } // deleting method

      }, {
        key: "onDeleteClicked",
        value: function onDeleteClicked(listingId) {
          var _this4 = this;

          this.MylistService.deleteMylist(listingId).subscribe(function () {
            _this4.Mylist = _this4.Mylist.filter(function (Mylist) {
              return Mylist.id !== listingId;
            });
          });
        }
      }]);
    }();

    GrocerylistComponent.ɵfac = function GrocerylistComponent_Factory(t) {
      return new (t || GrocerylistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mylist_service__WEBPACK_IMPORTED_MODULE_1__["MylistService"]));
    };

    GrocerylistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GrocerylistComponent,
      selectors: [["app-grocerylist"]],
      decls: 15,
      vars: 1,
      consts: [["id", "page-wrap"], ["id", "max-width-column"], ["id", "top-bar"], ["routerLink", "/Newlist"], ["id", "app-heading"], [1, "create-button"], ["id", "content-wrap"], ["class", "content-box", 4, "ngFor", "ngForOf"], [1, "content-box"], [1, "buttons-container"], [3, "routerLink"], [3, "click"]],
      template: function GrocerylistComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Daily Grocery List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "New List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, GrocerylistComponent_div_14_Template, 11, 4, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Mylist);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb2NlcnlsaXN0L2dyb2NlcnlsaXN0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GrocerylistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-grocerylist',
          templateUrl: './grocerylist.component.html',
          styleUrls: ['./grocerylist.component.css']
        }]
      }], function () {
        return [{
          type: _mylist_service__WEBPACK_IMPORTED_MODULE_1__["MylistService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/listing-data-form/listing-data-form.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/listing-data-form/listing-data-form.component.ts ***!
    \******************************************************************/

  /*! exports provided: ListingDataFormComponent */

  /***/
  function _src_app_listingDataForm_listingDataFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListingDataFormComponent", function () {
      return ListingDataFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ListingDataFormComponent = /*#__PURE__*/function () {
      function ListingDataFormComponent(router) {
        _classCallCheck(this, ListingDataFormComponent);

        this.router = router;
        this.currentName = '';
        this.currentQuantity = '';
        this.currentPrice = '';
        this.currentViews = '';
        this.name = '';
        this.quantity = '';
        this.price = '';
        this.views = '';
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      return _createClass(ListingDataFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.name = this.currentName;
          this.quantity = this.currentQuantity;
          this.price = this.currentPrice;
          this.views = this.currentViews;
        }
      }, {
        key: "onButtonClicked",
        value: function onButtonClicked() {
          this.onSubmit.emit({
            id: null,
            name: this.name,
            quantity: this.quantity,
            price: Number(this.price),
            views: 0
          });
        }
      }]);
    }();

    ListingDataFormComponent.ɵfac = function ListingDataFormComponent_Factory(t) {
      return new (t || ListingDataFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    ListingDataFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListingDataFormComponent,
      selectors: [["app-listing-data-form"]],
      inputs: {
        buttonText: "buttonText",
        currentName: "currentName",
        currentQuantity: "currentQuantity",
        currentPrice: "currentPrice",
        currentViews: "currentViews"
      },
      outputs: {
        onSubmit: "onSubmit"
      },
      decls: 16,
      vars: 4,
      consts: [[1, "create-list-container"], [1, "create-list-form", 3, "ngSubmit"], ["for", "name"], ["id", "name", "name", "name", "type", "text", 3, "ngModel", "ngModelChange"], ["for", "quantity"], ["id", "quantity", "name", "quantity", "type", "text", 3, "ngModel", "ngModelChange"], ["for", "price"], ["id", "price", "name", "price", "type", "text", 3, "ngModel", "ngModelChange"], ["type", "submit"]],
      template: function ListingDataFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ListingDataFormComponent_Template_form_ngSubmit_1_listener() {
            return ctx.onButtonClicked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListingDataFormComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Item quantity:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListingDataFormComponent_Template_input_ngModelChange_9_listener($event) {
            return ctx.quantity = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Price:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListingDataFormComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.price = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quantity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.price);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonText);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
      styles: [".create-list-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 16px;\r\n    width: 100%; \r\n    box-sizing: border-box; \r\n}\r\n\r\n.create-list-form[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 12px; \r\n    width: 100%; \r\n    max-width: 300px; \r\n    box-sizing: border-box; \r\n}\r\n\r\n.create-list-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    padding: 8px;\r\n    width: 100%; \r\n    box-sizing: border-box; \r\n}\r\n\r\n.create-list-title[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    font-weight: bold;\r\n    margin-bottom: 15px; \r\n}\r\n\r\n.create-list-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    padding: 8px;\r\n    width: 120px; \r\n    background-color: black;\r\n    color: white;\r\n    border-radius: 8px;\r\n    border: none;\r\n    font-size: 16px;\r\n    display: block;\r\n    margin: 16px auto; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGluZy1kYXRhLWZvcm0vbGlzdGluZy1kYXRhLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBd0M7QUFDeEM7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsV0FBVyxFQUFFLGlFQUFpRTtJQUM5RSxzQkFBc0IsRUFBRSw2Q0FBNkM7QUFDekU7QUFFQSx3REFBd0Q7QUFDeEQ7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVMsRUFBRSxnQ0FBZ0M7SUFDM0MsV0FBVyxFQUFFLG9DQUFvQztJQUNqRCxnQkFBZ0IsRUFBRSxrQ0FBa0M7SUFDcEQsc0JBQXNCLEVBQUUscURBQXFEO0FBQ2pGO0FBRUEsK0JBQStCO0FBQy9CO0lBQ0ksWUFBWTtJQUNaLFdBQVcsRUFBRSwyQkFBMkI7SUFDeEMsc0JBQXNCLEVBQUUsaUNBQWlDO0FBQzdEO0FBRUEsd0JBQXdCO0FBQ3hCO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUIsRUFBRSw4Q0FBOEM7QUFDdkU7QUFFQSxtQ0FBbUM7QUFDbkM7SUFDSSxZQUFZO0lBQ1osWUFBWSxFQUFFLHlCQUF5QjtJQUN2Qyx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUIsRUFBRSxtQ0FBbUM7QUFDMUQiLCJmaWxlIjoic3JjL2FwcC9saXN0aW5nLWRhdGEtZm9ybS9saXN0aW5nLWRhdGEtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU3R5bGUgZm9yIHRoZSBjcmVhdGUgbGlzdCBjb250YWluZXIgKi9cclxuLmNyZWF0ZS1saXN0LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7IC8qIEVuc3VyZXMgaXQgdGFrZXMgdGhlIGZ1bGwgd2lkdGggYnV0IGNvbnN0cmFpbmVkIGJ5IG1heC13aWR0aCAqL1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogUGFkZGluZyBkb2Vzbid0IGFmZmVjdCB3aWR0aCBjYWxjdWxhdGlvbiAqL1xyXG59XHJcblxyXG4vKiBSZXN0cmljdCB0aGUgd2lkdGggb2YgdGhlIGZvcm0gdG8gYSByZWFzb25hYmxlIHNpemUgKi9cclxuLmNyZWF0ZS1saXN0LWZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEycHg7IC8qIFNwYWNlIGJldHdlZW4gZm9ybSBlbGVtZW50cyAqL1xyXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggaW5zaWRlIGl0cyBjb250YWluZXIgKi9cclxuICAgIG1heC13aWR0aDogMzAwcHg7IC8qIExpbWl0IHRoZSBmb3JtIHdpZHRoIHRvIDQwMHB4ICovXHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBFbnN1cmVzIHBhZGRpbmcgZG9lc24ndCBhZmZlY3Qgd2lkdGggY2FsY3VsYXRpb24gKi9cclxufVxyXG5cclxuLyogQWRqdXN0aW5nIHRoZSBpbnB1dCBmaWVsZHMgKi9cclxuLmNyZWF0ZS1saXN0LWZvcm0gaW5wdXQge1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggb2YgdGhlIGZvcm0gKi9cclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIFBhZGRpbmcgZG9lc24ndCBhZmZlY3Qgd2lkdGggKi9cclxufVxyXG5cclxuLyogU3R5bGUgZm9yIHRoZSB0aXRsZSAqL1xyXG4uY3JlYXRlLWxpc3QtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyAvKiBBZGRzIHNwYWNlIGJldHdlZW4gdGhlIHRpdGxlIGFuZCB0aGUgZm9ybSAqL1xyXG59XHJcblxyXG4vKiBDcmVhdGUgbGlzdCBmb3JtIHN1Ym1pdCBidXR0b24gKi9cclxuLmNyZWF0ZS1saXN0LWZvcm0gYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIHdpZHRoOiAxMjBweDsgLyogU21hbGxlciBidXR0b24gd2lkdGggKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDE2cHggYXV0bzsgLyogQ2VudGVyIHRoZSBidXR0b24gaG9yaXpvbnRhbGx5ICovXHJcbn1cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListingDataFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-listing-data-form',
          templateUrl: './listing-data-form.component.html',
          styleUrls: ['./listing-data-form.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, {
        buttonText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        currentName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        currentQuantity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        currentPrice: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        currentViews: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onSubmit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/mylist.service.ts":
  /*!***********************************!*\
    !*** ./src/app/mylist.service.ts ***!
    \***********************************/

  /*! exports provided: MylistService */

  /***/
  function _src_app_mylistServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MylistService", function () {
      return MylistService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var MylistService = /*#__PURE__*/function () {
      function MylistService(http) {
        _classCallCheck(this, MylistService);

        this.http = http;
      }

      return _createClass(MylistService, [{
        key: "getListing",
        value: function getListing() {
          return this.http.get('/api/Mylist'); //making request to our server
        }
      }, {
        key: "getListingById",
        value: function getListingById(id) {
          return this.http.get("/api/Mylist/".concat(id));
        } // method

      }, {
        key: "deleteMylist",
        value: function deleteMylist(id) {
          return this.http["delete"]("/api/Mylist/".concat(id));
        }
      }, {
        key: "newList",
        value: function newList(name, quantity, price) {
          return this.http.post('/api/Mylist', {
            name: name,
            quantity: quantity,
            price: price
          }, httpOptions);
        }
      }, {
        key: "editList",
        value: function editList(id, name, quantity, price) {
          return this.http.post("/api/Mylist/".concat(id), {
            name: name,
            quantity: quantity,
            price: price
          }, httpOptions);
        }
      }]);
    }();

    MylistService.ɵfac = function MylistService_Factory(t) {
      return new (t || MylistService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    MylistService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MylistService,
      factory: MylistService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MylistService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/nav-bar/nav-bar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/nav-bar/nav-bar.component.ts ***!
    \**********************************************/

  /*! exports provided: NavBarComponent */

  /***/
  function _src_app_navBar_navBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
      return NavBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NavBarComponent = /*#__PURE__*/function () {
      function NavBarComponent() {
        _classCallCheck(this, NavBarComponent);
      }

      return _createClass(NavBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();

    NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
      return new (t || NavBarComponent)();
    };

    NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavBarComponent,
      selectors: [["app-nav-bar"]],
      decls: 0,
      vars: 0,
      template: function NavBarComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav-bar',
          templateUrl: './nav-bar.component.html',
          styleUrls: ['./nav-bar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/newlist/newlist.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/newlist/newlist.component.ts ***!
    \**********************************************/

  /*! exports provided: NewlistComponent */

  /***/
  function _src_app_newlist_newlistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewlistComponent", function () {
      return NewlistComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _mylist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../mylist.service */
    "./src/app/mylist.service.ts");
    /* harmony import */


    var _listing_data_form_listing_data_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../listing-data-form/listing-data-form.component */
    "./src/app/listing-data-form/listing-data-form.component.ts");

    var NewlistComponent = /*#__PURE__*/function () {
      function NewlistComponent(router, mylistService) {
        _classCallCheck(this, NewlistComponent);

        this.router = router;
        this.mylistService = mylistService;
      }

      return _createClass(NewlistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit(_ref2) {
          var _this5 = this;

          var name = _ref2.name,
              quantity = _ref2.quantity,
              price = _ref2.price;
          this.mylistService.newList(name, quantity, price).subscribe(function () {
            _this5.router.navigateByUrl('/Mylist');
          });
        }
      }]);
    }();

    NewlistComponent.ɵfac = function NewlistComponent_Factory(t) {
      return new (t || NewlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mylist_service__WEBPACK_IMPORTED_MODULE_2__["MylistService"]));
    };

    NewlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewlistComponent,
      selectors: [["app-newlist"]],
      decls: 4,
      vars: 0,
      consts: [[1, "create-list-container"], [1, "create-list-title"], ["buttonText", "Create", 3, "onSubmit"]],
      template: function NewlistComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-listing-data-form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSubmit", function NewlistComponent_Template_app_listing_data_form_onSubmit_3_listener($event) {
            return ctx.onSubmit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_listing_data_form_listing_data_form_component__WEBPACK_IMPORTED_MODULE_3__["ListingDataFormComponent"]],
      styles: [".create-list-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 16px;\r\n    width: 100%; \r\n    box-sizing: border-box; \r\n}\r\n\r\n.create-list-form[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 12px; \r\n    width: 100%; \r\n    max-width: 300px; \r\n    box-sizing: border-box; \r\n}\r\n\r\n.create-list-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    padding: 8px;\r\n    width: 100%; \r\n    box-sizing: border-box; \r\n}\r\n\r\n.create-list-title[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    font-weight: bold;\r\n    margin-bottom: 15px; \r\n}\r\n\r\n.create-list-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    padding: 8px;\r\n    width: 120px; \r\n    background-color: black;\r\n    color: white;\r\n    border-radius: 8px;\r\n    border: none;\r\n    font-size: 16px;\r\n    display: block;\r\n    margin: 16px auto; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3bGlzdC9uZXdsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0NBQXdDO0FBQ3hDO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFdBQVcsRUFBRSxpRUFBaUU7SUFDOUUsc0JBQXNCLEVBQUUsNkNBQTZDO0FBQ3pFO0FBRUEsd0RBQXdEO0FBQ3hEO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTLEVBQUUsZ0NBQWdDO0lBQzNDLFdBQVcsRUFBRSxvQ0FBb0M7SUFDakQsZ0JBQWdCLEVBQUUsa0NBQWtDO0lBQ3BELHNCQUFzQixFQUFFLHFEQUFxRDtBQUNqRjtBQUVBLCtCQUErQjtBQUMvQjtJQUNJLFlBQVk7SUFDWixXQUFXLEVBQUUsMkJBQTJCO0lBQ3hDLHNCQUFzQixFQUFFLGlDQUFpQztBQUM3RDtBQUVBLHdCQUF3QjtBQUN4QjtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CLEVBQUUsOENBQThDO0FBQ3ZFO0FBRUEsbUNBQW1DO0FBQ25DO0lBQ0ksWUFBWTtJQUNaLFlBQVksRUFBRSx5QkFBeUI7SUFDdkMsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCLEVBQUUsbUNBQW1DO0FBQzFEIiwiZmlsZSI6InNyYy9hcHAvbmV3bGlzdC9uZXdsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHlsZSBmb3IgdGhlIGNyZWF0ZSBsaXN0IGNvbnRhaW5lciAqL1xyXG4uY3JlYXRlLWxpc3QtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB3aWR0aDogMTAwJTsgLyogRW5zdXJlcyBpdCB0YWtlcyB0aGUgZnVsbCB3aWR0aCBidXQgY29uc3RyYWluZWQgYnkgbWF4LXdpZHRoICovXHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBQYWRkaW5nIGRvZXNuJ3QgYWZmZWN0IHdpZHRoIGNhbGN1bGF0aW9uICovXHJcbn1cclxuXHJcbi8qIFJlc3RyaWN0IHRoZSB3aWR0aCBvZiB0aGUgZm9ybSB0byBhIHJlYXNvbmFibGUgc2l6ZSAqL1xyXG4uY3JlYXRlLWxpc3QtZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMTJweDsgLyogU3BhY2UgYmV0d2VlbiBmb3JtIGVsZW1lbnRzICovXHJcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCBpbnNpZGUgaXRzIGNvbnRhaW5lciAqL1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDsgLyogTGltaXQgdGhlIGZvcm0gd2lkdGggdG8gNDAwcHggKi9cclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIEVuc3VyZXMgcGFkZGluZyBkb2Vzbid0IGFmZmVjdCB3aWR0aCBjYWxjdWxhdGlvbiAqL1xyXG59XHJcblxyXG4vKiBBZGp1c3RpbmcgdGhlIGlucHV0IGZpZWxkcyAqL1xyXG4uY3JlYXRlLWxpc3QtZm9ybSBpbnB1dCB7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCBvZiB0aGUgZm9ybSAqL1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogUGFkZGluZyBkb2Vzbid0IGFmZmVjdCB3aWR0aCAqL1xyXG59XHJcblxyXG4vKiBTdHlsZSBmb3IgdGhlIHRpdGxlICovXHJcbi5jcmVhdGUtbGlzdC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7IC8qIEFkZHMgc3BhY2UgYmV0d2VlbiB0aGUgdGl0bGUgYW5kIHRoZSBmb3JtICovXHJcbn1cclxuXHJcbi8qIENyZWF0ZSBsaXN0IGZvcm0gc3VibWl0IGJ1dHRvbiAqL1xyXG4uY3JlYXRlLWxpc3QtZm9ybSBidXR0b24ge1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgd2lkdGg6IDEyMHB4OyAvKiBTbWFsbGVyIGJ1dHRvbiB3aWR0aCAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMTZweCBhdXRvOyAvKiBDZW50ZXIgdGhlIGJ1dHRvbiBob3Jpem9udGFsbHkgKi9cclxufVxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewlistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-newlist',
          templateUrl: './newlist.component.html',
          styleUrls: ['./newlist.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _mylist_service__WEBPACK_IMPORTED_MODULE_2__["MylistService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function _src_environments_environmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function _src_mainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\oskar\Desktop\grocerylist\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map