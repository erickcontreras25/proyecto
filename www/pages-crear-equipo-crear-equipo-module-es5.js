function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-crear-equipo-crear-equipo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/crear-equipo/crear-equipo.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/crear-equipo/crear-equipo.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCrearEquipoCrearEquipoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header titulo=\"crear equipo\"></app-header>\n\n\n<ion-content>\n  <form #formulario=\"ngForm\" >\n\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"floating\">Nombre Equipo</ion-label>\n        <ion-input type=\"text\"\n                    name=\"nombreComplejo\"\n                   [(ngModel)]=\"equipo.nombre\"\n                   required>\n                  </ion-input>\n      </ion-item>\n    </ion-list>\n  \n    <ion-button expand=\"full\" type=\"submit\"\n    [disabled]=\"formulario.invalid\" routerLink=\"/inicio\">\n        Crear Equipo\n    </ion-button>\n  \n  </form>\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/crear-equipo/crear-equipo-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/crear-equipo/crear-equipo-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: CrearEquipoPageRoutingModule */

  /***/
  function srcAppPagesCrearEquipoCrearEquipoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrearEquipoPageRoutingModule", function () {
      return CrearEquipoPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _crear_equipo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./crear-equipo.page */
    "./src/app/pages/crear-equipo/crear-equipo.page.ts");

    var routes = [{
      path: '',
      component: _crear_equipo_page__WEBPACK_IMPORTED_MODULE_3__["CrearEquipoPage"]
    }];

    var CrearEquipoPageRoutingModule = function CrearEquipoPageRoutingModule() {
      _classCallCheck(this, CrearEquipoPageRoutingModule);
    };

    CrearEquipoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CrearEquipoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/crear-equipo/crear-equipo.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/crear-equipo/crear-equipo.module.ts ***!
    \***********************************************************/

  /*! exports provided: CrearEquipoPageModule */

  /***/
  function srcAppPagesCrearEquipoCrearEquipoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrearEquipoPageModule", function () {
      return CrearEquipoPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _crear_equipo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./crear-equipo-routing.module */
    "./src/app/pages/crear-equipo/crear-equipo-routing.module.ts");
    /* harmony import */


    var _crear_equipo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./crear-equipo.page */
    "./src/app/pages/crear-equipo/crear-equipo.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var CrearEquipoPageModule = function CrearEquipoPageModule() {
      _classCallCheck(this, CrearEquipoPageModule);
    };

    CrearEquipoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _crear_equipo_routing_module__WEBPACK_IMPORTED_MODULE_5__["CrearEquipoPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_crear_equipo_page__WEBPACK_IMPORTED_MODULE_6__["CrearEquipoPage"]]
    })], CrearEquipoPageModule);
    /***/
  },

  /***/
  "./src/app/pages/crear-equipo/crear-equipo.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/crear-equipo/crear-equipo.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCrearEquipoCrearEquipoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWFyLWVxdWlwby9jcmVhci1lcXVpcG8ucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/crear-equipo/crear-equipo.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/crear-equipo/crear-equipo.page.ts ***!
    \*********************************************************/

  /*! exports provided: CrearEquipoPage */

  /***/
  function srcAppPagesCrearEquipoCrearEquipoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrearEquipoPage", function () {
      return CrearEquipoPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/apiservi.service */
    "./src/app/services/apiservi.service.ts");

    var CrearEquipoPage =
    /*#__PURE__*/
    function () {
      function CrearEquipoPage(apiServi) {
        _classCallCheck(this, CrearEquipoPage);

        this.apiServi = apiServi;
        this.equipos = [];
        this.equipo = {
          nombre: '',
          idUsuario: 0
        };
      }

      _createClass(CrearEquipoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.equipo.idUsuario = this.apiServi.getAuxUsu();
        }
      }]);

      return CrearEquipoPage;
    }();

    CrearEquipoPage.ctorParameters = function () {
      return [{
        type: src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviService"]
      }];
    };

    CrearEquipoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-crear-equipo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./crear-equipo.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/crear-equipo/crear-equipo.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./crear-equipo.page.scss */
      "./src/app/pages/crear-equipo/crear-equipo.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviService"]])], CrearEquipoPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-crear-equipo-crear-equipo-module-es5.js.map