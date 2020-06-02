function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-torneo-user-torneo-user-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/torneo-user/torneo-user.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/torneo-user/torneo-user.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTorneoUserTorneoUserPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header titulo=\"Torneos\" *ngIf=\"!atras\"></app-header>\n\n<ion-header no-border *ngIf=\"atras\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goSlide1()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n  \n  <ion-slides class=\"mainSlide\" [options]=\"{ autoHeight: true }\" #slidePrincipal>\n\n    <ion-slide>\n      <ion-grid>\n\n        <!-- <h1 style=\"text-shadow: 1px 1px 1px black; color: black;\">Torneos</h1> -->\n        <div>\n            <ion-row class=\"ion-align-items-center bor\" >\n              <ion-col class=\"centrado\"><h5>Torneo</h5></ion-col>\n              <ion-col class=\"izquierda\"><h5>Complejo</h5></ion-col>\n              <ion-col>\n                <h5>Dia Torneo</h5>\n              </ion-col>\n              <ion-col class=\"derecha\">                \n              </ion-col>\n            </ion-row>            \n        </div>\n        <div *ngFor=\"let item of torneosNoVen\">\n          <ion-card class=\"blanco\">\n            <ion-row class=\"ion-align-items-center\">\n              <ion-col class=\"izquierda\"><h5>{{item.nombre}}</h5></ion-col>\n              <ion-col class=\"izquierda\"><h5>{{item.complejo.nombre}}</h5></ion-col>\n              <ion-col *ngIf=\"item.diaTorneo > hoy\">\n                <label  style=\"color: rgb(16, 122, 243);\"> {{item.diaTorneo | date:'dd-MMMM-yyyy'}}</label>\n              </ion-col>\n              <ion-col class=\"derecha\">\n                <ion-button color=\"success\"\n                            class=\"derecha\"      \n                            shape=\"round\" fill=\"clear\"                \n                            (click)=\"getTorneoId(item.idTorneo)\">VER</ion-button>\n                \n              </ion-col>\n            </ion-row>            \n          </ion-card>  \n        </div>\n      </ion-grid>\n    </ion-slide>\n\n    \n<!-- ---------------------------------------------------SLIDE 2---------------------------------------- -->\n\n    <ion-slide>\n      <ion-grid>\n\n        <form>\n          <ion-card class=\"ion-text-center\" style=\"background-color: #F1F1F6; border-radius : 10px;\">\n            <img src=\"{{torneo.premioFoto}}\" alt=\"200\" width=\"500\">\n            <ion-card-title style=\"color: black;\">{{torneo.nombre}}</ion-card-title>\n\n            <ion-row>\n              <ion-col>\n                <h6>\n                  <ion-icon class=\"size\" name=\"calendar-outline\" color=\"secondary\"></ion-icon>\n                      Dia del torneo:\n                </h6>\n                <h6>{{torneo.diaTorneo | date:'dd-MMMM-yyyy'}}</h6>\n              </ion-col>\n              <ion-col>\n                <h6>\n                  <ion-icon class=\"size\" name=\"location-outline\" color=\"primary\"></ion-icon>\n                    Direccion:\n                </h6>\n                <h6>{{complejo.localidad}}</h6>\n              </ion-col>\n            </ion-row>\n            \n            <h6 *ngIf=\"torneo.descripcion != ''\">\n              <ion-label>{{torneo.descripcion}}</ion-label>\n            </h6>\n              \n                <h5 class=\"ion-text-center\" style=\"color: black;\">Complejo: {{complejo.nombre}}</h5>\n\n                <h5 class=\"ion-text-center\"><ion-icon name=\"call-outline\" color=\"primary\"></ion-icon>\n                  {{complejo.numero}}</h5>\n              <ion-row>\n                <ion-col *ngIf=\"ver\">\n                  <ion-list>\n                    <ion-item borde=\"none\">\n                      <ion-label>Elige tu equipo</ion-label>\n                      <ion-select [(ngModel)]=\"equipo.idEquipo\"\n                                  name=\"equipoId\"\n                                  (ngModelChange)=\"llenar()\">\n                        <ion-select-option *ngFor=\"let item of equipos\" value=\"{{item.idEquipo}}\" >{{item.nombre}}</ion-select-option>\n                      </ion-select>\n                    </ion-item>\n                  </ion-list>\n                </ion-col>\n              </ion-row>\n            <ion-row>\n              <!-- <ion-col>\n                <ion-button color=\"success\"\n                            shape=\"round\"\n                          (click)=\"goSlide1()\">Regresar</ion-button>\n              </ion-col> -->\n              <ion-col *ngIf=\"ver\">\n                <ion-button color=\"success\"\n                           (click)=\"registrar()\" \n                          >Registrar mi equipo</ion-button>\n              </ion-col>\n              <ion-col *ngIf=\"!ver\">\n                <h4 style=\"color: red;\">Torneo lleno</h4>\n              </ion-col>\n            </ion-row>          \n          </ion-card>\n        </form>\n\n      </ion-grid>\n    </ion-slide>\n\n\n\n\n  </ion-slides>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/torneo-user/torneo-user-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/torneo-user/torneo-user-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: TorneoUserPageRoutingModule */

  /***/
  function srcAppPagesTorneoUserTorneoUserRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TorneoUserPageRoutingModule", function () {
      return TorneoUserPageRoutingModule;
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


    var _torneo_user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./torneo-user.page */
    "./src/app/pages/torneo-user/torneo-user.page.ts");

    var routes = [{
      path: '',
      component: _torneo_user_page__WEBPACK_IMPORTED_MODULE_3__["TorneoUserPage"]
    }];

    var TorneoUserPageRoutingModule = function TorneoUserPageRoutingModule() {
      _classCallCheck(this, TorneoUserPageRoutingModule);
    };

    TorneoUserPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TorneoUserPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/torneo-user/torneo-user.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/torneo-user/torneo-user.module.ts ***!
    \*********************************************************/

  /*! exports provided: TorneoUserPageModule */

  /***/
  function srcAppPagesTorneoUserTorneoUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TorneoUserPageModule", function () {
      return TorneoUserPageModule;
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


    var _torneo_user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./torneo-user-routing.module */
    "./src/app/pages/torneo-user/torneo-user-routing.module.ts");
    /* harmony import */


    var _torneo_user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./torneo-user.page */
    "./src/app/pages/torneo-user/torneo-user.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var TorneoUserPageModule = function TorneoUserPageModule() {
      _classCallCheck(this, TorneoUserPageModule);
    };

    TorneoUserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _torneo_user_routing_module__WEBPACK_IMPORTED_MODULE_5__["TorneoUserPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_torneo_user_page__WEBPACK_IMPORTED_MODULE_6__["TorneoUserPage"]]
    })], TorneoUserPageModule);
    /***/
  },

  /***/
  "./src/app/pages/torneo-user/torneo-user.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/torneo-user/torneo-user.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTorneoUserTorneoUserPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".derecha {\n  text-align: right;\n}\n\n.centrado {\n  text-align: center;\n}\n\n.izquierda {\n  text-align: left;\n}\n\n.bor {\n  border-bottom: black 2px solid;\n}\n\nion-content.background {\n  --background: url(/assets/img/trofeo.png) 0 0/100% 100% no-repeat;\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdG9ybmVvLXVzZXIvQzpcXFVzZXJzXFxlcmlja1xcT25lRHJpdmVcXERlc2t0b3BcXGlvbmljXFxwcm95ZWN0by9zcmNcXGFwcFxccGFnZXNcXHRvcm5lby11c2VyXFx0b3JuZW8tdXNlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Rvcm5lby11c2VyL3Rvcm5lby11c2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKOztBREFBO0VBQ0ksZ0JBQUE7QUNHSjs7QURBQTtFQUNJLDhCQUFBO0FDR0o7O0FEQUE7RUFDSSxpRUFBQTtFQUNBLFlBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rvcm5lby11c2VyL3Rvcm5lby11c2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXJlY2hhe1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmNlbnRyYWRve1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuLml6cXVpZXJkYXtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5ib3Ige1xyXG4gICAgYm9yZGVyLWJvdHRvbTogYmxhY2sgMnB4IHNvbGlkO1xyXG59XHJcblxyXG5pb24tY29udGVudC5iYWNrZ3JvdW5ke1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvdHJvZmVvLnBuZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgfSIsIi5kZXJlY2hhIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5jZW50cmFkbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLml6cXVpZXJkYSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5ib3Ige1xuICBib3JkZXItYm90dG9tOiBibGFjayAycHggc29saWQ7XG59XG5cbmlvbi1jb250ZW50LmJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy90cm9mZW8ucG5nKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbiAgb3BhY2l0eTogMC44O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/torneo-user/torneo-user.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/torneo-user/torneo-user.page.ts ***!
    \*******************************************************/

  /*! exports provided: TorneoUserPage */

  /***/
  function srcAppPagesTorneoUserTorneoUserPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TorneoUserPage", function () {
      return TorneoUserPage;
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


    var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/usuario.service */
    "./src/app/services/usuario.service.ts");
    /* harmony import */


    var src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/apiservi.service */
    "./src/app/services/apiservi.service.ts");
    /* harmony import */


    var src_app_services_torneo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/torneo.service */
    "./src/app/services/torneo.service.ts");
    /* harmony import */


    var src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/alerta-service.service */
    "./src/app/services/alerta-service.service.ts");
    /* harmony import */


    var src_models_torneo_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/models/torneo.models */
    "./src/models/torneo.models.ts");
    /* harmony import */


    var src_models_torneoEquipo_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/models/torneoEquipo.models */
    "./src/models/torneoEquipo.models.ts");
    /* harmony import */


    var src_models_equipo_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/models/equipo.models */
    "./src/models/equipo.models.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var src_app_services_equipo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/services/equipo.service */
    "./src/app/services/equipo.service.ts");
    /* harmony import */


    var src_models_complejo_models__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/models/complejo.models */
    "./src/models/complejo.models.ts");

    var TorneoUserPage =
    /*#__PURE__*/
    function () {
      function TorneoUserPage(actionSheetController, usuarioService, apiServi, torneoService, alertaService, navCtrl, equipoService) {
        _classCallCheck(this, TorneoUserPage);

        this.actionSheetController = actionSheetController;
        this.usuarioService = usuarioService;
        this.apiServi = apiServi;
        this.torneoService = torneoService;
        this.alertaService = alertaService;
        this.navCtrl = navCtrl;
        this.equipoService = equipoService;
        this.ver = false;
        this.atras = false;
        this.torneos = [];
        this.torneosNoVen = [];
        this.torneo = new src_models_torneo_models__WEBPACK_IMPORTED_MODULE_7__["Torneo"](0, '', null, '', '', new Date(), '', 0);
        this.torneoEquipo = new src_models_torneoEquipo_models__WEBPACK_IMPORTED_MODULE_8__["TorneoEquipo"](0, 0);
        this.torneosEquipos = [];
        this.torneoEquipos = [];
        this.equipo = new src_models_equipo_models__WEBPACK_IMPORTED_MODULE_9__["Equipo"](0, '', 0, '');
        this.equipos = [];
        this.complejo = new src_models_complejo_models__WEBPACK_IMPORTED_MODULE_12__["Complejo"](0, null, null, null, null, false, 0.0, 0.0, new Date(), new Date(), false, false, null);
        this.hoy = moment__WEBPACK_IMPORTED_MODULE_10__().format('YYYY-MM-DDTHH:mm');
      }

      _createClass(TorneoUserPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.perfil = this.usuarioService.getUsuario();
          this.slides.lockSwipes(true);
          this.getTodosTorneos();
        } // -------------------------------------------METODOS TORNEO---------------------------------------

      }, {
        key: "getTodosTorneos",
        value: function getTodosTorneos() {
          var _this = this;

          this.torneoService.getTorneos().subscribe(function (resp) {
            _this.torneos = resp;
            console.log(resp);

            _this.noVencidas();
          });
        }
      }, {
        key: "getTorneoId",
        value: function getTorneoId(id) {
          var _this2 = this;

          this.torneoService.getTorneooId(id).subscribe(function (resp) {
            _this2.torneo = resp;

            _this2.obtenerComplejoId(_this2.torneo.idComplejo);

            _this2.getEquipoxTorneo(_this2.torneo.idTorneo);

            _this2.obtenerEquipoDeUser();
          });
        }
      }, {
        key: "noVencidas",
        value: function noVencidas() {
          var valor = 0;

          for (var i = 0; i < this.torneos.length; i++) {
            var val = moment__WEBPACK_IMPORTED_MODULE_10__(this.torneos[i].diaTorneo).format('YYYY-MM-DDTHH:mm');

            if (this.hoy < val) {
              this.torneosNoVen[valor] = this.torneos[i];
              valor++;
            }
          }
        } // -------------------------------------------METODOS TORNEO-EQUIPO---------------------------------------

      }, {
        key: "getEquipoxTorneo",
        value: function getEquipoxTorneo(id) {
          var _this3 = this;

          this.torneoService.getTorneoEquipoId(id).subscribe(function (resp) {
            _this3.torneosEquipos = resp;

            _this3.verificarCanEquipos();
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "verificarCanEquipos",
        value: function verificarCanEquipos() {
          console.log(this.torneosEquipos.length + ' ' + this.torneo.cantEquipos);

          if (this.torneosEquipos.length < this.torneo.cantEquipos) {
            this.ver = true;
          }
        }
      }, {
        key: "registrar",
        value: function registrar() {
          this.torneoEquipo.torneoId = this.torneo.idTorneo;

          if (this.torneoEquipo.equipoId === 0 || this.torneoEquipo.equipoId === undefined) {
            this.alertaService.alertaInformativa('Primero debes elegir un equipo donde seas capitan.');
          } else {
            this.validar();
          }
        }
      }, {
        key: "registrarEquipo",
        value: function registrarEquipo() {
          var _this4 = this;

          console.log('IDTORNEO: ' + this.torneoEquipo.torneoId + ' IDEQUIPO: ' + this.torneoEquipo.equipoId);
          this.torneoService.postTorneoEquipo(this.torneoEquipo).subscribe(function (data) {
            _this4.torneoEquipos.push(_this4.torneoEquipo);

            _this4.alertaService.alertaInformativa('Registrado!!');

            _this4.navCtrl.navigateRoot('/inicio');
          }, function (error) {
            _this4.alertaService.alertaInformativa(error['error']);
          });
        }
      }, {
        key: "validar",
        value: function validar() {
          if (this.torneosEquipos.length < this.torneo.cantEquipos) {
            this.registrarEquipo();
          } else {
            this.alertaService.alertaInformativa('Torneo ya esta lleno.');
          }
        }
      }, {
        key: "llenar",
        value: function llenar(id) {
          this.torneoEquipo.equipoId = this.equipo.idEquipo;
        } // -------------------------------------------METODOS EQUIPOS---------------------------------------

      }, {
        key: "obtenerEquipoDeUser",
        value: function obtenerEquipoDeUser() {
          var _this5 = this;

          this.equipoService.getEquipoxUsuario(this.perfil.id).subscribe(function (resp) {
            _this5.equipos = resp;
          });
        } // -------------------------------------------METODOS COMPLEJO---------------------------------------

      }, {
        key: "obtenerComplejoId",
        value: function obtenerComplejoId(id) {
          var _this6 = this;

          this.apiServi.getComplejoId(id).subscribe(function (resp) {
            _this6.complejo = resp;

            _this6.goSlide2();
          });
        }
      }, {
        key: "clea",
        value: function clea() {
          this.complejo = new src_models_complejo_models__WEBPACK_IMPORTED_MODULE_12__["Complejo"](0, null, null, null, null, false, 0.0, 0.0, new Date(), new Date(), false, false, null);
        } // -------------------------------------------------SLIDE--------------------------------

      }, {
        key: "goSlide1",
        value: function goSlide1() {
          this.atras = false;
          this.slides.lockSwipes(false);
          this.slides.slideTo(0);
          this.slides.lockSwipes(true);
        }
      }, {
        key: "goSlide2",
        value: function goSlide2() {
          this.atras = true;
          this.slides.lockSwipes(false);
          this.slides.slideTo(1);
          this.slides.lockSwipes(true);
        }
      }]);

      return TorneoUserPage;
    }();

    TorneoUserPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }, {
        type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]
      }, {
        type: src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviService"]
      }, {
        type: src_app_services_torneo_service__WEBPACK_IMPORTED_MODULE_5__["TorneoService"]
      }, {
        type: src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_6__["AlertaServiceService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_services_equipo_service__WEBPACK_IMPORTED_MODULE_11__["EquipoService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slidePrincipal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], TorneoUserPage.prototype, "slides", void 0);
    TorneoUserPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-torneo-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./torneo-user.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/torneo-user/torneo-user.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./torneo-user.page.scss */
      "./src/app/pages/torneo-user/torneo-user.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"], src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviService"], src_app_services_torneo_service__WEBPACK_IMPORTED_MODULE_5__["TorneoService"], src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_6__["AlertaServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_equipo_service__WEBPACK_IMPORTED_MODULE_11__["EquipoService"]])], TorneoUserPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-torneo-user-torneo-user-module-es5.js.map