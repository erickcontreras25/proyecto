(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-crear-torneo-crear-torneo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/crear-torneo/crear-torneo.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/crear-torneo/crear-torneo.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"Crear Torneo\" *ngIf=\"!atras\"></app-header>\n\n<ion-header no-border *ngIf=\"atras\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"slideAtras()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n\n  <ion-slides class=\"mainSlide\" [options]=\"{ autoHeight: true }\" #slidePrincipal>\n\n    <ion-slide>\n      <form #formulario=\"ngForm\">\n      <ion-grid>\n        <div class=\"ion-margin-top bor\">\n          <ion-label class=\"shadow\">¿Dónde se realizará el torneo?</ion-label>\n          <ion-select [(ngModel)]=\"complejo.idComplejo\"\n                      name=\"idComplejo\"\n                      (ngModelChange)=\"getIdComplejo()\">\n            <ion-select-option *ngFor=\"let item of complejos\" value=\"{{item.idComplejo}}\" >{{item.nombre}}</ion-select-option>\n          </ion-select>\n        </div>\n            \n        <div *ngIf=\"complejo.idComplejo!=0\" class=\"bor\">\n          <h4 class=\"shadow\">Dale nombre al torneo</h4>\n          <ion-item>\n            <ion-input name=\"nombre\"\n                        type=\"text\"\n                        placeholder=\"Nombre\"\n                        minlength=\"5\"\n                        maxlength=\"15\"\n                        required\n                        [(ngModel)]=\"torneo.nombre\"></ion-input>\n          </ion-item>\n        </div>\n        <div *ngIf=\"complejo.idComplejo!=0\" class=\"bor\">\n          <h4 class=\"shadow\">¿Cuántos equipos quieres que participen?</h4>\n          <ion-item>\n            <ion-input name=\"cantEquipos\"\n                        type=\"number\"\n                        placeholder=\"cantEquipos\"\n                        required\n                        [(ngModel)]=\"torneo.cantEquipos\"></ion-input>\n          </ion-item>\n        </div>\n        <ion-row *ngIf=\"complejo.idComplejo!=0\">\n          <ion-col>\n            <ion-button color=\"success\"\n                        shape=\"round\"\n                        (click)=\"goSlide2()\"\n                        [disabled]=\"formulario.invalid\">Siguiente</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n    </ion-slide>\n\n<!-- ----------------------------------------------------SLIDE 3-------------------------------------------- -->\n\n    <ion-slide>\n      <ion-grid>\n        <form #formulario1=\"ngForm\">\n          <!-- <div class=\"bor\">\n            <h4>Si quieres, agrega una descripción para el torneo</h4>\n            <ion-item class=\"bor\">\n              <ion-input name=\"descripcion\"\n                          type=\"text\"\n                          placeholder=\"descripcion\"\n                          minlength=\"5\"                        \n                          [(ngModel)]=\"torneo.descripcion\"></ion-input>\n            </ion-item>\n          </div> -->\n          \n          <div class=\"bor\">\n            <h4>Agrega una imagen donde se indiquen las reglas y premios del torneo</h4>\n            <ion-item>\n              <input type=\"file\"\n                    id=\"img\"\n                    name=\"img\"\n                    ngModel\n                    required>\n            </ion-item>\n          </div>\n          <br><br>\n          <div class=\"bor\">\n          <ion-item>\n            <ion-label>¿Cuándo se realizará el torneo?</ion-label>\n            <ion-datetime displayFormat=\"D MMM YYYY\" \n                                      name=\"diaTorneo\"\n                                      [(ngModel)]=\"torneo.diaTorneo\"\n                                      (ngModelChange)='verificar()'>\n                        </ion-datetime>\n          </ion-item>\n        </div>\n        <ion-row>\n          <ion-col>\n            <ion-button *ngIf=\"ver\"\n                        color=\"success\"\n                        expand=\"full\"\n                        (click)=\"crearTorneoConImagen()\"\n                        [disabled]=\"formulario1.invalid\">\n                Crear Torneo\n              </ion-button>\n          </ion-col>\n        </ion-row>\n      </form>\n      </ion-grid>\n    </ion-slide>\n\n<!-- ----------------------------------------------------SLIDE 3-------------------------------------------- -->\n\n    <ion-slide>\n      <ion-grid>\n        <form #formulario2=\"ngForm\">\n          <br>\n        <ion-item>\n          <ion-label class=\"shadow\">¿Cuándo se realizara el torneo?</ion-label>\n          <ion-datetime displayFormat=\"D MMM YYYY\" \n                                    name=\"diaTorneo\"\n                                    [(ngModel)]=\"torneo.diaTorneo\"\n                                    (ngModelChange)='verificar()'>\n                      </ion-datetime>\n        </ion-item>\n        <ion-row>\n          <ion-col>\n            <!-- <ion-button color=\"success\"\n                        shape=\"round\" fill=\"outline\"\n                        (click)=\"verificar()\"\n                        >Verificar</ion-button> -->\n                  <ion-button *ngIf=\"ver\"\n                              color=\"success\"\n                              expand=\"full\"\n                              (click)=\"crearTorneoConImagen()\"\n                              [disabled]=\"formulario2.invalid\">\n                CREAR\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-grid>\n    </ion-slide>\n\n\n  </ion-slides>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/crear-torneo/crear-torneo-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/crear-torneo/crear-torneo-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: CrearTorneoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearTorneoPageRoutingModule", function() { return CrearTorneoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _crear_torneo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crear-torneo.page */ "./src/app/pages/crear-torneo/crear-torneo.page.ts");




const routes = [
    {
        path: '',
        component: _crear_torneo_page__WEBPACK_IMPORTED_MODULE_3__["CrearTorneoPage"]
    }
];
let CrearTorneoPageRoutingModule = class CrearTorneoPageRoutingModule {
};
CrearTorneoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CrearTorneoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/crear-torneo/crear-torneo.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/crear-torneo/crear-torneo.module.ts ***!
  \***********************************************************/
/*! exports provided: CrearTorneoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearTorneoPageModule", function() { return CrearTorneoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _crear_torneo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crear-torneo-routing.module */ "./src/app/pages/crear-torneo/crear-torneo-routing.module.ts");
/* harmony import */ var _crear_torneo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crear-torneo.page */ "./src/app/pages/crear-torneo/crear-torneo.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let CrearTorneoPageModule = class CrearTorneoPageModule {
};
CrearTorneoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _crear_torneo_routing_module__WEBPACK_IMPORTED_MODULE_5__["CrearTorneoPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_crear_torneo_page__WEBPACK_IMPORTED_MODULE_6__["CrearTorneoPage"]]
    })
], CrearTorneoPageModule);



/***/ }),

/***/ "./src/app/pages/crear-torneo/crear-torneo.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/crear-torneo/crear-torneo.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content.background {\n  --background: url(/assets/img/fondo3.jpg) 0 0/100% 100% no-repeat;\n  opacity: 0.8;\n}\n\n.shadow {\n  text-shadow: 2px 2px #080808;\n}\n\n.img {\n  alt: 200px;\n  width: 1000px;\n}\n\n.bor {\n  border-bottom: rgba(255, 255, 255, 0.877) 1px solid;\n}\n\nlabel, ion-label, h1, h2, h3, h4, h5, h6 {\n  text-shadow: 2px 2px 8px #080808;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3JlYXItdG9ybmVvL0M6XFxVc2Vyc1xcZXJpY2tcXE9uZURyaXZlXFxEZXNrdG9wXFxpb25pY1xccHJveWVjdG8vc3JjXFxhcHBcXHBhZ2VzXFxjcmVhci10b3JuZW9cXGNyZWFyLXRvcm5lby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NyZWFyLXRvcm5lby9jcmVhci10b3JuZW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUU7RUFDRSw0QkFBQTtBQ0NKOztBREVFO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLG1EQUFBO0FDQ0o7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3JlYXItdG9ybmVvL2NyZWFyLXRvcm5lby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudC5iYWNrZ3JvdW5ke1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvZm9uZG8zLmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgfVxyXG5cclxuICAuc2hhZG93IHtcclxuICAgIHRleHQtc2hhZG93OiAycHggMnB4ICMwODA4MDg7XHJcbiAgfVxyXG5cclxuICAuaW1nIHtcclxuICAgIGFsdDogMjAwcHg7XHJcbiAgICB3aWR0aDogMTAwMHB4O1xyXG4gIH1cclxuXHJcbi5ib3Ige1xyXG4gICAgYm9yZGVyLWJvdHRvbTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg3NykgMXB4IHNvbGlkO1xyXG59XHJcblxyXG5sYWJlbCwgaW9uLWxhYmVsLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA4cHggIzA4MDgwODtcclxufSIsImlvbi1jb250ZW50LmJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy9mb25kbzMuanBnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4uc2hhZG93IHtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggIzA4MDgwODtcbn1cblxuLmltZyB7XG4gIGFsdDogMjAwcHg7XG4gIHdpZHRoOiAxMDAwcHg7XG59XG5cbi5ib3Ige1xuICBib3JkZXItYm90dG9tOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODc3KSAxcHggc29saWQ7XG59XG5cbmxhYmVsLCBpb24tbGFiZWwsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA4cHggIzA4MDgwODtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/crear-torneo/crear-torneo.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/crear-torneo/crear-torneo.page.ts ***!
  \*********************************************************/
/*! exports provided: CrearTorneoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearTorneoPage", function() { return CrearTorneoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/apiservi.service */ "./src/app/services/apiservi.service.ts");
/* harmony import */ var src_app_services_torneo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/torneo.service */ "./src/app/services/torneo.service.ts");
/* harmony import */ var src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alerta-service.service */ "./src/app/services/alerta-service.service.ts");
/* harmony import */ var src_models_torneo_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/models/torneo.models */ "./src/models/torneo.models.ts");
/* harmony import */ var src_models_complejo_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/models/complejo.models */ "./src/models/complejo.models.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);










let CrearTorneoPage = class CrearTorneoPage {
    constructor(actionSheetController, usuarioService, apiServi, torneoService, alertaService, navCtrl) {
        this.actionSheetController = actionSheetController;
        this.usuarioService = usuarioService;
        this.apiServi = apiServi;
        this.torneoService = torneoService;
        this.alertaService = alertaService;
        this.navCtrl = navCtrl;
        this.ver = false;
        this.atras = false;
        this.torneo = new src_models_torneo_models__WEBPACK_IMPORTED_MODULE_7__["Torneo"](0, '', null, '', '', new Date(), '', 0);
        this.torneos = [];
        this.complejos = [];
        this.complejo = new src_models_complejo_models__WEBPACK_IMPORTED_MODULE_8__["Complejo"](0, null, null, null, null, false, 0.0, 0.0, new Date(), new Date(), false, false, null);
    }
    ngOnInit() {
        this.perfil = this.usuarioService.getUsuario();
        this.slides.lockSwipes(true);
        this.obtenerComplejos();
    }
    crearTorneoConImagen() {
        const fileInput = document.getElementById('img');
        const file = fileInput.files[0];
        if (!(/\.(jpg|png|jpeg)$/i).test(file.name)) {
            return alert('El archivo a adjuntar no es una imagen');
        }
        const imgPromise = this.getFileBlob(file);
        imgPromise.then(blob => {
            this.torneo.premioFoto = blob;
            this.postTorneo();
        });
    }
    postTorneo() {
        this.torneo.usuarioId = this.perfil.id;
        this.torneoService.postTorneo(this.torneo)
            .subscribe((data) => {
            this.torneos.push(this.torneo);
            this.clea();
            this.alertaService.alertaInformativa('Torneo creado con exito');
            this.navCtrl.navigateRoot('/torneo');
        }, (error) => {
            console.log('ERROR: ', error);
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
    verificar() {
        const hoy = moment__WEBPACK_IMPORTED_MODULE_9__().format('MM-DD-YYYY');
        const diaTorneo = moment__WEBPACK_IMPORTED_MODULE_9__(this.torneo.diaTorneo).format('MM-DD-YYYY');
        if (diaTorneo <= hoy) {
            this.ver = false;
            this.alertaService.alertaInformativa('El dia del torneo no puede ser igual al dia de hoy o anterior a el.');
        }
        else {
            this.ver = true;
        }
    }
    clea() {
        this.torneo = new src_models_torneo_models__WEBPACK_IMPORTED_MODULE_7__["Torneo"](0, '', null, '', '', new Date(), '', 0);
    }
    // ---------------------------------------------------------------------------------------------------------
    getIdComplejo() {
        this.torneo.idComplejo = this.complejo.idComplejo;
        console.log(this.torneo.idComplejo);
    }
    obtenerComplejos() {
        this.apiServi.getComplejoAdmin(this.perfil.id)
            .subscribe((resp) => {
            this.complejos = resp;
        });
    }
    // ---------------------------------------------------------------------------------------------------------
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
        this.slides.lockSwipes(false);
        this.slides.slideTo(2);
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
CrearTorneoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"] },
    { type: src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviService"] },
    { type: src_app_services_torneo_service__WEBPACK_IMPORTED_MODULE_5__["TorneoService"] },
    { type: src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_6__["AlertaServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slidePrincipal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], CrearTorneoPage.prototype, "slides", void 0);
CrearTorneoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crear-torneo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./crear-torneo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/crear-torneo/crear-torneo.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./crear-torneo.page.scss */ "./src/app/pages/crear-torneo/crear-torneo.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
        src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviService"],
        src_app_services_torneo_service__WEBPACK_IMPORTED_MODULE_5__["TorneoService"],
        src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_6__["AlertaServiceService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], CrearTorneoPage);



/***/ })

}]);
//# sourceMappingURL=pages-crear-torneo-crear-torneo-module-es2015.js.map