(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-lista-complejos-lista-complejos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lista-complejos/lista-complejos.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lista-complejos/lista-complejos.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"Lista complejos\" *ngIf=\"!atras\"></app-header>\n\n<ion-header no-border *ngIf=\"atras\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goSlide1()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n\n\n  <ion-slides class=\"mainSlide\" [options]=\"{ autoHeight: true }\" #slidePrincipal>\n    \n    <ion-slide>\n  \n      <form>\n        <ion-grid >\n  \n          <ion-row>\n            <ion-col>\n              <!-- <img src=\"/assets/img/im2.png\" alt=\"10\" width=\"20\"> -->\n            </ion-col>\n          </ion-row>\n        \n          <ion-row class=\"center\">\n            <ion-col>\n              \n                <div class=\"borA\" *ngFor='let user of complejos' style=\"background-color: rgb(211, 197, 197, 0);\">\n  \n                  <ion-row class=\"ion-align-items-center\">\n                    <ion-col class=\"izquierda\">\n                      <h4 *ngIf=\"user.estado\" \n                      >Abierto Ahora</h4>\n                      <h4 *ngIf=\"!user.estado\"\n                      >Cerrado Ahora</h4>\n                    </ion-col>\n                    <ion-col class=\"derecha\">\n                      <ion-button fill=\"clear\"\n                                  (click)=\"obtenerComplejoId(user.idComplejo)\"\n                                  >\n                        <ion-icon class=\"size\" color=\"dark\" slot=\"start\" name=\"ellipsis-vertical\"></ion-icon>\n                      </ion-button>                  \n                    </ion-col>\n                </ion-row>\n\n                  <img class=\"img\" src=\"{{user.foto}}\">\n                  <h3 >\n                    {{user.nombre}}\n                  </h3>\n                  <ion-row>\n                    <ion-col>\n                      <label>\n                        <ion-icon name=\"location-outline\" color=\"danger\"></ion-icon>\n                        {{user.localidad}}\n                      </label>\n                    </ion-col>\n                    <ion-col>\n                      <ion-label>\n                        <ion-icon name=\"call-outline\" color=\"secondary\"></ion-icon>\n                        {{user.numero}}\n                      </ion-label>\n                    </ion-col>\n                  </ion-row>\n                  \n\n                  <ion-row>\n                    <ion-col *ngIf=\"user.parqueo\">\n                      <label><ion-icon name=\"car-outline\" color=\"tertiary\"></ion-icon>\n                        Con parqueo</label>\n                    </ion-col>\n                    <ion-col *ngIf=\"!user.parqueo\">\n                      <label><ion-icon name=\"car-outline\" color=\"tertiary\"></ion-icon>\n                        Sin parqueo</label>\n                    </ion-col>\n                    <ion-col *ngIf=\"user.seguridad\">\n                      <label><ion-icon name=\"lock-closed-outline\" color=\"danger\"></ion-icon>\n                        Con seguridad</label>\n                    </ion-col>\n                    <ion-col *ngIf=\"!user.seguridad\">\n                      <label><ion-icon name=\"lock-open-outline\" color=\"danger\"></ion-icon>\n                        Sin seguridad</label>\n                    </ion-col>\n                  </ion-row>\n\n                  <!-- <ion-row>\n                    <ion-col>                 \n                    </ion-col>\n                    <ion-col>\n                        <ion-label position=\"floating\">Cambiar estado</ion-label>\n                        <ion-select [(ngModel)]=\"complejo.estado\"\n                                    name=\"idCancha\">\n                            <ion-select-option value=\"true\">Abierto</ion-select-option>\n                            <ion-select-option value=\"false\">Cerrado</ion-select-option>\n                        </ion-select>\n                  </ion-col>\n                  </ion-row> -->\n                  \n                  <!-- <ion-row>\n                    <ion-col size=\"6\">\n                      <ion-button type=\"submit\"\n                          color=\"tertiary\"\n                          shape=\"round\"\n                          >\n                          Actualizar estado\n                      </ion-button>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-button type=\"submit\"\n                          color=\"tertiary\"\n                          shape=\"round\"\n                          (click)=\"obtenerComplejo(user.idComplejo)\"\n                          \n                          (click)=\"goSlideActualizar()\">\n                        Actualizar Info.\n                      </ion-button>\n                    </ion-col>\n                  </ion-row> -->\n                  <!-- <ion-row>\n                    <ion-col size=\"6\">\n                      <ion-button type=\"submit\"\n                          color=\"tertiary\"\n                          shape=\"round\"\n                          (click)=\"obtenerCanchasComplejo(user.idComplejo)\"\n                          (click)=\"goSlideVerCancha()\">\n                        Ver cancha\n                      </ion-button>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-button type=\"submit\"\n                          color=\"tertiary\"\n                          shape=\"round\"\n                          (click)=\"obtenerIdComplejo(user.idComplejo)\"\n                          (click)=\"goSlideAgregarCancha()\">\n                        Agregar cancha\n                      </ion-button>\n                    </ion-col>\n                  </ion-row> -->\n                  <ion-row>\n                    <ion-col>\n                      <ion-button type=\"submit\"\n                                  color=\"tertiary\"\n                                  expand=\"full\"\n                                  color=\"success\"\n                                  (click)=\"obtenerReservasxComplejo(user.idComplejo)\"\n                                  >\n                        Ver reservaciones del complejo\n                      </ion-button>\n                    </ion-col>\n                  </ion-row>\n  \n  \n                </div>\n            </ion-col>\n          </ion-row>\n  \n\n  \n        </ion-grid>\n      </form>\n    </ion-slide>\n  \n    <!-- -------------------------------------------------SLIDE 1------------------------------------------- -->\n    <ion-slide>\n      <ion-grid fixed>\n            <form>\n \n              <h1 style=\"color: white;\">Reservas</h1>  \n\n              <div>\n                <ion-row>\n                  <ion-col class=\"bor\" size=\"3\"><h6 class=\"shadow\">Usuario</h6></ion-col>\n                  <ion-col class=\"bor\" size=\"3\"><h6 class=\"shadow\">Dia y hora</h6></ion-col>\n                  <ion-col class=\"bor\"><h6 class=\"shadow\">¿Realizo el pagó?</h6></ion-col>\n                  <!-- <ion-col></ion-col> -->\n                </ion-row>\n              </div>\n\n              <div>\n                  <ion-row *ngFor=\"let item of reservasComplejo\">\n                    <ion-col class=\"bor\" size=\"3\"><h6 class=\"shadow\">{{item.user.nombreUsuario}}</h6></ion-col>\n                    <ion-col class=\"bor\" size=\"3\"><h6 class=\"shadow\">{{item.horaInicial | date:'dd-MMMM HH:mm'}} a {{item.horaFinal | date:'HH:mm'}}</h6></ion-col>\n                    <ion-col class=\"bor\" *ngIf=\"item.pago\"><label class=\"shadow\">Completo <ion-icon color=\"success\" name=\"checkmark-done-outline\"></ion-icon></label></ion-col>\n                    <ion-col class=\"bor\" *ngIf=\"item.pagoParcial\"><label class=\"shadow\">50% <ion-icon color=\"success\" name=\"checkmark-outline\"></ion-icon></label></ion-col>\n                    <ion-col class=\"bor\" *ngIf=\"!item.pago && !item.pagoParcial\"><h6 class=\"shadow\">No</h6></ion-col>\n                    <ion-col class=\"bor\" *ngIf=\"!item.pago && !item.pagoParcial\">\n                      <ion-button color=\"danger\"\n                                  class=\"centrado\"      \n                                  fill=\"clear\"                \n                                  (click)=\"eliminar(item.idReservacion)\">\n                                  <ion-icon name=\"trash-outline\"></ion-icon>\n                                  </ion-button>\n                      \n                    </ion-col>\n                    <!-- <ion-col *ngIf=\"item.pago || item.pagoParcial\"></ion-col> -->\n                  </ion-row>            \n              </div>\n\n            \n            </form>\n        </ion-grid>\n  \n      </ion-slide>\n\n\n\n      <!-- ---------------------------------------SLIDE ACTUALIZAR DIRECCION----------------------------------- -->\n    <ion-slide>\n      <ion-grid>\n            <form>\n \n                <ion-row class=\"ion-text-center\">\n                  <ion-col class=\"ion-text-center\">\n                    <h3>Actualiza tu dirección</h3>\n                    <ion-item>\n                      <ion-input type=\"text\"\n                                  class=\"izquierda\"                         \n                                 name=\"complejoLocalidad\"\n                                 [(ngModel)]=\"complejo.localidad\"\n                                 required>\n                                </ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n\n                <ion-row>\n                  <!-- <ion-col>\n                    <ion-button type=\"submit\"\n                                fill=\"outline\"\n                                color=\"success\"\n                                shape=\"round\"\n                                (click)=\"goSlide1()\">\n                                <ion-icon name=\"caret-back-outline\"></ion-icon>\n                      Regresar\n                    </ion-button>\n                  </ion-col> -->\n                  <ion-col>\n                    <ion-button type=\"submit\"\n                                fill=\"outline\"\n                                color=\"success\"\n                                shape=\"round\"\n                                (click)=\"modificarSinFoto()\">\n                                <ion-icon name=\"sync-outline\"></ion-icon>\n                        Actualizar                        \n                    </ion-button>  \n                  </ion-col>\n                </ion-row>\n\n            \n            </form>\n      </ion-grid>  \n    </ion-slide>\n\n\n    <!-- --------------------------------------SLIDE ACTUALIZAR UBICACION------------------------------------ -->\n    <ion-slide>\n      <ion-grid>\n            <form  #formulario=\"ngForm\">\n \n              <ion-row>\n                <ion-col>  \n                    <h4>Obten tu ubicacion para salir en el mapa</h4>                    \n\n                  <ion-item class=\"ion-text-center\">\n                    <ion-spinner name=\"lines-small\"\n                                 *ngIf=\"cargando\"></ion-spinner>\n                    <ion-button (click)=\"localizacion()\" class=\"centrado\">Obtener mi ubicacion actual</ion-button>\n                    <ion-label *ngIf=\"listo\">\n                      <ion-icon class=\"size\" color=\"success\" name=\"checkmark-done-outline\"></ion-icon>\n                    </ion-label>\n                  </ion-item>                    \n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <!-- <ion-col>\n                <ion-button type=\"submit\"\n                            fill=\"outline\"\n                            color=\"success\"\n                            shape=\"round\"\n                            (click)=\"goSlide1()\">\n                    <ion-icon name=\"caret-back-outline\"></ion-icon>\n                  Regresar\n                </ion-button>\n              </ion-col> -->\n              <ion-col>\n                <ion-button *ngIf=\"listo\"\n                            type=\"submit\"\n                            fill=\"outline\"\n                            color=\"success\"\n                            shape=\"round\"\n                            (click)=\"modificarSinFoto()\">\n                            <ion-icon name=\"sync-outline\"></ion-icon>\n                    Actualizar\n                </ion-button>  \n              </ion-col>\n            </ion-row>\n\n            \n            </form>\n      </ion-grid>  \n    </ion-slide>\n\n\n    <!-- --------------------------------------SLIDE ACTUALIZAR HORARIO------------------------------------ -->\n    <ion-slide>\n      <ion-grid>\n            <form>\n \n                <ion-row>\n                  <ion-col>\n                    <ion-list>\n                        <h4 class=\"ion-text-wrap\">Indica el horario en que tus clientes podrán reservar</h4>\n\n                      <ion-item class=\"bort\">\n                        <ion-label>Hora Inicio</ion-label>\n                        <ion-datetime displayFormat=\"HH:mm\" \n                                      minuteValues=\"0\"\n                                    name=\"horaInicio\"\n                                    [(ngModel)]=\"abre\"\n                                    (ngModelChange)='verificar()'>\n                        </ion-datetime>\n                      </ion-item>\n                      <ion-item class=\"bort\">\n                        <ion-label>Hora Cierre</ion-label>\n                        <ion-datetime displayFormat=\"HH:mm\" \n                                      minuteValues=\"0\"\n                                    name=\"horaCierre\"\n                                    [(ngModel)]=\"cierr\"\n                                    (ngModelChange)='verificar()'>\n                        </ion-datetime>\n\n                      </ion-item>   \n                    </ion-list>\n                  </ion-col>\n                </ion-row>\n\n                <ion-row>\n                  <!-- <ion-col>\n                    <ion-button type=\"submit\"\n                                fill=\"outline\"\n                                color=\"success\"\n                                shape=\"round\"\n                                (click)=\"goSlide1()\">\n                        <ion-icon name=\"caret-back-outline\"></ion-icon>\n                      Regresar\n                    </ion-button>\n                  </ion-col> -->\n                  <ion-col>\n                    <ion-button *ngIf=\"ver\"\n                                type=\"submit\"\n                                fill=\"outline\"\n                                color=\"success\"\n                                shape=\"round\"\n                                (click)=\"modificarSinFoto()\">\n                                <ion-icon name=\"sync-outline\"></ion-icon>\n                        Actualizar\n                    </ion-button>  \n                  </ion-col>\n                </ion-row>\n\n            \n            </form>\n      </ion-grid>  \n    </ion-slide>\n\n\n<!-- ------------------------------------SLIDE ACTUALIZAR FOTO--------------------------------------------- -->\n    <ion-slide>\n      <ion-grid>\n            <form #formulario=\"ngForm\">\n\n              <ion-row>\n                <ion-col>\n                    <h4>Imagen Actual</h4>\n                  <div>\n                      <img class=\"img\" src=\"{{complejo.foto}}\">\n                  </div>                  \n                </ion-col>\n              </ion-row>\n \n                <ion-row>\n                  <ion-col>\n                    <div>\n                      <h4>Cambia la imagen</h4>                        \n                      <ion-item>\n                          <input type=\"file\"\n                                 id=\"img\"\n                                 name=\"img\"\n                                 ngModel\n                                 required>\n                      </ion-item>\n                    </div>\n                  </ion-col>\n                </ion-row>\n\n                <ion-row>\n                  <!-- <ion-col>\n                    <ion-button fill=\"outline\"\n                                type=\"submit\"\n                                color=\"success\"\n                                shape=\"round\"\n                                (click)=\"goSlide1()\">\n                        <ion-icon name=\"caret-back-outline\"></ion-icon>\n                      Regresar\n                    </ion-button>\n                  </ion-col> -->\n                  <ion-col>\n                    <ion-button fill=\"outline\"\n                                type=\"submit\"\n                                color=\"success\"\n                                shape=\"round\"\n                                [disabled]=\"formulario.invalid\"\n                                (click)=\"modificarComplejo()\">\n                                <ion-icon name=\"sync-outline\"></ion-icon>\n                        Actualizar\n                    </ion-button>  \n                  </ion-col>\n                </ion-row>\n\n            \n            </form>\n      </ion-grid>  \n    </ion-slide>\n\n\n    <!-- ------------------------------SLIDE ACTUALIZAR NUMERO-------------------------------------------- -->\n    <ion-slide>\n      <!--  -->\n      <ion-grid>\n        <form #formulario3=\"ngForm\">\n \n          <ion-row class=\"ion-text-center\">\n            <ion-col class=\"ion-text-center\">\n              <h4>Actualiza tu número de teléfono</h4>\n              <ion-item>\n                <ion-input type=\"text\"\n                            class=\"izquierda\"                         \n                           name=\"complejoTelefono\"\n                            minlength=\"8\" maxlength=\"8\"\n                            pattern=\"[0-9]+\"\n                           [(ngModel)]=\"complejo.numero\"\n                           required>\n                          </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <!-- <ion-col>\n              <ion-button type=\"submit\"\n                          fill=\"outline\"\n                          color=\"success\"\n                          shape=\"round\"\n                          (click)=\"goSlide1()\">\n                          <ion-icon name=\"caret-back-outline\"></ion-icon>\n                Regresar\n              </ion-button>\n            </ion-col> -->\n            <ion-col>\n              <ion-button type=\"submit\"\n                          fill=\"outline\"\n                          color=\"success\"\n                          shape=\"round\"\n                          (click)=\"modificarSinFoto()\"\n                          [disabled]=\"formulario3.invalid\">\n                          <ion-icon name=\"sync-outline\"></ion-icon>\n                  Actualizar                        \n              </ion-button>  \n            </ion-col>\n          </ion-row>\n\n      \n      </form>\n      </ion-grid>\n  \n      </ion-slide>\n  \n  \n  <!-- -------------------------------SLIDE VER CANCHAS------------------------------------- -->\n\n  <ion-slide>\n  \n    <!--  -->\n  </ion-slide>\n\n\n     \n  \n  \n  \n  </ion-slides>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/lista-complejos/lista-complejos-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/lista-complejos/lista-complejos-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ListaComplejosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaComplejosPageRoutingModule", function() { return ListaComplejosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _lista_complejos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lista-complejos.page */ "./src/app/pages/lista-complejos/lista-complejos.page.ts");




const routes = [
    {
        path: '',
        component: _lista_complejos_page__WEBPACK_IMPORTED_MODULE_3__["ListaComplejosPage"]
    }
];
let ListaComplejosPageRoutingModule = class ListaComplejosPageRoutingModule {
};
ListaComplejosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListaComplejosPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/lista-complejos/lista-complejos.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/lista-complejos/lista-complejos.module.ts ***!
  \*****************************************************************/
/*! exports provided: ListaComplejosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaComplejosPageModule", function() { return ListaComplejosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _lista_complejos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lista-complejos-routing.module */ "./src/app/pages/lista-complejos/lista-complejos-routing.module.ts");
/* harmony import */ var _lista_complejos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lista-complejos.page */ "./src/app/pages/lista-complejos/lista-complejos.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let ListaComplejosPageModule = class ListaComplejosPageModule {
};
ListaComplejosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _lista_complejos_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListaComplejosPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_lista_complejos_page__WEBPACK_IMPORTED_MODULE_6__["ListaComplejosPage"]]
    })
], ListaComplejosPageModule);



/***/ }),

/***/ "./src/app/pages/lista-complejos/lista-complejos.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/lista-complejos/lista-complejos.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".masters {\n  width: 100%;\n}\n\n.back {\n  background-color: #989b98;\n}\n\n.img {\n  width: 500px;\n  height: 220px;\n}\n\nion-slides {\n  height: auto;\n}\n\nion-content.background {\n  --background: url(/assets/img/bueno.jpg) 0 0/100% 100% no-repeat;\n  opacity: 0.8;\n}\n\nion-icon.size {\n  font-size: 24px;\n}\n\n.derecha {\n  text-align: right;\n}\n\n.centrado {\n  text-align: center;\n}\n\n.izquierda {\n  text-align: left;\n}\n\n.borA {\n  border-bottom: white 1px solid;\n}\n\n.bor {\n  border-bottom: white 1px solid;\n  border-left: white 1px solid;\n  border-right: white 1px solid;\n}\n\n.bort {\n  border-bottom: white 1px solid;\n  border-left: white 1px solid;\n  border-right: white 1px solid;\n  border-top: white 1px solid;\n}\n\n.shadow {\n  text-shadow: 2px 2px #080808;\n}\n\nlabel, ion-label, h1, h2, h3, h4, h5, h6 {\n  text-shadow: 2px 2px 8px #080808;\n}\n\n.img {\n  min-height: 250px;\n  max-height: 570px;\n  width: 1000px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGlzdGEtY29tcGxlam9zL0M6XFxVc2Vyc1xcZXJpY2tcXE9uZURyaXZlXFxEZXNrdG9wXFxpb25pY1xccHJveWVjdG8vc3JjXFxhcHBcXHBhZ2VzXFxsaXN0YS1jb21wbGVqb3NcXGxpc3RhLWNvbXBsZWpvcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xpc3RhLWNvbXBsZWpvcy9saXN0YS1jb21wbGVqb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBRENBO0VBQ0kseUJBQUE7QUNFSjs7QURDQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDRUY7O0FEQ0E7RUFDRSxZQUFBO0FDRUY7O0FEQ0E7RUFDRSxnRUFBQTtFQUNBLFlBQUE7QUNFRjs7QURDQTtFQUNFLGVBQUE7QUNFRjs7QURDQTtFQUNFLGlCQUFBO0FDRUY7O0FEQUE7RUFDRSxrQkFBQTtBQ0dGOztBRERBO0VBQ0UsZ0JBQUE7QUNJRjs7QUREQTtFQUNFLDhCQUFBO0FDSUY7O0FEREE7RUFDRSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUNJRjs7QUREQTtFQUNFLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0FDSUY7O0FEREE7RUFDRSw0QkFBQTtBQ0lGOztBREZBO0VBQ0UsZ0NBQUE7QUNLRjs7QURGQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDS0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9saXN0YS1jb21wbGVqb3MvbGlzdGEtY29tcGxlam9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXN0ZXJzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB9XHJcbi5iYWNrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTIsIDE1NSwgMTUyKTtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGhlaWdodDogMjIwcHg7XHJcbn1cclxuXHJcbmlvbi1zbGlkZXMge1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZHtcclxuICAtLWJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy9idWVuby5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuaW9uLWljb24uc2l6ZSB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4uZGVyZWNoYXtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uY2VudHJhZG97XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5penF1aWVyZGF7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmJvckEge1xyXG4gIGJvcmRlci1ib3R0b206IHdoaXRlIDFweCBzb2xpZDtcclxuIH1cclxuXHJcbi5ib3Ige1xyXG4gIGJvcmRlci1ib3R0b206IHdoaXRlIDFweCBzb2xpZDtcclxuICBib3JkZXItbGVmdDogd2hpdGUgMXB4IHNvbGlkO1xyXG4gIGJvcmRlci1yaWdodDogd2hpdGUgMXB4IHNvbGlkO1xyXG59XHJcblxyXG4uYm9ydCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogd2hpdGUgMXB4IHNvbGlkO1xyXG4gIGJvcmRlci1sZWZ0OiB3aGl0ZSAxcHggc29saWQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiB3aGl0ZSAxcHggc29saWQ7XHJcbiAgYm9yZGVyLXRvcDogd2hpdGUgMXB4IHNvbGlkO1xyXG59XHJcblxyXG4uc2hhZG93IHtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAjMDgwODA4O1xyXG59XHJcbmxhYmVsLCBpb24tbGFiZWwsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xyXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDhweCAjMDgwODA4O1xyXG59XHJcblxyXG4uaW1nIHtcclxuICBtaW4taGVpZ2h0OiAyNTBweDtcclxuICBtYXgtaGVpZ2h0OiA1NzBweDtcclxuICB3aWR0aDogMTAwMHB4O1xyXG59IiwiLm1hc3RlcnMge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTg5Yjk4O1xufVxuXG4uaW1nIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDIyMHB4O1xufVxuXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5pb24tY29udGVudC5iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvYnVlbm8uanBnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbiAgb3BhY2l0eTogMC44O1xufVxuXG5pb24taWNvbi5zaXplIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uZGVyZWNoYSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY2VudHJhZG8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5penF1aWVyZGEge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uYm9yQSB7XG4gIGJvcmRlci1ib3R0b206IHdoaXRlIDFweCBzb2xpZDtcbn1cblxuLmJvciB7XG4gIGJvcmRlci1ib3R0b206IHdoaXRlIDFweCBzb2xpZDtcbiAgYm9yZGVyLWxlZnQ6IHdoaXRlIDFweCBzb2xpZDtcbiAgYm9yZGVyLXJpZ2h0OiB3aGl0ZSAxcHggc29saWQ7XG59XG5cbi5ib3J0IHtcbiAgYm9yZGVyLWJvdHRvbTogd2hpdGUgMXB4IHNvbGlkO1xuICBib3JkZXItbGVmdDogd2hpdGUgMXB4IHNvbGlkO1xuICBib3JkZXItcmlnaHQ6IHdoaXRlIDFweCBzb2xpZDtcbiAgYm9yZGVyLXRvcDogd2hpdGUgMXB4IHNvbGlkO1xufVxuXG4uc2hhZG93IHtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggIzA4MDgwODtcbn1cblxubGFiZWwsIGlvbi1sYWJlbCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDhweCAjMDgwODA4O1xufVxuXG4uaW1nIHtcbiAgbWluLWhlaWdodDogMjUwcHg7XG4gIG1heC1oZWlnaHQ6IDU3MHB4O1xuICB3aWR0aDogMTAwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/lista-complejos/lista-complejos.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/lista-complejos/lista-complejos.page.ts ***!
  \***************************************************************/
/*! exports provided: ListaComplejosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaComplejosPage", function() { return ListaComplejosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_models_complejo_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/complejo.models */ "./src/models/complejo.models.ts");
/* harmony import */ var src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/apiservi.service */ "./src/app/services/apiservi.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alerta-service.service */ "./src/app/services/alerta-service.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var src_models_reservacion_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/models/reservacion.models */ "./src/models/reservacion.models.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);










let ListaComplejosPage = class ListaComplejosPage {
    constructor(apiServi, usuarioService, navCtrl, alertaService, geolocation, actionSheetController, alertController) {
        this.apiServi = apiServi;
        this.usuarioService = usuarioService;
        this.navCtrl = navCtrl;
        this.alertaService = alertaService;
        this.geolocation = geolocation;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        // complejo = {
        //   idComplejo: 0,
        //   nombre: '',
        //   localidad: '',
        //   foto: null,
        //   estado: false,
        //   longitud: 0,
        //   latitud: 0,
        //   horaInicio: new Date(),
        //   horaCierre: new Date(),
        //   userId: ''
        // };
        this.complejo = new src_models_complejo_models__WEBPACK_IMPORTED_MODULE_2__["Complejo"](0, '', '', '', '', false, 0.0, 0.0, new Date(), new Date(), false, false, '');
        this.complejos = [];
        this.atras = false;
        this.cargando = false;
        this.listo = false;
        this.hoy = moment__WEBPACK_IMPORTED_MODULE_9__().format('YYYY-MM-DDTHH:mm');
        this.canchas = [];
        this.cancha = {
            idCancha: 0,
            precio: null,
            foto: null,
            idComplejo: null
        };
        this.reservaComplejo = new src_models_reservacion_models__WEBPACK_IMPORTED_MODULE_8__["Reservacion"](0, new Date(), new Date(), false, false, 0, '');
        this.reservasComplejo = [];
        this.ver = false;
    }
    ngOnInit() {
        this.slides.lockSwipes(true);
        this.perfil = this.usuarioService.getUsuario();
        this.obtenerComplejos();
    }
    // --------------------------------------------METODOS COMPLEJOS------------------------------------
    obtenerComplejos() {
        this.apiServi.getComplejoAdmin(this.perfil.id)
            .subscribe((resp) => {
            this.complejos = resp;
        });
    }
    obtenerComplejoId(id) {
        this.apiServi.getComplejoId(id)
            .subscribe((resp) => {
            this.complejo = resp;
            this.presentActionSheet();
            console.log(this.complejo);
        });
    }
    obtenerIdComplejo(id) {
        this.cancha.idComplejo = id;
    }
    obtenerComplejo(id) {
        this.obtenerComplejoId(id);
    }
    modificarSinFoto() {
        // this.complejo.latitud = 15.51789;
        // this.complejo.longitud = -88.03639;
        this.complejo.horaInicio = moment__WEBPACK_IMPORTED_MODULE_9__(this.abre).subtract(6, 'hour');
        this.complejo.horaCierre = moment__WEBPACK_IMPORTED_MODULE_9__(this.cierr).subtract(6, 'hour');
        console.log(this.complejo.horaInicio + ' ' + this.complejo.horaCierre);
        this.apiServi.putComplejo(this.complejo.idComplejo, this.complejo)
            .subscribe((data) => {
            this.complejos.push(this.complejo);
            this.clear();
            this.navCtrl.navigateRoot('/inicio');
            this.alertaService.alertaInformativa('Actualizado con exito');
            this.obtenerComplejos();
        }, (error) => {
            console.log(error);
        });
    }
    modificarComplejo() {
        const fileInput = document.getElementById('img');
        const file = fileInput.files[0];
        const imgPromise = this.getFileBlobCancha(file);
        imgPromise.then(blob => {
            this.complejo.foto = blob;
            this.modificarSinFoto();
        });
    }
    // --------------------------------------------METODOS CANCHAS--------------------------------------
    // agregarCancha() {
    //   const fileInput: any = document.getElementById('imgCancha');
    //   const file = fileInput.files[0];
    //   const imgPromise = this.getFileBlobCancha(file);
    //   imgPromise.then(blob => {
    //     this.cancha.foto = blob;
    //     this.apiServi.postCancha(this.cancha)
    //   .subscribe((data) => {
    //     this.canchas.push(this.cancha);
    //     this.cancha = {
    //       idCancha: 0,
    //       precio: null,
    //       foto: null,
    //       idComplejo: null
    //     };
    //     this.alertaService.alertaInformativa('Cancha agregada');
    //     this.navCtrl.navigateRoot('/inicio');
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    //   );
    //   });
    // }
    // obtenerCanchasComplejo(id: number) {
    //   this.apiServi.getCanchaComplejo(id)
    //   .subscribe((resp: Cancha[]) => {
    //     this.canchas = resp;
    //   });
    // }
    // idCancha(id: number) {
    //   this.cancha.idCancha = id;
    // }
    // ---------------------------------------------------METODOS IMAGENES--------------------------------
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
    // -------------------------------------------------METODOS RESERVAS---------------------------------------------
    obtenerReservasxComplejo(id) {
        this.apiServi.getReservacionComplejo(id)
            .subscribe((resp) => {
            this.reservasComplejo = resp;
            this.goSlide2();
            // console.log(resp);
        });
    }
    eliminarReservacion(id) {
        // const d = moment(dia).format('YYYY-MM-DDTHH:mm');
        // if (d < this.hoy) {
        //   return this.alertaService.alertaInformativa('No puedes eliminar esta reserva porque ya se vencio.')
        // }
        this.apiServi.deleteReservacion(id)
            .subscribe(resp => {
            this.goSlide1();
            this.alertaService.alertaInformativa('Realizado con exito');
            console.log('ELIMINADO CON EXITO');
        });
    }
    presentAlertConfirmEliminar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Quieres eliminar esta reservacion!',
                message: '<strong>Eliminar</strong>??',
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
                            this.complejo.estado = !this.complejo.estado;
                            this.modificarSinFoto();
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    verificar() {
        const hoy = moment__WEBPACK_IMPORTED_MODULE_9__().format('MM-DD-YYYY HH:mm');
        const inicio = moment__WEBPACK_IMPORTED_MODULE_9__(this.complejo.horaInicio).format('MM-DD-YYYY HH:mm');
        const cierre = moment__WEBPACK_IMPORTED_MODULE_9__(this.complejo.horaCierre).format('MM-DD-YYYY HH:mm');
        if (cierre < inicio) {
            this.ver = false;
            this.alertaService.alertaInformativa('La hora de cierre no puede ser menor que la de inicio.');
        }
        else {
            this.ver = true;
        }
    }
    // -------------------------------------------------------------------------------------------------
    clear() {
        this.complejo = new src_models_complejo_models__WEBPACK_IMPORTED_MODULE_2__["Complejo"](0, '', '', '', '', false, 0.0, 0.0, new Date(), new Date(), false, false, '');
    }
    // -----------------------------------------------ACTION SHEET-----------------------------------------------
    presentActionSheet() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Actualizar',
                buttons: [{
                        text: 'Estado',
                        icon: 'alert',
                        cssClass: 'estado',
                        handler: () => {
                            this.presentAlertConfirm();
                        }
                    }, {
                        text: 'Direccion',
                        icon: 'location',
                        cssClass: 'rojo',
                        handler: () => {
                            this.actualizarDireccion();
                        }
                    }, {
                        text: 'Teléfono',
                        icon: 'call',
                        cssClass: 'azul',
                        handler: () => {
                            this.actualizarTelefono();
                        }
                    }, {
                        text: 'Parqueo',
                        icon: 'car',
                        cssClass: 'blanco',
                        handler: () => {
                            this.parqueo();
                        }
                    }, {
                        text: 'Seguridad',
                        icon: 'lock-open',
                        cssClass: 'morado',
                        handler: () => {
                            this.seguridad();
                        }
                    }, {
                        text: 'Ubicacion',
                        icon: 'compass',
                        cssClass: 'azul',
                        handler: () => {
                            this.goSlideActualizarUbicacion();
                        }
                    }, {
                        text: 'Horario',
                        icon: 'alarm',
                        cssClass: 'verde',
                        handler: () => {
                            this.goSlideActualizarHorario();
                        }
                    }, {
                        text: 'Imagen',
                        icon: 'camera-reverse',
                        cssClass: 'morado',
                        handler: () => {
                            this.goSlideActualizarFoto();
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
    actualizarDireccion() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Cambia la dirección del complejo!',
                message: '<strong>Dirección actual: ' + this.complejo.localidad + ' </strong>',
                inputs: [
                    {
                        name: 'name',
                        type: 'text',
                        min: 5,
                        max: 15
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            this.clear();
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Ok',
                        handler: data => {
                            if (data.name.length < 5) {
                                return this.alertaService.alertaInformativa('La dirección debe tener al menos 5 caracteres');
                            }
                            else {
                                console.log('Confirm Ok');
                                this.complejo.localidad = data.name;
                                this.modificarSinFoto();
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    actualizarTelefono() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Cambia la dirección del complejo!',
                message: '<strong>Dirección actual: ' + this.complejo.numero + ' </strong>',
                inputs: [
                    {
                        name: 'numero',
                        type: 'number',
                        min: 5,
                        max: 15
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            this.clear();
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Ok',
                        handler: data => {
                            if (data.numero.length < 8) {
                                return this.alertaService.alertaInformativa('El número debe tener 8 digitos');
                            }
                            else {
                                console.log('Confirm Ok');
                                this.complejo.numero = data.numero;
                                this.modificarSinFoto();
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentAlertConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Informa a tus clientes si estas Abierto/Cerrado!',
                message: '<strong>Confirma el cambio dando OK</strong>',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Ok',
                        handler: () => {
                            this.complejo.estado = !this.complejo.estado;
                            this.modificarSinFoto();
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    parqueo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Informa a tus clientes si cuentas con parqueo!',
                message: '<strong>Confirma el cambio dando OK</strong>',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Ok',
                        handler: () => {
                            this.complejo.parqueo = !this.complejo.parqueo;
                            this.modificarSinFoto();
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    seguridad() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Informa a tus clientes si cuentas con seguridad!',
                message: '<strong>Confirma el cambio dando OK</strong>',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Ok',
                        handler: () => {
                            this.complejo.seguridad = !this.complejo.seguridad;
                            this.modificarSinFoto();
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    eliminar(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: '¿Quieres eliminar esta reserva?',
                message: '<strong>Confirma dando OK</strong>',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Ok',
                        handler: () => {
                            this.eliminarReservacion(id);
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
    goSlideActualizarDireccion() {
        this.atras = true;
        this.slides.lockSwipes(false);
        this.slides.slideTo(2);
        this.slides.lockSwipes(true);
    }
    goSlideActualizarUbicacion() {
        this.atras = true;
        this.slides.lockSwipes(false);
        this.slides.slideTo(3);
        this.slides.lockSwipes(true);
    }
    goSlideActualizarHorario() {
        this.atras = true;
        this.slides.lockSwipes(false);
        this.slides.slideTo(4);
        this.slides.lockSwipes(true);
    }
    goSlideActualizarFoto() {
        this.atras = true;
        this.slides.lockSwipes(false);
        this.slides.slideTo(5);
        this.slides.lockSwipes(true);
    }
    goSlideActualizarNumero() {
        this.atras = true;
        this.slides.lockSwipes(false);
        this.slides.slideTo(6);
        this.slides.lockSwipes(true);
    }
    goSlideVerCancha() {
        this.slides.lockSwipes(false);
        this.slides.slideTo(7);
        this.slides.lockSwipes(true);
    }
};
ListaComplejosPage.ctorParameters = () => [
    { type: src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviService"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_6__["AlertaServiceService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slidePrincipal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"])
], ListaComplejosPage.prototype, "slides", void 0);
ListaComplejosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lista-complejos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lista-complejos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lista-complejos/lista-complejos.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lista-complejos.page.scss */ "./src/app/pages/lista-complejos/lista-complejos.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviService"],
        src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_6__["AlertaServiceService"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], ListaComplejosPage);



/***/ })

}]);
//# sourceMappingURL=pages-lista-complejos-lista-complejos-module-es2015.js.map