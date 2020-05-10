(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-unirme-equipo-unirme-equipo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unirme-equipo/unirme-equipo.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unirme-equipo/unirme-equipo.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"Unirme Equipo\"></app-header>\n\n<ion-content>\n\n  <ion-slides class=\"mainSlide\" [options]=\"{ autoHeight: true }\" #slidePrincipal>\n    <ion-slide>\n      <ion-grid>\n\n        <h1 style=\"color: black;\">Equipos</h1>  \n\n        <div>\n            <ion-row *ngFor=\"let user of equipos\">\n              <ion-col size=\"6\" class=\"izquierda\"><h5>{{user.nombre}}</h5></ion-col>\n              <ion-col class=\"derecha\">\n                <ion-button color=\"success\"\n                            class=\"derecha\"      \n                            fill=\"solid\"                \n                            (click)=\"llenar(user.idEquipo)\"\n                            (click)=\"uniraEquipo()\">\n                            <ion-icon name=\"add-circle-outline\"></ion-icon>\n                            UNIRME\n                            </ion-button>\n                \n              </ion-col>\n            </ion-row>            \n        </div>\n\n      </ion-grid>\n    </ion-slide>\n\n\n  </ion-slides>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/unirme-equipo/unirme-equipo-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/unirme-equipo/unirme-equipo-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: UnirmeEquipoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnirmeEquipoPageRoutingModule", function() { return UnirmeEquipoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _unirme_equipo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unirme-equipo.page */ "./src/app/pages/unirme-equipo/unirme-equipo.page.ts");




const routes = [
    {
        path: '',
        component: _unirme_equipo_page__WEBPACK_IMPORTED_MODULE_3__["UnirmeEquipoPage"]
    }
];
let UnirmeEquipoPageRoutingModule = class UnirmeEquipoPageRoutingModule {
};
UnirmeEquipoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UnirmeEquipoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/unirme-equipo/unirme-equipo.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/unirme-equipo/unirme-equipo.module.ts ***!
  \*************************************************************/
/*! exports provided: UnirmeEquipoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnirmeEquipoPageModule", function() { return UnirmeEquipoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _unirme_equipo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./unirme-equipo-routing.module */ "./src/app/pages/unirme-equipo/unirme-equipo-routing.module.ts");
/* harmony import */ var _unirme_equipo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./unirme-equipo.page */ "./src/app/pages/unirme-equipo/unirme-equipo.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let UnirmeEquipoPageModule = class UnirmeEquipoPageModule {
};
UnirmeEquipoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _unirme_equipo_routing_module__WEBPACK_IMPORTED_MODULE_5__["UnirmeEquipoPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_unirme_equipo_page__WEBPACK_IMPORTED_MODULE_6__["UnirmeEquipoPage"]]
    })
], UnirmeEquipoPageModule);



/***/ }),

/***/ "./src/app/pages/unirme-equipo/unirme-equipo.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/unirme-equipo/unirme-equipo.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".centrado {\n  text-align: center;\n}\n\n.derecha {\n  text-align: right;\n}\n\n.izquierda {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdW5pcm1lLWVxdWlwby9DOlxcVXNlcnNcXGVyaWNrXFxPbmVEcml2ZVxcRGVza3RvcFxcaW9uaWNcXHByb3llY3RvL3NyY1xcYXBwXFxwYWdlc1xcdW5pcm1lLWVxdWlwb1xcdW5pcm1lLWVxdWlwby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3VuaXJtZS1lcXVpcG8vdW5pcm1lLWVxdWlwby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksaUJBQUE7QUNFSjs7QURBQTtFQUNJLGdCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91bmlybWUtZXF1aXBvL3VuaXJtZS1lcXVpcG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRyYWRve1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuLmRlcmVjaGF7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uaXpxdWllcmRhe1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufSIsIi5jZW50cmFkbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRlcmVjaGEge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLml6cXVpZXJkYSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/unirme-equipo/unirme-equipo.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/unirme-equipo/unirme-equipo.page.ts ***!
  \***********************************************************/
/*! exports provided: UnirmeEquipoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnirmeEquipoPage", function() { return UnirmeEquipoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_models_equipo_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/equipo.models */ "./src/models/equipo.models.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_services_equipo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/equipo.service */ "./src/app/services/equipo.service.ts");
/* harmony import */ var src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alerta-service.service */ "./src/app/services/alerta-service.service.ts");
/* harmony import */ var src_models_equipoUser_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/models/equipoUser.models */ "./src/models/equipoUser.models.ts");








let UnirmeEquipoPage = class UnirmeEquipoPage {
    constructor(usuarioService, equipoService, navCtrl, alertaService) {
        this.usuarioService = usuarioService;
        this.equipoService = equipoService;
        this.navCtrl = navCtrl;
        this.alertaService = alertaService;
        this.equipos = [];
        this.equipo = new src_models_equipo_models__WEBPACK_IMPORTED_MODULE_3__["Equipo"](0, '', '');
        this.equipoUsers = [];
        this.equipoUser = new src_models_equipoUser_models__WEBPACK_IMPORTED_MODULE_7__["EquipoUser"](0, '');
    }
    ngOnInit() {
        this.perfil = this.usuarioService.getUsuario();
        this.perfil = this.usuarioService.getUsuario();
        console.log(this.perfil.id);
        this.slides.lockSwipes(true);
        this.obtenerTodosEquipos();
    }
    obtenerTodosEquipos() {
        this.equipoService.getEquipos()
            .subscribe((resp) => {
            this.equipos = resp;
        });
    }
    uniraEquipo() {
        this.equipoUser.userId = this.perfil.id;
        this.equipoService.postEquipoUser(this.equipoUser)
            .subscribe(data => {
            this.equipoUsers.push(this.equipoUser);
            this.alertaService.alertaInformativa('Hecho!!');
            this.navCtrl.navigateRoot('/inicio');
        }, (error) => {
            this.alertaService.alertaInformativa('Ya estas unido a este equipo');
            console.log(error);
        });
    }
    llenar(id) {
        this.equipoUser.equipoId = id;
    }
};
UnirmeEquipoPage.ctorParameters = () => [
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"] },
    { type: src_app_services_equipo_service__WEBPACK_IMPORTED_MODULE_5__["EquipoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_6__["AlertaServiceService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slidePrincipal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], UnirmeEquipoPage.prototype, "slides", void 0);
UnirmeEquipoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-unirme-equipo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./unirme-equipo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unirme-equipo/unirme-equipo.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./unirme-equipo.page.scss */ "./src/app/pages/unirme-equipo/unirme-equipo.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"],
        src_app_services_equipo_service__WEBPACK_IMPORTED_MODULE_5__["EquipoService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_6__["AlertaServiceService"]])
], UnirmeEquipoPage);



/***/ })

}]);
//# sourceMappingURL=pages-unirme-equipo-unirme-equipo-module-es2015.js.map