exports.ids = [3];
exports.modules = {

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(34);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1cd25f71", content, true, context)
};

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PageApi.vue?vue&type=template&id=74adab5c&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "content"
  }, [_vm._ssrNode(_vm._ssrList(_vm.responseArticles, function (entry) {
    return "<div class=\"card\" data-v-74adab5c><img" + _vm._ssrAttr("src", _vm.NY_TIMES + entry.multimedia[14].url) + " data-v-74adab5c> <h5 class=\"card-title\" data-v-74adab5c>" + _vm._ssrEscape(_vm._s(entry.headline.main)) + "</h5> <h6 class=\"card-subtitle mb-2 text-muted\" data-v-74adab5c>" + _vm._ssrEscape(_vm._s(entry.byline.original)) + "</h6> <div class=\"card-body\" data-v-74adab5c>" + _vm._ssrEscape("\r\n            " + _vm._s(entry.abstract) + "\r\n        ") + "</div> <a" + _vm._ssrAttr("href", entry.web_url) + " class=\"btn btn-primary\" data-v-74adab5c>Read at nytimes.com</a></div>";
  }))]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/PageApi.vue?vue&type=template&id=74adab5c&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PageApi.vue?vue&type=script&lang=js&

/* harmony default export */ var PageApivue_type_script_lang_js_ = ({
  name: 'PageApi',
  props: {
    newsDesk: String,
    earliestDate: String,
    latestDate: String,
    page: {
      default: 0
    }
  },

  data() {
    return {
      loading: true,
      responseArticles: null,
      inError: false,
      NY_TIMES: 'https://www.nytimes.com/',
      API_NYT_ARTICLE: 'https://api.nytimes.com/svc/search/v2/articlesearch.json?',
      NEWSDESK: `begin_date=${this.earliestDate}&end_date=${this.latestDate}&fq=news_desk:(%22${this.newsDesk}%22)&page=${this.page}&sort=newest&api-key=`,
      API_KEY: '5K7S1Io86tSdhZgxgg514mGvp7Km3sUX'
    };
  },

  mounted() {
    const finalCall = `${this.API_NYT_ARTICLE}${this.NEWSDESK}${this.API_KEY}`;
    external_axios_default.a.get(finalCall).then(resp => {
      this.responseArticles = resp.data.response.docs, console.log(this.responseArticles);
    }).catch(error => console.log(error), this.inError = true).finally(() => this.loading = false);
  }

});
// CONCATENATED MODULE: ./components/PageApi.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PageApivue_type_script_lang_js_ = (PageApivue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PageApi.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(33)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PageApivue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "74adab5c",
  "359ebe80"
  
)

/* harmony default export */ var PageApi = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageApi_vue_vue_type_style_index_0_id_74adab5c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageApi_vue_vue_type_style_index_0_id_74adab5c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageApi_vue_vue_type_style_index_0_id_74adab5c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageApi_vue_vue_type_style_index_0_id_74adab5c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageApi_vue_vue_type_style_index_0_id_74adab5c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".content[data-v-74adab5c]{display:flex;flex-flow:row wrap}.card[data-v-74adab5c]{width:240px;margin:1em;padding:1em}img[data-v-74adab5c]{margin-bottom:1em}.card-title[data-v-74adab5c]{height:7em}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=page-api.js.map