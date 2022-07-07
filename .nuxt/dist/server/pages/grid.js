exports.ids = [10,1,4];
exports.modules = {

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("41bb9cc9", content, true, context)
};

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NavBar.vue?vue&type=template&id=4f32ba64&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('nav', {
    staticClass: "navbar navbar-expand-lg navbar-dark bg-secondary"
  }, [_vm._ssrNode("<ul class=\"navbar-nav\">", "</ul>", _vm._l(_vm.theseLinks, function (entry) {
    return _vm._ssrNode("<li class=\"nav-item\">", "</li>", [_c('NuxtLink', {
      staticClass: "nav-link",
      attrs: {
        "to": '/' + entry.url
      }
    }, [_vm._v(_vm._s(entry.text))])], 1);
  }), 0)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/NavBar.vue?vue&type=template&id=4f32ba64&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NavBar.vue?vue&type=script&lang=js&
/* harmony default export */ var NavBarvue_type_script_lang_js_ = ({
  name: "NavBar",

  data() {
    return {
      theseLinks: [{
        "text": "home",
        "url": ""
      }, {
        "text": "reader",
        "url": "reader"
      }, {
        "text": "images",
        "url": "images"
      }, {
        "text": "accordion",
        "url": "accordion"
      }, {
        "text": "grid",
        "url": "grid"
      }, {
        "text": "about",
        "url": "about"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/NavBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_NavBarvue_type_script_lang_js_ = (NavBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/NavBar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(28)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_NavBarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3f6a0341"
  
)

/* harmony default export */ var NavBar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_4f32ba64_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_4f32ba64_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_4f32ba64_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_4f32ba64_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_4f32ba64_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nav-link:first-letter{text-transform:capitalize}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PageGrid.vue?vue&type=template&id=bf507178&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "container"
  }, [_vm._ssrNode("<div class=\"row m-2\"><div class=\"col-12 col-sm-9 col-md-6 col-lg-3 col-xl-3 bg-warning\"><p>Column 1</p></div> <div class=\"col-12 col-sm-9 col-md-6 col-lg-3 col-xl-3 bg-info\"><p>Column 2</p></div> <div class=\"col-12 col-sm-9 col-md-6 col-lg-3 col-xl-3 bg-warning\"><p>Column 3</p></div> <div class=\"col-12 col-sm-9 col-md-6 col-lg-3 col-xl-3 bg-info\"><p>Column 4</p></div></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/PageGrid.vue?vue&type=template&id=bf507178&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PageGrid.vue?vue&type=script&lang=js&
/* harmony default export */ var PageGridvue_type_script_lang_js_ = ({
  name: 'PageGrid',
  headerName: 'Grid'
});
// CONCATENATED MODULE: ./components/PageGrid.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PageGridvue_type_script_lang_js_ = (PageGridvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PageGrid.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PageGridvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2fce65f4"
  
)

/* harmony default export */ var PageGrid = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/grid.vue?vue&type=template&id=7fcdc0b6&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_c('NavBar'), _vm._ssrNode(" "), _c('PageGrid')], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/grid.vue?vue&type=template&id=7fcdc0b6&

// EXTERNAL MODULE: ./components/NavBar.vue + 4 modules
var NavBar = __webpack_require__(27);

// EXTERNAL MODULE: ./components/PageGrid.vue + 4 modules
var PageGrid = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/grid.vue?vue&type=script&lang=js&


/* harmony default export */ var gridvue_type_script_lang_js_ = ({
  name: "GridPage",

  head() {
    return {
      title: "Grid"
    };
  },

  components: {
    NavBar: NavBar["default"],
    PageGrid: PageGrid["default"]
  }
});
// CONCATENATED MODULE: ./pages/grid.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_gridvue_type_script_lang_js_ = (gridvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/grid.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_gridvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e3dbf97a"
  
)

/* harmony default export */ var grid = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {NavBar: __webpack_require__(27).default,PageGrid: __webpack_require__(47).default})


/***/ })

};;
//# sourceMappingURL=grid.js.map