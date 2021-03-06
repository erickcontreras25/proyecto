(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/index-3476b023.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-3476b023.js ***!
  \*************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
const sanitizeDOMString = (untrustedString) => {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        const documentFragment = document.createDocumentFragment();
        const workingDiv = document.createElement('div');
        documentFragment.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(blockedTag => {
            const getElementsToRemove = documentFragment.querySelectorAll(blockedTag);
            for (let elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                const element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                const childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (let childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        const dfChildren = getElementChildren(documentFragment);
        /* tslint:disable-next-line */
        for (let childIndex = 0; childIndex < dfChildren.length; childIndex++) {
            sanitizeElement(dfChildren[childIndex]);
        }
        // Append document fragment to div
        const fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment);
        // First child is always the div we did our work in
        const getInnerDiv = fragmentDiv.querySelector('div');
        return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
    }
    catch (err) {
        console.error(err);
        return '';
    }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */
const sanitizeElement = (element) => {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (let i = element.attributes.length - 1; i >= 0; i--) {
        const attribute = element.attributes.item(i);
        const attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        const attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    const childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (let i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
const getElementChildren = (el) => {
    return (el.children != null) ? el.children : el.childNodes;
};
const allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
const blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/index-3528f139.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-3528f139.js ***!
  \*************************************************************/
/*! exports provided: d, g, l, s, t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deepReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getIonPageElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return setPageHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return transition; });
/* harmony import */ var _core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-80bde1aa.js */ "./node_modules/@ionic/core/dist/esm/core-80bde1aa.js");
/* harmony import */ var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants-3c3e1099.js */ "./node_modules/@ionic/core/dist/esm/constants-3c3e1099.js");



const iosTransitionAnimation = () => __webpack_require__.e(/*! import() | ios-transition-1850e475-js */ "ios-transition-1850e475-js").then(__webpack_require__.bind(null, /*! ./ios.transition-1850e475.js */ "./node_modules/@ionic/core/dist/esm/ios.transition-1850e475.js"));
const mdTransitionAnimation = () => __webpack_require__.e(/*! import() | md-transition-083fcf52-js */ "md-transition-083fcf52-js").then(__webpack_require__.bind(null, /*! ./md.transition-083fcf52.js */ "./node_modules/@ionic/core/dist/esm/md.transition-083fcf52.js"));
const transition = (opts) => {
    return new Promise((resolve, reject) => {
        Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => {
            beforeTransition(opts);
            runTransition(opts).then(result => {
                if (result.animation) {
                    result.animation.destroy();
                }
                afterTransition(opts);
                resolve(result);
            }, error => {
                afterTransition(opts);
                reject(error);
            });
        });
    });
};
const beforeTransition = (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    setZIndex(enteringEl, leavingEl, opts.direction);
    if (opts.showGoBack) {
        enteringEl.classList.add('can-go-back');
    }
    else {
        enteringEl.classList.remove('can-go-back');
    }
    setPageHidden(enteringEl, false);
    if (leavingEl) {
        setPageHidden(leavingEl, false);
    }
};
const runTransition = async (opts) => {
    const animationBuilder = await getAnimationBuilder(opts);
    const ani = (animationBuilder)
        ? animation(animationBuilder, opts)
        : noAnimation(opts); // fast path for no animation
    return ani;
};
const afterTransition = (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    enteringEl.classList.remove('ion-page-invisible');
    if (leavingEl !== undefined) {
        leavingEl.classList.remove('ion-page-invisible');
    }
};
const getAnimationBuilder = async (opts) => {
    if (!opts.leavingEl || !opts.animated || opts.duration === 0) {
        return undefined;
    }
    if (opts.animationBuilder) {
        return opts.animationBuilder;
    }
    const getAnimation = (opts.mode === 'ios')
        ? (await iosTransitionAnimation()).iosTransitionAnimation
        : (await mdTransitionAnimation()).mdTransitionAnimation;
    return getAnimation;
};
const animation = async (animationBuilder, opts) => {
    await waitForReady(opts, true);
    const trans = animationBuilder(opts.baseEl, opts);
    fireWillEvents(opts.enteringEl, opts.leavingEl);
    const didComplete = await playTransition(trans, opts);
    if (opts.progressCallback) {
        opts.progressCallback(undefined);
    }
    if (didComplete) {
        fireDidEvents(opts.enteringEl, opts.leavingEl);
    }
    return {
        hasCompleted: didComplete,
        animation: trans
    };
};
const noAnimation = async (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    await waitForReady(opts, false);
    fireWillEvents(enteringEl, leavingEl);
    fireDidEvents(enteringEl, leavingEl);
    return {
        hasCompleted: true
    };
};
const waitForReady = async (opts, defaultDeep) => {
    const deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
    const promises = deep ? [
        deepReady(opts.enteringEl),
        deepReady(opts.leavingEl),
    ] : [
        shallowReady(opts.enteringEl),
        shallowReady(opts.leavingEl),
    ];
    await Promise.all(promises);
    await notifyViewReady(opts.viewIsReady, opts.enteringEl);
};
const notifyViewReady = async (viewIsReady, enteringEl) => {
    if (viewIsReady) {
        await viewIsReady(enteringEl);
    }
};
const playTransition = (trans, opts) => {
    const progressCallback = opts.progressCallback;
    const promise = new Promise(resolve => {
        trans.onFinish((currentStep) => resolve(currentStep === 1));
    });
    // cool, let's do this, start the transition
    if (progressCallback) {
        // this is a swipe to go back, just get the transition progress ready
        // kick off the swipe animation start
        trans.progressStart(true);
        progressCallback(trans);
    }
    else {
        // only the top level transition should actually start "play"
        // kick it off and let it play through
        // ******** DOM WRITE ****************
        trans.play();
    }
    // create a callback for when the animation is done
    return promise;
};
const fireWillEvents = (enteringEl, leavingEl) => {
    lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
    lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["L"]);
};
const fireDidEvents = (enteringEl, leavingEl) => {
    lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
    lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["c"]);
};
const lifecycle = (el, eventName) => {
    if (el) {
        const ev = new CustomEvent(eventName, {
            bubbles: false,
            cancelable: false,
        });
        el.dispatchEvent(ev);
    }
};
const shallowReady = (el) => {
    if (el && el.componentOnReady) {
        return el.componentOnReady();
    }
    return Promise.resolve();
};
const deepReady = async (el) => {
    const element = el;
    if (element) {
        if (element.componentOnReady != null) {
            const stencilEl = await element.componentOnReady();
            if (stencilEl != null) {
                return;
            }
        }
        await Promise.all(Array.from(element.children).map(deepReady));
    }
};
const setPageHidden = (el, hidden) => {
    if (hidden) {
        el.setAttribute('aria-hidden', 'true');
        el.classList.add('ion-page-hidden');
    }
    else {
        el.hidden = false;
        el.removeAttribute('aria-hidden');
        el.classList.remove('ion-page-hidden');
    }
};
const setZIndex = (enteringEl, leavingEl, direction) => {
    if (enteringEl !== undefined) {
        enteringEl.style.zIndex = (direction === 'back')
            ? '99'
            : '101';
    }
    if (leavingEl !== undefined) {
        leavingEl.style.zIndex = '100';
    }
};
const getIonPageElement = (element) => {
    if (element.classList.contains('ion-page')) {
        return element;
    }
    const ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');
    if (ionPage) {
        return ionPage;
    }
    // idk, return the original element so at least something animates and we don't have a null pointer
    return element;
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-28520d80.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-28520d80.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
            return {
                r: 20,
                cx: 48,
                cy: 48,
                fill: 'none',
                viewBox: '24 24 48 48',
                transform: 'translate(0,0)',
                style: {}
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction);
        }
    }
    return false;
};




/***/ }),

/***/ "./src/app/services/apiservi.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/apiservi.service.ts ***!
  \**********************************************/
/*! exports provided: ApiserviService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiserviService", function() { return ApiserviService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






const URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url;
let ApiserviService = class ApiserviService {
    constructor(http, storage, usuarioSer) {
        this.http = http;
        this.storage = storage;
        this.usuarioSer = usuarioSer;
        // private url = 'https://conmigo.armalapotra.com/api';
        this.token = null;
    }
    // getCanchas(){
    //   return this.http.get('https://apibackend2019.herokuapp.com/api/Complejos');
    // }
    setAuxUsu(valor) {
        this.auxUsu = valor;
    }
    getAuxUsu() {
        return this.auxUsu;
    }
    setAuxEst(valor) {
        this.auxEst = valor;
    }
    getAuxEst() {
        return this.auxEst;
    }
    setAuxNom(valor) {
        this.auxNom = valor;
    }
    getAuxNom() {
        return this.auxNom;
    }
    getComplejo() {
        const tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.usuarioSer.token });
        return this.http.get(`${URL}/complejo`, { headers: tokenHeaders });
    }
    getComplejoId(id) {
        const tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.usuarioSer.token });
        return this.http.get(`${URL}/complejo/${id}`, { headers: tokenHeaders });
    }
    getComplejoAdmin(n1) {
        const tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.usuarioSer.token });
        return this.http.get(`${URL}/complejo/p?n1=${n1}`, { headers: tokenHeaders });
    }
    getComplejoEstado(n1) {
        const tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.usuarioSer.token });
        return this.http.get(`${URL}/complejo/q?n1=${n1}`, { headers: tokenHeaders });
    }
    postComplejo(complejo) {
        return this.http.post(`${URL}/complejo`, complejo, { responseType: 'text' });
    }
    putComplejo(id, complejo) {
        return this.http.put(`${URL}/complejo/${id}`, complejo, { responseType: 'text' });
    }
    deleteComplejo(id) {
        return this.http.delete(`${URL}/complejo/${id}`);
    }
    getCanchaComplejo(n1) {
        const tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.usuarioSer.token });
        return this.http.get(`${URL}/cancha/p?n1=${n1}`, { headers: tokenHeaders });
    }
    getCanchaId(id) {
        const tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.usuarioSer.token });
        return this.http.get(`${URL}/cancha/${id}`, { headers: tokenHeaders });
    }
    postCancha(cancha) {
        return this.http.post(`${URL}/cancha`, cancha, { responseType: 'text' });
    }
    putCancha(id, cancha) {
        return this.http.put(`${URL}/cancha/${id}`, cancha, { responseType: 'text' });
    }
    deleteCancha(id) {
        return this.http.delete(`${URL}/cancha/${id}`);
    }
    getReservaciones() {
        const tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.usuarioSer.token });
        return this.http.get(`${URL}/reservacion`, { headers: tokenHeaders });
    }
    getReservacionXUser(n1) {
        const tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.usuarioSer.token });
        return this.http.get(`${URL}/reservacion/p?n1=${n1}`, { headers: tokenHeaders });
    }
    getReservacionComplejo(n1) {
        const tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.usuarioSer.token });
        return this.http.get(`${URL}/reservacion/q?n1=${n1}`, { headers: tokenHeaders });
    }
    getReservacionId(id) {
        const tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.usuarioSer.token });
        return this.http.get(`${URL}/reservacion/${id}`, { headers: tokenHeaders });
    }
    postReservacion(reservacion) {
        return this.http.post(`${URL}/reservacion`, reservacion, { responseType: 'text' });
    }
    putReservacion(id, reservacion) {
        return this.http.put(`${URL}/reservacion/${id}`, reservacion, { responseType: 'text' });
    }
    deleteReservacion(id) {
        return this.http.delete(`${URL}/reservacion/${id}`);
    }
};
ApiserviService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"] }
];
ApiserviService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
        _usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]])
], ApiserviService);



/***/ }),

/***/ "./src/app/services/equipo.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/equipo.service.ts ***!
  \********************************************/
/*! exports provided: EquipoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipoService", function() { return EquipoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






const URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url;
let EquipoService = class EquipoService {
    // private url = 'https://conmigo.armalapotra.com/api';
    constructor(http, storage, usuarioSer) {
        this.http = http;
        this.storage = storage;
        this.usuarioSer = usuarioSer;
    }
    getEquipos() {
        const tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.usuarioSer.token });
        return this.http.get(`${URL}/equipo`, { headers: tokenHeaders });
    }
    getEquipoxUsuario(n1) {
        const tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.usuarioSer.token });
        return this.http.get(`${URL}/equipo/p?n1=${n1}`, { headers: tokenHeaders });
    }
    getEquipoId(id) {
        const tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.usuarioSer.token });
        return this.http.get(`${URL}/equipo/${id}`, { headers: tokenHeaders });
    }
    postEquipo(equipo) {
        return this.http.post(`${URL}/equipo`, equipo, { responseType: 'text' });
    }
    putEquipo(id, equipo) {
        return this.http.put(`${URL}/equipo/${id}`, equipo, { responseType: 'text' });
    }
    deleteEquipo(id) {
        return this.http.delete(`${URL}/equipo/${id}`);
    }
    getEquipoUser() {
        const tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.usuarioSer.token });
        return this.http.get(`${URL}/equipoUser`, { headers: tokenHeaders });
    }
    getEquipoUserxUsuario(n1) {
        const tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.usuarioSer.token });
        return this.http.get(`${URL}/equipoUser/p?n1=${n1}`, { headers: tokenHeaders });
    }
    getEquipoUserId(id) {
        const tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.usuarioSer.token });
        return this.http.get(`${URL}/equipoUser/${id}`, { headers: tokenHeaders });
    }
    postEquipoUser(equipoUser) {
        return this.http.post(`${URL}/equipoUser`, equipoUser, { responseType: 'text' });
    }
    deleteEquipoUser(id, idu) {
        return this.http.delete(`${URL}/equipoUser/${id}/${idu}`, { responseType: 'text' });
    }
};
EquipoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"] }
];
EquipoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        _usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]])
], EquipoService);



/***/ }),

/***/ "./src/app/services/torneo.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/torneo.service.ts ***!
  \********************************************/
/*! exports provided: TorneoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TorneoService", function() { return TorneoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






const URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url;
let TorneoService = class TorneoService {
    // private url = 'https://conmigo.armalapotra.com/api';
    constructor(http, storage, usuarioSer) {
        this.http = http;
        this.storage = storage;
        this.usuarioSer = usuarioSer;
    }
    getTorneos() {
        const tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.usuarioSer.token });
        return this.http.get(`${URL}/torneo`, { headers: tokenHeaders });
    }
    getTorneoxUsuario(n1) {
        const tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.usuarioSer.token });
        return this.http.get(`${URL}/torneo/p?n1=${n1}`, { headers: tokenHeaders });
    }
    getTorneoxComplejo(n1) {
        const tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.usuarioSer.token });
        return this.http.get(`${URL}/torneo/q?id=${n1}`, { headers: tokenHeaders });
    }
    getTorneooId(id) {
        const tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.usuarioSer.token });
        return this.http.get(`${URL}/torneo/${id}`, { headers: tokenHeaders });
    }
    postTorneo(torneo) {
        return this.http.post(`${URL}/torneo`, torneo, { responseType: 'text' });
    }
    putTorneo(id, torneo) {
        return this.http.put(`${URL}/torneo/${id}`, torneo, { responseType: 'text' });
    }
    deleteTorneo(id) {
        return this.http.delete(`${URL}/torneo/${id}`);
    }
    getTorneoEquipo() {
        const tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.usuarioSer.token });
        return this.http.get(`${URL}/torneoEquipo`, { headers: tokenHeaders });
    }
    getTorneoEquipoxUsuario(n1) {
        const tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.usuarioSer.token });
        return this.http.get(`${URL}/torneoEquipo/p?n1=${n1}`, { headers: tokenHeaders });
    }
    getTorneoEquipoId(id) {
        const tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.usuarioSer.token });
        return this.http.get(`${URL}/torneoEquipo/${id}`, { headers: tokenHeaders });
    }
    postTorneoEquipo(torneoEquipo) {
        return this.http.post(`${URL}/torneoEquipo`, torneoEquipo, { responseType: 'text' });
    }
    deleteTorneoEquipo(idT, idE) {
        return this.http.delete(`${URL}/torneoEquipo/${idT}/${idE}`, { responseType: 'text' });
    }
};
TorneoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"] }
];
TorneoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        _usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]])
], TorneoService);



/***/ }),

/***/ "./src/models/cancha.models.ts":
/*!*************************************!*\
  !*** ./src/models/cancha.models.ts ***!
  \*************************************/
/*! exports provided: Cancha */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cancha", function() { return Cancha; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Cancha {
    constructor(id, precio, fot, tamanio, idCom) {
        this.idCancha = id;
        this.precio = precio;
        this.foto = fot;
        this.tamanioCancha = tamanio;
        this.idComplejo = idCom;
    }
}


/***/ }),

/***/ "./src/models/complejo.models.ts":
/*!***************************************!*\
  !*** ./src/models/complejo.models.ts ***!
  \***************************************/
/*! exports provided: Complejo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Complejo", function() { return Complejo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Complejo {
    constructor(id, nombre, loc, num, fot, est, lng, lat, hInicio, hCierre, par, seg, adminId) {
        this.idComplejo = id;
        this.nombre = nombre;
        this.localidad = loc;
        this.numero = num;
        this.foto = fot;
        this.estado = est;
        this.longitud = lng;
        this.latitud = lat;
        this.horaInicio = hInicio;
        this.horaCierre = hCierre;
        this.parqueo = par;
        this.seguridad = seg;
        this.userId = adminId;
    }
}


/***/ }),

/***/ "./src/models/equipo.models.ts":
/*!*************************************!*\
  !*** ./src/models/equipo.models.ts ***!
  \*************************************/
/*! exports provided: Equipo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Equipo", function() { return Equipo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Equipo {
    constructor(id, nombre, cantidad, usuarioId) {
        this.idEquipo = id;
        this.nombre = nombre;
        this.cantJugadores = cantidad;
        this.userId = usuarioId;
    }
}


/***/ }),

/***/ "./src/models/equipoUser.models.ts":
/*!*****************************************!*\
  !*** ./src/models/equipoUser.models.ts ***!
  \*****************************************/
/*! exports provided: EquipoUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipoUser", function() { return EquipoUser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class EquipoUser {
    constructor(idE, idU) {
        this.equipoId = idE;
        this.userId = idU;
    }
}


/***/ }),

/***/ "./src/models/reservacion.models.ts":
/*!******************************************!*\
  !*** ./src/models/reservacion.models.ts ***!
  \******************************************/
/*! exports provided: Reservacion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reservacion", function() { return Reservacion; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Reservacion {
    constructor(id, hInicial, hFinal, pago, pagoP, idCan, idUsu) {
        this.idReservacion = id;
        this.horaInicial = hInicial;
        this.horaFinal = hFinal;
        this.pago = pago;
        this.idCancha = idCan;
        this.userId = idUsu;
    }
}


/***/ }),

/***/ "./src/models/torneo.models.ts":
/*!*************************************!*\
  !*** ./src/models/torneo.models.ts ***!
  \*************************************/
/*! exports provided: Torneo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Torneo", function() { return Torneo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Torneo {
    constructor(idT, nombre, cantE, des, premio, diaT, usuId, idCom) {
        this.idTorneo = idT;
        this.nombre = nombre;
        this.cantEquipos = cantE;
        this.descripcion = des;
        this.premioFoto = premio;
        this.diaTorneo = diaT;
        this.usuarioId = usuId;
        this.idComplejo = idCom;
    }
}


/***/ }),

/***/ "./src/models/torneoEquipo.models.ts":
/*!*******************************************!*\
  !*** ./src/models/torneoEquipo.models.ts ***!
  \*******************************************/
/*! exports provided: TorneoEquipo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TorneoEquipo", function() { return TorneoEquipo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class TorneoEquipo {
    constructor(idT, idE) {
        this.torneoId = idT;
        this.equipoId = idE;
    }
}


/***/ }),

/***/ "./src/models/usuario.models.ts":
/*!**************************************!*\
  !*** ./src/models/usuario.models.ts ***!
  \**************************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Usuario {
    constructor(nUsuario, edad, email, password, isAdmin) {
        this.nombreUsuario = nUsuario;
        this.edad = edad;
        this.email = email;
        this.password = password;
        this.isAdmin = isAdmin;
    }
}


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map