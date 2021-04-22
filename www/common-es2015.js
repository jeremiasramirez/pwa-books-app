(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_92848855_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-92848855.js */ "./node_modules/@ionic/core/dist/esm/index-92848855.js");
/* harmony import */ var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-eea61379.js */ "./node_modules/@ionic/core/dist/esm/index-eea61379.js");
/* harmony import */ var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-7b8ba70a.js */ "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js");




const createButtonActiveGesture = (el, isButton) => {
    let currentTouchedButton;
    let initialTouchedButton;
    const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
        if (typeof document === 'undefined') {
            return;
        }
        const target = document.elementFromPoint(x, y);
        if (!target || !isButton(target)) {
            clearActiveButton();
            return;
        }
        if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
        }
    };
    const setActiveButton = (button, hapticFeedbackFn) => {
        currentTouchedButton = button;
        if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
        hapticFeedbackFn();
    };
    const clearActiveButton = (dispatchClick = false) => {
        if (!currentTouchedButton) {
            return;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
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
        el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
        onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
        onEnd: () => {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
        }
    });
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
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

/***/ "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
    getEngine() {
        const win = window;
        return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
    },
    available() {
        return !!this.getEngine();
    },
    isCordova() {
        return !!window.TapticEngine;
    },
    isCapacitor() {
        const win = window;
        return !!win.Capacitor;
    },
    impact(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({ style });
    },
    notification(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({ style });
    },
    selection() {
        this.impact({ style: 'light' });
    },
    selectionStart() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionStart();
        }
        else {
            engine.gestureSelectionStart();
        }
    },
    selectionChanged() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionChanged();
        }
        else {
            engine.gestureSelectionChanged();
        }
    },
    selectionEnd() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionEnd();
        }
        else {
            engine.gestureSelectionEnd();
        }
    }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
    HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
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

/***/ "./node_modules/@ionic/core/dist/esm/theme-5641d27f.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-5641d27f.js ***!
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
const createColorClasses = (color, cssClassMap) => {
    return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
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
const openURL = async (url, ev, direction, animation) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction, animation);
        }
    }
    return false;
};




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/books/books.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/books/books.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n\n  <app-banner-read></app-banner-read>\n\n  <section class=\"titleCategories\">\n    <h4>Fiction</h4>\n  </section>\n  \n  <div class=\"responsiveCenter\">\n    <app-book start=\"0\" end=\"8\" [elements]=\"books\"></app-book>\n  </div>\n\n  <br>\n  <div class=\"responsiveCenter\">\n    <app-book start=\"8\" end=\"16\" [elements]=\"books\"></app-book>\n  </div>\n\n  <section class=\"titleCategories\">\n    <h4>No fiction</h4>\n  </section>\n\n  <div class=\"responsiveCenter\">\n    <app-book start=\"0\" end=\"8\" [elements]=\"noFictionBooks\"></app-book>\n  </div>\n \n  <br>\n  <div  class=\"responsiveCenter\">\n    <app-book start=\"8\" end=\"16\" [elements]=\"noFictionBooks\"></app-book>\n  </div>\n \n \n\n  <ion-button routerLink=\"/home/explore\" mode=\"ios\" color=\"light\" expand=\"block\">Explore\n    <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    <ion-ripple-effect></ion-ripple-effect>\n  </ion-button>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/explore/explore.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/explore/explore.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <br>\n    <div class=\"responsiveCenter\">\n      <ion-searchbar [disabled]=\"!listAll.length\" #inputvalue (ionChange)=\"searchOnExplore(inputvalue.value)\" mode=\"ios\" color=\"light\" placeholder=\"Search categories\" animated></ion-searchbar>\n    </div>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n  <app-showexplore [textInput]=\"textInputValue\" [elements]=\"listAll\"></app-showexplore>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/exploreshow/exploreshow.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/exploreshow/exploreshow.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color='tertiary' mode=\"ios\">\n\n    <ion-buttons>\n      <ion-back-button defaultHref=\"/home/explore\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>{{ title }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <app-showcards [elements]=\"allList\"></app-showcards>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/books/books-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/books/books-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: BooksPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksPageRoutingModule", function() { return BooksPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _books_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./books.page */ "./src/app/pages/books/books.page.ts");




const routes = [
    {
        path: '',
        component: _books_page__WEBPACK_IMPORTED_MODULE_3__["BooksPage"]
    }
];
let BooksPageRoutingModule = class BooksPageRoutingModule {
};
BooksPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BooksPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/books/books.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/books/books.module.ts ***!
  \*********************************************/
/*! exports provided: BooksPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksPageModule", function() { return BooksPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _books_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./books-routing.module */ "./src/app/pages/books/books-routing.module.ts");
/* harmony import */ var _books_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./books.page */ "./src/app/pages/books/books.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let BooksPageModule = class BooksPageModule {
};
BooksPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _books_routing_module__WEBPACK_IMPORTED_MODULE_5__["BooksPageRoutingModule"]
        ],
        declarations: [_books_page__WEBPACK_IMPORTED_MODULE_6__["BooksPage"]]
    })
], BooksPageModule);



/***/ }),

/***/ "./src/app/pages/books/books.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/books/books.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".titleCategories {\n  text-align: start;\n  margin-left: 15px;\n}\n\n.titleCategories h4 {\n  color: #0f0faa;\n  font-size: 15px;\n}\n\nion-toolbar {\n  border-bottom-left-radius: 3px !important;\n  border-bottom-right-radius: 3px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYm9va3MvYm9va3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQURKOztBQUlBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFESjs7QUFHQTtFQUNJLHlDQUFBO0VBQ0EsMENBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jvb2tzL2Jvb2tzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4udGl0bGVDYXRlZ29yaWVze1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIFxufVxuLnRpdGxlQ2F0ZWdvcmllcyBoNHtcbiAgICBjb2xvcjogcmdiKDE1LCAxNSwgMTcwKTtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5pb24tdG9vbGJhcntcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjNweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjNweCAhaW1wb3J0YW50OyBcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/books/books.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/books/books.page.ts ***!
  \*******************************************/
/*! exports provided: BooksPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksPage", function() { return BooksPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_service_book__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/service.book */ "./src/app/services/service.book.ts");



let BooksPage = class BooksPage {
    constructor(serviceBook) {
        this.serviceBook = serviceBook;
        this.books = [];
        this.noFictionBooks = [];
        this.foryouBooks = [];
    }
    ngOnInit() {
        this.getFiction();
        this.getNoFiction();
    }
    ngOnDestroy() {
        this.obsFiction.unsubscribe();
        this.obsNoFiction.unsubscribe();
    }
    getFiction() {
        this.obsFiction = this.serviceBook.getFictionBooks().subscribe((resp) => {
            this.books = resp.results.books;
        });
    }
    getNoFiction() {
        this.obsNoFiction = this.serviceBook.getNoFictionBooks().subscribe((resp) => {
            this.noFictionBooks = resp.results.books;
        });
    }
};
BooksPage.ctorParameters = () => [
    { type: src_app_services_service_book__WEBPACK_IMPORTED_MODULE_2__["BookService"] }
];
BooksPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-books',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./books.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/books/books.page.html")).default,
        providers: [
            src_app_services_service_book__WEBPACK_IMPORTED_MODULE_2__["BookService"]
        ],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./books.page.scss */ "./src/app/pages/books/books.page.scss")).default]
    })
], BooksPage);



/***/ }),

/***/ "./src/app/pages/explore/explore-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/explore/explore-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ExplorePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorePageRoutingModule", function() { return ExplorePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _explore_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./explore.page */ "./src/app/pages/explore/explore.page.ts");




const routes = [
    {
        path: '',
        component: _explore_page__WEBPACK_IMPORTED_MODULE_3__["ExplorePage"]
    }
];
let ExplorePageRoutingModule = class ExplorePageRoutingModule {
};
ExplorePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ExplorePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/explore/explore.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/explore/explore.module.ts ***!
  \*************************************************/
/*! exports provided: ExplorePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorePageModule", function() { return ExplorePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _explore_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./explore-routing.module */ "./src/app/pages/explore/explore-routing.module.ts");
/* harmony import */ var _explore_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./explore.page */ "./src/app/pages/explore/explore.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let ExplorePageModule = class ExplorePageModule {
};
ExplorePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _explore_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExplorePageRoutingModule"]
        ],
        declarations: [_explore_page__WEBPACK_IMPORTED_MODULE_6__["ExplorePage"]]
    })
], ExplorePageModule);



/***/ }),

/***/ "./src/app/pages/explore/explore.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/explore/explore.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  border-bottom-left-radius: 15px !important;\n  border-bottom-right-radius: 15px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXhwbG9yZS9leHBsb3JlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBDQUFBO0VBQ0EsMkNBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4cGxvcmUvZXhwbG9yZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHggIWltcG9ydGFudFxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/explore/explore.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/explore/explore.page.ts ***!
  \***********************************************/
/*! exports provided: ExplorePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorePage", function() { return ExplorePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_service_book__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/service.book */ "./src/app/services/service.book.ts");



let ExplorePage = class ExplorePage {
    constructor(bookservice) {
        this.bookservice = bookservice;
        this.listAll = [];
        this.textInputValue = '';
    }
    ngOnInit() {
        this.getLists();
    }
    ngOnDestroy() {
        this.obsLists.unsubscribe();
    }
    searchOnExplore(text) {
        this.textInputValue = text;
    }
    getLists() {
        this.obsLists = this.bookservice.getByList().subscribe((e) => {
            this.listAll = e.results;
        });
    }
};
ExplorePage.ctorParameters = () => [
    { type: src_app_services_service_book__WEBPACK_IMPORTED_MODULE_2__["BookService"] }
];
ExplorePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-explore',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./explore.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/explore/explore.page.html")).default,
        providers: [
            src_app_services_service_book__WEBPACK_IMPORTED_MODULE_2__["BookService"]
        ],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./explore.page.scss */ "./src/app/pages/explore/explore.page.scss")).default]
    })
], ExplorePage);



/***/ }),

/***/ "./src/app/pages/exploreshow/exploreshow-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/exploreshow/exploreshow-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ExploreshowPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreshowPageRoutingModule", function() { return ExploreshowPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _exploreshow_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exploreshow.page */ "./src/app/pages/exploreshow/exploreshow.page.ts");




const routes = [
    {
        path: '',
        component: _exploreshow_page__WEBPACK_IMPORTED_MODULE_3__["ExploreshowPage"]
    }
];
let ExploreshowPageRoutingModule = class ExploreshowPageRoutingModule {
};
ExploreshowPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ExploreshowPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/exploreshow/exploreshow.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/exploreshow/exploreshow.module.ts ***!
  \*********************************************************/
/*! exports provided: ExploreshowPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreshowPageModule", function() { return ExploreshowPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _exploreshow_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exploreshow-routing.module */ "./src/app/pages/exploreshow/exploreshow-routing.module.ts");
/* harmony import */ var _exploreshow_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exploreshow.page */ "./src/app/pages/exploreshow/exploreshow.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let ExploreshowPageModule = class ExploreshowPageModule {
};
ExploreshowPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _exploreshow_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExploreshowPageRoutingModule"]
        ],
        declarations: [_exploreshow_page__WEBPACK_IMPORTED_MODULE_6__["ExploreshowPage"]]
    })
], ExploreshowPageModule);



/***/ }),

/***/ "./src/app/pages/exploreshow/exploreshow.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/exploreshow/exploreshow.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4cGxvcmVzaG93L2V4cGxvcmVzaG93LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/exploreshow/exploreshow.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/exploreshow/exploreshow.page.ts ***!
  \*******************************************************/
/*! exports provided: ExploreshowPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreshowPage", function() { return ExploreshowPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_service_book__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/service.book */ "./src/app/services/service.book.ts");




let ExploreshowPage = class ExploreshowPage {
    constructor(param, servicebook) {
        this.param = param;
        this.servicebook = servicebook;
        this.allList = [];
        this.title = "Waiting..";
    }
    ngOnInit() {
        this.getParam();
    }
    ngOnDestroy() {
        this.obsParam.unsubscribe();
        this.obsByList.unsubscribe();
    }
    getParam() {
        this.obsParam = this.param.params.subscribe((param) => {
            this.getByList(param.id);
        });
    }
    getByList(id) {
        this.obsByList = this.servicebook.getAllLists(id).subscribe((e) => {
            this.allList = e.results.books;
            this.title = e.results.display_name;
        });
    }
};
ExploreshowPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_service_book__WEBPACK_IMPORTED_MODULE_3__["BookService"] }
];
ExploreshowPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-exploreshow',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./exploreshow.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/exploreshow/exploreshow.page.html")).default,
        providers: [
            src_app_services_service_book__WEBPACK_IMPORTED_MODULE_3__["BookService"]
        ],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./exploreshow.page.scss */ "./src/app/pages/exploreshow/exploreshow.page.scss")).default]
    })
], ExploreshowPage);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map