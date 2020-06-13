(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-torneo-user-torneo-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/torneo-user/torneo-user.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/torneo-user/torneo-user.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"Torneos\" *ngIf=\"!atras\"></app-header>\n\n<ion-header no-border *ngIf=\"atras\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goSlide1()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n  \n  <ion-slides class=\"mainSlide\" [options]=\"{ autoHeight: true }\" #slidePrincipal>\n\n    <ion-slide>\n      <ion-grid>\n\n        <!-- <h1 style=\"text-shadow: 1px 1px 1px black; color: black;\">Torneos</h1> -->\n        <div>\n            <ion-row class=\"ion-align-items-center bor\" >\n              <ion-col class=\"centrado\"><h5>Torneo</h5></ion-col>\n              <ion-col class=\"izquierda\"><h5>Complejo</h5></ion-col>\n              <ion-col>\n                <h5>Día Torneo</h5>\n              </ion-col>\n              <ion-col class=\"derecha\">                \n              </ion-col>\n            </ion-row>            \n        </div>\n        <div *ngFor=\"let item of torneosNoVen\">\n            <ion-row class=\"ion-align-items-center\">\n              <ion-col class=\"izquierda\"><label>{{item.nombre}}</label></ion-col>\n              <ion-col class=\"izquierda\"><label>{{item.complejo.nombre}}</label></ion-col>\n              <ion-col *ngIf=\"item.diaTorneo > hoy\">\n                <label  style=\"color: rgb(16, 122, 243);\"> {{item.diaTorneo | date:'dd-MMMM-yyyy'}}</label>\n              </ion-col>\n              <ion-col class=\"derecha\">\n                <ion-button color=\"success\"\n                            class=\"derecha\"      \n                            shape=\"round\" fill=\"clear\"                \n                            (click)=\"getTorneoId(item.idTorneo)\">VER</ion-button>\n                \n              </ion-col>\n            </ion-row>            \n        </div>\n      </ion-grid>\n    </ion-slide>\n\n    \n<!-- ---------------------------------------------------SLIDE 2---------------------------------------- -->\n\n    <ion-slide>\n      <ion-grid>\n\n        <form>\n          <div class=\"ion-text-center\" style=\"background-color: rgb(210, 210, 233, 0);\">\n            <img src=\"{{torneo.premioFoto}}\" alt=\"200\" width=\"500\">\n            <h1>{{torneo.nombre}}</h1>\n\n            <ion-row>\n              <ion-col>\n                <h6>\n                  <ion-icon class=\"size\" name=\"calendar-outline\" color=\"secondary\"></ion-icon>\n                      Día del torneo:\n                </h6>\n                <h6>{{torneo.diaTorneo | date:'dd-MMMM-yyyy'}}</h6>\n              </ion-col>\n              <ion-col>\n                <h6>\n                  <ion-icon class=\"size\" name=\"location-outline\" color=\"primary\"></ion-icon>\n                    Dirección:\n                </h6>\n                <h6>{{complejo.localidad}}</h6>\n              </ion-col>\n            </ion-row>\n            \n            <h6 *ngIf=\"torneo.descripcion != ''\">\n              <ion-label>{{torneo.descripcion}}</ion-label>\n            </h6>\n              \n                <h5 class=\"ion-text-center\">Complejo: {{complejo.nombre}}</h5>\n\n                <h5 class=\"ion-text-center\"><ion-icon name=\"call-outline\" style=\"color: red;\"></ion-icon>\n                  {{complejo.numero}}</h5>\n              <ion-row>\n                <ion-col *ngIf=\"ver\">\n                  <ion-list>\n                    <ion-item borde=\"none\">\n                      <ion-label>Elige tu equipo</ion-label>\n                      <ion-select [(ngModel)]=\"equipo.idEquipo\"\n                                  name=\"equipoId\"\n                                  (ngModelChange)=\"llenar()\">\n                        <ion-select-option *ngFor=\"let item of equipos\" value=\"{{item.idEquipo}}\" >{{item.nombre}}</ion-select-option>\n                      </ion-select>\n                    </ion-item>\n                  </ion-list>\n                </ion-col>\n              </ion-row>\n            <ion-row>\n              <!-- <ion-col>\n                <ion-button color=\"success\"\n                            shape=\"round\"\n                          (click)=\"goSlide1()\">Regresar</ion-button>\n              </ion-col> -->\n              <ion-col *ngIf=\"ver\">\n                <ion-button color=\"success\"\n                            fill=\"outline\"\n                           (click)=\"registrar()\" \n                          >Registrar mi equipo</ion-button>\n              </ion-col>\n              <ion-col *ngIf=\"!ver\">\n                <h4 style=\"color: red;\">Torneo lleno</h4>\n              </ion-col>\n            </ion-row>          \n          </div>\n        </form>\n\n      </ion-grid>\n    </ion-slide>\n\n\n\n\n  </ion-slides>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/torneo-user/torneo-user-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/torneo-user/torneo-user-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: TorneoUserPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TorneoUserPageRoutingModule", function() { return TorneoUserPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _torneo_user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./torneo-user.page */ "./src/app/pages/torneo-user/torneo-user.page.ts");




const routes = [
    {
        path: '',
        component: _torneo_user_page__WEBPACK_IMPORTED_MODULE_3__["TorneoUserPage"]
    }
];
let TorneoUserPageRoutingModule = class TorneoUserPageRoutingModule {
};
TorneoUserPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TorneoUserPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/torneo-user/torneo-user.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/torneo-user/torneo-user.module.ts ***!
  \*********************************************************/
/*! exports provided: TorneoUserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TorneoUserPageModule", function() { return TorneoUserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _torneo_user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./torneo-user-routing.module */ "./src/app/pages/torneo-user/torneo-user-routing.module.ts");
/* harmony import */ var _torneo_user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./torneo-user.page */ "./src/app/pages/torneo-user/torneo-user.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let TorneoUserPageModule = class TorneoUserPageModule {
};
TorneoUserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _torneo_user_routing_module__WEBPACK_IMPORTED_MODULE_5__["TorneoUserPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_torneo_user_page__WEBPACK_IMPORTED_MODULE_6__["TorneoUserPage"]]
    })
], TorneoUserPageModule);



/***/ }),

/***/ "./src/app/pages/torneo-user/torneo-user.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/torneo-user/torneo-user.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".derecha {\n  text-align: right;\n}\n\n.centrado {\n  text-align: center;\n}\n\n.izquierda {\n  text-align: left;\n}\n\n.bor {\n  border-bottom: white 2px solid;\n}\n\nion-content.background {\n  --background: url(/assets/img/trofeo.png) 0 0/100% 100% no-repeat;\n  opacity: 0.8;\n}\n\n.img {\n  min-height: 300px;\n  max-height: 570px;\n  width: 1000px;\n}\n\nlabel, ion-label, h1, h2, h3, h4, h5, h6 {\n  text-shadow: 2px 2px 8px #080808;\n}\n\nion-icon {\n  font-size: 27px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdG9ybmVvLXVzZXIvQzpcXFVzZXJzXFxlcmlja1xcT25lRHJpdmVcXERlc2t0b3BcXGlvbmljXFxwcm95ZWN0by9zcmNcXGFwcFxccGFnZXNcXHRvcm5lby11c2VyXFx0b3JuZW8tdXNlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Rvcm5lby11c2VyL3Rvcm5lby11c2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKOztBREFBO0VBQ0ksZ0JBQUE7QUNHSjs7QURBQTtFQUNJLDhCQUFBO0FDR0o7O0FEQUE7RUFDSSxpRUFBQTtFQUNBLFlBQUE7QUNHSjs7QURBQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDR0o7O0FEQUE7RUFDSSxnQ0FBQTtBQ0dKOztBREFBO0VBQ0ksZUFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdG9ybmVvLXVzZXIvdG9ybmVvLXVzZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlcmVjaGF7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uY2VudHJhZG97XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4uaXpxdWllcmRhe1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmJvciB7XHJcbiAgICBib3JkZXItYm90dG9tOiB3aGl0ZSAycHggc29saWQ7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50LmJhY2tncm91bmR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy90cm9mZW8ucG5nKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuICAgIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDU3MHB4O1xyXG4gICAgd2lkdGg6IDEwMDBweDtcclxufVxyXG5cclxubGFiZWwsIGlvbi1sYWJlbCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA4cHggIzA4MDgwODtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG59IiwiLmRlcmVjaGEge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmNlbnRyYWRvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaXpxdWllcmRhIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmJvciB7XG4gIGJvcmRlci1ib3R0b206IHdoaXRlIDJweCBzb2xpZDtcbn1cblxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL3Ryb2Zlby5wbmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5pbWcge1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgbWF4LWhlaWdodDogNTcwcHg7XG4gIHdpZHRoOiAxMDAwcHg7XG59XG5cbmxhYmVsLCBpb24tbGFiZWwsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA4cHggIzA4MDgwODtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDI3cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/torneo-user/torneo-user.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/torneo-user/torneo-user.page.ts ***!
  \*******************************************************/
/*! exports provided: TorneoUserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TorneoUserPage", function() { return TorneoUserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/apiservi.service */ "./src/app/services/apiservi.service.ts");
/* harmony import */ var src_app_services_torneo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/torneo.service */ "./src/app/services/torneo.service.ts");
/* harmony import */ var src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alerta-service.service */ "./src/app/services/alerta-service.service.ts");
/* harmony import */ var src_models_torneo_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/models/torneo.models */ "./src/models/torneo.models.ts");
/* harmony import */ var src_models_torneoEquipo_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/models/torneoEquipo.models */ "./src/models/torneoEquipo.models.ts");
/* harmony import */ var src_models_equipo_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/models/equipo.models */ "./src/models/equipo.models.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_services_equipo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/equipo.service */ "./src/app/services/equipo.service.ts");
/* harmony import */ var src_models_complejo_models__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/models/complejo.models */ "./src/models/complejo.models.ts");













let TorneoUserPage = class TorneoUserPage {
    constructor(actionSheetController, usuarioService, apiServi, torneoService, alertaService, navCtrl, equipoService) {
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
    ngOnInit() {
        this.perfil = this.usuarioService.getUsuario();
        this.slides.lockSwipes(true);
        this.getTodosTorneos();
    }
    // -------------------------------------------METODOS TORNEO---------------------------------------
    getTodosTorneos() {
        this.torneoService.getTorneos()
            .subscribe((resp) => {
            this.torneos = resp;
            console.log(resp);
            this.noVencidas();
        });
    }
    getTorneoId(id) {
        this.torneoService.getTorneooId(id)
            .subscribe((resp) => {
            this.torneo = resp;
            this.obtenerComplejoId(this.torneo.idComplejo);
            this.getEquipoxTorneo(this.torneo.idTorneo);
            this.obtenerEquipoDeUser();
        });
    }
    noVencidas() {
        let valor = 0;
        for (let i = 0; i < this.torneos.length; i++) {
            const val = moment__WEBPACK_IMPORTED_MODULE_10__(this.torneos[i].diaTorneo).format('YYYY-MM-DDTHH:mm');
            if (this.hoy < val) {
                this.torneosNoVen[valor] = this.torneos[i];
                valor++;
            }
        }
    }
    // -------------------------------------------METODOS TORNEO-EQUIPO---------------------------------------
    getEquipoxTorneo(id) {
        this.torneoService.getTorneoEquipoId(id)
            .subscribe((resp) => {
            this.torneosEquipos = resp;
            this.verificarCanEquipos();
        }, error => {
            console.log(error);
        });
    }
    verificarCanEquipos() {
        console.log(this.torneosEquipos.length + ' ' + this.torneo.cantEquipos);
        if (this.torneosEquipos.length < this.torneo.cantEquipos) {
            this.ver = true;
        }
    }
    registrar() {
        this.torneoEquipo.torneoId = this.torneo.idTorneo;
        if (this.torneoEquipo.equipoId === 0 || this.torneoEquipo.equipoId === undefined) {
            this.alertaService.alertaInformativa('Primero debes elegir un equipo donde seas capitan.');
        }
        else {
            this.validar();
        }
    }
    registrarEquipo() {
        console.log('IDTORNEO: ' + this.torneoEquipo.torneoId + ' IDEQUIPO: ' + this.torneoEquipo.equipoId);
        this.torneoService.postTorneoEquipo(this.torneoEquipo)
            .subscribe(data => {
            this.torneoEquipos.push(this.torneoEquipo);
            this.alertaService.alertaInformativa('Registrado!!');
            this.navCtrl.navigateRoot('/inicio');
        }, (error) => {
            this.alertaService.alertaInformativa(error['error']);
        });
    }
    validar() {
        if (this.torneosEquipos.length < this.torneo.cantEquipos) {
            this.registrarEquipo();
        }
        else {
            this.alertaService.alertaInformativa('Torneo ya esta lleno.');
        }
    }
    llenar(id) {
        this.torneoEquipo.equipoId = this.equipo.idEquipo;
    }
    // -------------------------------------------METODOS EQUIPOS---------------------------------------
    obtenerEquipoDeUser() {
        this.equipoService.getEquipoxUsuario(this.perfil.id)
            .subscribe((resp) => {
            this.equipos = resp;
        });
    }
    // -------------------------------------------METODOS COMPLEJO---------------------------------------
    obtenerComplejoId(id) {
        this.apiServi.getComplejoId(id)
            .subscribe((resp) => {
            this.complejo = resp;
            this.goSlide2();
        });
    }
    clea() {
        this.complejo = new src_models_complejo_models__WEBPACK_IMPORTED_MODULE_12__["Complejo"](0, null, null, null, null, false, 0.0, 0.0, new Date(), new Date(), false, false, null);
    }
    // -------------------------------------------------SLIDE--------------------------------
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
};
TorneoUserPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"] },
    { type: src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviService"] },
    { type: src_app_services_torneo_service__WEBPACK_IMPORTED_MODULE_5__["TorneoService"] },
    { type: src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_6__["AlertaServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_equipo_service__WEBPACK_IMPORTED_MODULE_11__["EquipoService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slidePrincipal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], TorneoUserPage.prototype, "slides", void 0);
TorneoUserPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-torneo-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./torneo-user.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/torneo-user/torneo-user.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./torneo-user.page.scss */ "./src/app/pages/torneo-user/torneo-user.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
        src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviService"],
        src_app_services_torneo_service__WEBPACK_IMPORTED_MODULE_5__["TorneoService"],
        src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_6__["AlertaServiceService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_services_equipo_service__WEBPACK_IMPORTED_MODULE_11__["EquipoService"]])
], TorneoUserPage);



/***/ })

}]);
//# sourceMappingURL=pages-torneo-user-torneo-user-module-es2015.js.map