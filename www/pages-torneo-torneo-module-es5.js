function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-torneo-torneo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/torneo/torneo.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/torneo/torneo.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTorneoTorneoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header titulo=\"Torneo\" *ngIf=\"!atras\"></app-header>\n\n<ion-header no-border *ngIf=\"atras\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"slideAtras()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"background\">\n\n  <ion-slides class=\"mainSlide\" [options]=\"{ autoHeight: true }\" #slidePrincipal>\n\n\n    <ion-slide>\n      <ion-grid>\n        \n        <div class=\"derecha\">\n          <ion-button color=\"tertiary\" \n                      (click)=\"mostrarCrear=true\"\n                      shape=\"round\" \n                      fill=\"solid\"\n                      routerLink=\"/crear-torneo\" routerDirection=\"root\">CREAR TORNEO</ion-button>\n          </div>  \n          \n            <h2 class=\"ion-text-center\">Mis torneos</h2>\n            <div>\n                <ion-row class=\"ion-align-items-center bor\" *ngFor=\"let item of torneosxUser\">\n                  <ion-col class=\"izquierda\">\n                    <h4 style=\"color: white;\">{{item.nombre}}</h4>\n                  </ion-col>\n                  <ion-col *ngIf=\"item.diaTorneo < hoy\">\n                    <label  style=\"color: tomato;\"> Finalizado</label>\n                  </ion-col>\n                  <ion-col *ngIf=\"item.diaTorneo > hoy\">\n                    <label  style=\"color: rgb(0, 119, 255);\"> {{item.diaTorneo | date:'yyyy-MMMM-dd'}}</label>\n                  </ion-col>\n                  <ion-col class=\"derecha\">\n                    <ion-button color=\"success\"\n                                          class=\"derecha\"      \n                                          shape=\"round\" fill=\"outline\"\n                                          (click)=\"getTorneoId(item.idTorneo)\"\n                                          >VER</ion-button>\n                  </ion-col>\n                </ion-row>\n            </div>\n            \n\n      </ion-grid>\n    </ion-slide>\n    \n<!-- ---------------------------------------------------SLIDE 2---------------------------------------- -->\n  <ion-slide>\n    <ion-grid fixed>\n        <form>\n          <h3>{{torneoUser.nombre}}</h3>\n          <div>\n            <ion-row class=\"bor\">\n              <ion-col class=\"izquierda\">\n                <h6 style=\"color: white;\">Dia del torneo:</h6>\n              </ion-col>\n              <ion-col class=\"derecha\">\n                <h6 style=\"color: white;\">{{torneoUser.diaTorneo | date:'dd-MMMM-yyyy'}}</h6>\n              </ion-col>              \n            </ion-row>\n            <ion-row class=\"bor\">\n              <ion-col class=\"izquierda\">\n                <h6 style=\"color: white;\">Cupos habilitados:</h6>\n              </ion-col>\n              <ion-col class=\"derecha\">\n                <h6 style=\"color: white;\">{{torneoUser.cantEquipos}}</h6>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"bor\">\n              <ion-col class=\"izquierda\">\n                <h6 style=\"color: white;\">Equipos inscritos: </h6>\n              </ion-col>\n              <ion-col class=\"derecha\">\n                <h6 style=\"color: white;\">{{ocupado}}</h6>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col class=\"izquierda\">\n                <h6 style=\"color: white;\">Cupos disponibles: </h6>\n              </ion-col>\n              <ion-col class=\"derecha\">\n                <h6 style=\"color: white;\">{{libre}}</h6>\n              </ion-col>\n            </ion-row>\n\n          </div>\n          <ion-row>\n            <ion-col>\n              <ion-button color=\"success\"\n                          shape=\"round\"\n                        (click)=\"mostrarDel()\">Ver Equipos Inscritos</ion-button>\n            </ion-col>\n          </ion-row> \n        </form>\n  </ion-grid>\n  </ion-slide>\n\n\n<!-- ---------------------------------------------------SLIDE 3---------------------------------------- -->\n\n  <ion-slide>\n    <ion-grid>\n \n      <!-- <h2 class=\"ion-text-center\">Equipos inscritos: {{calcu}}</h2> -->\n      <div>\n          <ion-row *ngFor=\"let item of equipoxTorneo\" class=\"bor\">\n            <ion-col size=\"6\" class=\"izquierda\">        \n              <h5 style=\"color: white;\">{{item.equipo.nombre}}</h5>                  \n            </ion-col> \n            <ion-col class=\"derecha\" *ngIf=\"mE\">\n              <ion-button color=\"success\"\n                          class=\"derecha\"\n                          fill=\"clear\"\n                          (click)=\"sacardTorneo(item.torneoId, item.equipoId)\">Sacar del torneo</ion-button>\n            </ion-col>    \n          </ion-row>\n          <!-- <ion-row>\n            <ion-col>\n            <ion-button   color=\"success\"\n                          expand=\"full\"\n                          (click)=\"goSlide1()\">Regresar</ion-button>\n                        </ion-col>\n          </ion-row> -->\n      </div>\n      \n  </ion-grid>\n</ion-slide>\n\n<!-- ---------------------------------------------------SLIDE 4---------------------------------------- -->\n\n<ion-slide>\n  <ion-grid>\n\n    \n  </ion-grid>\n</ion-slide>\n\n  \n</ion-slides>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/torneo/torneo-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/torneo/torneo-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: TorneoPageRoutingModule */

  /***/
  function srcAppPagesTorneoTorneoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TorneoPageRoutingModule", function () {
      return TorneoPageRoutingModule;
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


    var _torneo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./torneo.page */
    "./src/app/pages/torneo/torneo.page.ts");

    var routes = [{
      path: '',
      component: _torneo_page__WEBPACK_IMPORTED_MODULE_3__["TorneoPage"]
    }];

    var TorneoPageRoutingModule = function TorneoPageRoutingModule() {
      _classCallCheck(this, TorneoPageRoutingModule);
    };

    TorneoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TorneoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/torneo/torneo.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/torneo/torneo.module.ts ***!
    \***********************************************/

  /*! exports provided: TorneoPageModule */

  /***/
  function srcAppPagesTorneoTorneoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TorneoPageModule", function () {
      return TorneoPageModule;
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


    var _torneo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./torneo-routing.module */
    "./src/app/pages/torneo/torneo-routing.module.ts");
    /* harmony import */


    var _torneo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./torneo.page */
    "./src/app/pages/torneo/torneo.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var TorneoPageModule = function TorneoPageModule() {
      _classCallCheck(this, TorneoPageModule);
    };

    TorneoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _torneo_routing_module__WEBPACK_IMPORTED_MODULE_5__["TorneoPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_torneo_page__WEBPACK_IMPORTED_MODULE_6__["TorneoPage"]]
    })], TorneoPageModule);
    /***/
  },

  /***/
  "./src/app/pages/torneo/torneo.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/torneo/torneo.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTorneoTorneoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".derecha {\n  text-align: right;\n}\n\n.centrado {\n  text-align: center;\n}\n\n.izquierda {\n  text-align: left;\n}\n\nion-content.background {\n  --background: url(/assets/img/fondograma1.jpg) 0 0/100% 100% no-repeat;\n  opacity: 0.8;\n}\n\n.bor {\n  border-bottom: rgba(255, 255, 255, 0.877) 1px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdG9ybmVvL0M6XFxVc2Vyc1xcZXJpY2tcXE9uZURyaXZlXFxEZXNrdG9wXFxpb25pY1xccHJveWVjdG8vc3JjXFxhcHBcXHBhZ2VzXFx0b3JuZW9cXHRvcm5lby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Rvcm5lby90b3JuZW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxnQkFBQTtBQ0dKOztBREFBO0VBQ0Usc0VBQUE7RUFDQSxZQUFBO0FDR0Y7O0FEQUU7RUFDRSxtREFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdG9ybmVvL3Rvcm5lby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVyZWNoYXtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5jZW50cmFkb3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbi5penF1aWVyZGF7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5pb24tY29udGVudC5iYWNrZ3JvdW5ke1xyXG4gIC0tYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL2ZvbmRvZ3JhbWExLmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4gIC5ib3Ige1xyXG4gICAgYm9yZGVyLWJvdHRvbTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg3NykgMXB4IHNvbGlkO1xyXG59IiwiLmRlcmVjaGEge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmNlbnRyYWRvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaXpxdWllcmRhIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL2ZvbmRvZ3JhbWExLmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLmJvciB7XG4gIGJvcmRlci1ib3R0b206IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NzcpIDFweCBzb2xpZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/torneo/torneo.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/torneo/torneo.page.ts ***!
    \*********************************************/

  /*! exports provided: TorneoPage */

  /***/
  function srcAppPagesTorneoTorneoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TorneoPage", function () {
      return TorneoPage;
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


    var src_models_complejo_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/models/complejo.models */
    "./src/models/complejo.models.ts");
    /* harmony import */


    var src_models_torneo_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/models/torneo.models */
    "./src/models/torneo.models.ts");
    /* harmony import */


    var src_app_services_torneo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/torneo.service */
    "./src/app/services/torneo.service.ts");
    /* harmony import */


    var src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/alerta-service.service */
    "./src/app/services/alerta-service.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var src_models_torneoEquipo_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/models/torneoEquipo.models */
    "./src/models/torneoEquipo.models.ts");

    var TorneoPage =
    /*#__PURE__*/
    function () {
      function TorneoPage(actionSheetController, usuarioService, apiServi, torneoService, alertaService, navCtrl) {
        _classCallCheck(this, TorneoPage);

        this.actionSheetController = actionSheetController;
        this.usuarioService = usuarioService;
        this.apiServi = apiServi;
        this.torneoService = torneoService;
        this.alertaService = alertaService;
        this.navCtrl = navCtrl;
        this.complejos = [];
        this.complejo = new src_models_complejo_models__WEBPACK_IMPORTED_MODULE_5__["Complejo"](0, null, null, null, null, false, 0.0, 0.0, new Date(), new Date(), false, false, null);
        this.torneo = new src_models_torneo_models__WEBPACK_IMPORTED_MODULE_6__["Torneo"](0, '', null, '', '', new Date(), '', 0);
        this.torneoUser = new src_models_torneo_models__WEBPACK_IMPORTED_MODULE_6__["Torneo"](0, '', null, '', '', new Date(), '', 0);
        this.torneos = [];
        this.torneosxUser = [];
        this.equipoxTorneo = [];
        this.torneoEquipo = new src_models_torneoEquipo_models__WEBPACK_IMPORTED_MODULE_10__["TorneoEquipo"](0, 0);
        this.mostrarCrear = false;
        this.hoy = moment__WEBPACK_IMPORTED_MODULE_9__().format('YYYY-MM-DD');
        this.ver = false;
        this.ocupado = 0;
        this.libre = 0;
        this.mE = false;
        this.atras = false;
      }

      _createClass(TorneoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.perfil = this.usuarioService.getUsuario();
          this.slides.lockSwipes(true);
          this.obtenerComplejos();
          this.getTorneoxUser();
        } // -------------------------------------------METODOS TORNEO---------------------------------------

      }, {
        key: "getTorneoxUser",
        value: function getTorneoxUser() {
          var _this = this;

          this.torneoService.getTorneoxUsuario(this.perfil.id).subscribe(function (resp) {
            _this.torneosxUser = resp; // console.log(resp);
          });
        }
      }, {
        key: "getTorneoId",
        value: function getTorneoId(id) {
          var _this2 = this;

          this.torneoService.getTorneooId(id).subscribe(function (resp) {
            _this2.torneoUser = resp;

            _this2.getEquipoxTorneo(id);

            _this2.validar();

            _this2.goSlide2();
          });
        }
      }, {
        key: "validar",
        value: function validar() {
          var dia = moment__WEBPACK_IMPORTED_MODULE_9__(this.torneo.diaTorneo).format('YYYY-MM-DD');

          if (dia <= this.hoy) {
            this.ver = true;
          }
        }
      }, {
        key: "crearTorneoConImagen",
        value: function crearTorneoConImagen() {
          var _this3 = this;

          var fileInput = document.getElementById('img');
          var file = fileInput.files[0];
          var imgPromise = this.getFileBlob(file);
          imgPromise.then(function (blob) {
            _this3.torneo.premioFoto = blob; // console.log("ESTE ES MI BLOB: " + blob);

            _this3.postTorneo();
          });
        }
      }, {
        key: "crearTorneo",
        value: function crearTorneo() {
          if (this.torneo.premioFoto !== '') {
            this.crearTorneoConImagen();
          } else {
            this.postTorneo();
          }
        }
      }, {
        key: "postTorneo",
        value: function postTorneo() {
          var _this4 = this;

          this.torneo.usuarioId = this.perfil.id;
          this.torneoService.postTorneo(this.torneo).subscribe(function (data) {
            _this4.torneos.push(_this4.torneo);

            _this4.clea();

            _this4.mostrarCrear = false;

            _this4.alertaService.alertaInformativa('Torneo creado con exito');

            _this4.getTorneoxUser();
          }, function (error) {
            console.log('ERROR: ', error);
          });
        }
      }, {
        key: "getFileBlob",
        value: function getFileBlob(file) {
          var reader = new FileReader();
          return new Promise(function (resolve, reject) {
            reader.onload = function (theFile) {
              return function (e) {
                resolve(e.target.result);
              };
            }(file);

            reader.readAsDataURL(file);
          });
        }
      }, {
        key: "clea",
        value: function clea() {
          this.torneo = new src_models_torneo_models__WEBPACK_IMPORTED_MODULE_6__["Torneo"](0, '', null, '', '', new Date(), '', 0);
        } // -------------------------------------------METODOS TORNEO-EQUIPO---------------------------------------

      }, {
        key: "getEquipoxTorneo",
        value: function getEquipoxTorneo(id) {
          var _this5 = this;

          this.torneoService.getTorneoEquipoId(id).subscribe(function (resp) {
            _this5.equipoxTorneo = resp;

            _this5.calcular(); //  this.goSlide3();

          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "calcular",
        value: function calcular() {
          this.ocupado = this.equipoxTorneo.length;
          this.libre = this.torneoUser.cantEquipos - this.equipoxTorneo.length;
        }
      }, {
        key: "sacardTorneo",
        value: function sacardTorneo(idT, idE) {
          var _this6 = this;

          this.torneoService.deleteTorneoEquipo(idT, idE).subscribe(function (resp) {
            _this6.alertaService.alertaInformativa('Equipo eliminado con exito!!');

            _this6.getEquipoxTorneo(_this6.torneoUser.idTorneo);
          });
        } // --------------------------------------------METODOS COMPLEJOS------------------------------------

      }, {
        key: "obtenerComplejos",
        value: function obtenerComplejos() {
          var _this7 = this;

          this.apiServi.getComplejoAdmin(this.perfil.id).subscribe(function (resp) {
            _this7.complejos = resp;
          });
        }
      }, {
        key: "getIdComplejo",
        value: function getIdComplejo() {
          this.torneo.idComplejo = this.complejo.idComplejo; // console.log(this.torneo.idComplejo);
        }
      }, {
        key: "mostrarDel",
        value: function mostrarDel() {
          this.hoy = moment__WEBPACK_IMPORTED_MODULE_9__().format('YYYY-MM-DD');
          var d = moment__WEBPACK_IMPORTED_MODULE_9__(this.torneoUser.diaTorneo).format('YYYY-MM-DD');

          if (d >= this.hoy) {
            this.mE = true;
          } else {
            this.mE = false;
          }

          this.goSlide3();
        } // -------------------------------------------------SLIDE--------------------------------

      }, {
        key: "goSlide1",
        value: function goSlide1() {
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
      }, {
        key: "goSlide3",
        value: function goSlide3() {
          this.slides.lockSwipes(false);
          this.slides.slideTo(2);
          this.slides.lockSwipes(true);
        }
      }, {
        key: "slideAtras",
        value: function slideAtras() {
          var _this8 = this;

          this.slides.lockSwipes(false);
          this.slides.slidePrev();
          this.slides.lockSwipes(true);
          this.slides.isBeginning().then(function (data) {
            if (data === true) {
              _this8.atras = false;
            }
          });
        }
      }]);

      return TorneoPage;
    }();

    TorneoPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }, {
        type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]
      }, {
        type: src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviService"]
      }, {
        type: src_app_services_torneo_service__WEBPACK_IMPORTED_MODULE_7__["TorneoService"]
      }, {
        type: src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_8__["AlertaServiceService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slidePrincipal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], TorneoPage.prototype, "slides", void 0);
    TorneoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-torneo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./torneo.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/torneo/torneo.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./torneo.page.scss */
      "./src/app/pages/torneo/torneo.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"], src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviService"], src_app_services_torneo_service__WEBPACK_IMPORTED_MODULE_7__["TorneoService"], src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_8__["AlertaServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], TorneoPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-torneo-torneo-module-es5.js.map