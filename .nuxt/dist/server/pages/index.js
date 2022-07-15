exports.ids = [12,1,6];
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
  "0f1e8c4b"
  
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

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PageLanding.vue?vue&type=template&id=9016a302&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "container"
  }, [_vm._ssrNode("<h1>Content Found Here</h1> <p class=\"lead\">\r\n            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse omnis dolore saepe itaque \r\n            sint dignissimos eius praesentium minus obcaecati aperiam officiis, adipisci iure consequuntur\r\n                impedit cumque amet, sapiente veniam quibusdam.\r\n        </p> <p>Additional thing. Testing out current build.</p> <p>\r\n            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum temporibus iste quasi sit\r\n            quia voluptate magni hic sequi ullam repudiandae doloribus fugiat, cumque tenetur officiis!\r\n            Necessitatibus asperiores, atque illum aliquam accusamus adipisci nesciunt modi sed perferendis \r\n            quam ex ad officia? Incidunt quos enim sapiente, sunt alias maxime quis obcaecati voluptatem. \r\n            Nulla eligendi sint repellendus dolore omnis aspernatur distinctio ipsa! Iste.\r\n        </p> <p>\r\n            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, illo alias eum explicabo\r\n            voluptates doloremque vero ab accusantium eveniet ad ipsam voluptate hic consequatur voluptatem \r\n            suscipit repudiandae recusandae ex unde fugiat qui. Perferendis reiciendis maiores ipsa a corporis\r\n            similique perspiciatis?\r\n        </p>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/PageLanding.vue?vue&type=template&id=9016a302&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PageLanding.vue?vue&type=script&lang=js&
/* harmony default export */ var PageLandingvue_type_script_lang_js_ = ({
  name: 'PageLanding',
  headerName: 'Home'
});
// CONCATENATED MODULE: ./components/PageLanding.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PageLandingvue_type_script_lang_js_ = (PageLandingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PageLanding.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PageLandingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "61443986"
  
)

/* harmony default export */ var PageLanding = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=61f9aa05&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_c('NavBar'), _vm._ssrNode(" "), _c('PageLanding')], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=61f9aa05&

// EXTERNAL MODULE: ./components/NavBar.vue + 4 modules
var NavBar = __webpack_require__(27);

// EXTERNAL MODULE: ./components/PageLanding.vue + 4 modules
var PageLanding = __webpack_require__(50);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&


/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: "IndexPage",
  components: {
    NavBar: NavBar["default"],
    PageLanding: PageLanding["default"]
  },

  head() {
    return {
      title: "Home"
    };
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6a44ef2f"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {NavBar: __webpack_require__(27).default,PageLanding: __webpack_require__(50).default})


/***/ })

};;
//# sourceMappingURL=index.js.map