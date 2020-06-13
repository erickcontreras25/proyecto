(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-crear-perfil-crear-perfil-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/crear-perfil/crear-perfil.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/crear-perfil/crear-perfil.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"crear usuario\"></app-header>\n\n\n<ion-content>\n\n  <!-- <form #formulario=\"ngForm\" (ngSubmit)=\"agregarUsuario()\">\n    <ion-list>\n\n      <ion-item>\n        <ion-label position=\"floating\">Nombre de usuario</ion-label>\n        <ion-input type=\"text\"\n                    name=\"nombreUsuario\"\n                   [(ngModel)]=\"perfil.nombreUsuario\"\n                   required>\n                  </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Edad</ion-label>\n        <ion-input type =\"number\"\n                    name =\"edad\"\n                   [(ngModel)]=\"perfil.edad\"\n                   >\n                  </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Email</ion-label>\n        <ion-input type=\"email\"\n                    name=\"email\"\n                   [(ngModel)]=\"perfil.email\"\n                   required>\n                  </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Password</ion-label>\n        <ion-input type=\"password\"\n                    name=\"password\"\n                   [(ngModel)]=\"perfil.password\"\n                   required>\n                  </ion-input>\n      </ion-item>\n    </ion-list>\n    <ion-button expand=\"full\" type=\"submit\"\n    [disabled]=\"formulario.invalid\" routerLink=\"/login\">\n        Guardar\n    </ion-button>\n  \n  </form> -->\n\n  <form method=\"post\" action=\"\">\n    <label for=\"nombre\">Nombre:</label>\n    <input type=\"text\" name=\"nombre\" id=\"nombre\"><br><br>\n\n    <label for=\"nombre\">Asunto:</label>\n    <input type=\"text\" name=\"asunto\" id=\"asunto\"><br><br>\n\n    <label for=\"nombre\">Mensaje:</label>\n    <textarea name=\"mensaje\" id=\"mensaje\" cols=\"30\" rows=\"10\"></textarea>\n\n    <input type=\"submit\">\n  </form>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/crear-perfil/crear-perfil-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/crear-perfil/crear-perfil-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: CrearPerfilPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearPerfilPageRoutingModule", function() { return CrearPerfilPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _crear_perfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crear-perfil.page */ "./src/app/pages/crear-perfil/crear-perfil.page.ts");




const routes = [
    {
        path: '',
        component: _crear_perfil_page__WEBPACK_IMPORTED_MODULE_3__["CrearPerfilPage"]
    }
];
let CrearPerfilPageRoutingModule = class CrearPerfilPageRoutingModule {
};
CrearPerfilPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CrearPerfilPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/crear-perfil/crear-perfil.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/crear-perfil/crear-perfil.module.ts ***!
  \***********************************************************/
/*! exports provided: CrearPerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearPerfilPageModule", function() { return CrearPerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _crear_perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crear-perfil-routing.module */ "./src/app/pages/crear-perfil/crear-perfil-routing.module.ts");
/* harmony import */ var _crear_perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crear-perfil.page */ "./src/app/pages/crear-perfil/crear-perfil.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let CrearPerfilPageModule = class CrearPerfilPageModule {
};
CrearPerfilPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _crear_perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__["CrearPerfilPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_crear_perfil_page__WEBPACK_IMPORTED_MODULE_6__["CrearPerfilPage"]]
    })
], CrearPerfilPageModule);



/***/ }),

/***/ "./src/app/pages/crear-perfil/crear-perfil.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/crear-perfil/crear-perfil.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("label {\n  width: 150px;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3JlYXItcGVyZmlsL0M6XFxVc2Vyc1xcZXJpY2tcXE9uZURyaXZlXFxEZXNrdG9wXFxpb25pY1xccHJveWVjdG8vc3JjXFxhcHBcXHBhZ2VzXFxjcmVhci1wZXJmaWxcXGNyZWFyLXBlcmZpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NyZWFyLXBlcmZpbC9jcmVhci1wZXJmaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jcmVhci1wZXJmaWwvY3JlYXItcGVyZmlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufSIsImxhYmVsIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/crear-perfil/crear-perfil.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/crear-perfil/crear-perfil.page.ts ***!
  \*********************************************************/
/*! exports provided: CrearPerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearPerfilPage", function() { return CrearPerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/apiservi.service */ "./src/app/services/apiservi.service.ts");
/* harmony import */ var src_models_usuario_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/usuario.models */ "./src/models/usuario.models.ts");




let CrearPerfilPage = class CrearPerfilPage {
    constructor(apiServi) {
        this.apiServi = apiServi;
        this.perfiles = [];
        this.perfil = new src_models_usuario_models__WEBPACK_IMPORTED_MODULE_3__["Usuario"](null, null, null, null, false);
    }
    ngOnInit() {
    }
    enviar() {
    }
};
CrearPerfilPage.ctorParameters = () => [
    { type: src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviService"] }
];
CrearPerfilPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crear-perfil',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./crear-perfil.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/crear-perfil/crear-perfil.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./crear-perfil.page.scss */ "./src/app/pages/crear-perfil/crear-perfil.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviService"]])
], CrearPerfilPage);



/***/ })

}]);
//# sourceMappingURL=pages-crear-perfil-crear-perfil-module-es2015.js.map