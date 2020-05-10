function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-perfil-perfil-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPerfilPerfilPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header titulo=\"Mi Perfil\"></app-header>\n\n<ion-content>\n  \n  <ion-card>\n    <ion-row>\n      <ion-col>\n        <ion-row><h5 style=\"color: black;\">{{user.nombreUsuario}}</h5></ion-row>\n        <!-- <ion-row><h5>{{user.email}}</h5></ion-row>       -->\n      </ion-col>\n      <ion-col><h5 style=\"color: black;\">{{user.edad}} años</h5></ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-row center>\n    <ion-button (click)=\"obtenerMisReservacion()\">Ver todas mis reservaciones</ion-button>\n  </ion-row>\n  \n\n  <!-- ------------------------------------------------------------------------------------ -->\n\n  <h2 class=\"ion-text-center\">Mis reservaciones</h2>\n\n  <div *ngFor=\"let item of reservacionesNoVencidas\">\n    <ion-card class=\"ion-text-center\" style=\"background-color: rgb(230, 230, 241); border-radius : 10px;\">      \n\n        <div style=\"display: inline-block; position:relative\">\n          <img src=\"{{item.cancha.foto}}\" alt=\"200\" width=\"500\">\n          <div style=\"display: inline-block; position:absolute; top:100%; left:50%; transform: translate(-50%, -50%)\">      \n            <img src=\"{{item.cancha.complejo.foto}}\" class=\"imgRedonda\">\n        </div>\n        </div>\n        <br><br><br><br><br>\n        <h3 class=\"ion-text-center\">{{item.cancha.complejo.nombre}}</h3>\n        <h6>\n          <ion-icon name=\"calendar-outline\" color=\"secondary\"></ion-icon>\n              {{item.horaInicial | date:'MMMM-dd HH:mm'}} a {{item.horaFinal | date:'MMMM-dd HH:mm'}}\n          </h6>\n        <h6>\n          <ion-icon name=\"cash-outline\" color=\"success\"></ion-icon>\n            Lps. {{item.cancha.precio}}\n        </h6>\n\n        <h6>\n          <ion-icon name=\"location-outline\" color=\"primary\"></ion-icon>\n            {{item.cancha.complejo.localidad}}\n        </h6>\n        <ion-row>\n          <ion-col class=\"centrado\">\n            <label>\n              <ion-icon slot=\"start\" name=\"trash-outline\" color=\"danger\" (click)=\"eliminarReservacion(item.idReservacion)\">Eliminar reservacion</ion-icon>\n            </label>\n          </ion-col>          \n          <ion-col class=\"centrado\" *ngIf=\"!item.pago || !item.pagoParcial\">\n            <ion-button (click)=\"obtenerReservacionId(item.idReservacion)\"\n                        (click)=\"obtenerCanchaId(item.idCancha)\"\n                        (click)=\"pagarCompleto()\">Pagar 100%</ion-button>\n          </ion-col>\n          <ion-col class=\"centrado\" *ngIf=\"!item.pago || !item.pagoParcial\">\n            <ion-button (click)=\"obtenerReservacionId(item.idReservacion)\"\n                        (click)=\"obtenerCanchaId(item.idCancha)\"\n                        (click)=\"pagarParcial()\"\n                        >Pagar 50%</ion-button>\n          </ion-col>\n        </ion-row>\n        \n        \n    </ion-card>\n</div>\n\n\n  \n  <!-- <div *ngFor=\"let item of reservacionesNoVencidas\" style=\"background-color: rgb(67, 179, 96);\">\n    <ion-card class=\"ion-text-center\" style=\"background-color: rgb(230, 230, 241); border-radius : 10px;\">      \n\n        <div style=\"display: inline-block; position:relative\">\n          <img src=\"{{item.cancha.foto}}\" class=\"img\">\n          <div style=\"display: inline-block; position:absolute; top:100%; left:50%; transform: translate(-50%, -50%)\">      \n            <img src=\"{{item.cancha.complejo.foto}}\" class=\"imgRedonda\">\n        </div>\n        </div>\n        <br><br><br><br><br>\n        <h3 class=\"ion-text-center\">{{item.cancha.complejo.nombre}}</h3>\n        <h6>\n          <ion-icon name=\"calendar-outline\" color=\"secondary\"></ion-icon>\n              {{item.horaInicial | date:'MMMM-dd HH:mm'}} a {{item.horaFinal | date:'MMMM-dd HH:mm'}}\n          </h6>\n        <h6>\n          <ion-icon name=\"cash-outline\" color=\"success\"></ion-icon>\n            Lps. {{item.cancha.precio}}\n        </h6>\n\n        <h6>\n          <ion-icon name=\"location-outline\" color=\"primary\"></ion-icon>\n            {{item.cancha.complejo.localidad}}\n        </h6>\n        <label>\n          <ion-icon slot=\"start\" name=\"trash-outline\" color=\"danger\" (click)=\"eliminarReservacion(item.idReservacion)\">Eliminar reservacion</ion-icon>\n        </label>\n    </ion-card>\n</div> -->\n  \n\n  <!-- <ion-button (click)=\"obtenerEquipoUsuario()\">Ver equipo</ion-button>\n  <ion-card>\n    <ion-list *ngFor=\"let item of equipos\">\n      <ion-item>{{item.usuario.nombre}}</ion-item>\n      <ion-item>\n      </ion-item>\n    </ion-list>\n  </ion-card> -->\n\n  \n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/perfil/perfil-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/perfil/perfil-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: PerfilPageRoutingModule */

  /***/
  function srcAppPagesPerfilPerfilRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfilPageRoutingModule", function () {
      return PerfilPageRoutingModule;
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


    var _perfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./perfil.page */
    "./src/app/pages/perfil/perfil.page.ts");

    var routes = [{
      path: '',
      component: _perfil_page__WEBPACK_IMPORTED_MODULE_3__["PerfilPage"]
    }];

    var PerfilPageRoutingModule = function PerfilPageRoutingModule() {
      _classCallCheck(this, PerfilPageRoutingModule);
    };

    PerfilPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PerfilPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/perfil/perfil.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/perfil/perfil.module.ts ***!
    \***********************************************/

  /*! exports provided: PerfilPageModule */

  /***/
  function srcAppPagesPerfilPerfilModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function () {
      return PerfilPageModule;
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


    var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./perfil-routing.module */
    "./src/app/pages/perfil/perfil-routing.module.ts");
    /* harmony import */


    var _perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./perfil.page */
    "./src/app/pages/perfil/perfil.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var PerfilPageModule = function PerfilPageModule() {
      _classCallCheck(this, PerfilPageModule);
    };

    PerfilPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerfilPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]]
    })], PerfilPageModule);
    /***/
  },

  /***/
  "./src/app/pages/perfil/perfil.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/perfil/perfil.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPerfilPerfilPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".img {\n  width: 500px;\n  height: 220px;\n}\n\nion-icon {\n  font-size: 27px;\n}\n\n.imgRedonda {\n  width: 150px;\n  height: 150px;\n  border-radius: 150px;\n  border: 5px solid #666;\n}\n\n.derecha {\n  text-align: right;\n}\n\n.centrado {\n  text-align: center;\n}\n\n.izquierda {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGVyZmlsL0M6XFxVc2Vyc1xcZXJpY2tcXE9uZURyaXZlXFxEZXNrdG9wXFxpb25pY1xccHJveWVjdG8vc3JjXFxhcHBcXHBhZ2VzXFxwZXJmaWxcXHBlcmZpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BlcmZpbC9wZXJmaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNDSjs7QURDRTtFQUNJLGVBQUE7QUNFTjs7QURBRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQ0dKOztBREFBO0VBQ0UsaUJBQUE7QUNHRjs7QUREQTtFQUNFLGtCQUFBO0FDSUY7O0FERkE7RUFDRSxnQkFBQTtBQ0tGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGVyZmlsL3BlcmZpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogMjIwcHg7XHJcbiAgfVxyXG4gIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAyN3B4O1xyXG4gIH1cclxuICAuaW1nUmVkb25kYSB7XHJcbiAgICB3aWR0aDoxNTBweDtcclxuICAgIGhlaWdodDoxNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6MTUwcHg7XHJcbiAgICBib3JkZXI6NXB4IHNvbGlkICM2NjY7XHJcbn1cclxuXHJcbi5kZXJlY2hhe1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5jZW50cmFkb3tcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLml6cXVpZXJkYXtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59IiwiLmltZyB7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiAyMjBweDtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDI3cHg7XG59XG5cbi5pbWdSZWRvbmRhIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxNTBweDtcbiAgYm9yZGVyOiA1cHggc29saWQgIzY2Njtcbn1cblxuLmRlcmVjaGEge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmNlbnRyYWRvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaXpxdWllcmRhIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/perfil/perfil.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/perfil/perfil.page.ts ***!
    \*********************************************/

  /*! exports provided: PerfilPage */

  /***/
  function srcAppPagesPerfilPerfilPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfilPage", function () {
      return PerfilPage;
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


    var src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/apiservi.service */
    "./src/app/services/apiservi.service.ts");
    /* harmony import */


    var src_models_reservacion_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/models/reservacion.models */
    "./src/models/reservacion.models.ts");
    /* harmony import */


    var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/usuario.service */
    "./src/app/services/usuario.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/paypal/ngx */
    "./node_modules/@ionic-native/paypal/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var PerfilPage =
    /*#__PURE__*/
    function () {
      function PerfilPage(apiServi, usuarioService, payPal, alertController, navCtrl) {
        _classCallCheck(this, PerfilPage);

        this.apiServi = apiServi;
        this.usuarioService = usuarioService;
        this.payPal = payPal;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.parcial = false;
        this.completo = false;
        this.reservacion = new src_models_reservacion_models__WEBPACK_IMPORTED_MODULE_3__["Reservacion"](0, new Date(), new Date(), false, false, 0, '');
        this.reservaciones = [];
        this.reservacionesNoVencidas = [];
        this.equipos = []; // perfil: User;

        this.user = {
          id: '',
          email: '',
          nombreUsuario: '',
          edad: 0,
          isAdmin: false
        };
      }

      _createClass(PerfilPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = this.usuarioService.getUsuario();
          console.log(this.user);
          this.obtenerMisReservacion();
        } // agregarUsuario() {
        //   this.apiServi.postUsuario(this.perfil)
        //   .subscribe((data) => {
        //     this.perfiles.push(this.perfil);
        //     this.perfil = {
        //       nombreUsuario: null,
        //       edad: null,
        //       email: null,
        //       password: null,
        //       rol: false
        //     };
        //     window.alert('AGREGADO');
        //   },
        //   (error) => {
        //     console.log(error);
        //   }
        //   );
        // }
        // modificarUsuario() {
        //   this.apiServi.putUsuario(this.idUsuario, this.perfil)
        //   .subscribe((data) => {
        //     this.perfiles.push(this.perfil);
        //     this.perfil = {
        //       nombreUsuario: null,
        //       edad: null,
        //       email: null,
        //       password: null,
        //       rol: false
        //     };
        //     window.alert('ACTUALIZADO CON EXITO');
        //   },
        //   (error) => {
        //     console.log(error);
        //   }
        //   );
        // }

      }, {
        key: "obtenerReservacionId",
        value: function obtenerReservacionId(id) {
          var _this = this;

          this.apiServi.getReservacionId(id).subscribe(function (resp) {
            _this.reservacion = resp;

            _this.valorPagar();

            console.log('EJECUTADO CON EXITO');
          });
        }
      }, {
        key: "obtenerMisReservacion",
        value: function obtenerMisReservacion() {
          var _this2 = this;

          this.apiServi.getReservacionXUser(this.user.id).subscribe(function (resp) {
            _this2.reservaciones = resp;
            console.log('SERVICIO', resp);

            _this2.noVencidas();
          });
        }
      }, {
        key: "eliminarReservacion",
        value: function eliminarReservacion(rese) {
          this.apiServi.deleteReservacion(rese).subscribe(function (resp) {
            console.log('ELIMINADO CON EXITO');
          });
        }
      }, {
        key: "modificarReservacion",
        value: function modificarReservacion(id) {
          var _this3 = this;

          this.apiServi.putReservacion(id, this.reservacion).subscribe(function (data) {
            _this3.reservacion = new src_models_reservacion_models__WEBPACK_IMPORTED_MODULE_3__["Reservacion"](0, new Date(), new Date(), false, false, 0, '');

            _this3.navCtrl.navigateRoot('/inicio');

            window.alert('ACTUALIZADO CON EXITO');
          }, function (error) {
            console.log(error);
          });
        } // obtenerEquipoUsuario() {
        //   this.apiServi.getEquipoUsuario(this.idUsuario)
        //   .subscribe( (resp: Equipo[]) => {
        //     this.equipos = resp;
        //     console.log('EJECUTADO CON EXITO');
        //   });
        // }

      }, {
        key: "noVencidas",
        value: function noVencidas() {
          var ini = moment__WEBPACK_IMPORTED_MODULE_5__().format('MM-DD-YYYY H');
          var valor = 0;

          for (var i = 0; i < this.reservaciones.length; i++) {
            var val = moment__WEBPACK_IMPORTED_MODULE_5__(this.reservaciones[i].horaFinal).format('MM-DD-YYYY H');

            if (ini < val) {
              this.reservacionesNoVencidas[valor] = this.reservaciones[i];
              valor++;
            }
          }
        }
      }, {
        key: "obtenerCanchaId",
        value: function obtenerCanchaId(id) {
          var _this4 = this;

          this.apiServi.getCanchaId(id).subscribe(function (resp) {
            _this4.cancha = resp;
            console.log('EJECUTADO CON EXITO');
          });
        } // --------------------------------------------------------------------------------------------------

      }, {
        key: "pagarCompleto",
        value: function pagarCompleto() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this5 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: 'Confirmar pago',
                      message: '<strong>--</strong>??',
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
                          _this5.totalPagar = _this5.auxHoras * _this5.cancha.precio;
                          _this5.completo = true;

                          _this5.pagar();

                          console.log(_this5.totalPagar);
                          console.log('Confirm Okay');
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
        key: "pagarParcial",
        value: function pagarParcial() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this6 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: 'Confirmar pago',
                      message: '<strong>--</strong>??',
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
                          _this6.totalPagar = _this6.auxHoras * _this6.cancha.precio * 0.50;
                          _this6.parcial = true;

                          _this6.pagar();

                          console.log(_this6.totalPagar);
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
        }
      }, {
        key: "valorPagar",
        value: function valorPagar() {
          var inic = moment__WEBPACK_IMPORTED_MODULE_5__(this.reservacion.horaInicial);
          var fin = moment__WEBPACK_IMPORTED_MODULE_5__(this.reservacion.horaFinal);
          this.auxHoras = fin.diff(inic, 'hours');
        } // ----------------------------------------------------------------------------------------

      }, {
        key: "pagar",
        value: function pagar() {
          var _this7 = this;

          this.payPal.init({
            PayPalEnvironmentProduction: 'TU_ID_DE_CLIENTE_EN_PRODUCCIÓN',
            PayPalEnvironmentSandbox: 'Adx-VcPcx3n-_g5CtBrAa78tHzUAEOoX9C5Tu2xsOVZns8hsuaqAr01SBshIr70HGbIvCAP4KJOtdImR' //Sandbox

          }).then(function () {
            // Entornos: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
            _this7.payPal.prepareToRender('PayPalEnvironmentSandbox', new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_6__["PayPalConfiguration"]({// Solo lo necesitas si necesitas controlar los errores posteriores al login de paypal "Internal Service Error".
              //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
            })).then(function () {
              var cobro = new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_6__["PayPalPayment"](_this7.totalPagar, 'USD', 'Description', 'Reserva');

              _this7.payPal.renderSinglePaymentUI(cobro).then(function () {
                if (_this7.parcial === true) {
                  _this7.reservacion.pagoParcial = true;

                  _this7.modificarReservacion(_this7.reservacion.idReservacion);
                }

                if (_this7.completo === true) {
                  _this7.reservacion.pago = true;

                  _this7.modificarReservacion(_this7.reservacion.idReservacion);
                } // Se ha realizado el cobro correctamente
                // En caso de estar en desarrollo, este el código de la Sandbox
                //
                // {
                //   "client": {
                //     "environment": "sandbox",
                //     "product_name": "PayPal iOS SDK",
                //     "paypal_sdk_version": "2.16.0",
                //     "platform": "iOS"
                //   },
                //   "response_type": "payment",
                //   "response": {
                //     "id": "PAY-XXXXXXXXXXXXXXXXXXXXXXXX",
                //     "state": "approved",
                //     "create_time": "2016-10-03T13:33:33Z",
                //     "intent": "sale"
                //   }
                // }

              }, function () {// Ha petado el cuadro de diálogo
              });
            }, function () {// Ha petado la configuración
            });
          }, function () {// Ha petado la inicialización o el dispositivo no permite usar PayPal
          });
        }
      }]);

      return PerfilPage;
    }();

    PerfilPage.ctorParameters = function () {
      return [{
        type: src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviService"]
      }, {
        type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]
      }, {
        type: _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_6__["PayPal"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
      }];
    };

    PerfilPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-perfil',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./perfil.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./perfil.page.scss */
      "./src/app/pages/perfil/perfil.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviService"], src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"], _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_6__["PayPal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]])], PerfilPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-perfil-perfil-module-es5.js.map