function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-unirme-equipo-unirme-equipo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unirme-equipo/unirme-equipo.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unirme-equipo/unirme-equipo.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesUnirmeEquipoUnirmeEquipoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header titulo=\"Unirme Equipo\"></app-header>\n\n<ion-content class=\"background\">\n\n  <ion-slides class=\"mainSlide\" [options]=\"{ autoHeight: true }\" #slidePrincipal>\n    <ion-slide>\n      <ion-grid>\n\n        <h1 style=\"color: white;\">Equipos</h1>  \n\n        <div>\n            <ion-row *ngFor=\"let user of equipos\" class=\"bor\">\n              <ion-col size=\"6\" class=\"izquierda\" *ngIf=\"perfil.id != user.userId\"><h5>{{user.nombre}}</h5></ion-col>\n              <ion-col class=\"derecha\" *ngIf=\"perfil.id != user.userId\">\n                <ion-button color=\"success\"\n                            class=\"derecha\"      \n                            fill=\"solid\"                \n                            (click)=\"llenar(user.idEquipo)\"\n                            (click)=\"uniraEquipo()\">\n                            <ion-icon name=\"add-circle-outline\"></ion-icon>\n                            UNIRME\n                            </ion-button>\n                \n              </ion-col>\n            </ion-row>            \n        </div>\n\n      </ion-grid>\n    </ion-slide>\n\n\n  </ion-slides>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/unirme-equipo/unirme-equipo-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/unirme-equipo/unirme-equipo-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: UnirmeEquipoPageRoutingModule */

  /***/
  function srcAppPagesUnirmeEquipoUnirmeEquipoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnirmeEquipoPageRoutingModule", function () {
      return UnirmeEquipoPageRoutingModule;
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


    var _unirme_equipo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./unirme-equipo.page */
    "./src/app/pages/unirme-equipo/unirme-equipo.page.ts");

    var routes = [{
      path: '',
      component: _unirme_equipo_page__WEBPACK_IMPORTED_MODULE_3__["UnirmeEquipoPage"]
    }];

    var UnirmeEquipoPageRoutingModule = function UnirmeEquipoPageRoutingModule() {
      _classCallCheck(this, UnirmeEquipoPageRoutingModule);
    };

    UnirmeEquipoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UnirmeEquipoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/unirme-equipo/unirme-equipo.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/unirme-equipo/unirme-equipo.module.ts ***!
    \*************************************************************/

  /*! exports provided: UnirmeEquipoPageModule */

  /***/
  function srcAppPagesUnirmeEquipoUnirmeEquipoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnirmeEquipoPageModule", function () {
      return UnirmeEquipoPageModule;
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


    var _unirme_equipo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./unirme-equipo-routing.module */
    "./src/app/pages/unirme-equipo/unirme-equipo-routing.module.ts");
    /* harmony import */


    var _unirme_equipo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./unirme-equipo.page */
    "./src/app/pages/unirme-equipo/unirme-equipo.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var UnirmeEquipoPageModule = function UnirmeEquipoPageModule() {
      _classCallCheck(this, UnirmeEquipoPageModule);
    };

    UnirmeEquipoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _unirme_equipo_routing_module__WEBPACK_IMPORTED_MODULE_5__["UnirmeEquipoPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_unirme_equipo_page__WEBPACK_IMPORTED_MODULE_6__["UnirmeEquipoPage"]]
    })], UnirmeEquipoPageModule);
    /***/
  },

  /***/
  "./src/app/pages/unirme-equipo/unirme-equipo.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/unirme-equipo/unirme-equipo.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesUnirmeEquipoUnirmeEquipoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".centrado {\n  text-align: center;\n}\n\n.derecha {\n  text-align: right;\n}\n\n.izquierda {\n  text-align: left;\n}\n\nion-content.background {\n  --background: url(/assets/img/bueno.jpg) 0 0/100% 100% no-repeat;\n  opacity: 0.8;\n}\n\n.bor {\n  border-bottom: rgba(255, 255, 255, 0.877) 1px solid;\n}\n\nlabel, h1, h2, h3, h4, h5, h6 {\n  text-shadow: 2px 2px 8px #080808;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdW5pcm1lLWVxdWlwby9DOlxcVXNlcnNcXGVyaWNrXFxPbmVEcml2ZVxcRGVza3RvcFxcaW9uaWNcXHByb3llY3RvL3NyY1xcYXBwXFxwYWdlc1xcdW5pcm1lLWVxdWlwb1xcdW5pcm1lLWVxdWlwby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3VuaXJtZS1lcXVpcG8vdW5pcm1lLWVxdWlwby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksaUJBQUE7QUNFSjs7QURBQTtFQUNJLGdCQUFBO0FDR0o7O0FEQUE7RUFDSSxnRUFBQTtFQUNBLFlBQUE7QUNHSjs7QURBQTtFQUNJLG1EQUFBO0FDR0o7O0FEQUE7RUFDSSxnQ0FBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdW5pcm1lLWVxdWlwby91bmlybWUtZXF1aXBvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50cmFkb3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbi5kZXJlY2hhe1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLml6cXVpZXJkYXtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50LmJhY2tncm91bmR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy9idWVuby5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4uYm9yIHtcclxuICAgIGJvcmRlci1ib3R0b206IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NzcpIDFweCBzb2xpZDtcclxufVxyXG5cclxubGFiZWwsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xyXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggOHB4ICMwODA4MDg7XHJcbiAgfSIsIi5jZW50cmFkbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRlcmVjaGEge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLml6cXVpZXJkYSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmlvbi1jb250ZW50LmJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy9idWVuby5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5ib3Ige1xuICBib3JkZXItYm90dG9tOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODc3KSAxcHggc29saWQ7XG59XG5cbmxhYmVsLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggOHB4ICMwODA4MDg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/unirme-equipo/unirme-equipo.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/unirme-equipo/unirme-equipo.page.ts ***!
    \***********************************************************/

  /*! exports provided: UnirmeEquipoPage */

  /***/
  function srcAppPagesUnirmeEquipoUnirmeEquipoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnirmeEquipoPage", function () {
      return UnirmeEquipoPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_models_equipo_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/models/equipo.models */
    "./src/models/equipo.models.ts");
    /* harmony import */


    var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/usuario.service */
    "./src/app/services/usuario.service.ts");
    /* harmony import */


    var src_app_services_equipo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/equipo.service */
    "./src/app/services/equipo.service.ts");
    /* harmony import */


    var src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/alerta-service.service */
    "./src/app/services/alerta-service.service.ts");
    /* harmony import */


    var src_models_equipoUser_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/models/equipoUser.models */
    "./src/models/equipoUser.models.ts");

    var UnirmeEquipoPage =
    /*#__PURE__*/
    function () {
      function UnirmeEquipoPage(usuarioService, equipoService, navCtrl, alertaService) {
        _classCallCheck(this, UnirmeEquipoPage);

        this.usuarioService = usuarioService;
        this.equipoService = equipoService;
        this.navCtrl = navCtrl;
        this.alertaService = alertaService;
        this.equipos = [];
        this.equipo = new src_models_equipo_models__WEBPACK_IMPORTED_MODULE_3__["Equipo"](0, '', 0, '');
        this.equipoUsers = [];
        this.equipoUser = new src_models_equipoUser_models__WEBPACK_IMPORTED_MODULE_7__["EquipoUser"](0, '');
      }

      _createClass(UnirmeEquipoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.perfil = this.usuarioService.getUsuario();
          this.perfil = this.usuarioService.getUsuario();
          console.log(this.perfil.id);
          this.slides.lockSwipes(true);
          this.obtenerTodosEquipos();
        }
      }, {
        key: "obtenerTodosEquipos",
        value: function obtenerTodosEquipos() {
          var _this = this;

          this.equipoService.getEquipos().subscribe(function (resp) {
            _this.equipos = resp;
          });
        }
      }, {
        key: "uniraEquipo",
        value: function uniraEquipo() {
          var _this2 = this;

          this.equipoUser.userId = this.perfil.id;
          this.equipoService.postEquipoUser(this.equipoUser).subscribe(function (data) {
            _this2.equipoUsers.push(_this2.equipoUser);

            _this2.alertaService.alertaInformativa('Hecho!!');

            _this2.navCtrl.navigateRoot('/inicio');
          }, function (error) {
            // this.alertaService.alertaInformativa('Ya estas unido a este equipo');
            _this2.alertaService.alertaInformativa(error['error']);
          });
        }
      }, {
        key: "llenar",
        value: function llenar(id) {
          this.equipoUser.equipoId = id;
        }
      }]);

      return UnirmeEquipoPage;
    }();

    UnirmeEquipoPage.ctorParameters = function () {
      return [{
        type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]
      }, {
        type: src_app_services_equipo_service__WEBPACK_IMPORTED_MODULE_5__["EquipoService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_6__["AlertaServiceService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slidePrincipal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], UnirmeEquipoPage.prototype, "slides", void 0);
    UnirmeEquipoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-unirme-equipo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./unirme-equipo.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unirme-equipo/unirme-equipo.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./unirme-equipo.page.scss */
      "./src/app/pages/unirme-equipo/unirme-equipo.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"], src_app_services_equipo_service__WEBPACK_IMPORTED_MODULE_5__["EquipoService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_6__["AlertaServiceService"]])], UnirmeEquipoPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-unirme-equipo-unirme-equipo-module-es5.js.map