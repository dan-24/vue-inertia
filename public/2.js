(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "dashboard" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-xl-3 col-sm-6 grid-margin stretch-card" },
          [
            _c("div", { staticClass: "card card-statistics" }, [
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "div",
                  { staticClass: "d-flex justify-content-between flex-wrap" },
                  [
                    _c("div", [
                      _c("i", {
                        staticClass: "mdi mdi-cube text-danger icon-lg"
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c("p", { staticClass: "card-text text-right" }, [
                        _vm._v("Total Revenue")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "fluid-container" }, [
                        _c(
                          "h3",
                          {
                            staticClass:
                              "card-title font-weight-bold text-right mb-0"
                          },
                          [_vm._v("$65,650")]
                        )
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("p", { staticClass: "text-muted mt-3" }, [
                  _c("i", {
                    staticClass: "mdi mdi-alert-octagon mr-1",
                    attrs: { "aria-hidden": "true" }
                  }),
                  _vm._v(" 65% lower growth\n          ")
                ])
              ])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12 grid-margin" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h5", { staticClass: "card-title mb-4" }, [_vm._v("Order")]),
              _vm._v(" "),
              _c("div", { staticClass: "table-responsive" }, [
                _c("table", { staticClass: "table center-aligned-table" }, [
                  _c("thead", [
                    _c("tr", [
                      _c("th", { staticClass: "border-bottom-0" }, [
                        _vm._v("Order No")
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "border-bottom-0" }, [
                        _vm._v("Product Name")
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "border-bottom-0" }, [
                        _vm._v("Purchased On")
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "border-bottom-0" }, [
                        _vm._v("Shipping Status")
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "border-bottom-0" }, [
                        _vm._v("Payment Method")
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "border-bottom-0" }, [
                        _vm._v("Payment Status")
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "border-bottom-0" }),
                      _vm._v(" "),
                      _c("th", { staticClass: "border-bottom-0" }),
                      _vm._v(" "),
                      _c("th", { staticClass: "border-bottom-0" })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tbody", [
                    _c("tr", [
                      _c("td", [_vm._v("034")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Iphone 7")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("12 May 2017")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Dispatched")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Credit card")]),
                      _vm._v(" "),
                      _c("td", [
                        _c("label", { staticClass: "badge badge-teal" }, [
                          _vm._v("Approved")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-outline-success btn-sm",
                            attrs: { href: "#" }
                          },
                          [_vm._v("View Order")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-outline-danger btn-sm",
                            attrs: { href: "#" }
                          },
                          [_vm._v("Cancel")]
                        )
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/Pages/Dashboard.vue":
/*!******************************************!*\
  !*** ./resources/js/Pages/Dashboard.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_097ba13b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=097ba13b& */ "./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Dashboard_vue_vue_type_template_id_097ba13b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_097ba13b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_097ba13b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=097ba13b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_097ba13b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_097ba13b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);