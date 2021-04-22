(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~books-books-module~explore-explore-module~exploreshow-exploreshow-module~pages-books-books-m~494a88a6"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/banner-read/banner-read.component.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/banner-read/banner-read.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsBannerReadBannerReadComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"responsiveCenter animateIn container__banner\">\n\n  <article class=\"container__title__banner\">\n    <h1>Welcome back!</h1>\n    <p>Read From wide range of E-Books</p>\n  </article>\n\n  <article class=\"container__banner__image\">\n    <ion-img src=\"../../../assets/images/app-read.svg\"></ion-img>\n \n  </article>\n\n  <article class=\"container__buttons\">\n    <ion-button mode=\"ios\" (click)=\"explore()\" routerLink=\"/home/explore\"><ion-ripple-effect>  </ion-ripple-effect>Saved</ion-button> \n    <ion-button mode=\"ios\" (click)=\"explore()\" routerLink=\"/home/explore\"><ion-ripple-effect>  </ion-ripple-effect>Explore</ion-button> \n  </article>\n\n</section>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/book/book.component.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/book/book.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsBookBookComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-slides  *ngIf=\"elements.length>2\" class=\"animateIn\" [options]=\"opts\" style=\"height: 200px !important;\">\n    \n  <ion-slide  *ngFor=\"let book of elements | slice:start:end\"> \n    <ion-card mode=\"ios\" (click)=\"watch(book)\">\n\n      <ion-img [src]=\"book.book_image\"></ion-img>\n      </ion-card>\n  </ion-slide>\n \n</ion-slides>\n\n\n<ion-slides *ngIf=\"elements.length<2\" class=\"animateIn\" [options]=\"opts\" style=\"height: 200px !important;\">\n    \n  <ion-slide *ngFor=\"let book of [1,1,1]\"> \n    <ion-card mode=\"ios\">\n      <ion-spinner style=\"margin-top: 60%\" color=\"primary\"></ion-spinner>\n    </ion-card>\n  </ion-slide>\n \n</ion-slides>\n\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/showcards/showcards.component.html":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/showcards/showcards.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsShowcardsShowcardsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<app-skeletoncards *ngIf=\"elements.length<1\"></app-skeletoncards>\n\n<div class=\"responsiveCenter\">\n  <section class=\"grid__cards animateIn\" *ngIf=\"elements.length>1\">\n    <ion-card class=\"animateIn\" mode=\"ios\" *ngFor=\"let card of elements|slice:0:end\" (click)=\"watch(card)\">\n      <ion-img [src]=\"card.book_image\"></ion-img>\n    </ion-card>\n  </section> \n  \n    \n  \n  <ion-infinite-scroll color=\"tertiary\" threshold=\"130px\" (ionInfinite)=\"more($event)\">\n    <ion-infinite-scroll-content color=\"tertiary\"></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/showexplore/showexplore.component.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/showexplore/showexplore.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsShowexploreShowexploreComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = " \n <app-skeletonexplore *ngIf=\"elements.length < 1\"></app-skeletonexplore>\n <div class=\"responsiveCenter\">\n  \n  <section class=\"container__category \" *ngIf=\"elements.length > 1\">\n\n    <article class=\"card__category animateIn\" *ngFor=\"let explore of elements|slice:start:end | searchbook:elements:textInput \" (click)=\"navigateTo(explore.list_name_encoded)\">\n      <h1>{{ explore.display_name }}</h1>\n      <p>update {{ explore.updated }}  </p>\n      <ion-ripple-effect></ion-ripple-effect>\n    </article>\n\n  \n  </section>\n</div>\n\n<ion-infinite-scroll color=\"tertiary\" threshold=\"130px\" (ionInfinite)=\"more($event)\">\n  <ion-infinite-scroll-content color=\"tertiary\"></ion-infinite-scroll-content>\n</ion-infinite-scroll>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/skeletoncards/skeletoncards.component.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/skeletoncards/skeletoncards.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsSkeletoncardsSkeletoncardsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"skeleton__card animateIn\">\n  <ion-card mode=\"ios\" *ngFor=\"let i of [1,1,1,1,1,1]\">\n    <ion-card-content>\n      <ion-spinner  color=\"primary\"></ion-spinner>\n    </ion-card-content>\n  </ion-card>\n</section>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/skeletonexplore/skeletonexplore.component.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/skeletonexplore/skeletonexplore.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsSkeletonexploreSkeletonexploreComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-list class=\"animateIn\">\n  <ion-item *ngFor=\"let i of [1,1,1,1,1,1,1,1,1]\">\n    <ion-label>\n      <ion-skeleton-text style=\"width: 90%; height: 10px;\"></ion-skeleton-text>\n      <p>\n        <ion-skeleton-text style=\"width: 30%; height: 10px;\"></ion-skeleton-text>\n      </p>\n    </ion-label>\n  </ion-item>\n</ion-list>";
      /***/
    },

    /***/
    "./src/app/components/banner-read/banner-read.component.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/components/banner-read/banner-read.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsBannerReadBannerReadComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container__title__banner {\n  padding-top: 10px;\n}\n\n.container__title__banner h1, p {\n  font-weight: 400;\n  font-family: ubuntu;\n  margin-top: 2px;\n  margin-left: -30px !important;\n}\n\n.container__title__banner h1 {\n  font-size: 20px;\n}\n\n.container__title__banner p {\n  font-size: 14px;\n}\n\n.container__banner__image {\n  height: 260px;\n  max-height: 300px;\n  max-width: 400px !important;\n}\n\n.container__banner__image ion-img {\n  width: inherit !important;\n}\n\n.container__buttons ion-button {\n  width: 160px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYW5uZXItcmVhZC9iYW5uZXItcmVhZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGlCQUFBO0FBQUo7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtBQUFKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFubmVyLXJlYWQvYmFubmVyLXJlYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgXG4uY29udGFpbmVyX190aXRsZV9fYmFubmVye1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLmNvbnRhaW5lcl9fdGl0bGVfX2Jhbm5lciBoMSxwe1xuICAgIGZvbnQtd2VpZ2h0OjQwMDtcbiAgICBmb250LWZhbWlseTogdWJ1bnR1OyBcbiAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0zMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXJfX3RpdGxlX19iYW5uZXIgaDF7XG4gICAgZm9udC1zaXplOjIwcHg7XG59XG5cbi5jb250YWluZXJfX3RpdGxlX19iYW5uZXIgcHtcbiAgICBmb250LXNpemU6MTRweDtcbiAgICBcbn1cblxuLmNvbnRhaW5lcl9fYmFubmVyX19pbWFnZXtcbiAgICBoZWlnaHQ6IDI2MHB4O1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIG1heC13aWR0aDogNDAwcHggIWltcG9ydGFudDtcbn1cbi5jb250YWluZXJfX2Jhbm5lcl9faW1hZ2UgaW9uLWltZ3tcbiAgICB3aWR0aDppbmhlcml0ICFpbXBvcnRhbnQ7XG59XG4uY29udGFpbmVyX19idXR0b25zIGlvbi1idXR0b257XG4gICAgd2lkdGg6IDE2MHB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/banner-read/banner-read.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/components/banner-read/banner-read.component.ts ***!
      \*****************************************************************/

    /*! exports provided: BannerReadComponent */

    /***/
    function srcAppComponentsBannerReadBannerReadComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BannerReadComponent", function () {
        return BannerReadComponent;
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

      var BannerReadComponent = /*#__PURE__*/function () {
        function BannerReadComponent(router) {
          _classCallCheck(this, BannerReadComponent);

          this.router = router;
        }

        _createClass(BannerReadComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "explore",
          value: function explore() {
            this.router.navigate(["/home/explore"]);
          }
        }]);

        return BannerReadComponent;
      }();

      BannerReadComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      BannerReadComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-banner-read',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./banner-read.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/banner-read/banner-read.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./banner-read.component.scss */
        "./src/app/components/banner-read/banner-read.component.scss"))["default"]]
      })], BannerReadComponent);
      /***/
    },

    /***/
    "./src/app/components/book/book.component.scss":
    /*!*****************************************************!*\
      !*** ./src/app/components/book/book.component.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsBookBookComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  width: 200px;\n  min-height: 200px;\n  padding: 0 !important;\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n  background-color: azure;\n  border-radius: 6px !important;\n}\n\nion-img {\n  border-radius: 5px !important;\n}\n\nion-slide {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib29rL2Jvb2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBQ0E7RUFDSSw2QkFBQTtBQUVKOztBQUNBO0VBQ0kseUJBQUE7RUFDQSwwQkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ib29rL2Jvb2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIGN1cnNvcjpncmFiYmluZztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudFxufVxuaW9uLWltZ3tcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudFxufVxuXG5pb24tc2xpZGV7XG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/book/book.component.ts":
    /*!***************************************************!*\
      !*** ./src/app/components/book/book.component.ts ***!
      \***************************************************/

    /*! exports provided: BookComponent */

    /***/
    function srcAppComponentsBookBookComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookComponent", function () {
        return BookComponent;
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

      var BookComponent = /*#__PURE__*/function () {
        function BookComponent(service) {
          _classCallCheck(this, BookComponent);

          this.service = service;
          this.elements = [];
          this.start = 0;
          this.end = 8;
          this.opts = {
            slidesPerView: 3.3,
            freeMode: true,
            spaceBetween: -7
          };
        }

        _createClass(BookComponent, [{
          key: "watch",
          value: function watch(data) {
            this.service.openToBook(data);
          }
        }]);

        return BookComponent;
      }();

      BookComponent.ctorParameters = function () {
        return [{
          type: src_app_services_service_book__WEBPACK_IMPORTED_MODULE_2__["BookService"]
        }];
      };

      BookComponent.propDecorators = {
        elements: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        start: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        end: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      BookComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-book',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./book.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/book/book.component.html"))["default"],
        providers: [src_app_services_service_book__WEBPACK_IMPORTED_MODULE_2__["BookService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./book.component.scss */
        "./src/app/components/book/book.component.scss"))["default"]]
      })], BookComponent);
      /***/
    },

    /***/
    "./src/app/components/components.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/components/components.module.ts ***!
      \*************************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
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


      var _book_book_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./book/book.component */
      "./src/app/components/book/book.component.ts");
      /* harmony import */


      var _showexplore_showexplore_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./showexplore/showexplore.component */
      "./src/app/components/showexplore/showexplore.component.ts");
      /* harmony import */


      var _skeletonexplore_skeletonexplore_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./skeletonexplore/skeletonexplore.component */
      "./src/app/components/skeletonexplore/skeletonexplore.component.ts");
      /* harmony import */


      var _showcards_showcards_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./showcards/showcards.component */
      "./src/app/components/showcards/showcards.component.ts");
      /* harmony import */


      var _skeletoncards_skeletoncards_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./skeletoncards/skeletoncards.component */
      "./src/app/components/skeletoncards/skeletoncards.component.ts");
      /* harmony import */


      var _showbook_showbook_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./showbook/showbook.component */
      "./src/app/components/showbook/showbook.component.ts");
      /* harmony import */


      var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../pipes/search.pipe */
      "./src/app/pipes/search.pipe.ts");
      /* harmony import */


      var _banner_read_banner_read_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./banner-read/banner-read.component */
      "./src/app/components/banner-read/banner-read.component.ts");

      var ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_book_book_component__WEBPACK_IMPORTED_MODULE_3__["BookComponent"], _showexplore_showexplore_component__WEBPACK_IMPORTED_MODULE_4__["ShowexploreComponent"], _skeletonexplore_skeletonexplore_component__WEBPACK_IMPORTED_MODULE_5__["SkeletonexploreComponent"], _showcards_showcards_component__WEBPACK_IMPORTED_MODULE_6__["ShowcardsComponent"], _skeletoncards_skeletoncards_component__WEBPACK_IMPORTED_MODULE_7__["SkeletoncardsComponent"], _showbook_showbook_component__WEBPACK_IMPORTED_MODULE_8__["ShowbookComponent"], _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_9__["SearchPipe"], _banner_read_banner_read_component__WEBPACK_IMPORTED_MODULE_10__["BannerReadComponent"]],
        exports: [_book_book_component__WEBPACK_IMPORTED_MODULE_3__["BookComponent"], _showexplore_showexplore_component__WEBPACK_IMPORTED_MODULE_4__["ShowexploreComponent"], _skeletonexplore_skeletonexplore_component__WEBPACK_IMPORTED_MODULE_5__["SkeletonexploreComponent"], _showcards_showcards_component__WEBPACK_IMPORTED_MODULE_6__["ShowcardsComponent"], _skeletoncards_skeletoncards_component__WEBPACK_IMPORTED_MODULE_7__["SkeletoncardsComponent"], _showbook_showbook_component__WEBPACK_IMPORTED_MODULE_8__["ShowbookComponent"], _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_9__["SearchPipe"], _banner_read_banner_read_component__WEBPACK_IMPORTED_MODULE_10__["BannerReadComponent"]]
      })], ComponentsModule);
      /***/
    },

    /***/
    "./src/app/components/showcards/showcards.component.scss":
    /*!***************************************************************!*\
      !*** ./src/app/components/showcards/showcards.component.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsShowcardsShowcardsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".grid__cards {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.grid__cards ion-card {\n  width: 125px;\n  margin: 8px 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG93Y2FyZHMvc2hvd2NhcmRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvd2NhcmRzL3Nob3djYXJkcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbi5ncmlkX19jYXJkc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtd3JhcDp3cmFwO1xufVxuLmdyaWRfX2NhcmRzICBpb24tY2FyZHtcbiAgICB3aWR0aDogMTI1cHg7XG4gICAgbWFyZ2luOiA4cHggOHB4IFxufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/components/showcards/showcards.component.ts":
    /*!*************************************************************!*\
      !*** ./src/app/components/showcards/showcards.component.ts ***!
      \*************************************************************/

    /*! exports provided: ShowcardsComponent */

    /***/
    function srcAppComponentsShowcardsShowcardsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowcardsComponent", function () {
        return ShowcardsComponent;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var src_app_services_service_book__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/service.book */
      "./src/app/services/service.book.ts");

      var ShowcardsComponent = /*#__PURE__*/function () {
        function ShowcardsComponent(service) {
          _classCallCheck(this, ShowcardsComponent);

          this.service = service;
          this.elements = [];
          this.end = 8;
        }

        _createClass(ShowcardsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "watch",
          value: function watch(data) {
            this.service.openToBook(data);
          }
        }, {
          key: "more",
          value: function more(event) {
            var _this = this;

            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(500).subscribe(function () {
              _this.end += 6;
              event.target.complete();
            });
          }
        }]);

        return ShowcardsComponent;
      }();

      ShowcardsComponent.ctorParameters = function () {
        return [{
          type: src_app_services_service_book__WEBPACK_IMPORTED_MODULE_3__["BookService"]
        }];
      };

      ShowcardsComponent.propDecorators = {
        elements: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      ShowcardsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-showcards',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./showcards.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/showcards/showcards.component.html"))["default"],
        providers: [src_app_services_service_book__WEBPACK_IMPORTED_MODULE_3__["BookService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./showcards.component.scss */
        "./src/app/components/showcards/showcards.component.scss"))["default"]]
      })], ShowcardsComponent);
      /***/
    },

    /***/
    "./src/app/components/showexplore/showexplore.component.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/components/showexplore/showexplore.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsShowexploreShowexploreComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item:hover {\n  transform: scale(0.8) !important;\n  transition: 0.2s;\n}\n\n.container__category {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.card__category {\n  width: 240px;\n  cursor: pointer;\n  height: 90px;\n  margin: 10px;\n  padding: 10px;\n  box-shadow: 1px 3px 3px #cecbcb;\n  border-radius: 14px;\n}\n\n.card__category h1 {\n  font-size: 16px;\n  margin: 0;\n}\n\n.card__category p {\n  color: #eee;\n  font-size: 14px;\n}\n\n.card__category p {\n  color: #999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG93ZXhwbG9yZS9zaG93ZXhwbG9yZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUVJLFdBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvd2V4cGxvcmUvc2hvd2V4cGxvcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbTpob3ZlcntcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC44KSAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IC4ycztcbn1cblxuLmNvbnRhaW5lcl9fY2F0ZWdvcnl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgXG59XG5cbi5jYXJkX19jYXRlZ29yeXtcbiAgICB3aWR0aDogMjQwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGhlaWdodDogOTBweDtcbiAgICBtYXJnaW46MTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDFweCAzcHggM3B4IHJnYigyMDYsIDIwMywgMjAzKTtcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4OyAgICBcbn1cbi5jYXJkX19jYXRlZ29yeSBoMXtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiAwO1xuXG59XG4uY2FyZF9fY2F0ZWdvcnkgcHtcbiAgICBjb2xvcjojZWVlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNhcmRfX2NhdGVnb3J5IHB7XG4gICAgLy8gZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjOTk5O1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/showexplore/showexplore.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/components/showexplore/showexplore.component.ts ***!
      \*****************************************************************/

    /*! exports provided: ShowexploreComponent */

    /***/
    function srcAppComponentsShowexploreShowexploreComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowexploreComponent", function () {
        return ShowexploreComponent;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var ShowexploreComponent = /*#__PURE__*/function () {
        function ShowexploreComponent(routing) {
          _classCallCheck(this, ShowexploreComponent);

          this.routing = routing;
          this.elements = [];
          this.textInput = '';
          this.start = 0;
          this.end = 70;
        }

        _createClass(ShowexploreComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.timingMore.unsubscribe();
            this.timingRouter.unsubscribe();
          }
        }, {
          key: "more",
          value: function more(event) {
            var _this2 = this;

            this.timingMore = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(500).subscribe(function () {
              _this2.end += 10;
              event.target.complete();
            });
          }
        }, {
          key: "navigateTo",
          value: function navigateTo(route) {
            var _this3 = this;

            this.timingRouter = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(90).subscribe(function () {
              _this3.routing.navigate(["/home/explore/", route]);
            });
          }
        }]);

        return ShowexploreComponent;
      }();

      ShowexploreComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      ShowexploreComponent.propDecorators = {
        elements: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        textInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      ShowexploreComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-showexplore',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./showexplore.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/showexplore/showexplore.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./showexplore.component.scss */
        "./src/app/components/showexplore/showexplore.component.scss"))["default"]]
      })], ShowexploreComponent);
      /***/
    },

    /***/
    "./src/app/components/skeletoncards/skeletoncards.component.scss":
    /*!***********************************************************************!*\
      !*** ./src/app/components/skeletoncards/skeletoncards.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsSkeletoncardsSkeletoncardsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".skeleton__card {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.skeleton__card ion-card {\n  width: 120px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 190px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9za2VsZXRvbmNhcmRzL3NrZWxldG9uY2FyZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBQ0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NrZWxldG9uY2FyZHMvc2tlbGV0b25jYXJkcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5za2VsZXRvbl9fY2FyZHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuICAuc2tlbGV0b25fX2NhcmQgaW9uLWNhcmR7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDE5MHB4O1xuICB9Il19 */";
      /***/
    },

    /***/
    "./src/app/components/skeletoncards/skeletoncards.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/components/skeletoncards/skeletoncards.component.ts ***!
      \*********************************************************************/

    /*! exports provided: SkeletoncardsComponent */

    /***/
    function srcAppComponentsSkeletoncardsSkeletoncardsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkeletoncardsComponent", function () {
        return SkeletoncardsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var SkeletoncardsComponent = /*#__PURE__*/function () {
        function SkeletoncardsComponent() {
          _classCallCheck(this, SkeletoncardsComponent);
        }

        _createClass(SkeletoncardsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SkeletoncardsComponent;
      }();

      SkeletoncardsComponent.ctorParameters = function () {
        return [];
      };

      SkeletoncardsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skeletoncards',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./skeletoncards.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/skeletoncards/skeletoncards.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./skeletoncards.component.scss */
        "./src/app/components/skeletoncards/skeletoncards.component.scss"))["default"]]
      })], SkeletoncardsComponent);
      /***/
    },

    /***/
    "./src/app/components/skeletonexplore/skeletonexplore.component.scss":
    /*!***************************************************************************!*\
      !*** ./src/app/components/skeletonexplore/skeletonexplore.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsSkeletonexploreSkeletonexploreComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-skeleton-text {\n  border-radius: 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9za2VsZXRvbmV4cGxvcmUvc2tlbGV0b25leHBsb3JlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2tlbGV0b25leHBsb3JlL3NrZWxldG9uZXhwbG9yZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1za2VsZXRvbi10ZXh0e1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/skeletonexplore/skeletonexplore.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/components/skeletonexplore/skeletonexplore.component.ts ***!
      \*************************************************************************/

    /*! exports provided: SkeletonexploreComponent */

    /***/
    function srcAppComponentsSkeletonexploreSkeletonexploreComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkeletonexploreComponent", function () {
        return SkeletonexploreComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var SkeletonexploreComponent = /*#__PURE__*/function () {
        function SkeletonexploreComponent() {
          _classCallCheck(this, SkeletonexploreComponent);
        }

        _createClass(SkeletonexploreComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SkeletonexploreComponent;
      }();

      SkeletonexploreComponent.ctorParameters = function () {
        return [];
      };

      SkeletonexploreComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skeletonexplore',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./skeletonexplore.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/skeletonexplore/skeletonexplore.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./skeletonexplore.component.scss */
        "./src/app/components/skeletonexplore/skeletonexplore.component.scss"))["default"]]
      })], SkeletonexploreComponent);
      /***/
    },

    /***/
    "./src/app/pipes/search.pipe.ts":
    /*!**************************************!*\
      !*** ./src/app/pipes/search.pipe.ts ***!
      \**************************************/

    /*! exports provided: SearchPipe */

    /***/
    function srcAppPipesSearchPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchPipe", function () {
        return SearchPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var SearchPipe = /*#__PURE__*/function () {
        function SearchPipe() {
          _classCallCheck(this, SearchPipe);
        }

        _createClass(SearchPipe, [{
          key: "transform",
          value: function transform(books, x, text) {
            return books.filter(function (resp) {
              if (books) return resp.display_name.toLocaleLowerCase().includes(text.toLocaleLowerCase());else return books;
            });
          }
        }]);

        return SearchPipe;
      }();

      SearchPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'searchbook'
      })], SearchPipe);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~books-books-module~explore-explore-module~exploreshow-exploreshow-module~pages-books-books-m~494a88a6-es5.js.map