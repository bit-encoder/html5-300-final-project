exports.ids = [2];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=page-accordion.js.map