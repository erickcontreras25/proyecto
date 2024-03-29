(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-torneo-torneo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/torneo/torneo.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/torneo/torneo.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"Torneo\" *ngIf=\"!atras\"></app-header>\n\n<ion-header no-border *ngIf=\"atras && !mD\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"slideAtras()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-icon class=\"size shadow\" \n                style=\"color: white;\" \n                (click)=\"actualizar()\"\n                name=\"ellipsis-vertical\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-header no-border *ngIf=\"mD\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goSlide2()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"background\">\n\n  <ion-slides class=\"mainSlide\" [options]=\"{ autoHeight: true }\" #slidePrincipal>\n\n<!-- ---------------------------------------------------SLIDE 1---------------------------------------- -->\n\n    <ion-slide>\n      <ion-grid>\n        \n        <div class=\"derecha\">\n          <ion-button color=\"success\" \n                      (click)=\"mostrarCrear=true\"\n                      shape=\"round\" \n                      fill=\"solid\"\n                      routerLink=\"/crear-torneo\" routerDirection=\"root\">CREAR TORNEO</ion-button>\n          </div>  \n          \n            <h2 class=\"ion-text-center\">Mis torneos</h2>\n            <div>\n                <ion-row class=\"ion-align-items-center bor\" *ngFor=\"let item of torneosxUser\">\n                  <ion-col class=\"izquierda\">\n                    <h4 style=\"color: white;\">{{item.nombre}}</h4>\n                  </ion-col>\n                  <ion-col *ngIf=\"item.diaTorneo < hoy\">\n                    <label  style=\"color: tomato;\"> Finalizado</label>\n                  </ion-col>\n                  <ion-col *ngIf=\"item.diaTorneo > hoy\">\n                    <label  style=\"color: rgb(0, 119, 255);\"> {{item.diaTorneo | date:'yyyy-MMMM-dd'}}</label>\n                  </ion-col>\n                  <ion-col class=\"derecha\">\n                    <ion-button color=\"success\"\n                                          class=\"derecha\"      \n                                          shape=\"round\" fill=\"outline\"\n                                          (click)=\"getTorneoId(item.idTorneo)\"\n                                          >VER</ion-button>\n                  </ion-col>\n                </ion-row>\n            </div>\n            \n\n      </ion-grid>\n    </ion-slide>\n    \n<!-- ---------------------------------------------------SLIDE 2---------------------------------------- -->\n  <ion-slide>\n    <ion-grid fixed>\n        <form>\n          <h3>{{torneoUser.nombre}}</h3>\n          <div>\n            <ion-row class=\"bor\">\n              <ion-col class=\"izquierda\">\n                <h6 style=\"color: white;\">Dia del torneo:</h6>\n              </ion-col>\n              <ion-col class=\"derecha\">\n                <h6 style=\"color: white;\">{{torneoUser.diaTorneo | date:'dd-MMMM-yyyy'}}</h6>\n              </ion-col>              \n            </ion-row>\n            <ion-row class=\"bor\">\n              <ion-col class=\"izquierda\">\n                <h6 style=\"color: white;\">Cupos habilitados:</h6>\n              </ion-col>\n              <ion-col class=\"derecha\">\n                <h6 style=\"color: white;\">{{torneoUser.cantEquipos}}</h6>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"bor\">\n              <ion-col class=\"izquierda\">\n                <h6 style=\"color: white;\">Equipos inscritos: </h6>\n              </ion-col>\n              <ion-col class=\"derecha\">\n                <h6 style=\"color: white;\">{{equipoxTorneo.length}}</h6>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col class=\"izquierda\">\n                <h6 style=\"color: white;\">Cupos disponibles: </h6>\n              </ion-col>\n              <ion-col class=\"derecha\">\n                <h6 style=\"color: white;\">{{torneoUser.cantEquipos - equipoxTorneo.length}}</h6>\n              </ion-col>\n            </ion-row>\n\n          </div>\n          <ion-row>\n            <ion-col>\n              <ion-button color=\"success\"\n                          shape=\"round\"\n                        (click)=\"mostrarDel()\">Ver Equipos Inscritos</ion-button>\n            </ion-col>\n          </ion-row> \n        </form>\n  </ion-grid>\n  </ion-slide>\n\n\n<!-- ---------------------------------------------------SLIDE 3---------------------------------------- -->\n\n  <ion-slide>\n    <ion-grid>\n \n      <!-- <h2 class=\"ion-text-center\">Equipos inscritos: {{calcu}}</h2> -->\n      <div>\n        <h1>Equipos</h1>\n          <ion-row *ngFor=\"let item of equipoxTorneo\" class=\"bor\">\n            <ion-col class=\"izquierda\">        \n              <h5 style=\"color: white;\">{{item.equipo.nombre}}</h5>                  \n            </ion-col> \n            <ion-col class=\"derecha\" *ngIf=\"mE\">\n              <ion-button color=\"success\"\n                          class=\"derecha\"\n                          (click)=\"sacardTorneo(item.torneoId, item.equipoId)\">Sacar del torneo</ion-button>\n            </ion-col>    \n          </ion-row>\n\n      </div>\n      \n  </ion-grid>\n</ion-slide>\n\n<!-- ---------------------------------------------------SLIDE 4---------------------------------------- -->\n\n<ion-slide>\n  <ion-grid>\n    <form #formulario=\"ngForm\">\n\n      <ion-row>\n        <ion-col>\n            <h4>Imagen Actual</h4>\n          <div>\n              <img class=\"img\" src=\"{{torneoUser.premioFoto}}\">\n          </div>                  \n        </ion-col>\n      </ion-row>\n  \n        <ion-row>\n          <ion-col>\n            <div>\n              <h4>Cambia la imagen</h4>                        \n              <ion-item>\n                  <input type=\"file\"\n                         id=\"img\"\n                         name=\"img\"\n                         ngModel\n                         required>\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n  \n        <ion-row>\n          <ion-col>\n            <ion-button \n                        type=\"submit\"\n                        color=\"success\"\n                        shape=\"round\"\n                        [disabled]=\"formulario.invalid\"\n                        (click)=\"modificarTorneoConImagen()\">\n                        <ion-icon name=\"sync-outline\"></ion-icon>\n                Actualizar\n            </ion-button>  \n          </ion-col>\n        </ion-row>\n\n    </form>    \n  </ion-grid>\n</ion-slide>\n\n  \n</ion-slides>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/torneo/torneo-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/torneo/torneo-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: TorneoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TorneoPageRoutingModule", function() { return TorneoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _torneo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./torneo.page */ "./src/app/pages/torneo/torneo.page.ts");




const routes = [
    {
        path: '',
        component: _torneo_page__WEBPACK_IMPORTED_MODULE_3__["TorneoPage"]
    }
];
let TorneoPageRoutingModule = class TorneoPageRoutingModule {
};
TorneoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TorneoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/torneo/torneo.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/torneo/torneo.module.ts ***!
  \***********************************************/
/*! exports provided: TorneoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TorneoPageModule", function() { return TorneoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _torneo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./torneo-routing.module */ "./src/app/pages/torneo/torneo-routing.module.ts");
/* harmony import */ var _torneo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./torneo.page */ "./src/app/pages/torneo/torneo.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let TorneoPageModule = class TorneoPageModule {
};
TorneoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _torneo_routing_module__WEBPACK_IMPORTED_MODULE_5__["TorneoPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_torneo_page__WEBPACK_IMPORTED_MODULE_6__["TorneoPage"]]
    })
], TorneoPageModule);



/***/ }),

/***/ "./src/app/pages/torneo/torneo.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/torneo/torneo.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".derecha {\n  text-align: right;\n}\n\n.centrado {\n  text-align: center;\n}\n\n.izquierda {\n  text-align: left;\n}\n\nion-content.background {\n  --background: url(/assets/img/fondograma1.jpg) 0 0/100% 100% no-repeat;\n  opacity: 0.8;\n}\n\n.bor {\n  border-bottom: rgba(255, 255, 255, 0.877) 1px solid;\n}\n\nlabel, h1, h2, h3, h4, h5, h6 {\n  text-shadow: 2px 2px 8px #080808;\n}\n\nion-icon.size {\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdG9ybmVvL0M6XFxVc2Vyc1xcZXJpY2tcXE9uZURyaXZlXFxEZXNrdG9wXFxpb25pY1xccHJveWVjdG8vc3JjXFxhcHBcXHBhZ2VzXFx0b3JuZW9cXHRvcm5lby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Rvcm5lby90b3JuZW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxnQkFBQTtBQ0dKOztBREFBO0VBQ0Usc0VBQUE7RUFDQSxZQUFBO0FDR0Y7O0FEQUU7RUFDRSxtREFBQTtBQ0dKOztBREFBO0VBQ0UsZ0NBQUE7QUNHRjs7QURBQTtFQUNFLGVBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rvcm5lby90b3JuZW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlcmVjaGF7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uY2VudHJhZG97XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4uaXpxdWllcmRhe1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZHtcclxuICAtLWJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy9mb25kb2dyYW1hMS5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuICAuYm9yIHtcclxuICAgIGJvcmRlci1ib3R0b206IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NzcpIDFweCBzb2xpZDtcclxufVxyXG5cclxubGFiZWwsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xyXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDhweCAjMDgwODA4O1xyXG59XHJcblxyXG5pb24taWNvbi5zaXplIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn0iLCIuZGVyZWNoYSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY2VudHJhZG8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5penF1aWVyZGEge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5pb24tY29udGVudC5iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvZm9uZG9ncmFtYTEuanBnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4uYm9yIHtcbiAgYm9yZGVyLWJvdHRvbTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg3NykgMXB4IHNvbGlkO1xufVxuXG5sYWJlbCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDhweCAjMDgwODA4O1xufVxuXG5pb24taWNvbi5zaXplIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/torneo/torneo.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/torneo/torneo.page.ts ***!
  \*********************************************/
/*! exports provided: TorneoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TorneoPage", function() { return TorneoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/apiservi.service */ "./src/app/services/apiservi.service.ts");
/* harmony import */ var src_models_complejo_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/models/complejo.models */ "./src/models/complejo.models.ts");
/* harmony import */ var src_models_torneo_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/models/torneo.models */ "./src/models/torneo.models.ts");
/* harmony import */ var src_app_services_torneo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/torneo.service */ "./src/app/services/torneo.service.ts");
/* harmony import */ var src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/alerta-service.service */ "./src/app/services/alerta-service.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_models_torneoEquipo_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/models/torneoEquipo.models */ "./src/models/torneoEquipo.models.ts");











let TorneoPage = class TorneoPage {
    constructor(actionSheetController, usuarioService, apiServi, torneoService, alertaService, navCtrl, alertController) {
        this.actionSheetController = actionSheetController;
        this.usuarioService = usuarioService;
        this.apiServi = apiServi;
        this.torneoService = torneoService;
        this.alertaService = alertaService;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.complejos = [];
        this.complejo = new src_models_complejo_models__WEBPACK_IMPORTED_MODULE_5__["Complejo"](0, null, null, null, null, false, 0.0, 0.0, new Date(), new Date(), false, false, null);
        this.torneos = [];
        this.torneosxUser = [];
        this.torneoUser = new src_models_torneo_models__WEBPACK_IMPORTED_MODULE_6__["Torneo"](0, '', null, '', '', new Date(), '', 0);
        this.equipoxTorneo = [];
        this.torneoEquipo = new src_models_torneoEquipo_models__WEBPACK_IMPORTED_MODULE_10__["TorneoEquipo"](0, 0);
        this.mostrarCrear = false;
        this.ver = false;
        this.mE = false;
        this.atras = false;
        this.mD = false;
    }
    ngOnInit() {
        this.perfil = this.usuarioService.getUsuario();
        this.slides.lockSwipes(true);
        this.obtenerComplejos();
        this.getTorneoxUser();
    }
    // -------------------------------------------METODOS TORNEO---------------------------------------
    getTorneoxUser() {
        this.torneoService.getTorneoxUsuario(this.perfil.id)
            .subscribe((resp) => {
            this.torneosxUser = resp;
            // console.log(resp);
        });
    }
    getTorneoId(id) {
        this.torneoService.getTorneooId(id)
            .subscribe((resp) => {
            this.torneoUser = resp;
            this.getEquipoxTorneo(id);
            this.validar();
            this.goSlide2();
        });
    }
    validar() {
        this.hoy = moment__WEBPACK_IMPORTED_MODULE_9__().format('YYYY-MM-DD');
        const dia = moment__WEBPACK_IMPORTED_MODULE_9__(this.torneoUser.diaTorneo).format('YYYY-MM-DD');
        if (dia <= this.hoy) {
            this.ver = true;
        }
    }
    modificarTorneoConImagen() {
        const fileInput = document.getElementById('img');
        const file = fileInput.files[0];
        if (!(/\.(jpg|png|jpeg)$/i).test(file.name)) {
            return alert('El archivo a adjuntar no es una imagen');
        }
        const imgPromise = this.getFileBlob(file);
        imgPromise.then(blob => {
            this.torneoUser.premioFoto = blob;
            // console.log("ESTE ES MI BLOB: " + blob);
            this.modificarTorneo();
        });
    }
    modificarTorneo() {
        this.torneoService.putTorneo(this.torneoUser.idTorneo, this.torneoUser)
            .subscribe(data => {
            // this.clea();
            // this.goSlide1();
            this.alertaService.alertaInformativa('Actualizado');
            this.obtenerComplejos();
            this.getTorneoxUser();
        }, (error) => {
            console.log(error['error']);
            this.alertaService.alertaInformativa(error['error']);
        });
    }
    getFileBlob(file) {
        const reader = new FileReader();
        return new Promise(function (resolve, reject) {
            reader.onload = (function (theFile) {
                return function (e) {
                    resolve(e.target.result);
                };
            })(file);
            reader.readAsDataURL(file);
        });
    }
    clea() {
        this.torneoUser = new src_models_torneo_models__WEBPACK_IMPORTED_MODULE_6__["Torneo"](0, '', null, '', '', new Date(), '', 0);
    }
    // -------------------------------------------METODOS TORNEO-EQUIPO---------------------------------------
    getEquipoxTorneo(id) {
        this.torneoService.getTorneoEquipoId(id)
            .subscribe((resp) => {
            this.equipoxTorneo = resp;
            //  this.goSlide3();
        }, error => {
            console.log(error);
        });
    }
    sacardTorneo(idT, idE) {
        this.torneoService.deleteTorneoEquipo(idT, idE)
            .subscribe(resp => {
            this.alertaService.alertaInformativa('Equipo eliminado con exito!!');
            this.getEquipoxTorneo(this.torneoUser.idTorneo);
        });
    }
    // --------------------------------------------METODOS COMPLEJOS------------------------------------
    obtenerComplejos() {
        this.apiServi.getComplejoAdmin(this.perfil.id)
            .subscribe((resp) => {
            this.complejos = resp;
        });
    }
    mostrarDel() {
        this.hoy = moment__WEBPACK_IMPORTED_MODULE_9__().format('YYYY-MM-DD');
        const d = moment__WEBPACK_IMPORTED_MODULE_9__(this.torneoUser.diaTorneo).format('YYYY-MM-DD');
        if (d >= this.hoy) {
            this.mE = true;
        }
        else {
            this.mE = false;
        }
        this.goSlide3();
    }
    // -------------------------------------------------------------------------------------------------------
    actualizar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Actualizar',
                buttons: [{
                        text: 'Cantidad de equipos a admitir',
                        icon: 'people',
                        cssClass: 'azul',
                        handler: () => {
                            this.actualizarCantidad();
                        }
                    }, {
                        text: 'Nombre del torneo',
                        icon: 'receipt',
                        cssClass: 'rojo',
                        handler: () => {
                            this.actualizarNombre();
                        }
                    }, {
                        text: 'Día del torneo',
                        icon: 'calendar',
                        cssClass: 'verde',
                        handler: () => {
                            this.actualizarDiaT();
                        }
                    }, {
                        text: 'Imagen',
                        icon: 'camera-reverse',
                        cssClass: 'morado',
                        handler: () => {
                            this.goSlide4();
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
    actualizarCantidad() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Aumenta o disminuye la cantidad de equipos que quieres que tenga el torneo.',
                message: '<strong>Actualmente el máximo de equipos es de: ' + this.torneoUser.cantEquipos + ' </strong>',
                inputs: [
                    {
                        name: 'cantEquipos',
                        type: 'number',
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
                            if (data.cantEquipos < this.equipoxTorneo.length) {
                                return this.alertaService.alertaInformativa('La cantidad de cupos admitidos no puede ser menor que los equipos inscritos.');
                            }
                            else {
                                console.log('Confirm Ok');
                                this.torneoUser.cantEquipos = data.cantEquipos;
                                this.modificarTorneo();
                            }
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
                header: 'Cambiale el nombre al torneo',
                message: '<strong>Actualmente se llama: ' + this.torneoUser.nombre + ' </strong>',
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
                            if (data.nombre.length < 5) {
                                return this.alertaService.alertaInformativa('El nombre debe tener mas de 5 caracteres');
                            }
                            else {
                                this.torneoUser.nombre = data.nombre;
                                this.modificarTorneo();
                                console.log('Confirm Okay');
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    actualizarDiaT() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Cambia el día del torneo',
                message: '<strong>Actualmente el día que se llevará a cabo es: ' + moment__WEBPACK_IMPORTED_MODULE_9__(this.torneoUser.diaTorneo).format('DD-MM-YYYY') + '</strong>',
                inputs: [
                    {
                        name: 'diaTorneo',
                        type: 'date',
                        min: this.hoy,
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
                            this.torneoUser.diaTorneo = data.diaTorneo;
                            this.modificarTorneo();
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // -------------------------------------------------SLIDE--------------------------------
    goSlide1() {
        this.clea();
        this.slides.lockSwipes(false);
        this.slides.slideTo(0);
        this.slides.lockSwipes(true);
    }
    goSlide2() {
        this.atras = true;
        this.mD = false;
        this.slides.lockSwipes(false);
        this.slides.slideTo(1);
        this.slides.lockSwipes(true);
    }
    goSlide3() {
        this.slides.lockSwipes(false);
        this.slides.slideTo(2);
        this.slides.lockSwipes(true);
    }
    goSlide4() {
        this.mD = true;
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
TorneoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"] },
    { type: src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviService"] },
    { type: src_app_services_torneo_service__WEBPACK_IMPORTED_MODULE_7__["TorneoService"] },
    { type: src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_8__["AlertaServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slidePrincipal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], TorneoPage.prototype, "slides", void 0);
TorneoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-torneo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./torneo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/torneo/torneo.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./torneo.page.scss */ "./src/app/pages/torneo/torneo.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
        src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviService"],
        src_app_services_torneo_service__WEBPACK_IMPORTED_MODULE_7__["TorneoService"],
        src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_8__["AlertaServiceService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], TorneoPage);



/***/ })

}]);
//# sourceMappingURL=pages-torneo-torneo-module-es2015.js.map