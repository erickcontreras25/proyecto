(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inicio-inicio-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">Cerrar Sesión\n      <ion-button (click)=\"logout()\"\n                  color=\"danger\">\n        <ion-icon slot=\"icon-only\" name=\"exit\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content center class=\"background\">\n  <div id=\"map\"></div>\n  <br>\n\n  <!-- <ion-button expand=\"full\" routerLink=\"/reservar\">RESERVAR CANCHA</ion-button> -->\n\n  <ion-grid *ngIf=\"!user.isAdmin\">\n    <ion-row text-center>\n      <ion-col size=\"6\">\n        <ion-card class=\"ion-text-center\" routerLink=\"/equipo\">\n          <ion-card-header>\n            <ion-icon color=\"secondary\" class=\"centrado\" name=\"people-outline\"></ion-icon>\n          </ion-card-header>\n          <ion-card-title>\n            Ver equipo\n          </ion-card-title>\n        </ion-card>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <ion-card class=\"ion-text-center\" routerLink=\"/reservar\">\n          <ion-card-header>\n            <ion-icon color=\"success\" class=\"centrado\" name=\"create-outline\"></ion-icon>\n          </ion-card-header>\n          <ion-card-title>\n            <ion-label class=\"ion-text-center\">Realizar reserva</ion-label>\n          </ion-card-title>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row text-center>\n      <ion-col size=\"6\">\n        <ion-card class=\"ion-text-center\" routerLink=\"/perfil\">\n          <ion-card-header>\n            <ion-icon color=\"secondary\" class=\"centrado\" name=\"person-circle-outline\"></ion-icon>\n          </ion-card-header>\n          <ion-card-title>\n            Mi perfil\n          </ion-card-title>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card class=\"ion-text-center\" routerLink=\"/torneo-user\">\n          <ion-card-header>\n            <ion-icon color=\"success\" class=\"centrado\" name=\"trophy-outline\"></ion-icon>\n          </ion-card-header>\n          <ion-card-title>\n            Torneos\n          </ion-card-title>\n        </ion-card>\n      </ion-col>\n      \n    </ion-row>\n  </ion-grid>\n\n  <!-- <div *ngIf=\"!user.isAdmin\">\n    <ion-list>\n      <ion-item routerLink=\"/equipo\" detail>\n        <ion-icon slot=\"start\" name=\"people-outline\"></ion-icon>\n        <ion-label>Ver equipo</ion-label>\n      </ion-item>\n      <ion-item routerLink=\"/reservar\" detail>\n        <ion-icon slot=\"start\" name=\"create-outline\"></ion-icon>\n        <ion-label>Realizar reservacion</ion-label>\n      </ion-item>\n      <ion-item routerLink=\"/perfil\" detail>\n        <ion-icon slot=\"start\" name=\"person-circle-outline\"></ion-icon>\n        <ion-label>Mi perfil</ion-label>\n      </ion-item>\n    </ion-list>\n  </div> -->\n\n\n  <ion-grid *ngIf=\"user.isAdmin\">\n    <ion-row text-center>\n      <ion-col size=\"6\">\n        <ion-card class=\"ion-text-center\" routerLink=\"/complejo\" routerDirection=\"forward\">\n          <ion-card-header>\n            <ion-icon color=\"secondary\" name=\"add-outline\"></ion-icon>\n          </ion-card-header>\n          <ion-card-title>\n            Crear complejo\n          </ion-card-title>\n        </ion-card>\n      </ion-col>\n\n      <ion-col>\n        <ion-card class=\"ion-text-center\" routerLink=\"/cancha\" routerDirection=\"forward\">\n          <ion-card-header>\n            <ion-icon color=\"secondary\" name=\"add-outline\"></ion-icon>\n          </ion-card-header>\n          <ion-card-title>\n            Crear cancha\n          </ion-card-title>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row text-center>\n      <ion-col>\n        <ion-card class=\"ion-text-center\" routerLink=\"/torneo\" routerDirection=\"forward\">\n          <ion-card-header>\n            <ion-icon color=\"success\" class=\"centrado\" name=\"trophy-outline\"></ion-icon>\n          </ion-card-header>\n          <ion-card-title>\n            Torneos\n          </ion-card-title>\n        </ion-card>\n      </ion-col>\n\n      <ion-col>\n        <ion-card class=\"ion-text-center\" routerLink=\"/lista-complejos\" routerDirection=\"forward\">\n          <ion-card-header>\n            <ion-icon color=\"success\" class=\"centrado\" name=\"list-outline\"></ion-icon>\n          </ion-card-header>\n          <ion-card-title style=\"text-decoration: steelblue;\">\n            Mis Complejos\n          </ion-card-title>\n        </ion-card>\n      </ion-col>\n      \n    </ion-row>\n  </ion-grid>\n\n  <!-- <div *ngIf=\"user.isAdmin\">\n    <ion-list>\n      <ion-item routerLink=\"/complejo\" detail>\n        <ion-icon name=\"add-outline\"></ion-icon>\n        <ion-label>Crear complejo</ion-label>\n      </ion-item>\n      <ion-item routerLink=\"/cancha\" detail>\n        <ion-icon name=\"add-outline\"></ion-icon>\n        <ion-label>Crear cancha</ion-label>\n      </ion-item>\n      <ion-item routerLink=\"/lista-complejos\" detail>\n        <ion-icon name=\"add-outline\"></ion-icon>\n        <ion-label>Mis Complejos</ion-label>\n      </ion-item>\n    </ion-list>\n    \n  </div> -->\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/inicio/inicio-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/inicio/inicio-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: InicioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageRoutingModule", function() { return InicioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inicio.page */ "./src/app/pages/inicio/inicio.page.ts");




const routes = [
    {
        path: '',
        component: _inicio_page__WEBPACK_IMPORTED_MODULE_3__["InicioPage"]
    }
];
let InicioPageRoutingModule = class InicioPageRoutingModule {
};
InicioPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InicioPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/inicio/inicio.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/inicio/inicio.module.ts ***!
  \***********************************************/
/*! exports provided: InicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageModule", function() { return InicioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inicio-routing.module */ "./src/app/pages/inicio/inicio-routing.module.ts");
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inicio.page */ "./src/app/pages/inicio/inicio.page.ts");







let InicioPageModule = class InicioPageModule {
};
InicioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["InicioPageRoutingModule"]
        ],
        declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_6__["InicioPage"]]
    })
], InicioPageModule);



/***/ }),

/***/ "./src/app/pages/inicio/inicio.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/inicio/inicio.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map {\n  width: 100%;\n  height: 50%;\n  background-color: #f6f6f4;\n}\n\nion-icon {\n  font-size: 30px;\n}\n\n.centrado {\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-card {\n  width: 90%;\n  height: 90%;\n}\n\nion-content.background {\n  --background: url(/assets/img/fondograma.jpg) 0 0/100% 100% no-repeat;\n  opacity: 0.8;\n}\n\n.ion-margin {\n  border: 2px solid #181515;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5pY2lvL0M6XFxVc2Vyc1xcZXJpY2tcXE9uZURyaXZlXFxEZXNrdG9wXFxpb25pY1xccHJveWVjdG8vc3JjXFxhcHBcXHBhZ2VzXFxpbmljaW9cXGluaWNpby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2luaWNpby9pbmljaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0NKOztBRENFO0VBQ0UsZUFBQTtBQ0VKOztBREFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ0dGOztBRERBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUNJRjs7QURGQTtFQUNFLHFFQUFBO0VBQ0EsWUFBQTtBQ0tGOztBREZBO0VBQ0UseUJBQUE7QUNLRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luaWNpby9pbmljaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmNmY2ZjQ7XHJcbiAgfVxyXG4gIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4uY2VudHJhZG97XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbmlvbi1jYXJkIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIGhlaWdodDogOTAlO1xyXG59XHJcbmlvbi1jb250ZW50LmJhY2tncm91bmR7XHJcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvZm9uZG9ncmFtYS5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLmlvbi1tYXJnaW4ge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNCwgMjEsIDIxKTtcclxufSIsIiNtYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjQ7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uY2VudHJhZG8ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG5pb24tY2FyZCB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xufVxuXG5pb24tY29udGVudC5iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvZm9uZG9ncmFtYS5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5pb24tbWFyZ2luIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzE4MTUxNTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/inicio/inicio.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/inicio/inicio.page.ts ***!
  \*********************************************/
/*! exports provided: InicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPage", function() { return InicioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/apiservi.service */ "./src/app/services/apiservi.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");





let InicioPage = class InicioPage {
    constructor(apiServi, geolocation, usuarioService) {
        this.apiServi = apiServi;
        this.geolocation = geolocation;
        this.usuarioService = usuarioService;
        this.complejos = [];
        this.complejo = {
            idComplejo: 0,
            nombre: null,
            localidad: null,
            foto: null,
            estado: null,
            idAdmin: null
        };
        // perfil: User;
        this.user = {
            id: '',
            email: '',
            nombreUsuario: '',
            edad: 0,
            isAdmin: true
        };
    }
    ngOnInit() {
        // const lat = 15.5;
        // const lng =  -88.0333;
        this.obtenerComplejos();
        this.user = this.usuarioService.getUsuario();
        // console.log('PASO 4 >> ');
        console.log(this.user);
        // console.log('PASO 5 >> ' + this.user.isAdmin);
        // this.aux2 = this.apiServi.getAuxEst();
    }
    ngAfterViewInit() {
    }
    logout() {
        this.usuarioService.logout();
    }
    obtenerComplejos() {
        this.apiServi.getComplejo()
            .subscribe((resp) => {
            this.complejos = resp;
            this.loadMap();
        });
    }
    loadMap() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const rta = yield this.geolocation.getCurrentPosition();
            const myLatLng = {
                lat: rta.coords.latitude,
                lng: rta.coords.longitude
            };
            mapboxgl.accessToken = 'pk.eyJ1IjoiZXJpY2syMDIwIiwiYSI6ImNrODlyYnhiZzA5ejQzbXFuMWI2Z2sxd24ifQ.gEkvgi98ddKvs34g2icOBg';
            const map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [myLatLng.lng, myLatLng.lat],
                zoom: 12
            });
            var markers = [];
            var valor = 0;
            console.log(this.complejos);
            for (let i = 0; i < this.complejos.length; i++) {
                if (this.complejos[i].longitud != null && this.complejos[i].latitud != null) {
                    const popup = new mapboxgl.Popup()
                        .setHTML(this.complejos[i].nombre);
                    // console.log(this.complejos[i].nombre);
                    // const marker = new mapboxgl.Marker()
                    //   .setLngLat( [ this.complejos[i].longitud, this.complejos[i].latitud] )
                    //   .setPopup(popup)
                    //   .addTo( map );
                    markers[valor] = new mapboxgl.Marker()
                        .setLngLat([this.complejos[i].longitud, this.complejos[i].latitud])
                        .setPopup(popup)
                        .addTo(map);
                    valor++;
                }
            }
            // const marker = new mapboxgl.Marker()
            //     .setLngLat( [ myLatLng.lng, myLatLng.lat ] )
            //     .addTo( map );
            // const popup = new mapboxgl.Popup()
            //     .setHTML('<h3>Soccer</p>');
            // const marker2 = new mapboxgl.Marker()
            //     .setLngLat( [ -88.034648, 15.525479 ] )
            //     .setPopup(popup)
            //     .addTo( map );
            // const popup1 = new mapboxgl.Popup()
            //     .setHTML('<h3>Tiki</p>');
            // const marker3 = new mapboxgl.Marker()
            //     .setLngLat( [ -88.013182, 15.534694 ] )
            //     .setPopup(popup1)
            //     .addTo( map );
            // console.log(myLatLng);
            // const mapEle: HTMLElement = document.getElementById('map');
            // const map = new google.maps.Map(mapEle, {
            //   center: myLatLng,
            //   zoom: 12
            // });
        });
    }
};
InicioPage.ctorParameters = () => [
    { type: src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"] }
];
InicioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inicio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inicio.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inicio.page.scss */ "./src/app/pages/inicio/inicio.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apiservi_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviService"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"],
        src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]])
], InicioPage);



/***/ })

}]);
//# sourceMappingURL=pages-inicio-inicio-module-es2015.js.map