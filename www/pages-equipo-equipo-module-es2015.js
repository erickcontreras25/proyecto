(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-equipo-equipo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/equipo/equipo.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/equipo/equipo.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"Equipo\" *ngIf=\"!atras\"></app-header>\n\n<ion-header no-border *ngIf=\"atras\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"slideAtras()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <h2 class=\"centrado\"  *ngIf=\"perfil.id == equipo.userId\">Soy capitán</h2>\n    <h2 class=\"centrado\"  *ngIf=\"perfil.id != equipo.userId\">Soy miembro</h2>\n    <ion-buttons slot=\"end\" *ngIf=\"perfil.id == equipo.userId\">\n      <ion-icon class=\"size shadow\" \n                style=\"color: green;\" \n                (click)=\"actualizar()\"\n                name=\"ellipsis-vertical\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"background\">\n\n  <ion-slides class=\"mainSlide\" [options]=\"{ autoHeight: true }\" #slidePrincipal>\n\n    <ion-slide>\n      <ion-grid>\n\n        <ion-row>\n          <ion-col>\n            <div *ngIf=\"!mostrarCrear\">\n              <ion-button color=\"success\" \n                          (click)=\"mostrarCrear=true\"\n                          fill=\"solid\">\n                          <ion-icon name=\"add-circle-outline\" class=\"size\"></ion-icon>\n                          CREAR EQUIPO                          \n                        </ion-button>\n              </div>\n              <div *ngIf=\"mostrarCrear\">\n                <ion-button color=\"tertiary\" \n                      (click)=\"mostrarCrear=false\">OCULTAR</ion-button>\n              </div>\n          </ion-col>\n          <ion-col class=\"derecha\">\n            <div >\n              <ion-button color=\"light\" \n                          routerLink=\"/unirme-equipo\" routerDirection=\"root\"\n                          class=\"redondo\">\n                          <ion-icon color=\"success\" name=\"search-outline\" class=\"size\"></ion-icon>\n                        </ion-button>\n              </div>\n          </ion-col>\n        </ion-row>\n        \n        \n        \n        <br>\n        <div *ngIf=\"mostrarCrear\">\n          <form #formulario=\"ngForm\">\n          <ion-list>\n            <h4>Dale nombre al equipo</h4>\n            <ion-item>\n              <ion-input name=\"nombre\"\n                          type=\"nombre\"\n                          minlength=\"5\"\n                          maxlength=\"15\"\n                          placeholder=\"Nombre\"                          \n                          required\n                          [(ngModel)]=\"equipo.nombre\"></ion-input>\n            </ion-item>\n\n            <h4>¿Cuántos miembros se permitirán en el equipo?</h4>\n            <ion-item>\n              <ion-input name=\"cantJugadores\"\n                          type=\"number\"\n                          placeholder=\"0\"\n                          required\n                          [(ngModel)]=\"equipo.cantJugadores\"></ion-input>\n            </ion-item>\n          </ion-list>\n\n          <ion-button expand=\"full\" \n                      type=\"submit\"\n                      color=\"success\"\n                      [disabled]=\"formulario.invalid\"\n                      (click)=\"crearEquipo()\">\n              CREAR\n          </ion-button>\n\n          <!-- <ion-button color=\"success\" \n                      (click)=\"mostrarCrear=false\">OCULTAR</ion-button> -->         \n          \n          </form>\n\n        </div>\n\n        <div>\n          <h1 style=\"color: white;\">Mis equipos</h1> \n            <ion-row class=\"ion-align-items-center bor\" *ngFor=\"let user of equipoUserUser\">\n              <ion-col size=\"8\" class=\"izquierda\">\n                <h4 style=\"color: white;\">{{user.equipo.nombre}}</h4>\n              </ion-col>\n              \n              <ion-col class=\"derecha\">\n                <ion-button class=\"derecha\"      \n                            shape=\"round\" fill=\"clear\"\n                            (click)=\"obtenerEquipoId(user.equipoId)\"\n                            (click)=\"getEquipoUserxIdEquipo(user.equipoId)\"\n                            >\n                            <ion-icon color=\"success\" class=\"size\" name=\"return-up-forward-outline\"></ion-icon>\n                          </ion-button>\n                \n              </ion-col>\n            </ion-row>\n            \n        </div>\n\n      <h2 style=\"color: white;\" *ngIf=\"mostrarEIncomp.length != 0\">Completar creación</h2>\n        <div>          \n            <ion-row class=\"bor\" *ngFor=\"let item of mostrarEIncomp\">\n              <ion-col class=\"izquierda\"><h4 style=\"color: white;\">{{item.nombre}}</h4></ion-col>\n              <!-- A PARTIR DE AQUI YA ESTABA COMENTADO  <ion-col class=\"derecha\">\n                <ion-button *ngIf=\"!unido\" color=\"success\"\n                            (click)=\"llenar(user.idEquipo)\"\n                            (click)=\"uniraEquipo()\">UNIRME</ion-button>\n              </ion-col> HASTA AQUI ESTABA COMENTADO -->\n              <ion-col class=\"derecha\">\n                <ion-button color=\"success\"\n                            class=\"derecha\"\n                            shape=\"round\"\n                            (click)=\"uniraEquipo(item.idEquipo)\">Completar creacion</ion-button>              \n              </ion-col>\n            </ion-row>\n        </div>\n\n    </ion-grid>\n  </ion-slide>\n\n\n<!-- -------------------------------------------------------------------------------------------------  -->\n\n\n  <ion-slide>\n    <ion-grid>\n    <div>\n\n      <div>\n        <h1 *ngIf=\"perfil.id == equipo.userId\">{{equipo.nombre}}</h1>\n        <!-- <h2 *ngIf=\"perfil.id == equipo.userId\">Soy capitán</h2> -->\n        <h1 *ngIf=\"perfil.id != equipo.userId\">{{equipo.nombre}}</h1>\n        <!-- <h2 *ngIf=\"perfil.id != equipo.userId\">Miembros</h2> -->\n        \n        <ion-row *ngIf=\"perfil.id == equipo.userId\" class=\"bor\">\n          <ion-col class=\"izquierda\" size=\"9\">\n              Jugadores permitidos: \n          </ion-col>\n          <ion-col class=\"derecha\">\n            {{equipo.cantJugadores}} \n          </ion-col>          \n        </ion-row>\n        <ion-row *ngIf=\"perfil.id == equipo.userId\" class=\"bor\">\n          <ion-col class=\"izquierda\" size=\"9\">\n            Jugadores en el equipo:\n          </ion-col>\n          <ion-col class=\"derecha\">\n            {{equipoUsers.length}} \n          </ion-col>          \n        </ion-row>\n        <br>\n        <h2 *ngIf=\"perfil.id == equipo.userId\">Miembros</h2><br>\n\n        <ion-row class=\"ion-align-items-center bor\" *ngFor=\"let user of equipoUsers\">\n          <ion-col>        \n            <h4 class=\"izquierda\">{{user.user.nombreUsuario}}</h4>                  \n          </ion-col>\n          <ion-col *ngIf=\"user.userId == equipo.userId\" class=\"derecha\">\n            <h6>Capitán</h6>\n          </ion-col>\n          <ion-col *ngIf=\"user.userId != equipo.userId && equipo.userId == perfil.id\" class=\"derecha\">\n            <ion-icon class=\"size shadow\" \n                style=\"color: green\" \n                (click)=\"actualizarCapitan(user.userId)\"\n                name=\"ellipsis-vertical\"></ion-icon>\n          </ion-col>\n          <!-- <ion-col *ngIf=\"user.userId != equipo.userId && equipo.userId == perfil.id\" class=\"derecha\">\n            <ion-button color=\"success\"\n                        class=\"derecha\"\n                        (click)=\"cambiarCapitan(user.userId)\">\n                        Elegir como capitan\n                      </ion-button>\n          </ion-col> \n          <ion-col *ngIf=\"user.userId != equipo.userId && equipo.userId == perfil.id\" class=\"derecha\">\n            <ion-button color=\"danger\"\n                        class=\"derecha\"\n                        (click)=\"sacarEquipo(user.userId)\">\n                        <ion-icon color=\"light\" name=\"person-remove-outline\"></ion-icon>\n                      </ion-button>\n          </ion-col>  -->\n          <ion-col *ngIf=\"user.userId == perfil.id && user.userId!=equipo.userId\" class=\"derecha\">\n            <h5 style=\"color: red;\" (click)=\"salirEquipo(user.equipoId)\">Salirme</h5>\n          </ion-col>\n        </ion-row>\n        \n\n      </div>\n    </div>\n  </ion-grid>\n  </ion-slide>\n\n\n<!-- -------------------------------------------------------------------------------------------------  -->\n\n\n\n  <ion-slide>\n    <ion-grid>\n      <form>\n        \n      </form>\n    </ion-grid>\n  </ion-slide>\n  \n  \n</ion-slides>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/equipo/equipo-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/equipo/equipo-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: EquipoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipoPageRoutingModule", function() { return EquipoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _equipo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./equipo.page */ "./src/app/pages/equipo/equipo.page.ts");




const routes = [
    {
        path: '',
        component: _equipo_page__WEBPACK_IMPORTED_MODULE_3__["EquipoPage"]
    }
];
let EquipoPageRoutingModule = class EquipoPageRoutingModule {
};
EquipoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EquipoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/equipo/equipo.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/equipo/equipo.module.ts ***!
  \***********************************************/
/*! exports provided: EquipoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipoPageModule", function() { return EquipoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _equipo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./equipo-routing.module */ "./src/app/pages/equipo/equipo-routing.module.ts");
/* harmony import */ var _equipo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./equipo.page */ "./src/app/pages/equipo/equipo.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let EquipoPageModule = class EquipoPageModule {
};
EquipoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _equipo_routing_module__WEBPACK_IMPORTED_MODULE_5__["EquipoPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_equipo_page__WEBPACK_IMPORTED_MODULE_6__["EquipoPage"]]
    })
], EquipoPageModule);



/***/ }),

/***/ "./src/app/pages/equipo/equipo.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/equipo/equipo.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".centrado {\n  text-align: center;\n}\n\n.derecha {\n  text-align: right;\n}\n\n.izquierda {\n  text-align: left;\n}\n\nion-content.background {\n  --background: url(/assets/img/fondo1.jpg) 0 0/100% 100% no-repeat;\n  opacity: 0.8;\n}\n\nion-content.background2 {\n  --background: var(--ion-color-dark);\n}\n\n.blanco {\n  background-color: white;\n}\n\nion-icon.size {\n  font-size: 30px;\n}\n\n.bor {\n  border-bottom: rgba(255, 255, 255, 0.877) 1px solid;\n}\n\nlabel, ion-label, h1, h2, h3, h4, h5, h6 {\n  text-shadow: 2px 2px 8px #080808;\n}\n\n.redondo {\n  --border-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXF1aXBvL0M6XFxVc2Vyc1xcZXJpY2tcXE9uZURyaXZlXFxEZXNrdG9wXFxpb25pY1xccHJveWVjdG8vc3JjXFxhcHBcXHBhZ2VzXFxlcXVpcG9cXGVxdWlwby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2VxdWlwby9lcXVpcG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURDQTtFQUNJLGlCQUFBO0FDRUo7O0FEQUE7RUFDSSxnQkFBQTtBQ0dKOztBREFBO0VBQ0ksaUVBQUE7RUFDQSxZQUFBO0FDR0o7O0FEREE7RUFDSSxtQ0FBQTtBQ0lKOztBREZBO0VBQ0ksdUJBQUE7QUNLSjs7QURGQTtFQUNJLGVBQUE7QUNLSjs7QURGQTtFQUNJLG1EQUFBO0FDS0o7O0FERkE7RUFDSSxnQ0FBQTtBQ0tKOztBREZBO0VBQ0kscUJBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VxdWlwby9lcXVpcG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRyYWRve1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuLmRlcmVjaGF7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uaXpxdWllcmRhe1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL2ZvbmRvMS5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG59XHJcbmlvbi1jb250ZW50LmJhY2tncm91bmQyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG59XHJcbi5ibGFuY28ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1pY29uLnNpemUge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4uYm9yIHtcclxuICAgIGJvcmRlci1ib3R0b206IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NzcpIDFweCBzb2xpZDtcclxufVxyXG5cclxubGFiZWwsIGlvbi1sYWJlbCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA4cHggIzA4MDgwODtcclxufVxyXG5cclxuLnJlZG9uZG8ge1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59IiwiLmNlbnRyYWRvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGVyZWNoYSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uaXpxdWllcmRhIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL2ZvbmRvMS5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbmlvbi1jb250ZW50LmJhY2tncm91bmQyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5cbi5ibGFuY28ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWljb24uc2l6ZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmJvciB7XG4gIGJvcmRlci1ib3R0b206IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NzcpIDFweCBzb2xpZDtcbn1cblxubGFiZWwsIGlvbi1sYWJlbCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDhweCAjMDgwODA4O1xufVxuXG4ucmVkb25kbyB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/equipo/equipo.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/equipo/equipo.page.ts ***!
  \*********************************************/
/*! exports provided: EquipoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipoPage", function() { return EquipoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_models_equipo_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/equipo.models */ "./src/models/equipo.models.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_services_equipo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/equipo.service */ "./src/app/services/equipo.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alerta-service.service */ "./src/app/services/alerta-service.service.ts");
/* harmony import */ var src_models_equipoUser_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/models/equipoUser.models */ "./src/models/equipoUser.models.ts");








let EquipoPage = class EquipoPage {
    constructor(usuarioService, equipoService, navCtrl, alertaService, alertController, actionSheetController) {
        this.usuarioService = usuarioService;
        this.equipoService = equipoService;
        this.navCtrl = navCtrl;
        this.alertaService = alertaService;
        this.alertController = alertController;
        this.actionSheetController = actionSheetController;
        this.equipo = new src_models_equipo_models__WEBPACK_IMPORTED_MODULE_2__["Equipo"](0, '', null, '');
        this.equiposCap = [];
        this.mostrarEIncomp = [];
        this.equiposMiembro = [];
        this.equipos = [];
        this.equipoUser = new src_models_equipoUser_models__WEBPACK_IMPORTED_MODULE_7__["EquipoUser"](0, '');
        this.equipoUsers = [];
        this.idEquipoUser = [];
        this.equipoUserUser = [];
        this.mostrarCrear = false;
        this.ver = false;
        this.atras = false;
    }
    ngOnInit() {
        this.perfil = this.usuarioService.getUsuario();
        this.slides.lockSwipes(true);
        this.obtenerEquipoxUser();
        this.obtenerEquipoUserxIduser();
    }
    // eliminarEquipo() {
    //   this.apiServi.deleteEquipo(this.idEquipo)
    //   .subscribe( resp => {
    //     console.log('ELIMINADO CON EXITO');
    //   });
    // }
    // -----------------------------------------------METODOS EQUIPO--------------------------------------------
    obtenerTodosEquipos() {
        this.equipoService.getEquipos()
            .subscribe((resp) => {
            this.equipos = resp;
        });
    }
    obtenerEquipoId(id) {
        this.equipoService.getEquipoId(id)
            .subscribe((resp) => {
            this.equipo = resp;
            // console.log(this.equipo);
        });
    }
    obtenerEquipoxUser() {
        this.equipoService.getEquipoxUsuario(this.perfil.id)
            .subscribe((resp) => {
            this.equiposCap = resp;
            this.verificarCompleto();
        });
    }
    crearEquipo() {
        this.equipo.userId = this.perfil.id;
        this.equipoService.postEquipo(this.equipo)
            .subscribe(data => {
            this.clear();
            this.alertaService.alertaInformativa('Equipo creado. \n Ahora solo tienes que dar click en completar creacion.');
            this.obtenerEquipoxUser();
            this.obtenerEquipoUserxIduser();
            this.mostrarCrear = false;
        }, (error) => {
            console.log(error);
        });
    }
    cambiarCapitan(user) {
        this.equipo.userId = user;
        this.equipoService.putEquipo(this.equipo.idEquipo, this.equipo)
            .subscribe(data => {
            // this.clear();
            this.alertaService.alertaInformativa('Actualizado!!');
            this.obtenerEquipoxUser();
            this.obtenerEquipoUserxIduser();
            // this.goSlide1();
        }, (error) => {
            console.log(error);
        });
    }
    modificarEquipo() {
        this.equipoService.putEquipo(this.equipo.idEquipo, this.equipo)
            .subscribe(data => {
            // this.clear();
            this.aux = null;
            this.alertaService.alertaInformativa('Actualizado!!');
            this.obtenerEquipoxUser();
            this.obtenerEquipoUserxIduser();
            // this.goSlide1();
        }, (error) => {
            this.equipo.cantJugadores = this.aux;
            console.log(error['error']);
            this.alertaService.alertaInformativa(error['error']);
        });
    }
    // ----------------------------------------------- --------------------------------------------------
    actualizar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Actualizar',
                buttons: [{
                        text: 'Cantidad de Jugadores a admitir',
                        icon: 'people',
                        cssClass: 'azul',
                        handler: () => {
                            this.presentAlertPrompt();
                        }
                    }, {
                        text: 'Nombre del equipo',
                        icon: 'receipt',
                        cssClass: 'morado',
                        handler: () => {
                            this.actualizarNombre();
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    actualizarCapitan(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Opciones',
                buttons: [{
                        text: 'Sacar del equipo',
                        icon: 'person-remove',
                        cssClass: 'rojo',
                        handler: () => {
                            this.sacarEquipo(id);
                        }
                    }, {
                        text: 'Elegir como nuevo capitán',
                        icon: 'shield-checkmark',
                        cssClass: 'verde',
                        handler: () => {
                            this.cambiarCapitan(id);
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    presentAlertPrompt() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Aumenta o disminuye la cantidad de jugadores que quieres que tenga el equipo.',
                message: '<strong>Actualmente el máximo de jugadores es de ' + this.equipo.cantJugadores + ' </strong>',
                inputs: [
                    {
                        name: 'cantJugadores',
                        type: 'number',
                        min: 0,
                        max: 2000
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Ok',
                        handler: data => {
                            console.log('Confirm Ok');
                            this.aux = this.equipo.cantJugadores;
                            this.equipo.cantJugadores = data.cantJugadores;
                            this.modificarEquipo();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    actualizarNombre() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Cambiale el nombre al equipo',
                message: '<strong>Actualmente se llama ' + this.equipo.nombre + ' </strong>',
                inputs: [
                    {
                        name: 'nombre',
                        type: 'text',
                    }
                ], buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Okay',
                        handler: data => {
                            this.equipo.nombre = data.nombre;
                            this.modificarEquipo();
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // -----------------------------------------------METODOS EQUIPO-USER--------------------------------------------
    verificarCompleto() {
        let aux = 0;
        for (let i = 0; i < this.equiposCap.length; i++) {
            // this.obtenerEquipoUserId(this.equiposCap[i].idEquipo);
            this.equipoService.getEquipoUserId(this.equiposCap[i].idEquipo)
                .subscribe((resp) => {
                this.idEquipoUser = resp;
                if (this.idEquipoUser.length < 1) {
                    this.mostrarEIncomp[aux] = this.equiposCap[i];
                    this.idEquipoUser = [];
                    aux = aux + 1;
                }
            });
            // console.log(this.mostrarEIncomp);
        }
    }
    obtenerEquipoUserId(id) {
        this.equipoService.getEquipoUserId(id)
            .subscribe((resp) => {
            this.idEquipoUser = resp;
            // this.goSlide2();
        }, (error) => {
            console.log(error);
        });
    }
    obtenerEquipoUserxIduser() {
        this.equipoService.getEquipoUserxUsuario(this.perfil.id)
            .subscribe((resp) => {
            this.equipoUserUser = resp;
        }, (error) => {
            console.log(error);
        });
    }
    getEquipoUserxIdEquipo(id) {
        this.equipoService.getEquipoUserId(id)
            .subscribe((resp) => {
            this.equipoUsers = resp;
            this.goSlide2();
        }, (error) => {
            console.log(error);
        });
    }
    uniraEquipo(id) {
        this.equipoUser.userId = this.perfil.id;
        this.equipoUser.equipoId = id;
        this.equipoService.postEquipoUser(this.equipoUser)
            .subscribe(data => {
            // this.equipoUsers.push(this.equipoUser);
            this.alertaService.alertaInformativa('Creacion completada.');
            this.mostrarEIncomp = [];
            this.obtenerEquipoxUser();
            this.obtenerEquipoUserxIduser();
        }, (error) => {
            console.log(error['error']);
        });
    }
    salirEquipo(id) {
        this.equipoUser.userId = this.perfil.id;
        this.equipoService.deleteEquipoUser(id, this.equipoUser.userId)
            .subscribe(resp => {
            this.alertaService.alertaInformativa('Hecho!!');
            this.obtenerEquipoUserxIduser();
            this.goSlide1();
        }, error => console.log(error));
    }
    sacarEquipo(id) {
        this.equipoUser.equipoId = this.equipo.idEquipo;
        this.equipoService.deleteEquipoUser(this.equipoUser.equipoId, id)
            .subscribe(resp => {
            this.alertaService.alertaInformativa('Hecho!!');
            this.obtenerEquipoUserxIduser();
            this.getEquipoUserxIdEquipo(this.equipoUser.equipoId);
        }, error => console.log(error));
    }
    // ----------------------------------------------- --------------------------------------------------
    llenar(id) {
        this.equipoUser.equipoId = id;
    }
    ocultar() {
        this.equipoUsers = [];
    }
    clear() {
        this.equipo = new src_models_equipo_models__WEBPACK_IMPORTED_MODULE_2__["Equipo"](0, '', 0, '');
    }
    // -----------------------------------------------------------SLIDE---------------------------------------------
    goSlide1() {
        this.clear();
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
    slideAtras() {
        this.slides.lockSwipes(false);
        this.slides.slidePrev();
        this.slides.lockSwipes(true);
        this.clear();
        this.slides.isBeginning().then(data => {
            if (data === true) {
                this.atras = false;
            }
        });
    }
};
EquipoPage.ctorParameters = () => [
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"] },
    { type: src_app_services_equipo_service__WEBPACK_IMPORTED_MODULE_4__["EquipoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_6__["AlertaServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slidePrincipal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSlides"])
], EquipoPage.prototype, "slides", void 0);
EquipoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-equipo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./equipo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/equipo/equipo.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./equipo.page.scss */ "./src/app/pages/equipo/equipo.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
        src_app_services_equipo_service__WEBPACK_IMPORTED_MODULE_4__["EquipoService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_6__["AlertaServiceService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"]])
], EquipoPage);



/***/ })

}]);
//# sourceMappingURL=pages-equipo-equipo-module-es2015.js.map