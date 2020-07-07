(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cancha-cancha-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cancha/cancha.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cancha/cancha.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"Cancha\" *ngIf=\"!atras\"></app-header>\n\n<ion-header no-border *ngIf=\"atras\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goSlide1()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<!-- <form #formulario=\"ngForm\" (ngSubmit)=\"agregarCancha()\">\n\n  <ion-item>\n    <ion-label>Foto</ion-label>\n    <input type=\"file\"\n    id=\"img\"\n    name=\"img\"\n   ngModel\n   required>\n  </ion-item>\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"floating\">Precio</ion-label>\n      <ion-input type=\"text\"\n                  name=\"precio\"\n                 [(ngModel)]=\"cancha.precio\"\n                 required>\n                </ion-input>\n    </ion-item>\n    <ion-list>\n      <ion-item>\n        <ion-label>Complejo</ion-label>\n        <ion-select [(ngModel)]=\"cancha.idComplejo\"\n                    name=\"idCancha\">\n          <ion-select-option *ngFor=\"let user of complejos\" value=\"{{user.idComplejo}}\" >{{user.nombre}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n  </ion-list>\n\n  <ion-button expand=\"full\" type=\"submit\"\n  [disabled]=\"formulario.invalid\" routerLink=\"/inicio\">\n      Guardar\n  </ion-button>\n</form> -->\n\n\n<ion-content center class=\"background\">\n\n  <ion-slides class=\"mainSlide\" [options]=\"{ autoHeight: true }\" #slidePrincipal>\n    \n<!-- ----------------------------------------SLIDE COMPLEJOS---------------------------------------- -->\n\n    <ion-slide>  \n      <form #formulario=\"ngForm\">\n        <ion-grid>\n  \n          <ion-row>\n            <ion-col>\n              <!-- <img src=\"/assets/img/im2.png\" alt=\"10\" width=\"20\"> -->\n            </ion-col>\n          </ion-row>\n        \n          <ion-row class=\"center\">\n            <ion-col>\n              \n                <div *ngFor='let user of complejos'>\n  \n\n                  <img class=\"img\" src=\"{{user.foto}}\">\n                  <h1 class=\"shadow\">\n                    Complejo: {{user.nombre}}\n                  </h1>\n                  \n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-button type=\"submit\"\n                      fill=\"outline\"\n                      color=\"success\"\n                      shape=\"round\"\n                      (click)=\"obtenerIdComplejo2(user.idComplejo)\"\n                      (click)=\"goSlideCancha()\">\n                      Crear cancha\n                  </ion-button>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-button type=\"submit\"\n                      fill=\"outline\"\n                      color=\"success\"\n                      shape=\"round\"\n                      (click)=\"obtenerComplejoId(user.idComplejo)\"\n                      >\n                      Canchas\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n  \n  \n                </div>\n            </ion-col>\n          </ion-row>\n  \n\n  \n        </ion-grid>\n      </form>\n    </ion-slide>\n  \n<!-- ----------------------------------------SLIDE AGREGAR CANCHA---------------------------------------- -->\n    <ion-slide>\n      <ion-grid>\n            <form #formulario2=\"ngForm\">\n\n                <ion-row>\n                    <ion-col>  \n  \n                      \n                        <ion-label class=\"ion-text-center\">Coloca el precio por hora que tendrá esta cancha</ion-label>                      \n                      \n\n                      <ion-item>\n                        <ion-label position=\"floating\">Precio Lps.</ion-label>\n                        <ion-input type=\"number\"\n                                    name=\"precio\"\n                                   [(ngModel)]=\"cancha.precio\"\n                                   required>\n                                  </ion-input>\n                      </ion-item>\n                      <br>\n\n                      <ion-list>\n                        <ion-label>¿Qué tamaño tiene la cancha?</ion-label>\n                        <ion-item>\n                            <ion-select [(ngModel)]=\"cancha.tamanioCancha\"\n                                        name=\"tamanioCancha\"\n                                        required>\n                              <ion-select-option value=\"Pequeña\" >Pequeña</ion-select-option>\n                              <ion-select-option value=\"Mediana\" >Mediana</ion-select-option>\n                              <ion-select-option value=\"Grande\" >Grande</ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                      </ion-list>\n\n                      \n                          <h4>Agrega una imagen de la cancha</h4>\n                        <ion-item class=\"ion-text-center\">\n                        <input type=\"file\"\n                        id=\"imgCancha\"\n                        name=\"imgCancha\"\n                        ngModel\n                        required>\n                      </ion-item>\n                        \n                    </ion-col>\n                </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-button type=\"submit\"\n                            color=\"success\"\n                            shape=\"round\"\n                            expand=\"full\"\n                            [disabled]=\"formulario2.invalid\"\n                            (click)=\"agregarCancha()\">\n                            <!-- <ion-icon name=\"add-circle-outline\"></ion-icon> -->\n                        Crear cancha\n                    </ion-button>\n              </ion-col>\n              </ion-row>\n\n            </form>\n        </ion-grid>  \n      </ion-slide>\n    \n\n<!-- ------------------------------------------SLIDE VER CANCHAS---------------------------------------------- -->\n\n  <ion-slide>  \n    <form #formulario3=\"ngForm\">\n      <ion-grid>\n      \n        <ion-row class=\"center\">\n          <ion-col>\n            \n              <div class=\"bor\" *ngFor='let user of canchas' style=\"background-color: rgb(211, 197, 197, 0);\">\n                <br>\n                <!-- <ion-row>\n\n                  <ion-col class=\"derecha\">\n                    <ion-button fill=\"clear\"\n                                (click)=\"getCanchaId(user.idCancha)\"\n                                >\n                    <ion-icon class=\"size\" color=\"success\" slot=\"start\" name=\"ellipsis-vertical-outline\"></ion-icon>\n                    </ion-button>\n                  </ion-col>\n                </ion-row> -->\n                \n\n                <div style=\"display: inline-block; position:relative\">\n                  <img class=\"img\" src=\"{{user.foto}}\" >\n                  <div style=\"display: inline-block; position:absolute; top:7%; left:97%; transform: translate(-50%, -50%)\">\n                    <ion-icon class=\"size\" \n                              slot=\"start\" \n                              style=\"color: red; background-color: rgba(0, 0, 0, 0.1);\"\n                              (click)=\"getCanchaId(user.idCancha)\"\n                              name=\"ellipsis-vertical\"></ion-icon>\n                  </div>\n                </div>\n\n                \n                <ion-row>\n                  <ion-col>\n                      <label>Precio: Lps. {{user.precio}}</label>\n                  </ion-col>\n                  <ion-col>\n                      <label>Tamaño: {{user.tamanioCancha}}</label>\n                  </ion-col>\n                </ion-row>\n                <br>\n              </div>\n          </ion-col>\n        </ion-row>        \n\n      </ion-grid>\n    </form>\n  </ion-slide>\n\n  <!-- ------------------------------------------SLIDE ACT IMAGEN---------------------------------------------- -->\n\n  <ion-slide>  \n    <form #formulario4=\"ngForm\">\n      <ion-grid>\n      \n        <ion-row class=\"center\">\n          <ion-col>\n            \n            <ion-row>\n              <ion-col>\n                  <h4>Imagen Actual</h4>\n                <div>\n                    <img class=\"img\" src=\"{{cancha.foto}}\">\n                </div>                  \n              </ion-col>\n            </ion-row>\n\n              <ion-row>\n                <ion-col>\n                  <div>\n                    <h4>Cambia la imagen</h4>                        \n                    <ion-item>\n                        <input type=\"file\"\n                               id=\"img\"\n                               name=\"img\"\n                               ngModel\n                               required>\n                    </ion-item>\n                  </div>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col>\n                  <ion-button fill=\"outline\"\n                              type=\"submit\"\n                              color=\"success\"\n                              shape=\"round\"\n                              [disabled]=\"formulario4.invalid\"\n                              (click)=\"modificarCanchaFoto()\">\n                              <ion-icon name=\"sync-outline\"></ion-icon>\n                      Actualizar\n                  </ion-button>  \n                </ion-col>\n              </ion-row>\n              \n          </ion-col>\n        </ion-row>        \n\n      </ion-grid>\n    </form>\n  </ion-slide>\n  \n  </ion-slides>\n  \n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/cancha/cancha-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/cancha/cancha-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CanchaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanchaPageRoutingModule", function() { return CanchaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cancha_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cancha.page */ "./src/app/pages/cancha/cancha.page.ts");




const routes = [
    {
        path: '',
        component: _cancha_page__WEBPACK_IMPORTED_MODULE_3__["CanchaPage"]
    }
];
let CanchaPageRoutingModule = class CanchaPageRoutingModule {
};
CanchaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CanchaPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/cancha/cancha.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/cancha/cancha.module.ts ***!
  \***********************************************/
/*! exports provided: CanchaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanchaPageModule", function() { return CanchaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _cancha_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cancha-routing.module */ "./src/app/pages/cancha/cancha-routing.module.ts");
/* harmony import */ var _cancha_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cancha.page */ "./src/app/pages/cancha/cancha.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let CanchaPageModule = class CanchaPageModule {
};
CanchaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cancha_routing_module__WEBPACK_IMPORTED_MODULE_5__["CanchaPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_cancha_page__WEBPACK_IMPORTED_MODULE_6__["CanchaPage"]]
    })
], CanchaPageModule);



/***/ }),

/***/ "./src/app/pages/cancha/cancha.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/cancha/cancha.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back {\n  background-color: #c5d8c9;\n}\n\nion-content.background {\n  --background: url(/assets/img/fondo5.jpg) 0 0/100% 100% no-repeat;\n  opacity: 0.8;\n}\n\n.shadow {\n  text-shadow: 2px 2px 8px #080808;\n}\n\n.img {\n  min-height: 250px;\n  max-height: 570px;\n  width: 1000px;\n}\n\n.derecha {\n  text-align: right;\n}\n\n.centrado {\n  text-align: center;\n}\n\n.izquierda {\n  text-align: left;\n}\n\nion-icon.size {\n  font-size: 35px;\n}\n\n.bor {\n  border-bottom: white 1px solid;\n}\n\nlabel, ion-label, h1, h2, h3, h4, h5, h6 {\n  text-shadow: 2px 2px 8px #080808;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FuY2hhL0M6XFxVc2Vyc1xcZXJpY2tcXE9uZURyaXZlXFxEZXNrdG9wXFxpb25pY1xccHJveWVjdG8vc3JjXFxhcHBcXHBhZ2VzXFxjYW5jaGFcXGNhbmNoYS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NhbmNoYS9jYW5jaGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLGlFQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVFO0VBQ0UsZ0NBQUE7QUNDSjs7QURFRTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFFQSxhQUFBO0FDQUo7O0FER0U7RUFDRSxpQkFBQTtBQ0FKOztBREVFO0VBQ0Usa0JBQUE7QUNDSjs7QURDRTtFQUNFLGdCQUFBO0FDRUo7O0FEQUU7RUFDRSxlQUFBO0FDR0o7O0FEQUU7RUFDRSw4QkFBQTtBQ0dKOztBREFBO0VBQ0ksZ0NBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhbmNoYS9jYW5jaGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NywgMjE2LCAyMDEpO1xyXG59XHJcblxyXG5pb24tY29udGVudC5iYWNrZ3JvdW5ke1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvZm9uZG81LmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgfVxyXG5cclxuICAuc2hhZG93IHtcclxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDhweCAjMDgwODA4O1xyXG4gIH1cclxuXHJcbiAgLmltZyB7XHJcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcclxuICAgIG1heC1oZWlnaHQ6IDU3MHB4O1xyXG4gICAgXHJcbiAgICB3aWR0aDogMTAwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmRlcmVjaGF7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbiAgLmNlbnRyYWRve1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuaXpxdWllcmRhe1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgaW9uLWljb24uc2l6ZSB7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgfVxyXG5cclxuICAuYm9yIHtcclxuICAgIGJvcmRlci1ib3R0b206IHdoaXRlIDFweCBzb2xpZDtcclxuICB9XHJcblxyXG5sYWJlbCwgaW9uLWxhYmVsLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcclxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDhweCAjMDgwODA4O1xyXG59IiwiLmJhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzVkOGM5O1xufVxuXG5pb24tY29udGVudC5iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvZm9uZG81LmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLnNoYWRvdyB7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDhweCAjMDgwODA4O1xufVxuXG4uaW1nIHtcbiAgbWluLWhlaWdodDogMjUwcHg7XG4gIG1heC1oZWlnaHQ6IDU3MHB4O1xuICB3aWR0aDogMTAwMHB4O1xufVxuXG4uZGVyZWNoYSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY2VudHJhZG8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5penF1aWVyZGEge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5pb24taWNvbi5zaXplIHtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuXG4uYm9yIHtcbiAgYm9yZGVyLWJvdHRvbTogd2hpdGUgMXB4IHNvbGlkO1xufVxuXG5sYWJlbCwgaW9uLWxhYmVsLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggOHB4ICMwODA4MDg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/cancha/cancha.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/cancha/cancha.page.ts ***!
  \*********************************************/
/*! exports provided: CanchaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanchaPage", function() { return CanchaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_models_cancha_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/cancha.models */ "./src/models/cancha.models.ts");
/* harmony import */ var src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/apiservi.service */ "./src/app/services/apiservi.service.ts");
/* harmony import */ var src_models_complejo_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/complejo.models */ "./src/models/complejo.models.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/alerta-service.service */ "./src/app/services/alerta-service.service.ts");








let CanchaPage = class CanchaPage {
    constructor(apiServi, usuarioService, navCtrl, alertaService, alertController, actionSheetController) {
        this.apiServi = apiServi;
        this.usuarioService = usuarioService;
        this.navCtrl = navCtrl;
        this.alertaService = alertaService;
        this.alertController = alertController;
        this.actionSheetController = actionSheetController;
        this.canchas = [];
        this.complejos = [];
        this.atras = false;
        this.cancha = new src_models_cancha_models__WEBPACK_IMPORTED_MODULE_2__["Cancha"](0, null, null, '', null);
        this.complejo = new src_models_complejo_models__WEBPACK_IMPORTED_MODULE_4__["Complejo"](0, '', '', '', '', false, 0.0, 0.0, new Date(), new Date(), false, false, '');
    }
    ngOnInit() {
        this.slides.lockSwipes(true);
        this.perfil = this.usuarioService.getUsuario();
        this.obtenerComplejoAdmin(this.perfil.id);
    }
    // --------------------------------------------------METODOS COMPLEJOS--------------------------------------------
    obtenerComplejoAdmin(id) {
        this.apiServi.getComplejoAdmin(id)
            .subscribe((resp) => {
            this.complejos = resp;
            // console.log('SERVICIO', resp);
        });
    }
    obtenerComplejoId(id) {
        this.apiServi.getComplejoId(id)
            .subscribe((resp) => {
            this.complejo = resp;
            this.obtenerCanchasComplejo(this.complejo.idComplejo);
        });
    }
    obtenerIdComplejo2(id) {
        this.cancha.idComplejo = id;
    }
    // --------------------------------------------METODOS CANCHAS----------------------------------------------
    modificarCancha() {
        this.apiServi.putCancha(this.cancha.idCancha, this.cancha)
            .subscribe((data) => {
            // this.canchas.push(this.cancha);
            this.clean();
            this.obtenerCanchasComplejo(this.complejo.idComplejo);
            this.alertaService.alertaInformativa('Actualizado!!');
        }, (error) => {
            console.log(error);
        });
    }
    modificarCanchaFoto() {
        const fileInput = document.getElementById('img');
        const file = fileInput.files[0];
        if (!(/\.(jpg|png|jpeg)$/i).test(file.name)) {
            return alert('El archivo a adjuntar no es una imagen');
        }
        const imgPromise = this.getFileBlobCancha(file);
        imgPromise.then(blob => {
            this.cancha.foto = blob;
            this.modificarCancha();
        });
    }
    agregarCancha() {
        const fileInput = document.getElementById('imgCancha');
        const file = fileInput.files[0];
        if (!(/\.(jpg|png|jpeg)$/i).test(file.name)) {
            return alert('El archivo a adjuntar no es una imagen');
        }
        const imgPromise = this.getFileBlobCancha(file);
        imgPromise.then(blob => {
            this.cancha.foto = blob;
            this.apiServi.postCancha(this.cancha)
                .subscribe((data) => {
                this.canchas.push(this.cancha);
                this.cancha = new src_models_cancha_models__WEBPACK_IMPORTED_MODULE_2__["Cancha"](0, null, null, '', null);
                this.alertaService.alertaInformativa('Cancha agregada');
                this.navCtrl.navigateRoot('/inicio');
            }, (error) => {
                console.log(error);
            });
        });
    }
    obtenerCanchasComplejo(id) {
        this.apiServi.getCanchaComplejo(id)
            .subscribe((resp) => {
            this.canchas = resp;
            this.goSlideVerCancha();
        });
    }
    getCanchaId(id) {
        this.apiServi.getCanchaId(id)
            .subscribe((resp) => {
            this.cancha = resp;
            this.presentActionSheet();
            // console.log(this.cancha);
        }, error => console.log(error));
    }
    getFileBlobCancha(file) {
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
    eliminarCancha() {
        this.apiServi.deleteCancha(this.cancha.idCancha)
            .subscribe(resp => {
            console.log('ELIMINADO CON EXITO');
        });
    }
    // ------------------------------------------------ALERT CONTROLLER-------------------------------------
    presentActionSheet() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Actualizar',
                buttons: [{
                        text: 'Precio',
                        icon: 'cash',
                        cssClass: 'verde',
                        handler: () => {
                            this.presentAlertPrompt();
                        }
                    }, {
                        text: 'Tamanio cancha',
                        icon: 'file-tray',
                        cssClass: 'azul',
                        handler: () => {
                            this.tamanio();
                        }
                    }, {
                        text: 'Imagen cancha',
                        icon: 'camera-reverse',
                        cssClass: 'morado',
                        handler: () => {
                            this.goSlideImagen();
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
    presentAlertConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Cambia el precio de la cancha!',
                message: '<strong>Cambiar</strong>??',
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
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentAlertPrompt() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Cambia el precio de la cancha!',
                message: '<strong>Precio actual: Lps.' + this.cancha.precio + ' </strong>',
                inputs: [
                    {
                        name: 'name',
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
                            this.clean();
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Ok',
                        handler: data => {
                            console.log('Confirm Ok');
                            this.cancha.precio = data.name;
                            this.modificarCancha();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    tamanio() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Cambiar tamanio',
                message: '<strong>Tamaño actual: ' + this.cancha.tamanioCancha + ' </strong>',
                buttons: [
                    {
                        text: 'Pequeña',
                        handler: () => {
                            this.cancha.tamanioCancha = 'Pequeña';
                            this.modificarCancha();
                            console.log('Confirm Okay');
                        }
                    }, {
                        text: 'Mediana',
                        handler: () => {
                            this.cancha.tamanioCancha = 'Mediana';
                            this.modificarCancha();
                            console.log('Confirm Okay');
                        }
                    }, {
                        text: 'Grande',
                        handler: () => {
                            this.cancha.tamanioCancha = 'Grande';
                            this.modificarCancha();
                            console.log('Confirm Okay');
                        }
                    }, {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            this.clean();
                            console.log('Confirm Cancel: blah');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // ------------------------------------------------------------------------------------------------------
    clean() {
        this.cancha = new src_models_cancha_models__WEBPACK_IMPORTED_MODULE_2__["Cancha"](0, null, null, '', null);
    }
    clear() {
        this.complejo = new src_models_complejo_models__WEBPACK_IMPORTED_MODULE_4__["Complejo"](0, '', '', '', '', false, 0.0, 0.0, new Date(), new Date(), false, false, '');
    }
    // ---------------------------------------------------SLIDES--------------------------------------------
    goSlide1() {
        this.atras = false;
        this.clean();
        this.clear();
        this.slides.lockSwipes(false);
        this.slides.slideTo(0);
        this.slides.lockSwipes(true);
    }
    goSlideCancha() {
        this.atras = true;
        this.slides.lockSwipes(false);
        this.slides.slideTo(1);
        this.slides.lockSwipes(true);
    }
    goSlideVerCancha() {
        this.atras = true;
        this.slides.lockSwipes(false);
        this.slides.slideTo(2);
        this.slides.lockSwipes(true);
    }
    goSlideImagen() {
        this.atras = true;
        this.slides.lockSwipes(false);
        this.slides.slideTo(3);
        this.slides.lockSwipes(true);
    }
};
CanchaPage.ctorParameters = () => [
    { type: src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviService"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_7__["AlertaServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slidePrincipal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonSlides"])
], CanchaPage.prototype, "slides", void 0);
CanchaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cancha',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cancha.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cancha/cancha.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cancha.page.scss */ "./src/app/pages/cancha/cancha.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviService"],
        src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
        src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_7__["AlertaServiceService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"]])
], CanchaPage);



/***/ })

}]);
//# sourceMappingURL=pages-cancha-cancha-module-es2015.js.map