(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/orders/orders"],{

/***/ 68:
/*!**********************************************************************************************!*\
  !*** C:/Users/陈斌/Documents/HBuilderProjects/user/main.js?{"page":"pages%2Forders%2Forders"} ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _orders = _interopRequireDefault(__webpack_require__(/*! ./pages/orders/orders.vue */ 69));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_orders.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 69:
/*!***************************************************************************!*\
  !*** C:/Users/陈斌/Documents/HBuilderProjects/user/pages/orders/orders.vue ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _orders_vue_vue_type_template_id_10dd48a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders.vue?vue&type=template&id=10dd48a6& */ 70);
/* harmony import */ var _orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders.vue?vue&type=script&lang=js& */ 72);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../AppData/Local/Temp/Rar$EXa8216.32813/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);

var renderjs




/* normalize component */

var component = Object(_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _orders_vue_vue_type_template_id_10dd48a6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _orders_vue_vue_type_template_id_10dd48a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _orders_vue_vue_type_template_id_10dd48a6___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "Documents/HBuilderProjects/user/pages/orders/orders.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 70:
/*!**********************************************************************************************************!*\
  !*** C:/Users/陈斌/Documents/HBuilderProjects/user/pages/orders/orders.vue?vue&type=template&id=10dd48a6& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orders_vue_vue_type_template_id_10dd48a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../AppData/Local/Temp/Rar$EXa8216.32813/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../AppData/Local/Temp/Rar$EXa8216.32813/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../AppData/Local/Temp/Rar$EXa8216.32813/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../AppData/Local/Temp/Rar$EXa8216.32813/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../AppData/Local/Temp/Rar$EXa8216.32813/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../AppData/Local/Temp/Rar$EXa8216.32813/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./orders.vue?vue&type=template&id=10dd48a6& */ 71);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orders_vue_vue_type_template_id_10dd48a6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orders_vue_vue_type_template_id_10dd48a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orders_vue_vue_type_template_id_10dd48a6___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orders_vue_vue_type_template_id_10dd48a6___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 71:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/陈斌/Documents/HBuilderProjects/user/pages/orders/orders.vue?vue&type=template&id=10dd48a6& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  "liuyuno-tabs": function() {
    return __webpack_require__.e(/*! import() | components/liuyuno-tabs/liuyuno-tabs */ "components/liuyuno-tabs/liuyuno-tabs").then(__webpack_require__.bind(null, /*! @/components/liuyuno-tabs/liuyuno-tabs.vue */ 174))
  },
  OrderList: function() {
    return __webpack_require__.e(/*! import() | components/OrderList/OrderList */ "components/OrderList/OrderList").then(__webpack_require__.bind(null, /*! @/components/OrderList/OrderList.vue */ 181))
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 72:
/*!****************************************************************************************************!*\
  !*** C:/Users/陈斌/Documents/HBuilderProjects/user/pages/orders/orders.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../AppData/Local/Temp/Rar$EXa8216.32813/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../AppData/Local/Temp/Rar$EXa8216.32813/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../AppData/Local/Temp/Rar$EXa8216.32813/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../AppData/Local/Temp/Rar$EXa8216.32813/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../AppData/Local/Temp/Rar$EXa8216.32813/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./orders.vue?vue&type=script&lang=js& */ 73);
/* harmony import */ var _AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_AppData_Local_Temp_Rar$EXa8216_32813_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 73:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/陈斌/Documents/HBuilderProjects/user/pages/orders/orders.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var liuyunoTabs = function liuyunoTabs() {__webpack_require__.e(/*! require.ensure | components/liuyuno-tabs/liuyuno-tabs */ "components/liuyuno-tabs/liuyuno-tabs").then((function () {return resolve(__webpack_require__(/*! @/components/liuyuno-tabs/liuyuno-tabs.vue */ 174));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var OrderList = function OrderList() {__webpack_require__.e(/*! require.ensure | components/OrderList/OrderList */ "components/OrderList/OrderList").then((function () {return resolve(__webpack_require__(/*! @/components/OrderList/OrderList.vue */ 181));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =








{
  components: {
    liuyunoTabs: liuyunoTabs,
    OrderList: OrderList },

  data: function data() {
    return {
      tabs: [{ text: "全部", type: '0' }, { text: "待付款", type: '1' }, { text: "待发货", type: '2' }, { text: "评价", type: '3' }],
      defaultIndex: '1',
      datas: [{ time: "2020.1.13" }, { time: "2020.1.13" }, { time: "2020.1.13" }] };

  },
  methods: {
    tabClick: function tabClick(index) {
      this.defaultIndex = index;
    } } };exports.default = _default;

/***/ })

},[[68,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/orders/orders.js.map