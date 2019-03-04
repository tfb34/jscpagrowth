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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/custom.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/custom.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');*/\r\n\r\n:root{\r\n    --main-color: teal;\r\n    --header-color: #717171;\r\n    --text-color: #404041;\r\n    --bg-color: #E8E8E3;\r\n}\r\nbody{\r\n    padding:0;margin: 0;\r\n    color: var(--text-color);\r\n    font-family: 'Open Sans', sans-serif;\r\n    background-color: var(--bg-color);\r\n}\r\nh2,h3{\r\n    color:var(--header-color);\r\n}\r\na{\r\n    color:var(--text-color);\r\n}\r\n.container{\r\n    padding: 1em;\r\n}\r\n.row,\r\n.column{\r\n    box-sizing: border-box;\r\n}\r\n.row{\r\n    margin-bottom: 1em;\r\n}\r\n.row:before, \r\n.row:after{\r\n    content: \"\";\r\n    display: table;\r\n}\r\n.row:after{\r\n    clear: both;\r\n}\r\n[class*=column]{\r\n    position: relative;\r\n    float:left;\r\n}\r\n[class*=column] + [class*=column]{\r\n    margin-left: 1.6%;\r\n}\r\n.column-1{\r\n    width: 6.866666667%;\r\n}\r\n.column-2{\r\n    width: 15.3333333333%;\r\n}\r\n.column-3{\r\n    width: 23.8%;\r\n}\r\n.column-4{\r\n    width: 32.2666666667%;\r\n}\r\n.column-5{ \r\n    width: 40.7333333333%;\r\n}\r\n.column-6{\r\n    width: 49.2%;\r\n}\r\n.column-7{\r\n    width: 57.6666666667%;\r\n}\r\n.column-8{\r\n    width: 66.1333333333%;\r\n}\r\n.column-9{\r\n    width: 74.6%;\r\n}\r\n.column-10{\r\n    width: 83.06666667%;\r\n}\r\n.column-11{\r\n    width: 91.5333333333%;\r\n}\r\n.column-12{\r\n    width:100%;\r\n}\r\n/*offset*/\r\n.column-offset-1{\r\n    margin-left: 8.466666667%;\r\n}\r\n.column-offset-2{\r\n    margin-left: 16.93333333%;\r\n}\r\n.column-offset-3{\r\n    margin-left: 25.4%;\r\n}\r\n.column-offset-4{\r\n    margin-left: 33.866666667%;\r\n}\r\n.column-offset-5{\r\n    margin-left: 42.333333333%;\r\n}\r\n.column-offset-6{\r\n    margin-left: 50.8%;\r\n}\r\n.column-offset-7{\r\n    margin-left: 59.266666667%;\r\n}\r\n.column-offset-8{\r\n    margin-left: 67.733333333%;\r\n}\r\n.column-offset-9{\r\n    margin-left: 76.2%;\r\n}\r\n.column-offset-10{\r\n    margin-left: 84.666666667%;\r\n}\r\n.column-offset-11{\r\n    margin-left: 93.133333333%;\r\n}/*end of my-grid*/\r\np{\r\n\tmargin:0;\r\n\tpadding:0;\r\n}\r\na{\r\n\ttext-decoration: none;\r\n}\r\nnav{\r\n\tbox-sizing: border-box;\r\n    height:3em;\r\n\tpadding:0;\r\n\twidth:100%;\r\n\tz-index:2;\r\n    position:fixed;\r\n    background-color: rgba(0,0,0,0.7);\r\n}\r\nnav img{\r\n    width:50px;top:15%;left:2em;position:absolute;\r\n}\r\n#logo-wrapper{\r\n\theight: 40px;\r\n\twidth: 275px;\r\n\tbox-sizing: border-box;\r\n\tfloat:left;\r\n}\r\n#logo-image{\r\n\theight: 50px;\r\n\twidth: 90px;\r\n\tfloat: left;\r\n\tbackground-image: url('https://s3.us-east-2.amazonaws.com/wjs-accounting-project/images/jslogoyellow.jpeg');\r\n\tbackground-size: cover;\r\n\tbackground-repeat: no-repeat;\r\n}\r\n#logo-text{\r\n\theight: 50px;\r\n\twidth: 130px;\r\n\tfloat: left;\r\n\tfont-size: 12px;\r\n\tpadding-left: 1em;\r\n\tpadding-top: 5px;\r\n\tbox-sizing: border-box;\r\n\tbackground-size:white;\r\n}\r\nnav:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n}\r\n#menu-btn{\r\n    width:2em;\r\n    height:2em;\r\n    padding:1em 1em 0 1em;\r\n    float:right;\r\n    cursor:pointer;\r\n    position:relative;\r\n}\r\n#menu-btn div {\r\n    background-color:white;\r\n\theight: 2px;\r\n\twidth: 25px;\r\n\tposition: absolute;\r\n}\r\n#menu-btn div:first-child{\r\n\tmargin-bottom:0.5em;\r\n}\r\n#menu-btn div:last-child{\r\n\ttop:1.5em;\r\n}\r\n@keyframes top-parallel{\r\n    0%{\r\n        transform: translateY(0.5em) rotate(135deg);\r\n    }\r\n    100%{\r\n        transform: translateY(0) rotate(0deg);\r\n    }\r\n}\r\n.top-parallel{\r\n    animation-name: top-parallel;\r\n}\r\n@keyframes bottom-parallel{\r\n    0%{\r\n        transform: rotate(45deg);\r\n    }\r\n    100%{\r\n        transform: rotate(0deg);\r\n    }\r\n}\r\n.bottom-parallel{\r\n    animation-name: bottom-parallel;\r\n}\r\n@keyframes lean-right{\r\n    0%{\r\n        transform: translateY(0) rotate(0deg);\r\n    }\r\n    100%{\r\n        transform: translateY(0.5em) rotate(135deg);\r\n    }\r\n}\r\n.lean-right{\r\n    animation-name: lean-right;\r\n}\r\n@keyframes lean-left{\r\n    0%{\r\n        transform: rotate(0deg);\r\n    }\r\n    100%{\r\n        transform: rotate(45deg);\r\n    }\r\n}\r\n.lean-left{\r\n    animation-name: lean-left;\r\n}\r\n.animate-btn{\r\n    animation-duration:0.5s;\r\n    animation-fill-mode: both;\r\n}\r\n#desktop-menu{\r\n\tdisplay:none;\r\n}\r\n#home-main-pic{\r\n\t/* height: 20vh; */\r\n\twidth: 100%;\r\n\theight: 30vw;\r\n}\r\n.object-fill_fill{\r\n\tobject-fit: fill;\r\n}\r\n\r\n.cover{\r\n\twidth:260px;\r\n\tobject-fit: cover;\r\n}\r\n#main-text{\r\n\ttext-align: center;\r\n\tpadding: 5em 1em;/*padding: 3em 3em*/\r\n\tmax-width:20em;\r\n\tmargin:0 auto;\r\n\tline-height: 1.7em;\r\n\t\r\n\tcolor: #665d5d;\r\n\tfont-size:18px;\r\n}\r\n#service-pic{\r\n\tmargin: 0 auto;\r\n\tdisplay: block;\r\n\theight:45px;\r\n}\r\n.service-header{\r\n\tfont-size:20px;\r\n    font-weight:normal;\r\n}\r\n.service-description{\r\n\tfont-size:18px;\r\n    max-width: 280px;\r\n    margin: 0 auto;\r\n}\r\n.service-header, .service-description{\r\n\tcolor: var(--header-color);\r\n\ttext-align: center;\r\n}\r\n#services{\r\n\tbackground-color: #ECECEC;\r\n\tpadding: 5em 2em 0em 2em;/*5 2 0 2*/\r\n}\r\n#read-more-btn{\r\n\tbackground-color: var(--main-color);\r\n\tcolor: white;\r\n\tpadding:1em;\r\n    text-align:center;\r\n\tfont-weight: bold;\r\n\tdisplay: block;\r\n\twidth: 6.2em;\r\n\tmargin: 5em auto 5em auto;\r\n}\r\n#services .row{\r\n    max-width: 2000px;\r\n}\r\n#services .column-4{\r\n\tpadding-bottom:4em;\r\n}\r\n#contact-info{\r\n\ttext-align: center;\r\n\tpadding: 6em 1em;\r\n}\r\n#contact-info p{\r\n\tline-height: 1.8em;\r\n\tfont-size: 17px;\r\n\tmargin-bottom: 1em;\r\n}\r\n#contact-info h3{\r\n\tfont-weight: normal;\r\n\t/*color: rgb(113,113,113);*/\r\n\tfont-size:25px;\r\n}\r\n#contact-info a{\r\n    color: var(--main-color);\r\n}\r\n.map-contact-wrapper{\r\n\tbackground-color: #ECECEC;\r\n\tmargin-bottom:0;\r\n}\r\n.btn{\r\n\tpadding: 1em;\r\n\tbackground-color: var(--main-color);\r\n\tcolor: white;\r\n\tdisplay: block;\r\n\twidth: 10em;\r\n\tmargin: 2em auto;\r\n\t/* font-size: 15px; */\r\n\tfont-weight: bold;\r\n}\r\n.communication-row-wrapper{\r\n\tmargin-top: 5em;margin-bottom: 5em;/*font-size:14px;sdesktop: margin-top,margin-bottom: 3em*/\r\n}\r\n.communication-row-wrapper p{\r\n\tfont-size:17px;\r\n}\r\n.inner-wrapper{\r\n\twidth:100%;text-align: center\r\n}\r\n.inner-wrapper div{\r\n\tmax-width:29em;\r\n\tdisplay:block;\r\n\tmargin:0 auto;\r\n\ttext-align: center;\r\n\tpadding: 0em 3em;/*1em*/\r\n\t/*padding: 3em 3em; for desktop*/\r\n}\r\n.inner-wrapper.first{\r\n\t/*margin-top: 2em;*/\r\n\tpadding-bottom: 1em;/*0 in non-mobile*/\r\n\tborder-right:0px;\r\n}\r\n.inner-wrapper.last{\r\n\t/*margin-bottom: 5em;*/\r\n\tpadding-top: 1em;/*0 in non-mobile*/\r\n}\r\n.inner-wrapper h2{\r\n\tfont-weight: lighter;\r\n\tfont-size: 25px;/*desktop font-size: 2em*/\r\n\t\r\n\t/*color: grey;*/\r\n}\r\n#home-header{\r\n    color:var(--header-color);font-size: 22px;margin-top:2.5em;margin-bottom:0.5em;font-weight:500;\r\n}\r\n.inner-wrapper p{\r\n\t/*line-height:3em;*/\r\n\tline-height: 2em;\r\n}\r\n.inner-wrapper a{\r\n\tpointer-events: auto;/*none for desktop*/\r\n}\r\n\r\nul{\r\n\tlist-style-type: none;\r\n\tpadding:0;\r\n}\r\n#navigation{\r\n\ttext-align:center;\r\n\tfont-size:12px;\r\n}\r\nul a:link, ul a:visited{\r\n\tcolor:var(--main-color);\r\n}\r\n#navigation ul li{\r\n\tmargin-bottom:2em;\r\n}\r\nfooter{\r\n\tpadding: 10em 0 4em 0;\r\n\tcolor:#333333;\r\n}\r\n#copyright{\r\n\ttext-align: left;\r\n\tfont-size:11px;\r\n\tmargin:0 auto;\r\n\twidth:15em;\r\n}\r\n.header{\r\n\tmargin-bottom:1.5em;font-size:18px;/*color:grey*/\r\n}\r\n#footer-contact p{\r\n\tmargin-bottom: 1em;\r\n}\r\n#footer-contact {\r\n\tfont-size:13px;\r\n\tmax-width :15em;\t\r\n\tmargin:0 auto;\r\n\ttext-align: center;\r\n}\r\n#navigation, #footer-contact,#copyright{\r\n\tmargin-bottom:5em;\r\n}\r\n#mobile-menu ul{\r\n\ttext-align: center;\r\n}\r\n#mobile-menu ul li{\r\n\tpadding:1em 0;\r\n}\r\n\r\n#mobile-menu ul li{\r\n\tborder-bottom:1px solid #ececec;\r\n}\r\n#mobile-menu ul li:last-child{\r\n\tborder:none;\r\n}\r\n#map{\r\n\tbackground-color: #F2F2F2;\r\n}\r\n#payroll-content{\r\n\tpadding-left:1em;\r\n\tpadding-right:1em;\r\n\tpadding-bottom:5em;\r\n\tline-height: 2em;\r\n}\r\n#payroll-content p, .sub-description{\r\n\t/*color: #333333;*/\r\n\tfont-weight:lighter;text-align:center;\r\n}\r\n#payroll-content ul{\r\n\tlist-style-type: circle;\r\n\tpadding-left:3em;\r\n\tpadding-right:1em;\r\n\t/*color:#333333;*/\r\n}\r\n#forms ul{\r\n\tlist-style-type: circle;\r\n\tpadding-left: 2em;\r\n\tfont-size:15px;\r\n}\r\n#forms{\r\n\tline-height: 2em;\r\n\tmargin-bottom: 0;\r\n    padding:5em 0 5em 1em;\r\n\tbackground-color:whitesmoke;\r\n}\r\n.page-info-box{\r\n\tbackground-color:var(--main-color);\r\n\twidth:100%;\r\n\theight:85vh;/*change to permanent height in desktop*/\r\n\tdisplay:table;\r\n}\r\n.page-info-box p{\r\n\tcolor:white;\r\n\tfont-size:1.5em;\r\n\ttext-align: center;\r\n\tdisplay:table-cell;\r\n\tvertical-align: middle;\r\n}\r\n.content-box{\r\n\tpadding:3em 2em;\r\n\tz-index:0;/*-2*/\r\n\tline-height: 1.8em;\r\n\t/*color:#333;*/\r\n\tbackground-color:white;\r\n}\r\n.content-box h3, .content-box h4{\r\n\ttext-align: center;\r\n}\r\n.content-box.contact{\r\n    padding-top:5.5em;\r\n    padding-bottom:3em;\r\n}\r\n.content-box.about{\r\n    /*padding:1em 1.5em 8em 1.5em;*/\r\n    padding:3em 2em 10em 2em;\r\n}\r\n#mobile-menu{\r\n    width: 0;\r\n    height:90vh;\r\n\tfont-weight:bold;\r\n\tfont-size:16px;\r\n\tbackground-color:white;\r\n    position:absolute;\r\n    z-index: 2;\r\n    right:0;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    padding-top:60px;\r\n    display:block; \r\n    -webkit-box-shadow: rgba(0,0,0,0.1) -2px 0 2px;\r\n    -moz-box-shadow: rgba(0,0,0,0.1) -2px 0 2px;\r\n    box-shadow: rgba(0,0,0,0.1) -2px 0 2px;\r\n}\r\n.service-box-wrapper{\r\n    padding:0 0em;\r\n}\r\n.service-box-wrapper div{\r\n\twidth:100%;text-align:center;display:table;height:6em;\r\n}\r\n.service-box-wrapper h3{\r\n\tdisplay:table-cell;vertical-align:middle;\r\n    \r\n}\r\n#accounting-services ul{\r\n\tlist-style-type: circle;\r\n\tmargin-left: 3em;\r\n\tfont-size:14px;\r\n}\r\n#accounting-services{\r\n\tpadding:3em;\r\n\tline-height:1.5em;\r\n\tbackground-color:white;\r\n\tfont-size:15px;\r\n}\r\n.content-box.services{\r\n\tmargin-top:0;/*background-color:transparent*/padding:0 0 5em 0;\r\n}\r\n.row.services{\r\n\tdisplay: block;\r\n}\r\n/*services page*/\r\n.content-box.main-img{\r\n\tpadding:0;position:relative;\r\n\tmargin:0/*10%*/;background-color:transparent;\r\n}\r\n.overlay{\r\n\tbackground: linear-gradient(to bottom,transparent 0,rgba(0,0,0,0.65) 100%);\r\n\tposition:absolute;\r\n}\r\n.content-box.main-img img, .overlay{\r\n\twidth:100%;height:207px;\r\n}\r\n.content-box.main-img p{\r\n\tposition:absolute;padding:0 5%;text-align: center;color:white;top:25%;\r\n}\r\n.contact-info{\r\n\t/*color:#333333;*/\r\n\ttext-align: center;\r\n\tline-height:2.3em;\r\n\tmargin-bottom:5em;\r\n}\r\n.contact-info h4{\r\n\tmargin:0;\r\n\tfont-size:1.2em;\r\n}\r\n.contact-info img{\r\n\twidth: 30px;\r\n}\r\n.contact-info a{\r\n\tcolor: var(--main-color);\r\n}\r\n.contact-info a:hover{\r\n\tcolor:var(--main-color);\r\n}\r\n.row.contact{\r\n\tmargin-top:4.5em;\r\n}\r\n.logo-style{\r\n\ttext-align:center;\r\n\tpadding:1em 0;\r\n\tbackground-color:#72716b;\r\n\tcolor:white;\r\n}\r\n.image{\r\n\tposition:relative;\r\n\tz-index: -3;\r\n}\r\n.page-info-tag{\r\n\tposition: absolute;\r\n\tbottom: 25%;\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n\tcolor:white;\r\n\tz-index:1;\r\n}\r\n.page-info-tag span{\r\n\tfont-size:2em;\r\n\tfont-weight:500;\r\n}\r\n#contact-page-info{\r\n    background-color: white;padding-top:4em;padding-bottom:3em;\r\n}\r\n#contact-page-info h3{\r\n    /*color:#717171*/;font-size:20px;font-weight:500;text-align:center;padding:2em 1em 0em 1em;margin-top:0;\r\n}\r\n#menu-btn-wrapper{/*prevents change in size when opening & closing menu*/\r\n    width:100%;\r\n    height:3em;\r\n    box-sizing: border-box;\r\n}\r\n#menu-btn-wrapper:after{\r\n    content: \"\";\r\n    display:table;\r\n    clear:both;\r\n}\r\n.logo-style #header{\r\n    font-size: 30px;\r\n}\r\n.logo-style #subheader{\r\n    font-size:15px;\r\n}\r\n.logo-style #subheader-two{\r\n    font-size:10px;\r\n}\r\n#home-main-image{\r\n    position:relative;\r\n    width:100%;\r\n    height:360px;\r\n   background: url(\"http://jscpagrowth.com/assets/homepage-main-image.jpeg\") no-repeat center;\r\n    background-size: cover;\r\n}\r\n#home-main-image .overlay{\r\n    margin:0;height:360px;background:linear-gradient(transparent,rgba(0,0,0,0.4))\r\n}\r\n#home-main-image h1{\r\n    margin:0;text-align:center;color:white;\r\n    padding-top: 3em;font-size:1.5em;\r\n    animation-delay: 0.7s;\r\n}\r\n#home-main-image h3{\r\n    text-align: center;color:white;\r\n    font-size:12px;padding:0 5%;line-height:20px;\r\n    letter-spacing: 0.5px;\r\n    animation-delay: 0.7s;\r\n}\r\n#home-main-image div{\r\n    text-align: center;\r\n    margin-top:20%;\r\n    animation-delay: 1.1s;\r\n}\r\n#home-main-image div span{\r\n    font-size: 12px;\r\n    font-weight:bold;\r\n    margin:1%;\r\n    border:1px solid white;\r\n    background-color:rgba(1,2,3,0.5);\r\n    padding:1em;\r\n    cursor: pointer;\r\n    letter-spacing: 1.5px;\r\n}\r\n#home-main-image div span:hover{\r\n    background-color:rgba(1,2,3,0.7);\r\n}\r\nspan#contact-btn{\r\n    background-color:teal !important;\r\n    /*border:1px solid teal !important;*/\r\n}\r\nspan#contact-btn:hover{\r\n    background-color:#005959 !important;\r\n}\r\n#home-main-image div span a{\r\n    color:white;\r\n}\r\n@keyframes fadeDown{\r\n    0%{\r\n        opacity:0;\r\n        -webkit-transform: translateY(-20px);\r\n        -ms-transform: translateY(-20px);\r\n        -moz-transform: translateY(-20px);\r\n        transform: translateY(-20px);\r\n    }\r\n    100%{\r\n        opacity: 1;\r\n        -webkit-transform: translateY(0px);\r\n        -ms-transform: translateY(0px);\r\n        -moz-transform: translateY(0px);\r\n        transform: translateY(0px);\r\n    }\r\n}\r\n@keyframes fadeUp{\r\n    0%{\r\n        opacity:0;\r\n        -webkit-transform: translateY(20px);\r\n        -ms-transform: translateY(20px);\r\n        -moz-transform: translateY(20px);\r\n        transform: translateY(20px);\r\n    }\r\n    100%{\r\n        opacity: 1;\r\n        -webkit-transform: translateY(0px);\r\n        -ms-transform: translateY(0px);\r\n        -moz-transform: translateY(0px);\r\n        transform: translateY(0px);\r\n    }\r\n}\r\n.fadeUp{\r\n    -webkit-animation-name:fadeUp;\r\n    -moz-animation-name:fadeUp;\r\n    animation-name: fadeUp;\r\n}\r\n.fadeDown{\r\n    -webkit-animation-name:fadeDown;\r\n    -moz-animation-name:fadeDown;\r\n    animation-name:fadeDown;\r\n}\r\n.animate{\r\n    -webkit-animation-duration: 1.5s;\r\n    -moz-animation-duration: 1.5s;\r\n    animation-duration: 1.5s;\r\n    -webkit-animation-fill-mode:both;\r\n    -moz-animation-fill-mode:both;\r\n    animation-fill-mode:both;\r\n}\r\n.header-img{\r\n    position:relative;\r\n    height:207px;\r\n    width:100%;\r\n}\r\n.description{\r\n    font-size:16px;text-align:center;line-height:1.8em;color:#717171;\r\n    min-width:50px;max-width:580px;margin:0 auto;padding:0.5em 0.8em 6em 0.8em;\r\n    margin-top:1em;\r\n}\r\n.content-box-no-padding{\r\n\tbackground:white;\r\n\tpadding-top:5.5em;padding-bottom:3em;\r\n\tpadding-left:1em;padding-right:1em;\r\n}\r\n#form{\r\n\r\n}\r\nform{\r\n    background-color:#edecea;margin:0 auto;width:100%;/*color:#717171*/;box-sizing:border-box;\r\n    padding:3em 1em 5em 1em;\r\n}\r\nform h3{\r\n    padding:0;margin:0 0 2.5em 0;\r\n}\r\n.form-input{\r\n  width:100%;height:3em;padding-left:2em;border:1px solid white;border-radius:5px;\r\n  margin:1em 0 2.5em 0;box-sizing: border-box;\r\n}\r\n.form-text-input{\r\n  border:1px solid white;border-radius:5px;padding:1em 2em;\r\n  width:100%;height:200px;box-sizing:border-box;margin:1em 0 2.5em 0;\r\n}\r\n.form-btn{\r\n  padding:1em 2em;\r\n  border-radius:5px;\r\n}\r\n.send{\r\n  color:white;\r\n  background-color:var(--main-color);\r\n  border:1px solid white;\r\n}\r\n.send:hover{\r\n  background-color:#004473 ;\r\n  cursor:pointer;\r\n}\r\n.reset{\r\n   border:1px solid white;border-radius:5px;padding:1em 2em; \r\n}\r\n.reset:hover{\r\n  background-color:#72716b;\r\n  color:white;\r\n  cursor:pointer;\r\n}\r\n.payroll-icons{\r\n    padding-top:2.5em;\r\n    padding-bottom:3em;\r\n}\r\n.payroll-icons img{\r\n    width:45px;\r\n}\r\n.payroll-icons div{\r\n    text-align: center;\r\n}\r\n.payroll-icons p{\r\n    font-weight:bold !important;padding-top:2em;line-height: 1.5em;\r\n}\r\n#middle{\r\n    padding:4.5em 0;\r\n}\r\n.forms img{\r\n    width:100px;height: 100px;\r\n}\r\n.forms p{\r\n    line-height: normal;\r\n    font-size:14px;\r\n    padding:1em;\r\n    /*color:#717171;*/\r\n}\r\n.forms a{\r\n    /*color:#717171;*/\r\n    display: block;\r\n    margin-bottom:0.5em;\r\n}\r\n.forms a:hover{\r\n    color:teal;\r\n}\r\n.forms{\r\n    /*padding-top:3em;*/\r\n    z-index:1;\r\n}\r\n#form-bottom-row{\r\n    margin-bottom: 5em;\r\n}\r\n.calculator{\r\n    max-width:400px;background-color:teal;padding:2em;border:1px solid teal;border-radius: 10px;\r\n    margin:0 auto;margin-bottom:8em;\r\n}\r\n.calculator p{\r\n    color:white;\r\n}\r\n.calculator input{\r\n    background-color:teal;border:0;border-bottom:2px solid white;color:white;padding:0.5em;\r\n    width:100%;\r\n}\r\n.error{\r\n    border-bottom:2px solid red !important;\r\n}\r\n.calculator input::placeholder{\r\n    color:#eeeeee;\r\n}\r\n.calculator input:focus, .calculator button:focus{\r\n    outline:none;\r\n}\r\n.calculator button{\r\n    color:white;margin-top:2em;background-color:grey;cursor:pointer;padding:0.5em 1em;\r\n}\r\n.calculator button:hover{\r\n    background-color:#757575;\r\n}\r\n.calculator button#reset{\r\n    background-color:white;color:grey;\r\n}\r\n.calculator button#reset:hover{\r\n    background-color:#e0e0e0;\r\n}\r\n.subheader{\r\n    /*color:#717171*/;letter-spacing: 2px;text-align: center;margin-bottom: 2em;\r\n    font-weight:500;font-size:1.5em;\r\n}\r\narticle{\r\n    margin-bottom:4em;\r\n    text-align:center;\r\n}\r\n#all-services li{\r\n    font-size: 16px;\r\n}\r\n@media only screen and (max-width: 1000px){/*550px*/\r\n    .column-1,\r\n    .column-2,\r\n    .column-3,\r\n    .column-4,\r\n    .column-5,\r\n    .column-6,\r\n    .column-7,\r\n    .column-8,\r\n    .column-9,\r\n    .column-10,\r\n    .column-11,\r\n    .column-12 {\r\n        width: 100%;\r\n        float: none;\r\n    }\r\n\r\n    [class*=column]{\r\n      margin-left: 0;\r\n    }\r\n    [class*=column] + [class*=column]{\r\n    margin-left: 0;\r\n    }\r\n}\r\n@media only screen and (min-width:500px){\r\n    #home-main-image{\r\n        height:450px;\r\n    }\r\n    #home-main-image .overlay{\r\n        height:450px;\r\n    }\r\n    #home-main-image h1{\r\n        padding-top: 20%;font-size:2.2em;margin-left:10%;margin:0 10%;\r\n    }\r\n    #home-main-image h3{\r\n        /*font-weight:lighter;\r\n        font-size:17px;*/\r\n        font-size:15px;padding:0;line-height:24px;letter-spacing: 0.9px;text-shadow:2px 0 black;\r\n    }\r\n    #home-main-image div{\r\n        text-align: center;\r\n        margin-top:10%;\r\n    }\r\n    #home-main-image div span{\r\n        border:2px solid white;\r\n    }\r\n    span#contact-btn{\r\n        /*border:2px solid teal !important;*/\r\n    }\r\n    nav img{\r\n        width:80px;\r\n    }\r\n    .header-img{\r\n        position:relative;\r\n        height:300px;\r\n    }\r\n    .overlay{/*huh*/\r\n        height:300px;\r\n    }\r\n}\r\n@media only screen and (min-width:600px){\r\n    form{\r\n        padding:3em 4em 5em 4em;\r\n    }\r\n}\r\n@media only screen and (min-width: 650px){\r\n    #contact-info{\r\n        padding: 4em 1em;\r\n    }\r\n    .row.services{\r\n    display: -ms-flex; display: -webkit-flex; display:flex;\r\n    }\r\n    .logo-style #header{\r\n        font-size: 40px;\r\n    }\r\n    .logo-style #subheader{\r\n        font-size:17px;\r\n    }\r\n    .logo-style #subheader-two{\r\n        font-size:10px;\r\n    }\r\n     #middle{\r\n        padding:0;\r\n    }\r\n    .payroll-icons p{\r\n        padding-top:1.2em;\r\n    }\r\n\r\n}\r\n@media only screen and (min-width:700px){\r\n\r\n    #home-main-image{\r\n        height:800px;\r\n    }\r\n     #home-main-image .overlay{\r\n        height:800px;\r\n    }\r\n    #home-main-image h1{\r\n        padding-top: 18%;font-size:3.5em;margin-left:10%;margin:0 10%;\r\n    }\r\n    #home-main-image h3{\r\n        font-weight:lighter;\r\n        font-size:18px;\r\n        padding:5% 8% 0 8%;\r\n        line-height:30px;letter-spacing: 1px;\r\n    }\r\n    #home-main-image div{\r\n        text-align: center;\r\n        margin-top:10%;\r\n    }\r\n    #home-main-image div span{\r\n        font-size: 18px;\r\n        font-weight:500;\r\n    }\r\n    span#contact-btn{\r\n        /*border:2px solid teal !important;*/\r\n    }\r\n    .header-img{\r\n        position:relative;\r\n        height:400px;\r\n    }\r\n    .overlay{\r\n        height:400px;\r\n    }\r\n    .description{\r\n        font-size:18px;\r\n    }\r\n    form{\r\n        max-width:700px;\r\n    }\r\n    .payroll-icons p{\r\n        padding:0 1em;\r\n    }\r\n    #home-header{\r\n        font-size:25px;\r\n    }\r\n   \r\n}\r\n\r\n/*larger screens (e.g. desktop)*/\r\n@media only screen and (min-width: 1024px){\r\n    .service-box-wrapper{\r\n        padding:0 2em;\r\n    }\r\n    .communication-row-wrapper{\r\n        margin-top: 5em;margin-bottom: 5em;/*desktop: margin-top,margin-bottom: 3em*/\r\n    }\r\n    .inner-wrapper.first{\r\n        padding-bottom: 0;\r\n        border-right:1px solid grey;\r\n    }\r\n    .inner-wrapper.last{\r\n        padding-top: 0;\r\n    }\r\n    .inner-wrapper a{\r\n        pointer-events: none;/*msg and call for desktop*/\r\n    }\r\n    .inner-wrapper.first a{\r\n        pointer-events: auto;\r\n    }\r\n    \r\n    #home-main-image h1{\r\n        padding-top:15%;\r\n    }\r\n    #home-main-image h3{\r\n        padding:2% 8% 0 8%;\r\n    }\r\n    #home-main-image div{\r\n        margin-top:6%;\r\n    }\r\n    #footer-contact p{\r\n        font-size:16px;\r\n        color:grey;\r\n    }\r\n    footer .header{\r\n        font-size:20px !important;\r\n    }\r\n    #navigation{\r\n        font-size:18px;\r\n        color:grey;\r\n    }\r\n    #navigation a:hover{\r\n        color:white;\r\n    }\r\n    #copyright{\r\n        font-size: 14px;\r\n    }\r\n\t#menu-btn{\r\n\t\tdisplay:none;\r\n\t}\r\n\t#desktop-menu{\r\n\t\tdisplay:block;\r\n\t\ttext-align:center;\r\n\t\tmargin-top:1em;\r\n\t}\r\n\t#desktop-menu a{\r\n\t\tmargin:0 2.5em;\r\n\t\tpadding-bottom:0.5em;\r\n\t}\r\n\t#desktop-menu a:link, #desktop-menu a:visited{\r\n\t\tfont-size:12px;\r\n\t\tcolor: white;\r\n\t}\r\n\t#desktop-menu a:hover{\r\n\t\tborder-bottom: 2px solid var(--main-color);\r\n\t}\r\n\t.selected{\r\n\t\tborder-bottom: 2px solid var(--main-color);\r\n\t}\r\n    #home-main-image div span{\r\n        border:2.5px solid white;\r\n    }\r\n    span#contact-btn {\r\n        /*border:2.5px solid teal !important;*/\r\n    }\r\n    #home-main-image h3{\r\n        font-weight:lighter;\r\n        font-size:20px;\r\n        line-height:35px;letter-spacing: 1px;text-shadow:0;\r\n    }\r\n\t/*inner wrapper stuff*/\r\n\t#footer-contact {\r\n\t\ttext-align: left;\r\n\t}\r\n\t#navigation, #footer-contact,#copyright{\r\n\t\tmargin-bottom:0;\r\n\t}\r\n\t#home-main-pic{\r\n\t\twidth: 100%;\r\n\t\theight: 30vw;\r\n\t}\r\n\t#payroll-content{\r\n\t\tpadding-bottom:5.5em;\r\n\t}\r\n\t#forms ul, #payroll-content{\r\n\t\tfont-size:1em;\r\n\t}\r\n\t.page-info-box{\r\n\t\theight: 20em;\r\n\t\tposition:static;\r\n\t\tz-index:-2;\r\n\t}\r\n\t.page-info-box p{\r\n\t\tfont-size:2.5em;\r\n\t\tdisplay:block;\r\n\t\tmargin-top:2em;\r\n\t}\r\n    .page-info-tag span{\r\n        font-size:2.5em;\r\n    }\r\n\t.content-box{\r\n\t\tfont-size:20px;\r\n\t\tpadding:5em 4em 5em 4em;\r\n\t\tmargin:0 auto;\r\n\t\tposition:relative;\r\n\t\tmin-width:0;max-width: 1080px;\r\n\t\tbox-sizing: border-box;\r\n\t}\r\n\t.content-box h3{\r\n\t\tfont-size:1.5em;\r\n\t\tfont-weight:lighter;\r\n\t}\r\n\tfooter{\r\n\t\tbackground-color:black;\r\n\t\tpadding-top:7em;padding-bottom:8em;\r\n\t}\r\n\tfooter a{\r\n\t\tcolor: var(--main-color);\r\n        font-size: 16px;\r\n\t}\r\n\t#copyright{\r\n\t\tcolor: grey;\r\n\t}\r\n\t.content-box.main-img{\r\n\t\tmargin:-3.7em 3em 3em 3em;\r\n\t}\r\n\t\r\n\t.content-box.main-img img, .overlay{\r\n\t\theight:80vh;\r\n\t}\r\n\t.content-box.main-img p{\r\n\t\tpadding:0 20%;top:40%;\r\n\t}\r\n\tnav{\r\n\t\tbackground-color: rgba(0,0,0,0.7);\r\n\t\tpadding:0.5em 0.5em 1em 0.5em;\r\n        height:4em;\r\n\t}\r\n\t.image{\r\n\t\tmargin-top: -4.1em;\r\n\t}\r\n\t.logo-style{\r\n\t\ttext-align:center;\r\n\t\tpadding:1em 0;\r\n\t\tbackground-color:#72716b;\r\n\t\tcolor:white;\r\n\t}\r\n\t#main-text{\r\n\t\ttext-align: center;\r\n\t\tpadding: 5em 5em;\r\n\t\tmax-width:700px;\r\n\t\tmargin:0 auto;\r\n\t\tline-height: 1.7em;\r\n\t\tcolor: var(--header-color);\r\n\t\tfont-size:24px;\r\n\t}\r\n    .content-box.contact{\r\n        padding-bottom:6em;\r\n    }\r\n    #contact-page-info h3{\r\n        font-size:28px;\r\n    }\r\n    #menu-btn-wrapper{\r\n        display:none;\r\n    }\r\n    #mobile-menu{\r\n        display:none;\r\n    }\r\n    .logo-style #header{\r\n        font-size: 50px;\r\n    }\r\n    .logo-style #subheader{\r\n        font-size:18px;\r\n    }\r\n    .logo-style #subheader-two{\r\n        font-size:12px;\r\n    }\r\n    .header-img{\r\n        position:relative;\r\n        height:510px;\r\n    }\r\n    .overlay{\r\n        height:510px;\r\n    }\r\n    .content-box-no-padding{\r\n    \tmin-width:0;max-width:1080px;padding-left:0;padding-right:0;margin:0 auto;\r\n    }\r\n    .content-box.about{\r\n        padding:5em 6em 8em 6em;\r\n    }\r\n    #accounting-services ul{\r\n        list-style-type: circle;\r\n        margin-left: 3em;\r\n        font-size:18px;\r\n    }\r\n    #accounting-services{\r\n        padding:3em;\r\n        line-height:1.5em;\r\n        font-size:20px;\r\n    }\r\n    .payroll-icons p{\r\n        padding:0 2.5em;\r\n        line-height:1.5em;\r\n        font-size:15px;\r\n    }  \r\n    #services .row{\r\n        margin:0 auto;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 2560px){\r\n    #home-main-image h1{\r\n        padding-top: 10%;\r\n    }\r\n\r\n    #home-main-image div{\r\n        text-align: center;\r\n        margin-top:4%;\r\n    }\r\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/custom.css":
/*!************************!*\
  !*** ./src/custom.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./custom.css */ "./node_modules/css-loader/dist/cjs.js!./src/custom.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom.css */ "./src/custom.css");
/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_custom_css__WEBPACK_IMPORTED_MODULE_0__);


window.onload = function(){
    setInterval(function(){loadPage();}, 1000);
}
function loadPage(){
    document.getElementsByTagName("body")[0].style.display = "block";
}

let title = document.getElementsByTagName("title")[0].innerHTML;
let bool = title.includes("home");

if(bool){
    setNavbar();
}

function setNavbar(){
    window.addEventListener('scroll', function(e){
       
       /* let navbar = document.getElementsByTagName('nav')[0];*/
        let navbar = document.getElementById("home-nav");
        if(window.scrollY >10){
            navbar.style.backgroundColor="rgba(0,0,0,0.7)";
        }else{
            navbar.style.backgroundColor= "transparent";
        }
        
    });
}

function toggle(){
    let menuBtnDivs = document.getElementById("menu-btn").getElementsByTagName("div");
    let div = menuBtnDivs[0];
    let div2 = menuBtnDivs[1];
    if(div.classList.contains("lean-right")){//close menu
        div.classList.remove("lean-right");
        div2.classList.remove("lean-left");
        div.classList.add("top-parallel");
        div2.classList.add("bottom-parallel");
        closeNav();
    }else{
        div.classList.remove("top-parallel");
        div2.classList.remove("bottom-parallel");
        div.classList.add("lean-right");
        div2.classList.add("lean-left");
        openNav();
    }
}

function openNav(){
    document.getElementById("mobile-menu").style.width = "250px";
}

function closeNav(){
    document.getElementById("mobile-menu").style.width = "0";
}

function calcMortgagePayment(p,i,y){
    let r = (i/1200);
    let n = y*12;
    let x = Math.pow(1+r,n);
    let m = p*(r*x/(x-1));
    return formatNum(Math.round(m));
}

function calcTotalMortgage(p,i,y){
    let r = (i/1200);
    let n = y*12;
    let x = Math.pow(1+r,n);
    let m = p*(r*x/(x-1));
    return formatNum(Math.round(m*n));
}
function validateInput(){
    let mA = document.getElementById("mortgage-amount");
    let iR = document.getElementById("interest-rate");
    let mP = document.getElementById("mortgage-period");
    let p = parseFloat(mA.value);
    let i = parseFloat(iR.value);
    let y = parseInt(mP.value);
    if(p>0 && i>=0 && y>0){
        removeErrorClass(mA,iR,mP);
        return true;
    }else{
        if(p<=0 || !p){
            mA.className = "error";
        }else{
            mA.className = "";
        }
        if(i<0 || !i){
            iR.className = "error";
        }else{
            iR.className = "";
        }
        if(y<=0 || !y){
            mP.className = "error";
        }else{
            mP.className = "";
        }
        return false;
    }
}

function removeErrorClass(mA,iR,mP){
    if(mA.classList.contains("error")){
        mA.className = "";
    }
    if(iR.classList.contains("error")){
        iR.className = "";
    }
    if(mP.classList.contains("error")){
        mP.className = "";
    }
}

function enterMortgageInfo(){
    if(validateInput()){
        let p = document.getElementById("mortgage-amount").value;
        let i = document.getElementById("interest-rate").value;
        let y = document.getElementById("mortgage-period").value;
        document.getElementById("monthly-payment").innerHTML=calcMortgagePayment(p,i,y);
        document.getElementById("total-mortgage").innerHTML = calcTotalMortgage(p,i,y);
    }
}

function resetCalculator(){
    document.getElementById("mortgage-amount").value="";
    document.getElementById("interest-rate").value="";
    document.getElementById("mortgage-period").value="";
}

function formatNum(x){
    return "$ "+x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
}


window.toggle= toggle;
window.enterMortgageInfo = enterMortgageInfo;
window.resetCalculator = resetCalculator;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tLmNzcz85Mzc1Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsMkJBQTJCLG1CQUFPLENBQUMscUdBQWdEO0FBQ25GO0FBQ0EsY0FBYyxRQUFTLDhFQUE4RSxnQkFBZ0IsMkJB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Q0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsS0FBSyxLQUF3QyxFQUFFLEVBRTdDOztBQUVGLFFBQVEsc0JBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsd0NBQXdDLFdBQVcsRUFBRTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQ0FBc0M7QUFDdEMsR0FBRztBQUNIO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZGQSxjQUFjLG1CQUFPLENBQUMsb0hBQXVEOztBQUU3RSw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsbUdBQWdEOztBQUVyRTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7QUNuQmY7QUFBQTtBQUFBO0FBQXNCOztBQUV0QjtBQUNBLDJCQUEyQixZQUFZO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0RBQStEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyxFQUFFO0FBQ2pEOzs7QUFHQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwLDcwMCcpOyovXFxyXFxuXFxyXFxuOnJvb3R7XFxyXFxuICAgIC0tbWFpbi1jb2xvcjogdGVhbDtcXHJcXG4gICAgLS1oZWFkZXItY29sb3I6ICM3MTcxNzE7XFxyXFxuICAgIC0tdGV4dC1jb2xvcjogIzQwNDA0MTtcXHJcXG4gICAgLS1iZy1jb2xvcjogI0U4RThFMztcXHJcXG59XFxyXFxuYm9keXtcXHJcXG4gICAgcGFkZGluZzowO21hcmdpbjogMDtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXHJcXG59XFxyXFxuaDIsaDN7XFxyXFxuICAgIGNvbG9yOnZhcigtLWhlYWRlci1jb2xvcik7XFxyXFxufVxcclxcbmF7XFxyXFxuICAgIGNvbG9yOnZhcigtLXRleHQtY29sb3IpO1xcclxcbn1cXHJcXG4uY29udGFpbmVye1xcclxcbiAgICBwYWRkaW5nOiAxZW07XFxyXFxufVxcclxcbi5yb3csXFxyXFxuLmNvbHVtbntcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuLnJvd3tcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbn1cXHJcXG4ucm93OmJlZm9yZSwgXFxyXFxuLnJvdzphZnRlcntcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcclxcbn1cXHJcXG4ucm93OmFmdGVye1xcclxcbiAgICBjbGVhcjogYm90aDtcXHJcXG59XFxyXFxuW2NsYXNzKj1jb2x1bW5de1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGZsb2F0OmxlZnQ7XFxyXFxufVxcclxcbltjbGFzcyo9Y29sdW1uXSArIFtjbGFzcyo9Y29sdW1uXXtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEuNiU7XFxyXFxufVxcclxcbi5jb2x1bW4tMXtcXHJcXG4gICAgd2lkdGg6IDYuODY2NjY2NjY3JTtcXHJcXG59XFxyXFxuLmNvbHVtbi0ye1xcclxcbiAgICB3aWR0aDogMTUuMzMzMzMzMzMzMyU7XFxyXFxufVxcclxcbi5jb2x1bW4tM3tcXHJcXG4gICAgd2lkdGg6IDIzLjglO1xcclxcbn1cXHJcXG4uY29sdW1uLTR7XFxyXFxuICAgIHdpZHRoOiAzMi4yNjY2NjY2NjY3JTtcXHJcXG59XFxyXFxuLmNvbHVtbi01eyBcXHJcXG4gICAgd2lkdGg6IDQwLjczMzMzMzMzMzMlO1xcclxcbn1cXHJcXG4uY29sdW1uLTZ7XFxyXFxuICAgIHdpZHRoOiA0OS4yJTtcXHJcXG59XFxyXFxuLmNvbHVtbi03e1xcclxcbiAgICB3aWR0aDogNTcuNjY2NjY2NjY2NyU7XFxyXFxufVxcclxcbi5jb2x1bW4tOHtcXHJcXG4gICAgd2lkdGg6IDY2LjEzMzMzMzMzMzMlO1xcclxcbn1cXHJcXG4uY29sdW1uLTl7XFxyXFxuICAgIHdpZHRoOiA3NC42JTtcXHJcXG59XFxyXFxuLmNvbHVtbi0xMHtcXHJcXG4gICAgd2lkdGg6IDgzLjA2NjY2NjY3JTtcXHJcXG59XFxyXFxuLmNvbHVtbi0xMXtcXHJcXG4gICAgd2lkdGg6IDkxLjUzMzMzMzMzMzMlO1xcclxcbn1cXHJcXG4uY29sdW1uLTEye1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbn1cXHJcXG4vKm9mZnNldCovXFxyXFxuLmNvbHVtbi1vZmZzZXQtMXtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDguNDY2NjY2NjY3JTtcXHJcXG59XFxyXFxuLmNvbHVtbi1vZmZzZXQtMntcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDE2LjkzMzMzMzMzJTtcXHJcXG59XFxyXFxuLmNvbHVtbi1vZmZzZXQtM3tcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDI1LjQlO1xcclxcbn1cXHJcXG4uY29sdW1uLW9mZnNldC00e1xcclxcbiAgICBtYXJnaW4tbGVmdDogMzMuODY2NjY2NjY3JTtcXHJcXG59XFxyXFxuLmNvbHVtbi1vZmZzZXQtNXtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDQyLjMzMzMzMzMzMyU7XFxyXFxufVxcclxcbi5jb2x1bW4tb2Zmc2V0LTZ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1MC44JTtcXHJcXG59XFxyXFxuLmNvbHVtbi1vZmZzZXQtN3tcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDU5LjI2NjY2NjY2NyU7XFxyXFxufVxcclxcbi5jb2x1bW4tb2Zmc2V0LTh7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA2Ny43MzMzMzMzMzMlO1xcclxcbn1cXHJcXG4uY29sdW1uLW9mZnNldC05e1xcclxcbiAgICBtYXJnaW4tbGVmdDogNzYuMiU7XFxyXFxufVxcclxcbi5jb2x1bW4tb2Zmc2V0LTEwe1xcclxcbiAgICBtYXJnaW4tbGVmdDogODQuNjY2NjY2NjY3JTtcXHJcXG59XFxyXFxuLmNvbHVtbi1vZmZzZXQtMTF7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA5My4xMzMzMzMzMzMlO1xcclxcbn0vKmVuZCBvZiBteS1ncmlkKi9cXHJcXG5we1xcclxcblxcdG1hcmdpbjowO1xcclxcblxcdHBhZGRpbmc6MDtcXHJcXG59XFxyXFxuYXtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbm5hdntcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBoZWlnaHQ6M2VtO1xcclxcblxcdHBhZGRpbmc6MDtcXHJcXG5cXHR3aWR0aDoxMDAlO1xcclxcblxcdHotaW5kZXg6MjtcXHJcXG4gICAgcG9zaXRpb246Zml4ZWQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43KTtcXHJcXG59XFxyXFxubmF2IGltZ3tcXHJcXG4gICAgd2lkdGg6NTBweDt0b3A6MTUlO2xlZnQ6MmVtO3Bvc2l0aW9uOmFic29sdXRlO1xcclxcbn1cXHJcXG4jbG9nby13cmFwcGVye1xcclxcblxcdGhlaWdodDogNDBweDtcXHJcXG5cXHR3aWR0aDogMjc1cHg7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHRmbG9hdDpsZWZ0O1xcclxcbn1cXHJcXG4jbG9nby1pbWFnZXtcXHJcXG5cXHRoZWlnaHQ6IDUwcHg7XFxyXFxuXFx0d2lkdGg6IDkwcHg7XFxyXFxuXFx0ZmxvYXQ6IGxlZnQ7XFxyXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3MzLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL3dqcy1hY2NvdW50aW5nLXByb2plY3QvaW1hZ2VzL2pzbG9nb3llbGxvdy5qcGVnJyk7XFxyXFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG4jbG9nby10ZXh0e1xcclxcblxcdGhlaWdodDogNTBweDtcXHJcXG5cXHR3aWR0aDogMTMwcHg7XFxyXFxuXFx0ZmxvYXQ6IGxlZnQ7XFxyXFxuXFx0Zm9udC1zaXplOiAxMnB4O1xcclxcblxcdHBhZGRpbmctbGVmdDogMWVtO1xcclxcblxcdHBhZGRpbmctdG9wOiA1cHg7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHRiYWNrZ3JvdW5kLXNpemU6d2hpdGU7XFxyXFxufVxcclxcbm5hdjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBkaXNwbGF5OiB0YWJsZTtcXHJcXG4gICAgY2xlYXI6IGJvdGg7XFxyXFxufVxcclxcbiNtZW51LWJ0bntcXHJcXG4gICAgd2lkdGg6MmVtO1xcclxcbiAgICBoZWlnaHQ6MmVtO1xcclxcbiAgICBwYWRkaW5nOjFlbSAxZW0gMCAxZW07XFxyXFxuICAgIGZsb2F0OnJpZ2h0O1xcclxcbiAgICBjdXJzb3I6cG9pbnRlcjtcXHJcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxufVxcclxcbiNtZW51LWJ0biBkaXYge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcclxcblxcdGhlaWdodDogMnB4O1xcclxcblxcdHdpZHRoOiAyNXB4O1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuI21lbnUtYnRuIGRpdjpmaXJzdC1jaGlsZHtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOjAuNWVtO1xcclxcbn1cXHJcXG4jbWVudS1idG4gZGl2Omxhc3QtY2hpbGR7XFxyXFxuXFx0dG9wOjEuNWVtO1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIHRvcC1wYXJhbGxlbHtcXHJcXG4gICAgMCV7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMC41ZW0pIHJvdGF0ZSgxMzVkZWcpO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCV7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDBkZWcpO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi50b3AtcGFyYWxsZWx7XFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiB0b3AtcGFyYWxsZWw7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgYm90dG9tLXBhcmFsbGVse1xcclxcbiAgICAwJXtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAle1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLmJvdHRvbS1wYXJhbGxlbHtcXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGJvdHRvbS1wYXJhbGxlbDtcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBsZWFuLXJpZ2h0e1xcclxcbiAgICAwJXtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoMGRlZyk7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJXtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwLjVlbSkgcm90YXRlKDEzNWRlZyk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLmxlYW4tcmlnaHR7XFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBsZWFuLXJpZ2h0O1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGxlYW4tbGVmdHtcXHJcXG4gICAgMCV7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAle1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5sZWFuLWxlZnR7XFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBsZWFuLWxlZnQ7XFxyXFxufVxcclxcbi5hbmltYXRlLWJ0bntcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOjAuNXM7XFxyXFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxyXFxufVxcclxcbiNkZXNrdG9wLW1lbnV7XFxyXFxuXFx0ZGlzcGxheTpub25lO1xcclxcbn1cXHJcXG4jaG9tZS1tYWluLXBpY3tcXHJcXG5cXHQvKiBoZWlnaHQ6IDIwdmg7ICovXFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0aGVpZ2h0OiAzMHZ3O1xcclxcbn1cXHJcXG4ub2JqZWN0LWZpbGxfZmlsbHtcXHJcXG5cXHRvYmplY3QtZml0OiBmaWxsO1xcclxcbn1cXHJcXG5cXHJcXG4uY292ZXJ7XFxyXFxuXFx0d2lkdGg6MjYwcHg7XFxyXFxuXFx0b2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcbiNtYWluLXRleHR7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdHBhZGRpbmc6IDVlbSAxZW07LypwYWRkaW5nOiAzZW0gM2VtKi9cXHJcXG5cXHRtYXgtd2lkdGg6MjBlbTtcXHJcXG5cXHRtYXJnaW46MCBhdXRvO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjdlbTtcXHJcXG5cXHRcXHJcXG5cXHRjb2xvcjogIzY2NWQ1ZDtcXHJcXG5cXHRmb250LXNpemU6MThweDtcXHJcXG59XFxyXFxuI3NlcnZpY2UtcGlje1xcclxcblxcdG1hcmdpbjogMCBhdXRvO1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdGhlaWdodDo0NXB4O1xcclxcbn1cXHJcXG4uc2VydmljZS1oZWFkZXJ7XFxyXFxuXFx0Zm9udC1zaXplOjIwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcXHJcXG59XFxyXFxuLnNlcnZpY2UtZGVzY3JpcHRpb257XFxyXFxuXFx0Zm9udC1zaXplOjE4cHg7XFxyXFxuICAgIG1heC13aWR0aDogMjgwcHg7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG4uc2VydmljZS1oZWFkZXIsIC5zZXJ2aWNlLWRlc2NyaXB0aW9ue1xcclxcblxcdGNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuI3NlcnZpY2Vze1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNFQ0VDRUM7XFxyXFxuXFx0cGFkZGluZzogNWVtIDJlbSAwZW0gMmVtOy8qNSAyIDAgMiovXFxyXFxufVxcclxcbiNyZWFkLW1vcmUtYnRue1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRwYWRkaW5nOjFlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0d2lkdGg6IDYuMmVtO1xcclxcblxcdG1hcmdpbjogNWVtIGF1dG8gNWVtIGF1dG87XFxyXFxufVxcclxcbiNzZXJ2aWNlcyAucm93e1xcclxcbiAgICBtYXgtd2lkdGg6IDIwMDBweDtcXHJcXG59XFxyXFxuI3NlcnZpY2VzIC5jb2x1bW4tNHtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTo0ZW07XFxyXFxufVxcclxcbiNjb250YWN0LWluZm97XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdHBhZGRpbmc6IDZlbSAxZW07XFxyXFxufVxcclxcbiNjb250YWN0LWluZm8gcHtcXHJcXG5cXHRsaW5lLWhlaWdodDogMS44ZW07XFxyXFxuXFx0Zm9udC1zaXplOiAxN3B4O1xcclxcblxcdG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG59XFxyXFxuI2NvbnRhY3QtaW5mbyBoM3tcXHJcXG5cXHRmb250LXdlaWdodDogbm9ybWFsO1xcclxcblxcdC8qY29sb3I6IHJnYigxMTMsMTEzLDExMyk7Ki9cXHJcXG5cXHRmb250LXNpemU6MjVweDtcXHJcXG59XFxyXFxuI2NvbnRhY3QtaW5mbyBhe1xcclxcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxufVxcclxcbi5tYXAtY29udGFjdC13cmFwcGVye1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNFQ0VDRUM7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTowO1xcclxcbn1cXHJcXG4uYnRue1xcclxcblxcdHBhZGRpbmc6IDFlbTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0d2lkdGg6IDEwZW07XFxyXFxuXFx0bWFyZ2luOiAyZW0gYXV0bztcXHJcXG5cXHQvKiBmb250LXNpemU6IDE1cHg7ICovXFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbi5jb21tdW5pY2F0aW9uLXJvdy13cmFwcGVye1xcclxcblxcdG1hcmdpbi10b3A6IDVlbTttYXJnaW4tYm90dG9tOiA1ZW07Lypmb250LXNpemU6MTRweDtzZGVza3RvcDogbWFyZ2luLXRvcCxtYXJnaW4tYm90dG9tOiAzZW0qL1xcclxcbn1cXHJcXG4uY29tbXVuaWNhdGlvbi1yb3ctd3JhcHBlciBwe1xcclxcblxcdGZvbnQtc2l6ZToxN3B4O1xcclxcbn1cXHJcXG4uaW5uZXItd3JhcHBlcntcXHJcXG5cXHR3aWR0aDoxMDAlO3RleHQtYWxpZ246IGNlbnRlclxcclxcbn1cXHJcXG4uaW5uZXItd3JhcHBlciBkaXZ7XFxyXFxuXFx0bWF4LXdpZHRoOjI5ZW07XFxyXFxuXFx0ZGlzcGxheTpibG9jaztcXHJcXG5cXHRtYXJnaW46MCBhdXRvO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRwYWRkaW5nOiAwZW0gM2VtOy8qMWVtKi9cXHJcXG5cXHQvKnBhZGRpbmc6IDNlbSAzZW07IGZvciBkZXNrdG9wKi9cXHJcXG59XFxyXFxuLmlubmVyLXdyYXBwZXIuZmlyc3R7XFxyXFxuXFx0LyptYXJnaW4tdG9wOiAyZW07Ki9cXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogMWVtOy8qMCBpbiBub24tbW9iaWxlKi9cXHJcXG5cXHRib3JkZXItcmlnaHQ6MHB4O1xcclxcbn1cXHJcXG4uaW5uZXItd3JhcHBlci5sYXN0e1xcclxcblxcdC8qbWFyZ2luLWJvdHRvbTogNWVtOyovXFxyXFxuXFx0cGFkZGluZy10b3A6IDFlbTsvKjAgaW4gbm9uLW1vYmlsZSovXFxyXFxufVxcclxcbi5pbm5lci13cmFwcGVyIGgye1xcclxcblxcdGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcclxcblxcdGZvbnQtc2l6ZTogMjVweDsvKmRlc2t0b3AgZm9udC1zaXplOiAyZW0qL1xcclxcblxcdFxcclxcblxcdC8qY29sb3I6IGdyZXk7Ki9cXHJcXG59XFxyXFxuI2hvbWUtaGVhZGVye1xcclxcbiAgICBjb2xvcjp2YXIoLS1oZWFkZXItY29sb3IpO2ZvbnQtc2l6ZTogMjJweDttYXJnaW4tdG9wOjIuNWVtO21hcmdpbi1ib3R0b206MC41ZW07Zm9udC13ZWlnaHQ6NTAwO1xcclxcbn1cXHJcXG4uaW5uZXItd3JhcHBlciBwe1xcclxcblxcdC8qbGluZS1oZWlnaHQ6M2VtOyovXFxyXFxuXFx0bGluZS1oZWlnaHQ6IDJlbTtcXHJcXG59XFxyXFxuLmlubmVyLXdyYXBwZXIgYXtcXHJcXG5cXHRwb2ludGVyLWV2ZW50czogYXV0bzsvKm5vbmUgZm9yIGRlc2t0b3AqL1xcclxcbn1cXHJcXG5cXHJcXG51bHtcXHJcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuXFx0cGFkZGluZzowO1xcclxcbn1cXHJcXG4jbmF2aWdhdGlvbntcXHJcXG5cXHR0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG5cXHRmb250LXNpemU6MTJweDtcXHJcXG59XFxyXFxudWwgYTpsaW5rLCB1bCBhOnZpc2l0ZWR7XFxyXFxuXFx0Y29sb3I6dmFyKC0tbWFpbi1jb2xvcik7XFxyXFxufVxcclxcbiNuYXZpZ2F0aW9uIHVsIGxpe1xcclxcblxcdG1hcmdpbi1ib3R0b206MmVtO1xcclxcbn1cXHJcXG5mb290ZXJ7XFxyXFxuXFx0cGFkZGluZzogMTBlbSAwIDRlbSAwO1xcclxcblxcdGNvbG9yOiMzMzMzMzM7XFxyXFxufVxcclxcbiNjb3B5cmlnaHR7XFxyXFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG5cXHRmb250LXNpemU6MTFweDtcXHJcXG5cXHRtYXJnaW46MCBhdXRvO1xcclxcblxcdHdpZHRoOjE1ZW07XFxyXFxufVxcclxcbi5oZWFkZXJ7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbToxLjVlbTtmb250LXNpemU6MThweDsvKmNvbG9yOmdyZXkqL1xcclxcbn1cXHJcXG4jZm9vdGVyLWNvbnRhY3QgcHtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxufVxcclxcbiNmb290ZXItY29udGFjdCB7XFxyXFxuXFx0Zm9udC1zaXplOjEzcHg7XFxyXFxuXFx0bWF4LXdpZHRoIDoxNWVtO1xcdFxcclxcblxcdG1hcmdpbjowIGF1dG87XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4jbmF2aWdhdGlvbiwgI2Zvb3Rlci1jb250YWN0LCNjb3B5cmlnaHR7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTo1ZW07XFxyXFxufVxcclxcbiNtb2JpbGUtbWVudSB1bHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbiNtb2JpbGUtbWVudSB1bCBsaXtcXHJcXG5cXHRwYWRkaW5nOjFlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4jbW9iaWxlLW1lbnUgdWwgbGl7XFxyXFxuXFx0Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2VjZWNlYztcXHJcXG59XFxyXFxuI21vYmlsZS1tZW51IHVsIGxpOmxhc3QtY2hpbGR7XFxyXFxuXFx0Ym9yZGVyOm5vbmU7XFxyXFxufVxcclxcbiNtYXB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcXHJcXG59XFxyXFxuI3BheXJvbGwtY29udGVudHtcXHJcXG5cXHRwYWRkaW5nLWxlZnQ6MWVtO1xcclxcblxcdHBhZGRpbmctcmlnaHQ6MWVtO1xcclxcblxcdHBhZGRpbmctYm90dG9tOjVlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMmVtO1xcclxcbn1cXHJcXG4jcGF5cm9sbC1jb250ZW50IHAsIC5zdWItZGVzY3JpcHRpb257XFxyXFxuXFx0Lypjb2xvcjogIzMzMzMzMzsqL1xcclxcblxcdGZvbnQtd2VpZ2h0OmxpZ2h0ZXI7dGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxufVxcclxcbiNwYXlyb2xsLWNvbnRlbnQgdWx7XFxyXFxuXFx0bGlzdC1zdHlsZS10eXBlOiBjaXJjbGU7XFxyXFxuXFx0cGFkZGluZy1sZWZ0OjNlbTtcXHJcXG5cXHRwYWRkaW5nLXJpZ2h0OjFlbTtcXHJcXG5cXHQvKmNvbG9yOiMzMzMzMzM7Ki9cXHJcXG59XFxyXFxuI2Zvcm1zIHVse1xcclxcblxcdGxpc3Qtc3R5bGUtdHlwZTogY2lyY2xlO1xcclxcblxcdHBhZGRpbmctbGVmdDogMmVtO1xcclxcblxcdGZvbnQtc2l6ZToxNXB4O1xcclxcbn1cXHJcXG4jZm9ybXN7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDJlbTtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICBwYWRkaW5nOjVlbSAwIDVlbSAxZW07XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjp3aGl0ZXNtb2tlO1xcclxcbn1cXHJcXG4ucGFnZS1pbmZvLWJveHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1haW4tY29sb3IpO1xcclxcblxcdHdpZHRoOjEwMCU7XFxyXFxuXFx0aGVpZ2h0Ojg1dmg7LypjaGFuZ2UgdG8gcGVybWFuZW50IGhlaWdodCBpbiBkZXNrdG9wKi9cXHJcXG5cXHRkaXNwbGF5OnRhYmxlO1xcclxcbn1cXHJcXG4ucGFnZS1pbmZvLWJveCBwe1xcclxcblxcdGNvbG9yOndoaXRlO1xcclxcblxcdGZvbnQtc2l6ZToxLjVlbTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0ZGlzcGxheTp0YWJsZS1jZWxsO1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcbi5jb250ZW50LWJveHtcXHJcXG5cXHRwYWRkaW5nOjNlbSAyZW07XFxyXFxuXFx0ei1pbmRleDowOy8qLTIqL1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjhlbTtcXHJcXG5cXHQvKmNvbG9yOiMzMzM7Ki9cXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcclxcbn1cXHJcXG4uY29udGVudC1ib3ggaDMsIC5jb250ZW50LWJveCBoNHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5jb250ZW50LWJveC5jb250YWN0e1xcclxcbiAgICBwYWRkaW5nLXRvcDo1LjVlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206M2VtO1xcclxcbn1cXHJcXG4uY29udGVudC1ib3guYWJvdXR7XFxyXFxuICAgIC8qcGFkZGluZzoxZW0gMS41ZW0gOGVtIDEuNWVtOyovXFxyXFxuICAgIHBhZGRpbmc6M2VtIDJlbSAxMGVtIDJlbTtcXHJcXG59XFxyXFxuI21vYmlsZS1tZW51e1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gICAgaGVpZ2h0Ojkwdmg7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6Ym9sZDtcXHJcXG5cXHRmb250LXNpemU6MTZweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcclxcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgcmlnaHQ6MDtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbiAgICBwYWRkaW5nLXRvcDo2MHB4O1xcclxcbiAgICBkaXNwbGF5OmJsb2NrOyBcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiByZ2JhKDAsMCwwLDAuMSkgLTJweCAwIDJweDtcXHJcXG4gICAgLW1vei1ib3gtc2hhZG93OiByZ2JhKDAsMCwwLDAuMSkgLTJweCAwIDJweDtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLDAsMCwwLjEpIC0ycHggMCAycHg7XFxyXFxufVxcclxcbi5zZXJ2aWNlLWJveC13cmFwcGVye1xcclxcbiAgICBwYWRkaW5nOjAgMGVtO1xcclxcbn1cXHJcXG4uc2VydmljZS1ib3gtd3JhcHBlciBkaXZ7XFxyXFxuXFx0d2lkdGg6MTAwJTt0ZXh0LWFsaWduOmNlbnRlcjtkaXNwbGF5OnRhYmxlO2hlaWdodDo2ZW07XFxyXFxufVxcclxcbi5zZXJ2aWNlLWJveC13cmFwcGVyIGgze1xcclxcblxcdGRpc3BsYXk6dGFibGUtY2VsbDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XFxyXFxuICAgIFxcclxcbn1cXHJcXG4jYWNjb3VudGluZy1zZXJ2aWNlcyB1bHtcXHJcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcXHJcXG5cXHRtYXJnaW4tbGVmdDogM2VtO1xcclxcblxcdGZvbnQtc2l6ZToxNHB4O1xcclxcbn1cXHJcXG4jYWNjb3VudGluZy1zZXJ2aWNlc3tcXHJcXG5cXHRwYWRkaW5nOjNlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDoxLjVlbTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcclxcblxcdGZvbnQtc2l6ZToxNXB4O1xcclxcbn1cXHJcXG4uY29udGVudC1ib3guc2VydmljZXN7XFxyXFxuXFx0bWFyZ2luLXRvcDowOy8qYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudCovcGFkZGluZzowIDAgNWVtIDA7XFxyXFxufVxcclxcbi5yb3cuc2VydmljZXN7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbi8qc2VydmljZXMgcGFnZSovXFxyXFxuLmNvbnRlbnQtYm94Lm1haW4taW1ne1xcclxcblxcdHBhZGRpbmc6MDtwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG5cXHRtYXJnaW46MC8qMTAlKi87YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuLm92ZXJsYXl7XFxyXFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSx0cmFuc3BhcmVudCAwLHJnYmEoMCwwLDAsMC42NSkgMTAwJSk7XFxyXFxuXFx0cG9zaXRpb246YWJzb2x1dGU7XFxyXFxufVxcclxcbi5jb250ZW50LWJveC5tYWluLWltZyBpbWcsIC5vdmVybGF5e1xcclxcblxcdHdpZHRoOjEwMCU7aGVpZ2h0OjIwN3B4O1xcclxcbn1cXHJcXG4uY29udGVudC1ib3gubWFpbi1pbWcgcHtcXHJcXG5cXHRwb3NpdGlvbjphYnNvbHV0ZTtwYWRkaW5nOjAgNSU7dGV4dC1hbGlnbjogY2VudGVyO2NvbG9yOndoaXRlO3RvcDoyNSU7XFxyXFxufVxcclxcbi5jb250YWN0LWluZm97XFxyXFxuXFx0Lypjb2xvcjojMzMzMzMzOyovXFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGxpbmUtaGVpZ2h0OjIuM2VtO1xcclxcblxcdG1hcmdpbi1ib3R0b206NWVtO1xcclxcbn1cXHJcXG4uY29udGFjdC1pbmZvIGg0e1xcclxcblxcdG1hcmdpbjowO1xcclxcblxcdGZvbnQtc2l6ZToxLjJlbTtcXHJcXG59XFxyXFxuLmNvbnRhY3QtaW5mbyBpbWd7XFxyXFxuXFx0d2lkdGg6IDMwcHg7XFxyXFxufVxcclxcbi5jb250YWN0LWluZm8gYXtcXHJcXG5cXHRjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxufVxcclxcbi5jb250YWN0LWluZm8gYTpob3ZlcntcXHJcXG5cXHRjb2xvcjp2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG59XFxyXFxuLnJvdy5jb250YWN0e1xcclxcblxcdG1hcmdpbi10b3A6NC41ZW07XFxyXFxufVxcclxcbi5sb2dvLXN0eWxle1xcclxcblxcdHRleHQtYWxpZ246Y2VudGVyO1xcclxcblxcdHBhZGRpbmc6MWVtIDA7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjojNzI3MTZiO1xcclxcblxcdGNvbG9yOndoaXRlO1xcclxcbn1cXHJcXG4uaW1hZ2V7XFxyXFxuXFx0cG9zaXRpb246cmVsYXRpdmU7XFxyXFxuXFx0ei1pbmRleDogLTM7XFxyXFxufVxcclxcbi5wYWdlLWluZm8tdGFne1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRib3R0b206IDI1JTtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0Y29sb3I6d2hpdGU7XFxyXFxuXFx0ei1pbmRleDoxO1xcclxcbn1cXHJcXG4ucGFnZS1pbmZvLXRhZyBzcGFue1xcclxcblxcdGZvbnQtc2l6ZToyZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6NTAwO1xcclxcbn1cXHJcXG4jY29udGFjdC1wYWdlLWluZm97XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO3BhZGRpbmctdG9wOjRlbTtwYWRkaW5nLWJvdHRvbTozZW07XFxyXFxufVxcclxcbiNjb250YWN0LXBhZ2UtaW5mbyBoM3tcXHJcXG4gICAgLypjb2xvcjojNzE3MTcxKi87Zm9udC1zaXplOjIwcHg7Zm9udC13ZWlnaHQ6NTAwO3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6MmVtIDFlbSAwZW0gMWVtO21hcmdpbi10b3A6MDtcXHJcXG59XFxyXFxuI21lbnUtYnRuLXdyYXBwZXJ7LypwcmV2ZW50cyBjaGFuZ2UgaW4gc2l6ZSB3aGVuIG9wZW5pbmcgJiBjbG9zaW5nIG1lbnUqL1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbiAgICBoZWlnaHQ6M2VtO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG4jbWVudS1idG4td3JhcHBlcjphZnRlcntcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIGRpc3BsYXk6dGFibGU7XFxyXFxuICAgIGNsZWFyOmJvdGg7XFxyXFxufVxcclxcbi5sb2dvLXN0eWxlICNoZWFkZXJ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuLmxvZ28tc3R5bGUgI3N1YmhlYWRlcntcXHJcXG4gICAgZm9udC1zaXplOjE1cHg7XFxyXFxufVxcclxcbi5sb2dvLXN0eWxlICNzdWJoZWFkZXItdHdve1xcclxcbiAgICBmb250LXNpemU6MTBweDtcXHJcXG59XFxyXFxuI2hvbWUtbWFpbi1pbWFnZXtcXHJcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgIGhlaWdodDozNjBweDtcXHJcXG4gICBiYWNrZ3JvdW5kOiB1cmwoXFxcImh0dHA6Ly9qc2NwYWdyb3d0aC5jb20vYXNzZXRzL2hvbWVwYWdlLW1haW4taW1hZ2UuanBlZ1xcXCIpIG5vLXJlcGVhdCBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcbiNob21lLW1haW4taW1hZ2UgLm92ZXJsYXl7XFxyXFxuICAgIG1hcmdpbjowO2hlaWdodDozNjBweDtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCxyZ2JhKDAsMCwwLDAuNCkpXFxyXFxufVxcclxcbiNob21lLW1haW4taW1hZ2UgaDF7XFxyXFxuICAgIG1hcmdpbjowO3RleHQtYWxpZ246Y2VudGVyO2NvbG9yOndoaXRlO1xcclxcbiAgICBwYWRkaW5nLXRvcDogM2VtO2ZvbnQtc2l6ZToxLjVlbTtcXHJcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjdzO1xcclxcbn1cXHJcXG4jaG9tZS1tYWluLWltYWdlIGgze1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7Y29sb3I6d2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZToxMnB4O3BhZGRpbmc6MCA1JTtsaW5lLWhlaWdodDoyMHB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxyXFxuICAgIGFuaW1hdGlvbi1kZWxheTogMC43cztcXHJcXG59XFxyXFxuI2hvbWUtbWFpbi1pbWFnZSBkaXZ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDoyMCU7XFxyXFxuICAgIGFuaW1hdGlvbi1kZWxheTogMS4xcztcXHJcXG59XFxyXFxuI2hvbWUtbWFpbi1pbWFnZSBkaXYgc3BhbntcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBmb250LXdlaWdodDpib2xkO1xcclxcbiAgICBtYXJnaW46MSU7XFxyXFxuICAgIGJvcmRlcjoxcHggc29saWQgd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgxLDIsMywwLjUpO1xcclxcbiAgICBwYWRkaW5nOjFlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XFxyXFxufVxcclxcbiNob21lLW1haW4taW1hZ2UgZGl2IHNwYW46aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgxLDIsMywwLjcpO1xcclxcbn1cXHJcXG5zcGFuI2NvbnRhY3QtYnRue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRlYWwgIWltcG9ydGFudDtcXHJcXG4gICAgLypib3JkZXI6MXB4IHNvbGlkIHRlYWwgIWltcG9ydGFudDsqL1xcclxcbn1cXHJcXG5zcGFuI2NvbnRhY3QtYnRuOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDU5NTkgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuI2hvbWUtbWFpbi1pbWFnZSBkaXYgc3BhbiBhe1xcclxcbiAgICBjb2xvcjp3aGl0ZTtcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBmYWRlRG93bntcXHJcXG4gICAgMCV7XFxyXFxuICAgICAgICBvcGFjaXR5OjA7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XFxyXFxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcXHJcXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJXtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcclxcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcclxcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcclxcbiAgICB9XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgZmFkZVVwe1xcclxcbiAgICAwJXtcXHJcXG4gICAgICAgIG9wYWNpdHk6MDtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xcclxcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXHJcXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCV7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXHJcXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXHJcXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4uZmFkZVVwe1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOmZhZGVVcDtcXHJcXG4gICAgLW1vei1hbmltYXRpb24tbmFtZTpmYWRlVXA7XFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlVXA7XFxyXFxufVxcclxcbi5mYWRlRG93bntcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYWRlRG93bjtcXHJcXG4gICAgLW1vei1hbmltYXRpb24tbmFtZTpmYWRlRG93bjtcXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6ZmFkZURvd247XFxyXFxufVxcclxcbi5hbmltYXRle1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcXHJcXG4gICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDEuNXM7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7XFxyXFxuICAgIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO1xcclxcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7XFxyXFxufVxcclxcbi5oZWFkZXItaW1ne1xcclxcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OjIwN3B4O1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbn1cXHJcXG4uZGVzY3JpcHRpb257XFxyXFxuICAgIGZvbnQtc2l6ZToxNnB4O3RleHQtYWxpZ246Y2VudGVyO2xpbmUtaGVpZ2h0OjEuOGVtO2NvbG9yOiM3MTcxNzE7XFxyXFxuICAgIG1pbi13aWR0aDo1MHB4O21heC13aWR0aDo1ODBweDttYXJnaW46MCBhdXRvO3BhZGRpbmc6MC41ZW0gMC44ZW0gNmVtIDAuOGVtO1xcclxcbiAgICBtYXJnaW4tdG9wOjFlbTtcXHJcXG59XFxyXFxuLmNvbnRlbnQtYm94LW5vLXBhZGRpbmd7XFxyXFxuXFx0YmFja2dyb3VuZDp3aGl0ZTtcXHJcXG5cXHRwYWRkaW5nLXRvcDo1LjVlbTtwYWRkaW5nLWJvdHRvbTozZW07XFxyXFxuXFx0cGFkZGluZy1sZWZ0OjFlbTtwYWRkaW5nLXJpZ2h0OjFlbTtcXHJcXG59XFxyXFxuI2Zvcm17XFxyXFxuXFxyXFxufVxcclxcbmZvcm17XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6I2VkZWNlYTttYXJnaW46MCBhdXRvO3dpZHRoOjEwMCU7Lypjb2xvcjojNzE3MTcxKi87Ym94LXNpemluZzpib3JkZXItYm94O1xcclxcbiAgICBwYWRkaW5nOjNlbSAxZW0gNWVtIDFlbTtcXHJcXG59XFxyXFxuZm9ybSBoM3tcXHJcXG4gICAgcGFkZGluZzowO21hcmdpbjowIDAgMi41ZW0gMDtcXHJcXG59XFxyXFxuLmZvcm0taW5wdXR7XFxyXFxuICB3aWR0aDoxMDAlO2hlaWdodDozZW07cGFkZGluZy1sZWZ0OjJlbTtib3JkZXI6MXB4IHNvbGlkIHdoaXRlO2JvcmRlci1yYWRpdXM6NXB4O1xcclxcbiAgbWFyZ2luOjFlbSAwIDIuNWVtIDA7Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuLmZvcm0tdGV4dC1pbnB1dHtcXHJcXG4gIGJvcmRlcjoxcHggc29saWQgd2hpdGU7Ym9yZGVyLXJhZGl1czo1cHg7cGFkZGluZzoxZW0gMmVtO1xcclxcbiAgd2lkdGg6MTAwJTtoZWlnaHQ6MjAwcHg7Ym94LXNpemluZzpib3JkZXItYm94O21hcmdpbjoxZW0gMCAyLjVlbSAwO1xcclxcbn1cXHJcXG4uZm9ybS1idG57XFxyXFxuICBwYWRkaW5nOjFlbSAyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOjVweDtcXHJcXG59XFxyXFxuLnNlbmR7XFxyXFxuICBjb2xvcjp3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6dmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICBib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG4uc2VuZDpob3ZlcntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IzAwNDQ3MyA7XFxyXFxuICBjdXJzb3I6cG9pbnRlcjtcXHJcXG59XFxyXFxuLnJlc2V0e1xcclxcbiAgIGJvcmRlcjoxcHggc29saWQgd2hpdGU7Ym9yZGVyLXJhZGl1czo1cHg7cGFkZGluZzoxZW0gMmVtOyBcXHJcXG59XFxyXFxuLnJlc2V0OmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjojNzI3MTZiO1xcclxcbiAgY29sb3I6d2hpdGU7XFxyXFxuICBjdXJzb3I6cG9pbnRlcjtcXHJcXG59XFxyXFxuLnBheXJvbGwtaWNvbnN7XFxyXFxuICAgIHBhZGRpbmctdG9wOjIuNWVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTozZW07XFxyXFxufVxcclxcbi5wYXlyb2xsLWljb25zIGltZ3tcXHJcXG4gICAgd2lkdGg6NDVweDtcXHJcXG59XFxyXFxuLnBheXJvbGwtaWNvbnMgZGl2e1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5wYXlyb2xsLWljb25zIHB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OmJvbGQgIWltcG9ydGFudDtwYWRkaW5nLXRvcDoyZW07bGluZS1oZWlnaHQ6IDEuNWVtO1xcclxcbn1cXHJcXG4jbWlkZGxle1xcclxcbiAgICBwYWRkaW5nOjQuNWVtIDA7XFxyXFxufVxcclxcbi5mb3JtcyBpbWd7XFxyXFxuICAgIHdpZHRoOjEwMHB4O2hlaWdodDogMTAwcHg7XFxyXFxufVxcclxcbi5mb3JtcyBwe1xcclxcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcclxcbiAgICBmb250LXNpemU6MTRweDtcXHJcXG4gICAgcGFkZGluZzoxZW07XFxyXFxuICAgIC8qY29sb3I6IzcxNzE3MTsqL1xcclxcbn1cXHJcXG4uZm9ybXMgYXtcXHJcXG4gICAgLypjb2xvcjojNzE3MTcxOyovXFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOjAuNWVtO1xcclxcbn1cXHJcXG4uZm9ybXMgYTpob3ZlcntcXHJcXG4gICAgY29sb3I6dGVhbDtcXHJcXG59XFxyXFxuLmZvcm1ze1xcclxcbiAgICAvKnBhZGRpbmctdG9wOjNlbTsqL1xcclxcbiAgICB6LWluZGV4OjE7XFxyXFxufVxcclxcbiNmb3JtLWJvdHRvbS1yb3d7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVlbTtcXHJcXG59XFxyXFxuLmNhbGN1bGF0b3J7XFxyXFxuICAgIG1heC13aWR0aDo0MDBweDtiYWNrZ3JvdW5kLWNvbG9yOnRlYWw7cGFkZGluZzoyZW07Ym9yZGVyOjFweCBzb2xpZCB0ZWFsO2JvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIG1hcmdpbjowIGF1dG87bWFyZ2luLWJvdHRvbTo4ZW07XFxyXFxufVxcclxcbi5jYWxjdWxhdG9yIHB7XFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbn1cXHJcXG4uY2FsY3VsYXRvciBpbnB1dHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp0ZWFsO2JvcmRlcjowO2JvcmRlci1ib3R0b206MnB4IHNvbGlkIHdoaXRlO2NvbG9yOndoaXRlO3BhZGRpbmc6MC41ZW07XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxufVxcclxcbi5lcnJvcntcXHJcXG4gICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgcmVkICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi5jYWxjdWxhdG9yIGlucHV0OjpwbGFjZWhvbGRlcntcXHJcXG4gICAgY29sb3I6I2VlZWVlZTtcXHJcXG59XFxyXFxuLmNhbGN1bGF0b3IgaW5wdXQ6Zm9jdXMsIC5jYWxjdWxhdG9yIGJ1dHRvbjpmb2N1c3tcXHJcXG4gICAgb3V0bGluZTpub25lO1xcclxcbn1cXHJcXG4uY2FsY3VsYXRvciBidXR0b257XFxyXFxuICAgIGNvbG9yOndoaXRlO21hcmdpbi10b3A6MmVtO2JhY2tncm91bmQtY29sb3I6Z3JleTtjdXJzb3I6cG9pbnRlcjtwYWRkaW5nOjAuNWVtIDFlbTtcXHJcXG59XFxyXFxuLmNhbGN1bGF0b3IgYnV0dG9uOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM3NTc1NzU7XFxyXFxufVxcclxcbi5jYWxjdWxhdG9yIGJ1dHRvbiNyZXNldHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtjb2xvcjpncmV5O1xcclxcbn1cXHJcXG4uY2FsY3VsYXRvciBidXR0b24jcmVzZXQ6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6I2UwZTBlMDtcXHJcXG59XFxyXFxuLnN1YmhlYWRlcntcXHJcXG4gICAgLypjb2xvcjojNzE3MTcxKi87bGV0dGVyLXNwYWNpbmc6IDJweDt0ZXh0LWFsaWduOiBjZW50ZXI7bWFyZ2luLWJvdHRvbTogMmVtO1xcclxcbiAgICBmb250LXdlaWdodDo1MDA7Zm9udC1zaXplOjEuNWVtO1xcclxcbn1cXHJcXG5hcnRpY2xle1xcclxcbiAgICBtYXJnaW4tYm90dG9tOjRlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxufVxcclxcbiNhbGwtc2VydmljZXMgbGl7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpey8qNTUwcHgqL1xcclxcbiAgICAuY29sdW1uLTEsXFxyXFxuICAgIC5jb2x1bW4tMixcXHJcXG4gICAgLmNvbHVtbi0zLFxcclxcbiAgICAuY29sdW1uLTQsXFxyXFxuICAgIC5jb2x1bW4tNSxcXHJcXG4gICAgLmNvbHVtbi02LFxcclxcbiAgICAuY29sdW1uLTcsXFxyXFxuICAgIC5jb2x1bW4tOCxcXHJcXG4gICAgLmNvbHVtbi05LFxcclxcbiAgICAuY29sdW1uLTEwLFxcclxcbiAgICAuY29sdW1uLTExLFxcclxcbiAgICAuY29sdW1uLTEyIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgW2NsYXNzKj1jb2x1bW5de1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgICB9XFxyXFxuICAgIFtjbGFzcyo9Y29sdW1uXSArIFtjbGFzcyo9Y29sdW1uXXtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjUwMHB4KXtcXHJcXG4gICAgI2hvbWUtbWFpbi1pbWFnZXtcXHJcXG4gICAgICAgIGhlaWdodDo0NTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAjaG9tZS1tYWluLWltYWdlIC5vdmVybGF5e1xcclxcbiAgICAgICAgaGVpZ2h0OjQ1MHB4O1xcclxcbiAgICB9XFxyXFxuICAgICNob21lLW1haW4taW1hZ2UgaDF7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogMjAlO2ZvbnQtc2l6ZToyLjJlbTttYXJnaW4tbGVmdDoxMCU7bWFyZ2luOjAgMTAlO1xcclxcbiAgICB9XFxyXFxuICAgICNob21lLW1haW4taW1hZ2UgaDN7XFxyXFxuICAgICAgICAvKmZvbnQtd2VpZ2h0OmxpZ2h0ZXI7XFxyXFxuICAgICAgICBmb250LXNpemU6MTdweDsqL1xcclxcbiAgICAgICAgZm9udC1zaXplOjE1cHg7cGFkZGluZzowO2xpbmUtaGVpZ2h0OjI0cHg7bGV0dGVyLXNwYWNpbmc6IDAuOXB4O3RleHQtc2hhZG93OjJweCAwIGJsYWNrO1xcclxcbiAgICB9XFxyXFxuICAgICNob21lLW1haW4taW1hZ2UgZGl2e1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDoxMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgI2hvbWUtbWFpbi1pbWFnZSBkaXYgc3BhbntcXHJcXG4gICAgICAgIGJvcmRlcjoycHggc29saWQgd2hpdGU7XFxyXFxuICAgIH1cXHJcXG4gICAgc3BhbiNjb250YWN0LWJ0bntcXHJcXG4gICAgICAgIC8qYm9yZGVyOjJweCBzb2xpZCB0ZWFsICFpbXBvcnRhbnQ7Ki9cXHJcXG4gICAgfVxcclxcbiAgICBuYXYgaW1ne1xcclxcbiAgICAgICAgd2lkdGg6ODBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuaGVhZGVyLWltZ3tcXHJcXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbiAgICAgICAgaGVpZ2h0OjMwMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5vdmVybGF5ey8qaHVoKi9cXHJcXG4gICAgICAgIGhlaWdodDozMDBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NjAwcHgpe1xcclxcbiAgICBmb3Jte1xcclxcbiAgICAgICAgcGFkZGluZzozZW0gNGVtIDVlbSA0ZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NTBweCl7XFxyXFxuICAgICNjb250YWN0LWluZm97XFxyXFxuICAgICAgICBwYWRkaW5nOiA0ZW0gMWVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5yb3cuc2VydmljZXN7XFxyXFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4OyBkaXNwbGF5OiAtd2Via2l0LWZsZXg7IGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgfVxcclxcbiAgICAubG9nby1zdHlsZSAjaGVhZGVye1xcclxcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5sb2dvLXN0eWxlICNzdWJoZWFkZXJ7XFxyXFxuICAgICAgICBmb250LXNpemU6MTdweDtcXHJcXG4gICAgfVxcclxcbiAgICAubG9nby1zdHlsZSAjc3ViaGVhZGVyLXR3b3tcXHJcXG4gICAgICAgIGZvbnQtc2l6ZToxMHB4O1xcclxcbiAgICB9XFxyXFxuICAgICAjbWlkZGxle1xcclxcbiAgICAgICAgcGFkZGluZzowO1xcclxcbiAgICB9XFxyXFxuICAgIC5wYXlyb2xsLWljb25zIHB7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDoxLjJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzAwcHgpe1xcclxcblxcclxcbiAgICAjaG9tZS1tYWluLWltYWdle1xcclxcbiAgICAgICAgaGVpZ2h0OjgwMHB4O1xcclxcbiAgICB9XFxyXFxuICAgICAjaG9tZS1tYWluLWltYWdlIC5vdmVybGF5e1xcclxcbiAgICAgICAgaGVpZ2h0OjgwMHB4O1xcclxcbiAgICB9XFxyXFxuICAgICNob21lLW1haW4taW1hZ2UgaDF7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogMTglO2ZvbnQtc2l6ZTozLjVlbTttYXJnaW4tbGVmdDoxMCU7bWFyZ2luOjAgMTAlO1xcclxcbiAgICB9XFxyXFxuICAgICNob21lLW1haW4taW1hZ2UgaDN7XFxyXFxuICAgICAgICBmb250LXdlaWdodDpsaWdodGVyO1xcclxcbiAgICAgICAgZm9udC1zaXplOjE4cHg7XFxyXFxuICAgICAgICBwYWRkaW5nOjUlIDglIDAgOCU7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDozMHB4O2xldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgI2hvbWUtbWFpbi1pbWFnZSBkaXZ7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOjEwJTtcXHJcXG4gICAgfVxcclxcbiAgICAjaG9tZS1tYWluLWltYWdlIGRpdiBzcGFue1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6NTAwO1xcclxcbiAgICB9XFxyXFxuICAgIHNwYW4jY29udGFjdC1idG57XFxyXFxuICAgICAgICAvKmJvcmRlcjoycHggc29saWQgdGVhbCAhaW1wb3J0YW50OyovXFxyXFxuICAgIH1cXHJcXG4gICAgLmhlYWRlci1pbWd7XFxyXFxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gICAgICAgIGhlaWdodDo0MDBweDtcXHJcXG4gICAgfVxcclxcbiAgICAub3ZlcmxheXtcXHJcXG4gICAgICAgIGhlaWdodDo0MDBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZGVzY3JpcHRpb257XFxyXFxuICAgICAgICBmb250LXNpemU6MThweDtcXHJcXG4gICAgfVxcclxcbiAgICBmb3Jte1xcclxcbiAgICAgICAgbWF4LXdpZHRoOjcwMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5wYXlyb2xsLWljb25zIHB7XFxyXFxuICAgICAgICBwYWRkaW5nOjAgMWVtO1xcclxcbiAgICB9XFxyXFxuICAgICNob21lLWhlYWRlcntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZToyNXB4O1xcclxcbiAgICB9XFxyXFxuICAgXFxyXFxufVxcclxcblxcclxcbi8qbGFyZ2VyIHNjcmVlbnMgKGUuZy4gZGVza3RvcCkqL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KXtcXHJcXG4gICAgLnNlcnZpY2UtYm94LXdyYXBwZXJ7XFxyXFxuICAgICAgICBwYWRkaW5nOjAgMmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5jb21tdW5pY2F0aW9uLXJvdy13cmFwcGVye1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogNWVtO21hcmdpbi1ib3R0b206IDVlbTsvKmRlc2t0b3A6IG1hcmdpbi10b3AsbWFyZ2luLWJvdHRvbTogM2VtKi9cXHJcXG4gICAgfVxcclxcbiAgICAuaW5uZXItd3JhcHBlci5maXJzdHtcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xcclxcbiAgICAgICAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCBncmV5O1xcclxcbiAgICB9XFxyXFxuICAgIC5pbm5lci13cmFwcGVyLmxhc3R7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcXHJcXG4gICAgfVxcclxcbiAgICAuaW5uZXItd3JhcHBlciBhe1xcclxcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7Lyptc2cgYW5kIGNhbGwgZm9yIGRlc2t0b3AqL1xcclxcbiAgICB9XFxyXFxuICAgIC5pbm5lci13cmFwcGVyLmZpcnN0IGF7XFxyXFxuICAgICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgI2hvbWUtbWFpbi1pbWFnZSBoMXtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOjE1JTtcXHJcXG4gICAgfVxcclxcbiAgICAjaG9tZS1tYWluLWltYWdlIGgze1xcclxcbiAgICAgICAgcGFkZGluZzoyJSA4JSAwIDglO1xcclxcbiAgICB9XFxyXFxuICAgICNob21lLW1haW4taW1hZ2UgZGl2e1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDo2JTtcXHJcXG4gICAgfVxcclxcbiAgICAjZm9vdGVyLWNvbnRhY3QgcHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZToxNnB4O1xcclxcbiAgICAgICAgY29sb3I6Z3JleTtcXHJcXG4gICAgfVxcclxcbiAgICBmb290ZXIgLmhlYWRlcntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZToyMHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG4gICAgI25hdmlnYXRpb257XFxyXFxuICAgICAgICBmb250LXNpemU6MThweDtcXHJcXG4gICAgICAgIGNvbG9yOmdyZXk7XFxyXFxuICAgIH1cXHJcXG4gICAgI25hdmlnYXRpb24gYTpob3ZlcntcXHJcXG4gICAgICAgIGNvbG9yOndoaXRlO1xcclxcbiAgICB9XFxyXFxuICAgICNjb3B5cmlnaHR7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIH1cXHJcXG5cXHQjbWVudS1idG57XFxyXFxuXFx0XFx0ZGlzcGxheTpub25lO1xcclxcblxcdH1cXHJcXG5cXHQjZGVza3RvcC1tZW51e1xcclxcblxcdFxcdGRpc3BsYXk6YmxvY2s7XFxyXFxuXFx0XFx0dGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxuXFx0XFx0bWFyZ2luLXRvcDoxZW07XFxyXFxuXFx0fVxcclxcblxcdCNkZXNrdG9wLW1lbnUgYXtcXHJcXG5cXHRcXHRtYXJnaW46MCAyLjVlbTtcXHJcXG5cXHRcXHRwYWRkaW5nLWJvdHRvbTowLjVlbTtcXHJcXG5cXHR9XFxyXFxuXFx0I2Rlc2t0b3AtbWVudSBhOmxpbmssICNkZXNrdG9wLW1lbnUgYTp2aXNpdGVke1xcclxcblxcdFxcdGZvbnQtc2l6ZToxMnB4O1xcclxcblxcdFxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHR9XFxyXFxuXFx0I2Rlc2t0b3AtbWVudSBhOmhvdmVye1xcclxcblxcdFxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG5cXHR9XFxyXFxuXFx0LnNlbGVjdGVke1xcclxcblxcdFxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG5cXHR9XFxyXFxuICAgICNob21lLW1haW4taW1hZ2UgZGl2IHNwYW57XFxyXFxuICAgICAgICBib3JkZXI6Mi41cHggc29saWQgd2hpdGU7XFxyXFxuICAgIH1cXHJcXG4gICAgc3BhbiNjb250YWN0LWJ0biB7XFxyXFxuICAgICAgICAvKmJvcmRlcjoyLjVweCBzb2xpZCB0ZWFsICFpbXBvcnRhbnQ7Ki9cXHJcXG4gICAgfVxcclxcbiAgICAjaG9tZS1tYWluLWltYWdlIGgze1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6bGlnaHRlcjtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZToyMHB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6MzVweDtsZXR0ZXItc3BhY2luZzogMXB4O3RleHQtc2hhZG93OjA7XFxyXFxuICAgIH1cXHJcXG5cXHQvKmlubmVyIHdyYXBwZXIgc3R1ZmYqL1xcclxcblxcdCNmb290ZXItY29udGFjdCB7XFxyXFxuXFx0XFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG5cXHR9XFxyXFxuXFx0I25hdmlnYXRpb24sICNmb290ZXItY29udGFjdCwjY29weXJpZ2h0e1xcclxcblxcdFxcdG1hcmdpbi1ib3R0b206MDtcXHJcXG5cXHR9XFxyXFxuXFx0I2hvbWUtbWFpbi1waWN7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0aGVpZ2h0OiAzMHZ3O1xcclxcblxcdH1cXHJcXG5cXHQjcGF5cm9sbC1jb250ZW50e1xcclxcblxcdFxcdHBhZGRpbmctYm90dG9tOjUuNWVtO1xcclxcblxcdH1cXHJcXG5cXHQjZm9ybXMgdWwsICNwYXlyb2xsLWNvbnRlbnR7XFxyXFxuXFx0XFx0Zm9udC1zaXplOjFlbTtcXHJcXG5cXHR9XFxyXFxuXFx0LnBhZ2UtaW5mby1ib3h7XFxyXFxuXFx0XFx0aGVpZ2h0OiAyMGVtO1xcclxcblxcdFxcdHBvc2l0aW9uOnN0YXRpYztcXHJcXG5cXHRcXHR6LWluZGV4Oi0yO1xcclxcblxcdH1cXHJcXG5cXHQucGFnZS1pbmZvLWJveCBwe1xcclxcblxcdFxcdGZvbnQtc2l6ZToyLjVlbTtcXHJcXG5cXHRcXHRkaXNwbGF5OmJsb2NrO1xcclxcblxcdFxcdG1hcmdpbi10b3A6MmVtO1xcclxcblxcdH1cXHJcXG4gICAgLnBhZ2UtaW5mby10YWcgc3BhbntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZToyLjVlbTtcXHJcXG4gICAgfVxcclxcblxcdC5jb250ZW50LWJveHtcXHJcXG5cXHRcXHRmb250LXNpemU6MjBweDtcXHJcXG5cXHRcXHRwYWRkaW5nOjVlbSA0ZW0gNWVtIDRlbTtcXHJcXG5cXHRcXHRtYXJnaW46MCBhdXRvO1xcclxcblxcdFxcdHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcblxcdFxcdG1pbi13aWR0aDowO21heC13aWR0aDogMTA4MHB4O1xcclxcblxcdFxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFx0fVxcclxcblxcdC5jb250ZW50LWJveCBoM3tcXHJcXG5cXHRcXHRmb250LXNpemU6MS41ZW07XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6bGlnaHRlcjtcXHJcXG5cXHR9XFxyXFxuXFx0Zm9vdGVye1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6YmxhY2s7XFxyXFxuXFx0XFx0cGFkZGluZy10b3A6N2VtO3BhZGRpbmctYm90dG9tOjhlbTtcXHJcXG5cXHR9XFxyXFxuXFx0Zm9vdGVyIGF7XFxyXFxuXFx0XFx0Y29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcblxcdH1cXHJcXG5cXHQjY29weXJpZ2h0e1xcclxcblxcdFxcdGNvbG9yOiBncmV5O1xcclxcblxcdH1cXHJcXG5cXHQuY29udGVudC1ib3gubWFpbi1pbWd7XFxyXFxuXFx0XFx0bWFyZ2luOi0zLjdlbSAzZW0gM2VtIDNlbTtcXHJcXG5cXHR9XFxyXFxuXFx0XFxyXFxuXFx0LmNvbnRlbnQtYm94Lm1haW4taW1nIGltZywgLm92ZXJsYXl7XFxyXFxuXFx0XFx0aGVpZ2h0Ojgwdmg7XFxyXFxuXFx0fVxcclxcblxcdC5jb250ZW50LWJveC5tYWluLWltZyBwe1xcclxcblxcdFxcdHBhZGRpbmc6MCAyMCU7dG9wOjQwJTtcXHJcXG5cXHR9XFxyXFxuXFx0bmF2e1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43KTtcXHJcXG5cXHRcXHRwYWRkaW5nOjAuNWVtIDAuNWVtIDFlbSAwLjVlbTtcXHJcXG4gICAgICAgIGhlaWdodDo0ZW07XFxyXFxuXFx0fVxcclxcblxcdC5pbWFnZXtcXHJcXG5cXHRcXHRtYXJnaW4tdG9wOiAtNC4xZW07XFxyXFxuXFx0fVxcclxcblxcdC5sb2dvLXN0eWxle1xcclxcblxcdFxcdHRleHQtYWxpZ246Y2VudGVyO1xcclxcblxcdFxcdHBhZGRpbmc6MWVtIDA7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjojNzI3MTZiO1xcclxcblxcdFxcdGNvbG9yOndoaXRlO1xcclxcblxcdH1cXHJcXG5cXHQjbWFpbi10ZXh0e1xcclxcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRcXHRwYWRkaW5nOiA1ZW0gNWVtO1xcclxcblxcdFxcdG1heC13aWR0aDo3MDBweDtcXHJcXG5cXHRcXHRtYXJnaW46MCBhdXRvO1xcclxcblxcdFxcdGxpbmUtaGVpZ2h0OiAxLjdlbTtcXHJcXG5cXHRcXHRjb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXHJcXG5cXHRcXHRmb250LXNpemU6MjRweDtcXHJcXG5cXHR9XFxyXFxuICAgIC5jb250ZW50LWJveC5jb250YWN0e1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206NmVtO1xcclxcbiAgICB9XFxyXFxuICAgICNjb250YWN0LXBhZ2UtaW5mbyBoM3tcXHJcXG4gICAgICAgIGZvbnQtc2l6ZToyOHB4O1xcclxcbiAgICB9XFxyXFxuICAgICNtZW51LWJ0bi13cmFwcGVye1xcclxcbiAgICAgICAgZGlzcGxheTpub25lO1xcclxcbiAgICB9XFxyXFxuICAgICNtb2JpbGUtbWVudXtcXHJcXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAubG9nby1zdHlsZSAjaGVhZGVye1xcclxcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5sb2dvLXN0eWxlICNzdWJoZWFkZXJ7XFxyXFxuICAgICAgICBmb250LXNpemU6MThweDtcXHJcXG4gICAgfVxcclxcbiAgICAubG9nby1zdHlsZSAjc3ViaGVhZGVyLXR3b3tcXHJcXG4gICAgICAgIGZvbnQtc2l6ZToxMnB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5oZWFkZXItaW1ne1xcclxcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICAgICAgICBoZWlnaHQ6NTEwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLm92ZXJsYXl7XFxyXFxuICAgICAgICBoZWlnaHQ6NTEwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmNvbnRlbnQtYm94LW5vLXBhZGRpbmd7XFxyXFxuICAgIFxcdG1pbi13aWR0aDowO21heC13aWR0aDoxMDgwcHg7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO21hcmdpbjowIGF1dG87XFxyXFxuICAgIH1cXHJcXG4gICAgLmNvbnRlbnQtYm94LmFib3V0e1xcclxcbiAgICAgICAgcGFkZGluZzo1ZW0gNmVtIDhlbSA2ZW07XFxyXFxuICAgIH1cXHJcXG4gICAgI2FjY291bnRpbmctc2VydmljZXMgdWx7XFxyXFxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzZW07XFxyXFxuICAgICAgICBmb250LXNpemU6MThweDtcXHJcXG4gICAgfVxcclxcbiAgICAjYWNjb3VudGluZy1zZXJ2aWNlc3tcXHJcXG4gICAgICAgIHBhZGRpbmc6M2VtO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6MS41ZW07XFxyXFxuICAgICAgICBmb250LXNpemU6MjBweDtcXHJcXG4gICAgfVxcclxcbiAgICAucGF5cm9sbC1pY29ucyBwe1xcclxcbiAgICAgICAgcGFkZGluZzowIDIuNWVtO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6MS41ZW07XFxyXFxuICAgICAgICBmb250LXNpemU6MTVweDtcXHJcXG4gICAgfSAgXFxyXFxuICAgICNzZXJ2aWNlcyAucm93e1xcclxcbiAgICAgICAgbWFyZ2luOjAgYXV0bztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDI1NjBweCl7XFxyXFxuICAgICNob21lLW1haW4taW1hZ2UgaDF7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogMTAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNob21lLW1haW4taW1hZ2UgZGl2e1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDo0JTtcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIl0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY3VzdG9tLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jdXN0b20uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jdXN0b20uY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0ICcuL2N1c3RvbS5jc3MnO1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCl7XHJcbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpe2xvYWRQYWdlKCk7fSwgMTAwMCk7XHJcbn1cclxuZnVuY3Rpb24gbG9hZFBhZ2UoKXtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG59XHJcblxyXG5sZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRpdGxlXCIpWzBdLmlubmVySFRNTDtcclxubGV0IGJvb2wgPSB0aXRsZS5pbmNsdWRlcyhcImhvbWVcIik7XHJcblxyXG5pZihib29sKXtcclxuICAgIHNldE5hdmJhcigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXROYXZiYXIoKXtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbihlKXtcclxuICAgICAgIFxyXG4gICAgICAgLyogbGV0IG5hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCduYXYnKVswXTsqL1xyXG4gICAgICAgIGxldCBuYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWUtbmF2XCIpO1xyXG4gICAgICAgIGlmKHdpbmRvdy5zY3JvbGxZID4xMCl7XHJcbiAgICAgICAgICAgIG5hdmJhci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCJyZ2JhKDAsMCwwLDAuNylcIjtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbmF2YmFyLnN0eWxlLmJhY2tncm91bmRDb2xvcj0gXCJ0cmFuc3BhcmVudFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGUoKXtcclxuICAgIGxldCBtZW51QnRuRGl2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudS1idG5cIikuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJkaXZcIik7XHJcbiAgICBsZXQgZGl2ID0gbWVudUJ0bkRpdnNbMF07XHJcbiAgICBsZXQgZGl2MiA9IG1lbnVCdG5EaXZzWzFdO1xyXG4gICAgaWYoZGl2LmNsYXNzTGlzdC5jb250YWlucyhcImxlYW4tcmlnaHRcIikpey8vY2xvc2UgbWVudVxyXG4gICAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwibGVhbi1yaWdodFwiKTtcclxuICAgICAgICBkaXYyLmNsYXNzTGlzdC5yZW1vdmUoXCJsZWFuLWxlZnRcIik7XHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJ0b3AtcGFyYWxsZWxcIik7XHJcbiAgICAgICAgZGl2Mi5jbGFzc0xpc3QuYWRkKFwiYm90dG9tLXBhcmFsbGVsXCIpO1xyXG4gICAgICAgIGNsb3NlTmF2KCk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZShcInRvcC1wYXJhbGxlbFwiKTtcclxuICAgICAgICBkaXYyLmNsYXNzTGlzdC5yZW1vdmUoXCJib3R0b20tcGFyYWxsZWxcIik7XHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJsZWFuLXJpZ2h0XCIpO1xyXG4gICAgICAgIGRpdjIuY2xhc3NMaXN0LmFkZChcImxlYW4tbGVmdFwiKTtcclxuICAgICAgICBvcGVuTmF2KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wZW5OYXYoKXtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9iaWxlLW1lbnVcIikuc3R5bGUud2lkdGggPSBcIjI1MHB4XCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlTmF2KCl7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vYmlsZS1tZW51XCIpLnN0eWxlLndpZHRoID0gXCIwXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGNNb3J0Z2FnZVBheW1lbnQocCxpLHkpe1xyXG4gICAgbGV0IHIgPSAoaS8xMjAwKTtcclxuICAgIGxldCBuID0geSoxMjtcclxuICAgIGxldCB4ID0gTWF0aC5wb3coMStyLG4pO1xyXG4gICAgbGV0IG0gPSBwKihyKngvKHgtMSkpO1xyXG4gICAgcmV0dXJuIGZvcm1hdE51bShNYXRoLnJvdW5kKG0pKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FsY1RvdGFsTW9ydGdhZ2UocCxpLHkpe1xyXG4gICAgbGV0IHIgPSAoaS8xMjAwKTtcclxuICAgIGxldCBuID0geSoxMjtcclxuICAgIGxldCB4ID0gTWF0aC5wb3coMStyLG4pO1xyXG4gICAgbGV0IG0gPSBwKihyKngvKHgtMSkpO1xyXG4gICAgcmV0dXJuIGZvcm1hdE51bShNYXRoLnJvdW5kKG0qbikpO1xyXG59XHJcbmZ1bmN0aW9uIHZhbGlkYXRlSW5wdXQoKXtcclxuICAgIGxldCBtQSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9ydGdhZ2UtYW1vdW50XCIpO1xyXG4gICAgbGV0IGlSID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnRlcmVzdC1yYXRlXCIpO1xyXG4gICAgbGV0IG1QID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb3J0Z2FnZS1wZXJpb2RcIik7XHJcbiAgICBsZXQgcCA9IHBhcnNlRmxvYXQobUEudmFsdWUpO1xyXG4gICAgbGV0IGkgPSBwYXJzZUZsb2F0KGlSLnZhbHVlKTtcclxuICAgIGxldCB5ID0gcGFyc2VJbnQobVAudmFsdWUpO1xyXG4gICAgaWYocD4wICYmIGk+PTAgJiYgeT4wKXtcclxuICAgICAgICByZW1vdmVFcnJvckNsYXNzKG1BLGlSLG1QKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGlmKHA8PTAgfHwgIXApe1xyXG4gICAgICAgICAgICBtQS5jbGFzc05hbWUgPSBcImVycm9yXCI7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG1BLmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGk8MCB8fCAhaSl7XHJcbiAgICAgICAgICAgIGlSLmNsYXNzTmFtZSA9IFwiZXJyb3JcIjtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaVIuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoeTw9MCB8fCAheSl7XHJcbiAgICAgICAgICAgIG1QLmNsYXNzTmFtZSA9IFwiZXJyb3JcIjtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbVAuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVFcnJvckNsYXNzKG1BLGlSLG1QKXtcclxuICAgIGlmKG1BLmNsYXNzTGlzdC5jb250YWlucyhcImVycm9yXCIpKXtcclxuICAgICAgICBtQS5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgfVxyXG4gICAgaWYoaVIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZXJyb3JcIikpe1xyXG4gICAgICAgIGlSLmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICBpZihtUC5jbGFzc0xpc3QuY29udGFpbnMoXCJlcnJvclwiKSl7XHJcbiAgICAgICAgbVAuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZW50ZXJNb3J0Z2FnZUluZm8oKXtcclxuICAgIGlmKHZhbGlkYXRlSW5wdXQoKSl7XHJcbiAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vcnRnYWdlLWFtb3VudFwiKS52YWx1ZTtcclxuICAgICAgICBsZXQgaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW50ZXJlc3QtcmF0ZVwiKS52YWx1ZTtcclxuICAgICAgICBsZXQgeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9ydGdhZ2UtcGVyaW9kXCIpLnZhbHVlO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9udGhseS1wYXltZW50XCIpLmlubmVySFRNTD1jYWxjTW9ydGdhZ2VQYXltZW50KHAsaSx5KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdGFsLW1vcnRnYWdlXCIpLmlubmVySFRNTCA9IGNhbGNUb3RhbE1vcnRnYWdlKHAsaSx5KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRDYWxjdWxhdG9yKCl7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vcnRnYWdlLWFtb3VudFwiKS52YWx1ZT1cIlwiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnRlcmVzdC1yYXRlXCIpLnZhbHVlPVwiXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vcnRnYWdlLXBlcmlvZFwiKS52YWx1ZT1cIlwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXROdW0oeCl7XHJcbiAgICByZXR1cm4gXCIkIFwiK3gudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLFwiLFwiKTtcclxufVxyXG5cclxuXHJcbndpbmRvdy50b2dnbGU9IHRvZ2dsZTtcclxud2luZG93LmVudGVyTW9ydGdhZ2VJbmZvID0gZW50ZXJNb3J0Z2FnZUluZm87XHJcbndpbmRvdy5yZXNldENhbGN1bGF0b3IgPSByZXNldENhbGN1bGF0b3I7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=