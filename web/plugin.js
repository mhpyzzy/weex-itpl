/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _api = __webpack_require__(2);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _modules = [_api2.default];

_modules.forEach(function (mod) {

    weex.install(_api2.default);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var weextest = {

  setTitle: function setTitle(title) {
    title = title || 'Weex HTML5';
    try {
      title = decodeURIComponent(title);
    } catch (e) {}
    document.title = title;
  },
  log: function log(param) {
    weex.requireModule('modal').toast({ message: param });
  }
};

var meta = {
  weextest: [{
    name: 'setTitle',
    args: ['string']
  }]
};

var init = function init(Weex) {
  Weex.registerApiModule('weextest', weextest, meta);
};

exports.default = {
  init: init
};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDk4NTg3ZDBkOGNiMDgxOTg3ZTMiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy9wbHVnaW5JbnN0YWxsLmpzIiwid2VicGFjazovLy8uL3BsdWdpbnMvd2ViL2FwaS5qcyJdLCJuYW1lcyI6WyJfbW9kdWxlcyIsImZvckVhY2giLCJtb2QiLCJ3ZWV4IiwiaW5zdGFsbCIsIndlZXh0ZXN0Iiwic2V0VGl0bGUiLCJ0aXRsZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImUiLCJkb2N1bWVudCIsImxvZyIsInBhcmFtIiwicmVxdWlyZU1vZHVsZSIsInRvYXN0IiwibWVzc2FnZSIsIm1ldGEiLCJuYW1lIiwiYXJncyIsImluaXQiLCJXZWV4IiwicmVnaXN0ZXJBcGlNb2R1bGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1REE7Ozs7OztBQUdBLElBQUlBLFdBQVcsZUFBZjs7QUFJQUEsU0FBU0MsT0FBVCxDQUFpQixVQUFDQyxHQUFELEVBQU87O0FBRXBCQyxTQUFLQyxPQUFMO0FBQ0gsQ0FIRCxFOzs7Ozs7Ozs7Ozs7O0FDUEEsSUFBTUMsV0FBVzs7QUFFWEMsWUFBVSxrQkFBVUMsS0FBVixFQUFpQjtBQUN6QkEsWUFBUUEsU0FBUyxZQUFqQjtBQUNBLFFBQUk7QUFDRkEsY0FBUUMsbUJBQW1CRCxLQUFuQixDQUFSO0FBQ0QsS0FGRCxDQUdBLE9BQU9FLENBQVAsRUFBVSxDQUFFO0FBQ1pDLGFBQVNILEtBQVQsR0FBaUJBLEtBQWpCO0FBQ0QsR0FUVTtBQVVYSSxLQVZXLGVBVVBDLEtBVk8sRUFVRDtBQUNSVCxTQUFLVSxhQUFMLENBQW1CLE9BQW5CLEVBQTRCQyxLQUE1QixDQUFrQyxFQUFDQyxTQUFRSCxLQUFULEVBQWxDO0FBQ0Q7QUFaVSxDQUFqQjs7QUFlQSxJQUFNSSxPQUFPO0FBQ1BYLFlBQVUsQ0FBQztBQUNUWSxVQUFNLFVBREc7QUFFVEMsVUFBTSxDQUFDLFFBQUQ7QUFGRyxHQUFEO0FBREgsQ0FBYjs7QUFPQSxJQUFNQyxPQUFPLFNBQVBBLElBQU8sQ0FBU0MsSUFBVCxFQUFjO0FBQ3ZCQSxPQUFLQyxpQkFBTCxDQUF1QixVQUF2QixFQUFtQ2hCLFFBQW5DLEVBQTZDVyxJQUE3QztBQUNILENBRkQ7O2tCQUllO0FBQ2JHO0FBRGEsQyIsImZpbGUiOiJwbHVnaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0OTg1ODdkMGQ4Y2IwODE5ODdlMyIsIlxyXG5pbXBvcnQgd2VleHRlc3QgZnJvbSAnLi93ZWIvYXBpLmpzJ1xyXG5cclxuXHJcbnZhciBfbW9kdWxlcyA9IFtcclxuICAgIHdlZXh0ZXN0XHJcbl07XHJcblxyXG5fbW9kdWxlcy5mb3JFYWNoKChtb2QpPT57XHJcbiAgICBcclxuICAgIHdlZXguaW5zdGFsbCh3ZWV4dGVzdClcclxufSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5zL3BsdWdpbkluc3RhbGwuanMiLCJcclxuY29uc3Qgd2VleHRlc3QgPSB7XHJcbiAgICBcclxuICAgICAgc2V0VGl0bGU6IGZ1bmN0aW9uICh0aXRsZSkge1xyXG4gICAgICAgIHRpdGxlID0gdGl0bGUgfHwgJ1dlZXggSFRNTDUnXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHRpdGxlID0gZGVjb2RlVVJJQ29tcG9uZW50KHRpdGxlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge31cclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlXHJcbiAgICAgIH0sXHJcbiAgICAgIGxvZyhwYXJhbSl7XHJcbiAgICAgICAgd2VleC5yZXF1aXJlTW9kdWxlKCdtb2RhbCcpLnRvYXN0KHttZXNzYWdlOnBhcmFtfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbmNvbnN0IG1ldGEgPSB7XHJcbiAgICAgIHdlZXh0ZXN0OiBbe1xyXG4gICAgICAgIG5hbWU6ICdzZXRUaXRsZScsXHJcbiAgICAgICAgYXJnczogWydzdHJpbmcnXVxyXG4gICAgICB9XVxyXG4gICAgfVxyXG4gICAgXHJcbmNvbnN0IGluaXQgPSBmdW5jdGlvbihXZWV4KXtcclxuICAgIFdlZXgucmVnaXN0ZXJBcGlNb2R1bGUoJ3dlZXh0ZXN0Jywgd2VleHRlc3QsIG1ldGEpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBpbml0XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5zL3dlYi9hcGkuanMiXSwic291cmNlUm9vdCI6IiJ9