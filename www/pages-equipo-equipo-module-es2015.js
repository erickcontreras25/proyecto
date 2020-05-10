(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-equipo-equipo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/equipo/equipo.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/equipo/equipo.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"Equipo\"></app-header>\n\n\n<ion-content class=\"background\">\n\n  <ion-slides class=\"mainSlide\" [options]=\"{ autoHeight: true }\" #slidePrincipal>\n\n    <ion-slide>\n      <ion-grid>\n\n        <br>\n        <div class=\"derecha\">\n          <ion-button color=\"success\" \n                      routerLink=\"/unirme-equipo\" routerDirection=\"forward\"\n                      shape=\"round\" \n                      fill=\"solid\">BUSCAR EQUIPO</ion-button>\n          </div>\n        <div class=\"derecha\">\n        <ion-button color=\"tertiary\" \n                    (click)=\"mostrarCrear=true\"\n                    shape=\"round\" \n                    fill=\"solid\">CREAR EQUIPO</ion-button>\n        </div>\n\n        <div *ngIf=\"mostrarCrear\">\n          <ion-list>\n            <ion-label>Nombra al equipo</ion-label>\n            <ion-item>\n              <ion-input name=\"nombre\"\n                          type=\"nombre\"\n                          placeholder=\"Nombre\"\n                          required\n                          [(ngModel)]=\"equipo.nombre\"></ion-input>\n            </ion-item>\n          </ion-list>\n\n          <ion-button expand=\"full\" \n                      type=\"submit\"\n                      (click)=\"crearEquipo()\">\n              CREAR\n          </ion-button>\n\n          <ion-button color=\"success\" \n                      (click)=\"mostrarCrear=false\">OCULTAR</ion-button>\n\n        </div>\n\n\n      <h1 style=\"color: black;\">Mis equipos</h1>  \n\n        <div>\n          <ion-card class=\"blanco\">\n            <ion-row class=\"ion-align-items-center\" *ngFor=\"let user of equipoUserUser\">\n              <ion-col size=\"6\" class=\"izquierda\">\n                <h5 style=\"color: black;\">{{user.equipo.nombre}}</h5>\n              </ion-col>\n              \n              <ion-col class=\"derecha\">\n                <ion-button class=\"derecha\"      \n                            shape=\"round\" fill=\"clear\"\n                            (click)=\"obtenerEquipoId(user.equipoId)\"\n                            (click)=\"obtenerEquipoUserId(user.equipoId)\"\n                            (click)=\"goSlide2()\">\n                            <ion-icon color=\"success\" class=\"size\" name=\"return-up-forward-outline\"></ion-icon>\n                          </ion-button>\n                \n              </ion-col>\n            </ion-row>\n\n            \n            \n          </ion-card>  \n        </div>\n\n      <h2 style=\"color: black;\">Administrar mis equipos</h2>\n        <div>          \n          <ion-card class=\"blanco\">\n            <ion-row *ngFor=\"let user of equiposCap\">\n              <ion-col class=\"izquierda\"><h5 style=\"color: black;\">{{user.nombre}}</h5></ion-col>\n              <!-- <ion-col class=\"derecha\">\n                <ion-button *ngIf=\"!unido\" color=\"success\"\n                            (click)=\"llenar(user.idEquipo)\"\n                            (click)=\"uniraEquipo()\">UNIRME</ion-button>\n              </ion-col> -->\n              <ion-col class=\"derecha\">\n                <ion-button color=\"success\"\n                            class=\"derecha\"\n                            shape=\"round\" fill=\"clear\"\n                            (click)=\"obtenerEquipoId(user.idEquipo)\"\n                            (click)=\"obtenerEquipoUserId(user.idEquipo)\"\n                            (click)=\"goSlide3()\">Gestionar</ion-button>              \n              </ion-col>\n            </ion-row>\n\n\n          </ion-card>        \n        </div>\n\n    </ion-grid>\n  </ion-slide>\n\n\n\n\n\n  <ion-slide>\n    <ion-grid>\n    <div>\n      <ion-card class=\"blanco\">\n        <ion-card-title>Miembros</ion-card-title>\n        <ion-row class=\"ion-align-items-center\" *ngFor=\"let user of equipoUsers\">\n          <ion-col>        \n            <h5 class=\"izquierda\" style=\"color: black;\">{{user.user.nombreUsuario}}</h5>                  \n          </ion-col>\n          <ion-col *ngIf=\"user.userId == equipo.userId\" class=\"derecha\">\n            <h5>Capitan</h5>\n          </ion-col>\n          <ion-col *ngIf=\"user.userId == perfil.id && user.userId!=equipo.userId\" class=\"derecha\">\n            <ion-button color=\"warning\"\n                        class=\"derecha\"\n                        fill=\"clear\"                                            \n                        (click)=\"salirEquipo(user.equipoId)\">SALIRME</ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-button color=\"success\"\n                      expand=\"full\"\n                      (click)=\"goSlide1()\">Regresar</ion-button>\n          </ion-col>\n          \n        </ion-row>\n\n      </ion-card>\n    </div>\n  </ion-grid>\n  </ion-slide>\n\n\n\n\n\n  <ion-slide>\n    <ion-grid>\n    <div>\n      <ion-card class=\"blanco\">\n        <ion-row *ngFor=\"let user of equipoUsers\">\n          <ion-col size=\"6\" class=\"izquierda\">        \n            <h5 style=\"color: black;\">{{user.user.nombreUsuario}}</h5>                  \n          </ion-col>\n          <ion-col class=\"derecha\" *ngIf=\"user.userId == equipo.userId\">\n            <h5>Capitan</h5>\n          </ion-col>\n          <ion-col *ngIf=\"user.userId != equipo.userId\" class=\"derecha\">\n            <ion-button color=\"danger\"\n                        class=\"derecha\"\n                        (click)=\"sacarEquipo(user.userId)\">\n                        <ion-icon color=\"light\" name=\"person-remove-outline\"></ion-icon>\n                      </ion-button>\n          </ion-col>    \n        </ion-row>\n        <ion-row>\n          <ion-col>\n          <ion-button   color=\"success\"\n                        expand=\"full\"\n                        (click)=\"ocultar()\"\n                        (click)=\"goSlide1()\">Regresar</ion-button>\n                      </ion-col>\n        </ion-row>\n      </ion-card>\n    </div>  \n  </ion-grid>\n  </ion-slide>\n  \n  \n</ion-slides>\n\n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".centrado {\n  text-align: center;\n}\n\n.derecha {\n  text-align: right;\n}\n\n.izquierda {\n  text-align: left;\n}\n\nion-content.background {\n  --background: url(/assets/img/fondoequipo.jpg) 0 0/100% 100% no-repeat;\n  opacity: 0.8;\n}\n\n.blanco {\n  background-color: white;\n}\n\nion-icon.size {\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXF1aXBvL0M6XFxVc2Vyc1xcZXJpY2tcXE9uZURyaXZlXFxEZXNrdG9wXFxpb25pY1xccHJveWVjdG8vc3JjXFxhcHBcXHBhZ2VzXFxlcXVpcG9cXGVxdWlwby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2VxdWlwby9lcXVpcG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURDQTtFQUNJLGlCQUFBO0FDRUo7O0FEQUE7RUFDSSxnQkFBQTtBQ0dKOztBREFBO0VBQ0ksc0VBQUE7RUFDQSxZQUFBO0FDR0o7O0FEREE7RUFDSSx1QkFBQTtBQ0lKOztBRERBO0VBQ0ksZUFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXF1aXBvL2VxdWlwby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudHJhZG97XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4uZGVyZWNoYXtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5penF1aWVyZGF7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5pb24tY29udGVudC5iYWNrZ3JvdW5ke1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvZm9uZG9lcXVpcG8uanBnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuICAgIG9wYWNpdHk6IDAuODtcclxufVxyXG4uYmxhbmNvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24taWNvbi5zaXplIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufSIsIi5jZW50cmFkbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRlcmVjaGEge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLml6cXVpZXJkYSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmlvbi1jb250ZW50LmJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy9mb25kb2VxdWlwby5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5ibGFuY28ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWljb24uc2l6ZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn0iXX0= */");

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
    constructor(usuarioService, equipoService, navCtrl, alertaService) {
        this.usuarioService = usuarioService;
        this.equipoService = equipoService;
        this.navCtrl = navCtrl;
        this.alertaService = alertaService;
        this.equipo = new src_models_equipo_models__WEBPACK_IMPORTED_MODULE_2__["Equipo"](0, '', '');
        this.equiposCap = [];
        this.equiposMiembro = [];
        this.equipos = [];
        this.equipoUser = new src_models_equipoUser_models__WEBPACK_IMPORTED_MODULE_7__["EquipoUser"](0, '');
        this.equipoUsers = [];
        this.equipoUserUser = [];
        this.mostrarCrear = false;
        this.unido = false;
        this.ver = false;
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
    obtenerTodosEquipos() {
        this.equipoService.getEquipos()
            .subscribe((resp) => {
            this.equipos = resp;
            console.log('SERVICIO ', resp);
        });
    }
    obtenerEquipoId(id) {
        this.equipoService.getEquipoId(id)
            .subscribe((resp) => {
            this.equipo = resp;
        });
    }
    obtenerEquipoxUser() {
        this.equipoService.getEquipoxUsuario(this.perfil.id)
            .subscribe((resp) => {
            this.equiposCap = resp;
        });
    }
    crearEquipo() {
        this.equipo.userId = this.perfil.id;
        this.equipoService.postEquipo(this.equipo)
            .subscribe(data => {
            this.equipos.push(this.equipo);
            this.clear();
            this.alertaService.alertaInformativa('Para completar la creacion debes dar click en boton unirme a equipo');
            this.alertaService.alertaInformativa('Equipo creado');
            this.obtenerEquipoxUser();
            this.mostrarCrear = false;
        }, (error) => {
            console.log(error);
        });
    }
    modificarEquipo() {
        this.equipoService.putEquipo(this.idEquipo, this.equipo)
            .subscribe(data => {
            this.clear();
            this.alertaService.alertaInformativa('Equipo modificado');
        }, (error) => {
            console.log(error);
        });
    }
    // -----------------------------------------------METODOS PARA EQUIPO USUARIOS-----------------------------
    obtenerEquipoUserId(id) {
        this.equipoService.getEquipoUserId(id)
            .subscribe((resp) => {
            this.equipoUsers = resp;
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
    uniraEquipo() {
        this.equipoUser.userId = this.perfil.id;
        this.equipoService.postEquipoUser(this.equipoUser)
            .subscribe(data => {
            this.equipoUsers.push(this.equipoUser);
            this.unido = true;
            this.obtenerEquipoUserxIduser();
        }, (error) => {
            console.log(error);
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
            this.obtenerEquipoUserId(this.equipoUser.equipoId);
        }, error => console.log(error));
    }
    llenar(id) {
        this.equipoUser.equipoId = id;
    }
    ocultar() {
        this.equipoUsers = [];
    }
    clear() {
        this.equipo = new src_models_equipo_models__WEBPACK_IMPORTED_MODULE_2__["Equipo"](0, '', '');
    }
    // -------------------------------------------------SLIDE--------------------------------
    goSlide1() {
        this.slides.lockSwipes(false);
        this.slides.slideTo(0);
        this.slides.lockSwipes(true);
    }
    goSlide2() {
        this.slides.lockSwipes(false);
        this.slides.slideTo(1);
        this.slides.lockSwipes(true);
    }
    goSlide3() {
        this.slides.lockSwipes(false);
        this.slides.slideTo(2);
        this.slides.lockSwipes(true);
    }
};
EquipoPage.ctorParameters = () => [
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"] },
    { type: src_app_services_equipo_service__WEBPACK_IMPORTED_MODULE_4__["EquipoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_6__["AlertaServiceService"] }
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
        src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_6__["AlertaServiceService"]])
], EquipoPage);



/***/ })

}]);
//# sourceMappingURL=pages-equipo-equipo-module-es2015.js.map