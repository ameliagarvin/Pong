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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Cannot read config file: C:\\Users\\Amelia Garvin\\Desktop\\package.json\nError: Cannot read config file: C:\\Users\\Amelia Garvin\\Desktop\\package.json\nError: Unexpected end of JSON input\n    at Object.parse (native)\n    at loadJSONConfigFile (C:\\Users\\Amelia Garvin\\Desktop\\pong-starter-master\\node_modules\\eslint\\lib\\config\\config-file.js:120:21)\n    at loadPackageJSONConfigFile (C:\\Users\\Amelia Garvin\\Desktop\\pong-starter-master\\node_modules\\eslint\\lib\\config\\config-file.js:178:16)\n    at loadConfigFile (C:\\Users\\Amelia Garvin\\Desktop\\pong-starter-master\\node_modules\\eslint\\lib\\config\\config-file.js:226:26)\n    at Object.load (C:\\Users\\Amelia Garvin\\Desktop\\pong-starter-master\\node_modules\\eslint\\lib\\config\\config-file.js:535:18)\n    at loadConfig (C:\\Users\\Amelia Garvin\\Desktop\\pong-starter-master\\node_modules\\eslint\\lib\\config.js:63:33)\n    at getLocalConfig (C:\\Users\\Amelia Garvin\\Desktop\\pong-starter-master\\node_modules\\eslint\\lib\\config.js:130:29)\n    at Config.getConfig (C:\\Users\\Amelia Garvin\\Desktop\\pong-starter-master\\node_modules\\eslint\\lib\\config.js:260:26)\n    at processText (C:\\Users\\Amelia Garvin\\Desktop\\pong-starter-master\\node_modules\\eslint\\lib\\cli-engine.js:224:33)\n    at CLIEngine.executeOnText (C:\\Users\\Amelia Garvin\\Desktop\\pong-starter-master\\node_modules\\eslint\\lib\\cli-engine.js:754:26)\n    at lint (C:\\Users\\Amelia Garvin\\Desktop\\pong-starter-master\\node_modules\\eslint-loader\\index.js:25:20)\n    at Object.module.exports (C:\\Users\\Amelia Garvin\\Desktop\\pong-starter-master\\node_modules\\eslint-loader\\index.js:111:3)");

/***/ })
/******/ ]);