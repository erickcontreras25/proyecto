(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reservar-reservar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reservar/reservar.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reservar/reservar.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"Reservar\" *ngIf=\"!atras\"></app-header>\n\n<ion-header no-border *ngIf=\"atras\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"slideAtras()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"background\">\n\n  <!-- <ion-button (click)=\"obtenerReservaciones()\">MOSTRAR HORARIOS</ion-button>\n  <ion-item *ngFor='let user of reser'>\n    <ion-label>Esta es la hora: : {{user.horaInicial | date:'yyyy-MM-dd HH'}}</ion-label>\n  </ion-item>\n  <ion-item>\n  <ion-label>Hora Inicial</ion-label>\n  <ion-datetime displayFormat=\"D MMM YYYY H\" \n                name=\"horaInicial\"\n                \n                [(ngModel)]=\"reservacion.horaInicial\">\n  </ion-datetime>\n</ion-item>\n\n<h3>{{reservacion.horaInicial}}</h3> -->\n\n  \n\n  <!-- SELECT PARA ELEGIR COMPLEJO -->\n  <!-- <ion-list>\n    <ion-item>\n      <ion-label>Complejo</ion-label>\n      <ion-select [(ngModel)]=\"seleccion\"\n                  (ngModelChange)=\"obtenerCancha()\">\n        <ion-select-option *ngFor=\"let user of complejosAbiertos\" value=\"{{user.idComplejo}}\" >\n          {{user.nombre}}\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-list> -->\n\n\n\n<!-- <form #formulario=\"ngForm\" (ngSubmit)=\"agregarReservacion()\"> -->\n\n  <!-- <ion-list> -->\n\n    <!-- INGRESAR HORA INICIAL Y FINAL DE RESERVACION -->\n    <!-- <ion-item>\n      <ion-label>Hora Inicial</ion-label>\n      <ion-datetime displayFormat=\"HH:mm\" \n                    name=\"horaInicial\"\n                    minuteValues=\"0\" min=\"10:00\" \n                    [(ngModel)]=\"reservacion.horaInicial\">\n      </ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>Hora Final</ion-label>\n      <ion-datetime displayFormat=\"HH:mm\" \n                    name=\"horaFinal\"\n                    minuteValues=\"0\" min=\"11:00\" \n                    [(ngModel)]=\"reservacion.horaFinal\">\n      </ion-datetime>\n    </ion-item> -->\n\n\n    <!-- INGRESAR ID DE LA CANCHA -->\n    <!-- <ion-list>\n      <ion-item>\n        <ion-label>Cancha</ion-label>\n        <ion-select [(ngModel)]=\"reservacion.idCancha\"\n                    (ngModelChange)=\"obtenerCanchaId()\"\n                    name=\"idCancha\">\n          <ion-select-option *ngFor=\"let user of canchas\" value=\"{{user.idCancha}}\" >\n            Lps. {{user.precio}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-list> -->\n\n\n  <!-- BOTONES PARA VER COMPLEJOS Y RESERVAR -->\n  <!-- </ion-list>\n  <ion-row>\n    <ion-col>\n      <ion-button expand=\"full\" type=\"submit\"\n                  shape=\"round\"\n                  size=\"small\"\n                  color=\"tertiary\"\n                  [disabled]=\"formulario.invalid\" \n                  routerLink=\"/inicio\">\n                  Reservar\n      </ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button shape=\"round\"\n                  expand=\"full\"\n                  size=\"small\"\n                  color=\"tertiary\"\n                  routerLink=\"/lista-complejos\">\n        Ver complejos\n      </ion-button>\n    </ion-col>\n  </ion-row> -->\n\n\n    <!-- BOTON GRANDE PARA RESERVAR -->\n  <!-- <ion-button expand=\"full\" type=\"submit\"\n  [disabled]=\"formulario.invalid\" routerLink=\"/inicio\">\n      Reservar\n  </ion-button> -->\n\n<!-- </form> -->\n\n<!-- IMG PARA VISUALIZAR CANCHAS -->\n  <!-- <ion-item>\n    <img src={{canchaId.foto}} alt=\"200\" width=\"500\" class=\"img-rounded\">\n  </ion-item> -->\n\n\n\n\n<!-- AQUI COMIENZA LO NUEVO CON SLIDES -->\n\n<!-- <ion-fab slot=\"fixed\">\n    <ion-fab-button fill=\"outline\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab> -->\n\n\n<ion-slides class=\"mainSlide\" [options]=\"{ autoHeight: true }\" #slidePrincipal>\n    \n  <ion-slide>\n    <ion-grid>\n      <form>\n\n        <ion-row>\n          <ion-col>\n            <!-- <img src=\"/assets/img/im2.png\" alt=\"10\" width=\"20\"> -->\n            <!-- <h1 class=\"ion-text-center\" style=\"color: black;\">Elige el complejo que quieras</h1> -->\n          </ion-col>\n        </ion-row>\n      \n        <ion-row>\n          <ion-col>\n            \n              <div class=\"borA\" *ngFor='let user of complejos' style=\"background-color: rgb(211, 197, 197, 0);\">\n                <br>\n                <img class=\"img\" src=\"{{user.foto}}\">\n                <h2 class=\"shadow\" style=\"color: white;\">\n                  {{user.nombre}}\n                </h2>\n                <ion-row>\n                  <ion-col *ngIf='user.estado == true'><label class=\"shadow\" style=\"color: blue;\">Abierto Ahora</label></ion-col>\n                  <ion-col *ngIf='user.estado == false'><label class=\"shadow\" style=\"color: blue;\">Cerrado Ahora</label></ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col *ngIf=\"user.parqueo\">\n                    <label><ion-icon class=\"size\" name=\"car-outline\" color=\"tertiary\"></ion-icon>\n                      Con parqueo</label>\n                  </ion-col>\n                  <ion-col *ngIf=\"!user.parqueo\">\n                    <label><ion-icon class=\"size\" name=\"car-outline\" color=\"tertiary\"></ion-icon>\n                      Sin parqueo</label>\n                  </ion-col>\n                  <ion-col *ngIf=\"user.seguridad\">\n                    <label><ion-icon class=\"size\" name=\"lock-closed-outline\" color=\"danger\"></ion-icon>\n                      Con seguridad</label>\n                  </ion-col>\n                  <ion-col *ngIf=\"!user.seguridad\">\n                    <label><ion-icon class=\"size\" name=\"lock-open-outline\" color=\"danger\"></ion-icon>\n                      Sin seguridad</label>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <label style=\"color: white;\">\n                      <ion-icon class=\"size\" name=\"location-outline\" style=\"color: red;\"></ion-icon>\n                         {{user.localidad }}\n                    </label>\n                  </ion-col>\n                  <ion-col>\n                    <label style=\"color: white;\">\n                      <ion-icon class=\"size\" name=\"call-outline\" style=\"color: red;\"></ion-icon>\n                         {{user.numero }}\n                    </label>\n                  </ion-col>\n                </ion-row>\n                \n                \n                \n                <ion-button type=\"submit\"\n                        color=\"success\"\n                        shape=\"round\"\n                        (click)=\"obtenerCanchasComplejo(user.idComplejo)\"\n                        >\n              Elegir cancha\n            </ion-button>\n            <br>\n\n              </div>\n          </ion-col>\n        </ion-row>\n\n      </form>\n    </ion-grid>    \n  </ion-slide>\n\n  <!-- ----------------------------------------SLIDE CANCHAS----------------------------------------------- -->\n  <ion-slide>\n    <ion-grid>\n          <form>\n            <ion-row>\n              <ion-col>\n                <!-- <img src=\"/assets/img/im2.png\"> -->\n                <!-- <h1 class=\"ion-text-center\" style=\"color: black;\">Elige la cancha que mas te guste</h1> -->\n              </ion-col>\n            </ion-row>\n\n\n              <ion-row>\n                  <ion-col>  \n\n                      <div class=\"borA\" *ngFor='let user of canchas' style=\"background-color: rgb(211, 197, 197, 0);\">\n                        <br>  \n                        <img class=\"img\" src=\"{{user.foto}}\">\n                          <h2>\n                            Precio/hora: Lps.{{user.precio}}.00\n                          </h2>\n                          <h6>\n                            Cancha {{user.tamanioCancha}}\n                          </h6>\n                        \n                          <ion-button type=\"submit\"\n                            color=\"success\"\n                            shape=\"round\"\n                            (click)=\"obtenerCancha(user.idCancha)\"\n                            (click)=\"goHorarios()\">\n                            Elegir hora\n                          </ion-button>\n                          \n                      </div>\n                  </ion-col>\n              </ion-row>\n\n              \n          </form>\n      </ion-grid>\n\n    </ion-slide>\n\n\n<!-- -------------------------------SLIDE HORARIOS------------------------------------- -->\n    <ion-slide>\n      <ion-grid fixed>\n            <form>\n                <ion-row>\n                  <ion-col>\n                    <label style=\"color: white; border-radius : 10px;\">\n                    En este complejo puede reservar en horario de \n                  </label>\n                  <h3>\n                    <b style=\"color: red;\">{{complejo.horaInicio | date:'HH'}}:00</b>\n                     a \n                     <b style=\"color: red;\">{{complejo.horaCierre | date:'HH'}}:00</b>\n                  </h3>\n                  </ion-col>\n                </ion-row>\n\n                <ion-row>\n                    <ion-col>  \n  \n                      <ion-item>\n                        <ion-label>Hora Inicial</ion-label>\n                        <ion-datetime displayFormat=\"D MMM YYYY HH:mm\" \n                                      name=\"horaInicial\"\n                                      minuteValues=\"0\" min=\"10:00\" \n                                      [(ngModel)]=\"hInicio\"\n                                      (ngModelChange)=\"volver()\">\n                        </ion-datetime>\n                      </ion-item>\n                      <ion-item>\n                        <ion-label>Hora Final</ion-label>\n                        <ion-datetime displayFormat=\"D MMM YYYY HH:mm\" \n                                      name=\"horaFinal\"\n                                      minuteValues=\"0\" min=\"11:00\" \n                                      [(ngModel)]=\"hFin\"\n                                      (ngModelChange)=\"volver()\">\n                        </ion-datetime>\n                      </ion-item>\n                        \n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                  <!-- <ion-col>\n                    <ion-button type=\"submit\"\n                                color=\"tertiary\"\n                                shape=\"round\"\n                                (click)=\"goCancha()\">\n                        Regresar\n                    </ion-button>\n                </ion-col> -->\n                <ion-col>\n                  <ion-button type=\"submit\"\n                              color=\"success\"\n                              fill=\"outline\"\n                              (click)=\"validarFecha()\">\n                              Verificar Horario\n                  </ion-button>\n              </ion-col>\n                <ion-col>\n                    <ion-button type=\"submit\"\n                                color=\"success\"\n                                fill=\"outline\"\n                                *ngIf=\"auxReser==true\"\n                                (click)=\"llenar()\"\n                                (click)=\"goReservar()\">\n                        Ver resumen\n                    </ion-button>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <h3 style=\"color: white;\">Estas reservando por un tiempo de </h3>\n                <!-- <h3 style=\"text-shadow: 1px 1px 1px black; color: black;\">Estas reservando por un tiempo de </h3> -->\n                <h2 *ngIf=\"auxHoras!=null\">{{auxHoras}} h</h2>\n              </ion-col>\n            </ion-row>\n            <!-- <ion-row>\n              <ion-col>\n                <ion-button (click)=\"validarFecha()\">Verificar Horario</ion-button>\n              </ion-col>\n            </ion-row> -->\n            </form>\n        </ion-grid>\n  \n      </ion-slide>\n\n\n<!-- ----------------------------------SLIDE RESUMEN---------------------------------------- -->\n    <ion-slide>\n      <ion-grid fixed>\n            <form>\n              <ion-row>\n                <ion-col>\n                  <!-- <img src=\"/assets/img/im2.png\"> -->\n                </ion-col>\n              </ion-row>\n                <div>\n\n                      <ion-grid>\n                        <h1 class=\"shadow\">Detalle de la reserva</h1>\n                        <br>\n                        <h3 class=\"borA shadow\">Informacion Complejo</h3>\n                        <ion-row class=\"borA\">\n                          <ion-col class=\"izquierda\">\n                            <label class=\"shadow\">Nombre:</label>\n                          </ion-col>\n                          <ion-col class=\"izquierda\">\n                            <label class=\"shadow\">{{complejo.nombre}}</label>\n                          </ion-col>\n                        </ion-row>\n                        <ion-row class=\"borA\">\n                          <ion-col class=\"izquierda\">\n                            <label class=\"shadow\">Dia y hora de reserva:</label>\n                          </ion-col>\n                          <ion-col class=\"izquierda\">\n                            <label class=\"shadow\">{{reservacion.horaInicial | date:'MMMM-dd HH:mm'}} a {{reservacion.horaFinal | date:'HH:mm'}}</label>\n                          </ion-col>\n                        </ion-row>                        \n                          \n                        <ion-row class=\"borA\">\n                          <ion-col class=\"izquierda\">\n                            <label class=\"shadow\">Total a pagar:</label>\n                          </ion-col>\n                          <ion-col class=\"izquierda\">\n                            <label class=\"shadow\">Lps.{{canchaId.precio * auxHoras}}.00</label>\n                          </ion-col>\n                        </ion-row>\n                        <ion-row class=\"borA\">\n                          <ion-col class=\"izquierda\">\n                            <label class=\"shadow\"> Direccion:</label>\n                          </ion-col>\n                          <ion-col class=\"izquierda\">\n                            <label class=\"shadow\">{{complejo.localidad}}</label>\n                          </ion-col>\n                        </ion-row>\n                        <ion-row>\n                          <ion-col class=\"izquierda\">\n                            <label class=\"shadow\">Telefono:</label>\n                          </ion-col>\n                          <ion-col class=\"izquierda\">\n                            <label class=\"shadow\">{{complejo.numero}}</label>\n                          </ion-col>\n                        </ion-row>\n                        \n                      </ion-grid>\n\n                      <ion-grid>\n                        <h3 class=\"borA shadow\">Datos Personales</h3>\n\n                        <ion-row class=\"borA\">\n                          <ion-col class=\"izquierda\">\n                            <label class=\"shadow\">Usuario:</label>\n                          </ion-col>\n                          <ion-col class=\"izquierda\">\n                            <label class=\"shadow\">{{perfil.nombreUsuario}}</label>\n                          </ion-col>\n                        </ion-row>\n                        <ion-row>\n                          <ion-col class=\"izquierda\">\n                            <label class=\"shadow\">Correo:</label>\n                          </ion-col>\n                          <ion-col class=\"izquierda\">\n                            <label class=\"shadow\">{{perfil.email}}</label>\n                          </ion-col>\n                        </ion-row>\n                        <ion-row>\n                          <ion-col>\n\n                          </ion-col>\n                          <ion-col>\n                            \n                          </ion-col>\n                        </ion-row>\n                      </ion-grid>\n\n                      <!-- <ion-card class=\"ion-text-center\" style=\"background-color: rgb(236, 236, 243); border-radius : 10px;\">\n                          <h3 class=\"ion-text-center\">Complejo: {{complejo.nombre}}</h3>\n                          <h6>\n                            <ion-icon class=\"size\" name=\"calendar-outline\" color=\"secondary\"></ion-icon>\n                                Dia y hora de reserva:\n                          </h6>\n                          <h6>{{reservacion.horaInicial | date:'MMMM-dd HH:mm'}} a {{reservacion.horaFinal | date:'HH:mm'}}</h6>\n                          <h6>\n                            <ion-icon class=\"size\" name=\"cash-outline\" color=\"success\"></ion-icon>\n                              Total a pagar:\n                          </h6>\n                          <h6>Lps.{{canchaId.precio * auxHoras}}.00</h6>                          \n                          <h6>\n                            <ion-icon class=\"size\" name=\"location-outline\" color=\"primary\"></ion-icon>\n                              Direccion:\n                          </h6>\n                          <h6>{{complejo.localidad}}</h6>\n                          \n\n                      </ion-card> -->\n  \n                      \n                        \n                </div>\n\n              <ion-row>\n                <ion-col>\n                    <ion-button type=\"submit\"\n                                color=\"success\"\n                                shape=\"round\"\n                                expand=\"full\"\n                                (click)=\"agregarReservacion()\">\n                        Confirmar Reserva\n                    </ion-button>\n                </ion-col>\n            </ion-row>\n            </form>\n        </ion-grid>\n  \n      </ion-slide>\n\n\n\n</ion-slides>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/pages/reservar/reservar-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/reservar/reservar-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ReservarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservarPageRoutingModule", function() { return ReservarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _reservar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reservar.page */ "./src/app/pages/reservar/reservar.page.ts");




const routes = [
    {
        path: '',
        component: _reservar_page__WEBPACK_IMPORTED_MODULE_3__["ReservarPage"]
    }
];
let ReservarPageRoutingModule = class ReservarPageRoutingModule {
};
ReservarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReservarPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/reservar/reservar.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/reservar/reservar.module.ts ***!
  \***************************************************/
/*! exports provided: ReservarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservarPageModule", function() { return ReservarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _reservar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reservar-routing.module */ "./src/app/pages/reservar/reservar-routing.module.ts");
/* harmony import */ var _reservar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reservar.page */ "./src/app/pages/reservar/reservar.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let ReservarPageModule = class ReservarPageModule {
};
ReservarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _reservar_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReservarPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_reservar_page__WEBPACK_IMPORTED_MODULE_6__["ReservarPage"]]
    })
], ReservarPageModule);



/***/ }),

/***/ "./src/app/pages/reservar/reservar.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/reservar/reservar.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content.background {\n  --background: url(/assets/img/bueno.jpg) 0 0/100% 100% no-repeat;\n  opacity: 0.8;\n}\n\nion-icon.size {\n  font-size: 27px;\n}\n\n.borA {\n  border-bottom: white 1px solid;\n}\n\n.bor {\n  border-bottom: white 1px solid;\n  border-left: white 1px solid;\n  border-right: white 1px solid;\n}\n\n.bort {\n  border-bottom: white 1px solid;\n  border-left: white 1px solid;\n  border-right: white 1px solid;\n  border-top: white 1px solid;\n}\n\n.centrado {\n  text-align: center;\n}\n\n.derecha {\n  text-align: right;\n}\n\n.izquierda {\n  text-align: left;\n}\n\nion-icon.size {\n  font-size: 30px;\n}\n\n.shadow {\n  text-shadow: 2px 2px 8px #000000;\n}\n\n.img {\n  min-height: 250px;\n  max-height: 570px;\n  width: 100%;\n}\n\nlabel, ion-label, h1, h2, h3, h4, h5, h6 {\n  text-shadow: 2px 2px 8px #080808;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzZXJ2YXIvQzpcXFVzZXJzXFxlcmlja1xcT25lRHJpdmVcXERlc2t0b3BcXGlvbmljXFxwcm95ZWN0by9zcmNcXGFwcFxccGFnZXNcXHJlc2VydmFyXFxyZXNlcnZhci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Jlc2VydmFyL3Jlc2VydmFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdFQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksOEJBQUE7QUNDSjs7QURFQTtFQUNJLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ0NKOztBREVFO0VBQ0UsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtBQ0VKOztBREFBO0VBQ0ksZ0JBQUE7QUNHSjs7QURBQTtFQUNJLGVBQUE7QUNHSjs7QURBQTtFQUNJLGdDQUFBO0FDR0o7O0FEQUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0dKOztBREFBO0VBQ0ksZ0NBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc2VydmFyL3Jlc2VydmFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50LmJhY2tncm91bmR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy9idWVuby5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG5pb24taWNvbi5zaXplIHtcclxuICAgIGZvbnQtc2l6ZTogMjdweDtcclxufVxyXG5cclxuLmJvckEge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogd2hpdGUgMXB4IHNvbGlkO1xyXG59XHJcblxyXG4uYm9yIHtcclxuICAgIGJvcmRlci1ib3R0b206IHdoaXRlIDFweCBzb2xpZDtcclxuICAgIGJvcmRlci1sZWZ0OiB3aGl0ZSAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IHdoaXRlIDFweCBzb2xpZDtcclxuICB9XHJcbiAgXHJcbiAgLmJvcnQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogd2hpdGUgMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLWxlZnQ6IHdoaXRlIDFweCBzb2xpZDtcclxuICAgIGJvcmRlci1yaWdodDogd2hpdGUgMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXRvcDogd2hpdGUgMXB4IHNvbGlkO1xyXG4gIH1cclxuXHJcbi5jZW50cmFkb3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbi5kZXJlY2hhe1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLml6cXVpZXJkYXtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbmlvbi1pY29uLnNpemUge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4uc2hhZG93IHtcclxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDhweCAjMDAwMDAwO1xyXG59XHJcblxyXG4uaW1nIHtcclxuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgbWF4LWhlaWdodDogNTcwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubGFiZWwsIGlvbi1sYWJlbCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA4cHggIzA4MDgwODtcclxufSIsImlvbi1jb250ZW50LmJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy9idWVuby5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbmlvbi1pY29uLnNpemUge1xuICBmb250LXNpemU6IDI3cHg7XG59XG5cbi5ib3JBIHtcbiAgYm9yZGVyLWJvdHRvbTogd2hpdGUgMXB4IHNvbGlkO1xufVxuXG4uYm9yIHtcbiAgYm9yZGVyLWJvdHRvbTogd2hpdGUgMXB4IHNvbGlkO1xuICBib3JkZXItbGVmdDogd2hpdGUgMXB4IHNvbGlkO1xuICBib3JkZXItcmlnaHQ6IHdoaXRlIDFweCBzb2xpZDtcbn1cblxuLmJvcnQge1xuICBib3JkZXItYm90dG9tOiB3aGl0ZSAxcHggc29saWQ7XG4gIGJvcmRlci1sZWZ0OiB3aGl0ZSAxcHggc29saWQ7XG4gIGJvcmRlci1yaWdodDogd2hpdGUgMXB4IHNvbGlkO1xuICBib3JkZXItdG9wOiB3aGl0ZSAxcHggc29saWQ7XG59XG5cbi5jZW50cmFkbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRlcmVjaGEge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLml6cXVpZXJkYSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmlvbi1pY29uLnNpemUge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5zaGFkb3cge1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA4cHggIzAwMDAwMDtcbn1cblxuLmltZyB7XG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICBtYXgtaGVpZ2h0OiA1NzBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmxhYmVsLCBpb24tbGFiZWwsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA4cHggIzA4MDgwODtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/reservar/reservar.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/reservar/reservar.page.ts ***!
  \*************************************************/
/*! exports provided: ReservarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservarPage", function() { return ReservarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/apiservi.service */ "./src/app/services/apiservi.service.ts");
/* harmony import */ var src_models_complejo_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/complejo.models */ "./src/models/complejo.models.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/alerta-service.service */ "./src/app/services/alerta-service.service.ts");
/* harmony import */ var src_app_services_torneo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/torneo.service */ "./src/app/services/torneo.service.ts");
/* harmony import */ var src_models_torneo_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/models/torneo.models */ "./src/models/torneo.models.ts");










let ReservarPage = class ReservarPage {
    constructor(apiServi, usuarioService, navCtrl, alertaService, torneoService) {
        this.apiServi = apiServi;
        this.usuarioService = usuarioService;
        this.navCtrl = navCtrl;
        this.alertaService = alertaService;
        this.torneoService = torneoService;
        this.atras = false;
        this.aux = false;
        this.auxReser = false;
        // complejo = {
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
            horaInicial: null,
            horaFinal: null,
            pago: false,
            pagoParcial: false,
            idCancha: 0,
            userId: ''
        };
        this.torneo = new src_models_torneo_models__WEBPACK_IMPORTED_MODULE_9__["Torneo"](0, '', null, '', '', new Date(), '', 0);
    }
    ngOnInit() {
        this.perfil = this.usuarioService.getUsuario();
        this.slides.lockSwipes(true);
        this.reservacion.userId = this.perfil.id;
        console.log('ESTE ES EL ID OBTENIDO > > ' + this.reservacion.userId);
        this.obtenerComplejos();
        this.obtenerComplejoEstado();
    }
    // ---------------METODOS COMPLEJO------------------------------------------------
    obtenerComplejos() {
        this.apiServi.getComplejo()
            .subscribe((resp) => {
            this.complejos = resp;
            console.log('SERVICIO ', resp);
        });
    }
    obtenerComplejoEstado() {
        this.apiServi.getComplejoEstado(true)
            .subscribe((resp) => {
            this.complejosAbiertos = resp;
        });
    }
    obtenerComplejoId(id) {
        this.apiServi.getComplejoId(id)
            .subscribe((resp) => {
            this.complejo = resp;
            this.goCancha();
            this.getTorneoId(id);
            // console.log(this.complejo);
        });
    }
    // ----------------------METODOS RESERVAR-----------------------------------
    obtenerReservacionId() {
        this.apiServi.getReservacionId(this.reservacion.idReservacion)
            .subscribe(resp => {
            console.log('EJECUTADO CON EXITO');
        });
    }
    agregarReservacion() {
        this.reservacion.horaInicial = moment__WEBPACK_IMPORTED_MODULE_5__(this.hInicio).subtract(6, 'hour');
        this.reservacion.horaFinal = moment__WEBPACK_IMPORTED_MODULE_5__(this.hFin).subtract(6, 'hour');
        this.apiServi.postReservacion(this.reservacion)
            .subscribe((data) => {
            this.reservaciones.push(this.reservacion);
            this.reservacion = {
                idReservacion: 0,
                horaInicial: new Date(),
                horaFinal: new Date(),
                pago: false,
                pagoParcial: false,
                idCancha: 0,
                userId: ''
            };
            this.alertaService.alertaInformativa('Su reserva se realizo con exito. \n Puede verla ingresando a su Mi Perfil en Mis Reservas');
            this.navCtrl.navigateRoot('/inicio');
        }, (error) => {
            console.log(error);
            window.alert('Ingrese los datos correctamente');
        });
    }
    modificarReservacion() {
        this.apiServi.putReservacion(this.reservacion.idReservacion, this.reservacion)
            .subscribe((data) => {
            this.reservaciones.push(this.reservacion);
            this.reservacion = {
                idReservacion: 0,
                horaInicial: new Date(),
                horaFinal: new Date(),
                pago: false,
                pagoParcial: false,
                idCancha: 0,
                userId: ''
            };
            window.alert('ACTUALIZADO CON EXITO');
        }, (error) => {
            console.log(error);
        });
    }
    eliminarReservacion() {
        this.apiServi.deleteReservacion(this.reservacion.idReservacion)
            .subscribe(resp => {
            console.log('ELIMINADO CON EXITO');
        });
    }
    volver() {
        this.auxReser = false;
    }
    // ----------------------------METODOS CANCHAS-----------------------------------
    obtenerCanchasComplejo(id) {
        this.apiServi.getCanchaComplejo(id)
            .subscribe((resp) => {
            this.canchas = resp;
            this.obtenerComplejoId(id);
            // console.log('CANCHAS ', this.canchas);
        });
    }
    obtenerCanchaId(id) {
        this.apiServi.getCanchaId(id)
            .subscribe((resp) => {
            this.canchaId = resp;
            this.reservacion.idCancha = this.canchaId.idCancha;
        });
    }
    obtenerReservas(id) {
        this.apiServi.getReservacionComplejo(id)
            .subscribe((resp) => {
            this.reser = resp;
            console.log(this.reser);
        });
    }
    getTorneoId(id) {
        this.torneoService.getTorneooId(id)
            .subscribe((resp) => {
            this.torneo = resp;
            // console.log(resp);
        });
    }
    validarFecha() {
        const ini = moment__WEBPACK_IMPORTED_MODULE_5__().format('MM-DD-YYYY HH:mm');
        const dInicial = moment__WEBPACK_IMPORTED_MODULE_5__(this.hInicio).format('MM-DD-YYYY HH:mm');
        const dFinal = moment__WEBPACK_IMPORTED_MODULE_5__(this.hFin).format('MM-DD-YYYY HH:mm');
        const abre = moment__WEBPACK_IMPORTED_MODULE_5__(this.hInicio).format('HH');
        const cierra = moment__WEBPACK_IMPORTED_MODULE_5__(this.hFin).format('HH');
        const abreComplejo = moment__WEBPACK_IMPORTED_MODULE_5__(this.complejo.horaInicio).format('HH');
        const cierraComplejo = moment__WEBPACK_IMPORTED_MODULE_5__(this.complejo.horaCierre).format('HH');
        const diaReserva = moment__WEBPACK_IMPORTED_MODULE_5__(this.hInicio).format('MM-DD-YYYY');
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
        // if (this.torneo.diaTorneo !== null || this.torneo.diaTorneo !== undefined) {
        //   if (diaReserva === moment(this.torneo.diaTorneo).format('MM-DD-YYYY')) {
        //     return alert('Este dia no esta disponible ya que se realizará un torneo');
        //   }
        // }
        for (let i = 0; i < this.reser.length; i++) {
            const fechInicial = moment__WEBPACK_IMPORTED_MODULE_5__(this.reser[i].horaInicial).format('MM-DD-YYYY H:mm');
            const fechFinal = moment__WEBPACK_IMPORTED_MODULE_5__(this.reser[i].horaFinal).format('MM-DD-YYYY H:mm');
            if (dInicial > fechInicial && dInicial < fechFinal || dFinal > fechInicial && dFinal < fechFinal) {
                this.volver();
                return alert('El horario de ' + fechInicial + ' a ' + fechFinal + ' no esta disponible');
            }
            if (dInicial === fechInicial || dFinal === fechFinal) {
                this.volver();
                return alert('Este horario no esta disponible');
            }
        }
        const inic = moment__WEBPACK_IMPORTED_MODULE_5__(this.hInicio);
        const fin = moment__WEBPACK_IMPORTED_MODULE_5__(this.hFin);
        this.auxHoras = fin.diff(inic, 'hours');
        if (this.auxHoras >= 4) {
            this.volver();
            return alert('No puedes reservar por más de 3 horas.');
        }
        this.auxReser = true;
        return alert('Horario disponible');
    }
    // -------------------------------METODOS OBTENER------------------
    idCancha(id) {
        this.reservacion.idCancha = id;
    }
    // precioCancha(precio: number) {
    //   this.seleccion = precio;
    // }
    // nombreComplejo(nombre: string) {
    //   this.complejo.nombre = nombre;
    // }
    // localidadComplejo(local: string) {
    //   this.complejo.localidad = local;
    // }
    obtenerComplejo(id) {
        this.obtenerComplejoId(id);
    }
    obtenerCancha(id) {
        this.obtenerCanchaId(id);
        this.obtenerReservas(id);
    }
    llenar() {
        this.reservacion.idCancha = this.canchaId.idCancha;
    }
    // -------------------------------------------------SLIDE--------------------------------
    goComplejos() {
        this.atras = false;
        this.slides.lockSwipes(false);
        this.slides.slideTo(0);
        this.slides.lockSwipes(true);
    }
    goCancha() {
        this.atras = true;
        this.auxReser = false;
        this.slides.lockSwipes(false);
        this.slides.slideTo(1);
        this.slides.lockSwipes(true);
    }
    goHorarios() {
        // this.obtenerReservas();
        this.slides.lockSwipes(false);
        this.slides.slideTo(2);
        this.slides.lockSwipes(true);
    }
    goReservar() {
        this.slides.lockSwipes(false);
        this.slides.slideTo(3);
        this.slides.lockSwipes(true);
    }
    slideAtras() {
        this.slides.lockSwipes(false);
        this.slides.slidePrev();
        this.slides.lockSwipes(true);
        this.slides.isBeginning().then(data => {
            if (data === true) {
                this.atras = false;
            }
        });
    }
};
ReservarPage.ctorParameters = () => [
    { type: src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviService"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_7__["AlertaServiceService"] },
    { type: src_app_services_torneo_service__WEBPACK_IMPORTED_MODULE_8__["TorneoService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slidePrincipal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"])
], ReservarPage.prototype, "slides", void 0);
ReservarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reservar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reservar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reservar/reservar.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reservar.page.scss */ "./src/app/pages/reservar/reservar.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviService"],
        src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_7__["AlertaServiceService"],
        src_app_services_torneo_service__WEBPACK_IMPORTED_MODULE_8__["TorneoService"]])
], ReservarPage);



/***/ })

}]);
//# sourceMappingURL=pages-reservar-reservar-module-es2015.js.map