(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-perfil-perfil-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"Mi Perfil\" *ngIf=\"!atras\"></app-header>\n\n<ion-header no-border *ngIf=\"atras\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goSlide1()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n\n  <div>\n    <ion-row>\n      <ion-col>\n        <ion-row><h5 class=\"shadow\" style=\"color: white;\">{{user.nombreUsuario}}</h5></ion-row>\n        <!-- <ion-row><h5>{{user.email}}</h5></ion-row>       -->\n      </ion-col>\n      <ion-col><h5 class=\"shadow\" style=\"color: white;\">{{user.edad}} años</h5></ion-col>\n    </ion-row>\n  </div>\n\n  \n\n  <ion-slides class=\"mainSlide\" [options]=\"{ autoHeight: true }\" #slidePrincipal>\n\n    <ion-slide>\n      <ion-grid>\n        <form>\n\n          <!-- <ion-row center>\n            <ion-button (click)=\"obtenerMisReservacion()\">Ver mi historial reservas</ion-button>\n          </ion-row> -->\n\n          <h1 style=\"color: white;\" class=\"shadow\">Mis reservaciones</h1>\n\n          <div>\n            <ion-row class=\"ion-align-items-center bor\" >\n              <ion-col class=\"centrado\"><label class=\"shadow\">Día</label></ion-col>\n              <ion-col class=\"centrado\"><label class=\"shadow\">Horario</label></ion-col>\n              <ion-col class=\"derecha\">                \n              </ion-col>\n            </ion-row>            \n        </div>\n\n        <div *ngFor=\"let item of reservacionesNoVencidas\">\n            <ion-row class=\"ion-align-items-center\">\n              <ion-col class=\"centrado\" >\n                <label class=\"shadow\">{{item.horaInicial | date:'MMMM-dd'}}</label>\n              </ion-col>\n              <ion-col class=\"centrado\" >\n                <label class=\"shadow\">{{item.horaInicial | date:'HH:mm'}} a {{item.horaFinal | date:'HH:mm'}}</label>\n              </ion-col>\n              <ion-col class=\"derecha\">\n                <ion-button color=\"success\"\n                            class=\"derecha\"      \n                            fill=\"clear\"    \n                                       \n                            (click)=\"obtenerReservacionId(item.idReservacion)\">\n                            <ion-icon color=\"success\" class=\"size\" name=\"return-up-forward-outline\"></ion-icon>\n                            </ion-button>\n                \n              </ion-col>\n            </ion-row>            \n        </div>\n        </form>\n      </ion-grid>\n    </ion-slide>\n\n<!-- ---------------------------------------------------SLIDE 2--------------------------------------------- -->\n\n    <ion-slide>\n      <ion-grid>\n        <form>\n          <!-- <h2 class=\"ion-text-center\">Mis reservaciones</h2>           -->\n\n            <div style=\"background-color: rgb(211, 197, 197, 0.05);\">\n\n                  <div style=\"display: inline-block; position:relative\">\n                    <img src=\"{{cancha.foto}}\" alt=\"200\" width=\"500\">\n                    <div style=\"display: inline-block; position:absolute; top:100%; left:50%; transform: translate(-50%, -50%)\">      \n                      <img src=\"{{complejo.foto}}\" class=\"imgRedonda\">\n                  </div>\n                  </div>\n                  <br><br><br><br>\n                  <h1 class=\"ion-text-center shadow\">{{complejo.nombre}}</h1>\n                  <ion-row>\n                    <ion-col>\n                      <ion-icon class=\"shadow\" name=\"calendar-outline\" color=\"secondary\"></ion-icon>\n                      <label class=\"shadow\">{{reservacion.horaInicial | date:'MMMM-dd'}}</label>\n                      <label class=\"shadow\">                       \n                          {{reservacion.horaInicial | date:'HH:mm'}} a {{reservacion.horaFinal | date:'HH:mm'}}\n                      </label>\n                    </ion-col>\n                    <ion-col>\n                      <ion-icon class=\"shadow\" name=\"cash-outline\" color=\"success\"></ion-icon>\n                      <label class=\"shadow\">                        \n                          Lps. {{cancha.precio * auxHoras}}\n                      </label>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col>\n                      <ion-icon class=\"shadow\" name=\"location-outline\" color=\"primary\"></ion-icon>\n                      <label class=\"shadow\">                        \n                          {{complejo.localidad}}\n                      </label>\n                    </ion-col>\n                    <ion-col>\n                      <ion-icon name=\"call-outline\" color=\"secondary\"></ion-icon>\n                      <label class=\"shadow\">                        \n                        {{complejo.numero}}\n                    </label>\n                    </ion-col>\n                  </ion-row>\n                  \n\n                  \n                  <ion-row>\n                    <ion-col>\n                          <ion-icon name=\"trash-outline\" style=\"color: red;\" (click)=\"confirmarCancelacion()\">Cancelar resereserva</ion-icon>\n                    </ion-col>          \n                    <!-- <ion-col class=\"centrado\" *ngIf=\"!reservacion.pago || !reservacion.pagoParcial\">\n                      <ion-button (click)=\"obtenerReservacionId(reservacion.idReservacion)\"\n                                  (click)=\"obtenerCanchaId(reservacion.idCancha)\"\n                                  (click)=\"pagarCompleto()\">Pagar 100%</ion-button>\n                    </ion-col> -->\n                    <ion-col class=\"derecha\" *ngIf=\"!reservacion.pago && !reservacion.pagoParcial\">\n                      <ion-button \n                                  (click)=\"pagarParcial()\"\n                                  >Pagar Reserva</ion-button>\n                    </ion-col>\n                  </ion-row>\n                  \n                  \n             </div>\n        </form>\n      </ion-grid>\n    </ion-slide>\n\n  </ion-slides>\n  \n  \n  \n\n  <!-- ------------------------------------------------------------------------------------ -->\n\n  \n\n\n  \n  <!-- <div *ngFor=\"let item of reservacionesNoVencidas\" style=\"background-color: rgb(67, 179, 96);\">\n    <ion-card class=\"ion-text-center\" style=\"background-color: rgb(230, 230, 241); border-radius : 10px;\">      \n\n        <div style=\"display: inline-block; position:relative\">\n          <img src=\"{{item.cancha.foto}}\" class=\"img\">\n          <div style=\"display: inline-block; position:absolute; top:100%; left:50%; transform: translate(-50%, -50%)\">      \n            <img src=\"{{item.cancha.complejo.foto}}\" class=\"imgRedonda\">\n        </div>\n        </div>\n        <br><br><br><br><br>\n        <h3 class=\"ion-text-center\">{{item.cancha.complejo.nombre}}</h3>\n        <h6>\n          <ion-icon name=\"calendar-outline\" color=\"secondary\"></ion-icon>\n              {{item.horaInicial | date:'MMMM-dd HH:mm'}} a {{item.horaFinal | date:'MMMM-dd HH:mm'}}\n          </h6>\n        <h6>\n          <ion-icon name=\"cash-outline\" color=\"success\"></ion-icon>\n            Lps. {{item.cancha.precio}}\n        </h6>\n\n        <h6>\n          <ion-icon name=\"location-outline\" color=\"primary\"></ion-icon>\n            {{item.cancha.complejo.localidad}}\n        </h6>\n        <label>\n          <ion-icon slot=\"start\" name=\"trash-outline\" color=\"danger\" (click)=\"eliminarReservacion(item.idReservacion)\">Eliminar reservacion</ion-icon>\n        </label>\n    </ion-card>\n</div> -->\n  \n\n  <!-- <ion-button (click)=\"obtenerEquipoUsuario()\">Ver equipo</ion-button>\n  <ion-card>\n    <ion-list *ngFor=\"let item of equipos\">\n      <ion-item>{{item.usuario.nombre}}</ion-item>\n      <ion-item>\n      </ion-item>\n    </ion-list>\n  </ion-card> -->\n\n  \n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/perfil/perfil-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/perfil/perfil-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PerfilPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageRoutingModule", function() { return PerfilPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil.page */ "./src/app/pages/perfil/perfil.page.ts");




const routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_3__["PerfilPage"]
    }
];
let PerfilPageRoutingModule = class PerfilPageRoutingModule {
};
PerfilPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PerfilPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/perfil/perfil.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/perfil/perfil.module.ts ***!
  \***********************************************/
/*! exports provided: PerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perfil-routing.module */ "./src/app/pages/perfil/perfil-routing.module.ts");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil.page */ "./src/app/pages/perfil/perfil.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let PerfilPageModule = class PerfilPageModule {
};
PerfilPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerfilPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]]
    })
], PerfilPageModule);



/***/ }),

/***/ "./src/app/pages/perfil/perfil.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/perfil/perfil.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img {\n  width: 500px;\n  height: 220px;\n}\n\nion-icon {\n  font-size: 30px;\n}\n\n.imgRedonda {\n  width: 150px;\n  height: 150px;\n  border-radius: 150px;\n  border: 5px solid #666;\n}\n\n.derecha {\n  text-align: right;\n}\n\n.centrado {\n  text-align: center;\n}\n\n.izquierda {\n  text-align: left;\n}\n\n.bor {\n  border-bottom: white 2px solid;\n}\n\nion-content.background {\n  --background: url(/assets/img/bueno.jpg) 0 0/100% 100% no-repeat;\n  opacity: 0.8;\n}\n\n.shadow {\n  text-shadow: 2px 2px #080808;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGVyZmlsL0M6XFxVc2Vyc1xcZXJpY2tcXE9uZURyaXZlXFxEZXNrdG9wXFxpb25pY1xccHJveWVjdG8vc3JjXFxhcHBcXHBhZ2VzXFxwZXJmaWxcXHBlcmZpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BlcmZpbC9wZXJmaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNDSjs7QURDRTtFQUNJLGVBQUE7QUNFTjs7QURBRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQ0dKOztBREFBO0VBQ0UsaUJBQUE7QUNHRjs7QUREQTtFQUNFLGtCQUFBO0FDSUY7O0FERkE7RUFDRSxnQkFBQTtBQ0tGOztBREZBO0VBQ0UsOEJBQUE7QUNLRjs7QURGQTtFQUNFLGdFQUFBO0VBQ0EsWUFBQTtBQ0tGOztBREZBO0VBQ0UsNEJBQUE7QUNLRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BlcmZpbC9wZXJmaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZyB7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gIH1cclxuICBpb24taWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcbiAgLmltZ1JlZG9uZGEge1xyXG4gICAgd2lkdGg6MTUwcHg7XHJcbiAgICBoZWlnaHQ6MTUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjE1MHB4O1xyXG4gICAgYm9yZGVyOjVweCBzb2xpZCAjNjY2O1xyXG59XHJcblxyXG4uZGVyZWNoYXtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uY2VudHJhZG97XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5penF1aWVyZGF7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmJvciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogd2hpdGUgMnB4IHNvbGlkO1xyXG59XHJcblxyXG5pb24tY29udGVudC5iYWNrZ3JvdW5ke1xyXG4gIC0tYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL2J1ZW5vLmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4uc2hhZG93IHtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAjMDgwODA4O1xyXG59IiwiLmltZyB7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiAyMjBweDtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5pbWdSZWRvbmRhIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxNTBweDtcbiAgYm9yZGVyOiA1cHggc29saWQgIzY2Njtcbn1cblxuLmRlcmVjaGEge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmNlbnRyYWRvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaXpxdWllcmRhIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmJvciB7XG4gIGJvcmRlci1ib3R0b206IHdoaXRlIDJweCBzb2xpZDtcbn1cblxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL2J1ZW5vLmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLnNoYWRvdyB7XG4gIHRleHQtc2hhZG93OiAycHggMnB4ICMwODA4MDg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/perfil/perfil.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/perfil/perfil.page.ts ***!
  \*********************************************/
/*! exports provided: PerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPage", function() { return PerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/apiservi.service */ "./src/app/services/apiservi.service.ts");
/* harmony import */ var src_models_reservacion_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/reservacion.models */ "./src/models/reservacion.models.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_models_cancha_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/models/cancha.models */ "./src/models/cancha.models.ts");
/* harmony import */ var src_models_complejo_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/models/complejo.models */ "./src/models/complejo.models.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/paypal/ngx */ "./node_modules/@ionic-native/paypal/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");










let PerfilPage = class PerfilPage {
    constructor(apiServi, usuarioService, payPal, alertController, navCtrl) {
        this.apiServi = apiServi;
        this.usuarioService = usuarioService;
        this.payPal = payPal;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.parcial = false;
        this.completo = false;
        this.atras = false;
        this.reservacion = new src_models_reservacion_models__WEBPACK_IMPORTED_MODULE_3__["Reservacion"](0, new Date(), new Date(), false, false, 0, '');
        this.reservaciones = [];
        this.reservacionesNoVencidas = [];
        this.cancha = new src_models_cancha_models__WEBPACK_IMPORTED_MODULE_5__["Cancha"](0, null, null, '', null);
        this.complejo = new src_models_complejo_models__WEBPACK_IMPORTED_MODULE_6__["Complejo"](0, null, null, null, null, false, 0.0, 0.0, null, null, false, false, null);
        this.equipos = [];
        // perfil: User;
        this.user = {
            id: '',
            email: '',
            nombreUsuario: '',
            edad: 0,
            isAdmin: false
        };
    }
    ngOnInit() {
        this.user = this.usuarioService.getUsuario();
        console.log(this.user);
        this.slides.lockSwipes(true);
        this.obtenerMisReservacion();
    }
    // agregarUsuario() {
    //   this.apiServi.postUsuario(this.perfil)
    //   .subscribe((data) => {
    //     this.perfiles.push(this.perfil);
    //     this.perfil = {
    //       nombreUsuario: null,
    //       edad: null,
    //       email: null,
    //       password: null,
    //       rol: false
    //     };
    //     window.alert('AGREGADO');
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    //   );
    // }
    // modificarUsuario() {
    //   this.apiServi.putUsuario(this.idUsuario, this.perfil)
    //   .subscribe((data) => {
    //     this.perfiles.push(this.perfil);
    //     this.perfil = {
    //       nombreUsuario: null,
    //       edad: null,
    //       email: null,
    //       password: null,
    //       rol: false
    //     };
    //     window.alert('ACTUALIZADO CON EXITO');
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    //   );
    // }
    obtenerReservacionId(id) {
        this.apiServi.getReservacionId(id)
            .subscribe((resp) => {
            this.reservacion = resp;
            this.valorPagar();
            // console.log('EJECUTADO CON EXITO');
            this.obtenerCanchaId(this.reservacion.idCancha);
        });
    }
    obtenerMisReservacion() {
        this.apiServi.getReservacionXUser(this.user.id)
            .subscribe((resp) => {
            this.reservaciones = resp;
            console.log('SERVICIO', resp);
            this.noVencidas();
        });
    }
    eliminarReservacion() {
        this.apiServi.deleteReservacion(this.reservacion.idReservacion)
            .subscribe(resp => {
            console.log('ELIMINADO CON EXITO');
            this.obtenerMisReservacion();
            this.navCtrl.navigateRoot('/inicio');
        });
    }
    modificarReservacion(id) {
        this.apiServi.putReservacion(id, this.reservacion)
            .subscribe((data) => {
            this.reservacion = new src_models_reservacion_models__WEBPACK_IMPORTED_MODULE_3__["Reservacion"](0, new Date(), new Date(), false, false, 0, '');
            this.navCtrl.navigateRoot('/inicio');
            window.alert('ACTUALIZADO CON EXITO');
        }, (error) => {
            console.log(error);
        });
    }
    obtenerCanchaId(id) {
        this.apiServi.getCanchaId(id)
            .subscribe((resp) => {
            this.cancha = resp;
            this.getComplejoId(this.cancha.idComplejo);
            // console.log('EJECUTADO CON EXITO');
        });
    }
    getComplejoId(id) {
        this.apiServi.getComplejoId(id)
            .subscribe((resp) => {
            this.complejo = resp;
            this.goSlide2();
            // console.log('EJECUTADO CON EXITO');
        });
    }
    // obtenerEquipoUsuario() {
    //   this.apiServi.getEquipoUsuario(this.idUsuario)
    //   .subscribe( (resp: Equipo[]) => {
    //     this.equipos = resp;
    //     console.log('EJECUTADO CON EXITO');
    //   });
    // }
    noVencidas() {
        const ini = moment__WEBPACK_IMPORTED_MODULE_7__().format('MM-DD-YYYY HH:mm');
        let valor = 0;
        for (let i = 0; i < this.reservaciones.length; i++) {
            const val = moment__WEBPACK_IMPORTED_MODULE_7__(this.reservaciones[i].horaFinal).format('MM-DD-YYYY HH:mm');
            if (ini < val) {
                this.reservacionesNoVencidas[valor] = this.reservaciones[i];
                valor++;
            }
        }
    }
    // --------------------------------------------------------------------------------------------------
    confirmarCancelacion() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: '¿Quieres cancelar la reserva?',
                message: '<strong>Click Ok </strong>',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Okay',
                        handler: () => {
                            this.eliminarReservacion();
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    pagarCompleto() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirmar pago',
                message: '<strong>--</strong>??',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Okay',
                        handler: () => {
                            this.totalPagar = this.auxHoras * this.cancha.precio;
                            this.completo = true;
                            this.pagar();
                            console.log(this.totalPagar);
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    pagarParcial() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirmar pago',
                message: '<strong>Cuanto quieres pagar</strong>??',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Pagar 50%',
                        handler: () => {
                            this.totalPagar = this.auxHoras * this.cancha.precio * 0.50;
                            this.parcial = true;
                            this.pagar();
                            console.log(this.totalPagar);
                            console.log('Confirm Okay');
                        }
                    }, {
                        text: 'Pagar 100%',
                        handler: () => {
                            this.totalPagar = this.auxHoras * this.cancha.precio;
                            this.completo = true;
                            this.pagar();
                            console.log(this.totalPagar);
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    valorPagar() {
        const inic = moment__WEBPACK_IMPORTED_MODULE_7__(this.reservacion.horaInicial);
        const fin = moment__WEBPACK_IMPORTED_MODULE_7__(this.reservacion.horaFinal);
        this.auxHoras = fin.diff(inic, 'hours');
    }
    // ----------------------------------------------------------------------------------------
    pagar() {
        this.payPal.init({
            PayPalEnvironmentProduction: 'TU_ID_DE_CLIENTE_EN_PRODUCCIÓN',
            PayPalEnvironmentSandbox: 'Adx-VcPcx3n-_g5CtBrAa78tHzUAEOoX9C5Tu2xsOVZns8hsuaqAr01SBshIr70HGbIvCAP4KJOtdImR' //Sandbox
        }).then(() => {
            // Entornos: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
            this.payPal.prepareToRender('PayPalEnvironmentSandbox', new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_8__["PayPalConfiguration"]({
            // Solo lo necesitas si necesitas controlar los errores posteriores al login de paypal "Internal Service Error".
            //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
            })).then(() => {
                let cobro = new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_8__["PayPalPayment"](this.totalPagar, 'USD', 'Description', 'Reserva');
                this.payPal.renderSinglePaymentUI(cobro).then(() => {
                    if (this.parcial === true) {
                        this.reservacion.pagoParcial = true;
                        this.modificarReservacion(this.reservacion.idReservacion);
                    }
                    if (this.completo === true) {
                        this.reservacion.pago = true;
                        this.modificarReservacion(this.reservacion.idReservacion);
                    }
                    // Se ha realizado el cobro correctamente
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
                }, () => {
                    // Ha petado el cuadro de diálogo
                });
            }, () => {
                // Ha petado la configuración
            });
        }, () => {
            // Ha petado la inicialización o el dispositivo no permite usar PayPal
        });
    }
    goSlide1() {
        this.atras = false;
        this.slides.lockSwipes(false);
        this.slides.slideTo(0);
        this.slides.lockSwipes(true);
    }
    goSlide2() {
        this.atras = true;
        this.slides.lockSwipes(false);
        this.slides.slideTo(1);
        this.slides.lockSwipes(true);
    }
    goSlide3() {
        this.atras = true;
        this.slides.lockSwipes(false);
        this.slides.slideTo(2);
        this.slides.lockSwipes(true);
    }
};
PerfilPage.ctorParameters = () => [
    { type: src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviService"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"] },
    { type: _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_8__["PayPal"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slidePrincipal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonSlides"])
], PerfilPage.prototype, "slides", void 0);
PerfilPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-perfil',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./perfil.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./perfil.page.scss */ "./src/app/pages/perfil/perfil.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviService"],
        src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"],
        _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_8__["PayPal"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"]])
], PerfilPage);



/***/ })

}]);
//# sourceMappingURL=pages-perfil-perfil-module-es2015.js.map