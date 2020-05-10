(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cancha-cancha-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cancha/cancha.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cancha/cancha.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"Cancha\"></app-header>\n\n\n<!-- <form #formulario=\"ngForm\" (ngSubmit)=\"agregarCancha()\">\n\n  <ion-item>\n    <ion-label>Foto</ion-label>\n    <input type=\"file\"\n    id=\"img\"\n    name=\"img\"\n   ngModel\n   required>\n  </ion-item>\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"floating\">Precio</ion-label>\n      <ion-input type=\"text\"\n                  name=\"precio\"\n                 [(ngModel)]=\"cancha.precio\"\n                 required>\n                </ion-input>\n    </ion-item>\n    <ion-list>\n      <ion-item>\n        <ion-label>Complejo</ion-label>\n        <ion-select [(ngModel)]=\"cancha.idComplejo\"\n                    name=\"idCancha\">\n          <ion-select-option *ngFor=\"let user of complejos\" value=\"{{user.idComplejo}}\" >{{user.nombre}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n  </ion-list>\n\n  <ion-button expand=\"full\" type=\"submit\"\n  [disabled]=\"formulario.invalid\" routerLink=\"/inicio\">\n      Guardar\n  </ion-button>\n</form> -->\n\n\n<ion-content center class=\"background\">\n\n  <ion-slides class=\"mainSlide\" [options]=\"{ autoHeight: true }\" #slidePrincipal>\n    \n    <ion-slide>  \n      <form #formulario=\"ngForm\">\n        <ion-grid>\n  \n          <ion-row>\n            <ion-col>\n              <!-- <img src=\"/assets/img/im2.png\" alt=\"10\" width=\"20\"> -->\n            </ion-col>\n          </ion-row>\n        \n          <ion-row class=\"center\">\n            <ion-col>\n              \n                <div *ngFor='let user of complejos'>\n  \n                <ion-card class=\"ion-text-center back\">\n\n                  <img src=\"{{user.foto}}\" alt=\"200\" width=\"500\">\n                  <ion-card-title>\n                    Complejo: {{user.nombre}}\n                  </ion-card-title>\n                  \n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-button type=\"submit\"\n                      color=\"tertiary\"\n                      shape=\"round\"\n                      (click)=\"obtenerIdComplejo(user.idComplejo)\"\n                      (click)=\"goSlideCancha()\">\n                      Crear cancha\n                  </ion-button>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-button type=\"submit\"\n                      color=\"tertiary\"\n                      shape=\"round\"                      \n                      (click)=\"obtenerIdComplejo(user.idComplejo)\"\n                      (click)=\"goSlideVerCancha()\">\n                      Ver canchas\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n  \n                </ion-card>\n  \n                </div>\n            </ion-col>\n          </ion-row>\n  \n\n  \n        </ion-grid>\n      </form>\n    </ion-slide>\n  \n<!-- ----------------------------------------SLIDE AGREGAR CANCHA---------------------------------------- -->\n    <ion-slide>\n      <ion-grid>\n            <form #formulario=\"ngForm\">\n\n                <ion-row>\n                    <ion-col>  \n  \n                      \n                        <ion-label class=\"ion-text-center\">Cual sera el precio por hora que tendra esta cancha?</ion-label>                      \n                      \n\n                      <ion-item>\n                        <ion-label position=\"floating\">Precio Lps.</ion-label>\n                        <ion-input type=\"number\"\n                                    name=\"precio\"\n                                   [(ngModel)]=\"cancha.precio\"\n                                   required>\n                                  </ion-input>\n                      </ion-item>\n\n                      \n                          <h4>Agrega una foto de la cancha</h4>\n                        <ion-item class=\"ion-text-center\">\n                        <input type=\"file\"\n                        id=\"imgCancha\"\n                        name=\"imgCancha\"\n                        ngModel\n                        required>\n                      </ion-item>\n                        \n                    </ion-col>\n                </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-button type=\"submit\"\n                          color=\"success\"\n                          shape=\"round\"\n                          expand=\"full\"\n                          (click)=\"goSlide1()\">\n                          <ion-icon name=\"caret-back-outline\"></ion-icon>\n                          Regresar\n                        </ion-button>\n              </ion-col>\n              <ion-col>\n                <ion-button type=\"submit\"\n                            color=\"success\"\n                            shape=\"round\"\n                            expand=\"full\"\n                            [disabled]=\"formulario.invalid\"\n                            (click)=\"agregarCancha()\">\n                            <ion-icon name=\"add-circle-outline\"></ion-icon>\n                        Crear cancha\n                    </ion-button>\n              </ion-col>\n              </ion-row>\n\n            </form>\n        </ion-grid>  \n      </ion-slide>\n    \n\n<!-- ------------------------------------------SLIDE VER CANCHAS---------------------------------------------- -->\n\n  <ion-slide>  \n    <form>\n      <ion-grid>\n\n        <ion-row class=\"center\">\n          <ion-col>\n            <ion-button type=\"submit\"\n                        color=\"success\"\n                        shape=\"round\"\n                        (click)=\"goSlide1()\">\n                        <ion-icon name=\"caret-back-outline\"></ion-icon>\n              Regresar\n            </ion-button>\n          </ion-col>\n        </ion-row>\n\n      \n        <ion-row class=\"center\">\n          <ion-col>\n            \n              <div *ngFor='let user of canchas'>\n\n              <ion-card class=\"ion-text-center back\">\n                <ion-card-header>                  \n                  <ion-card-title>Precio</ion-card-title>\n                </ion-card-header>\n                  <ion-card-subtitle (click)=\"getCanchaId(user.idCancha)\"\n                                      (click)=\"presentAlertPrompt()\"\n                                      style=\"color: blue;\"><u>Lps. {{user.precio}}</u></ion-card-subtitle>\n\n                <img class=\"img\" src=\"{{user.foto}}\" alt=\"200\" width=\"500\">\n                \n\n              </ion-card>\n\n              </div>\n          </ion-col>\n        </ion-row>\n\n        \n\n      </ion-grid>\n    </form>\n  </ion-slide>\n  \n  </ion-slides>\n  \n\n\n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".back {\n  background-color: #c5d8c9;\n}\n\nion-content.background {\n  --background: url(/assets/img/fondocancha.png) 0 0/100% 100% no-repeat;\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FuY2hhL0M6XFxVc2Vyc1xcZXJpY2tcXE9uZURyaXZlXFxEZXNrdG9wXFxpb25pY1xccHJveWVjdG8vc3JjXFxhcHBcXHBhZ2VzXFxjYW5jaGFcXGNhbmNoYS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NhbmNoYS9jYW5jaGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLHNFQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FuY2hhL2NhbmNoYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk3LCAyMTYsIDIwMSk7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50LmJhY2tncm91bmR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy9mb25kb2NhbmNoYS5wbmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH0iLCIuYmFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNWQ4Yzk7XG59XG5cbmlvbi1jb250ZW50LmJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy9mb25kb2NhbmNoYS5wbmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuICBvcGFjaXR5OiAwLjg7XG59Il19 */");

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
/* harmony import */ var src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/apiservi.service */ "./src/app/services/apiservi.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alerta-service.service */ "./src/app/services/alerta-service.service.ts");






let CanchaPage = class CanchaPage {
    constructor(apiServi, usuarioService, navCtrl, alertaService, alertController) {
        this.apiServi = apiServi;
        this.usuarioService = usuarioService;
        this.navCtrl = navCtrl;
        this.alertaService = alertaService;
        this.alertController = alertController;
        this.canchas = [];
        this.complejos = [];
        this.cancha = {
            idCancha: 0,
            precio: null,
            foto: null,
            idComplejo: null
        };
    }
    ngOnInit() {
        this.slides.lockSwipes(true);
        this.perfil = this.usuarioService.getUsuario();
        this.obtenerComplejoAdmin(this.perfil.id);
    }
    obtenerComplejoAdmin(id) {
        this.apiServi.getComplejoAdmin(id)
            .subscribe((resp) => {
            this.complejos = resp;
            console.log('SERVICIO', resp);
        });
    }
    obtenerCanchaId() {
        this.apiServi.getCanchaId(this.cancha.idCancha)
            .subscribe(resp => {
            console.log('EJECUTADO CON EXITO');
        });
    }
    modificarCancha() {
        this.apiServi.putCancha(this.cancha.idCancha, this.cancha)
            .subscribe((data) => {
            this.canchas.push(this.cancha);
            this.cancha = {
                idCancha: 0,
                precio: null,
                foto: null,
                idComplejo: null
            };
            window.alert('ACTUALIZADO CON EXITO');
            this.goSlide1();
        }, (error) => {
            console.log(error);
        });
    }
    eliminarCancha() {
        this.apiServi.deleteCancha(this.cancha.idCancha)
            .subscribe(resp => {
            console.log('ELIMINADO CON EXITO');
        });
    }
    obtenerIdComplejo(id) {
        this.cancha.idComplejo = id;
        // console.log('ESTE ES EL ID DEL COMPLEJO ' + this.cancha.idComplejo);
        this.obtenerCanchasComplejo(id);
    }
    // --------------------------------------------METODOS CANCHAS--------------------------------------
    agregarCancha() {
        const fileInput = document.getElementById('imgCancha');
        const file = fileInput.files[0];
        const imgPromise = this.getFileBlobCancha(file);
        imgPromise.then(blob => {
            this.cancha.foto = blob;
            this.apiServi.postCancha(this.cancha)
                .subscribe((data) => {
                this.canchas.push(this.cancha);
                this.cancha = {
                    idCancha: 0,
                    precio: null,
                    foto: null,
                    idComplejo: null
                };
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
        });
    }
    getCanchaId(id) {
        this.apiServi.getCanchaId(id)
            .subscribe((resp) => {
            this.cancha = resp;
            console.log(this.cancha);
        }, error => console.log(error));
    }
    idCancha(id) {
        this.cancha.idCancha = id;
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
    // ------------------------------------------------ALERT CONTROLLER-------------------------------------
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
    // ---------------------------------------------------SLIDES--------------------------------------------
    goSlide1() {
        this.slides.lockSwipes(false);
        this.slides.slideTo(0);
        this.slides.lockSwipes(true);
    }
    goSlideCancha() {
        this.slides.lockSwipes(false);
        this.slides.slideTo(1);
        this.slides.lockSwipes(true);
    }
    goSlideVerCancha() {
        this.slides.lockSwipes(false);
        this.slides.slideTo(2);
        this.slides.lockSwipes(true);
    }
};
CanchaPage.ctorParameters = () => [
    { type: src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviService"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_5__["AlertaServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slidePrincipal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"])
], CanchaPage.prototype, "slides", void 0);
CanchaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cancha',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cancha.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cancha/cancha.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cancha.page.scss */ "./src/app/pages/cancha/cancha.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviService"],
        src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_5__["AlertaServiceService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], CanchaPage);



/***/ })

}]);
//# sourceMappingURL=pages-cancha-cancha-module-es2015.js.map