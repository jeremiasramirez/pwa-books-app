(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function node_modulesIonicCoreDistEsmButtonActive5da929d4Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_92848855_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-92848855.js */
      "./node_modules/@ionic/core/dist/esm/index-92848855.js");
      /* harmony import */


      var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index-eea61379.js */
      "./node_modules/@ionic/core/dist/esm/index-eea61379.js");
      /* harmony import */


      var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./haptic-7b8ba70a.js */
      "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function node_modulesIonicCoreDistEsmFrameworkDelegateD1eb6504Js(module, __webpack_exports__, __webpack_require__) {
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

      var attachComponent = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
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
    "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function node_modulesIonicCoreDistEsmHaptic7b8ba70aJs(module, __webpack_exports__, __webpack_require__) {
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
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function node_modulesIonicCoreDistEsmSpinnerConfigsC78e170eJs(module, __webpack_exports__, __webpack_require__) {
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
    "./node_modules/@ionic/core/dist/esm/theme-5641d27f.js":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-5641d27f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function node_modulesIonicCoreDistEsmTheme5641d27fJs(module, __webpack_exports__, __webpack_require__) {
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


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
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

      var openURL = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context2.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context2.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context2.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context2.abrupt("return", false);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function openURL(_x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/books/books.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/books/books.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesBooksBooksPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content>\n\n  <app-banner-read></app-banner-read>\n\n  <section class=\"titleCategories\">\n    <h4>Fiction</h4>\n  </section>\n  \n  <div class=\"responsiveCenter\">\n    <app-book start=\"0\" end=\"8\" [elements]=\"books\"></app-book>\n  </div>\n\n  <br>\n  <div class=\"responsiveCenter\">\n    <app-book start=\"8\" end=\"16\" [elements]=\"books\"></app-book>\n  </div>\n\n  <section class=\"titleCategories\">\n    <h4>No fiction</h4>\n  </section>\n\n  <div class=\"responsiveCenter\">\n    <app-book start=\"0\" end=\"8\" [elements]=\"noFictionBooks\"></app-book>\n  </div>\n \n  <br>\n  <div  class=\"responsiveCenter\">\n    <app-book start=\"8\" end=\"16\" [elements]=\"noFictionBooks\"></app-book>\n  </div>\n \n \n\n  <ion-button routerLink=\"/home/explore\" mode=\"ios\" color=\"light\" expand=\"block\">Explore\n    <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    <ion-ripple-effect></ion-ripple-effect>\n  </ion-button>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/explore/explore.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/explore/explore.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesExploreExplorePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <br>\n    <div class=\"responsiveCenter\">\n      <ion-searchbar [disabled]=\"!listAll.length\" #inputvalue (ionChange)=\"searchOnExplore(inputvalue.value)\" mode=\"ios\" color=\"light\" placeholder=\"Search categories\" animated></ion-searchbar>\n    </div>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n  <app-showexplore [textInput]=\"textInputValue\" [elements]=\"listAll\"></app-showexplore>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/exploreshow/exploreshow.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/exploreshow/exploreshow.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesExploreshowExploreshowPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar color='tertiary' mode=\"ios\">\n\n    <ion-buttons>\n      <ion-back-button defaultHref=\"/home/explore\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>{{ title }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <app-showcards [elements]=\"allList\"></app-showcards>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/books/books-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/books/books-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: BooksPageRoutingModule */

    /***/
    function srcAppPagesBooksBooksRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BooksPageRoutingModule", function () {
        return BooksPageRoutingModule;
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


      var _books_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./books.page */
      "./src/app/pages/books/books.page.ts");

      var routes = [{
        path: '',
        component: _books_page__WEBPACK_IMPORTED_MODULE_3__["BooksPage"]
      }];

      var BooksPageRoutingModule = function BooksPageRoutingModule() {
        _classCallCheck(this, BooksPageRoutingModule);
      };

      BooksPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BooksPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/books/books.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/books/books.module.ts ***!
      \*********************************************/

    /*! exports provided: BooksPageModule */

    /***/
    function srcAppPagesBooksBooksModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BooksPageModule", function () {
        return BooksPageModule;
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


      var _books_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./books-routing.module */
      "./src/app/pages/books/books-routing.module.ts");
      /* harmony import */


      var _books_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./books.page */
      "./src/app/pages/books/books.page.ts");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "./src/app/components/components.module.ts");

      var BooksPageModule = function BooksPageModule() {
        _classCallCheck(this, BooksPageModule);
      };

      BooksPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _books_routing_module__WEBPACK_IMPORTED_MODULE_5__["BooksPageRoutingModule"]],
        declarations: [_books_page__WEBPACK_IMPORTED_MODULE_6__["BooksPage"]]
      })], BooksPageModule);
      /***/
    },

    /***/
    "./src/app/pages/books/books.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/pages/books/books.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesBooksBooksPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".titleCategories {\n  text-align: start;\n  margin-left: 15px;\n}\n\n.titleCategories h4 {\n  color: #0f0faa;\n  font-size: 15px;\n}\n\nion-toolbar {\n  border-bottom-left-radius: 3px !important;\n  border-bottom-right-radius: 3px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYm9va3MvYm9va3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQURKOztBQUlBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFESjs7QUFHQTtFQUNJLHlDQUFBO0VBQ0EsMENBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jvb2tzL2Jvb2tzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4udGl0bGVDYXRlZ29yaWVze1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIFxufVxuLnRpdGxlQ2F0ZWdvcmllcyBoNHtcbiAgICBjb2xvcjogcmdiKDE1LCAxNSwgMTcwKTtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5pb24tdG9vbGJhcntcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjNweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjNweCAhaW1wb3J0YW50OyBcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/books/books.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/books/books.page.ts ***!
      \*******************************************/

    /*! exports provided: BooksPage */

    /***/
    function srcAppPagesBooksBooksPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BooksPage", function () {
        return BooksPage;
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


      var src_app_services_service_book__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/service.book */
      "./src/app/services/service.book.ts");

      var BooksPage = /*#__PURE__*/function () {
        function BooksPage(serviceBook) {
          _classCallCheck(this, BooksPage);

          this.serviceBook = serviceBook;
          this.books = [];
          this.noFictionBooks = [];
          this.foryouBooks = [];
        }

        _createClass(BooksPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getFiction();
            this.getNoFiction();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.obsFiction.unsubscribe();
            this.obsNoFiction.unsubscribe();
          }
        }, {
          key: "getFiction",
          value: function getFiction() {
            var _this = this;

            this.obsFiction = this.serviceBook.getFictionBooks().subscribe(function (resp) {
              _this.books = resp.results.books;
            });
          }
        }, {
          key: "getNoFiction",
          value: function getNoFiction() {
            var _this2 = this;

            this.obsNoFiction = this.serviceBook.getNoFictionBooks().subscribe(function (resp) {
              _this2.noFictionBooks = resp.results.books;
            });
          }
        }]);

        return BooksPage;
      }();

      BooksPage.ctorParameters = function () {
        return [{
          type: src_app_services_service_book__WEBPACK_IMPORTED_MODULE_2__["BookService"]
        }];
      };

      BooksPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-books',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./books.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/books/books.page.html"))["default"],
        providers: [src_app_services_service_book__WEBPACK_IMPORTED_MODULE_2__["BookService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./books.page.scss */
        "./src/app/pages/books/books.page.scss"))["default"]]
      })], BooksPage);
      /***/
    },

    /***/
    "./src/app/pages/explore/explore-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/explore/explore-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: ExplorePageRoutingModule */

    /***/
    function srcAppPagesExploreExploreRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExplorePageRoutingModule", function () {
        return ExplorePageRoutingModule;
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


      var _explore_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./explore.page */
      "./src/app/pages/explore/explore.page.ts");

      var routes = [{
        path: '',
        component: _explore_page__WEBPACK_IMPORTED_MODULE_3__["ExplorePage"]
      }];

      var ExplorePageRoutingModule = function ExplorePageRoutingModule() {
        _classCallCheck(this, ExplorePageRoutingModule);
      };

      ExplorePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ExplorePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/explore/explore.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/explore/explore.module.ts ***!
      \*************************************************/

    /*! exports provided: ExplorePageModule */

    /***/
    function srcAppPagesExploreExploreModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExplorePageModule", function () {
        return ExplorePageModule;
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


      var _explore_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./explore-routing.module */
      "./src/app/pages/explore/explore-routing.module.ts");
      /* harmony import */


      var _explore_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./explore.page */
      "./src/app/pages/explore/explore.page.ts");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "./src/app/components/components.module.ts");

      var ExplorePageModule = function ExplorePageModule() {
        _classCallCheck(this, ExplorePageModule);
      };

      ExplorePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _explore_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExplorePageRoutingModule"]],
        declarations: [_explore_page__WEBPACK_IMPORTED_MODULE_6__["ExplorePage"]]
      })], ExplorePageModule);
      /***/
    },

    /***/
    "./src/app/pages/explore/explore.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/pages/explore/explore.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesExploreExplorePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  border-bottom-left-radius: 15px !important;\n  border-bottom-right-radius: 15px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXhwbG9yZS9leHBsb3JlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBDQUFBO0VBQ0EsMkNBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4cGxvcmUvZXhwbG9yZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHggIWltcG9ydGFudFxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/explore/explore.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/explore/explore.page.ts ***!
      \***********************************************/

    /*! exports provided: ExplorePage */

    /***/
    function srcAppPagesExploreExplorePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExplorePage", function () {
        return ExplorePage;
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


      var src_app_services_service_book__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/service.book */
      "./src/app/services/service.book.ts");

      var ExplorePage = /*#__PURE__*/function () {
        function ExplorePage(bookservice) {
          _classCallCheck(this, ExplorePage);

          this.bookservice = bookservice;
          this.listAll = [];
          this.textInputValue = '';
        }

        _createClass(ExplorePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getLists();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.obsLists.unsubscribe();
          }
        }, {
          key: "searchOnExplore",
          value: function searchOnExplore(text) {
            this.textInputValue = text;
          }
        }, {
          key: "getLists",
          value: function getLists() {
            var _this3 = this;

            this.obsLists = this.bookservice.getByList().subscribe(function (e) {
              _this3.listAll = e.results;
            });
          }
        }]);

        return ExplorePage;
      }();

      ExplorePage.ctorParameters = function () {
        return [{
          type: src_app_services_service_book__WEBPACK_IMPORTED_MODULE_2__["BookService"]
        }];
      };

      ExplorePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-explore',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./explore.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/explore/explore.page.html"))["default"],
        providers: [src_app_services_service_book__WEBPACK_IMPORTED_MODULE_2__["BookService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./explore.page.scss */
        "./src/app/pages/explore/explore.page.scss"))["default"]]
      })], ExplorePage);
      /***/
    },

    /***/
    "./src/app/pages/exploreshow/exploreshow-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/exploreshow/exploreshow-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ExploreshowPageRoutingModule */

    /***/
    function srcAppPagesExploreshowExploreshowRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExploreshowPageRoutingModule", function () {
        return ExploreshowPageRoutingModule;
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


      var _exploreshow_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./exploreshow.page */
      "./src/app/pages/exploreshow/exploreshow.page.ts");

      var routes = [{
        path: '',
        component: _exploreshow_page__WEBPACK_IMPORTED_MODULE_3__["ExploreshowPage"]
      }];

      var ExploreshowPageRoutingModule = function ExploreshowPageRoutingModule() {
        _classCallCheck(this, ExploreshowPageRoutingModule);
      };

      ExploreshowPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ExploreshowPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/exploreshow/exploreshow.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/exploreshow/exploreshow.module.ts ***!
      \*********************************************************/

    /*! exports provided: ExploreshowPageModule */

    /***/
    function srcAppPagesExploreshowExploreshowModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExploreshowPageModule", function () {
        return ExploreshowPageModule;
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


      var _exploreshow_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./exploreshow-routing.module */
      "./src/app/pages/exploreshow/exploreshow-routing.module.ts");
      /* harmony import */


      var _exploreshow_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./exploreshow.page */
      "./src/app/pages/exploreshow/exploreshow.page.ts");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "./src/app/components/components.module.ts");

      var ExploreshowPageModule = function ExploreshowPageModule() {
        _classCallCheck(this, ExploreshowPageModule);
      };

      ExploreshowPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _exploreshow_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExploreshowPageRoutingModule"]],
        declarations: [_exploreshow_page__WEBPACK_IMPORTED_MODULE_6__["ExploreshowPage"]]
      })], ExploreshowPageModule);
      /***/
    },

    /***/
    "./src/app/pages/exploreshow/exploreshow.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/pages/exploreshow/exploreshow.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesExploreshowExploreshowPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4cGxvcmVzaG93L2V4cGxvcmVzaG93LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pages/exploreshow/exploreshow.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/exploreshow/exploreshow.page.ts ***!
      \*******************************************************/

    /*! exports provided: ExploreshowPage */

    /***/
    function srcAppPagesExploreshowExploreshowPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExploreshowPage", function () {
        return ExploreshowPage;
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


      var src_app_services_service_book__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/service.book */
      "./src/app/services/service.book.ts");

      var ExploreshowPage = /*#__PURE__*/function () {
        function ExploreshowPage(param, servicebook) {
          _classCallCheck(this, ExploreshowPage);

          this.param = param;
          this.servicebook = servicebook;
          this.allList = [];
          this.title = "Waiting..";
        }

        _createClass(ExploreshowPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getParam();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.obsParam.unsubscribe();
            this.obsByList.unsubscribe();
          }
        }, {
          key: "getParam",
          value: function getParam() {
            var _this4 = this;

            this.obsParam = this.param.params.subscribe(function (param) {
              _this4.getByList(param.id);
            });
          }
        }, {
          key: "getByList",
          value: function getByList(id) {
            var _this5 = this;

            this.obsByList = this.servicebook.getAllLists(id).subscribe(function (e) {
              _this5.allList = e.results.books;
              _this5.title = e.results.display_name;
            });
          }
        }]);

        return ExploreshowPage;
      }();

      ExploreshowPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_services_service_book__WEBPACK_IMPORTED_MODULE_3__["BookService"]
        }];
      };

      ExploreshowPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-exploreshow',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./exploreshow.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/exploreshow/exploreshow.page.html"))["default"],
        providers: [src_app_services_service_book__WEBPACK_IMPORTED_MODULE_3__["BookService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./exploreshow.page.scss */
        "./src/app/pages/exploreshow/exploreshow.page.scss"))["default"]]
      })], ExploreshowPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map