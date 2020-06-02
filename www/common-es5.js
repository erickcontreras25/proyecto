function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js ***!
    \**************************************************************************/

  /*! exports provided: a, d */

  /***/
  function node_modulesIonicCoreDistEsmFrameworkDelegateC2e2e1f4Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return attachComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return detachComponent;
    });

    var attachComponent =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
        var el;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!delegate) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 2:
                if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context.next = 4;
                  break;
                }

                throw new Error('framework delegate is missing');

              case 4:
                el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                if (cssClasses) {
                  cssClasses.forEach(function (c) {
                    return el.classList.add(c);
                  });
                }

                if (componentProps) {
                  Object.assign(el, componentProps);
                }

                container.appendChild(el);

                if (!el.componentOnReady) {
                  _context.next = 11;
                  break;
                }

                _context.next = 11;
                return el.componentOnReady();

              case 11:
                return _context.abrupt("return", el);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function attachComponent(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }();

    var detachComponent = function detachComponent(delegate, element) {
      if (element) {
        if (delegate) {
          var container = element.parentElement;
          return delegate.removeViewFromDom(container, element);
        }

        element.remove();
      }

      return Promise.resolve();
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js ***!
    \**************************************************************/

  /*! exports provided: a, b, c, h */

  /***/
  function node_modulesIonicCoreDistEsmHapticC8f1473eJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return hapticSelectionStart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return hapticSelectionChanged;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return hapticSelectionEnd;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hapticSelection;
    });
    /**
     * Check to see if the Haptic Plugin is available
     * @return Returns `true` or false if the plugin is available
     */

    /**
     * Trigger a selection changed haptic event. Good for one-time events
     * (not for gestures)
     */


    var hapticSelection = function hapticSelection() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.selection();
      }
    };
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */


    var hapticSelectionStart = function hapticSelectionStart() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionStart();
      }
    };
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */


    var hapticSelectionChanged = function hapticSelectionChanged() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionChanged();
      }
    };
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */


    var hapticSelectionEnd = function hapticSelectionEnd() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionEnd();
      }
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/index-3476b023.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/index-3476b023.js ***!
    \*************************************************************/

  /*! exports provided: s */

  /***/
  function node_modulesIonicCoreDistEsmIndex3476b023Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s", function () {
      return sanitizeDOMString;
    });
    /**
     * Does a simple sanitization of all elements
     * in an untrusted string
     */


    var sanitizeDOMString = function sanitizeDOMString(untrustedString) {
      try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
          return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */


        var documentFragment = document.createDocumentFragment();
        var workingDiv = document.createElement('div');
        documentFragment.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */

        blockedTags.forEach(function (blockedTag) {
          var getElementsToRemove = documentFragment.querySelectorAll(blockedTag);

          for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
            var element = getElementsToRemove[elementIndex];

            if (element.parentNode) {
              element.parentNode.removeChild(element);
            } else {
              documentFragment.removeChild(element);
            }
            /**
             * We still need to sanitize
             * the children of this element
             * as they are left behind
             */


            var childElements = getElementChildren(element);
            /* tslint:disable-next-line */

            for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
              sanitizeElement(childElements[childIndex]);
            }
          }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes

        var dfChildren = getElementChildren(documentFragment);
        /* tslint:disable-next-line */

        for (var childIndex = 0; childIndex < dfChildren.length; childIndex++) {
          sanitizeElement(dfChildren[childIndex]);
        } // Append document fragment to div


        var fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment); // First child is always the div we did our work in

        var getInnerDiv = fragmentDiv.querySelector('div');
        return getInnerDiv !== null ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
      } catch (err) {
        console.error(err);
        return '';
      }
    };
    /**
     * Clean up current element based on allowed attributes
     * and then recursively dig down into any child elements to
     * clean those up as well
     */


    var sanitizeElement = function sanitizeElement(element) {
      // IE uses childNodes, so ignore nodes that are not elements
      if (element.nodeType && element.nodeType !== 1) {
        return;
      }

      for (var i = element.attributes.length - 1; i >= 0; i--) {
        var attribute = element.attributes.item(i);
        var attributeName = attribute.name; // remove non-allowed attribs

        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
          element.removeAttribute(attributeName);
          continue;
        } // clean up any allowed attribs
        // that attempt to do any JS funny-business


        var attributeValue = attribute.value;
        /* tslint:disable-next-line */

        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
          element.removeAttribute(attributeName);
        }
      }
      /**
       * Sanitize any nested children
       */


      var childElements = getElementChildren(element);
      /* tslint:disable-next-line */

      for (var _i = 0; _i < childElements.length; _i++) {
        sanitizeElement(childElements[_i]);
      }
    };
    /**
     * IE doesn't always support .children
     * so we revert to .childNodes instead
     */


    var getElementChildren = function getElementChildren(el) {
      return el.children != null ? el.children : el.childNodes;
    };

    var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
    var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/index-3528f139.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/index-3528f139.js ***!
    \*************************************************************/

  /*! exports provided: d, g, l, s, t */

  /***/
  function node_modulesIonicCoreDistEsmIndex3528f139Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return deepReady;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getIonPageElement;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "l", function () {
      return lifecycle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s", function () {
      return setPageHidden;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "t", function () {
      return transition;
    });
    /* harmony import */


    var _core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./core-80bde1aa.js */
    "./node_modules/@ionic/core/dist/esm/core-80bde1aa.js");
    /* harmony import */


    var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./constants-3c3e1099.js */
    "./node_modules/@ionic/core/dist/esm/constants-3c3e1099.js");

    var iosTransitionAnimation = function iosTransitionAnimation() {
      return __webpack_require__.e(
      /*! import() | ios-transition-1850e475-js */
      "ios-transition-1850e475-js").then(__webpack_require__.bind(null,
      /*! ./ios.transition-1850e475.js */
      "./node_modules/@ionic/core/dist/esm/ios.transition-1850e475.js"));
    };

    var mdTransitionAnimation = function mdTransitionAnimation() {
      return __webpack_require__.e(
      /*! import() | md-transition-083fcf52-js */
      "md-transition-083fcf52-js").then(__webpack_require__.bind(null,
      /*! ./md.transition-083fcf52.js */
      "./node_modules/@ionic/core/dist/esm/md.transition-083fcf52.js"));
    };

    var transition = function transition(opts) {
      return new Promise(function (resolve, reject) {
        Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["w"])(function () {
          beforeTransition(opts);
          runTransition(opts).then(function (result) {
            if (result.animation) {
              result.animation.destroy();
            }

            afterTransition(opts);
            resolve(result);
          }, function (error) {
            afterTransition(opts);
            reject(error);
          });
        });
      });
    };

    var beforeTransition = function beforeTransition(opts) {
      var enteringEl = opts.enteringEl;
      var leavingEl = opts.leavingEl;
      setZIndex(enteringEl, leavingEl, opts.direction);

      if (opts.showGoBack) {
        enteringEl.classList.add('can-go-back');
      } else {
        enteringEl.classList.remove('can-go-back');
      }

      setPageHidden(enteringEl, false);

      if (leavingEl) {
        setPageHidden(leavingEl, false);
      }
    };

    var runTransition =
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(opts) {
        var animationBuilder, ani;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return getAnimationBuilder(opts);

              case 2:
                animationBuilder = _context2.sent;
                ani = animationBuilder ? animation(animationBuilder, opts) : noAnimation(opts); // fast path for no animation

                return _context2.abrupt("return", ani);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function runTransition(_x6) {
        return _ref2.apply(this, arguments);
      };
    }();

    var afterTransition = function afterTransition(opts) {
      var enteringEl = opts.enteringEl;
      var leavingEl = opts.leavingEl;
      enteringEl.classList.remove('ion-page-invisible');

      if (leavingEl !== undefined) {
        leavingEl.classList.remove('ion-page-invisible');
      }
    };

    var getAnimationBuilder =
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(opts) {
        var getAnimation;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(!opts.leavingEl || !opts.animated || opts.duration === 0)) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return", undefined);

              case 2:
                if (!opts.animationBuilder) {
                  _context3.next = 4;
                  break;
                }

                return _context3.abrupt("return", opts.animationBuilder);

              case 4:
                if (!(opts.mode === 'ios')) {
                  _context3.next = 10;
                  break;
                }

                _context3.next = 7;
                return iosTransitionAnimation();

              case 7:
                _context3.t0 = _context3.sent.iosTransitionAnimation;
                _context3.next = 13;
                break;

              case 10:
                _context3.next = 12;
                return mdTransitionAnimation();

              case 12:
                _context3.t0 = _context3.sent.mdTransitionAnimation;

              case 13:
                getAnimation = _context3.t0;
                return _context3.abrupt("return", getAnimation);

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function getAnimationBuilder(_x7) {
        return _ref3.apply(this, arguments);
      };
    }();

    var animation =
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(animationBuilder, opts) {
        var trans, didComplete;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return waitForReady(opts, true);

              case 2:
                trans = animationBuilder(opts.baseEl, opts);
                fireWillEvents(opts.enteringEl, opts.leavingEl);
                _context4.next = 6;
                return playTransition(trans, opts);

              case 6:
                didComplete = _context4.sent;

                if (opts.progressCallback) {
                  opts.progressCallback(undefined);
                }

                if (didComplete) {
                  fireDidEvents(opts.enteringEl, opts.leavingEl);
                }

                return _context4.abrupt("return", {
                  hasCompleted: didComplete,
                  animation: trans
                });

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function animation(_x8, _x9) {
        return _ref4.apply(this, arguments);
      };
    }();

    var noAnimation =
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(opts) {
        var enteringEl, leavingEl;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                enteringEl = opts.enteringEl;
                leavingEl = opts.leavingEl;
                _context5.next = 4;
                return waitForReady(opts, false);

              case 4:
                fireWillEvents(enteringEl, leavingEl);
                fireDidEvents(enteringEl, leavingEl);
                return _context5.abrupt("return", {
                  hasCompleted: true
                });

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function noAnimation(_x10) {
        return _ref5.apply(this, arguments);
      };
    }();

    var waitForReady =
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(opts, defaultDeep) {
        var deep, promises;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
                promises = deep ? [deepReady(opts.enteringEl), deepReady(opts.leavingEl)] : [shallowReady(opts.enteringEl), shallowReady(opts.leavingEl)];
                _context6.next = 4;
                return Promise.all(promises);

              case 4:
                _context6.next = 6;
                return notifyViewReady(opts.viewIsReady, opts.enteringEl);

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function waitForReady(_x11, _x12) {
        return _ref6.apply(this, arguments);
      };
    }();

    var notifyViewReady =
    /*#__PURE__*/
    function () {
      var _ref7 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7(viewIsReady, enteringEl) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!viewIsReady) {
                  _context7.next = 3;
                  break;
                }

                _context7.next = 3;
                return viewIsReady(enteringEl);

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function notifyViewReady(_x13, _x14) {
        return _ref7.apply(this, arguments);
      };
    }();

    var playTransition = function playTransition(trans, opts) {
      var progressCallback = opts.progressCallback;
      var promise = new Promise(function (resolve) {
        trans.onFinish(function (currentStep) {
          return resolve(currentStep === 1);
        });
      }); // cool, let's do this, start the transition

      if (progressCallback) {
        // this is a swipe to go back, just get the transition progress ready
        // kick off the swipe animation start
        trans.progressStart(true);
        progressCallback(trans);
      } else {
        // only the top level transition should actually start "play"
        // kick it off and let it play through
        // ******** DOM WRITE ****************
        trans.play();
      } // create a callback for when the animation is done


      return promise;
    };

    var fireWillEvents = function fireWillEvents(enteringEl, leavingEl) {
      lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
      lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["L"]);
    };

    var fireDidEvents = function fireDidEvents(enteringEl, leavingEl) {
      lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
      lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["c"]);
    };

    var lifecycle = function lifecycle(el, eventName) {
      if (el) {
        var ev = new CustomEvent(eventName, {
          bubbles: false,
          cancelable: false
        });
        el.dispatchEvent(ev);
      }
    };

    var shallowReady = function shallowReady(el) {
      if (el && el.componentOnReady) {
        return el.componentOnReady();
      }

      return Promise.resolve();
    };

    var deepReady =
    /*#__PURE__*/
    function () {
      var _ref8 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee8(el) {
        var element, stencilEl;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                element = el;

                if (!element) {
                  _context8.next = 10;
                  break;
                }

                if (!(element.componentOnReady != null)) {
                  _context8.next = 8;
                  break;
                }

                _context8.next = 5;
                return element.componentOnReady();

              case 5:
                stencilEl = _context8.sent;

                if (!(stencilEl != null)) {
                  _context8.next = 8;
                  break;
                }

                return _context8.abrupt("return");

              case 8:
                _context8.next = 10;
                return Promise.all(Array.from(element.children).map(deepReady));

              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      return function deepReady(_x15) {
        return _ref8.apply(this, arguments);
      };
    }();

    var setPageHidden = function setPageHidden(el, hidden) {
      if (hidden) {
        el.setAttribute('aria-hidden', 'true');
        el.classList.add('ion-page-hidden');
      } else {
        el.hidden = false;
        el.removeAttribute('aria-hidden');
        el.classList.remove('ion-page-hidden');
      }
    };

    var setZIndex = function setZIndex(enteringEl, leavingEl, direction) {
      if (enteringEl !== undefined) {
        enteringEl.style.zIndex = direction === 'back' ? '99' : '101';
      }

      if (leavingEl !== undefined) {
        leavingEl.style.zIndex = '100';
      }
    };

    var getIonPageElement = function getIonPageElement(element) {
      if (element.classList.contains('ion-page')) {
        return element;
      }

      var ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');

      if (ionPage) {
        return ionPage;
      } // idk, return the original element so at least something animates and we don't have a null pointer


      return element;
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/spinner-configs-28520d80.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-28520d80.js ***!
    \***********************************************************************/

  /*! exports provided: S */

  /***/
  function node_modulesIonicCoreDistEsmSpinnerConfigs28520d80Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S", function () {
      return SPINNERS;
    });

    var spinners = {
      'bubbles': {
        dur: 1000,
        circles: 9,
        fn: function fn(dur, index, total) {
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          var angle = 2 * Math.PI * index / total;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circles': {
        dur: 1000,
        circles: 8,
        fn: function fn(dur, index, total) {
          var step = index / total;
          var animationDelay = "".concat(dur * step - dur, "ms");
          var angle = 2 * Math.PI * step;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: function fn() {
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
        fn: function fn() {
          return {
            r: 26,
            style: {}
          };
        }
      },
      'dots': {
        dur: 750,
        circles: 3,
        fn: function fn(_, index) {
          var animationDelay = -(110 * index) + 'ms';
          return {
            r: 6,
            style: {
              'left': "".concat(9 - 9 * index, "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 17,
            y2: 29,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines-small': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 12,
            y2: 20,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      }
    };
    var SPINNERS = spinners;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js ***!
    \*************************************************************/

  /*! exports provided: c, g, h, o */

  /***/
  function node_modulesIonicCoreDistEsmTheme18cbe2ccJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createColorClasses;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getClassMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hostContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "o", function () {
      return openURL;
    });

    var hostContext = function hostContext(selector, el) {
      return el.closest(selector) !== null;
    };
    /**
     * Create the mode and color classes for the component based on the classes passed in
     */


    var createColorClasses = function createColorClasses(color) {
      return typeof color === 'string' && color.length > 0 ? _defineProperty({
        'ion-color': true
      }, "ion-color-".concat(color), true) : undefined;
    };

    var getClassList = function getClassList(classes) {
      if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array.filter(function (c) {
          return c != null;
        }).map(function (c) {
          return c.trim();
        }).filter(function (c) {
          return c !== '';
        });
      }

      return [];
    };

    var getClassMap = function getClassMap(classes) {
      var map = {};
      getClassList(classes).forEach(function (c) {
        return map[c] = true;
      });
      return map;
    };

    var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

    var openURL =
    /*#__PURE__*/
    function () {
      var _ref10 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee9(url, ev, direction) {
        var router;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                  _context9.next = 5;
                  break;
                }

                router = document.querySelector('ion-router');

                if (!router) {
                  _context9.next = 5;
                  break;
                }

                if (ev != null) {
                  ev.preventDefault();
                }

                return _context9.abrupt("return", router.push(url, direction));

              case 5:
                return _context9.abrupt("return", false);

              case 6:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      return function openURL(_x16, _x17, _x18) {
        return _ref10.apply(this, arguments);
      };
    }();
    /***/

  },

  /***/
  "./src/app/services/apiservi.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/apiservi.service.ts ***!
    \**********************************************/

  /*! exports provided: ApiserviService */

  /***/
  function srcAppServicesApiserviServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiserviService", function () {
      return ApiserviService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./usuario.service */
    "./src/app/services/usuario.service.ts");

    var ApiserviService =
    /*#__PURE__*/
    function () {
      function ApiserviService(http, storage, usuarioSer) {
        _classCallCheck(this, ApiserviService);

        this.http = http;
        this.storage = storage;
        this.usuarioSer = usuarioSer;
        this.url = 'https://conmigo.armalapotra.com/api';
        this.token = null;
      } // getCanchas(){
      //   return this.http.get('https://apibackend2019.herokuapp.com/api/Complejos');
      // }


      _createClass(ApiserviService, [{
        key: "setAuxUsu",
        value: function setAuxUsu(valor) {
          this.auxUsu = valor;
        }
      }, {
        key: "getAuxUsu",
        value: function getAuxUsu() {
          return this.auxUsu;
        }
      }, {
        key: "setAuxEst",
        value: function setAuxEst(valor) {
          this.auxEst = valor;
        }
      }, {
        key: "getAuxEst",
        value: function getAuxEst() {
          return this.auxEst;
        }
      }, {
        key: "setAuxNom",
        value: function setAuxNom(valor) {
          this.auxNom = valor;
        }
      }, {
        key: "getAuxNom",
        value: function getAuxNom() {
          return this.auxNom;
        }
      }, {
        key: "getComplejo",
        value: function getComplejo() {
          var tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + this.usuarioSer.token
          });
          return this.http.get("".concat(this.url, "/complejo"), {
            headers: tokenHeaders
          });
        }
      }, {
        key: "getComplejoId",
        value: function getComplejoId(id) {
          var tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + this.usuarioSer.token
          });
          return this.http.get("".concat(this.url, "/complejo/").concat(id), {
            headers: tokenHeaders
          });
        }
      }, {
        key: "getComplejoAdmin",
        value: function getComplejoAdmin(n1) {
          var tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + this.usuarioSer.token
          });
          return this.http.get("".concat(this.url, "/complejo/p?n1=").concat(n1), {
            headers: tokenHeaders
          });
        }
      }, {
        key: "getComplejoEstado",
        value: function getComplejoEstado(n1) {
          var tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + this.usuarioSer.token
          });
          return this.http.get("".concat(this.url, "/complejo/q?n1=").concat(n1), {
            headers: tokenHeaders
          });
        }
      }, {
        key: "postComplejo",
        value: function postComplejo(complejo) {
          return this.http.post("".concat(this.url, "/complejo"), complejo, {
            responseType: 'text'
          });
        }
      }, {
        key: "putComplejo",
        value: function putComplejo(id, complejo) {
          return this.http.put("".concat(this.url, "/complejo/").concat(id), complejo, {
            responseType: 'text'
          });
        }
      }, {
        key: "deleteComplejo",
        value: function deleteComplejo(id) {
          return this.http.delete("".concat(this.url, "/complejo/").concat(id));
        }
      }, {
        key: "getCanchaComplejo",
        value: function getCanchaComplejo(n1) {
          var tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + this.usuarioSer.token
          });
          return this.http.get("".concat(this.url, "/cancha/p?n1=").concat(n1), {
            headers: tokenHeaders
          });
        }
      }, {
        key: "getCanchaId",
        value: function getCanchaId(id) {
          var tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + this.usuarioSer.token
          });
          return this.http.get("".concat(this.url, "/cancha/").concat(id), {
            headers: tokenHeaders
          });
        }
      }, {
        key: "postCancha",
        value: function postCancha(cancha) {
          return this.http.post("".concat(this.url, "/cancha"), cancha, {
            responseType: 'text'
          });
        }
      }, {
        key: "putCancha",
        value: function putCancha(id, cancha) {
          return this.http.put("".concat(this.url, "/cancha/").concat(id), cancha, {
            responseType: 'text'
          });
        }
      }, {
        key: "deleteCancha",
        value: function deleteCancha(id) {
          return this.http.delete("".concat(this.url, "/cancha/").concat(id));
        }
      }, {
        key: "getReservaciones",
        value: function getReservaciones() {
          var tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + this.usuarioSer.token
          });
          return this.http.get("".concat(this.url, "/reservacion"), {
            headers: tokenHeaders
          });
        }
      }, {
        key: "getReservacionXUser",
        value: function getReservacionXUser(n1) {
          var tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + this.usuarioSer.token
          });
          return this.http.get("".concat(this.url, "/reservacion/p?n1=").concat(n1), {
            headers: tokenHeaders
          });
        }
      }, {
        key: "getReservacionComplejo",
        value: function getReservacionComplejo(n1) {
          var tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + this.usuarioSer.token
          });
          return this.http.get("".concat(this.url, "/reservacion/q?n1=").concat(n1), {
            headers: tokenHeaders
          });
        }
      }, {
        key: "getReservacionId",
        value: function getReservacionId(id) {
          var tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + this.usuarioSer.token
          });
          return this.http.get("".concat(this.url, "/reservacion/").concat(id), {
            headers: tokenHeaders
          });
        }
      }, {
        key: "postReservacion",
        value: function postReservacion(reservacion) {
          return this.http.post("".concat(this.url, "/reservacion"), reservacion, {
            responseType: 'text'
          });
        }
      }, {
        key: "putReservacion",
        value: function putReservacion(id, reservacion) {
          return this.http.put("".concat(this.url, "/reservacion/").concat(id), reservacion, {
            responseType: 'text'
          });
        }
      }, {
        key: "deleteReservacion",
        value: function deleteReservacion(id) {
          return this.http.delete("".concat(this.url, "/reservacion/").concat(id));
        }
      }]);

      return ApiserviService;
    }();

    ApiserviService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }, {
        type: _usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]
      }];
    };

    ApiserviService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]])], ApiserviService);
    /***/
  },

  /***/
  "./src/app/services/equipo.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/equipo.service.ts ***!
    \********************************************/

  /*! exports provided: EquipoService */

  /***/
  function srcAppServicesEquipoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipoService", function () {
      return EquipoService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./usuario.service */
    "./src/app/services/usuario.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    var EquipoService =
    /*#__PURE__*/
    function () {
      function EquipoService(http, storage, usuarioSer) {
        _classCallCheck(this, EquipoService);

        this.http = http;
        this.storage = storage;
        this.usuarioSer = usuarioSer;
        this.url = 'https://conmigo.armalapotra.com/api';
      }

      _createClass(EquipoService, [{
        key: "getEquipos",
        value: function getEquipos() {
          var tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + this.usuarioSer.token
          });
          return this.http.get("".concat(this.url, "/equipo"), {
            headers: tokenHeaders
          });
        }
      }, {
        key: "getEquipoxUsuario",
        value: function getEquipoxUsuario(n1) {
          var tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + this.usuarioSer.token
          });
          return this.http.get("".concat(this.url, "/equipo/p?n1=").concat(n1), {
            headers: tokenHeaders
          });
        }
      }, {
        key: "getEquipoId",
        value: function getEquipoId(id) {
          var tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + this.usuarioSer.token
          });
          return this.http.get("".concat(this.url, "/equipo/").concat(id), {
            headers: tokenHeaders
          });
        }
      }, {
        key: "postEquipo",
        value: function postEquipo(equipo) {
          return this.http.post("".concat(this.url, "/equipo"), equipo, {
            responseType: 'text'
          });
        }
      }, {
        key: "putEquipo",
        value: function putEquipo(id, equipo) {
          return this.http.put("".concat(this.url, "/equipo/").concat(id), equipo, {
            responseType: 'text'
          });
        }
      }, {
        key: "deleteEquipo",
        value: function deleteEquipo(id) {
          return this.http.delete("".concat(this.url, "/equipo/").concat(id));
        }
      }, {
        key: "getEquipoUser",
        value: function getEquipoUser() {
          var tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + this.usuarioSer.token
          });
          return this.http.get("".concat(this.url, "/equipoUser"), {
            headers: tokenHeaders
          });
        }
      }, {
        key: "getEquipoUserxUsuario",
        value: function getEquipoUserxUsuario(n1) {
          var tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + this.usuarioSer.token
          });
          return this.http.get("".concat(this.url, "/equipoUser/p?n1=").concat(n1), {
            headers: tokenHeaders
          });
        }
      }, {
        key: "getEquipoUserId",
        value: function getEquipoUserId(id) {
          var tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + this.usuarioSer.token
          });
          return this.http.get("".concat(this.url, "/equipoUser/").concat(id), {
            headers: tokenHeaders
          });
        }
      }, {
        key: "postEquipoUser",
        value: function postEquipoUser(equipoUser) {
          return this.http.post("".concat(this.url, "/equipoUser"), equipoUser, {
            responseType: 'text'
          });
        }
      }, {
        key: "deleteEquipoUser",
        value: function deleteEquipoUser(id, idu) {
          return this.http.delete("".concat(this.url, "/equipoUser/").concat(id, "/").concat(idu), {
            responseType: 'text'
          });
        }
      }]);

      return EquipoService;
    }();

    EquipoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]
      }];
    };

    EquipoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]])], EquipoService);
    /***/
  },

  /***/
  "./src/app/services/torneo.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/torneo.service.ts ***!
    \********************************************/

  /*! exports provided: TorneoService */

  /***/
  function srcAppServicesTorneoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TorneoService", function () {
      return TorneoService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./usuario.service */
    "./src/app/services/usuario.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    var TorneoService =
    /*#__PURE__*/
    function () {
      function TorneoService(http, storage, usuarioSer) {
        _classCallCheck(this, TorneoService);

        this.http = http;
        this.storage = storage;
        this.usuarioSer = usuarioSer;
        this.url = 'https://conmigo.armalapotra.com/api';
      }

      _createClass(TorneoService, [{
        key: "getTorneos",
        value: function getTorneos() {
          var tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + this.usuarioSer.token
          });
          return this.http.get("".concat(this.url, "/torneo"), {
            headers: tokenHeaders
          });
        }
      }, {
        key: "getTorneoxUsuario",
        value: function getTorneoxUsuario(n1) {
          var tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + this.usuarioSer.token
          });
          return this.http.get("".concat(this.url, "/torneo/p?n1=").concat(n1), {
            headers: tokenHeaders
          });
        }
      }, {
        key: "getTorneooId",
        value: function getTorneooId(id) {
          var tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + this.usuarioSer.token
          });
          return this.http.get("".concat(this.url, "/torneo/").concat(id), {
            headers: tokenHeaders
          });
        }
      }, {
        key: "postTorneo",
        value: function postTorneo(torneo) {
          return this.http.post("".concat(this.url, "/torneo"), torneo, {
            responseType: 'text'
          });
        }
      }, {
        key: "putTorneo",
        value: function putTorneo(id, torneo) {
          return this.http.put("".concat(this.url, "/torneo/").concat(id), torneo, {
            responseType: 'text'
          });
        }
      }, {
        key: "deleteTorneo",
        value: function deleteTorneo(id) {
          return this.http.delete("".concat(this.url, "/torneo/").concat(id));
        }
      }, {
        key: "getTorneoEquipo",
        value: function getTorneoEquipo() {
          var tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + this.usuarioSer.token
          });
          return this.http.get("".concat(this.url, "/torneoEquipo"), {
            headers: tokenHeaders
          });
        }
      }, {
        key: "getTorneoEquipoxUsuario",
        value: function getTorneoEquipoxUsuario(n1) {
          var tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + this.usuarioSer.token
          });
          return this.http.get("".concat(this.url, "/torneoEquipo/p?n1=").concat(n1), {
            headers: tokenHeaders
          });
        }
      }, {
        key: "getTorneoEquipoId",
        value: function getTorneoEquipoId(id) {
          var tokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + this.usuarioSer.token
          });
          return this.http.get("".concat(this.url, "/torneoEquipo/").concat(id), {
            headers: tokenHeaders
          });
        }
      }, {
        key: "postTorneoEquipo",
        value: function postTorneoEquipo(torneoEquipo) {
          return this.http.post("".concat(this.url, "/torneoEquipo"), torneoEquipo, {
            responseType: 'text'
          });
        }
      }, {
        key: "deleteTorneoEquipo",
        value: function deleteTorneoEquipo(idT, idE) {
          return this.http.delete("".concat(this.url, "/torneoEquipo/").concat(idT, "/").concat(idE), {
            responseType: 'text'
          });
        }
      }]);

      return TorneoService;
    }();

    TorneoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]
      }];
    };

    TorneoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]])], TorneoService);
    /***/
  },

  /***/
  "./src/models/cancha.models.ts":
  /*!*************************************!*\
    !*** ./src/models/cancha.models.ts ***!
    \*************************************/

  /*! exports provided: Cancha */

  /***/
  function srcModelsCanchaModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Cancha", function () {
      return Cancha;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Cancha = function Cancha(id, precio, fot, tamanio, idCom) {
      _classCallCheck(this, Cancha);

      this.idCancha = id;
      this.precio = precio;
      this.foto = fot;
      this.tamanioCancha = tamanio;
      this.idComplejo = idCom;
    };
    /***/

  },

  /***/
  "./src/models/complejo.models.ts":
  /*!***************************************!*\
    !*** ./src/models/complejo.models.ts ***!
    \***************************************/

  /*! exports provided: Complejo */

  /***/
  function srcModelsComplejoModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Complejo", function () {
      return Complejo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Complejo = function Complejo(id, nombre, loc, num, fot, est, lng, lat, hInicio, hCierre, par, seg, adminId) {
      _classCallCheck(this, Complejo);

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
    };
    /***/

  },

  /***/
  "./src/models/equipo.models.ts":
  /*!*************************************!*\
    !*** ./src/models/equipo.models.ts ***!
    \*************************************/

  /*! exports provided: Equipo */

  /***/
  function srcModelsEquipoModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Equipo", function () {
      return Equipo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Equipo = function Equipo(id, nombre, cantidad, usuarioId) {
      _classCallCheck(this, Equipo);

      this.idEquipo = id;
      this.nombre = nombre;
      this.cantJugadores = cantidad;
      this.userId = usuarioId;
    };
    /***/

  },

  /***/
  "./src/models/equipoUser.models.ts":
  /*!*****************************************!*\
    !*** ./src/models/equipoUser.models.ts ***!
    \*****************************************/

  /*! exports provided: EquipoUser */

  /***/
  function srcModelsEquipoUserModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipoUser", function () {
      return EquipoUser;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var EquipoUser = function EquipoUser(idE, idU) {
      _classCallCheck(this, EquipoUser);

      this.equipoId = idE;
      this.userId = idU;
    };
    /***/

  },

  /***/
  "./src/models/reservacion.models.ts":
  /*!******************************************!*\
    !*** ./src/models/reservacion.models.ts ***!
    \******************************************/

  /*! exports provided: Reservacion */

  /***/
  function srcModelsReservacionModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Reservacion", function () {
      return Reservacion;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Reservacion = function Reservacion(id, hInicial, hFinal, pago, pagoP, idCan, idUsu) {
      _classCallCheck(this, Reservacion);

      this.idReservacion = id;
      this.horaInicial = hInicial;
      this.horaFinal = hFinal;
      this.pago = pago;
      this.idCancha = idCan;
      this.userId = idUsu;
    };
    /***/

  },

  /***/
  "./src/models/torneo.models.ts":
  /*!*************************************!*\
    !*** ./src/models/torneo.models.ts ***!
    \*************************************/

  /*! exports provided: Torneo */

  /***/
  function srcModelsTorneoModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Torneo", function () {
      return Torneo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Torneo = function Torneo(idT, nombre, cantE, des, premio, diaT, usuId, idCom) {
      _classCallCheck(this, Torneo);

      this.idTorneo = idT;
      this.nombre = nombre;
      this.cantEquipos = cantE;
      this.descripcion = des;
      this.premioFoto = premio;
      this.diaTorneo = diaT;
      this.usuarioId = usuId;
      this.idComplejo = idCom;
    };
    /***/

  },

  /***/
  "./src/models/torneoEquipo.models.ts":
  /*!*******************************************!*\
    !*** ./src/models/torneoEquipo.models.ts ***!
    \*******************************************/

  /*! exports provided: TorneoEquipo */

  /***/
  function srcModelsTorneoEquipoModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TorneoEquipo", function () {
      return TorneoEquipo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var TorneoEquipo = function TorneoEquipo(idT, idE) {
      _classCallCheck(this, TorneoEquipo);

      this.torneoId = idT;
      this.equipoId = idE;
    };
    /***/

  },

  /***/
  "./src/models/usuario.models.ts":
  /*!**************************************!*\
    !*** ./src/models/usuario.models.ts ***!
    \**************************************/

  /*! exports provided: Usuario */

  /***/
  function srcModelsUsuarioModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Usuario", function () {
      return Usuario;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Usuario = function Usuario(nUsuario, edad, email, password, isAdmin) {
      _classCallCheck(this, Usuario);

      this.nombreUsuario = nUsuario;
      this.edad = edad;
      this.email = email;
      this.password = password;
      this.isAdmin = isAdmin;
    };
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map