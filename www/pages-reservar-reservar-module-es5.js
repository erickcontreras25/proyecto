function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reservar-reservar-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reservar/reservar.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reservar/reservar.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesReservarReservarPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header titulo=\"Reservar\" *ngIf=\"!atras\"></app-header>\n\n<ion-header no-border *ngIf=\"atras\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"slideAtras()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"background\">\n\n  <!-- <ion-button (click)=\"obtenerReservaciones()\">MOSTRAR HORARIOS</ion-button>\n  <ion-item *ngFor='let user of reser'>\n    <ion-label>Esta es la hora: : {{user.horaInicial | date:'yyyy-MM-dd HH'}}</ion-label>\n  </ion-item>\n  <ion-item>\n  <ion-label>Hora Inicial</ion-label>\n  <ion-datetime displayFormat=\"D MMM YYYY H\" \n                name=\"horaInicial\"\n                \n                [(ngModel)]=\"reservacion.horaInicial\">\n  </ion-datetime>\n</ion-item>\n\n<h3>{{reservacion.horaInicial}}</h3> -->\n\n  \n\n  <!-- SELECT PARA ELEGIR COMPLEJO -->\n  <!-- <ion-list>\n    <ion-item>\n      <ion-label>Complejo</ion-label>\n      <ion-select [(ngModel)]=\"seleccion\"\n                  (ngModelChange)=\"obtenerCancha()\">\n        <ion-select-option *ngFor=\"let user of complejosAbiertos\" value=\"{{user.idComplejo}}\" >\n          {{user.nombre}}\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-list> -->\n\n\n\n<!-- <form #formulario=\"ngForm\" (ngSubmit)=\"agregarReservacion()\"> -->\n\n  <!-- <ion-list> -->\n\n    <!-- INGRESAR HORA INICIAL Y FINAL DE RESERVACION -->\n    <!-- <ion-item>\n      <ion-label>Hora Inicial</ion-label>\n      <ion-datetime displayFormat=\"HH:mm\" \n                    name=\"horaInicial\"\n                    minuteValues=\"0\" min=\"10:00\" \n                    [(ngModel)]=\"reservacion.horaInicial\">\n      </ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>Hora Final</ion-label>\n      <ion-datetime displayFormat=\"HH:mm\" \n                    name=\"horaFinal\"\n                    minuteValues=\"0\" min=\"11:00\" \n                    [(ngModel)]=\"reservacion.horaFinal\">\n      </ion-datetime>\n    </ion-item> -->\n\n\n    <!-- INGRESAR ID DE LA CANCHA -->\n    <!-- <ion-list>\n      <ion-item>\n        <ion-label>Cancha</ion-label>\n        <ion-select [(ngModel)]=\"reservacion.idCancha\"\n                    (ngModelChange)=\"obtenerCanchaId()\"\n                    name=\"idCancha\">\n          <ion-select-option *ngFor=\"let user of canchas\" value=\"{{user.idCancha}}\" >\n            Lps. {{user.precio}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-list> -->\n\n\n  <!-- BOTONES PARA VER COMPLEJOS Y RESERVAR -->\n  <!-- </ion-list>\n  <ion-row>\n    <ion-col>\n      <ion-button expand=\"full\" type=\"submit\"\n                  shape=\"round\"\n                  size=\"small\"\n                  color=\"tertiary\"\n                  [disabled]=\"formulario.invalid\" \n                  routerLink=\"/inicio\">\n                  Reservar\n      </ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button shape=\"round\"\n                  expand=\"full\"\n                  size=\"small\"\n                  color=\"tertiary\"\n                  routerLink=\"/lista-complejos\">\n        Ver complejos\n      </ion-button>\n    </ion-col>\n  </ion-row> -->\n\n\n    <!-- BOTON GRANDE PARA RESERVAR -->\n  <!-- <ion-button expand=\"full\" type=\"submit\"\n  [disabled]=\"formulario.invalid\" routerLink=\"/inicio\">\n      Reservar\n  </ion-button> -->\n\n<!-- </form> -->\n\n<!-- IMG PARA VISUALIZAR CANCHAS -->\n  <!-- <ion-item>\n    <img src={{canchaId.foto}} alt=\"200\" width=\"500\" class=\"img-rounded\">\n  </ion-item> -->\n\n\n\n\n<!-- AQUI COMIENZA LO NUEVO CON SLIDES -->\n\n<!-- <ion-fab slot=\"fixed\">\n    <ion-fab-button fill=\"outline\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab> -->\n\n\n<ion-slides class=\"mainSlide\" [options]=\"{ autoHeight: true }\" #slidePrincipal>\n    \n  <ion-slide>\n    <ion-grid>\n      <form>\n\n        <ion-row>\n          <ion-col>\n            <!-- <img src=\"/assets/img/im2.png\" alt=\"10\" width=\"20\"> -->\n            <!-- <h1 class=\"ion-text-center\" style=\"color: black;\">Elige el complejo que quieras</h1> -->\n          </ion-col>\n        </ion-row>\n      \n        <ion-row>\n          <ion-col>\n            \n              <div *ngFor='let user of complejos' style=\"background-color: rgb(211, 197, 197, 0.05);\">\n                <br>\n                <img src=\"{{user.foto}}\" style=\"alt: 400px; width: 100%;\">\n                <h2 class=\"shadow\" style=\"color: white;\">\n                  {{user.nombre}}\n                </h2>\n                <ion-row>\n                  <ion-col *ngIf='user.estado == true'><label class=\"shadow\" style=\"color: blue;\">Abierto Ahora</label></ion-col>\n                  <ion-col *ngIf='user.estado == false'><label class=\"shadow\" style=\"color: blue;\">Cerrado Ahora</label></ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col *ngIf=\"user.parqueo\">\n                    <label class=\"shadow\" style=\"color: white;\">Con parqueo</label>\n                  </ion-col>\n                  <ion-col *ngIf=\"!user.parqueo\">\n                    <label class=\"shadow\" style=\"color: white;\">Sin parqueo</label>\n                  </ion-col>\n                  <ion-col *ngIf=\"user.seguridad\">\n                    <label class=\"shadow\" style=\"color: white;\">Con seguridad</label>\n                  </ion-col>\n                  <ion-col *ngIf=\"!user.seguridad\">\n                    <label class=\"shadow\" style=\"color: white;\">Sin seguridad</label>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <label class=\"shadow\" style=\"color: white;\">\n                      <ion-icon class=\"size\" name=\"location-outline\" style=\"color: red;\"></ion-icon>\n                         {{user.localidad }}\n                    </label>\n                  </ion-col>\n                  <ion-col>\n                    <label class=\"shadow\" style=\"color: white;\">\n                      <ion-icon class=\"size\" name=\"call-outline\" style=\"color: red;\"></ion-icon>\n                         {{user.numero }}\n                    </label>\n                  </ion-col>\n                </ion-row>\n                \n                \n                \n                <ion-button type=\"submit\"\n                        color=\"success\"\n                        shape=\"round\"\n                        (click)=\"obtenerCanchasComplejo(user.idComplejo)\"\n                        >\n              Elegir cancha\n            </ion-button>\n\n              </div>\n          </ion-col>\n        </ion-row>\n\n      </form>\n    </ion-grid>    \n  </ion-slide>\n\n  <!-- ----------------------------------------SLIDE CANCHAS----------------------------------------------- -->\n  <ion-slide>\n    <ion-grid>\n          <form>\n            <ion-row>\n              <ion-col>\n                <!-- <img src=\"/assets/img/im2.png\"> -->\n                <!-- <h1 class=\"ion-text-center\" style=\"color: black;\">Elige la cancha que mas te guste</h1> -->\n              </ion-col>\n            </ion-row>\n\n\n              <ion-row>\n                  <ion-col>  \n\n                      <div *ngFor='let user of canchas'>\n                          <img src=\"{{user.foto}}\" alt=\"200\" width=\"500\">\n                          <ion-card-title class=\"shadow\">\n                            Precio/hora: Lps.{{user.precio}}.00\n                          </ion-card-title>\n                          <h6 class=\"shadow\" style=\"color: white;\">\n                            Cancha {{user.tamanioCancha}}\n                          </h6>\n                        \n                          <ion-button type=\"submit\"\n                            color=\"success\"\n                            shape=\"round\"\n                            \n                            (click)=\"obtenerCancha(user.idCancha)\"\n                            (click)=\"goHorarios()\">\n                            Elegir hora\n                          </ion-button>\n                          \n                      </div>\n                  </ion-col>\n              </ion-row>\n\n              \n          </form>\n      </ion-grid>\n\n    </ion-slide>\n\n\n<!-- -------------------------------SLIDE HORARIOS------------------------------------- -->\n    <ion-slide>\n      <ion-grid fixed>\n            <form>\n                <ion-row>\n                  <ion-col>\n                    <h3 style=\"color: white; border-radius : 10px;\">\n                    En este complejo puede reservar en horario de <b style=\"color: red;\">{{complejo.horaInicio | date:'HH'}}:00</b>\n                     a \n                     <b style=\"color: red;\">{{complejo.horaCierre | date:'HH'}}:00</b>\n                  </h3>\n                  </ion-col>\n                </ion-row>\n\n                <ion-row>\n                    <ion-col>  \n  \n                      <ion-item>\n                        <ion-label>Hora Inicial</ion-label>\n                        <ion-datetime displayFormat=\"D MMM YYYY HH:mm\" \n                                      name=\"horaInicial\"\n                                      minuteValues=\"0\" min=\"10:00\" \n                                      [(ngModel)]=\"reservacion.horaInicial\"\n                                      (ngModelChange)=\"volver()\">\n                        </ion-datetime>\n                      </ion-item>\n                      <ion-item>\n                        <ion-label>Hora Final</ion-label>\n                        <ion-datetime displayFormat=\"D MMM YYYY HH:mm\" \n                                      name=\"horaFinal\"\n                                      minuteValues=\"0\" min=\"11:00\" \n                                      [(ngModel)]=\"reservacion.horaFinal\"\n                                      (ngModelChange)=\"volver()\">\n                        </ion-datetime>\n                      </ion-item>\n                        \n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                  <!-- <ion-col>\n                    <ion-button type=\"submit\"\n                                color=\"tertiary\"\n                                shape=\"round\"\n                                (click)=\"goCancha()\">\n                        Regresar\n                    </ion-button>\n                </ion-col> -->\n                <ion-col>\n                  <ion-button type=\"submit\"\n                              color=\"success\"\n                              (click)=\"validarFecha()\">\n                              Verificar Horario\n                  </ion-button>\n              </ion-col>\n                <ion-col>\n                    <ion-button type=\"submit\"\n                                color=\"success\"\n                                *ngIf=\"auxReser==true\"\n                                (click)=\"llenar()\"\n                                (click)=\"goReservar()\">\n                        Ver resumen\n                    </ion-button>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <h3 style=\"color: white;\">Estas reservando por un tiempo de </h3>\n                <!-- <h3 style=\"text-shadow: 1px 1px 1px black; color: black;\">Estas reservando por un tiempo de </h3> -->\n                <h2 *ngIf=\"auxHoras!=null\" style=\"color: red;\">{{auxHoras}} horas</h2>\n              </ion-col>\n            </ion-row>\n            <!-- <ion-row>\n              <ion-col>\n                <ion-button (click)=\"validarFecha()\">Verificar Horario</ion-button>\n              </ion-col>\n            </ion-row> -->\n            </form>\n        </ion-grid>\n  \n      </ion-slide>\n\n\n<!-- ----------------------------------SLIDE RESUMEN---------------------------------------- -->\n    <ion-slide>\n      <ion-grid fixed>\n            <form>\n              <ion-row>\n                <ion-col>\n                  <!-- <img src=\"/assets/img/im2.png\"> -->\n                </ion-col>\n              </ion-row>\n                <div>\n\n                      <ion-grid>\n                        <h1 class=\"shadow\">Detalle de la reserva</h1>\n                        <h3 class=\"borA shadow\">Informacion Complejo</h3>\n                        <ion-row class=\"borA\">\n                          <ion-col class=\"izquierda\">\n                            <label class=\"shadow\">Nombre:</label>\n                          </ion-col>\n                          <ion-col class=\"izquierda\">\n                            <label class=\"shadow\">{{complejo.nombre}}</label>\n                          </ion-col>\n                        </ion-row>\n                        <ion-row class=\"borA\">\n                          <ion-col class=\"izquierda\">\n                            <label class=\"shadow\">Dia y hora de reserva:</label>\n                          </ion-col>\n                          <ion-col class=\"izquierda\">\n                            <label class=\"shadow\">{{reservacion.horaInicial | date:'MMMM-dd HH:mm'}} a {{reservacion.horaFinal | date:'HH:mm'}}</label>\n                          </ion-col>\n                        </ion-row>                        \n                          \n                        <ion-row class=\"borA\">\n                          <ion-col class=\"izquierda\">\n                            <label class=\"shadow\">Total a pagar:</label>\n                          </ion-col>\n                          <ion-col class=\"izquierda\">\n                            <label class=\"shadow\">Lps.{{canchaId.precio * auxHoras}}.00</label>\n                          </ion-col>\n                        </ion-row>\n                        <ion-row class=\"borA\">\n                          <ion-col class=\"izquierda\">\n                            <label class=\"shadow\"> Direccion:</label>\n                          </ion-col>\n                          <ion-col class=\"izquierda\">\n                            <label class=\"shadow\">{{complejo.localidad}}</label>\n                          </ion-col>\n                        </ion-row>\n                        <ion-row>\n                          <ion-col>\n                            <label class=\"shadow\">Telefono:</label>\n                          </ion-col>\n                          <ion-col>\n                            <label class=\"shadow\">{{complejo.numero}}</label>\n                          </ion-col>\n                        </ion-row>\n                        \n                      </ion-grid>\n\n                      <ion-grid>\n                        <h3 class=\"borA shadow\">Datos Personales</h3>\n\n                        <ion-row class=\"borA\">\n                          <ion-col class=\"izquierda\">\n                            <label class=\"shadow\">Usuario:</label>\n                          </ion-col>\n                          <ion-col class=\"izquierda\">\n                            <label class=\"shadow\">{{perfil.nombreUsuario}}</label>\n                          </ion-col>\n                        </ion-row>\n                        <ion-row class=\"borA\">\n                          <ion-col class=\"izquierda\">\n                            <label class=\"shadow\">Correo:</label>\n                          </ion-col>\n                          <ion-col class=\"izquierda\">\n                            <label class=\"shadow\">{{perfil.email}}</label>\n                          </ion-col>\n                        </ion-row>\n                        <ion-row>\n                          <ion-col>\n\n                          </ion-col>\n                          <ion-col>\n                            \n                          </ion-col>\n                        </ion-row>\n                      </ion-grid>\n\n                      <!-- <ion-card class=\"ion-text-center\" style=\"background-color: rgb(236, 236, 243); border-radius : 10px;\">\n                          <h3 class=\"ion-text-center\">Complejo: {{complejo.nombre}}</h3>\n                          <h6>\n                            <ion-icon class=\"size\" name=\"calendar-outline\" color=\"secondary\"></ion-icon>\n                                Dia y hora de reserva:\n                          </h6>\n                          <h6>{{reservacion.horaInicial | date:'MMMM-dd HH:mm'}} a {{reservacion.horaFinal | date:'HH:mm'}}</h6>\n                          <h6>\n                            <ion-icon class=\"size\" name=\"cash-outline\" color=\"success\"></ion-icon>\n                              Total a pagar:\n                          </h6>\n                          <h6>Lps.{{canchaId.precio * auxHoras}}.00</h6>                          \n                          <h6>\n                            <ion-icon class=\"size\" name=\"location-outline\" color=\"primary\"></ion-icon>\n                              Direccion:\n                          </h6>\n                          <h6>{{complejo.localidad}}</h6>\n                          \n\n                      </ion-card> -->\n  \n                      \n                        \n                </div>\n\n              <ion-row>\n                <ion-col>\n                    <ion-button type=\"submit\"\n                                color=\"success\"\n                                shape=\"round\"\n                                expand=\"full\"\n                                (click)=\"agregarReservacion()\">\n                        Confirmar Reserva\n                    </ion-button>\n                </ion-col>\n            </ion-row>\n            </form>\n        </ion-grid>\n  \n      </ion-slide>\n\n\n\n</ion-slides>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/pages/reservar/reservar-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/reservar/reservar-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ReservarPageRoutingModule */

  /***/
  function srcAppPagesReservarReservarRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReservarPageRoutingModule", function () {
      return ReservarPageRoutingModule;
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


    var _reservar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./reservar.page */
    "./src/app/pages/reservar/reservar.page.ts");

    var routes = [{
      path: '',
      component: _reservar_page__WEBPACK_IMPORTED_MODULE_3__["ReservarPage"]
    }];

    var ReservarPageRoutingModule = function ReservarPageRoutingModule() {
      _classCallCheck(this, ReservarPageRoutingModule);
    };

    ReservarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ReservarPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/reservar/reservar.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/reservar/reservar.module.ts ***!
    \***************************************************/

  /*! exports provided: ReservarPageModule */

  /***/
  function srcAppPagesReservarReservarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReservarPageModule", function () {
      return ReservarPageModule;
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


    var _reservar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./reservar-routing.module */
    "./src/app/pages/reservar/reservar-routing.module.ts");
    /* harmony import */


    var _reservar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./reservar.page */
    "./src/app/pages/reservar/reservar.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var ReservarPageModule = function ReservarPageModule() {
      _classCallCheck(this, ReservarPageModule);
    };

    ReservarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _reservar_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReservarPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_reservar_page__WEBPACK_IMPORTED_MODULE_6__["ReservarPage"]]
    })], ReservarPageModule);
    /***/
  },

  /***/
  "./src/app/pages/reservar/reservar.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/reservar/reservar.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesReservarReservarPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content.background {\n  --background: url(/assets/img/fondograma1.jpg) 0 0/100% 100% no-repeat;\n  opacity: 0.8;\n}\n\nion-icon.size {\n  font-size: 27px;\n}\n\n.borA {\n  border-bottom: white 1px solid;\n}\n\n.bor {\n  border-bottom: white 1px solid;\n  border-left: white 1px solid;\n  border-right: white 1px solid;\n}\n\n.bort {\n  border-bottom: white 1px solid;\n  border-left: white 1px solid;\n  border-right: white 1px solid;\n  border-top: white 1px solid;\n}\n\n.centrado {\n  text-align: center;\n}\n\n.derecha {\n  text-align: right;\n}\n\n.izquierda {\n  text-align: left;\n}\n\nion-icon.size {\n  font-size: 30px;\n}\n\n.shadow {\n  text-shadow: 2px 2px #080808;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzZXJ2YXIvQzpcXFVzZXJzXFxlcmlja1xcT25lRHJpdmVcXERlc2t0b3BcXGlvbmljXFxwcm95ZWN0by9zcmNcXGFwcFxccGFnZXNcXHJlc2VydmFyXFxyZXNlcnZhci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Jlc2VydmFyL3Jlc2VydmFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNFQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksOEJBQUE7QUNDSjs7QURFQTtFQUNJLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ0NKOztBREVFO0VBQ0UsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtBQ0VKOztBREFBO0VBQ0ksZ0JBQUE7QUNHSjs7QURBQTtFQUNJLGVBQUE7QUNHSjs7QURBQTtFQUNJLDRCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXNlcnZhci9yZXNlcnZhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudC5iYWNrZ3JvdW5ke1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvZm9uZG9ncmFtYTEuanBnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuICAgIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuaW9uLWljb24uc2l6ZSB7XHJcbiAgICBmb250LXNpemU6IDI3cHg7XHJcbn1cclxuXHJcbi5ib3JBIHtcclxuICAgIGJvcmRlci1ib3R0b206IHdoaXRlIDFweCBzb2xpZDtcclxufVxyXG5cclxuLmJvciB7XHJcbiAgICBib3JkZXItYm90dG9tOiB3aGl0ZSAxcHggc29saWQ7XHJcbiAgICBib3JkZXItbGVmdDogd2hpdGUgMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiB3aGl0ZSAxcHggc29saWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3J0IHtcclxuICAgIGJvcmRlci1ib3R0b206IHdoaXRlIDFweCBzb2xpZDtcclxuICAgIGJvcmRlci1sZWZ0OiB3aGl0ZSAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IHdoaXRlIDFweCBzb2xpZDtcclxuICAgIGJvcmRlci10b3A6IHdoaXRlIDFweCBzb2xpZDtcclxuICB9XHJcblxyXG4uY2VudHJhZG97XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4uZGVyZWNoYXtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5penF1aWVyZGF7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5pb24taWNvbi5zaXplIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLnNoYWRvdyB7XHJcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAjMDgwODA4O1xyXG4gIH0iLCJpb24tY29udGVudC5iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvZm9uZG9ncmFtYTEuanBnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbiAgb3BhY2l0eTogMC44O1xufVxuXG5pb24taWNvbi5zaXplIHtcbiAgZm9udC1zaXplOiAyN3B4O1xufVxuXG4uYm9yQSB7XG4gIGJvcmRlci1ib3R0b206IHdoaXRlIDFweCBzb2xpZDtcbn1cblxuLmJvciB7XG4gIGJvcmRlci1ib3R0b206IHdoaXRlIDFweCBzb2xpZDtcbiAgYm9yZGVyLWxlZnQ6IHdoaXRlIDFweCBzb2xpZDtcbiAgYm9yZGVyLXJpZ2h0OiB3aGl0ZSAxcHggc29saWQ7XG59XG5cbi5ib3J0IHtcbiAgYm9yZGVyLWJvdHRvbTogd2hpdGUgMXB4IHNvbGlkO1xuICBib3JkZXItbGVmdDogd2hpdGUgMXB4IHNvbGlkO1xuICBib3JkZXItcmlnaHQ6IHdoaXRlIDFweCBzb2xpZDtcbiAgYm9yZGVyLXRvcDogd2hpdGUgMXB4IHNvbGlkO1xufVxuXG4uY2VudHJhZG8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kZXJlY2hhIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5penF1aWVyZGEge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5pb24taWNvbi5zaXplIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uc2hhZG93IHtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggIzA4MDgwODtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/reservar/reservar.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/reservar/reservar.page.ts ***!
    \*************************************************/

  /*! exports provided: ReservarPage */

  /***/
  function srcAppPagesReservarReservarPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReservarPage", function () {
      return ReservarPage;
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


    var src_models_complejo_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/models/complejo.models */
    "./src/models/complejo.models.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/usuario.service */
    "./src/app/services/usuario.service.ts");
    /* harmony import */


    var src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/alerta-service.service */
    "./src/app/services/alerta-service.service.ts");
    /* harmony import */


    var src_app_services_torneo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/torneo.service */
    "./src/app/services/torneo.service.ts");
    /* harmony import */


    var src_models_torneo_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/models/torneo.models */
    "./src/models/torneo.models.ts");

    var ReservarPage =
    /*#__PURE__*/
    function () {
      function ReservarPage(apiServi, usuarioService, navCtrl, alertaService, torneoService) {
        _classCallCheck(this, ReservarPage);

        this.apiServi = apiServi;
        this.usuarioService = usuarioService;
        this.navCtrl = navCtrl;
        this.alertaService = alertaService;
        this.torneoService = torneoService;
        this.atras = false;
        this.aux = false;
        this.auxReser = false; // complejo = {
        //   idComplejo: 0,
        //   nombre: '',
        //   localidad: '',
        //   foto: null,
        //   estado: false,
        //   longitud: 0,
        //   latitud: 0,
        //   horaInicio: new Date(),
        //   horaCierre: new Date(),
        //   userId: ''
        // };

        this.complejo = new src_models_complejo_models__WEBPACK_IMPORTED_MODULE_3__["Complejo"](0, '', '', null, '', false, 0.0, 0.0, new Date(), new Date(), false, false, '');
        this.canchaId = {
          idCancha: 0,
          precio: null,
          foto: null,
          idComplejo: null
        };
        this.reservaciones = [];
        this.reser = [];
        this.reservacion = {
          idReservacion: 0,
          horaInicial: new Date(),
          horaFinal: new Date(),
          pago: false,
          pagoParcial: false,
          idCancha: 0,
          userId: ''
        };
        this.torneo = new src_models_torneo_models__WEBPACK_IMPORTED_MODULE_9__["Torneo"](0, '', null, '', '', new Date(), '', 0);
      }

      _createClass(ReservarPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.perfil = this.usuarioService.getUsuario();
          this.slides.lockSwipes(true);
          this.reservacion.userId = this.perfil.id;
          console.log('ESTE ES EL ID OBTENIDO > > ' + this.reservacion.userId);
          this.obtenerComplejos();
          this.obtenerComplejoEstado();
        } // ---------------METODOS COMPLEJO------------------------------------------------

      }, {
        key: "obtenerComplejos",
        value: function obtenerComplejos() {
          var _this = this;

          this.apiServi.getComplejo().subscribe(function (resp) {
            _this.complejos = resp;
            console.log('SERVICIO ', resp);
          });
        }
      }, {
        key: "obtenerComplejoEstado",
        value: function obtenerComplejoEstado() {
          var _this2 = this;

          this.apiServi.getComplejoEstado(true).subscribe(function (resp) {
            _this2.complejosAbiertos = resp;
          });
        }
      }, {
        key: "obtenerComplejoId",
        value: function obtenerComplejoId(id) {
          var _this3 = this;

          this.apiServi.getComplejoId(id).subscribe(function (resp) {
            _this3.complejo = resp;

            _this3.goCancha();

            _this3.getTorneoId(id); // console.log(this.complejo);

          });
        } // ----------------------METODOS RESERVAR-----------------------------------

      }, {
        key: "obtenerReservacionId",
        value: function obtenerReservacionId() {
          this.apiServi.getReservacionId(this.reservacion.idReservacion).subscribe(function (resp) {
            console.log('EJECUTADO CON EXITO');
          });
        }
      }, {
        key: "agregarReservacion",
        value: function agregarReservacion() {
          var _this4 = this;

          this.apiServi.postReservacion(this.reservacion).subscribe(function (data) {
            _this4.reservaciones.push(_this4.reservacion);

            _this4.reservacion = {
              idReservacion: 0,
              horaInicial: new Date(),
              horaFinal: new Date(),
              pago: false,
              pagoParcial: false,
              idCancha: 0,
              userId: ''
            };

            _this4.alertaService.alertaInformativa('Su reserva se realizo con exito. \n Puede verla ingresando a su Mi Perfil en Mis Reservas');

            _this4.navCtrl.navigateRoot('/inicio');
          }, function (error) {
            console.log(error);
            window.alert('Ingrese los datos correctamente');
          });
        }
      }, {
        key: "modificarReservacion",
        value: function modificarReservacion() {
          var _this5 = this;

          this.apiServi.putReservacion(this.reservacion.idReservacion, this.reservacion).subscribe(function (data) {
            _this5.reservaciones.push(_this5.reservacion);

            _this5.reservacion = {
              idReservacion: 0,
              horaInicial: new Date(),
              horaFinal: new Date(),
              pago: false,
              pagoParcial: false,
              idCancha: 0,
              userId: ''
            };
            window.alert('ACTUALIZADO CON EXITO');
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "eliminarReservacion",
        value: function eliminarReservacion() {
          this.apiServi.deleteReservacion(this.reservacion.idReservacion).subscribe(function (resp) {
            console.log('ELIMINADO CON EXITO');
          });
        }
      }, {
        key: "volver",
        value: function volver() {
          this.auxReser = false;
        } // ----------------------------METODOS CANCHAS-----------------------------------

      }, {
        key: "obtenerCanchasComplejo",
        value: function obtenerCanchasComplejo(id) {
          var _this6 = this;

          this.apiServi.getCanchaComplejo(id).subscribe(function (resp) {
            _this6.canchas = resp;

            _this6.obtenerComplejoId(id); // console.log('CANCHAS ', this.canchas);

          });
        }
      }, {
        key: "obtenerCanchaId",
        value: function obtenerCanchaId(id) {
          var _this7 = this;

          this.apiServi.getCanchaId(id).subscribe(function (resp) {
            _this7.canchaId = resp;
            _this7.reservacion.idCancha = _this7.canchaId.idCancha;
          });
        }
      }, {
        key: "obtenerReservas",
        value: function obtenerReservas(id) {
          var _this8 = this;

          this.apiServi.getReservacionComplejo(id).subscribe(function (resp) {
            _this8.reser = resp;
            console.log(_this8.reser);
          });
        }
      }, {
        key: "getTorneoId",
        value: function getTorneoId(id) {
          var _this9 = this;

          this.torneoService.getTorneooId(id).subscribe(function (resp) {
            _this9.torneo = resp; // console.log(resp);
          });
        }
      }, {
        key: "validarFecha",
        value: function validarFecha() {
          var ini = moment__WEBPACK_IMPORTED_MODULE_5__().format('MM-DD-YYYY HH:mm');
          var dInicial = moment__WEBPACK_IMPORTED_MODULE_5__(this.reservacion.horaInicial).format('MM-DD-YYYY HH:mm');
          var dFinal = moment__WEBPACK_IMPORTED_MODULE_5__(this.reservacion.horaFinal).format('MM-DD-YYYY HH:mm');
          var abre = moment__WEBPACK_IMPORTED_MODULE_5__(this.reservacion.horaInicial).format('HH');
          var cierra = moment__WEBPACK_IMPORTED_MODULE_5__(this.reservacion.horaFinal).format('HH');
          var abreComplejo = moment__WEBPACK_IMPORTED_MODULE_5__(this.complejo.horaInicio).format('HH');
          var cierraComplejo = moment__WEBPACK_IMPORTED_MODULE_5__(this.complejo.horaCierre).format('HH');
          var diaReserva = moment__WEBPACK_IMPORTED_MODULE_5__(this.reservacion.horaInicial).format('MM-DD-YYYY');

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
          } // if (this.torneo.diaTorneo !== null || this.torneo.diaTorneo !== undefined) {
          //   if (diaReserva === moment(this.torneo.diaTorneo).format('MM-DD-YYYY')) {
          //     return alert('Este dia no esta disponible ya que se realizará un torneo');
          //   }
          // }


          for (var i = 0; i < this.reser.length; i++) {
            var fechInicial = moment__WEBPACK_IMPORTED_MODULE_5__(this.reser[i].horaInicial).format('MM-DD-YYYY H:mm');
            var fechFinal = moment__WEBPACK_IMPORTED_MODULE_5__(this.reser[i].horaFinal).format('MM-DD-YYYY H:mm');

            if (dInicial > fechInicial && dInicial < fechFinal || dFinal > fechInicial && dFinal < fechFinal) {
              this.volver();
              return alert('El horario de ' + fechInicial + ' a ' + fechFinal + ' no esta disponible');
            }

            if (dInicial === fechInicial || dFinal === fechFinal) {
              this.volver();
              return alert('Este horario no esta disponible');
            }
          }

          var inic = moment__WEBPACK_IMPORTED_MODULE_5__(this.reservacion.horaInicial);
          var fin = moment__WEBPACK_IMPORTED_MODULE_5__(this.reservacion.horaFinal);
          this.auxHoras = fin.diff(inic, 'hours');

          if (this.auxHoras >= 4) {
            this.volver();
            return alert('No puedes reservar por más de 3 horas.');
          }

          this.auxReser = true;
          return alert('Horario disponible');
        } // -------------------------------METODOS OBTENER------------------

      }, {
        key: "idCancha",
        value: function idCancha(id) {
          this.reservacion.idCancha = id;
        } // precioCancha(precio: number) {
        //   this.seleccion = precio;
        // }
        // nombreComplejo(nombre: string) {
        //   this.complejo.nombre = nombre;
        // }
        // localidadComplejo(local: string) {
        //   this.complejo.localidad = local;
        // }

      }, {
        key: "obtenerComplejo",
        value: function obtenerComplejo(id) {
          this.obtenerComplejoId(id);
        }
      }, {
        key: "obtenerCancha",
        value: function obtenerCancha(id) {
          this.obtenerCanchaId(id);
          this.obtenerReservas(id);
        }
      }, {
        key: "llenar",
        value: function llenar() {
          this.reservacion.idCancha = this.canchaId.idCancha;
        } // -------------------------------------------------SLIDE--------------------------------

      }, {
        key: "goComplejos",
        value: function goComplejos() {
          this.atras = false;
          this.slides.lockSwipes(false);
          this.slides.slideTo(0);
          this.slides.lockSwipes(true);
        }
      }, {
        key: "goCancha",
        value: function goCancha() {
          this.atras = true;
          this.auxReser = false;
          this.slides.lockSwipes(false);
          this.slides.slideTo(1);
          this.slides.lockSwipes(true);
        }
      }, {
        key: "goHorarios",
        value: function goHorarios() {
          // this.obtenerReservas();
          this.slides.lockSwipes(false);
          this.slides.slideTo(2);
          this.slides.lockSwipes(true);
        }
      }, {
        key: "goReservar",
        value: function goReservar() {
          this.slides.lockSwipes(false);
          this.slides.slideTo(3);
          this.slides.lockSwipes(true);
        }
      }, {
        key: "slideAtras",
        value: function slideAtras() {
          var _this10 = this;

          this.slides.lockSwipes(false);
          this.slides.slidePrev();
          this.slides.lockSwipes(true);
          this.slides.isBeginning().then(function (data) {
            if (data === true) {
              _this10.atras = false;
            }
          });
        }
      }]);

      return ReservarPage;
    }();

    ReservarPage.ctorParameters = function () {
      return [{
        type: src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviService"]
      }, {
        type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_7__["AlertaServiceService"]
      }, {
        type: src_app_services_torneo_service__WEBPACK_IMPORTED_MODULE_8__["TorneoService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slidePrincipal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"])], ReservarPage.prototype, "slides", void 0);
    ReservarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reservar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reservar.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reservar/reservar.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reservar.page.scss */
      "./src/app/pages/reservar/reservar.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviService"], src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_7__["AlertaServiceService"], src_app_services_torneo_service__WEBPACK_IMPORTED_MODULE_8__["TorneoService"]])], ReservarPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-reservar-reservar-module-es5.js.map