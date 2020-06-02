function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-equipo-equipo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/equipo/equipo.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/equipo/equipo.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEquipoEquipoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header titulo=\"Equipo\" *ngIf=\"!atras\"></app-header>\n\n<ion-header no-border *ngIf=\"atras\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"slideAtras()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"background\">\n\n  <ion-slides class=\"mainSlide\" [options]=\"{ autoHeight: true }\" #slidePrincipal>\n\n    <ion-slide>\n      <ion-grid>\n\n        <br>\n        <ion-row>\n          <ion-col>\n            <div >\n              <ion-button color=\"success\" \n                          routerLink=\"/unirme-equipo\" routerDirection=\"forward\"\n                          fill=\"solid\">\n                          <ion-icon name=\"search-outline\" class=\"size\"></ion-icon>\n                          BUSCAR EQUIPO                          \n                        </ion-button>\n              </div>\n          </ion-col>\n          <ion-col>\n            <div *ngIf=\"!mostrarCrear\">\n              <ion-button color=\"tertiary\" \n                          (click)=\"mostrarCrear=true\"\n                          fill=\"solid\">\n                          <ion-icon name=\"add-circle-outline\" class=\"size\"></ion-icon>\n                          CREAR EQUIPO                          \n                        </ion-button>\n              </div>\n              <div *ngIf=\"mostrarCrear\">\n                <ion-button color=\"tertiary\" \n                      (click)=\"mostrarCrear=false\">OCULTAR</ion-button>\n              </div>\n          </ion-col>\n        </ion-row>\n        \n        \n        \n        <br>\n        <div *ngIf=\"mostrarCrear\">\n          <form #formulario=\"ngForm\">\n          <ion-list>\n            <h4>Dale nombre al equipo</h4>\n            <ion-item>\n              <ion-input name=\"nombre\"\n                          type=\"nombre\"\n                          minlength=\"5\"\n                          maxlength=\"15\"\n                          placeholder=\"Nombre\"                          \n                          required\n                          [(ngModel)]=\"equipo.nombre\"></ion-input>\n            </ion-item>\n\n            <h4>Cuantos miembros se permitiran en el aquipo</h4>\n            <ion-item>\n              <ion-input name=\"cantJugadores\"\n                          type=\"number\"\n                          placeholder=\"0\"\n                          required\n                          [(ngModel)]=\"equipo.cantJugadores\"></ion-input>\n            </ion-item>\n          </ion-list>\n\n          <ion-button expand=\"full\" \n                      type=\"submit\"\n                      [disabled]=\"formulario.invalid\"\n                      (click)=\"crearEquipo()\">\n              CREAR\n          </ion-button>\n\n          <!-- <ion-button color=\"success\" \n                      (click)=\"mostrarCrear=false\">OCULTAR</ion-button> -->         \n          \n          </form>\n\n        </div>\n\n\n      <h1 style=\"color: white;\">Mis equipos</h1>  \n\n        <div>\n            <ion-row class=\"ion-align-items-center bor\" *ngFor=\"let user of equipoUserUser\">\n              <ion-col size=\"6\" class=\"izquierda\">\n                <h5 style=\"color: white;\">{{user.equipo.nombre}}</h5>\n              </ion-col>\n              \n              <ion-col class=\"derecha\">\n                <ion-button class=\"derecha\"      \n                            shape=\"round\" fill=\"clear\"\n                            (click)=\"obtenerEquipoId(user.equipoId)\"\n                            (click)=\"getEquipoUserxIdEquipo(user.equipoId)\"\n                            >\n                            <ion-icon color=\"success\" class=\"size\" name=\"return-up-forward-outline\"></ion-icon>\n                          </ion-button>\n                \n              </ion-col>\n            </ion-row>\n            \n        </div>\n\n      <h2 style=\"color: white;\" *ngIf=\"mostrarEIncomp.length != 0\">Completar creación</h2>\n        <div>          \n            <ion-row class=\"bor\" *ngFor=\"let item of mostrarEIncomp\">\n              <ion-col class=\"izquierda\"><h5 style=\"color: white;\">{{item.nombre}}</h5></ion-col>\n              <!-- A PARTIR DE AQUI YA ESTABA COMENTADO  <ion-col class=\"derecha\">\n                <ion-button *ngIf=\"!unido\" color=\"success\"\n                            (click)=\"llenar(user.idEquipo)\"\n                            (click)=\"uniraEquipo()\">UNIRME</ion-button>\n              </ion-col> HASTA AQUI ESTABA COMENTADO -->\n              <ion-col class=\"derecha\">\n                <ion-button color=\"success\"\n                            class=\"derecha\"\n                            shape=\"round\" fill=\"clear\"\n                            (click)=\"uniraEquipo(item.idEquipo)\">Completar creacion</ion-button>              \n              </ion-col>\n            </ion-row>\n        </div>\n\n    </ion-grid>\n  </ion-slide>\n\n\n\n\n\n  <ion-slide>\n    <ion-grid>\n    <div>\n\n      <div>\n        <ion-card-title *ngIf=\"perfil.id == equipo.userId\" style=\"color: white;\">Mi Equipo</ion-card-title>\n        <ion-card-title *ngIf=\"perfil.id != equipo.userId\" style=\"color: white;\">Miembros</ion-card-title>\n        <h6 *ngIf=\"perfil.id == equipo.userId\" style=\"color: green;\"\n                      (click)=\"presentAlertPrompt()\">&#8226;Cantidad de cupos: {{equipo.cantJugadores}} </h6>\n        <ion-row class=\"ion-align-items-center bor\" *ngFor=\"let user of equipoUsers\">\n          <ion-col>        \n            <h5 class=\"izquierda\" style=\"color: white;\">{{user.user.nombreUsuario}}</h5>                  \n          </ion-col>\n          <ion-col *ngIf=\"user.userId == equipo.userId\" class=\"derecha\">\n            <h5>Capitan</h5>\n          </ion-col>\n          <ion-col *ngIf=\"user.userId != equipo.userId && equipo.userId == perfil.id\" class=\"derecha\">\n            <ion-button color=\"success\"\n                        class=\"derecha\"\n                        (click)=\"cambiarCapitan(user.userId)\">\n                        Elegir como capitan\n                      </ion-button>\n          </ion-col> \n          <ion-col *ngIf=\"user.userId != equipo.userId && equipo.userId == perfil.id\" class=\"derecha\">\n            <ion-button color=\"danger\"\n                        class=\"derecha\"\n                        (click)=\"sacarEquipo(user.userId)\">\n                        <ion-icon color=\"light\" name=\"person-remove-outline\"></ion-icon>\n                      </ion-button>\n          </ion-col> \n          <ion-col *ngIf=\"user.userId == perfil.id && user.userId!=equipo.userId\" class=\"derecha\">\n            <ion-button color=\"warning\"\n                        class=\"derecha\"\n                        fill=\"clear\"                                            \n                        (click)=\"salirEquipo(user.equipoId)\">SALIRME</ion-button>\n          </ion-col>\n        </ion-row>\n        \n\n      </div>\n    </div>\n  </ion-grid>\n  </ion-slide>\n\n\n\n\n\n  <ion-slide>\n    <!-- <ion-grid>\n    <div>\n      <ion-card class=\"blanco\">\n        <ion-row *ngFor=\"let user of equipoUsers\">\n          <ion-col size=\"6\" class=\"izquierda\">        \n            <h5 style=\"color: black;\">{{user.user.nombreUsuario}}</h5>                  \n          </ion-col>\n          <ion-col class=\"derecha\" *ngIf=\"user.userId == equipo.userId\">\n            <h5>Capitan</h5>\n          </ion-col>\n          <ion-col *ngIf=\"user.userId != equipo.userId\" class=\"derecha\">\n            <ion-button color=\"danger\"\n                        class=\"derecha\"\n                        (click)=\"sacarEquipo(user.userId)\">\n                        <ion-icon color=\"light\" name=\"person-remove-outline\"></ion-icon>\n                      </ion-button>\n          </ion-col>    \n        </ion-row>\n        <ion-row>\n          <ion-col>\n          <ion-button   color=\"success\"\n                        expand=\"full\"\n                        (click)=\"ocultar()\"\n                        (click)=\"goSlide1()\">Regresar</ion-button>\n                      </ion-col>\n        </ion-row>\n      </ion-card>\n    </div>  \n  </ion-grid> -->\n  </ion-slide>\n  \n  \n</ion-slides>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/equipo/equipo-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/equipo/equipo-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: EquipoPageRoutingModule */

  /***/
  function srcAppPagesEquipoEquipoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipoPageRoutingModule", function () {
      return EquipoPageRoutingModule;
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


    var _equipo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./equipo.page */
    "./src/app/pages/equipo/equipo.page.ts");

    var routes = [{
      path: '',
      component: _equipo_page__WEBPACK_IMPORTED_MODULE_3__["EquipoPage"]
    }];

    var EquipoPageRoutingModule = function EquipoPageRoutingModule() {
      _classCallCheck(this, EquipoPageRoutingModule);
    };

    EquipoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EquipoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/equipo/equipo.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/equipo/equipo.module.ts ***!
    \***********************************************/

  /*! exports provided: EquipoPageModule */

  /***/
  function srcAppPagesEquipoEquipoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipoPageModule", function () {
      return EquipoPageModule;
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


    var _equipo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./equipo-routing.module */
    "./src/app/pages/equipo/equipo-routing.module.ts");
    /* harmony import */


    var _equipo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./equipo.page */
    "./src/app/pages/equipo/equipo.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var EquipoPageModule = function EquipoPageModule() {
      _classCallCheck(this, EquipoPageModule);
    };

    EquipoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _equipo_routing_module__WEBPACK_IMPORTED_MODULE_5__["EquipoPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_equipo_page__WEBPACK_IMPORTED_MODULE_6__["EquipoPage"]]
    })], EquipoPageModule);
    /***/
  },

  /***/
  "./src/app/pages/equipo/equipo.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/equipo/equipo.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEquipoEquipoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".centrado {\n  text-align: center;\n}\n\n.derecha {\n  text-align: right;\n}\n\n.izquierda {\n  text-align: left;\n}\n\nion-content.background {\n  --background: url(/assets/img/paraequipo.jpeg) 0 0/100% 100% no-repeat;\n  opacity: 0.8;\n}\n\n.blanco {\n  background-color: white;\n}\n\nion-icon.size {\n  font-size: 30px;\n}\n\n.bor {\n  border-bottom: rgba(255, 255, 255, 0.877) 1px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXF1aXBvL0M6XFxVc2Vyc1xcZXJpY2tcXE9uZURyaXZlXFxEZXNrdG9wXFxpb25pY1xccHJveWVjdG8vc3JjXFxhcHBcXHBhZ2VzXFxlcXVpcG9cXGVxdWlwby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2VxdWlwby9lcXVpcG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURDQTtFQUNJLGlCQUFBO0FDRUo7O0FEQUE7RUFDSSxnQkFBQTtBQ0dKOztBREFBO0VBQ0ksc0VBQUE7RUFDQSxZQUFBO0FDR0o7O0FEREE7RUFDSSx1QkFBQTtBQ0lKOztBRERBO0VBQ0ksZUFBQTtBQ0lKOztBRERBO0VBQ0ksbURBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VxdWlwby9lcXVpcG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRyYWRve1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuLmRlcmVjaGF7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uaXpxdWllcmRhe1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL3BhcmFlcXVpcG8uanBlZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuLmJsYW5jbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWljb24uc2l6ZSB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi5ib3Ige1xyXG4gICAgYm9yZGVyLWJvdHRvbTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg3NykgMXB4IHNvbGlkO1xyXG59IiwiLmNlbnRyYWRvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGVyZWNoYSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uaXpxdWllcmRhIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL3BhcmFlcXVpcG8uanBlZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLmJsYW5jbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5pb24taWNvbi5zaXplIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uYm9yIHtcbiAgYm9yZGVyLWJvdHRvbTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg3NykgMXB4IHNvbGlkO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/equipo/equipo.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/equipo/equipo.page.ts ***!
    \*********************************************/

  /*! exports provided: EquipoPage */

  /***/
  function srcAppPagesEquipoEquipoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipoPage", function () {
      return EquipoPage;
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


    var src_models_equipo_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/models/equipo.models */
    "./src/models/equipo.models.ts");
    /* harmony import */


    var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/usuario.service */
    "./src/app/services/usuario.service.ts");
    /* harmony import */


    var src_app_services_equipo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/equipo.service */
    "./src/app/services/equipo.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/alerta-service.service */
    "./src/app/services/alerta-service.service.ts");
    /* harmony import */


    var src_models_equipoUser_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/models/equipoUser.models */
    "./src/models/equipoUser.models.ts");

    var EquipoPage =
    /*#__PURE__*/
    function () {
      function EquipoPage(usuarioService, equipoService, navCtrl, alertaService, alertController) {
        _classCallCheck(this, EquipoPage);

        this.usuarioService = usuarioService;
        this.equipoService = equipoService;
        this.navCtrl = navCtrl;
        this.alertaService = alertaService;
        this.alertController = alertController;
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

      _createClass(EquipoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.perfil = this.usuarioService.getUsuario();
          this.slides.lockSwipes(true);
          this.obtenerEquipoxUser();
          this.obtenerEquipoUserxIduser();
        } // eliminarEquipo() {
        //   this.apiServi.deleteEquipo(this.idEquipo)
        //   .subscribe( resp => {
        //     console.log('ELIMINADO CON EXITO');
        //   });
        // }
        // -----------------------------------------------METODOS EQUIPO--------------------------------------------

      }, {
        key: "obtenerTodosEquipos",
        value: function obtenerTodosEquipos() {
          var _this = this;

          this.equipoService.getEquipos().subscribe(function (resp) {
            _this.equipos = resp;
            console.log('SERVICIO ', resp);
          });
        }
      }, {
        key: "obtenerEquipoId",
        value: function obtenerEquipoId(id) {
          var _this2 = this;

          this.equipoService.getEquipoId(id).subscribe(function (resp) {
            _this2.equipo = resp;
            console.log(_this2.equipo);
          });
        }
      }, {
        key: "obtenerEquipoxUser",
        value: function obtenerEquipoxUser() {
          var _this3 = this;

          this.equipoService.getEquipoxUsuario(this.perfil.id).subscribe(function (resp) {
            _this3.equiposCap = resp;

            _this3.verificarCompleto();
          });
        }
      }, {
        key: "crearEquipo",
        value: function crearEquipo() {
          var _this4 = this;

          this.equipo.userId = this.perfil.id;
          this.equipoService.postEquipo(this.equipo).subscribe(function (data) {
            _this4.equipos.push(_this4.equipo);

            _this4.clear();

            _this4.alertaService.alertaInformativa('Equipo creado. \n Ahora solo tienes que dar click en completar creacion.');

            _this4.obtenerEquipoxUser();

            _this4.obtenerEquipoUserxIduser();

            _this4.mostrarCrear = false;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "cambiarCapitan",
        value: function cambiarCapitan(user) {
          var _this5 = this;

          this.equipo.userId = user;
          this.equipoService.putEquipo(this.equipo.idEquipo, this.equipo).subscribe(function (data) {
            _this5.clear();

            _this5.alertaService.alertaInformativa('Equipo modificado');

            _this5.obtenerEquipoxUser();

            _this5.obtenerEquipoUserxIduser(); // this.goSlide1();

          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "modificarEquipo",
        value: function modificarEquipo() {
          var _this6 = this;

          this.equipoService.putEquipo(this.equipo.idEquipo, this.equipo).subscribe(function (data) {
            _this6.clear();

            _this6.aux = null;

            _this6.alertaService.alertaInformativa('Equipo actualizado');

            _this6.obtenerEquipoxUser();

            _this6.obtenerEquipoUserxIduser();

            _this6.goSlide1();
          }, function (error) {
            _this6.equipo.cantJugadores = _this6.aux;
            console.log(error['error']);

            _this6.alertaService.alertaInformativa(error['error']);
          });
        }
      }, {
        key: "presentAlertPrompt",
        value: function presentAlertPrompt() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this7 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: '¿Quieres aumentar o disminuir la cantidad de cupos?',
                      message: '<strong>Coloca cuantos cupos quieres quieres tener en total</strong>??',
                      inputs: [{
                        name: 'cantJugadores',
                        type: 'number',
                        min: 0,
                        max: 2000
                      }],
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {
                          console.log('Confirm Cancel');
                        }
                      }, {
                        text: 'Ok',
                        handler: function handler(data) {
                          console.log('Confirm Ok');
                          _this7.aux = _this7.equipo.cantJugadores;
                          _this7.equipo.cantJugadores = data.cantJugadores;

                          _this7.modificarEquipo();
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentAlertConfirm",
        value: function presentAlertConfirm() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: '¿Quieres aumentar o disminuir la cantidad de cupos?',
                      message: '<strong>Escribe </strong>??',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Okay',
                        handler: function handler() {
                          console.log('Confirm Okay');
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } // -----------------------------------------------METODOS EQUIPO-USER--------------------------------------------

      }, {
        key: "verificarCompleto",
        value: function verificarCompleto() {
          var _this8 = this;

          var aux = 0;

          var _loop = function _loop(i) {
            // this.obtenerEquipoUserId(this.equiposCap[i].idEquipo);
            _this8.equipoService.getEquipoUserId(_this8.equiposCap[i].idEquipo).subscribe(function (resp) {
              _this8.idEquipoUser = resp;

              if (_this8.idEquipoUser.length < 1) {
                _this8.mostrarEIncomp[aux] = _this8.equiposCap[i];
                _this8.idEquipoUser = [];
                aux = aux + 1;
              }
            });

            console.log(_this8.mostrarEIncomp);
          };

          for (var i = 0; i < this.equiposCap.length; i++) {
            _loop(i);
          }
        }
      }, {
        key: "obtenerEquipoUserId",
        value: function obtenerEquipoUserId(id) {
          var _this9 = this;

          this.equipoService.getEquipoUserId(id).subscribe(function (resp) {
            _this9.idEquipoUser = resp; // this.goSlide2();
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "obtenerEquipoUserxIduser",
        value: function obtenerEquipoUserxIduser() {
          var _this10 = this;

          this.equipoService.getEquipoUserxUsuario(this.perfil.id).subscribe(function (resp) {
            _this10.equipoUserUser = resp;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getEquipoUserxIdEquipo",
        value: function getEquipoUserxIdEquipo(id) {
          var _this11 = this;

          this.equipoService.getEquipoUserId(id).subscribe(function (resp) {
            _this11.equipoUsers = resp;

            _this11.goSlide2();
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "uniraEquipo",
        value: function uniraEquipo(id) {
          var _this12 = this;

          this.equipoUser.userId = this.perfil.id;
          this.equipoUser.equipoId = id;
          this.equipoService.postEquipoUser(this.equipoUser).subscribe(function (data) {
            // this.equipoUsers.push(this.equipoUser);
            _this12.alertaService.alertaInformativa('Creacion completada.');

            _this12.mostrarEIncomp = [];

            _this12.obtenerEquipoxUser();

            _this12.obtenerEquipoUserxIduser();
          }, function (error) {
            console.log(error['error']);
          });
        }
      }, {
        key: "salirEquipo",
        value: function salirEquipo(id) {
          var _this13 = this;

          this.equipoUser.userId = this.perfil.id;
          this.equipoService.deleteEquipoUser(id, this.equipoUser.userId).subscribe(function (resp) {
            _this13.alertaService.alertaInformativa('Hecho!!');

            _this13.obtenerEquipoUserxIduser();

            _this13.goSlide1();
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "sacarEquipo",
        value: function sacarEquipo(id) {
          var _this14 = this;

          this.equipoUser.equipoId = this.equipo.idEquipo;
          this.equipoService.deleteEquipoUser(this.equipoUser.equipoId, id).subscribe(function (resp) {
            _this14.alertaService.alertaInformativa('Hecho!!');

            _this14.obtenerEquipoUserxIduser();

            _this14.getEquipoUserxIdEquipo(_this14.equipoUser.equipoId);
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "llenar",
        value: function llenar(id) {
          this.equipoUser.equipoId = id;
        }
      }, {
        key: "ocultar",
        value: function ocultar() {
          this.equipoUsers = [];
        }
      }, {
        key: "clear",
        value: function clear() {
          this.equipo = new src_models_equipo_models__WEBPACK_IMPORTED_MODULE_2__["Equipo"](0, '', 0, '');
        } // -------------------------------------------------SLIDE--------------------------------

      }, {
        key: "goSlide1",
        value: function goSlide1() {
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
          var _this15 = this;

          this.slides.lockSwipes(false);
          this.slides.slidePrev();
          this.slides.lockSwipes(true);
          this.slides.isBeginning().then(function (data) {
            if (data === true) {
              _this15.atras = false;
            }
          });
        }
      }]);

      return EquipoPage;
    }();

    EquipoPage.ctorParameters = function () {
      return [{
        type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]
      }, {
        type: src_app_services_equipo_service__WEBPACK_IMPORTED_MODULE_4__["EquipoService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_6__["AlertaServiceService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slidePrincipal', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSlides"])], EquipoPage.prototype, "slides", void 0);
    EquipoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-equipo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./equipo.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/equipo/equipo.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./equipo.page.scss */
      "./src/app/pages/equipo/equipo.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"], src_app_services_equipo_service__WEBPACK_IMPORTED_MODULE_4__["EquipoService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], src_app_services_alerta_service_service__WEBPACK_IMPORTED_MODULE_6__["AlertaServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])], EquipoPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-equipo-equipo-module-es5.js.map