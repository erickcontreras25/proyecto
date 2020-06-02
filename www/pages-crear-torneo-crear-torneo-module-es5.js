function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-crear-torneo-crear-torneo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/crear-torneo/crear-torneo.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/crear-torneo/crear-torneo.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCrearTorneoCrearTorneoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header titulo=\"Crear Torneo\" *ngIf=\"!atras\"></app-header>\n\n<ion-header no-border *ngIf=\"atras\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"slideAtras()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n\n  <ion-slides class=\"mainSlide\" [options]=\"{ autoHeight: true }\" #slidePrincipal>\n\n    <ion-slide>\n      <form #formulario=\"ngForm\">\n      <ion-grid>\n        <div class=\"ion-margin-top\">\n          <ion-label class=\"shadow\">¿Donde se realizara el torneo?</ion-label>\n          <ion-select [(ngModel)]=\"complejo.idComplejo\"\n                      name=\"idComplejo\"\n                      (ngModelChange)=\"getIdComplejo()\">\n            <ion-select-option *ngFor=\"let item of complejos\" value=\"{{item.idComplejo}}\" >{{item.nombre}}</ion-select-option>\n          </ion-select>\n        </div>\n            \n        <br>\n        <div *ngIf=\"complejo.idComplejo!=0\">\n          <h4 class=\"shadow\">Dale nombre al torneo</h4>\n          <ion-item>\n            <ion-input name=\"nombre\"\n                        type=\"text\"\n                        placeholder=\"Nombre\"\n                        minlength=\"5\"\n                        maxlength=\"15\"\n                        required\n                        [(ngModel)]=\"torneo.nombre\"></ion-input>\n          </ion-item>\n        </div>\n        <br>\n        <div *ngIf=\"complejo.idComplejo!=0\">\n          <h4 class=\"shadow\">Cuantos equipos quieres que participen</h4>\n          <ion-item>\n            <ion-input name=\"cantEquipos\"\n                        type=\"number\"\n                        placeholder=\"cantEquipos\"\n                        required\n                        [(ngModel)]=\"torneo.cantEquipos\"></ion-input>\n          </ion-item>\n        </div>\n        <ion-row *ngIf=\"complejo.idComplejo!=0\">\n          <ion-col>\n            <ion-button color=\"success\"\n                        shape=\"round\" fill=\"outline\"\n                        (click)=\"goSlide2()\"\n                        [disabled]=\"formulario.invalid\">Continuar</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n    </ion-slide>\n\n<!-- ----------------------------------------------------SLIDE 3-------------------------------------------- -->\n\n    <ion-slide>\n      <ion-grid>\n        <form #formulario1=\"ngForm\">\n        <div>\n          <h5 class=\"shadow\">Agrega una descripción si deseas.</h5>\n\n          <ion-item>\n            <ion-input name=\"descripcion\"\n                        type=\"text\"\n                        placeholder=\"descripcion\"\n                        minlength=\"5\"                        \n                        [(ngModel)]=\"torneo.descripcion\"></ion-input>\n          </ion-item>\n          <br>\n          <h5 class=\"shadow\">Coloca una foto con los premios y reglas del torneo</h5>\n          <ion-item>\n            <input type=\"file\"\n                   id=\"img\"\n                   name=\"img\"\n                   ngModel\n                   required>\n          </ion-item>\n        </div>\n        <ion-row>\n          <ion-col>\n            <ion-button color=\"success\"\n                        shape=\"round\" fill=\"outline\"\n                        (click)=\"goSlide1()\"\n                        >Regresar</ion-button>\n          </ion-col>\n          <ion-col>\n            <ion-button color=\"success\"\n                        shape=\"round\" fill=\"outline\"\n                        (click)=\"goSlide3()\"\n                        [disabled]=\"formulario1.invalid\">Continuar</ion-button>\n          </ion-col>\n        </ion-row>\n      </form>\n      </ion-grid>\n    </ion-slide>\n\n<!-- ----------------------------------------------------SLIDE 3-------------------------------------------- -->\n\n    <ion-slide>\n      <ion-grid>\n        <form #formulario2=\"ngForm\">\n        <ion-item>\n          <ion-label class=\"shadow\">¿Cuándo se realizara el torneo?</ion-label>\n          <ion-datetime displayFormat=\"D MMM YYYY\" \n                                    name=\"diaTorneo\"\n                                    [(ngModel)]=\"torneo.diaTorneo\"\n                                    (ngModelChange)='verificar()'>\n                      </ion-datetime>\n        </ion-item>\n        <ion-row>\n          <!-- <ion-col>\n            <ion-button color=\"success\"\n                        shape=\"round\" fill=\"outline\"\n                        (click)=\"goSlide1()\"\n                        >Regresar</ion-button>\n          </ion-col> -->\n          <ion-col>\n            <!-- <ion-button color=\"success\"\n                        shape=\"round\" fill=\"outline\"\n                        (click)=\"verificar()\"\n                        >Verificar</ion-button> -->\n                  <ion-button *ngIf=\"ver\"\n                              color=\"success\"\n                              expand=\"full\"\n                              (click)=\"crearTorneoConImagen()\"\n                              [disabled]=\"formulario2.invalid\">\n                CREAR\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-grid>\n    </ion-slide>\n\n\n  </ion-slides>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/crear-torneo/crear-torneo-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/crear-torneo/crear-torneo-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: CrearTorneoPageRoutingModule */

  /***/
  function srcAppPagesCrearTorneoCrearTorneoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrearTorneoPageRoutingModule", function () {
      return CrearTorneoPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _crear_torneo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./crear-torneo.page */
    "./src/app/pages/crear-torneo/crear-torneo.page.ts");

    var routes = [{
      path: '',
      component: _crear_torneo_page__WEBPACK_IMPORTED_MODULE_3__["CrearTorneoPage"]
    }];

    var CrearTorneoPageRoutingModule = function CrearTorneoPageRoutingModule() {
      _classCallCheck(this, CrearTorneoPageRoutingModule);
    };

    CrearTorneoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CrearTorneoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/crear-torneo/crear-torneo.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/crear-torneo/crear-torneo.module.ts ***!
    \***********************************************************/

  /*! exports provided: CrearTorneoPageModule */

  /***/
  function srcAppPagesCrearTorneoCrearTorneoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrearTorneoPageModule", function () {
      return CrearTorneoPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _crear_torneo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./crear-torneo-routing.module */
    "./src/app/pages/crear-torneo/crear-torneo-routing.module.ts");
    /* harmony import */


    var _crear_torneo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./crear-torneo.page */
    "./src/app/pages/crear-torneo/crear-torneo.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var CrearTorneoPageModule = function CrearTorneoPageModule() {
      _classCallCheck(this, CrearTorneoPageModule);
    };

    CrearTorneoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _crear_torneo_routing_module__WEBPACK_IMPORTED_MODULE_5__["CrearTorneoPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_crear_torneo_page__WEBPACK_IMPORTED_MODULE_6__["CrearTorneoPage"]]
    })], CrearTorneoPageModule);
    /***/
  },

  /***/
  "./src/app/pages/crear-torneo/crear-torneo.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/crear-torneo/crear-torneo.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCrearTorneoCrearTorneoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content.background {\n  --background: url(/assets/img/trofeo.png) 0 0/100% 100% no-repeat;\n  opacity: 0.8;\n}\n\n.shadow {\n  text-shadow: 2px 2px #080808;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3JlYXItdG9ybmVvL0M6XFxVc2Vyc1xcZXJpY2tcXE9uZURyaXZlXFxEZXNrdG9wXFxpb25pY1xccHJveWVjdG8vc3JjXFxhcHBcXHBhZ2VzXFxjcmVhci10b3JuZW9cXGNyZWFyLXRvcm5lby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NyZWFyLXRvcm5lby9jcmVhci10b3JuZW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUU7RUFDRSw0QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3JlYXItdG9ybmVvL2NyZWFyLXRvcm5lby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudC5iYWNrZ3JvdW5ke1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvdHJvZmVvLnBuZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgfVxyXG5cclxuICAuc2hhZG93IHtcclxuICAgIHRleHQtc2hhZG93OiAycHggMnB4ICMwODA4MDg7XHJcbiAgfSIsImlvbi1jb250ZW50LmJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy90cm9mZW8ucG5nKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4uc2hhZG93IHtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggIzA4MDgwODtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/crear-torneo/crear-torneo.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/crear-torneo/crear-torneo.page.ts ***!
    \*********************************************************/

  /*! exports provided: CrearTorneoPage */

  /***/
  function srcAppPagesCrearTorneoCrearTorneoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrearTorneoPage", function () {
      return CrearTorneoPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/usuario.service */
    "./src/app/services/usuario.service.ts");
    /* harmony import */


    var src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/apiservi.service */
    "./src/app/services/apiservi.service.ts");
    /* harmony import */


    var src_app_services_torneo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/torneo.service */
    "./src/app/services/torneo.service.ts");
    /* harmony import */


    var src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/alerta-service.service */
    "./src/app/services/alerta-service.service.ts");
    /* harmony import */


    var src_models_torneo_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/models/torneo.models */
    "./src/models/torneo.models.ts");
    /* harmony import */


    var src_models_complejo_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/models/complejo.models */
    "./src/models/complejo.models.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);

    var CrearTorneoPage =
    /*#__PURE__*/
    function () {
      function CrearTorneoPage(actionSheetController, usuarioService, apiServi, torneoService, alertaService, navCtrl) {
        _classCallCheck(this, CrearTorneoPage);

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

      _createClass(CrearTorneoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.perfil = this.usuarioService.getUsuario();
          this.slides.lockSwipes(true);
          this.obtenerComplejos();
        }
      }, {
        key: "crearTorneoConImagen",
        value: function crearTorneoConImagen() {
          var _this = this;

          var fileInput = document.getElementById('img');
          var file = fileInput.files[0];
          var imgPromise = this.getFileBlob(file);
          imgPromise.then(function (blob) {
            _this.torneo.premioFoto = blob; // console.log("ESTE ES MI BLOB: " + blob);

            _this.postTorneo();
          });
        }
      }, {
        key: "crearTorneo",
        value: function crearTorneo() {
          if (this.torneo.premioFoto === '' || this.torneo.premioFoto === undefined || this.torneo.premioFoto === null) {
            console.log('AQUI ESTA');
            this.postTorneo();
          } else {
            this.crearTorneoConImagen();
          }
        }
      }, {
        key: "postTorneo",
        value: function postTorneo() {
          var _this2 = this;

          this.torneo.usuarioId = this.perfil.id;
          this.torneoService.postTorneo(this.torneo).subscribe(function (data) {
            _this2.torneos.push(_this2.torneo);

            _this2.clea();

            _this2.alertaService.alertaInformativa('Torneo creado con exito');

            _this2.navCtrl.navigateRoot('/torneo');
          }, function (error) {
            console.log('ERROR: ', error);
          });
        }
      }, {
        key: "getFileBlob",
        value: function getFileBlob(file) {
          var reader = new FileReader();
          return new Promise(function (resolve, reject) {
            reader.onload = function (theFile) {
              return function (e) {
                resolve(e.target.result);
              };
            }(file);

            reader.readAsDataURL(file);
          });
        }
      }, {
        key: "clea",
        value: function clea() {
          this.torneo = new src_models_torneo_models__WEBPACK_IMPORTED_MODULE_7__["Torneo"](0, '', null, '', '', new Date(), '', 0);
        } // ----------------------------------------------------------------------------------------
        // ----------------------------------------------------------------------------------------

      }, {
        key: "getIdComplejo",
        value: function getIdComplejo() {
          this.torneo.idComplejo = this.complejo.idComplejo;
          console.log(this.torneo.idComplejo);
        }
      }, {
        key: "obtenerComplejos",
        value: function obtenerComplejos() {
          var _this3 = this;

          this.apiServi.getComplejoAdmin(this.perfil.id).subscribe(function (resp) {
            _this3.complejos = resp;
          });
        }
      }, {
        key: "verificar",
        value: function verificar() {
          var hoy = moment__WEBPACK_IMPORTED_MODULE_9__().format('MM-DD-YYYY');
          var diaTorneo = moment__WEBPACK_IMPORTED_MODULE_9__(this.torneo.diaTorneo).format('MM-DD-YYYY');

          if (diaTorneo <= hoy) {
            this.ver = false;
            this.alertaService.alertaInformativa('El dia del torneo no puede ser igual al dia de hoy o anterior a el.');
          } else {
            this.ver = true;
          }
        }
      }, {
        key: "goSlide1",
        value: function goSlide1() {
          this.atras = false;
          this.slides.lockSwipes(false);
          this.slides.slideTo(0);
          this.slides.lockSwipes(true);
        }
      }, {
        key: "goSlide2",
        value: function goSlide2() {
          this.atras = true;
          this.slides.lockSwipes(false);
          this.slides.slideTo(1);
          this.slides.lockSwipes(true);
        }
      }, {
        key: "goSlide3",
        value: function goSlide3() {
          this.slides.lockSwipes(false);
          this.slides.slideTo(2);
          this.slides.lockSwipes(true);
        }
      }, {
        key: "slideAtras",
        value: function slideAtras() {
          var _this4 = this;

          this.slides.lockSwipes(false);
          this.slides.slidePrev();
          this.slides.lockSwipes(true);
          this.slides.isBeginning().then(function (data) {
            if (data === true) {
              _this4.atras = false;
            }
          });
        }
      }]);

      return CrearTorneoPage;
    }();

    CrearTorneoPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }, {
        type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]
      }, {
        type: src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviService"]
      }, {
        type: src_app_services_torneo_service__WEBPACK_IMPORTED_MODULE_5__["TorneoService"]
      }, {
        type: src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_6__["AlertaServiceService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slidePrincipal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], CrearTorneoPage.prototype, "slides", void 0);
    CrearTorneoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-crear-torneo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./crear-torneo.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/crear-torneo/crear-torneo.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./crear-torneo.page.scss */
      "./src/app/pages/crear-torneo/crear-torneo.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"], src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviService"], src_app_services_torneo_service__WEBPACK_IMPORTED_MODULE_5__["TorneoService"], src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_6__["AlertaServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], CrearTorneoPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-crear-torneo-crear-torneo-module-es5.js.map