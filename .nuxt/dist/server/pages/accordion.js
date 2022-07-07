exports.ids = [9,1,2];
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

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PageAccordion.vue?vue&type=template&id=37c8efaa&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "container"
  }, [_vm._ssrNode(_vm._ssrList(_vm.accordionData, function (entry) {
    return "<button type=\"button\" data-toggle=\"collapse\"" + _vm._ssrAttr("data-target", '#' + entry.id) + " aria-expanded=\"false\" aria-controls=\"collapse\" class=\"btn btn-primary\">" + _vm._ssrEscape("\r\n            Activate " + _vm._s(entry.name) + "\r\n        ") + "</button>";
  }) + " <span data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Clicking 'Toggle Both Cards' while one is activated will turn off one and turn on the other one.\r\n            To put both on the same page, you have to decide to click on the card to toggle one or the other so both\r\n            are either activated or deactivated at the same time.\"><button type=\"button\" data-toggle=\"collapse\" data-target=\".multi-collapse\" aria-expanded=\"false\" aria-controls=\"collapse\" class=\"btn btn-primary\">\r\n                Toggle Both Cards\r\n            </button></span> " + _vm._ssrList(_vm.accordionData, function (entry) {
    return "<div" + _vm._ssrAttr("id", entry.id) + " class=\"collapse multi-collapse\"><div class=\"card card-body\"><h1>" + _vm._ssrEscape(_vm._s(entry.name)) + "</h1> <p>" + _vm._ssrEscape(_vm._s(entry.content)) + "</p></div></div>";
  }))]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/PageAccordion.vue?vue&type=template&id=37c8efaa&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PageAccordion.vue?vue&type=script&lang=js&
/* harmony default export */ var PageAccordionvue_type_script_lang_js_ = ({
  name: 'PageAccordion',

  data() {
    return {
      accordionData: [{
        id: "card-01",
        name: "Card 1",
        content: "CARD 1:\nLorem, ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatibus eaque optiocorrupti ex excepturi illo. Maxime quod necessitatibus quo aperiam enim illo dicta porro veniam, in error itaque sunt excepturi accusantium a, laboriosam illum tempore explicabo distinctio nemo? Et tenetur, aspernatur vitae necessitatibus, ex nostrum rerum alias similique veniam doloribus id? Repellat eius nesciunt quaerat alias libero nisi ab!"
      }, {
        id: "card-02",
        name: "Card 2",
        content: "CARD 2:\nLorem, ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatibus eaque optiocorrupti ex excepturi illo. Maxime quod necessitatibus quo aperiam enim illo dicta porro veniam, in error itaque sunt excepturi accusantium a, laboriosam illum tempore explicabo distinctio nemo? Et tenetur, aspernatur vitae necessitatibus, ex nostrum rerum alias similique veniam doloribus id? Repellat eius nesciunt quaerat alias libero nisi ab!"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/PageAccordion.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PageAccordionvue_type_script_lang_js_ = (PageAccordionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PageAccordion.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PageAccordionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2a9fea90"
  
)

/* harmony default export */ var PageAccordion = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/accordion.vue?vue&type=template&id=521ff9aa&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_c('NavBar'), _vm._ssrNode(" "), _c('PageAccordion')], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/accordion.vue?vue&type=template&id=521ff9aa&

// EXTERNAL MODULE: ./components/NavBar.vue + 4 modules
var NavBar = __webpack_require__(27);

// EXTERNAL MODULE: ./components/PageAccordion.vue + 4 modules
var PageAccordion = __webpack_require__(46);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/accordion.vue?vue&type=script&lang=js&


/* harmony default export */ var accordionvue_type_script_lang_js_ = ({
  name: "AccordionPage",

  head() {
    return {
      title: "Accordion"
    };
  },

  components: {
    NavBar: NavBar["default"],
    PageAccordion: PageAccordion["default"]
  }
});
// CONCATENATED MODULE: ./pages/accordion.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_accordionvue_type_script_lang_js_ = (accordionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/accordion.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_accordionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b3bf9aca"
  
)

/* harmony default export */ var accordion = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {NavBar: __webpack_require__(27).default,PageAccordion: __webpack_require__(46).default})


/***/ })

};;
//# sourceMappingURL=accordion.js.map