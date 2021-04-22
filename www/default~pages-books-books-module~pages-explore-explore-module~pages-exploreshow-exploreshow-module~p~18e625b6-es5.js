(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-books-books-module~pages-explore-explore-module~pages-exploreshow-exploreshow-module~p~18e625b6"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/showbook/showbook.component.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/showbook/showbook.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsShowbookShowbookComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" color=\"tertiary\">\n    <ion-title class=\"animateIn\"> {{ data.title }}</ion-title>\n\n    <ion-buttons mode=\"md\" slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <section class=\"toolbarBook animateIn\">\n\n    <article class=\"containerPoster animateIn\" >\n      <ion-img [src]=\"data.book_image\"></ion-img>\n    </article>\n  \n  \n    <article class=\"containerDescription\">\n      <p>{{ data.description }}</p>\n    </article>\n  </section>\n\n  \n\n  <ion-list>\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"thumbs-up-outline\"></ion-icon>\n      <ion-label>Rank</ion-label>\n      <ion-note> +{{ data.rank }}<ion-icon name=\"thumbs-up-outline\"></ion-icon></ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"person-outline\"></ion-icon>\n      <ion-label>Author</ion-label>\n      <ion-note>{{ data.author }}</ion-note>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"business-outline\"></ion-icon>\n      <ion-label>Publisher</ion-label>\n      <ion-note>{{ data.publisher }}</ion-note>\n    </ion-item>\n\n\n    \n    <ion-button mode=\"ios\" expand=\"block\" color=\"tertiary\"> <ion-ripple-effect></ion-ripple-effect>\n    <a target=\"true\" style=\"text-decoration: none !important; color:white\" color=\"light\" [href]=\"data.amazon_product_url\">Open on Amazon</a></ion-button>\n     \n  </ion-list>\n\n  <ion-fab slot=\"fixed\" horizontal=\"end\" vertical=\"bottom\">\n\n    <ion-fab-button color=\"tertiary\">\n      <ion-icon name=\"cart-outline\"></ion-icon> \n    </ion-fab-button>\n\n    <ion-fab-list side=\"top\">\n      <ion-fab-button color=\"danger\" > <a target=\"true\" [href]=\"data.buy_links[0].url\"><ion-icon slot=\"icon-only\" color=\"light\" name=\"logo-amazon\"></ion-icon></a></ion-fab-button>\n      <ion-fab-button color=\"danger\" > <a target=\"true\" [href]=\"data.buy_links[1].url\"><ion-icon color=\"light\" name=\"logo-apple\"></ion-icon></a></ion-fab-button>\n\n      <ion-fab-button color=\"danger\" > <a target=\"true\" [href]=\"data.buy_links[2].url\"><ion-icon color=\"light\" name=\"bag\"></ion-icon></a></ion-fab-button>\n      <ion-fab-button color=\"danger\" > <a target=\"true\" [href]=\"data.buy_links[3].url\"><ion-icon color=\"light\" name=\"bag\"></ion-icon></a></ion-fab-button>\n      <ion-fab-button color=\"danger\" > <a target=\"true\" [href]=\"data.buy_links[4].url\"><ion-icon color=\"light\" name=\"bag\"></ion-icon></a></ion-fab-button>\n      <ion-fab-button color=\"danger\" > <a target=\"true\" [href]=\"data.buy_links[5].url\"><ion-icon color=\"light\" name=\"bag\"></ion-icon></a></ion-fab-button>   \n    </ion-fab-list>\n  </ion-fab>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/rxjs/_esm2015/ajax/index.js":
    /*!**************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/ajax/index.js ***!
      \**************************************************/

    /*! exports provided: ajax, AjaxResponse, AjaxError, AjaxTimeoutError */

    /***/
    function node_modulesRxjs_esm2015AjaxIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _internal_observable_dom_ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../internal/observable/dom/ajax */
      "./node_modules/rxjs/_esm2015/internal/observable/dom/ajax.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ajax", function () {
        return _internal_observable_dom_ajax__WEBPACK_IMPORTED_MODULE_0__["ajax"];
      });
      /* harmony import */


      var _internal_observable_dom_AjaxObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../internal/observable/dom/AjaxObservable */
      "./node_modules/rxjs/_esm2015/internal/observable/dom/AjaxObservable.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AjaxResponse", function () {
        return _internal_observable_dom_AjaxObservable__WEBPACK_IMPORTED_MODULE_1__["AjaxResponse"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AjaxError", function () {
        return _internal_observable_dom_AjaxObservable__WEBPACK_IMPORTED_MODULE_1__["AjaxError"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AjaxTimeoutError", function () {
        return _internal_observable_dom_AjaxObservable__WEBPACK_IMPORTED_MODULE_1__["AjaxTimeoutError"];
      }); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "./node_modules/rxjs/_esm2015/internal/observable/dom/AjaxObservable.js":
    /*!******************************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/observable/dom/AjaxObservable.js ***!
      \******************************************************************************/

    /*! exports provided: ajaxGet, ajaxPost, ajaxDelete, ajaxPut, ajaxPatch, ajaxGetJSON, AjaxObservable, AjaxSubscriber, AjaxResponse, AjaxError, AjaxTimeoutError */

    /***/
    function node_modulesRxjs_esm2015InternalObservableDomAjaxObservableJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ajaxGet", function () {
        return ajaxGet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ajaxPost", function () {
        return ajaxPost;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ajaxDelete", function () {
        return ajaxDelete;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ajaxPut", function () {
        return ajaxPut;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ajaxPatch", function () {
        return ajaxPatch;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ajaxGetJSON", function () {
        return ajaxGetJSON;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AjaxObservable", function () {
        return AjaxObservable;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AjaxSubscriber", function () {
        return AjaxSubscriber;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AjaxResponse", function () {
        return AjaxResponse;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AjaxError", function () {
        return AjaxError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AjaxTimeoutError", function () {
        return AjaxTimeoutError;
      });
      /* harmony import */


      var _util_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../util/root */
      "./node_modules/rxjs/_esm2015/internal/util/root.js");
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../Observable */
      "./node_modules/rxjs/_esm2015/internal/Observable.js");
      /* harmony import */


      var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../Subscriber */
      "./node_modules/rxjs/_esm2015/internal/Subscriber.js");
      /* harmony import */


      var _operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../operators/map */
      "./node_modules/rxjs/_esm2015/internal/operators/map.js");

      function getCORSRequest() {
        if (_util_root__WEBPACK_IMPORTED_MODULE_0__["root"].XMLHttpRequest) {
          return new _util_root__WEBPACK_IMPORTED_MODULE_0__["root"].XMLHttpRequest();
        } else if (!!_util_root__WEBPACK_IMPORTED_MODULE_0__["root"].XDomainRequest) {
          return new _util_root__WEBPACK_IMPORTED_MODULE_0__["root"].XDomainRequest();
        } else {
          throw new Error('CORS is not supported by your browser');
        }
      }

      function getXMLHttpRequest() {
        if (_util_root__WEBPACK_IMPORTED_MODULE_0__["root"].XMLHttpRequest) {
          return new _util_root__WEBPACK_IMPORTED_MODULE_0__["root"].XMLHttpRequest();
        } else {
          var progId;

          try {
            var progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'];

            for (var i = 0; i < 3; i++) {
              try {
                progId = progIds[i];

                if (new _util_root__WEBPACK_IMPORTED_MODULE_0__["root"].ActiveXObject(progId)) {
                  break;
                }
              } catch (e) {}
            }

            return new _util_root__WEBPACK_IMPORTED_MODULE_0__["root"].ActiveXObject(progId);
          } catch (e) {
            throw new Error('XMLHttpRequest is not supported by your browser');
          }
        }
      }

      function ajaxGet(url) {
        var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        return new AjaxObservable({
          method: 'GET',
          url: url,
          headers: headers
        });
      }

      function ajaxPost(url, body, headers) {
        return new AjaxObservable({
          method: 'POST',
          url: url,
          body: body,
          headers: headers
        });
      }

      function ajaxDelete(url, headers) {
        return new AjaxObservable({
          method: 'DELETE',
          url: url,
          headers: headers
        });
      }

      function ajaxPut(url, body, headers) {
        return new AjaxObservable({
          method: 'PUT',
          url: url,
          body: body,
          headers: headers
        });
      }

      function ajaxPatch(url, body, headers) {
        return new AjaxObservable({
          method: 'PATCH',
          url: url,
          body: body,
          headers: headers
        });
      }

      var mapResponse = Object(_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x, index) {
        return x.response;
      });

      function ajaxGetJSON(url, headers) {
        return mapResponse(new AjaxObservable({
          method: 'GET',
          url: url,
          responseType: 'json',
          headers: headers
        }));
      }

      var AjaxObservable = /*#__PURE__*/function (_Observable__WEBPACK_) {
        _inherits(AjaxObservable, _Observable__WEBPACK_);

        var _super = _createSuper(AjaxObservable);

        function AjaxObservable(urlOrRequest) {
          var _this;

          _classCallCheck(this, AjaxObservable);

          _this = _super.call(this);
          var request = {
            async: true,
            createXHR: function createXHR() {
              return this.crossDomain ? getCORSRequest() : getXMLHttpRequest();
            },
            crossDomain: true,
            withCredentials: false,
            headers: {},
            method: 'GET',
            responseType: 'json',
            timeout: 0
          };

          if (typeof urlOrRequest === 'string') {
            request.url = urlOrRequest;
          } else {
            for (var prop in urlOrRequest) {
              if (urlOrRequest.hasOwnProperty(prop)) {
                request[prop] = urlOrRequest[prop];
              }
            }
          }

          _this.request = request;
          return _this;
        }

        _createClass(AjaxObservable, [{
          key: "_subscribe",
          value: function _subscribe(subscriber) {
            return new AjaxSubscriber(subscriber, this.request);
          }
        }]);

        return AjaxObservable;
      }(_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]);

      AjaxObservable.create = function () {
        var create = function create(urlOrRequest) {
          return new AjaxObservable(urlOrRequest);
        };

        create.get = ajaxGet;
        create.post = ajaxPost;
        create["delete"] = ajaxDelete;
        create.put = ajaxPut;
        create.patch = ajaxPatch;
        create.getJSON = ajaxGetJSON;
        return create;
      }();

      var AjaxSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_) {
        _inherits(AjaxSubscriber, _Subscriber__WEBPACK_);

        var _super2 = _createSuper(AjaxSubscriber);

        function AjaxSubscriber(destination, request) {
          var _this2;

          _classCallCheck(this, AjaxSubscriber);

          _this2 = _super2.call(this, destination);
          _this2.request = request;
          _this2.done = false;
          var headers = request.headers = request.headers || {};

          if (!request.crossDomain && !_this2.getHeader(headers, 'X-Requested-With')) {
            headers['X-Requested-With'] = 'XMLHttpRequest';
          }

          var contentTypeHeader = _this2.getHeader(headers, 'Content-Type');

          if (!contentTypeHeader && !(_util_root__WEBPACK_IMPORTED_MODULE_0__["root"].FormData && request.body instanceof _util_root__WEBPACK_IMPORTED_MODULE_0__["root"].FormData) && typeof request.body !== 'undefined') {
            headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
          }

          request.body = _this2.serializeBody(request.body, _this2.getHeader(request.headers, 'Content-Type'));

          _this2.send();

          return _this2;
        }

        _createClass(AjaxSubscriber, [{
          key: "next",
          value: function next(e) {
            this.done = true;
            var xhr = this.xhr,
                request = this.request,
                destination = this.destination;
            var result;

            try {
              result = new AjaxResponse(e, xhr, request);
            } catch (err) {
              return destination.error(err);
            }

            destination.next(result);
          }
        }, {
          key: "send",
          value: function send() {
            var request = this.request,
                _this$request = this.request,
                user = _this$request.user,
                method = _this$request.method,
                url = _this$request.url,
                async = _this$request.async,
                password = _this$request.password,
                headers = _this$request.headers,
                body = _this$request.body;

            try {
              var xhr = this.xhr = request.createXHR();
              this.setupEvents(xhr, request);

              if (user) {
                xhr.open(method, url, async, user, password);
              } else {
                xhr.open(method, url, async);
              }

              if (async) {
                xhr.timeout = request.timeout;
                xhr.responseType = request.responseType;
              }

              if ('withCredentials' in xhr) {
                xhr.withCredentials = !!request.withCredentials;
              }

              this.setHeaders(xhr, headers);

              if (body) {
                xhr.send(body);
              } else {
                xhr.send();
              }
            } catch (err) {
              this.error(err);
            }
          }
        }, {
          key: "serializeBody",
          value: function serializeBody(body, contentType) {
            if (!body || typeof body === 'string') {
              return body;
            } else if (_util_root__WEBPACK_IMPORTED_MODULE_0__["root"].FormData && body instanceof _util_root__WEBPACK_IMPORTED_MODULE_0__["root"].FormData) {
              return body;
            }

            if (contentType) {
              var splitIndex = contentType.indexOf(';');

              if (splitIndex !== -1) {
                contentType = contentType.substring(0, splitIndex);
              }
            }

            switch (contentType) {
              case 'application/x-www-form-urlencoded':
                return Object.keys(body).map(function (key) {
                  return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(body[key]));
                }).join('&');

              case 'application/json':
                return JSON.stringify(body);

              default:
                return body;
            }
          }
        }, {
          key: "setHeaders",
          value: function setHeaders(xhr, headers) {
            for (var key in headers) {
              if (headers.hasOwnProperty(key)) {
                xhr.setRequestHeader(key, headers[key]);
              }
            }
          }
        }, {
          key: "getHeader",
          value: function getHeader(headers, headerName) {
            for (var key in headers) {
              if (key.toLowerCase() === headerName.toLowerCase()) {
                return headers[key];
              }
            }

            return undefined;
          }
        }, {
          key: "setupEvents",
          value: function setupEvents(xhr, request) {
            var progressSubscriber = request.progressSubscriber;

            function xhrTimeout(e) {
              var subscriber = xhrTimeout.subscriber,
                  progressSubscriber = xhrTimeout.progressSubscriber,
                  request = xhrTimeout.request;

              if (progressSubscriber) {
                progressSubscriber.error(e);
              }

              var error;

              try {
                error = new AjaxTimeoutError(this, request);
              } catch (err) {
                error = err;
              }

              subscriber.error(error);
            }

            xhr.ontimeout = xhrTimeout;
            xhrTimeout.request = request;
            xhrTimeout.subscriber = this;
            xhrTimeout.progressSubscriber = progressSubscriber;

            if (xhr.upload && 'withCredentials' in xhr) {
              if (progressSubscriber) {
                var _xhrProgress2;

                _xhrProgress2 = function xhrProgress(e) {
                  var _xhrProgress = _xhrProgress2,
                      progressSubscriber = _xhrProgress.progressSubscriber;
                  progressSubscriber.next(e);
                };

                if (_util_root__WEBPACK_IMPORTED_MODULE_0__["root"].XDomainRequest) {
                  xhr.onprogress = _xhrProgress2;
                } else {
                  xhr.upload.onprogress = _xhrProgress2;
                }

                _xhrProgress2.progressSubscriber = progressSubscriber;
              }

              var _xhrError2;

              _xhrError2 = function xhrError(e) {
                var _xhrError = _xhrError2,
                    progressSubscriber = _xhrError.progressSubscriber,
                    subscriber = _xhrError.subscriber,
                    request = _xhrError.request;

                if (progressSubscriber) {
                  progressSubscriber.error(e);
                }

                var error;

                try {
                  error = new AjaxError('ajax error', this, request);
                } catch (err) {
                  error = err;
                }

                subscriber.error(error);
              };

              xhr.onerror = _xhrError2;
              _xhrError2.request = request;
              _xhrError2.subscriber = this;
              _xhrError2.progressSubscriber = progressSubscriber;
            }

            function xhrReadyStateChange(e) {
              return;
            }

            xhr.onreadystatechange = xhrReadyStateChange;
            xhrReadyStateChange.subscriber = this;
            xhrReadyStateChange.progressSubscriber = progressSubscriber;
            xhrReadyStateChange.request = request;

            function xhrLoad(e) {
              var subscriber = xhrLoad.subscriber,
                  progressSubscriber = xhrLoad.progressSubscriber,
                  request = xhrLoad.request;

              if (this.readyState === 4) {
                var status = this.status === 1223 ? 204 : this.status;
                var response = this.responseType === 'text' ? this.response || this.responseText : this.response;

                if (status === 0) {
                  status = response ? 200 : 0;
                }

                if (status < 400) {
                  if (progressSubscriber) {
                    progressSubscriber.complete();
                  }

                  subscriber.next(e);
                  subscriber.complete();
                } else {
                  if (progressSubscriber) {
                    progressSubscriber.error(e);
                  }

                  var error;

                  try {
                    error = new AjaxError('ajax error ' + status, this, request);
                  } catch (err) {
                    error = err;
                  }

                  subscriber.error(error);
                }
              }
            }

            xhr.onload = xhrLoad;
            xhrLoad.subscriber = this;
            xhrLoad.progressSubscriber = progressSubscriber;
            xhrLoad.request = request;
          }
        }, {
          key: "unsubscribe",
          value: function unsubscribe() {
            var done = this.done,
                xhr = this.xhr;

            if (!done && xhr && xhr.readyState !== 4 && typeof xhr.abort === 'function') {
              xhr.abort();
            }

            _get(_getPrototypeOf(AjaxSubscriber.prototype), "unsubscribe", this).call(this);
          }
        }]);

        return AjaxSubscriber;
      }(_Subscriber__WEBPACK_IMPORTED_MODULE_2__["Subscriber"]);

      var AjaxResponse = function AjaxResponse(originalEvent, xhr, request) {
        _classCallCheck(this, AjaxResponse);

        this.originalEvent = originalEvent;
        this.xhr = xhr;
        this.request = request;
        this.status = xhr.status;
        this.responseType = xhr.responseType || request.responseType;
        this.response = parseXhrResponse(this.responseType, xhr);
      };

      var AjaxErrorImpl = function () {
        function AjaxErrorImpl(message, xhr, request) {
          Error.call(this);
          this.message = message;
          this.name = 'AjaxError';
          this.xhr = xhr;
          this.request = request;
          this.status = xhr.status;
          this.responseType = xhr.responseType || request.responseType;
          this.response = parseXhrResponse(this.responseType, xhr);
          return this;
        }

        AjaxErrorImpl.prototype = Object.create(Error.prototype);
        return AjaxErrorImpl;
      }();

      var AjaxError = AjaxErrorImpl;

      function parseJson(xhr) {
        if ('response' in xhr) {
          return xhr.responseType ? xhr.response : JSON.parse(xhr.response || xhr.responseText || 'null');
        } else {
          return JSON.parse(xhr.responseText || 'null');
        }
      }

      function parseXhrResponse(responseType, xhr) {
        switch (responseType) {
          case 'json':
            return parseJson(xhr);

          case 'xml':
            return xhr.responseXML;

          case 'text':
          default:
            return 'response' in xhr ? xhr.response : xhr.responseText;
        }
      }

      function AjaxTimeoutErrorImpl(xhr, request) {
        AjaxError.call(this, 'ajax timeout', xhr, request);
        this.name = 'AjaxTimeoutError';
        return this;
      }

      var AjaxTimeoutError = AjaxTimeoutErrorImpl; //# sourceMappingURL=AjaxObservable.js.map

      /***/
    },

    /***/
    "./node_modules/rxjs/_esm2015/internal/observable/dom/ajax.js":
    /*!********************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/observable/dom/ajax.js ***!
      \********************************************************************/

    /*! exports provided: ajax */

    /***/
    function node_modulesRxjs_esm2015InternalObservableDomAjaxJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ajax", function () {
        return ajax;
      });
      /* harmony import */


      var _AjaxObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AjaxObservable */
      "./node_modules/rxjs/_esm2015/internal/observable/dom/AjaxObservable.js");

      var ajax = function () {
        return _AjaxObservable__WEBPACK_IMPORTED_MODULE_0__["AjaxObservable"].create;
      }(); //# sourceMappingURL=ajax.js.map

      /***/

    },

    /***/
    "./node_modules/rxjs/_esm2015/internal/util/root.js":
    /*!**********************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/util/root.js ***!
      \**********************************************************/

    /*! exports provided: root */

    /***/
    function node_modulesRxjs_esm2015InternalUtilRootJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "root", function () {
        return _root;
      });

      var __window = typeof window !== 'undefined' && window;

      var __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope && self;

      var __global = typeof global !== 'undefined' && global;

      var _root = __window || __global || __self;

      (function () {
        if (!_root) {
          throw new Error('RxJS could not find any global context (window, self, global)');
        }
      })(); //# sourceMappingURL=root.js.map

      /***/

    },

    /***/
    "./src/app/components/showbook/showbook.component.scss":
    /*!*************************************************************!*\
      !*** ./src/app/components/showbook/showbook.component.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsShowbookShowbookComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".containerPoster {\n  height: 300px !important;\n  width: 100% !important;\n  padding: 2px;\n}\n\n.containerPoster ion-img {\n  height: inherit !important;\n  border-radius: 5px !important;\n}\n\n.containerDescription {\n  margin: 10px 0;\n}\n\n.containerDescription p {\n  padding: 20px;\n  font-family: arial;\n  font-size: 18px;\n  line-height: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG93Ym9vay9zaG93Ym9vay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQUo7O0FBRUE7RUFDSSwwQkFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBR0E7RUFDSSxjQUFBO0FBQUo7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvd2Jvb2svc2hvd2Jvb2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jb250YWluZXJQb3N0ZXJ7XG4gICAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMnB4O1xufVxuLmNvbnRhaW5lclBvc3RlciBpb24taW1ne1xuICAgIGhlaWdodDogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xufVxuXG5cbi5jb250YWluZXJEZXNjcmlwdGlvbntcbiAgICBtYXJnaW46IDEwcHggMDtcbn1cbi5jb250YWluZXJEZXNjcmlwdGlvbiBwIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OmFyaWFsO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/showbook/showbook.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/components/showbook/showbook.component.ts ***!
      \***********************************************************/

    /*! exports provided: ShowbookComponent */

    /***/
    function srcAppComponentsShowbookShowbookComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowbookComponent", function () {
        return ShowbookComponent;
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

      var ShowbookComponent = /*#__PURE__*/function () {
        function ShowbookComponent(modalclose) {
          _classCallCheck(this, ShowbookComponent);

          this.modalclose = modalclose;
          this.data = null;
        }

        _createClass(ShowbookComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "back",
          value: function back() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.modalclose.dismiss();

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return ShowbookComponent;
      }();

      ShowbookComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
      };

      ShowbookComponent.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      ShowbookComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-showbook',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./showbook.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/showbook/showbook.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./showbook.component.scss */
        "./src/app/components/showbook/showbook.component.scss"))["default"]]
      })], ShowbookComponent);
      /***/
    },

    /***/
    "./src/app/services/service.book.ts":
    /*!******************************************!*\
      !*** ./src/app/services/service.book.ts ***!
      \******************************************/

    /*! exports provided: BookService */

    /***/
    function srcAppServicesServiceBookTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookService", function () {
        return BookService;
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


      var rxjs_ajax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/ajax */
      "./node_modules/rxjs/_esm2015/ajax/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _components_showbook_showbook_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../components/showbook/showbook.component */
      "./src/app/components/showbook/showbook.component.ts");

      var BookService = /*#__PURE__*/function () {
        function BookService(modalBook) {
          _classCallCheck(this, BookService);

          this.modalBook = modalBook;
          this.URIS = {
            fiction: 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=sdhSG0pykGfZapSGRETrFICnu7GMWYY6',
            nofiction: 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?api-key=sdhSG0pykGfZapSGRETrFICnu7GMWYY6',
            history: 'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=sdhSG0pykGfZapSGRETrFICnu7GMWYY6',
            lists: 'https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=sdhSG0pykGfZapSGRETrFICnu7GMWYY6',
            foryou: 'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?title&api-key=sdhSG0pykGfZapSGRETrFICnu7GMWYY6'
          };
        }

        _createClass(BookService, [{
          key: "openToBook",
          value: function openToBook(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var bookmodal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalBook.create({
                        component: _components_showbook_showbook_component__WEBPACK_IMPORTED_MODULE_5__["ShowbookComponent"],
                        componentProps: {
                          data: data
                        }
                      });

                    case 2:
                      bookmodal = _context2.sent;
                      bookmodal.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getByList",
          value: function getByList() {
            return rxjs_ajax__WEBPACK_IMPORTED_MODULE_3__["ajax"].get(this.URIS.lists).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])("response"), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(1000));
          }
        }, {
          key: "getAllLists",
          value: function getAllLists(id) {
            return rxjs_ajax__WEBPACK_IMPORTED_MODULE_3__["ajax"].get("https://api.nytimes.com/svc/books/v3/lists/current/".concat(id, ".json?api-key=sdhSG0pykGfZapSGRETrFICnu7GMWYY6")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])("response"), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(1000));
          }
        }, {
          key: "getFictionBooks",
          value: function getFictionBooks() {
            return rxjs_ajax__WEBPACK_IMPORTED_MODULE_3__["ajax"].get(this.URIS.fiction).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])("response"), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(2000));
          }
        }, {
          key: "getNoFictionBooks",
          value: function getNoFictionBooks() {
            return rxjs_ajax__WEBPACK_IMPORTED_MODULE_3__["ajax"].get(this.URIS.nofiction).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])("response"), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(2000));
          }
        }, {
          key: "forYou",
          value: function forYou() {
            return rxjs_ajax__WEBPACK_IMPORTED_MODULE_3__["ajax"].get(this.URIS.foryou).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])("response"), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(2000));
          }
        }]);

        return BookService;
      }();

      BookService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
      };

      BookService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], BookService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~pages-books-books-module~pages-explore-explore-module~pages-exploreshow-exploreshow-module~p~18e625b6-es5.js.map