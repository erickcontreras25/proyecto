function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header class=\"ion-text-center\">\n  <ion-toolbar>\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-text-center\">\n\n  <form #formulario=\"ngForm\" (ngSubmit)=\"goInicio()\">\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"floating\">Email</ion-label>\n        <ion-input type=\"email\"\n                    name=\"auxNombre\"\n                   [(ngModel)]=\"auxNombre\"\n                   required>\n                  </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Password</ion-label>\n        <ion-input type=\"password\"\n                    name=\"auxPassword\"\n                   [(ngModel)]=\"auxPassword\"\n                   required>\n                  </ion-input>\n      </ion-item>\n    </ion-list>\n    <ion-button expand=\"full\" type=\"submit\"\n    [disabled]=\"formulario.invalid\">\n        Entrar\n    </ion-button>\n  </form>\n\n  <div>\n    <a routerLink=\"/crear-perfil\">Registrarse</a>\n  </div>\n\n  \n\n</ion-content> -->\n\n\n<ion-content class=\"background\">\n\n\n  <ion-slides class=\"mainSlide\" #slidePrincipal>\n    \n    <ion-slide>\n\n      <form>\n        <ion-grid fixed>\n\n          <ion-row>\n            <ion-col>\n              <img src=\"/assets/img/im2.png\">\n            </ion-col>\n          </ion-row>\n        \n          <ion-row>\n            <ion-col>\n              \n                <ion-list>\n                  \n                  <ion-item>\n                    <ion-label>Email</ion-label>\n                    <ion-input name=\"email\"\n                                type=\"email\"\n                                required\n                                [(ngModel)]=\"auxNombre\"></ion-input>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label>Password</ion-label>\n                    <ion-input name=\"password\"\n                                type=\"password\"\n                                required\n                                [(ngModel)]=\"auxPassword\"></ion-input>\n                  </ion-item>\n\n                </ion-list>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-button type=\"submit\"\n                          color=\"tertiary\"\n                          shape=\"round\"\n                          (click)=\"goInicio()\">\n                Login\n              </ion-button>\n            </ion-col>\n          </ion-row>\n\n        </ion-grid>\n      </form>\n    \n\n\n    </ion-slide>\n\n    <ion-slide>\n\n      \n      <ion-grid fixed>\n            <form #formulario1=\"ngForm\">\n              <ion-row>\n                <ion-col>\n                  <img src=\"/assets/img/im2.png\">\n                </ion-col>\n              </ion-row>\n\n              <ion-list>\n                <ion-item>\n                  <ion-label>¿Qué eres?</ion-label>\n                  <ion-select [(ngModel)]=\"perfil.isAdmin\"\n                              name=\"isAdmin\">\n                    <ion-select-option value=\"true\" >Admin</ion-select-option>\n                    <ion-select-option value=\"false\" >Usuario</ion-select-option>\n                  </ion-select>\n                </ion-item>\n              </ion-list>\n\n                <ion-row>\n                    <ion-col>  \n                        <ion-list>\n\n                            <ion-item class=\"bor\">\n                              <ion-label position=\"floating\">Nombre de usuario</ion-label>\n                              <ion-input type=\"text\"\n                                         name=\"nombreUsuario\"\n                                         minlength=\"5\"\n                                         maxlength=\"20\"\n                                         [(ngModel)]=\"perfil.nombreUsuario\"\n                                         required></ion-input>\n                              </ion-item>\n                              <ion-item class=\"bor\">\n                                <ion-label position=\"floating\">Edad</ion-label>\n                                <ion-input type=\"number\"\n                                           name=\"edad\"\n                                           [(ngModel)]=\"perfil.edad\"\n                                           required></ion-input>\n                                </ion-item>\n                            <ion-item class=\"bor\">\n                            <ion-label position=\"floating\">Email</ion-label>\n                            <ion-input name=\"email\" \n                                        type=\"email\"\n                                        pattern=\"[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{3,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{3,})\"\n                                        [(ngModel)]=\"perfil.email\"\n                                        required></ion-input>\n                            </ion-item>\n                            <ion-item class=\"bor\">\n                            <ion-label position=\"floating\">Password</ion-label>\n                            <ion-input name=\"password\"\n                                        type=\"password\"\n                                        pattern=\"(?=.*[A-Z])(?=.*[a-z]).{6,}\"\n                                        placeholder=\"Mínimo 6 caracteres entre mayúsculas y minúsculas\"\n                                        [(ngModel)]=\"perfil.password\"\n                                        required></ion-input>\n                            </ion-item>\n                        </ion-list>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                <ion-col>\n                    <ion-button type=\"submit\"\n                                color=\"tertiary\"\n                                shape=\"round\"\n                                [disabled]=\"formulario1.invalid\"\n                                (click)=\"registro()\">\n                        Crear usuario\n                    </ion-button>\n                </ion-col>\n            </ion-row>\n            </form>\n        </ion-grid>\n  \n  \n      </ion-slide>\n\n\n  </ion-slides>\n\n\n\n</ion-content>\n\n\n<ion-footer no-border>\n  <ion-toolbar>\n    \n    <ion-row>\n\n      <ion-col>\n          <ion-button shape=\"round\"\n                      expand=\"full\"\n                      size=\"small\"\n                      fill=\"outline\"\n                      color=\"tertiary\"\n                      (click)=\"mostrarRegistro()\">\n            Ingresar\n          </ion-button>\n      </ion-col>\n\n      <ion-col>\n        <ion-button shape=\"round\"\n                    expand=\"full\"\n                    size=\"small\"\n                    fill=\"outline\"\n                    color=\"tertiary\"\n                    (click)=\"mostrarLogin()\">\n          Registrarme\n        </ion-button>\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-toolbar>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/pages/login/login-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/login/login-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.module.ts ***!
    \*********************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/pages/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mainSlide, .mainSlide ion-slide {\n  width: 100%;\n  height: 100%;\n}\n\nimg {\n  width: 120px;\n}\n\n.pick-avatar {\n  width: 80px;\n  opacity: 0.3;\n}\n\n.pick-avatar-seleccionado {\n  -webkit-transition: opacity 0.5s linear;\n  transition: opacity 0.5s linear;\n  opacity: 1 !important;\n}\n\nion-content.background {\n  --background: url(/assets/img/im3.jpg) 0 0/100% 100% no-repeat;\n  opacity: 0.8;\n}\n\n.bor {\n  border-bottom: white 2px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxlcmlja1xcT25lRHJpdmVcXERlc2t0b3BcXGlvbmljXFxwcm95ZWN0by9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDREo7O0FESUE7RUFDSSxZQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0RKOztBRElBO0VBQ0ksdUNBQUE7RUFBQSwrQkFBQTtFQUNBLHFCQUFBO0FDREo7O0FESUE7RUFDSSw4REFBQTtFQUNBLFlBQUE7QUNESjs7QURJQTtFQUNJLDhCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5tYWluU2xpZGUsIC5tYWluU2xpZGUgaW9uLXNsaWRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG59XHJcblxyXG4ucGljay1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuXHJcbi5waWNrLWF2YXRhci1zZWxlY2Npb25hZG8ge1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGxpbmVhcjtcclxuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL2ltMy5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4uYm9yIHtcclxuICAgIGJvcmRlci1ib3R0b206IHdoaXRlIDJweCBzb2xpZDtcclxufSIsIi5tYWluU2xpZGUsIC5tYWluU2xpZGUgaW9uLXNsaWRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEyMHB4O1xufVxuXG4ucGljay1hdmF0YXIge1xuICB3aWR0aDogODBweDtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG4ucGljay1hdmF0YXItc2VsZWNjaW9uYWRvIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGxpbmVhcjtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudC5iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvaW0zLmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLmJvciB7XG4gIGJvcmRlci1ib3R0b206IHdoaXRlIDJweCBzb2xpZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/login/login.page.ts ***!
    \*******************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/apiservi.service */
    "./src/app/services/apiservi.service.ts");
    /* harmony import */


    var src_models_usuario_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/models/usuario.models */
    "./src/models/usuario.models.ts");
    /* harmony import */


    var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/usuario.service */
    "./src/app/services/usuario.service.ts");
    /* harmony import */


    var src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/alerta-service.service */
    "./src/app/services/alerta-service.service.ts");

    var LoginPage =
    /*#__PURE__*/
    function () {
      function LoginPage(navCtr1, apiServi, usuarioService, alertaService) {
        _classCallCheck(this, LoginPage);

        this.navCtr1 = navCtr1;
        this.apiServi = apiServi;
        this.usuarioService = usuarioService;
        this.alertaService = alertaService;
        this.perfiles = [];
        this.perfil = new src_models_usuario_models__WEBPACK_IMPORTED_MODULE_4__["Usuario"](null, null, null, null, false);
        this.auxNombre = '';
        this.auxPassword = '';
        this.auxEstado = false;
        this.estado = 0;
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.slides.lockSwipes(true);
        }
      }, {
        key: "goInicio",
        value: function goInicio() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var valido;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.usuarioService.login(this.auxNombre, this.auxPassword);

                  case 2:
                    valido = _context.sent;

                    if (valido) {
                      // NAVEGAR A INICIO
                      this.auxNombre = '';
                      this.auxPassword = '';
                      this.navCtr1.navigateRoot('/inicio', {
                        animated: true
                      });
                    } else {
                      // MOSTRAR ALERTA
                      this.auxPassword = '';
                      this.alertaService.alertaInformativa('Usuario o contrasenia invalido.');
                    }

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "registro",
        value: function registro() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var valido;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.usuarioService.registro(this.perfil);

                  case 2:
                    valido = _context2.sent;

                    if (valido) {
                      // NAVEGAR A Login
                      this.auxNombre = this.perfil.email;
                      this.perfil = new src_models_usuario_models__WEBPACK_IMPORTED_MODULE_4__["Usuario"](null, null, null, null, false);
                      this.mostrarRegistro();
                    } else {
                      // MOSTRAR ALERTA
                      this.auxPassword = '';
                      this.alertaService.alertaInformativa('Ese correo electrónico ya existe.');
                    }

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "mostrarRegistro",
        value: function mostrarRegistro() {
          this.slides.lockSwipes(false);
          this.slides.slideTo(0);
          this.slides.lockSwipes(true);
        }
      }, {
        key: "mostrarLogin",
        value: function mostrarLogin() {
          this.slides.lockSwipes(false);
          this.slides.slideTo(1);
          this.slides.lockSwipes(true);
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviService"]
      }, {
        type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"]
      }, {
        type: src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_6__["AlertaServiceService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slidePrincipal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], LoginPage.prototype, "slides", void 0);
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/pages/login/login.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviService"], src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"], src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_6__["AlertaServiceService"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map