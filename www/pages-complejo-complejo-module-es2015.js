(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-complejo-complejo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/complejo/complejo.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/complejo/complejo.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"Crear complejo\" *ngIf=\"!atras\"></app-header>\n\n<ion-header no-border *ngIf=\"atras\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"slideAtras()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"background\">\n\n  <br>\n\n<!-- <form #formulario=\"ngForm\" (ngSubmit)=\"crearComplejo()\">\n\n  <ion-item class=\"text-center\">\n    Agrega una imagen de tu complejo\n  </ion-item>\n\n  <ion-item>\n      <input type=\"file\"\n             id=\"img\"\n             name=\"img\"\n             ngModel\n             required>\n  </ion-item>\n\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"floating\">Nombre Complejo</ion-label>\n      <ion-input type=\"text\"\n                  name=\"nombreComplejo\"\n                 [(ngModel)]=\"complejo.nombre\"\n                 required>\n                </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Localidad</ion-label>\n      <ion-input type=\"string\"\n                  name=\"localidad\"\n                 [(ngModel)]=\"complejo.localidad\"\n                 required>\n                </ion-input>\n    </ion-item>\n    <ion-list>\n      <ion-item>\n        <ion-label>Estado</ion-label>\n        <ion-select [(ngModel)]=\"complejo.estado\"\n                    name=\"idCancha\">\n            <ion-select-option value=\"true\">Abierto</ion-select-option>\n            <ion-select-option value=\"false\">Cerrado</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n  \n  </ion-list>\n\n  <ion-button expand=\"full\" type=\"submit\"\n              [disabled]=\"formulario.invalid\">\n      Guardar\n  </ion-button>\n\n</form>\n\n\n<ion-card class=\"ion-text-center\" *ngFor=\"let item of complejos\">\n  <ion-row>\n    <ion-col><h2>{{item.nombre}}</h2></ion-col>\n    <ion-col *ngIf='item.estado == true'><h3>Abierto</h3></ion-col>\n  </ion-row>\n    <img src={{item.foto}} alt=\"200\" width=\"500\">\n    \n    ESTE ESTABA COMENTADO\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"trash-outline\" (click)=\"eliminarReservacion(item.idReservacion)\">Eliminar reservacion</ion-icon>\n    </ion-item>\n</ion-card> -->\n\n\n\n<ion-slides class=\"mainSlide\" [options]=\"{ autoHeight: true }\" #slidePrincipal>\n    \n  <ion-slide >\n    <form #formulario=\"ngForm\">\n      <ion-grid>\n\n        <ion-row>\n          <ion-col>\n            <!-- <img src=\"/assets/img/im2.png\" alt=\"10\" width=\"20\"> -->\n            <ion-icon class=\"size\" color=\"dark\" name=\"tv-outline\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      \n        <ion-row>\n          <ion-col>\n              <div>\n\n                <h3 style=\"color: white;\">Dale nombre al complejo</h3>\n                <ion-item class=\"ion-text-center\">\n                  <ion-input type=\"text\"\n                              class=\"ion-text-left\"                              \n                              name=\"nombreComplejo\"\n                              placeholder=\"Nombre\"\n                              minlength=\"5\"\n                              maxlength=\"15\"\n                             [(ngModel)]=\"complejo.nombre\"\n                             required>\n                            </ion-input>\n                </ion-item>\n\n                <br>\n\n                <h4 style=\"color: white;\">Agreag una imagen del complejo</h4>\n                <ion-item>\n                    <input type=\"file\"\n                           id=\"img\"\n                           name=\"img\"\n                           ngModel\n                           required>\n                </ion-item>                \n\n              </div>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"center\">\n          <ion-col>\n            \n            <ion-button type=\"submit\"\n                        color=\"success\"\n                        shape=\"round\"\n                        fill=\"outline\"\n                        (click)=\"goSlide2()\"\n                        [disabled]=\"formulario.invalid\">\n              Siguiente\n              <ion-icon name=\"caret-forward-outline\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n    </form>\n  </ion-slide>\n\n  <!-- --------------------------------------------------SLIDE 2---------------------------------------- -->\n  <ion-slide>\n    <ion-grid>\n          <form #formulario2=\"ngForm\">\n            <ion-row>\n              <ion-col>\n                <!-- <img src=\"/assets/img/im2.png\"> -->\n                <ion-icon class=\"size\" color=\"dark\" name=\"location-outline\"></ion-icon>\n              </ion-col>\n            </ion-row>\n              <ion-row class=\"center\">\n                  <ion-col>  \n\n                      <div>\n                        <label style=\"color: white;\">Coloca la dirección donde se ubica el complejo</label>\n                        <ion-item class=\"ion-text-center\">\n                          <ion-input type=\"string\"\n                                      class=\"ion-text-left\"\n                                      placeholder=\"Direccion\"\n                                      minlength=\"5\"\n                                      maxlength=\"15\"\n                                      name=\"localidad\"\n                                     [(ngModel)]=\"complejo.localidad\"\n                                     required>\n                          </ion-input>\n                        </ion-item>\n                        <br>\n\n                        <ion-row>\n                          <ion-col>\n                            <ion-icon class=\"size\" color=\"dark\" name=\"time-outline\"></ion-icon>\n                          </ion-col>\n                        </ion-row>\n\n                        <label style=\"color: white;\">¿En qué horario te gustaria que reservaran tus clientes?</label>\n\n                        <ion-item>\n                          <ion-label>Hora Inicio</ion-label>\n                          <ion-datetime displayFormat=\"HH:mm\" \n                                      name=\"horaInicio\"\n                                      minuteValues=\"0\"\n                                      required\n                                      [(ngModel)]=\"abre\"\n                                      >\n                          </ion-datetime>\n                        </ion-item>\n                        <ion-item>\n                          <ion-label>Hora Cierre</ion-label>\n                          <ion-datetime displayFormat=\"HH:mm\" \n                                      name=\"horaCierre\"\n                                      minuteValues=\"0\"\n                                      required\n                                      [(ngModel)]=\"cierr\"\n                                      >\n                          </ion-datetime>\n\n                        </ion-item>                          \n                          \n                      </div>\n                  </ion-col>\n              </ion-row>\n\n              <ion-row>\n              <!-- <ion-col class=\"derecha\">\n                <ion-button type=\"submit\"\n                          color=\"tertiary\"\n                          shape=\"round\"\n                          (click)=\"goSlide1()\">\n                          <ion-icon name=\"caret-back-outline\"></ion-icon>\n                          Regresar\n                        </ion-button>\n              </ion-col> -->\n              <ion-col>\n                  <ion-button type=\"submit\"\n                              color=\"success\"\n                              shape=\"round\"\n                              fill=\"outline\"\n                              (click)=\"verificar()\"\n                              [disabled]=\"formulario2.invalid\">\n                      Siguiente\n                      <ion-icon name=\"caret-forward-outline\"></ion-icon>\n                  </ion-button>\n              </ion-col>\n          </ion-row>\n          </form>\n      </ion-grid>\n\n    </ion-slide>\n\n\n<!-- -------------------------------------------SLIDE 3------------------------------------------------- -->\n\n<ion-slide>\n  <ion-grid>\n        <form #formulario3=\"ngForm\">\n          <ion-row>\n            <ion-col>\n              <!-- <img src=\"/assets/img/im2.png\"> -->\n              <ion-icon class=\"size\" color=\"dark\" name=\"call-outline\"></ion-icon>\n            </ion-col>\n          </ion-row>\n            <ion-row class=\"center\">\n                <ion-col>  \n\n                    <div>\n                      <h4 style=\"color: white;\">Ingresa tu número de teléfono</h4>\n                      <ion-item class=\"ion-text-center\">\n                        <ion-input type=\"text\"\n                                    class=\"ion-text-left\"\n                                    placeholder=\"Teléfono\"\n                                    name=\"numero\"\n                                    minlength=\"8\" maxlength=\"8\"\n                                    pattern=\"[0-9]+\"\n                                   [(ngModel)]=\"complejo.numero\"\n                                   required>\n                        </ion-input>\n                      </ion-item>\n                      <br>\n\n                      <ion-item>\n                        <ion-label>¿Tienes parqueo?</ion-label>\n                        <ion-select [(ngModel)]=\"complejo.parqueo\"\n                                    name=\"parqueo\">\n                          <ion-select-option value=\"true\" >Si</ion-select-option>\n                          <ion-select-option value=\"false\" >No</ion-select-option>\n                        </ion-select>\n                      </ion-item>\n\n                      <ion-item>\n                        <ion-label>¿Cuentas con seguridad?</ion-label>\n                        <ion-select [(ngModel)]=\"complejo.seguridad\"\n                                    name=\"seguridad\">\n                          <ion-select-option value=\"true\" >Si</ion-select-option>\n                          <ion-select-option value=\"false\" >No</ion-select-option>\n                        </ion-select>\n                      </ion-item>\n                                               \n                        \n                    </div>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n            <!-- <ion-col class=\"derecha\">\n              <ion-button type=\"submit\"\n                        color=\"tertiary\"\n                        shape=\"round\"\n                        (click)=\"goSlide2()\">\n                        <ion-icon name=\"caret-back-outline\"></ion-icon>\n                        Regresar\n                      </ion-button>\n            </ion-col> -->\n            <ion-col>\n                <ion-button type=\"submit\"\n                            color=\"success\"\n                            shape=\"round\"\n                            fill=\"outline\"\n                            (click)=\"goSlide4()\"\n                            [disabled]=\"formulario3.invalid\">\n                    Siguiente\n                    <ion-icon name=\"caret-forward-outline\"></ion-icon>\n                </ion-button>\n            </ion-col>\n        </ion-row>\n        </form>\n    </ion-grid>\n\n  </ion-slide>\n\n<!-- -------------------------------------------SLIDE 4---------------------------------------------------- -->\n    <ion-slide>\n      <ion-grid>\n            <form>\n              <ion-row>\n                <ion-col>\n                  <!-- <img src=\"/assets/img/im2.png\"> -->\n                  <ion-icon class=\"size\" color=\"dark\" name=\"compass-outline\"></ion-icon>\n                </ion-col>\n              </ion-row>\n                <ion-row>\n                    <ion-col>  \n  \n                      <label style=\"color: white;\">Obtén tu ubicación para que el complejo pueda salir en el mapa</label>\n\n                      <ion-item class=\"ion-text-center\">\n                        <ion-spinner name=\"lines-small\"\n                                     *ngIf=\"cargando\"></ion-spinner>\n                        <ion-button (click)=\"localizacion()\">Obtener mi ubicación actual</ion-button>\n                        <ion-label *ngIf=\"listo\">\n                          <ion-icon class=\"size\" color=\"success\" name=\"checkmark-done-outline\"></ion-icon>\n                        </ion-label>\n                      </ion-item>\n                        \n                    </ion-col>\n                </ion-row>\n                <!-- <ion-row class=\"center\">\n                  <ion-col>\n                    <ion-button type=\"submit\"\n                                color=\"tertiary\"\n                                shape=\"round\"\n                                (click)=\"goSlide3()\">\n                                <ion-icon name=\"caret-back-outline\"></ion-icon>\n                        Regresar\n                    </ion-button>\n                </ion-col>\n            </ion-row> -->\n\n            <ion-row>\n              <ion-col>\n                <h2 style=\"color: white;\">También puedes colocarla después</h2>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"center\">\n              <ion-col>\n                <ion-button type=\"submit\"\n                                color=\"success\"\n                                fill=\"outline\"\n                                shape=\"round\"\n                                (click)=\"crearComplejo()\">\n                        Crear complejo\n                    </ion-button>\n              </ion-col>\n            </ion-row>\n            </form>\n        </ion-grid>\n  \n      </ion-slide>\n\n\n</ion-slides>\n\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/complejo/complejo-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/complejo/complejo-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ComplejoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplejoPageRoutingModule", function() { return ComplejoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _complejo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./complejo.page */ "./src/app/pages/complejo/complejo.page.ts");




const routes = [
    {
        path: '',
        component: _complejo_page__WEBPACK_IMPORTED_MODULE_3__["ComplejoPage"]
    }
];
let ComplejoPageRoutingModule = class ComplejoPageRoutingModule {
};
ComplejoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComplejoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/complejo/complejo.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/complejo/complejo.module.ts ***!
  \***************************************************/
/*! exports provided: ComplejoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplejoPageModule", function() { return ComplejoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _complejo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./complejo-routing.module */ "./src/app/pages/complejo/complejo-routing.module.ts");
/* harmony import */ var _complejo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./complejo.page */ "./src/app/pages/complejo/complejo.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let ComplejoPageModule = class ComplejoPageModule {
};
ComplejoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _complejo_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComplejoPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_complejo_page__WEBPACK_IMPORTED_MODULE_6__["ComplejoPage"]]
    })
], ComplejoPageModule);



/***/ }),

/***/ "./src/app/pages/complejo/complejo.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/complejo/complejo.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content.background {\n  --background: url(/assets/img/fondograma1.jpg) 0 0/100% 100% no-repeat;\n  opacity: 0.8;\n}\n\nion-icon.size {\n  font-size: 35px;\n}\n\n.centrado {\n  text-align: center;\n}\n\n.derecha {\n  text-align: right;\n}\n\n.izquierda {\n  text-align: left;\n}\n\nlabel, h1, h2, h3, h4, h5, h6 {\n  text-shadow: 2px 2px 8px #080808;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcGxlam8vQzpcXFVzZXJzXFxlcmlja1xcT25lRHJpdmVcXERlc2t0b3BcXGlvbmljXFxwcm95ZWN0by9zcmNcXGFwcFxccGFnZXNcXGNvbXBsZWpvXFxjb21wbGVqby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvbXBsZWpvL2NvbXBsZWpvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNJLHNFQUFBO0VBQ0EsWUFBQTtBQ1BKOztBRFVFO0VBQ0UsZUFBQTtBQ1BKOztBRFVBO0VBQ0Usa0JBQUE7QUNQRjs7QURTQTtFQUNFLGlCQUFBO0FDTkY7O0FEUUE7RUFDRSxnQkFBQTtBQ0xGOztBRFFBO0VBQ0UsZ0NBQUE7QUNMRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBsZWpvL2NvbXBsZWpvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1zbGlkZXMge1xyXG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuLy8gfVxyXG5cclxuLy8gaW9uLXNsaWRlIHtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xyXG4vLyB9XHJcbmlvbi1jb250ZW50LmJhY2tncm91bmR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy9mb25kb2dyYW1hMS5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxuXHJcbiAgaW9uLWljb24uc2l6ZSB7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuXHJcbi5jZW50cmFkb3tcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmRlcmVjaGF7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLml6cXVpZXJkYXtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5sYWJlbCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggOHB4ICMwODA4MDg7XHJcbn0iLCJpb24tY29udGVudC5iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvZm9uZG9ncmFtYTEuanBnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbiAgb3BhY2l0eTogMC44O1xufVxuXG5pb24taWNvbi5zaXplIHtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuXG4uY2VudHJhZG8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kZXJlY2hhIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5penF1aWVyZGEge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5sYWJlbCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDhweCAjMDgwODA4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/complejo/complejo.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/complejo/complejo.page.ts ***!
  \*************************************************/
/*! exports provided: ComplejoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplejoPage", function() { return ComplejoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/apiservi.service */ "./src/app/services/apiservi.service.ts");
/* harmony import */ var src_models_complejo_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/complejo.models */ "./src/models/complejo.models.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alerta-service.service */ "./src/app/services/alerta-service.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);









let ComplejoPage = class ComplejoPage {
    constructor(apiServi, usuarioService, navCtrl, alertaService, geolocation) {
        this.apiServi = apiServi;
        this.usuarioService = usuarioService;
        this.navCtrl = navCtrl;
        this.alertaService = alertaService;
        this.geolocation = geolocation;
        this.complejos = [];
        this.complejo = new src_models_complejo_models__WEBPACK_IMPORTED_MODULE_3__["Complejo"](0, null, null, null, null, false, 0.0, 0.0, null, null, false, false, null);
        this.cargando = false;
        this.listo = false;
        this.atras = false;
        this.ver = false;
    }
    ngOnInit() {
        // if (document.referrer !== 'http://localhost:8100/login') {
        //   location.href = 'http://localhost:8100/login';
        // }
        this.perfil = this.usuarioService.getUsuario();
        this.slides.lockSwipes(true);
        this.complejo.userId = this.perfil.id;
        this.obtenerComplejoXAdmin(this.perfil.id);
    }
    // --------------------------------METODOS COMPLEJO-------------------------------------
    obtenerComplejoXAdmin(id) {
        this.apiServi.getComplejoAdmin(id)
            .subscribe((resp) => {
            this.complejos = resp;
            console.log('SERVICIO', resp);
        });
    }
    obtenerComplejoId() {
        this.apiServi.getComplejoId(this.complejo.idComplejo)
            .subscribe(resp => {
            console.log('EJECUTADO CON EXITO');
        });
    }
    crearComplejo() {
        this.complejo.horaInicio = moment__WEBPACK_IMPORTED_MODULE_8__(this.abre).subtract(6, 'hour');
        this.complejo.horaCierre = moment__WEBPACK_IMPORTED_MODULE_8__(this.cierr).subtract(6, 'hour');
        const fileInput = document.getElementById('img');
        const file = fileInput.files[0];
        const imgPromise = this.getFileBlob(file);
        imgPromise.then(blob => {
            this.complejo.foto = blob;
            // console.log("ESTE ES MI BLOB: " + blob);
            this.apiServi.postComplejo(this.complejo)
                .subscribe((data) => {
                this.complejos.push(this.complejo);
                this.limpiar();
                this.listo = false;
                this.alertaService.alertaInformativa('Cambia el estado de complejo a ABIERTO AHORA para que tus clientes sepan que pueden visitarte');
                this.alertaService.alertaInformativa('Complejo creado. \n Puedes verlo en Mis Complejos.');
                this.navCtrl.navigateRoot('/inicio');
            }, (error) => {
                console.log('ERROR: ', error);
            });
        });
    }
    eliminarComplejo() {
        this.apiServi.deleteComplejo(this.complejo.idComplejo)
            .subscribe(resp => {
            console.log('ELIMINADO CON EXITO');
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
    limpiar() {
        this.complejo = new src_models_complejo_models__WEBPACK_IMPORTED_MODULE_3__["Complejo"](0, null, null, null, null, false, 0.0, 0.0, null, null, false, false, null);
    }
    loadMap() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.cargando = true;
            const rta = yield this.geolocation.getCurrentPosition();
            const myLatLng = {
                lat: rta.coords.latitude,
                lng: rta.coords.longitude
            };
            this.cargando = false;
            this.listo = true;
            this.complejo.longitud = myLatLng.lng;
            this.complejo.latitud = myLatLng.lat;
        });
    }
    localizacion() {
        this.cargando = true;
        this.geolocation.getCurrentPosition().then((resp) => {
            this.complejo.latitud = resp.coords.latitude;
            this.complejo.longitud = resp.coords.longitude;
            this.cargando = false;
            this.listo = true;
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
    verificar() {
        const hoy = moment__WEBPACK_IMPORTED_MODULE_8__().format('MM-DD-YYYY HH:mm');
        const inicio = moment__WEBPACK_IMPORTED_MODULE_8__(this.complejo.horaInicio).format('MM-DD-YYYY HH:mm');
        const cierre = moment__WEBPACK_IMPORTED_MODULE_8__(this.complejo.horaCierre).format('MM-DD-YYYY HH:mm');
        if (cierre < inicio) {
            this.ver = false;
            this.alertaService.alertaInformativa('La hora de cierre no puede ser menor a la hora de inicio.');
        }
        else {
            this.ver = true;
            this.goSlide3();
        }
    }
    // getGeo() {
    //   this.cargando = true;
    //   this.geolocation.getCurrentPosition().then((resp) => {
    //     // resp.coords.latitude
    //     // resp.coords.longitude
    //     this.cargando = false;
    //     this.complejo.longitud = resp.coords.longitude;
    //     this.complejo.latitud = resp.coords.latitude;
    //    }).catch((error) => {
    //      console.log('Error getting location', error);
    //      this.cargando = false;
    //    });
    // }
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
    goSlide3() {
        this.slides.lockSwipes(false);
        this.slides.slideTo(2);
        this.slides.lockSwipes(true);
    }
    goSlide4() {
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
ComplejoPage.ctorParameters = () => [
    { type: src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviService"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_6__["AlertaServiceService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slidePrincipal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSlides"])
], ComplejoPage.prototype, "slides", void 0);
ComplejoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-complejo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./complejo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/complejo/complejo.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./complejo.page.scss */ "./src/app/pages/complejo/complejo.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviService"],
        src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_6__["AlertaServiceService"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"]])
], ComplejoPage);



/***/ })

}]);
//# sourceMappingURL=pages-complejo-complejo-module-es2015.js.map