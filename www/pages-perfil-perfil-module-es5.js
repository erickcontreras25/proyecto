function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-perfil-perfil-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPerfilPerfilPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header titulo=\"Mi Perfil\" *ngIf=\"!atras\"></app-header>\n\n<ion-header no-border *ngIf=\"atras\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goSlide1()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n\n  <div>\n    <ion-row>\n      <ion-col class=\"centrado\">\n        <h5>{{user.nombreUsuario}}</h5>\n        <!-- <ion-row><h5>{{user.email}}</h5></ion-row>       -->\n      </ion-col>\n      <ion-col class=\"centrado\"><h5 >{{user.edad}} años</h5></ion-col>\n    </ion-row>\n  </div>\n\n  \n\n  <ion-slides class=\"mainSlide\" [options]=\"{ autoHeight: true }\" #slidePrincipal>\n\n<!-- ---------------------------------------------------SLIDE 1--------------------------------------------- -->\n\n    <ion-slide>\n      <ion-grid>\n        <form>\n\n          <h1 style=\"color: white;\" class=\"shadow\">Mis reservaciones</h1>\n\n          <div>\n            <ion-row class=\"ion-align-items-center bor\" >\n              <ion-col class=\"centrado\"><label class=\"shadow\">Día</label></ion-col>\n              <ion-col class=\"centrado\"><label class=\"shadow\">Horario</label></ion-col>\n              <ion-col class=\"derecha\">                \n              </ion-col>\n            </ion-row>            \n        </div>\n\n        <div *ngFor=\"let item of reservacionesNoVencidas\">\n            <ion-row class=\"ion-align-items-center\">\n              <ion-col class=\"centrado\" >\n                <label class=\"shadow\">{{item.horaInicial | date:'MMMM-dd'}}</label>\n              </ion-col>\n              <ion-col class=\"centrado\" >\n                <label class=\"shadow\">{{item.horaInicial | date:'HH:mm'}} a {{item.horaFinal | date:'HH:mm'}}</label>\n              </ion-col>\n              <ion-col class=\"derecha\">\n                <ion-button color=\"success\"\n                            class=\"derecha\"      \n                            fill=\"clear\"                                       \n                            (click)=\"obtenerReservacionId(item.idReservacion)\">\n                            <ion-icon color=\"success\" class=\"size\" name=\"return-up-forward-outline\"></ion-icon>\n                            </ion-button>\n                \n              </ion-col>\n            </ion-row>            \n        </div>\n        </form>\n      </ion-grid>\n    </ion-slide>\n\n<!-- ---------------------------------------------------SLIDE 2--------------------------------------------- -->\n\n    <ion-slide>\n      <ion-grid>\n        <form>\n          <!-- <h2 class=\"ion-text-center\">Mis reservaciones</h2>           -->\n\n            <div class=\"bor\" style=\"background-color: rgb(211, 197, 197, 0);\">\n              <br>\n\n                  <div style=\"display: inline-block; position:relative\">\n                    <img class=\"img\" src=\"{{cancha.foto}}\">\n                    <div style=\"display: inline-block; position:absolute; top:7%; left:96%; transform: translate(-50%, -50%)\">\n                        <ion-icon class=\"size\" \n                                  style=\"color: red; background-color: rgba(0, 0, 0, 0.1);\" \n                                  slot=\"start\"\n                                  (click)=\"actualizar()\"\n                                  name=\"ellipsis-vertical\"></ion-icon>\n                    </div>\n                    <div style=\"display: inline-block; position:absolute; top:100%; left:50%; transform: translate(-50%, -50%)\">      \n                      <img src=\"{{complejo.foto}}\" class=\"imgRedonda\">\n                  </div>\n                  </div>\n                  <br><br><br><br>\n                  <h1 class=\"ion-text-center shadow\">{{complejo.nombre}}</h1>\n                  <ion-row>\n                    <ion-col>\n                      <ion-icon class=\"shadow\" name=\"calendar-outline\" color=\"secondary\"></ion-icon>\n                      <label class=\"shadow\">{{reservacion.horaInicial | date:'dd-MMMM'}}</label>\n                      <label class=\"shadow\">                       \n                          {{reservacion.horaInicial | date:'HH:mm'}} a {{reservacion.horaFinal | date:'HH:mm'}}\n                      </label>\n                    </ion-col>\n                    <ion-col>\n                      <ion-icon class=\"shadow\" name=\"cash-outline\" color=\"success\"></ion-icon>\n                      <label class=\"shadow\">                        \n                          Lps. {{cancha.precio * auxHoras}}\n                      </label>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col>\n                      <ion-icon class=\"shadow\" name=\"location-outline\" color=\"primary\"></ion-icon>\n                      <label class=\"shadow\">                        \n                          {{complejo.localidad}}\n                      </label>\n                    </ion-col>\n                    <ion-col>\n                      <ion-icon name=\"call-outline\" color=\"secondary\"></ion-icon>\n                      <label class=\"shadow\">                        \n                        {{complejo.numero}}\n                    </label>\n                    </ion-col>\n                  </ion-row>\n                  \n\n                  \n                  <ion-row>\n                    <ion-col *ngIf=\"!reservacion.pago && !reservacion.pagoParcial\">\n                      <ion-button color=\"success\"\n                                  fill=\"outline\"\n                                  (click)=\"pagarParcial()\"\n                                  >Pagar Reserva</ion-button>\n                    </ion-col>\n                  </ion-row>\n                  \n                  \n             </div>\n        </form>\n      </ion-grid>\n    </ion-slide>\n\n\n    <!-- ---------------------------------------------------SLIDE 3--------------------------------------------- -->\n\n    <ion-slide>\n      <ion-grid>\n        <form>\n\n          <ion-row>\n            <ion-col>\n              <h2>Cambia el día y hora de la reserva</h2>\n              <label>\n                Recuerda que en este complejo solo puedes reservar en horario de:\n              </label>\n              <h4>\n              <b style=\"color: red;\">{{complejo.horaInicio | date:'HH'}}:00</b>\n                a \n              <b style=\"color: red;\">{{complejo.horaCierre | date:'HH'}}:00</b>\n            </h4>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n              <ion-col>  \n\n                <ion-item>\n                  <ion-label>Hora Inicial</ion-label>\n                  <ion-datetime displayFormat=\"D MMM YYYY HH:mm\" \n                                name=\"horaInicial\"\n                                minuteValues=\"0\" min=\"10:00\" \n                                [(ngModel)]=\"hInicio\"\n                                (ngModelChange)=\"volver()\">\n                  </ion-datetime>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Hora Final</ion-label>\n                  <ion-datetime displayFormat=\"D MMM YYYY HH:mm\" \n                                name=\"horaFinal\"\n                                minuteValues=\"0\" min=\"11:00\" \n                                [(ngModel)]=\"hFin\"\n                                (ngModelChange)=\"volver()\">\n                  </ion-datetime>\n                </ion-item>\n                  \n              </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col>\n                <ion-button type=\"submit\"\n                            color=\"success\"\n                            fill=\"outline\"\n                            (click)=\"validarFecha()\">\n                            Verificar Horario\n                </ion-button>\n            </ion-col>\n              <ion-col>\n                  <ion-button type=\"submit\"\n                              color=\"success\"\n                              *ngIf=\"auxReser==true\"\n                              (click)=\"modificarReservacion()\">\n                      Actualizar\n                  </ion-button>\n              </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <label style=\"color: white;\">Estas reservando por un tiempo de </label>\n              <h2 *ngIf=\"auxHoras!=null\">{{auxHoras}} h</h2>\n            </ion-col>\n          </ion-row>\n\n        </form>\n      </ion-grid>\n    </ion-slide>\n\n  </ion-slides>\n\n\n  \n  <!-- <div *ngFor=\"let item of reservacionesNoVencidas\" style=\"background-color: rgb(67, 179, 96);\">\n    <ion-card class=\"ion-text-center\" style=\"background-color: rgb(230, 230, 241); border-radius : 10px;\">      \n\n        <div style=\"display: inline-block; position:relative\">\n          <img src=\"{{item.cancha.foto}}\" class=\"img\">\n          <div style=\"display: inline-block; position:absolute; top:100%; left:50%; transform: translate(-50%, -50%)\">      \n            <img src=\"{{item.cancha.complejo.foto}}\" class=\"imgRedonda\">\n        </div>\n        </div>\n        <br><br><br><br><br>\n        <h3 class=\"ion-text-center\">{{item.cancha.complejo.nombre}}</h3>\n        <h6>\n          <ion-icon name=\"calendar-outline\" color=\"secondary\"></ion-icon>\n              {{item.horaInicial | date:'MMMM-dd HH:mm'}} a {{item.horaFinal | date:'MMMM-dd HH:mm'}}\n          </h6>\n        <h6>\n          <ion-icon name=\"cash-outline\" color=\"success\"></ion-icon>\n            Lps. {{item.cancha.precio}}\n        </h6>\n\n        <h6>\n          <ion-icon name=\"location-outline\" color=\"primary\"></ion-icon>\n            {{item.cancha.complejo.localidad}}\n        </h6>\n        <label>\n          <ion-icon slot=\"start\" name=\"trash-outline\" color=\"danger\" (click)=\"eliminarReservacion(item.idReservacion)\">Eliminar reservacion</ion-icon>\n        </label>\n    </ion-card>\n</div> -->\n  \n\n  <!-- <ion-button (click)=\"obtenerEquipoUsuario()\">Ver equipo</ion-button>\n  <ion-card>\n    <ion-list *ngFor=\"let item of equipos\">\n      <ion-item>{{item.usuario.nombre}}</ion-item>\n      <ion-item>\n      </ion-item>\n    </ion-list>\n  </ion-card> -->\n\n  \n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/perfil/perfil-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/perfil/perfil-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: PerfilPageRoutingModule */

  /***/
  function srcAppPagesPerfilPerfilRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfilPageRoutingModule", function () {
      return PerfilPageRoutingModule;
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


    var _perfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./perfil.page */
    "./src/app/pages/perfil/perfil.page.ts");

    var routes = [{
      path: '',
      component: _perfil_page__WEBPACK_IMPORTED_MODULE_3__["PerfilPage"]
    }];

    var PerfilPageRoutingModule = function PerfilPageRoutingModule() {
      _classCallCheck(this, PerfilPageRoutingModule);
    };

    PerfilPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PerfilPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/perfil/perfil.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/perfil/perfil.module.ts ***!
    \***********************************************/

  /*! exports provided: PerfilPageModule */

  /***/
  function srcAppPagesPerfilPerfilModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function () {
      return PerfilPageModule;
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


    var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./perfil-routing.module */
    "./src/app/pages/perfil/perfil-routing.module.ts");
    /* harmony import */


    var _perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./perfil.page */
    "./src/app/pages/perfil/perfil.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var PerfilPageModule = function PerfilPageModule() {
      _classCallCheck(this, PerfilPageModule);
    };

    PerfilPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerfilPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]]
    })], PerfilPageModule);
    /***/
  },

  /***/
  "./src/app/pages/perfil/perfil.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/perfil/perfil.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPerfilPerfilPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".img {\n  width: 500px;\n  height: 220px;\n}\n\nion-icon.size {\n  font-size: 35px;\n}\n\n.imgRedonda {\n  width: 150px;\n  height: 150px;\n  border-radius: 150px;\n  border: 5px solid white;\n}\n\n.derecha {\n  text-align: right;\n}\n\n.centrado {\n  text-align: center;\n}\n\n.izquierda {\n  text-align: left;\n}\n\n.bor {\n  border-bottom: white 2px solid;\n}\n\nion-content.background {\n  --background: url(/assets/img/fondo5.jpg) 0 0/100% 100% no-repeat;\n  opacity: 0.8;\n}\n\n.shadow {\n  text-shadow: 2px 2px #080808;\n}\n\nlabel, ion-label, h1, h2, h3, h4, h5, h6 {\n  text-shadow: 2px 2px 8px #080808;\n}\n\n.img {\n  min-height: 250px;\n  max-height: 570px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGVyZmlsL0M6XFxVc2Vyc1xcZXJpY2tcXE9uZURyaXZlXFxEZXNrdG9wXFxpb25pY1xccHJveWVjdG8vc3JjXFxhcHBcXHBhZ2VzXFxwZXJmaWxcXHBlcmZpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BlcmZpbC9wZXJmaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNDSjs7QURDRTtFQUNJLGVBQUE7QUNFTjs7QURBRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBQ0dKOztBREFBO0VBQ0UsaUJBQUE7QUNHRjs7QUREQTtFQUNFLGtCQUFBO0FDSUY7O0FERkE7RUFDRSxnQkFBQTtBQ0tGOztBREZBO0VBQ0UsOEJBQUE7QUNLRjs7QURGQTtFQUNFLGlFQUFBO0VBQ0EsWUFBQTtBQ0tGOztBREZBO0VBQ0UsNEJBQUE7QUNLRjs7QURGQTtFQUNFLGdDQUFBO0FDS0Y7O0FERkE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0tGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGVyZmlsL3BlcmZpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogMjIwcHg7XHJcbiAgfVxyXG4gIGlvbi1pY29uLnNpemUge1xyXG4gICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgfVxyXG4gIC5pbWdSZWRvbmRhIHtcclxuICAgIHdpZHRoOjE1MHB4O1xyXG4gICAgaGVpZ2h0OjE1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czoxNTBweDtcclxuICAgIGJvcmRlcjo1cHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcblxyXG4uZGVyZWNoYXtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uY2VudHJhZG97XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5penF1aWVyZGF7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmJvciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogd2hpdGUgMnB4IHNvbGlkO1xyXG59XHJcblxyXG5pb24tY29udGVudC5iYWNrZ3JvdW5ke1xyXG4gIC0tYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL2ZvbmRvNS5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLnNoYWRvdyB7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggIzA4MDgwODtcclxufVxyXG5cclxubGFiZWwsIGlvbi1sYWJlbCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggOHB4ICMwODA4MDg7XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDU3MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59IiwiLmltZyB7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiAyMjBweDtcbn1cblxuaW9uLWljb24uc2l6ZSB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuLmltZ1JlZG9uZGEge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1MHB4O1xuICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZTtcbn1cblxuLmRlcmVjaGEge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmNlbnRyYWRvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaXpxdWllcmRhIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmJvciB7XG4gIGJvcmRlci1ib3R0b206IHdoaXRlIDJweCBzb2xpZDtcbn1cblxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL2ZvbmRvNS5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5zaGFkb3cge1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAjMDgwODA4O1xufVxuXG5sYWJlbCwgaW9uLWxhYmVsLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggOHB4ICMwODA4MDg7XG59XG5cbi5pbWcge1xuICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgbWF4LWhlaWdodDogNTcwcHg7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/perfil/perfil.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/perfil/perfil.page.ts ***!
    \*********************************************/

  /*! exports provided: PerfilPage */

  /***/
  function srcAppPagesPerfilPerfilPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfilPage", function () {
      return PerfilPage;
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
    /* harmony import */


    var src_models_reservacion_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/models/reservacion.models */
    "./src/models/reservacion.models.ts");
    /* harmony import */


    var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/usuario.service */
    "./src/app/services/usuario.service.ts");
    /* harmony import */


    var src_models_cancha_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/models/cancha.models */
    "./src/models/cancha.models.ts");
    /* harmony import */


    var src_models_complejo_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/models/complejo.models */
    "./src/models/complejo.models.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/paypal/ngx */
    "./node_modules/@ionic-native/paypal/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/services/alerta-service.service */
    "./src/app/services/alerta-service.service.ts");

    var PerfilPage =
    /*#__PURE__*/
    function () {
      function PerfilPage(apiServi, usuarioService, payPal, alertController, navCtrl, alertaService, actionSheetController) {
        _classCallCheck(this, PerfilPage);

        this.apiServi = apiServi;
        this.usuarioService = usuarioService;
        this.payPal = payPal;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.alertaService = alertaService;
        this.actionSheetController = actionSheetController;
        this.auxReser = false;
        this.parcial = false;
        this.completo = false;
        this.atras = false;
        this.reservacion = new src_models_reservacion_models__WEBPACK_IMPORTED_MODULE_3__["Reservacion"](0, new Date(), new Date(), false, false, 0, '');
        this.reservaciones = [];
        this.reser = [];
        this.reservacionesNoVencidas = [];
        this.cancha = new src_models_cancha_models__WEBPACK_IMPORTED_MODULE_5__["Cancha"](0, null, null, '', null);
        this.complejo = new src_models_complejo_models__WEBPACK_IMPORTED_MODULE_6__["Complejo"](0, null, null, null, null, false, 0.0, 0.0, null, null, false, false, null);
        this.equipos = [];
        this.user = {
          id: '',
          email: '',
          nombreUsuario: '',
          edad: 0,
          isAdmin: false
        };
      }

      _createClass(PerfilPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = this.usuarioService.getUsuario(); // console.log(this.user);

          this.slides.lockSwipes(true);
          this.obtenerMisReservacion();
        }
      }, {
        key: "obtenerReservacionId",
        value: function obtenerReservacionId(id) {
          var _this = this;

          this.apiServi.getReservacionId(id).subscribe(function (resp) {
            _this.reservacion = resp;

            _this.valorPagar();

            _this.obtenerCanchaId(_this.reservacion.idCancha);
          });
        }
      }, {
        key: "obtenerMisReservacion",
        value: function obtenerMisReservacion() {
          var _this2 = this;

          this.apiServi.getReservacionXUser(this.user.id).subscribe(function (resp) {
            _this2.reservaciones = resp; // console.log('SERVICIO', resp);

            _this2.noVencidas();
          });
        }
      }, {
        key: "eliminarReservacion",
        value: function eliminarReservacion() {
          var _this3 = this;

          this.apiServi.deleteReservacion(this.reservacion.idReservacion).subscribe(function (resp) {
            console.log('ELIMINADO CON EXITO');

            _this3.obtenerMisReservacion();

            _this3.goSlide1();
          });
        }
      }, {
        key: "modificarReservacion",
        value: function modificarReservacion() {
          var _this4 = this;

          this.reservacion.horaInicial = moment__WEBPACK_IMPORTED_MODULE_7__(this.hInicio).subtract(6, 'hour');
          this.reservacion.horaFinal = moment__WEBPACK_IMPORTED_MODULE_7__(this.hFin).subtract(6, 'hour');
          this.apiServi.putReservacion(this.reservacion.idReservacion, this.reservacion).subscribe(function (data) {
            // this.clear();
            _this4.obtenerMisReservacion();

            _this4.goSlide2();

            window.alert('Actualizado!!');
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "obtenerReservas",
        value: function obtenerReservas(id) {
          var _this5 = this;

          this.apiServi.getReservacionComplejo(id).subscribe(function (resp) {
            _this5.reser = resp; // console.log(this.reser);
          });
        }
      }, {
        key: "noVencidas",
        value: function noVencidas() {
          var ini = moment__WEBPACK_IMPORTED_MODULE_7__().format('MM-DD-YYYY HH:mm');
          var valor = 0;

          for (var i = 0; i < this.reservaciones.length; i++) {
            var val = moment__WEBPACK_IMPORTED_MODULE_7__(this.reservaciones[i].horaFinal).format('MM-DD-YYYY HH:mm');

            if (ini < val) {
              this.reservacionesNoVencidas[valor] = this.reservaciones[i];
              valor++;
            }
          }
        }
      }, {
        key: "obtenerCanchaId",
        value: function obtenerCanchaId(id) {
          var _this6 = this;

          this.apiServi.getCanchaId(id).subscribe(function (resp) {
            _this6.cancha = resp;

            _this6.getComplejoId(_this6.cancha.idComplejo); // console.log('EJECUTADO CON EXITO');

          });
        }
      }, {
        key: "getComplejoId",
        value: function getComplejoId(id) {
          var _this7 = this;

          this.apiServi.getComplejoId(id).subscribe(function (resp) {
            _this7.complejo = resp;

            _this7.obtenerReservas(id);

            _this7.goSlide2(); // console.log('EJECUTADO CON EXITO');

          });
        }
      }, {
        key: "validarFecha",
        value: function validarFecha() {
          var ini = moment__WEBPACK_IMPORTED_MODULE_7__().format('MM-DD-YYYY HH:mm');
          var dInicial = moment__WEBPACK_IMPORTED_MODULE_7__(this.hInicio).format('MM-DD-YYYY HH:mm');
          var dFinal = moment__WEBPACK_IMPORTED_MODULE_7__(this.hFin).format('MM-DD-YYYY HH:mm');
          var abre = moment__WEBPACK_IMPORTED_MODULE_7__(this.hInicio).format('HH');
          var cierra = moment__WEBPACK_IMPORTED_MODULE_7__(this.hFin).format('HH');
          var abreComplejo = moment__WEBPACK_IMPORTED_MODULE_7__(this.complejo.horaInicio).format('HH');
          var cierraComplejo = moment__WEBPACK_IMPORTED_MODULE_7__(this.complejo.horaCierre).format('HH');
          var diaReserva = moment__WEBPACK_IMPORTED_MODULE_7__(this.hInicio).format('MM-DD-YYYY');

          if (dInicial <= ini || dFinal <= ini) {
            this.volver();
            return alert('La hora inicial o final no puede ser menor que la hora actual');
          }

          if (dFinal < dInicial) {
            this.volver();
            return alert('La hora final no puede ser menor que la hora inicial.');
          }

          if (dInicial === dFinal) {
            this.volver();
            return alert('La hora final no puede ser igual que la inicial');
          }

          if (abre < abreComplejo || cierra > cierraComplejo) {
            this.volver();
            return alert('Solo puede reservar en horario que permite el complejo');
          }

          for (var i = 0; i < this.reser.length; i++) {
            var fechInicial = moment__WEBPACK_IMPORTED_MODULE_7__(this.reser[i].horaInicial).format('MM-DD-YYYY H:mm');
            var fechFinal = moment__WEBPACK_IMPORTED_MODULE_7__(this.reser[i].horaFinal).format('MM-DD-YYYY H:mm');

            if (dInicial > fechInicial && dInicial < fechFinal || dFinal > fechInicial && dFinal < fechFinal) {
              this.volver();
              return alert('El horario de ' + fechInicial + ' a ' + fechFinal + ' no esta disponible');
            }

            if (dInicial === fechInicial || dFinal === fechFinal) {
              this.volver();
              return alert('Este horario no esta disponible');
            }
          }

          var inic = moment__WEBPACK_IMPORTED_MODULE_7__(this.hInicio);
          var fin = moment__WEBPACK_IMPORTED_MODULE_7__(this.hFin);
          this.auxHoras = fin.diff(inic, 'hours');

          if (this.auxHoras >= 4) {
            this.volver();
            return alert('No puedes reservar por más de 3 horas.');
          }

          this.auxReser = true;
          return alert('Horario disponible');
        } // --------------------------------------------------------------------------------------------------

      }, {
        key: "volver",
        value: function volver() {
          this.auxReser = false;
        }
      }, {
        key: "validarSiPago",
        value: function validarSiPago() {
          if (this.reservacion.pago === true || this.reservacion.pagoParcial === true) {
            return this.alertaService.alertaInformativa('No puedes cancelar porque ya pagaste.\nComunícate con el encargado del complejo.');
          } else {
            this.eliminarReservacion();
          }
        }
      }, {
        key: "validarSiPago2",
        value: function validarSiPago2() {
          if (this.reservacion.pago === true || this.reservacion.pagoParcial === true) {
            return this.alertaService.alertaInformativa('No puedes hacer cambios porque ya pagaste.\nComunícate con el encargado del complejo.');
          } else {
            this.goSlide3();
          }
        }
      }, {
        key: "clear",
        value: function clear() {
          this.reservacion = new src_models_reservacion_models__WEBPACK_IMPORTED_MODULE_3__["Reservacion"](0, new Date(), new Date(), false, false, 0, '');
        }
      }, {
        key: "valorPagar",
        value: function valorPagar() {
          var inic = moment__WEBPACK_IMPORTED_MODULE_7__(this.reservacion.horaInicial);
          var fin = moment__WEBPACK_IMPORTED_MODULE_7__(this.reservacion.horaFinal);
          this.auxHoras = fin.diff(inic, 'hours');
        } // --------------------------------------------------------------------------------------------------

      }, {
        key: "confirmarCancelacion",
        value: function confirmarCancelacion() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this8 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: '¿Quieres cancelar la reserva?',
                      message: '<strong>Click Ok </strong>',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Okay',
                        handler: function handler() {
                          _this8.validarSiPago();

                          console.log('Confirm Okay');
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "actualizar",
        value: function actualizar() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this9 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.actionSheetController.create({
                      header: 'Actualizar',
                      buttons: [{
                        text: 'Dia reserva',
                        icon: 'calendar',
                        cssClass: 'azul',
                        handler: function handler() {
                          _this9.validarSiPago2();
                        }
                      }, {
                        text: 'Cancelar reserva',
                        icon: 'trash',
                        cssClass: 'rojo',
                        handler: function handler() {
                          _this9.confirmarCancelacion();
                        }
                      }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 2:
                    actionSheet = _context2.sent;
                    _context2.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "pagarParcial",
        value: function pagarParcial() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this10 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      header: 'Confirma el pago',
                      message: '<strong>¿Cuánto quieres pagar</strong>?',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          _this10.parcial = false;
                          _this10.completo = false;
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Pagar 50%',
                        handler: function handler() {
                          _this10.totalPagar = _this10.auxHoras * _this10.cancha.precio * 0.50;
                          _this10.parcial = true;

                          _this10.pagar();

                          console.log(_this10.totalPagar);
                          console.log('Confirm Okay');
                        }
                      }, {
                        text: 'Pagar 100%',
                        handler: function handler() {
                          _this10.totalPagar = _this10.auxHoras * _this10.cancha.precio;
                          _this10.completo = true;

                          _this10.pagar();

                          console.log(_this10.totalPagar);
                          console.log('Confirm Okay');
                        }
                      }]
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        } // ------------------------------------------------------------------------------------------------------------

      }, {
        key: "pagar",
        value: function pagar() {
          var _this11 = this;

          this.payPal.init({
            PayPalEnvironmentProduction: 'TU_ID_DE_CLIENTE_EN_PRODUCCIÓN',
            PayPalEnvironmentSandbox: 'Adx-VcPcx3n-_g5CtBrAa78tHzUAEOoX9C5Tu2xsOVZns8hsuaqAr01SBshIr70HGbIvCAP4KJOtdImR' //Sandbox

          }).then(function () {
            // Entornos: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
            _this11.payPal.prepareToRender('PayPalEnvironmentSandbox', new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_8__["PayPalConfiguration"]({// Solo lo necesitas si necesitas controlar los errores posteriores al login de paypal "Internal Service Error".
              //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
            })).then(function () {
              var cobro = new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_8__["PayPalPayment"](_this11.totalPagar, 'USD', 'Description', 'Reserva');

              _this11.payPal.renderSinglePaymentUI(cobro).then(function () {
                if (_this11.parcial === true) {
                  _this11.reservacion.pagoParcial = true;

                  _this11.modificarReservacion();
                }

                if (_this11.completo === true) {
                  _this11.reservacion.pago = true;

                  _this11.modificarReservacion();
                } // Se ha realizado el cobro correctamente
                // En caso de estar en desarrollo, este el código de la Sandbox
                //
                // {
                //   "client": {
                //     "environment": "sandbox",
                //     "product_name": "PayPal iOS SDK",
                //     "paypal_sdk_version": "2.16.0",
                //     "platform": "iOS"
                //   },
                //   "response_type": "payment",
                //   "response": {
                //     "id": "PAY-XXXXXXXXXXXXXXXXXXXXXXXX",
                //     "state": "approved",
                //     "create_time": "2016-10-03T13:33:33Z",
                //     "intent": "sale"
                //   }
                // }

              }, function () {
                _this11.parcial = false;
                _this11.completo = false; // Ha petado el cuadro de diálogo
              });
            }, function () {
              _this11.parcial = false;
              _this11.completo = false; // Ha petado la configuración
            });
          }, function () {
            _this11.parcial = false;
            _this11.completo = false; // Ha petado la inicialización o el dispositivo no permite usar PayPal
          });
        } // ------------------------------------------------------------------------------------------------------------

      }, {
        key: "goSlide1",
        value: function goSlide1() {
          this.clear();
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
      }, {
        key: "goSlide3",
        value: function goSlide3() {
          this.atras = true;
          this.slides.lockSwipes(false);
          this.slides.slideTo(2);
          this.slides.lockSwipes(true);
        }
      }]);

      return PerfilPage;
    }();

    PerfilPage.ctorParameters = function () {
      return [{
        type: src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviService"]
      }, {
        type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]
      }, {
        type: _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_8__["PayPal"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"]
      }, {
        type: src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_10__["AlertaServiceService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ActionSheetController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slidePrincipal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonSlides"])], PerfilPage.prototype, "slides", void 0);
    PerfilPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-perfil',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./perfil.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./perfil.page.scss */
      "./src/app/pages/perfil/perfil.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviService"], src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"], _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_8__["PayPal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"], src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_10__["AlertaServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ActionSheetController"]])], PerfilPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-perfil-perfil-module-es5.js.map