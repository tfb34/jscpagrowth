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
exports.push([module.i, "\r\n\r\n:root{\r\n    --main-color: teal;\r\n    --header-color: #717171;\r\n    --text-color: #404041;\r\n}\r\nbody{\r\n    padding:0;margin: 0;\r\n    color: var(--text-color);\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\nh2,h3{\r\n    color:var(--header-color);\r\n}\r\na{\r\n    color:var(--text-color);\r\n}\r\n.container{\r\n    padding: 1em;\r\n}\r\n.row,\r\n.column{\r\n    box-sizing: border-box;\r\n}\r\n.row{\r\n    margin-bottom: 1em;\r\n}\r\n.row:before, \r\n.row:after{\r\n    content: \"\";\r\n    display: table;\r\n}\r\n.row:after{\r\n    clear: both;\r\n}\r\n[class*=column]{\r\n    position: relative;\r\n    float:left;\r\n}\r\n[class*=column] + [class*=column]{\r\n    margin-left: 1.6%;\r\n}\r\n.column-1{\r\n    width: 6.866666667%;\r\n}\r\n.column-2{\r\n    width: 15.3333333333%;\r\n}\r\n.column-3{\r\n    width: 23.8%;\r\n}\r\n.column-4{\r\n    width: 32.2666666667%;\r\n}\r\n.column-5{ \r\n    width: 40.7333333333%;\r\n}\r\n.column-6{\r\n    width: 49.2%;\r\n}\r\n.column-7{\r\n    width: 57.6666666667%;\r\n}\r\n.column-8{\r\n    width: 66.1333333333%;\r\n}\r\n.column-9{\r\n    width: 74.6%;\r\n}\r\n.column-10{\r\n    width: 83.06666667%;\r\n}\r\n.column-11{\r\n    width: 91.5333333333%;\r\n}\r\n.column-12{\r\n    width:100%;\r\n}\r\n/*offset*/\r\n.column-offset-1{\r\n    margin-left: 8.466666667%;\r\n}\r\n.column-offset-2{\r\n    margin-left: 16.93333333%;\r\n}\r\n.column-offset-3{\r\n    margin-left: 25.4%;\r\n}\r\n.column-offset-4{\r\n    margin-left: 33.866666667%;\r\n}\r\n.column-offset-5{\r\n    margin-left: 42.333333333%;\r\n}\r\n.column-offset-6{\r\n    margin-left: 50.8%;\r\n}\r\n.column-offset-7{\r\n    margin-left: 59.266666667%;\r\n}\r\n.column-offset-8{\r\n    margin-left: 67.733333333%;\r\n}\r\n.column-offset-9{\r\n    margin-left: 76.2%;\r\n}\r\n.column-offset-10{\r\n    margin-left: 84.666666667%;\r\n}\r\n.column-offset-11{\r\n    margin-left: 93.133333333%;\r\n}/*end of my-grid*/\r\np{\r\n\tmargin:0;\r\n\tpadding:0;\r\n}\r\na{\r\n\ttext-decoration: none;\r\n}\r\nnav{\r\n\tbox-sizing: border-box;\r\n    height:3em;\r\n\tpadding:0;\r\n\twidth:100%;\r\n\tz-index:2;\r\n    position:fixed;\r\n}\r\nnav img{\r\n    width:50px;top:15%;left:2em;position:absolute;\r\n}\r\n#logo-wrapper{\r\n\theight: 40px;\r\n\twidth: 275px;\r\n\tbox-sizing: border-box;\r\n\tfloat:left;\r\n}\r\n#logo-image{\r\n\theight: 50px;\r\n\twidth: 90px;\r\n\tfloat: left;\r\n\tbackground-image: url('https://s3.us-east-2.amazonaws.com/wjs-accounting-project/images/jslogoyellow.jpeg');\r\n\tbackground-size: cover;\r\n\tbackground-repeat: no-repeat;\r\n}\r\n#logo-text{\r\n\theight: 50px;\r\n\twidth: 130px;\r\n\tfloat: left;\r\n\tfont-size: 12px;\r\n\tpadding-left: 1em;\r\n\tpadding-top: 5px;\r\n\tbox-sizing: border-box;\r\n\tbackground-size:white;\r\n}\r\nnav:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n}\r\n#menu-btn{\r\n    width:2em;\r\n    height:2em;\r\n    padding:1em 1em 0 1em;\r\n    float:right;\r\n    cursor:pointer;\r\n    position:relative;\r\n}\r\n#menu-btn div {\r\n    background-color:white;\r\n\theight: 2px;\r\n\twidth: 25px;\r\n\tposition: absolute;\r\n}\r\n#menu-btn div:first-child{\r\n\tmargin-bottom:0.5em;\r\n}\r\n#menu-btn div:last-child{\r\n\ttop:1.5em;\r\n}\r\n@keyframes top-parallel{\r\n    0%{\r\n        transform: translateY(0.5em) rotate(135deg);\r\n    }\r\n    100%{\r\n        transform: translateY(0) rotate(0deg);\r\n    }\r\n}\r\n.top-parallel{\r\n    animation-name: top-parallel;\r\n}\r\n@keyframes bottom-parallel{\r\n    0%{\r\n        transform: rotate(45deg);\r\n    }\r\n    100%{\r\n        transform: rotate(0deg);\r\n    }\r\n}\r\n.bottom-parallel{\r\n    animation-name: bottom-parallel;\r\n}\r\n@keyframes lean-right{\r\n    0%{\r\n        transform: translateY(0) rotate(0deg);\r\n    }\r\n    100%{\r\n        transform: translateY(0.5em) rotate(135deg);\r\n    }\r\n}\r\n.lean-right{\r\n    animation-name: lean-right;\r\n}\r\n@keyframes lean-left{\r\n    0%{\r\n        transform: rotate(0deg);\r\n    }\r\n    100%{\r\n        transform: rotate(45deg);\r\n    }\r\n}\r\n.lean-left{\r\n    animation-name: lean-left;\r\n}\r\n.animate-btn{\r\n    animation-duration:0.5s;\r\n    animation-fill-mode: both;\r\n}\r\n#desktop-menu{\r\n\tdisplay:none;\r\n}\r\n#home-main-pic{\r\n\t/* height: 20vh; */\r\n\twidth: 100%;\r\n\theight: 30vw;\r\n}\r\n.object-fill_fill{\r\n\tobject-fit: fill;\r\n}\r\n\r\n.cover{\r\n\twidth:260px;\r\n\tobject-fit: cover;\r\n}\r\n#main-text{\r\n\ttext-align: center;\r\n\tpadding: 5em 1em;/*padding: 3em 3em*/\r\n\tmax-width:20em;\r\n\tmargin:0 auto;\r\n\tline-height: 1.7em;\r\n\t\r\n\tcolor: #665d5d;\r\n\tfont-size:18px;\r\n}\r\n#service-pic{\r\n\tmargin: 0 auto;\r\n\tdisplay: block;\r\n\theight:90px;\r\n}\r\n.service-header{\r\n\tfont-size:20px;\r\n    font-weight:normal;\r\n}\r\n.service-description{\r\n\tfont-size:18px;\r\n}\r\n.service-header, .service-description{\r\n\tcolor: var(--header-color);\r\n\ttext-align: center;\r\n}\r\n#services{\r\n\tbackground-color: #ECECEC;\r\n\tpadding: 5em 2em 0em 2em;/*5 2 0 2*/\r\n}\r\n#read-more-btn{\r\n\tbackground-color: var(--main-color);\r\n\tcolor: white;\r\n\tpadding:1em;\r\n    text-align:center;\r\n\tfont-weight: bold;\r\n\tdisplay: block;\r\n\twidth: 6.2em;\r\n\tmargin: 5em auto 5em auto;\r\n}\r\n#services .column-4{\r\n\tpadding-bottom:4em;\r\n}\r\n#contact-info{\r\n\ttext-align: center;\r\n\tpadding: 6em 1em;\r\n}\r\n#contact-info p{\r\n\tline-height: 1.8em;\r\n\tfont-size: 17px;\r\n\tmargin-bottom: 1em;\r\n}\r\n#contact-info h3{\r\n\tfont-weight: normal;\r\n\t/*color: rgb(113,113,113);*/\r\n\tfont-size:25px;\r\n}\r\n#contact-info a{\r\n    color: var(--main-color);\r\n}\r\n.map-contact-wrapper{\r\n\tbackground-color: #ECECEC;\r\n\tmargin-bottom:0;\r\n}\r\n.btn{\r\n\tpadding: 1em;\r\n\tbackground-color: var(--main-color);\r\n\tcolor: white;\r\n\tdisplay: block;\r\n\twidth: 10em;\r\n\tmargin: 2em auto;\r\n\t/* font-size: 15px; */\r\n\tfont-weight: bold;\r\n}\r\n.communication-row-wrapper{\r\n\tmargin-top: 5em;margin-bottom: 5em;/*font-size:14px;sdesktop: margin-top,margin-bottom: 3em*/\r\n}\r\n.communication-row-wrapper p{\r\n\tfont-size:17px;\r\n}\r\n.inner-wrapper{\r\n\twidth:100%;text-align: center\r\n}\r\n.inner-wrapper div{\r\n\tmax-width:29em;\r\n\tdisplay:block;\r\n\tmargin:0 auto;\r\n\ttext-align: center;\r\n\tpadding: 0em 3em;/*1em*/\r\n\t/*padding: 3em 3em; for desktop*/\r\n}\r\n.inner-wrapper.first{\r\n\t/*margin-top: 2em;*/\r\n\tpadding-bottom: 1em;/*0 in non-mobile*/\r\n\tborder-right:0px;\r\n}\r\n.inner-wrapper.last{\r\n\t/*margin-bottom: 5em;*/\r\n\tpadding-top: 1em;/*0 in non-mobile*/\r\n}\r\n.inner-wrapper h2{\r\n\tfont-weight: lighter;\r\n\tfont-size: 25px;/*desktop font-size: 2em*/\r\n\t\r\n\t/*color: grey;*/\r\n}\r\n#home-header{\r\n    color:var(--header-color);font-size: 22px;margin-top:2.5em;margin-bottom:0.5em;font-weight:500;\r\n}\r\n.inner-wrapper p{\r\n\t/*line-height:3em;*/\r\n\tline-height: 2em;\r\n}\r\n.inner-wrapper a{\r\n\tpointer-events: auto;/*none for desktop*/\r\n}\r\n\r\nul{\r\n\tlist-style-type: none;\r\n\tpadding:0;\r\n}\r\n#navigation{\r\n\ttext-align:center;\r\n\tfont-size:12px;\r\n}\r\nul a:link, ul a:visited{\r\n\tcolor:var(--main-color);\r\n}\r\n#navigation ul li{\r\n\tmargin-bottom:2em;\r\n}\r\nfooter{\r\n\tpadding: 10em 0 4em 0;\r\n\tcolor:#333333;\r\n}\r\n#copyright{\r\n\ttext-align: left;\r\n\tfont-size:11px;\r\n\tmargin:0 auto;\r\n\twidth:15em;\r\n}\r\n.header{\r\n\tmargin-bottom:1.5em;font-size:18px;/*color:grey*/\r\n}\r\n#footer-contact p{\r\n\tmargin-bottom: 1em;\r\n}\r\n#footer-contact {\r\n\tfont-size:13px;\r\n\tmax-width :15em;\t\r\n\tmargin:0 auto;\r\n\ttext-align: center;\r\n}\r\n#navigation, #footer-contact,#copyright{\r\n\tmargin-bottom:5em;\r\n}\r\n#mobile-menu ul{\r\n\ttext-align: center;\r\n}\r\n#mobile-menu ul li{\r\n\tpadding:1em 0;\r\n}\r\n\r\n#mobile-menu ul li{\r\n\tborder-bottom:1px solid #ececec;\r\n}\r\n#mobile-menu ul li:last-child{\r\n\tborder:none;\r\n}\r\n#map{\r\n\tbackground-color: #F2F2F2;\r\n}\r\n#payroll-content{\r\n\tpadding-left:1em;\r\n\tpadding-right:1em;\r\n\tpadding-bottom:5em;\r\n\tline-height: 2em;\r\n}\r\n#payroll-content p, .sub-description{\r\n\t/*color: #333333;*/\r\n\tfont-weight:lighter;text-align:center;\r\n}\r\n#payroll-content ul{\r\n\tlist-style-type: circle;\r\n\tpadding-left:3em;\r\n\tpadding-right:1em;\r\n\t/*color:#333333;*/\r\n}\r\n#forms ul{\r\n\tlist-style-type: circle;\r\n\tpadding-left: 2em;\r\n\tfont-size:15px;\r\n}\r\n#forms{\r\n\tline-height: 2em;\r\n\tmargin-bottom: 0;\r\n    padding:5em 0 5em 1em;\r\n\tbackground-color:whitesmoke;\r\n}\r\n.page-info-box{\r\n\tbackground-color:var(--main-color);\r\n\twidth:100%;\r\n\theight:85vh;/*change to permanent height in desktop*/\r\n\tdisplay:table;\r\n}\r\n.page-info-box p{\r\n\tcolor:white;\r\n\tfont-size:1.5em;\r\n\ttext-align: center;\r\n\tdisplay:table-cell;\r\n\tvertical-align: middle;\r\n}\r\n.content-box{\r\n\tpadding:3em 2em;\r\n\tz-index:0;/*-2*/\r\n\tline-height: 1.8em;\r\n\t/*color:#333;*/\r\n\tbackground-color:white;\r\n}\r\n.content-box h3, .content-box h4{\r\n\ttext-align: center;\r\n}\r\n.content-box.contact{\r\n    padding-top:5.5em;\r\n    padding-bottom:3em;\r\n}\r\n.content-box.about{\r\n    /*padding:1em 1.5em 8em 1.5em;*/\r\n    padding:3em 2em 10em 2em;\r\n}\r\n#mobile-menu{\r\n    width: 0;\r\n    height:90vh;\r\n\tfont-weight:bold;\r\n\tfont-size:21px;\r\n\tbackground-color:white;\r\n    position:absolute;\r\n    z-index: 2;\r\n    right:0;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    padding-top:60px;\r\n    display:block; \r\n    -webkit-box-shadow: rgba(0,0,0,0.1) -2px 0 2px;\r\n    -moz-box-shadow: rgba(0,0,0,0.1) -2px 0 2px;\r\n    box-shadow: rgba(0,0,0,0.1) -2px 0 2px;\r\n}\r\n.service-box-wrapper{\r\n    padding:0 0em;\r\n}\r\n.service-box-wrapper div{\r\n\twidth:100%;text-align:center;display:table;height:6em;\r\n}\r\n.service-box-wrapper h3{\r\n\tdisplay:table-cell;vertical-align:middle;\r\n}\r\n#accounting-services ul{\r\n\tlist-style-type: circle;\r\n\tmargin-left: 3em;\r\n\tfont-size:14px;\r\n}\r\n#accounting-services{\r\n\tpadding:3em;\r\n\tline-height:1.5em;\r\n\tbackground-color:white;\r\n\tfont-size:15px;\r\n}\r\n.content-box.services{\r\n\tmargin-top:0;/*background-color:transparent*/padding:0 0 5em 0;\r\n}\r\n.row.services{\r\n\tdisplay: block;\r\n}\r\n/*services page*/\r\n.content-box.main-img{\r\n\tpadding:0;position:relative;\r\n\tmargin:0/*10%*/;background-color:transparent;\r\n}\r\n.overlay{\r\n\tbackground: linear-gradient(to bottom,transparent 0,rgba(0,0,0,0.65) 100%);\r\n\tposition:absolute;\r\n}\r\n.content-box.main-img img, .overlay{\r\n\twidth:100%;height:207px;\r\n}\r\n.content-box.main-img p{\r\n\tposition:absolute;padding:0 5%;text-align: center;color:white;top:25%;\r\n}\r\n.contact-info{\r\n\t/*color:#333333;*/\r\n\ttext-align: center;\r\n\tline-height:2.3em;\r\n\tmargin-bottom:5em;\r\n}\r\n.contact-info h4{\r\n\tmargin:0;\r\n\tfont-size:1.2em;\r\n}\r\n.contact-info img{\r\n\twidth: 30px;\r\n}\r\n.contact-info a{\r\n\tcolor: var(--main-color);\r\n}\r\n.contact-info a:hover{\r\n\tcolor:var(--main-color);\r\n}\r\n.row.contact{\r\n\tmargin-top:4.5em;\r\n}\r\n.logo-style{\r\n\ttext-align:center;\r\n\tpadding:1em 0;\r\n\tbackground-color:#72716b;\r\n\tcolor:white;\r\n}\r\n.image{\r\n\tposition:relative;\r\n\tz-index: -3;\r\n}\r\n.page-info-tag{\r\n\tposition: absolute;\r\n\tbottom: 25%;\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n\tcolor:white;\r\n\tz-index:1;\r\n}\r\n.page-info-tag span{\r\n\tfont-size:2em;\r\n\tfont-weight:500;\r\n}\r\n#contact-page-info{\r\n    background-color: white;padding-top:4em;padding-bottom:3em;\r\n}\r\n#contact-page-info h3{\r\n    /*color:#717171*/;font-size:20px;font-weight:500;text-align:center;padding:2em 1em 0em 1em;margin-top:0;\r\n}\r\n#menu-btn-wrapper{/*prevents change in size when opening & closing menu*/\r\n    width:100%;\r\n    height:3em;\r\n    box-sizing: border-box;\r\n}\r\n#menu-btn-wrapper:after{\r\n    content: \"\";\r\n    display:table;\r\n    clear:both;\r\n}\r\n.logo-style #header{\r\n    font-size: 30px;\r\n}\r\n.logo-style #subheader{\r\n    font-size:15px;\r\n}\r\n.logo-style #subheader-two{\r\n    font-size:10px;\r\n}\r\n#home-main-image{\r\n    position:relative;\r\n    width:100%;\r\n    height:360px;\r\n   background: url(\"http://jscpagrowth.com/assets/homepage-main-image.jpeg\") no-repeat center;\r\n    background-size: cover;\r\n}\r\n#home-main-image .overlay{\r\n    margin:0;height:360px;background:linear-gradient(transparent,rgba(0,0,0,0.4))\r\n}\r\n#home-main-image h1{\r\n    margin:0;text-align:center;color:white;\r\n    padding-top: 3em;font-size:1.5em;\r\n    animation-delay: 0.7s;\r\n}\r\n#home-main-image h3{\r\n    text-align: center;color:white;\r\n    font-size:12px;padding:0 5%;line-height:20px;\r\n    letter-spacing: 0.5px;\r\n    animation-delay: 0.7s;\r\n}\r\n#home-main-image div{\r\n    text-align: center;\r\n    margin-top:20%;\r\n    animation-delay: 1.1s;\r\n}\r\n#home-main-image div span{\r\n    font-size: 12px;\r\n    font-weight:bold;\r\n    margin:1%;\r\n    border:1px solid white;\r\n    background-color:rgba(1,2,3,0.5);\r\n    padding:1em;\r\n    cursor: pointer;\r\n    letter-spacing: 1.5px;\r\n}\r\n#home-main-image div span:hover{\r\n    background-color:rgba(1,2,3,0.7);\r\n}\r\nspan#contact-btn{\r\n    background-color:teal !important;\r\n    /*border:1px solid teal !important;*/\r\n}\r\nspan#contact-btn:hover{\r\n    background-color:#005959 !important;\r\n}\r\n#home-main-image div span a{\r\n    color:white;\r\n}\r\n@keyframes fadeDown{\r\n    0%{\r\n        opacity:0;\r\n        -webkit-transform: translateY(-20px);\r\n        -ms-transform: translateY(-20px);\r\n        -moz-transform: translateY(-20px);\r\n        transform: translateY(-20px);\r\n    }\r\n    100%{\r\n        opacity: 1;\r\n        -webkit-transform: translateY(0px);\r\n        -ms-transform: translateY(0px);\r\n        -moz-transform: translateY(0px);\r\n        transform: translateY(0px);\r\n    }\r\n}\r\n@keyframes fadeUp{\r\n    0%{\r\n        opacity:0;\r\n        -webkit-transform: translateY(20px);\r\n        -ms-transform: translateY(20px);\r\n        -moz-transform: translateY(20px);\r\n        transform: translateY(20px);\r\n    }\r\n    100%{\r\n        opacity: 1;\r\n        -webkit-transform: translateY(0px);\r\n        -ms-transform: translateY(0px);\r\n        -moz-transform: translateY(0px);\r\n        transform: translateY(0px);\r\n    }\r\n}\r\n.fadeUp{\r\n    -webkit-animation-name:fadeUp;\r\n    -moz-animation-name:fadeUp;\r\n    animation-name: fadeUp;\r\n}\r\n.fadeDown{\r\n    -webkit-animation-name:fadeDown;\r\n    -moz-animation-name:fadeDown;\r\n    animation-name:fadeDown;\r\n}\r\n.animate{\r\n    -webkit-animation-duration: 1.5s;\r\n    -moz-animation-duration: 1.5s;\r\n    animation-duration: 1.5s;\r\n    -webkit-animation-fill-mode:both;\r\n    -moz-animation-fill-mode:both;\r\n    animation-fill-mode:both;\r\n}\r\n.header-img{\r\n    position:relative;\r\n    height:207px;\r\n    width:100%;\r\n}\r\n.description{\r\n    font-size:16px;text-align:center;line-height:1.8em;color:#717171;\r\n    min-width:50px;max-width:700px;margin:0 auto;padding:0.5em 0.8em 6em 0.8em;\r\n}\r\n.content-box-no-padding{\r\n\tbackground:white;\r\n\tpadding-top:5.5em;padding-bottom:3em;\r\n\tpadding-left:1em;padding-right:1em;\r\n}\r\n#form{\r\n\r\n}\r\nform{\r\n    background-color:#edecea;margin:0 auto;width:100%;/*color:#717171*/;box-sizing:border-box;\r\n    padding:3em 1em 5em 1em;\r\n}\r\nform h3{\r\n    padding:0;margin:0 0 2.5em 0;\r\n}\r\n.form-input{\r\n  width:100%;height:3em;padding-left:2em;border:1px solid white;border-radius:5px;\r\n  margin:1em 0 2.5em 0;box-sizing: border-box;\r\n}\r\n.form-text-input{\r\n  border:1px solid white;border-radius:5px;padding:1em 2em;\r\n  width:100%;height:200px;box-sizing:border-box;margin:1em 0 2.5em 0;\r\n}\r\n.form-btn{\r\n  padding:1em 2em;\r\n  border-radius:5px;\r\n}\r\n.send{\r\n  color:white;\r\n  background-color:var(--main-color);\r\n  border:1px solid white;\r\n}\r\n.send:hover{\r\n  background-color:#004473 ;\r\n  cursor:pointer;\r\n}\r\n.reset{\r\n   border:1px solid white;border-radius:5px;padding:1em 2em; \r\n}\r\n.reset:hover{\r\n  background-color:#72716b;\r\n  color:white;\r\n  cursor:pointer;\r\n}\r\n.payroll-icons{\r\n    padding-top:2.5em;\r\n    padding-bottom:3em;\r\n}\r\n.payroll-icons img{\r\n    width:80px;\r\n}\r\n.payroll-icons div{\r\n    text-align: center;\r\n}\r\n.payroll-icons p{\r\n    font-weight:bold !important;padding-top:2em;line-height: 1.5em;\r\n}\r\n#middle{\r\n    padding:4.5em 0;\r\n}\r\n.forms img{\r\n    width:100px;height: 100px;\r\n}\r\n.forms p{\r\n    line-height: normal;\r\n    font-size:14px;\r\n    padding:1em;\r\n    /*color:#717171;*/\r\n}\r\n.forms a{\r\n    /*color:#717171;*/\r\n    display: block;\r\n    margin-bottom:0.5em;\r\n}\r\n.forms a:hover{\r\n    color:teal;\r\n}\r\n.forms{\r\n    /*padding-top:3em;*/\r\n    z-index:1;\r\n}\r\n#form-bottom-row{\r\n    margin-bottom: 5em;\r\n}\r\n.calculator{\r\n    max-width:400px;background-color:teal;padding:2em;border:1px solid teal;border-radius: 10px;\r\n    margin:0 auto;margin-bottom:8em;\r\n}\r\n.calculator p{\r\n    color:white;\r\n}\r\n.calculator input{\r\n    background-color:teal;border:0;border-bottom:2px solid white;color:white;padding:0.5em;\r\n    width:100%;\r\n}\r\n.error{\r\n    border-bottom:2px solid red !important;\r\n}\r\n.calculator input::placeholder{\r\n    color:#eeeeee;\r\n}\r\n.calculator input:focus, .calculator button:focus{\r\n    outline:none;\r\n}\r\n.calculator button{\r\n    color:white;margin-top:2em;background-color:grey;cursor:pointer;padding:0.5em 1em;\r\n}\r\n.calculator button:hover{\r\n    background-color:#757575;\r\n}\r\n.calculator button#reset{\r\n    background-color:white;color:grey;\r\n}\r\n.calculator button#reset:hover{\r\n    background-color:#e0e0e0;\r\n}\r\n.subheader{\r\n    /*color:#717171*/;letter-spacing: 2px;text-align: center;margin-bottom: 2em;\r\n    font-weight:500;font-size:1.5em;\r\n}\r\narticle{\r\n    margin-bottom:4em;\r\n    text-align:center;\r\n}\r\n\r\n@media only screen and (max-width: 650px){/*550px*/\r\n    .column-1,\r\n    .column-2,\r\n    .column-3,\r\n    .column-4,\r\n    .column-5,\r\n    .column-6,\r\n    .column-7,\r\n    .column-8,\r\n    .column-9,\r\n    .column-10,\r\n    .column-11,\r\n    .column-12 {\r\n        width: 100%;\r\n        float: none;\r\n    }\r\n\r\n    [class*=column]{\r\n      margin-left: 0;\r\n    }\r\n    [class*=column] + [class*=column]{\r\n    margin-left: 0;\r\n    }\r\n}\r\n@media only screen and (min-width:500px){\r\n    #home-main-image{\r\n        height:450px;\r\n    }\r\n    #home-main-image .overlay{\r\n        height:450px;\r\n    }\r\n    #home-main-image h1{\r\n        padding-top: 20%;font-size:2.2em;margin-left:10%;margin:0 10%;\r\n    }\r\n    #home-main-image h3{\r\n        /*font-weight:lighter;\r\n        font-size:17px;*/\r\n        font-size:15px;padding:0;line-height:24px;letter-spacing: 0.9px;text-shadow:2px 0 black;\r\n    }\r\n    #home-main-image div{\r\n        text-align: center;\r\n        margin-top:10%;\r\n    }\r\n    #home-main-image div span{\r\n        border:2px solid white;\r\n    }\r\n    span#contact-btn{\r\n        /*border:2px solid teal !important;*/\r\n    }\r\n    nav img{\r\n        width:80px;\r\n    }\r\n    .header-img{\r\n        position:relative;\r\n        height:300px;\r\n    }\r\n    .overlay{/*huh*/\r\n        height:300px;\r\n    }\r\n}\r\n@media only screen and (min-width:600px){\r\n    form{\r\n        padding:3em 4em 5em 4em;\r\n    }\r\n}\r\n@media only screen and (min-width: 650px){\r\n    #contact-info{\r\n        padding: 4em 1em;\r\n    }\r\n    .row.services{\r\n    display: -ms-flex; display: -webkit-flex; display:flex;\r\n    }\r\n    .service-box-wrapper{\r\n        padding:0 2em;\r\n    }\r\n    .communication-row-wrapper{\r\n        margin-top: 5em;margin-bottom: 5em;/*desktop: margin-top,margin-bottom: 3em*/\r\n    }\r\n    .inner-wrapper.first{\r\n        padding-bottom: 0;\r\n        border-right:1px solid grey;\r\n    }\r\n    .inner-wrapper.last{\r\n        padding-top: 0;\r\n    }\r\n    .inner-wrapper a{\r\n        pointer-events: none;/*msg and call for desktop*/\r\n    }\r\n    .inner-wrapper.first a{\r\n        pointer-events: auto;\r\n    }\r\n    .logo-style #header{\r\n        font-size: 40px;\r\n    }\r\n    .logo-style #subheader{\r\n        font-size:17px;\r\n    }\r\n    .logo-style #subheader-two{\r\n        font-size:10px;\r\n    }\r\n     #middle{\r\n        padding:0;\r\n    }\r\n    .payroll-icons p{\r\n        padding-top:1.2em;\r\n    }\r\n\r\n}\r\n@media only screen and (min-width:700px){\r\n    #home-main-image{\r\n        height:800px;\r\n    }\r\n     #home-main-image .overlay{\r\n        height:800px;\r\n    }\r\n    #home-main-image h1{\r\n        padding-top: 18%;font-size:3.5em;margin-left:10%;margin:0 10%;\r\n    }\r\n    #home-main-image h3{\r\n        font-weight:lighter;\r\n        font-size:18px;\r\n        padding:5% 8% 0 8%;\r\n        line-height:30px;letter-spacing: 1px;\r\n    }\r\n    #home-main-image div{\r\n        text-align: center;\r\n        margin-top:10%;\r\n    }\r\n    #home-main-image div span{\r\n        font-size: 18px;\r\n        font-weight:500;\r\n    }\r\n    span#contact-btn{\r\n        /*border:2px solid teal !important;*/\r\n    }\r\n    .header-img{\r\n        position:relative;\r\n        height:400px;\r\n    }\r\n    .overlay{\r\n        height:400px;\r\n    }\r\n    .description{\r\n        font-size:20px;\r\n    }\r\n    form{\r\n        max-width:700px;\r\n    }\r\n    .payroll-icons p{\r\n        padding:0 1em;\r\n    }\r\n    #home-header{\r\n        font-size:25px;\r\n    }\r\n   \r\n}\r\n\r\n/*larger screens (e.g. desktop)*/\r\n@media only screen and (min-width: 1024px){\r\n    \r\n    #home-main-image h1{\r\n        padding-top:15%;\r\n    }\r\n    #home-main-image h3{\r\n        padding:2% 8% 0 8%;\r\n    }\r\n    #home-main-image div{\r\n        margin-top:6%;\r\n    }\r\n    #footer-contact p{\r\n        font-size:18px;\r\n        color:grey;\r\n    }\r\n    .header{\r\n        font-size:24px !important;\r\n    }\r\n    #navigation{\r\n        font-size:18px;\r\n        color:grey;\r\n    }\r\n    #navigation a:hover{\r\n        color:white;\r\n    }\r\n    #copyright{\r\n        font-size: 18px;\r\n    }\r\n\t#menu-btn{\r\n\t\tdisplay:none;\r\n\t}\r\n\t#desktop-menu{\r\n\t\tdisplay:block;\r\n\t\ttext-align:center;\r\n\t\tmargin-top:1em;\r\n\t}\r\n\t#desktop-menu a{\r\n\t\tmargin:0 2.5em;\r\n\t\tpadding-bottom:0.5em;\r\n\t}\r\n\t#desktop-menu a:link, #desktop-menu a:visited{\r\n\t\tfont-size:12px;\r\n\t\tcolor: white;\r\n\t}\r\n\t#desktop-menu a:hover{\r\n\t\tborder-bottom: 2px solid var(--main-color);\r\n\t}\r\n\t.selected{\r\n\t\tborder-bottom: 2px solid var(--main-color);\r\n\t}\r\n    #home-main-image div span{\r\n        border:2.5px solid white;\r\n    }\r\n    span#contact-btn {\r\n        /*border:2.5px solid teal !important;*/\r\n    }\r\n    #home-main-image h3{\r\n        font-weight:lighter;\r\n        font-size:20px;\r\n        line-height:35px;letter-spacing: 1px;text-shadow:0;\r\n    }\r\n\t/*inner wrapper stuff*/\r\n\t#footer-contact {\r\n\t\ttext-align: left;\r\n\t}\r\n\t#navigation, #footer-contact,#copyright{\r\n\t\tmargin-bottom:0;\r\n\t}\r\n\t#home-main-pic{\r\n\t\twidth: 100%;\r\n\t\theight: 30vw;\r\n\t}\r\n\t#payroll-content{\r\n\t\tpadding-bottom:5.5em;\r\n\t}\r\n\t#forms ul, #payroll-content{\r\n\t\tfont-size:1em;\r\n\t}\r\n\t.page-info-box{\r\n\t\theight: 20em;\r\n\t\tposition:static;\r\n\t\tz-index:-2;\r\n\t}\r\n\t.page-info-box p{\r\n\t\tfont-size:2.5em;\r\n\t\tdisplay:block;\r\n\t\tmargin-top:2em;\r\n\t}\r\n    .page-info-tag span{\r\n        font-size:2.5em;\r\n    }\r\n\t.content-box{\r\n\t\tfont-size:20px;\r\n\t\tpadding:5em 4em 5em 4em;\r\n\t\tmargin:0 auto;\r\n\t\tposition:relative;\r\n\t\tmin-width:0;max-width: 1080px;\r\n\t\tbox-sizing: border-box;\r\n\t}\r\n\t.content-box h3{\r\n\t\tfont-size:1.5em;\r\n\t\tfont-weight:lighter;\r\n\t}\r\n\tfooter{\r\n\t\tbackground-color:black;\r\n\t\tpadding-top:7em;padding-bottom:8em;\r\n\t}\r\n\tfooter a{\r\n\t\tcolor: var(--main-color);\r\n\t}\r\n\t#copyright{\r\n\t\tcolor: grey;\r\n\t}\r\n\t.content-box.main-img{\r\n\t\tmargin:-3.7em 3em 3em 3em;\r\n\t}\r\n\t\r\n\t.content-box.main-img img, .overlay{\r\n\t\theight:80vh;\r\n\t}\r\n\t.content-box.main-img p{\r\n\t\tpadding:0 20%;top:40%;\r\n\t}\r\n\tnav{\r\n\t\tbackground-color: rgba(0,0,0,0.7);\r\n\t\tpadding:0.5em 0.5em 1em 0.5em;\r\n        height:4em;\r\n\t}\r\n\t.image{\r\n\t\tmargin-top: -4.1em;\r\n\t}\r\n\t.logo-style{\r\n\t\ttext-align:center;\r\n\t\tpadding:1em 0;\r\n\t\tbackground-color:#72716b;\r\n\t\tcolor:white;\r\n\t}\r\n\t#main-text{\r\n\t\ttext-align: center;\r\n\t\tpadding: 5em 5em;\r\n\t\tmax-width:700px;\r\n\t\tmargin:0 auto;\r\n\t\tline-height: 1.7em;\r\n\t\tcolor: var(--header-color);\r\n\t\tfont-size:24px;\r\n\t}\r\n    .content-box.contact{\r\n        padding-bottom:6em;\r\n    }\r\n    #contact-page-info h3{\r\n        font-size:28px;\r\n    }\r\n    #menu-btn-wrapper{\r\n        display:none;\r\n    }\r\n    #mobile-menu{\r\n        display:none;\r\n    }\r\n    .logo-style #header{\r\n        font-size: 50px;\r\n    }\r\n    .logo-style #subheader{\r\n        font-size:18px;\r\n    }\r\n    .logo-style #subheader-two{\r\n        font-size:12px;\r\n    }\r\n    .header-img{\r\n        position:relative;\r\n        height:510px;\r\n    }\r\n    .overlay{\r\n        height:510px;\r\n    }\r\n    .description{\r\n        font-size:22px;\r\n    }\r\n    .content-box-no-padding{\r\n    \tmin-width:0;max-width:1080px;padding-left:0;padding-right:0;margin:0 auto;\r\n    }\r\n    .content-box.about{\r\n        padding:5em 6em 8em 6em;\r\n    }\r\n    #accounting-services ul{\r\n        list-style-type: circle;\r\n        margin-left: 3em;\r\n        font-size:18px;\r\n    }\r\n    #accounting-services{\r\n        padding:3em;\r\n        line-height:1.5em;\r\n        font-size:20px;\r\n    }\r\n    .payroll-icons p{\r\n        padding:0 2.5em;\r\n        line-height:1.5em;\r\n        font-size:15px;\r\n    }  \r\n}\r\n\r\n@media only screen and (min-width: 2560px){\r\n    #home-main-image h1{\r\n        padding-top: 10%;\r\n    }\r\n\r\n    #home-main-image div{\r\n        text-align: center;\r\n        margin-top:4%;\r\n    }\r\n}", ""]);



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

/*import _ from 'flexboxgrid';*/

let initialNavColor;

document.addEventListener("readystatechange", function(){
    let title = document.getElementsByTagName("title")[0].innerHTML;
    let currentPage;
    document.getElementsByTagName('body')[0].style.backgroundColor = "#E8E8E3";
    if(title.includes("home")){
        currentPage = "nav-home"
        setWhiteBackground();
    }else if(title.includes("about")){
        currentPage = "nav-about"
    }else if(title.includes("contact")){
        currentPage = "nav-contact"
    }else if(title.includes("resources")){
        currentPage = "nav-resources"
    }else if(title.includes("payroll")){
        currentPage = "nav-payroll";
    }else if(title.includes("services")){
        currentPage = "nav-services";
    }

    if(title.includes("home")){
        initialNavColor = "transparent";
    }else{
        initialNavColor = "rgba(0,0,0,0.7)"
    }
    document.getElementsByTagName('nav')[0].style.backgroundColor = initialNavColor;
    document.getElementById(currentPage).className = "selected";
})


function setWhiteBackground(){
    document.getElementsByTagName('body')[0].style.backgroundColor = "white";
}

let timer = null;

let x = window.matchMedia("(max-width: 1024px)");/*min-width: 1024px*/

function setNavbar(x){
    mobileNavbar();
}
setNavbar(x);

window.addEventListener('resize', function(e){
    setNavbar(x);
});


function desktopNavbar(){
    console.log("desktop");
    let navbar = document.getElementsByTagName('nav')[0];/**/
    navbar.style.backgroundColor="rgba(0,0,0,0.7)";
}

function mobileNavbar(){
    window.addEventListener('scroll', function(e){
       
        let navbar = document.getElementsByTagName('nav')[0];
        if(window.scrollY >10){
            navbar.style.backgroundColor="rgba(0,0,0,0.7)";
        }else{
            navbar.style.backgroundColor= initialNavColor;
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







/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tLmNzcz85Mzc1Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsMkJBQTJCLG1CQUFPLENBQUMscUdBQWdEO0FBQ25GO0FBQ0EsY0FBYyxRQUFTLGlCQUFpQiwyQkFBMkIsZ0NB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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkZBLGNBQWMsbUJBQU8sQ0FBQyxvSEFBdUQ7O0FBRTdFLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxtR0FBZ0Q7O0FBRXJFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ25CZjtBQUFBO0FBQUE7QUFBc0I7QUFDdEIsOEJBQThCOztBQUU5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaURBQWlEOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0NBQStDLEVBQUU7QUFDakQiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcblxcclxcbjpyb290e1xcclxcbiAgICAtLW1haW4tY29sb3I6IHRlYWw7XFxyXFxuICAgIC0taGVhZGVyLWNvbG9yOiAjNzE3MTcxO1xcclxcbiAgICAtLXRleHQtY29sb3I6ICM0MDQwNDE7XFxyXFxufVxcclxcbmJvZHl7XFxyXFxuICAgIHBhZGRpbmc6MDttYXJnaW46IDA7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5oMixoM3tcXHJcXG4gICAgY29sb3I6dmFyKC0taGVhZGVyLWNvbG9yKTtcXHJcXG59XFxyXFxuYXtcXHJcXG4gICAgY29sb3I6dmFyKC0tdGV4dC1jb2xvcik7XFxyXFxufVxcclxcbi5jb250YWluZXJ7XFxyXFxuICAgIHBhZGRpbmc6IDFlbTtcXHJcXG59XFxyXFxuLnJvdyxcXHJcXG4uY29sdW1ue1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG4ucm93e1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxufVxcclxcbi5yb3c6YmVmb3JlLCBcXHJcXG4ucm93OmFmdGVye1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgZGlzcGxheTogdGFibGU7XFxyXFxufVxcclxcbi5yb3c6YWZ0ZXJ7XFxyXFxuICAgIGNsZWFyOiBib3RoO1xcclxcbn1cXHJcXG5bY2xhc3MqPWNvbHVtbl17XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZmxvYXQ6bGVmdDtcXHJcXG59XFxyXFxuW2NsYXNzKj1jb2x1bW5dICsgW2NsYXNzKj1jb2x1bW5de1xcclxcbiAgICBtYXJnaW4tbGVmdDogMS42JTtcXHJcXG59XFxyXFxuLmNvbHVtbi0xe1xcclxcbiAgICB3aWR0aDogNi44NjY2NjY2NjclO1xcclxcbn1cXHJcXG4uY29sdW1uLTJ7XFxyXFxuICAgIHdpZHRoOiAxNS4zMzMzMzMzMzMzJTtcXHJcXG59XFxyXFxuLmNvbHVtbi0ze1xcclxcbiAgICB3aWR0aDogMjMuOCU7XFxyXFxufVxcclxcbi5jb2x1bW4tNHtcXHJcXG4gICAgd2lkdGg6IDMyLjI2NjY2NjY2NjclO1xcclxcbn1cXHJcXG4uY29sdW1uLTV7IFxcclxcbiAgICB3aWR0aDogNDAuNzMzMzMzMzMzMyU7XFxyXFxufVxcclxcbi5jb2x1bW4tNntcXHJcXG4gICAgd2lkdGg6IDQ5LjIlO1xcclxcbn1cXHJcXG4uY29sdW1uLTd7XFxyXFxuICAgIHdpZHRoOiA1Ny42NjY2NjY2NjY3JTtcXHJcXG59XFxyXFxuLmNvbHVtbi04e1xcclxcbiAgICB3aWR0aDogNjYuMTMzMzMzMzMzMyU7XFxyXFxufVxcclxcbi5jb2x1bW4tOXtcXHJcXG4gICAgd2lkdGg6IDc0LjYlO1xcclxcbn1cXHJcXG4uY29sdW1uLTEwe1xcclxcbiAgICB3aWR0aDogODMuMDY2NjY2NjclO1xcclxcbn1cXHJcXG4uY29sdW1uLTExe1xcclxcbiAgICB3aWR0aDogOTEuNTMzMzMzMzMzMyU7XFxyXFxufVxcclxcbi5jb2x1bW4tMTJ7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxufVxcclxcbi8qb2Zmc2V0Ki9cXHJcXG4uY29sdW1uLW9mZnNldC0xe1xcclxcbiAgICBtYXJnaW4tbGVmdDogOC40NjY2NjY2NjclO1xcclxcbn1cXHJcXG4uY29sdW1uLW9mZnNldC0ye1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTYuOTMzMzMzMzMlO1xcclxcbn1cXHJcXG4uY29sdW1uLW9mZnNldC0ze1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjUuNCU7XFxyXFxufVxcclxcbi5jb2x1bW4tb2Zmc2V0LTR7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAzMy44NjY2NjY2NjclO1xcclxcbn1cXHJcXG4uY29sdW1uLW9mZnNldC01e1xcclxcbiAgICBtYXJnaW4tbGVmdDogNDIuMzMzMzMzMzMzJTtcXHJcXG59XFxyXFxuLmNvbHVtbi1vZmZzZXQtNntcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDUwLjglO1xcclxcbn1cXHJcXG4uY29sdW1uLW9mZnNldC03e1xcclxcbiAgICBtYXJnaW4tbGVmdDogNTkuMjY2NjY2NjY3JTtcXHJcXG59XFxyXFxuLmNvbHVtbi1vZmZzZXQtOHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDY3LjczMzMzMzMzMyU7XFxyXFxufVxcclxcbi5jb2x1bW4tb2Zmc2V0LTl7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA3Ni4yJTtcXHJcXG59XFxyXFxuLmNvbHVtbi1vZmZzZXQtMTB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA4NC42NjY2NjY2NjclO1xcclxcbn1cXHJcXG4uY29sdW1uLW9mZnNldC0xMXtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDkzLjEzMzMzMzMzMyU7XFxyXFxufS8qZW5kIG9mIG15LWdyaWQqL1xcclxcbnB7XFxyXFxuXFx0bWFyZ2luOjA7XFxyXFxuXFx0cGFkZGluZzowO1xcclxcbn1cXHJcXG5he1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxubmF2e1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGhlaWdodDozZW07XFxyXFxuXFx0cGFkZGluZzowO1xcclxcblxcdHdpZHRoOjEwMCU7XFxyXFxuXFx0ei1pbmRleDoyO1xcclxcbiAgICBwb3NpdGlvbjpmaXhlZDtcXHJcXG59XFxyXFxubmF2IGltZ3tcXHJcXG4gICAgd2lkdGg6NTBweDt0b3A6MTUlO2xlZnQ6MmVtO3Bvc2l0aW9uOmFic29sdXRlO1xcclxcbn1cXHJcXG4jbG9nby13cmFwcGVye1xcclxcblxcdGhlaWdodDogNDBweDtcXHJcXG5cXHR3aWR0aDogMjc1cHg7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHRmbG9hdDpsZWZ0O1xcclxcbn1cXHJcXG4jbG9nby1pbWFnZXtcXHJcXG5cXHRoZWlnaHQ6IDUwcHg7XFxyXFxuXFx0d2lkdGg6IDkwcHg7XFxyXFxuXFx0ZmxvYXQ6IGxlZnQ7XFxyXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3MzLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL3dqcy1hY2NvdW50aW5nLXByb2plY3QvaW1hZ2VzL2pzbG9nb3llbGxvdy5qcGVnJyk7XFxyXFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG4jbG9nby10ZXh0e1xcclxcblxcdGhlaWdodDogNTBweDtcXHJcXG5cXHR3aWR0aDogMTMwcHg7XFxyXFxuXFx0ZmxvYXQ6IGxlZnQ7XFxyXFxuXFx0Zm9udC1zaXplOiAxMnB4O1xcclxcblxcdHBhZGRpbmctbGVmdDogMWVtO1xcclxcblxcdHBhZGRpbmctdG9wOiA1cHg7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHRiYWNrZ3JvdW5kLXNpemU6d2hpdGU7XFxyXFxufVxcclxcbm5hdjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBkaXNwbGF5OiB0YWJsZTtcXHJcXG4gICAgY2xlYXI6IGJvdGg7XFxyXFxufVxcclxcbiNtZW51LWJ0bntcXHJcXG4gICAgd2lkdGg6MmVtO1xcclxcbiAgICBoZWlnaHQ6MmVtO1xcclxcbiAgICBwYWRkaW5nOjFlbSAxZW0gMCAxZW07XFxyXFxuICAgIGZsb2F0OnJpZ2h0O1xcclxcbiAgICBjdXJzb3I6cG9pbnRlcjtcXHJcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxufVxcclxcbiNtZW51LWJ0biBkaXYge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcclxcblxcdGhlaWdodDogMnB4O1xcclxcblxcdHdpZHRoOiAyNXB4O1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuI21lbnUtYnRuIGRpdjpmaXJzdC1jaGlsZHtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOjAuNWVtO1xcclxcbn1cXHJcXG4jbWVudS1idG4gZGl2Omxhc3QtY2hpbGR7XFxyXFxuXFx0dG9wOjEuNWVtO1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIHRvcC1wYXJhbGxlbHtcXHJcXG4gICAgMCV7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMC41ZW0pIHJvdGF0ZSgxMzVkZWcpO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCV7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDBkZWcpO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi50b3AtcGFyYWxsZWx7XFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiB0b3AtcGFyYWxsZWw7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgYm90dG9tLXBhcmFsbGVse1xcclxcbiAgICAwJXtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAle1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLmJvdHRvbS1wYXJhbGxlbHtcXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGJvdHRvbS1wYXJhbGxlbDtcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBsZWFuLXJpZ2h0e1xcclxcbiAgICAwJXtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoMGRlZyk7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJXtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwLjVlbSkgcm90YXRlKDEzNWRlZyk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLmxlYW4tcmlnaHR7XFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBsZWFuLXJpZ2h0O1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGxlYW4tbGVmdHtcXHJcXG4gICAgMCV7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAle1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5sZWFuLWxlZnR7XFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBsZWFuLWxlZnQ7XFxyXFxufVxcclxcbi5hbmltYXRlLWJ0bntcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOjAuNXM7XFxyXFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxyXFxufVxcclxcbiNkZXNrdG9wLW1lbnV7XFxyXFxuXFx0ZGlzcGxheTpub25lO1xcclxcbn1cXHJcXG4jaG9tZS1tYWluLXBpY3tcXHJcXG5cXHQvKiBoZWlnaHQ6IDIwdmg7ICovXFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0aGVpZ2h0OiAzMHZ3O1xcclxcbn1cXHJcXG4ub2JqZWN0LWZpbGxfZmlsbHtcXHJcXG5cXHRvYmplY3QtZml0OiBmaWxsO1xcclxcbn1cXHJcXG5cXHJcXG4uY292ZXJ7XFxyXFxuXFx0d2lkdGg6MjYwcHg7XFxyXFxuXFx0b2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcbiNtYWluLXRleHR7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdHBhZGRpbmc6IDVlbSAxZW07LypwYWRkaW5nOiAzZW0gM2VtKi9cXHJcXG5cXHRtYXgtd2lkdGg6MjBlbTtcXHJcXG5cXHRtYXJnaW46MCBhdXRvO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjdlbTtcXHJcXG5cXHRcXHJcXG5cXHRjb2xvcjogIzY2NWQ1ZDtcXHJcXG5cXHRmb250LXNpemU6MThweDtcXHJcXG59XFxyXFxuI3NlcnZpY2UtcGlje1xcclxcblxcdG1hcmdpbjogMCBhdXRvO1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdGhlaWdodDo5MHB4O1xcclxcbn1cXHJcXG4uc2VydmljZS1oZWFkZXJ7XFxyXFxuXFx0Zm9udC1zaXplOjIwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcXHJcXG59XFxyXFxuLnNlcnZpY2UtZGVzY3JpcHRpb257XFxyXFxuXFx0Zm9udC1zaXplOjE4cHg7XFxyXFxufVxcclxcbi5zZXJ2aWNlLWhlYWRlciwgLnNlcnZpY2UtZGVzY3JpcHRpb257XFxyXFxuXFx0Y29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4jc2VydmljZXN7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI0VDRUNFQztcXHJcXG5cXHRwYWRkaW5nOiA1ZW0gMmVtIDBlbSAyZW07Lyo1IDIgMCAyKi9cXHJcXG59XFxyXFxuI3JlYWQtbW9yZS1idG57XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdHBhZGRpbmc6MWVtO1xcclxcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHR3aWR0aDogNi4yZW07XFxyXFxuXFx0bWFyZ2luOiA1ZW0gYXV0byA1ZW0gYXV0bztcXHJcXG59XFxyXFxuI3NlcnZpY2VzIC5jb2x1bW4tNHtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTo0ZW07XFxyXFxufVxcclxcbiNjb250YWN0LWluZm97XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdHBhZGRpbmc6IDZlbSAxZW07XFxyXFxufVxcclxcbiNjb250YWN0LWluZm8gcHtcXHJcXG5cXHRsaW5lLWhlaWdodDogMS44ZW07XFxyXFxuXFx0Zm9udC1zaXplOiAxN3B4O1xcclxcblxcdG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG59XFxyXFxuI2NvbnRhY3QtaW5mbyBoM3tcXHJcXG5cXHRmb250LXdlaWdodDogbm9ybWFsO1xcclxcblxcdC8qY29sb3I6IHJnYigxMTMsMTEzLDExMyk7Ki9cXHJcXG5cXHRmb250LXNpemU6MjVweDtcXHJcXG59XFxyXFxuI2NvbnRhY3QtaW5mbyBhe1xcclxcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxufVxcclxcbi5tYXAtY29udGFjdC13cmFwcGVye1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNFQ0VDRUM7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTowO1xcclxcbn1cXHJcXG4uYnRue1xcclxcblxcdHBhZGRpbmc6IDFlbTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0d2lkdGg6IDEwZW07XFxyXFxuXFx0bWFyZ2luOiAyZW0gYXV0bztcXHJcXG5cXHQvKiBmb250LXNpemU6IDE1cHg7ICovXFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbi5jb21tdW5pY2F0aW9uLXJvdy13cmFwcGVye1xcclxcblxcdG1hcmdpbi10b3A6IDVlbTttYXJnaW4tYm90dG9tOiA1ZW07Lypmb250LXNpemU6MTRweDtzZGVza3RvcDogbWFyZ2luLXRvcCxtYXJnaW4tYm90dG9tOiAzZW0qL1xcclxcbn1cXHJcXG4uY29tbXVuaWNhdGlvbi1yb3ctd3JhcHBlciBwe1xcclxcblxcdGZvbnQtc2l6ZToxN3B4O1xcclxcbn1cXHJcXG4uaW5uZXItd3JhcHBlcntcXHJcXG5cXHR3aWR0aDoxMDAlO3RleHQtYWxpZ246IGNlbnRlclxcclxcbn1cXHJcXG4uaW5uZXItd3JhcHBlciBkaXZ7XFxyXFxuXFx0bWF4LXdpZHRoOjI5ZW07XFxyXFxuXFx0ZGlzcGxheTpibG9jaztcXHJcXG5cXHRtYXJnaW46MCBhdXRvO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRwYWRkaW5nOiAwZW0gM2VtOy8qMWVtKi9cXHJcXG5cXHQvKnBhZGRpbmc6IDNlbSAzZW07IGZvciBkZXNrdG9wKi9cXHJcXG59XFxyXFxuLmlubmVyLXdyYXBwZXIuZmlyc3R7XFxyXFxuXFx0LyptYXJnaW4tdG9wOiAyZW07Ki9cXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogMWVtOy8qMCBpbiBub24tbW9iaWxlKi9cXHJcXG5cXHRib3JkZXItcmlnaHQ6MHB4O1xcclxcbn1cXHJcXG4uaW5uZXItd3JhcHBlci5sYXN0e1xcclxcblxcdC8qbWFyZ2luLWJvdHRvbTogNWVtOyovXFxyXFxuXFx0cGFkZGluZy10b3A6IDFlbTsvKjAgaW4gbm9uLW1vYmlsZSovXFxyXFxufVxcclxcbi5pbm5lci13cmFwcGVyIGgye1xcclxcblxcdGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcclxcblxcdGZvbnQtc2l6ZTogMjVweDsvKmRlc2t0b3AgZm9udC1zaXplOiAyZW0qL1xcclxcblxcdFxcclxcblxcdC8qY29sb3I6IGdyZXk7Ki9cXHJcXG59XFxyXFxuI2hvbWUtaGVhZGVye1xcclxcbiAgICBjb2xvcjp2YXIoLS1oZWFkZXItY29sb3IpO2ZvbnQtc2l6ZTogMjJweDttYXJnaW4tdG9wOjIuNWVtO21hcmdpbi1ib3R0b206MC41ZW07Zm9udC13ZWlnaHQ6NTAwO1xcclxcbn1cXHJcXG4uaW5uZXItd3JhcHBlciBwe1xcclxcblxcdC8qbGluZS1oZWlnaHQ6M2VtOyovXFxyXFxuXFx0bGluZS1oZWlnaHQ6IDJlbTtcXHJcXG59XFxyXFxuLmlubmVyLXdyYXBwZXIgYXtcXHJcXG5cXHRwb2ludGVyLWV2ZW50czogYXV0bzsvKm5vbmUgZm9yIGRlc2t0b3AqL1xcclxcbn1cXHJcXG5cXHJcXG51bHtcXHJcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuXFx0cGFkZGluZzowO1xcclxcbn1cXHJcXG4jbmF2aWdhdGlvbntcXHJcXG5cXHR0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG5cXHRmb250LXNpemU6MTJweDtcXHJcXG59XFxyXFxudWwgYTpsaW5rLCB1bCBhOnZpc2l0ZWR7XFxyXFxuXFx0Y29sb3I6dmFyKC0tbWFpbi1jb2xvcik7XFxyXFxufVxcclxcbiNuYXZpZ2F0aW9uIHVsIGxpe1xcclxcblxcdG1hcmdpbi1ib3R0b206MmVtO1xcclxcbn1cXHJcXG5mb290ZXJ7XFxyXFxuXFx0cGFkZGluZzogMTBlbSAwIDRlbSAwO1xcclxcblxcdGNvbG9yOiMzMzMzMzM7XFxyXFxufVxcclxcbiNjb3B5cmlnaHR7XFxyXFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG5cXHRmb250LXNpemU6MTFweDtcXHJcXG5cXHRtYXJnaW46MCBhdXRvO1xcclxcblxcdHdpZHRoOjE1ZW07XFxyXFxufVxcclxcbi5oZWFkZXJ7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbToxLjVlbTtmb250LXNpemU6MThweDsvKmNvbG9yOmdyZXkqL1xcclxcbn1cXHJcXG4jZm9vdGVyLWNvbnRhY3QgcHtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxufVxcclxcbiNmb290ZXItY29udGFjdCB7XFxyXFxuXFx0Zm9udC1zaXplOjEzcHg7XFxyXFxuXFx0bWF4LXdpZHRoIDoxNWVtO1xcdFxcclxcblxcdG1hcmdpbjowIGF1dG87XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4jbmF2aWdhdGlvbiwgI2Zvb3Rlci1jb250YWN0LCNjb3B5cmlnaHR7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTo1ZW07XFxyXFxufVxcclxcbiNtb2JpbGUtbWVudSB1bHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbiNtb2JpbGUtbWVudSB1bCBsaXtcXHJcXG5cXHRwYWRkaW5nOjFlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4jbW9iaWxlLW1lbnUgdWwgbGl7XFxyXFxuXFx0Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2VjZWNlYztcXHJcXG59XFxyXFxuI21vYmlsZS1tZW51IHVsIGxpOmxhc3QtY2hpbGR7XFxyXFxuXFx0Ym9yZGVyOm5vbmU7XFxyXFxufVxcclxcbiNtYXB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcXHJcXG59XFxyXFxuI3BheXJvbGwtY29udGVudHtcXHJcXG5cXHRwYWRkaW5nLWxlZnQ6MWVtO1xcclxcblxcdHBhZGRpbmctcmlnaHQ6MWVtO1xcclxcblxcdHBhZGRpbmctYm90dG9tOjVlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMmVtO1xcclxcbn1cXHJcXG4jcGF5cm9sbC1jb250ZW50IHAsIC5zdWItZGVzY3JpcHRpb257XFxyXFxuXFx0Lypjb2xvcjogIzMzMzMzMzsqL1xcclxcblxcdGZvbnQtd2VpZ2h0OmxpZ2h0ZXI7dGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxufVxcclxcbiNwYXlyb2xsLWNvbnRlbnQgdWx7XFxyXFxuXFx0bGlzdC1zdHlsZS10eXBlOiBjaXJjbGU7XFxyXFxuXFx0cGFkZGluZy1sZWZ0OjNlbTtcXHJcXG5cXHRwYWRkaW5nLXJpZ2h0OjFlbTtcXHJcXG5cXHQvKmNvbG9yOiMzMzMzMzM7Ki9cXHJcXG59XFxyXFxuI2Zvcm1zIHVse1xcclxcblxcdGxpc3Qtc3R5bGUtdHlwZTogY2lyY2xlO1xcclxcblxcdHBhZGRpbmctbGVmdDogMmVtO1xcclxcblxcdGZvbnQtc2l6ZToxNXB4O1xcclxcbn1cXHJcXG4jZm9ybXN7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDJlbTtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICBwYWRkaW5nOjVlbSAwIDVlbSAxZW07XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjp3aGl0ZXNtb2tlO1xcclxcbn1cXHJcXG4ucGFnZS1pbmZvLWJveHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1haW4tY29sb3IpO1xcclxcblxcdHdpZHRoOjEwMCU7XFxyXFxuXFx0aGVpZ2h0Ojg1dmg7LypjaGFuZ2UgdG8gcGVybWFuZW50IGhlaWdodCBpbiBkZXNrdG9wKi9cXHJcXG5cXHRkaXNwbGF5OnRhYmxlO1xcclxcbn1cXHJcXG4ucGFnZS1pbmZvLWJveCBwe1xcclxcblxcdGNvbG9yOndoaXRlO1xcclxcblxcdGZvbnQtc2l6ZToxLjVlbTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0ZGlzcGxheTp0YWJsZS1jZWxsO1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcbi5jb250ZW50LWJveHtcXHJcXG5cXHRwYWRkaW5nOjNlbSAyZW07XFxyXFxuXFx0ei1pbmRleDowOy8qLTIqL1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjhlbTtcXHJcXG5cXHQvKmNvbG9yOiMzMzM7Ki9cXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcclxcbn1cXHJcXG4uY29udGVudC1ib3ggaDMsIC5jb250ZW50LWJveCBoNHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5jb250ZW50LWJveC5jb250YWN0e1xcclxcbiAgICBwYWRkaW5nLXRvcDo1LjVlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206M2VtO1xcclxcbn1cXHJcXG4uY29udGVudC1ib3guYWJvdXR7XFxyXFxuICAgIC8qcGFkZGluZzoxZW0gMS41ZW0gOGVtIDEuNWVtOyovXFxyXFxuICAgIHBhZGRpbmc6M2VtIDJlbSAxMGVtIDJlbTtcXHJcXG59XFxyXFxuI21vYmlsZS1tZW51e1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gICAgaGVpZ2h0Ojkwdmg7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6Ym9sZDtcXHJcXG5cXHRmb250LXNpemU6MjFweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcclxcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgcmlnaHQ6MDtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbiAgICBwYWRkaW5nLXRvcDo2MHB4O1xcclxcbiAgICBkaXNwbGF5OmJsb2NrOyBcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiByZ2JhKDAsMCwwLDAuMSkgLTJweCAwIDJweDtcXHJcXG4gICAgLW1vei1ib3gtc2hhZG93OiByZ2JhKDAsMCwwLDAuMSkgLTJweCAwIDJweDtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLDAsMCwwLjEpIC0ycHggMCAycHg7XFxyXFxufVxcclxcbi5zZXJ2aWNlLWJveC13cmFwcGVye1xcclxcbiAgICBwYWRkaW5nOjAgMGVtO1xcclxcbn1cXHJcXG4uc2VydmljZS1ib3gtd3JhcHBlciBkaXZ7XFxyXFxuXFx0d2lkdGg6MTAwJTt0ZXh0LWFsaWduOmNlbnRlcjtkaXNwbGF5OnRhYmxlO2hlaWdodDo2ZW07XFxyXFxufVxcclxcbi5zZXJ2aWNlLWJveC13cmFwcGVyIGgze1xcclxcblxcdGRpc3BsYXk6dGFibGUtY2VsbDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XFxyXFxufVxcclxcbiNhY2NvdW50aW5nLXNlcnZpY2VzIHVse1xcclxcblxcdGxpc3Qtc3R5bGUtdHlwZTogY2lyY2xlO1xcclxcblxcdG1hcmdpbi1sZWZ0OiAzZW07XFxyXFxuXFx0Zm9udC1zaXplOjE0cHg7XFxyXFxufVxcclxcbiNhY2NvdW50aW5nLXNlcnZpY2Vze1xcclxcblxcdHBhZGRpbmc6M2VtO1xcclxcblxcdGxpbmUtaGVpZ2h0OjEuNWVtO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxyXFxuXFx0Zm9udC1zaXplOjE1cHg7XFxyXFxufVxcclxcbi5jb250ZW50LWJveC5zZXJ2aWNlc3tcXHJcXG5cXHRtYXJnaW4tdG9wOjA7LypiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50Ki9wYWRkaW5nOjAgMCA1ZW0gMDtcXHJcXG59XFxyXFxuLnJvdy5zZXJ2aWNlc3tcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuLypzZXJ2aWNlcyBwYWdlKi9cXHJcXG4uY29udGVudC1ib3gubWFpbi1pbWd7XFxyXFxuXFx0cGFkZGluZzowO3Bvc2l0aW9uOnJlbGF0aXZlO1xcclxcblxcdG1hcmdpbjowLyoxMCUqLztiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG4ub3ZlcmxheXtcXHJcXG5cXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLHRyYW5zcGFyZW50IDAscmdiYSgwLDAsMCwwLjY1KSAxMDAlKTtcXHJcXG5cXHRwb3NpdGlvbjphYnNvbHV0ZTtcXHJcXG59XFxyXFxuLmNvbnRlbnQtYm94Lm1haW4taW1nIGltZywgLm92ZXJsYXl7XFxyXFxuXFx0d2lkdGg6MTAwJTtoZWlnaHQ6MjA3cHg7XFxyXFxufVxcclxcbi5jb250ZW50LWJveC5tYWluLWltZyBwe1xcclxcblxcdHBvc2l0aW9uOmFic29sdXRlO3BhZGRpbmc6MCA1JTt0ZXh0LWFsaWduOiBjZW50ZXI7Y29sb3I6d2hpdGU7dG9wOjI1JTtcXHJcXG59XFxyXFxuLmNvbnRhY3QtaW5mb3tcXHJcXG5cXHQvKmNvbG9yOiMzMzMzMzM7Ki9cXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0bGluZS1oZWlnaHQ6Mi4zZW07XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTo1ZW07XFxyXFxufVxcclxcbi5jb250YWN0LWluZm8gaDR7XFxyXFxuXFx0bWFyZ2luOjA7XFxyXFxuXFx0Zm9udC1zaXplOjEuMmVtO1xcclxcbn1cXHJcXG4uY29udGFjdC1pbmZvIGltZ3tcXHJcXG5cXHR3aWR0aDogMzBweDtcXHJcXG59XFxyXFxuLmNvbnRhY3QtaW5mbyBhe1xcclxcblxcdGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG59XFxyXFxuLmNvbnRhY3QtaW5mbyBhOmhvdmVye1xcclxcblxcdGNvbG9yOnZhcigtLW1haW4tY29sb3IpO1xcclxcbn1cXHJcXG4ucm93LmNvbnRhY3R7XFxyXFxuXFx0bWFyZ2luLXRvcDo0LjVlbTtcXHJcXG59XFxyXFxuLmxvZ28tc3R5bGV7XFxyXFxuXFx0dGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzoxZW0gMDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiM3MjcxNmI7XFxyXFxuXFx0Y29sb3I6d2hpdGU7XFxyXFxufVxcclxcbi5pbWFnZXtcXHJcXG5cXHRwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG5cXHR6LWluZGV4OiAtMztcXHJcXG59XFxyXFxuLnBhZ2UtaW5mby10YWd7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGJvdHRvbTogMjUlO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRjb2xvcjp3aGl0ZTtcXHJcXG5cXHR6LWluZGV4OjE7XFxyXFxufVxcclxcbi5wYWdlLWluZm8tdGFnIHNwYW57XFxyXFxuXFx0Zm9udC1zaXplOjJlbTtcXHJcXG5cXHRmb250LXdlaWdodDo1MDA7XFxyXFxufVxcclxcbiNjb250YWN0LXBhZ2UtaW5mb3tcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7cGFkZGluZy10b3A6NGVtO3BhZGRpbmctYm90dG9tOjNlbTtcXHJcXG59XFxyXFxuI2NvbnRhY3QtcGFnZS1pbmZvIGgze1xcclxcbiAgICAvKmNvbG9yOiM3MTcxNzEqLztmb250LXNpemU6MjBweDtmb250LXdlaWdodDo1MDA7dGV4dC1hbGlnbjpjZW50ZXI7cGFkZGluZzoyZW0gMWVtIDBlbSAxZW07bWFyZ2luLXRvcDowO1xcclxcbn1cXHJcXG4jbWVudS1idG4td3JhcHBlcnsvKnByZXZlbnRzIGNoYW5nZSBpbiBzaXplIHdoZW4gb3BlbmluZyAmIGNsb3NpbmcgbWVudSovXFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgIGhlaWdodDozZW07XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbiNtZW51LWJ0bi13cmFwcGVyOmFmdGVye1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgZGlzcGxheTp0YWJsZTtcXHJcXG4gICAgY2xlYXI6Ym90aDtcXHJcXG59XFxyXFxuLmxvZ28tc3R5bGUgI2hlYWRlcntcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbn1cXHJcXG4ubG9nby1zdHlsZSAjc3ViaGVhZGVye1xcclxcbiAgICBmb250LXNpemU6MTVweDtcXHJcXG59XFxyXFxuLmxvZ28tc3R5bGUgI3N1YmhlYWRlci10d297XFxyXFxuICAgIGZvbnQtc2l6ZToxMHB4O1xcclxcbn1cXHJcXG4jaG9tZS1tYWluLWltYWdle1xcclxcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgaGVpZ2h0OjM2MHB4O1xcclxcbiAgIGJhY2tncm91bmQ6IHVybChcXFwiaHR0cDovL2pzY3BhZ3Jvd3RoLmNvbS9hc3NldHMvaG9tZXBhZ2UtbWFpbi1pbWFnZS5qcGVnXFxcIikgbm8tcmVwZWF0IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuI2hvbWUtbWFpbi1pbWFnZSAub3ZlcmxheXtcXHJcXG4gICAgbWFyZ2luOjA7aGVpZ2h0OjM2MHB4O2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LHJnYmEoMCwwLDAsMC40KSlcXHJcXG59XFxyXFxuI2hvbWUtbWFpbi1pbWFnZSBoMXtcXHJcXG4gICAgbWFyZ2luOjA7dGV4dC1hbGlnbjpjZW50ZXI7Y29sb3I6d2hpdGU7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAzZW07Zm9udC1zaXplOjEuNWVtO1xcclxcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuN3M7XFxyXFxufVxcclxcbiNob21lLW1haW4taW1hZ2UgaDN7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtjb2xvcjp3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOjEycHg7cGFkZGluZzowIDUlO2xpbmUtaGVpZ2h0OjIwcHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXHJcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjdzO1xcclxcbn1cXHJcXG4jaG9tZS1tYWluLWltYWdlIGRpdntcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOjIwJTtcXHJcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxLjFzO1xcclxcbn1cXHJcXG4jaG9tZS1tYWluLWltYWdlIGRpdiBzcGFue1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XFxyXFxuICAgIG1hcmdpbjoxJTtcXHJcXG4gICAgYm9yZGVyOjFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDEsMiwzLDAuNSk7XFxyXFxuICAgIHBhZGRpbmc6MWVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcXHJcXG59XFxyXFxuI2hvbWUtbWFpbi1pbWFnZSBkaXYgc3Bhbjpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDEsMiwzLDAuNyk7XFxyXFxufVxcclxcbnNwYW4jY29udGFjdC1idG57XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6dGVhbCAhaW1wb3J0YW50O1xcclxcbiAgICAvKmJvcmRlcjoxcHggc29saWQgdGVhbCAhaW1wb3J0YW50OyovXFxyXFxufVxcclxcbnNwYW4jY29udGFjdC1idG46aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IzAwNTk1OSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4jaG9tZS1tYWluLWltYWdlIGRpdiBzcGFuIGF7XFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGZhZGVEb3due1xcclxcbiAgICAwJXtcXHJcXG4gICAgICAgIG9wYWNpdHk6MDtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcXHJcXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xcclxcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAle1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxyXFxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxyXFxuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuQGtleWZyYW1lcyBmYWRlVXB7XFxyXFxuICAgIDAle1xcclxcbiAgICAgICAgb3BhY2l0eTowO1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XFxyXFxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xcclxcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJXtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcclxcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcclxcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5mYWRlVXB7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ZmFkZVVwO1xcclxcbiAgICAtbW96LWFuaW1hdGlvbi1uYW1lOmZhZGVVcDtcXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVVcDtcXHJcXG59XFxyXFxuLmZhZGVEb3due1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOmZhZGVEb3duO1xcclxcbiAgICAtbW96LWFuaW1hdGlvbi1uYW1lOmZhZGVEb3duO1xcclxcbiAgICBhbmltYXRpb24tbmFtZTpmYWRlRG93bjtcXHJcXG59XFxyXFxuLmFuaW1hdGV7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xcclxcbiAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDtcXHJcXG4gICAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7XFxyXFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDtcXHJcXG59XFxyXFxuLmhlYWRlci1pbWd7XFxyXFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbiAgICBoZWlnaHQ6MjA3cHg7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxufVxcclxcbi5kZXNjcmlwdGlvbntcXHJcXG4gICAgZm9udC1zaXplOjE2cHg7dGV4dC1hbGlnbjpjZW50ZXI7bGluZS1oZWlnaHQ6MS44ZW07Y29sb3I6IzcxNzE3MTtcXHJcXG4gICAgbWluLXdpZHRoOjUwcHg7bWF4LXdpZHRoOjcwMHB4O21hcmdpbjowIGF1dG87cGFkZGluZzowLjVlbSAwLjhlbSA2ZW0gMC44ZW07XFxyXFxufVxcclxcbi5jb250ZW50LWJveC1uby1wYWRkaW5ne1xcclxcblxcdGJhY2tncm91bmQ6d2hpdGU7XFxyXFxuXFx0cGFkZGluZy10b3A6NS41ZW07cGFkZGluZy1ib3R0b206M2VtO1xcclxcblxcdHBhZGRpbmctbGVmdDoxZW07cGFkZGluZy1yaWdodDoxZW07XFxyXFxufVxcclxcbiNmb3Jte1xcclxcblxcclxcbn1cXHJcXG5mb3Jte1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZGVjZWE7bWFyZ2luOjAgYXV0bzt3aWR0aDoxMDAlOy8qY29sb3I6IzcxNzE3MSovO2JveC1zaXppbmc6Ym9yZGVyLWJveDtcXHJcXG4gICAgcGFkZGluZzozZW0gMWVtIDVlbSAxZW07XFxyXFxufVxcclxcbmZvcm0gaDN7XFxyXFxuICAgIHBhZGRpbmc6MDttYXJnaW46MCAwIDIuNWVtIDA7XFxyXFxufVxcclxcbi5mb3JtLWlucHV0e1xcclxcbiAgd2lkdGg6MTAwJTtoZWlnaHQ6M2VtO3BhZGRpbmctbGVmdDoyZW07Ym9yZGVyOjFweCBzb2xpZCB3aGl0ZTtib3JkZXItcmFkaXVzOjVweDtcXHJcXG4gIG1hcmdpbjoxZW0gMCAyLjVlbSAwO2JveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbi5mb3JtLXRleHQtaW5wdXR7XFxyXFxuICBib3JkZXI6MXB4IHNvbGlkIHdoaXRlO2JvcmRlci1yYWRpdXM6NXB4O3BhZGRpbmc6MWVtIDJlbTtcXHJcXG4gIHdpZHRoOjEwMCU7aGVpZ2h0OjIwMHB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDttYXJnaW46MWVtIDAgMi41ZW0gMDtcXHJcXG59XFxyXFxuLmZvcm0tYnRue1xcclxcbiAgcGFkZGluZzoxZW0gMmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czo1cHg7XFxyXFxufVxcclxcbi5zZW5ke1xcclxcbiAgY29sb3I6d2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgYm9yZGVyOjFweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuLnNlbmQ6aG92ZXJ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDQ0NzMgO1xcclxcbiAgY3Vyc29yOnBvaW50ZXI7XFxyXFxufVxcclxcbi5yZXNldHtcXHJcXG4gICBib3JkZXI6MXB4IHNvbGlkIHdoaXRlO2JvcmRlci1yYWRpdXM6NXB4O3BhZGRpbmc6MWVtIDJlbTsgXFxyXFxufVxcclxcbi5yZXNldDpob3ZlcntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IzcyNzE2YjtcXHJcXG4gIGNvbG9yOndoaXRlO1xcclxcbiAgY3Vyc29yOnBvaW50ZXI7XFxyXFxufVxcclxcbi5wYXlyb2xsLWljb25ze1xcclxcbiAgICBwYWRkaW5nLXRvcDoyLjVlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206M2VtO1xcclxcbn1cXHJcXG4ucGF5cm9sbC1pY29ucyBpbWd7XFxyXFxuICAgIHdpZHRoOjgwcHg7XFxyXFxufVxcclxcbi5wYXlyb2xsLWljb25zIGRpdntcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4ucGF5cm9sbC1pY29ucyBwe1xcclxcbiAgICBmb250LXdlaWdodDpib2xkICFpbXBvcnRhbnQ7cGFkZGluZy10b3A6MmVtO2xpbmUtaGVpZ2h0OiAxLjVlbTtcXHJcXG59XFxyXFxuI21pZGRsZXtcXHJcXG4gICAgcGFkZGluZzo0LjVlbSAwO1xcclxcbn1cXHJcXG4uZm9ybXMgaW1ne1xcclxcbiAgICB3aWR0aDoxMDBweDtoZWlnaHQ6IDEwMHB4O1xcclxcbn1cXHJcXG4uZm9ybXMgcHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zaXplOjE0cHg7XFxyXFxuICAgIHBhZGRpbmc6MWVtO1xcclxcbiAgICAvKmNvbG9yOiM3MTcxNzE7Ki9cXHJcXG59XFxyXFxuLmZvcm1zIGF7XFxyXFxuICAgIC8qY29sb3I6IzcxNzE3MTsqL1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTowLjVlbTtcXHJcXG59XFxyXFxuLmZvcm1zIGE6aG92ZXJ7XFxyXFxuICAgIGNvbG9yOnRlYWw7XFxyXFxufVxcclxcbi5mb3Jtc3tcXHJcXG4gICAgLypwYWRkaW5nLXRvcDozZW07Ki9cXHJcXG4gICAgei1pbmRleDoxO1xcclxcbn1cXHJcXG4jZm9ybS1ib3R0b20tcm93e1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1ZW07XFxyXFxufVxcclxcbi5jYWxjdWxhdG9ye1xcclxcbiAgICBtYXgtd2lkdGg6NDAwcHg7YmFja2dyb3VuZC1jb2xvcjp0ZWFsO3BhZGRpbmc6MmVtO2JvcmRlcjoxcHggc29saWQgdGVhbDtib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBtYXJnaW46MCBhdXRvO21hcmdpbi1ib3R0b206OGVtO1xcclxcbn1cXHJcXG4uY2FsY3VsYXRvciBwe1xcclxcbiAgICBjb2xvcjp3aGl0ZTtcXHJcXG59XFxyXFxuLmNhbGN1bGF0b3IgaW5wdXR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6dGVhbDtib3JkZXI6MDtib3JkZXItYm90dG9tOjJweCBzb2xpZCB3aGl0ZTtjb2xvcjp3aGl0ZTtwYWRkaW5nOjAuNWVtO1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbn1cXHJcXG4uZXJyb3J7XFxyXFxuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4uY2FsY3VsYXRvciBpbnB1dDo6cGxhY2Vob2xkZXJ7XFxyXFxuICAgIGNvbG9yOiNlZWVlZWU7XFxyXFxufVxcclxcbi5jYWxjdWxhdG9yIGlucHV0OmZvY3VzLCAuY2FsY3VsYXRvciBidXR0b246Zm9jdXN7XFxyXFxuICAgIG91dGxpbmU6bm9uZTtcXHJcXG59XFxyXFxuLmNhbGN1bGF0b3IgYnV0dG9ue1xcclxcbiAgICBjb2xvcjp3aGl0ZTttYXJnaW4tdG9wOjJlbTtiYWNrZ3JvdW5kLWNvbG9yOmdyZXk7Y3Vyc29yOnBvaW50ZXI7cGFkZGluZzowLjVlbSAxZW07XFxyXFxufVxcclxcbi5jYWxjdWxhdG9yIGJ1dHRvbjpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNzU3NTc1O1xcclxcbn1cXHJcXG4uY2FsY3VsYXRvciBidXR0b24jcmVzZXR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7Y29sb3I6Z3JleTtcXHJcXG59XFxyXFxuLmNhbGN1bGF0b3IgYnV0dG9uI3Jlc2V0OmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlMGUwZTA7XFxyXFxufVxcclxcbi5zdWJoZWFkZXJ7XFxyXFxuICAgIC8qY29sb3I6IzcxNzE3MSovO2xldHRlci1zcGFjaW5nOiAycHg7dGV4dC1hbGlnbjogY2VudGVyO21hcmdpbi1ib3R0b206IDJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6NTAwO2ZvbnQtc2l6ZToxLjVlbTtcXHJcXG59XFxyXFxuYXJ0aWNsZXtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTo0ZW07XFxyXFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KXsvKjU1MHB4Ki9cXHJcXG4gICAgLmNvbHVtbi0xLFxcclxcbiAgICAuY29sdW1uLTIsXFxyXFxuICAgIC5jb2x1bW4tMyxcXHJcXG4gICAgLmNvbHVtbi00LFxcclxcbiAgICAuY29sdW1uLTUsXFxyXFxuICAgIC5jb2x1bW4tNixcXHJcXG4gICAgLmNvbHVtbi03LFxcclxcbiAgICAuY29sdW1uLTgsXFxyXFxuICAgIC5jb2x1bW4tOSxcXHJcXG4gICAgLmNvbHVtbi0xMCxcXHJcXG4gICAgLmNvbHVtbi0xMSxcXHJcXG4gICAgLmNvbHVtbi0xMiB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGZsb2F0OiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIFtjbGFzcyo9Y29sdW1uXXtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gICAgfVxcclxcbiAgICBbY2xhc3MqPWNvbHVtbl0gKyBbY2xhc3MqPWNvbHVtbl17XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo1MDBweCl7XFxyXFxuICAgICNob21lLW1haW4taW1hZ2V7XFxyXFxuICAgICAgICBoZWlnaHQ6NDUwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgI2hvbWUtbWFpbi1pbWFnZSAub3ZlcmxheXtcXHJcXG4gICAgICAgIGhlaWdodDo0NTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAjaG9tZS1tYWluLWltYWdlIGgxe1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDIwJTtmb250LXNpemU6Mi4yZW07bWFyZ2luLWxlZnQ6MTAlO21hcmdpbjowIDEwJTtcXHJcXG4gICAgfVxcclxcbiAgICAjaG9tZS1tYWluLWltYWdlIGgze1xcclxcbiAgICAgICAgLypmb250LXdlaWdodDpsaWdodGVyO1xcclxcbiAgICAgICAgZm9udC1zaXplOjE3cHg7Ki9cXHJcXG4gICAgICAgIGZvbnQtc2l6ZToxNXB4O3BhZGRpbmc6MDtsaW5lLWhlaWdodDoyNHB4O2xldHRlci1zcGFjaW5nOiAwLjlweDt0ZXh0LXNoYWRvdzoycHggMCBibGFjaztcXHJcXG4gICAgfVxcclxcbiAgICAjaG9tZS1tYWluLWltYWdlIGRpdntcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6MTAlO1xcclxcbiAgICB9XFxyXFxuICAgICNob21lLW1haW4taW1hZ2UgZGl2IHNwYW57XFxyXFxuICAgICAgICBib3JkZXI6MnB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICB9XFxyXFxuICAgIHNwYW4jY29udGFjdC1idG57XFxyXFxuICAgICAgICAvKmJvcmRlcjoycHggc29saWQgdGVhbCAhaW1wb3J0YW50OyovXFxyXFxuICAgIH1cXHJcXG4gICAgbmF2IGltZ3tcXHJcXG4gICAgICAgIHdpZHRoOjgwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmhlYWRlci1pbWd7XFxyXFxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gICAgICAgIGhlaWdodDozMDBweDtcXHJcXG4gICAgfVxcclxcbiAgICAub3ZlcmxheXsvKmh1aCovXFxyXFxuICAgICAgICBoZWlnaHQ6MzAwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjYwMHB4KXtcXHJcXG4gICAgZm9ybXtcXHJcXG4gICAgICAgIHBhZGRpbmc6M2VtIDRlbSA1ZW0gNGVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjUwcHgpe1xcclxcbiAgICAjY29udGFjdC1pbmZve1xcclxcbiAgICAgICAgcGFkZGluZzogNGVtIDFlbTtcXHJcXG4gICAgfVxcclxcbiAgICAucm93LnNlcnZpY2Vze1xcclxcbiAgICBkaXNwbGF5OiAtbXMtZmxleDsgZGlzcGxheTogLXdlYmtpdC1mbGV4OyBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIH1cXHJcXG4gICAgLnNlcnZpY2UtYm94LXdyYXBwZXJ7XFxyXFxuICAgICAgICBwYWRkaW5nOjAgMmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5jb21tdW5pY2F0aW9uLXJvdy13cmFwcGVye1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogNWVtO21hcmdpbi1ib3R0b206IDVlbTsvKmRlc2t0b3A6IG1hcmdpbi10b3AsbWFyZ2luLWJvdHRvbTogM2VtKi9cXHJcXG4gICAgfVxcclxcbiAgICAuaW5uZXItd3JhcHBlci5maXJzdHtcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xcclxcbiAgICAgICAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCBncmV5O1xcclxcbiAgICB9XFxyXFxuICAgIC5pbm5lci13cmFwcGVyLmxhc3R7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcXHJcXG4gICAgfVxcclxcbiAgICAuaW5uZXItd3JhcHBlciBhe1xcclxcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7Lyptc2cgYW5kIGNhbGwgZm9yIGRlc2t0b3AqL1xcclxcbiAgICB9XFxyXFxuICAgIC5pbm5lci13cmFwcGVyLmZpcnN0IGF7XFxyXFxuICAgICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXHJcXG4gICAgfVxcclxcbiAgICAubG9nby1zdHlsZSAjaGVhZGVye1xcclxcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5sb2dvLXN0eWxlICNzdWJoZWFkZXJ7XFxyXFxuICAgICAgICBmb250LXNpemU6MTdweDtcXHJcXG4gICAgfVxcclxcbiAgICAubG9nby1zdHlsZSAjc3ViaGVhZGVyLXR3b3tcXHJcXG4gICAgICAgIGZvbnQtc2l6ZToxMHB4O1xcclxcbiAgICB9XFxyXFxuICAgICAjbWlkZGxle1xcclxcbiAgICAgICAgcGFkZGluZzowO1xcclxcbiAgICB9XFxyXFxuICAgIC5wYXlyb2xsLWljb25zIHB7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDoxLjJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzAwcHgpe1xcclxcbiAgICAjaG9tZS1tYWluLWltYWdle1xcclxcbiAgICAgICAgaGVpZ2h0OjgwMHB4O1xcclxcbiAgICB9XFxyXFxuICAgICAjaG9tZS1tYWluLWltYWdlIC5vdmVybGF5e1xcclxcbiAgICAgICAgaGVpZ2h0OjgwMHB4O1xcclxcbiAgICB9XFxyXFxuICAgICNob21lLW1haW4taW1hZ2UgaDF7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogMTglO2ZvbnQtc2l6ZTozLjVlbTttYXJnaW4tbGVmdDoxMCU7bWFyZ2luOjAgMTAlO1xcclxcbiAgICB9XFxyXFxuICAgICNob21lLW1haW4taW1hZ2UgaDN7XFxyXFxuICAgICAgICBmb250LXdlaWdodDpsaWdodGVyO1xcclxcbiAgICAgICAgZm9udC1zaXplOjE4cHg7XFxyXFxuICAgICAgICBwYWRkaW5nOjUlIDglIDAgOCU7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDozMHB4O2xldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgI2hvbWUtbWFpbi1pbWFnZSBkaXZ7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOjEwJTtcXHJcXG4gICAgfVxcclxcbiAgICAjaG9tZS1tYWluLWltYWdlIGRpdiBzcGFue1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6NTAwO1xcclxcbiAgICB9XFxyXFxuICAgIHNwYW4jY29udGFjdC1idG57XFxyXFxuICAgICAgICAvKmJvcmRlcjoycHggc29saWQgdGVhbCAhaW1wb3J0YW50OyovXFxyXFxuICAgIH1cXHJcXG4gICAgLmhlYWRlci1pbWd7XFxyXFxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gICAgICAgIGhlaWdodDo0MDBweDtcXHJcXG4gICAgfVxcclxcbiAgICAub3ZlcmxheXtcXHJcXG4gICAgICAgIGhlaWdodDo0MDBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZGVzY3JpcHRpb257XFxyXFxuICAgICAgICBmb250LXNpemU6MjBweDtcXHJcXG4gICAgfVxcclxcbiAgICBmb3Jte1xcclxcbiAgICAgICAgbWF4LXdpZHRoOjcwMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5wYXlyb2xsLWljb25zIHB7XFxyXFxuICAgICAgICBwYWRkaW5nOjAgMWVtO1xcclxcbiAgICB9XFxyXFxuICAgICNob21lLWhlYWRlcntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZToyNXB4O1xcclxcbiAgICB9XFxyXFxuICAgXFxyXFxufVxcclxcblxcclxcbi8qbGFyZ2VyIHNjcmVlbnMgKGUuZy4gZGVza3RvcCkqL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KXtcXHJcXG4gICAgXFxyXFxuICAgICNob21lLW1haW4taW1hZ2UgaDF7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDoxNSU7XFxyXFxuICAgIH1cXHJcXG4gICAgI2hvbWUtbWFpbi1pbWFnZSBoM3tcXHJcXG4gICAgICAgIHBhZGRpbmc6MiUgOCUgMCA4JTtcXHJcXG4gICAgfVxcclxcbiAgICAjaG9tZS1tYWluLWltYWdlIGRpdntcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6NiU7XFxyXFxuICAgIH1cXHJcXG4gICAgI2Zvb3Rlci1jb250YWN0IHB7XFxyXFxuICAgICAgICBmb250LXNpemU6MThweDtcXHJcXG4gICAgICAgIGNvbG9yOmdyZXk7XFxyXFxuICAgIH1cXHJcXG4gICAgLmhlYWRlcntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZToyNHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG4gICAgI25hdmlnYXRpb257XFxyXFxuICAgICAgICBmb250LXNpemU6MThweDtcXHJcXG4gICAgICAgIGNvbG9yOmdyZXk7XFxyXFxuICAgIH1cXHJcXG4gICAgI25hdmlnYXRpb24gYTpob3ZlcntcXHJcXG4gICAgICAgIGNvbG9yOndoaXRlO1xcclxcbiAgICB9XFxyXFxuICAgICNjb3B5cmlnaHR7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIH1cXHJcXG5cXHQjbWVudS1idG57XFxyXFxuXFx0XFx0ZGlzcGxheTpub25lO1xcclxcblxcdH1cXHJcXG5cXHQjZGVza3RvcC1tZW51e1xcclxcblxcdFxcdGRpc3BsYXk6YmxvY2s7XFxyXFxuXFx0XFx0dGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxuXFx0XFx0bWFyZ2luLXRvcDoxZW07XFxyXFxuXFx0fVxcclxcblxcdCNkZXNrdG9wLW1lbnUgYXtcXHJcXG5cXHRcXHRtYXJnaW46MCAyLjVlbTtcXHJcXG5cXHRcXHRwYWRkaW5nLWJvdHRvbTowLjVlbTtcXHJcXG5cXHR9XFxyXFxuXFx0I2Rlc2t0b3AtbWVudSBhOmxpbmssICNkZXNrdG9wLW1lbnUgYTp2aXNpdGVke1xcclxcblxcdFxcdGZvbnQtc2l6ZToxMnB4O1xcclxcblxcdFxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHR9XFxyXFxuXFx0I2Rlc2t0b3AtbWVudSBhOmhvdmVye1xcclxcblxcdFxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG5cXHR9XFxyXFxuXFx0LnNlbGVjdGVke1xcclxcblxcdFxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG5cXHR9XFxyXFxuICAgICNob21lLW1haW4taW1hZ2UgZGl2IHNwYW57XFxyXFxuICAgICAgICBib3JkZXI6Mi41cHggc29saWQgd2hpdGU7XFxyXFxuICAgIH1cXHJcXG4gICAgc3BhbiNjb250YWN0LWJ0biB7XFxyXFxuICAgICAgICAvKmJvcmRlcjoyLjVweCBzb2xpZCB0ZWFsICFpbXBvcnRhbnQ7Ki9cXHJcXG4gICAgfVxcclxcbiAgICAjaG9tZS1tYWluLWltYWdlIGgze1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6bGlnaHRlcjtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZToyMHB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6MzVweDtsZXR0ZXItc3BhY2luZzogMXB4O3RleHQtc2hhZG93OjA7XFxyXFxuICAgIH1cXHJcXG5cXHQvKmlubmVyIHdyYXBwZXIgc3R1ZmYqL1xcclxcblxcdCNmb290ZXItY29udGFjdCB7XFxyXFxuXFx0XFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG5cXHR9XFxyXFxuXFx0I25hdmlnYXRpb24sICNmb290ZXItY29udGFjdCwjY29weXJpZ2h0e1xcclxcblxcdFxcdG1hcmdpbi1ib3R0b206MDtcXHJcXG5cXHR9XFxyXFxuXFx0I2hvbWUtbWFpbi1waWN7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0aGVpZ2h0OiAzMHZ3O1xcclxcblxcdH1cXHJcXG5cXHQjcGF5cm9sbC1jb250ZW50e1xcclxcblxcdFxcdHBhZGRpbmctYm90dG9tOjUuNWVtO1xcclxcblxcdH1cXHJcXG5cXHQjZm9ybXMgdWwsICNwYXlyb2xsLWNvbnRlbnR7XFxyXFxuXFx0XFx0Zm9udC1zaXplOjFlbTtcXHJcXG5cXHR9XFxyXFxuXFx0LnBhZ2UtaW5mby1ib3h7XFxyXFxuXFx0XFx0aGVpZ2h0OiAyMGVtO1xcclxcblxcdFxcdHBvc2l0aW9uOnN0YXRpYztcXHJcXG5cXHRcXHR6LWluZGV4Oi0yO1xcclxcblxcdH1cXHJcXG5cXHQucGFnZS1pbmZvLWJveCBwe1xcclxcblxcdFxcdGZvbnQtc2l6ZToyLjVlbTtcXHJcXG5cXHRcXHRkaXNwbGF5OmJsb2NrO1xcclxcblxcdFxcdG1hcmdpbi10b3A6MmVtO1xcclxcblxcdH1cXHJcXG4gICAgLnBhZ2UtaW5mby10YWcgc3BhbntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZToyLjVlbTtcXHJcXG4gICAgfVxcclxcblxcdC5jb250ZW50LWJveHtcXHJcXG5cXHRcXHRmb250LXNpemU6MjBweDtcXHJcXG5cXHRcXHRwYWRkaW5nOjVlbSA0ZW0gNWVtIDRlbTtcXHJcXG5cXHRcXHRtYXJnaW46MCBhdXRvO1xcclxcblxcdFxcdHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcblxcdFxcdG1pbi13aWR0aDowO21heC13aWR0aDogMTA4MHB4O1xcclxcblxcdFxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFx0fVxcclxcblxcdC5jb250ZW50LWJveCBoM3tcXHJcXG5cXHRcXHRmb250LXNpemU6MS41ZW07XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6bGlnaHRlcjtcXHJcXG5cXHR9XFxyXFxuXFx0Zm9vdGVye1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6YmxhY2s7XFxyXFxuXFx0XFx0cGFkZGluZy10b3A6N2VtO3BhZGRpbmctYm90dG9tOjhlbTtcXHJcXG5cXHR9XFxyXFxuXFx0Zm9vdGVyIGF7XFxyXFxuXFx0XFx0Y29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcblxcdH1cXHJcXG5cXHQjY29weXJpZ2h0e1xcclxcblxcdFxcdGNvbG9yOiBncmV5O1xcclxcblxcdH1cXHJcXG5cXHQuY29udGVudC1ib3gubWFpbi1pbWd7XFxyXFxuXFx0XFx0bWFyZ2luOi0zLjdlbSAzZW0gM2VtIDNlbTtcXHJcXG5cXHR9XFxyXFxuXFx0XFxyXFxuXFx0LmNvbnRlbnQtYm94Lm1haW4taW1nIGltZywgLm92ZXJsYXl7XFxyXFxuXFx0XFx0aGVpZ2h0Ojgwdmg7XFxyXFxuXFx0fVxcclxcblxcdC5jb250ZW50LWJveC5tYWluLWltZyBwe1xcclxcblxcdFxcdHBhZGRpbmc6MCAyMCU7dG9wOjQwJTtcXHJcXG5cXHR9XFxyXFxuXFx0bmF2e1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43KTtcXHJcXG5cXHRcXHRwYWRkaW5nOjAuNWVtIDAuNWVtIDFlbSAwLjVlbTtcXHJcXG4gICAgICAgIGhlaWdodDo0ZW07XFxyXFxuXFx0fVxcclxcblxcdC5pbWFnZXtcXHJcXG5cXHRcXHRtYXJnaW4tdG9wOiAtNC4xZW07XFxyXFxuXFx0fVxcclxcblxcdC5sb2dvLXN0eWxle1xcclxcblxcdFxcdHRleHQtYWxpZ246Y2VudGVyO1xcclxcblxcdFxcdHBhZGRpbmc6MWVtIDA7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjojNzI3MTZiO1xcclxcblxcdFxcdGNvbG9yOndoaXRlO1xcclxcblxcdH1cXHJcXG5cXHQjbWFpbi10ZXh0e1xcclxcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRcXHRwYWRkaW5nOiA1ZW0gNWVtO1xcclxcblxcdFxcdG1heC13aWR0aDo3MDBweDtcXHJcXG5cXHRcXHRtYXJnaW46MCBhdXRvO1xcclxcblxcdFxcdGxpbmUtaGVpZ2h0OiAxLjdlbTtcXHJcXG5cXHRcXHRjb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXHJcXG5cXHRcXHRmb250LXNpemU6MjRweDtcXHJcXG5cXHR9XFxyXFxuICAgIC5jb250ZW50LWJveC5jb250YWN0e1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206NmVtO1xcclxcbiAgICB9XFxyXFxuICAgICNjb250YWN0LXBhZ2UtaW5mbyBoM3tcXHJcXG4gICAgICAgIGZvbnQtc2l6ZToyOHB4O1xcclxcbiAgICB9XFxyXFxuICAgICNtZW51LWJ0bi13cmFwcGVye1xcclxcbiAgICAgICAgZGlzcGxheTpub25lO1xcclxcbiAgICB9XFxyXFxuICAgICNtb2JpbGUtbWVudXtcXHJcXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAubG9nby1zdHlsZSAjaGVhZGVye1xcclxcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5sb2dvLXN0eWxlICNzdWJoZWFkZXJ7XFxyXFxuICAgICAgICBmb250LXNpemU6MThweDtcXHJcXG4gICAgfVxcclxcbiAgICAubG9nby1zdHlsZSAjc3ViaGVhZGVyLXR3b3tcXHJcXG4gICAgICAgIGZvbnQtc2l6ZToxMnB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5oZWFkZXItaW1ne1xcclxcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICAgICAgICBoZWlnaHQ6NTEwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLm92ZXJsYXl7XFxyXFxuICAgICAgICBoZWlnaHQ6NTEwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmRlc2NyaXB0aW9ue1xcclxcbiAgICAgICAgZm9udC1zaXplOjIycHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmNvbnRlbnQtYm94LW5vLXBhZGRpbmd7XFxyXFxuICAgIFxcdG1pbi13aWR0aDowO21heC13aWR0aDoxMDgwcHg7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO21hcmdpbjowIGF1dG87XFxyXFxuICAgIH1cXHJcXG4gICAgLmNvbnRlbnQtYm94LmFib3V0e1xcclxcbiAgICAgICAgcGFkZGluZzo1ZW0gNmVtIDhlbSA2ZW07XFxyXFxuICAgIH1cXHJcXG4gICAgI2FjY291bnRpbmctc2VydmljZXMgdWx7XFxyXFxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzZW07XFxyXFxuICAgICAgICBmb250LXNpemU6MThweDtcXHJcXG4gICAgfVxcclxcbiAgICAjYWNjb3VudGluZy1zZXJ2aWNlc3tcXHJcXG4gICAgICAgIHBhZGRpbmc6M2VtO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6MS41ZW07XFxyXFxuICAgICAgICBmb250LXNpemU6MjBweDtcXHJcXG4gICAgfVxcclxcbiAgICAucGF5cm9sbC1pY29ucyBwe1xcclxcbiAgICAgICAgcGFkZGluZzowIDIuNWVtO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6MS41ZW07XFxyXFxuICAgICAgICBmb250LXNpemU6MTVweDtcXHJcXG4gICAgfSAgXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjU2MHB4KXtcXHJcXG4gICAgI2hvbWUtbWFpbi1pbWFnZSBoMXtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2hvbWUtbWFpbi1pbWFnZSBkaXZ7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOjQlO1xcclxcbiAgICB9XFxyXFxufVwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jdXN0b20uY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2N1c3RvbS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2N1c3RvbS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgJy4vY3VzdG9tLmNzcyc7XHJcbi8qaW1wb3J0IF8gZnJvbSAnZmxleGJveGdyaWQnOyovXHJcblxyXG5sZXQgaW5pdGlhbE5hdkNvbG9yO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwgZnVuY3Rpb24oKXtcclxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGl0bGVcIilbMF0uaW5uZXJIVE1MO1xyXG4gICAgbGV0IGN1cnJlbnRQYWdlO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNFOEU4RTNcIjtcclxuICAgIGlmKHRpdGxlLmluY2x1ZGVzKFwiaG9tZVwiKSl7XHJcbiAgICAgICAgY3VycmVudFBhZ2UgPSBcIm5hdi1ob21lXCJcclxuICAgICAgICBzZXRXaGl0ZUJhY2tncm91bmQoKTtcclxuICAgIH1lbHNlIGlmKHRpdGxlLmluY2x1ZGVzKFwiYWJvdXRcIikpe1xyXG4gICAgICAgIGN1cnJlbnRQYWdlID0gXCJuYXYtYWJvdXRcIlxyXG4gICAgfWVsc2UgaWYodGl0bGUuaW5jbHVkZXMoXCJjb250YWN0XCIpKXtcclxuICAgICAgICBjdXJyZW50UGFnZSA9IFwibmF2LWNvbnRhY3RcIlxyXG4gICAgfWVsc2UgaWYodGl0bGUuaW5jbHVkZXMoXCJyZXNvdXJjZXNcIikpe1xyXG4gICAgICAgIGN1cnJlbnRQYWdlID0gXCJuYXYtcmVzb3VyY2VzXCJcclxuICAgIH1lbHNlIGlmKHRpdGxlLmluY2x1ZGVzKFwicGF5cm9sbFwiKSl7XHJcbiAgICAgICAgY3VycmVudFBhZ2UgPSBcIm5hdi1wYXlyb2xsXCI7XHJcbiAgICB9ZWxzZSBpZih0aXRsZS5pbmNsdWRlcyhcInNlcnZpY2VzXCIpKXtcclxuICAgICAgICBjdXJyZW50UGFnZSA9IFwibmF2LXNlcnZpY2VzXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYodGl0bGUuaW5jbHVkZXMoXCJob21lXCIpKXtcclxuICAgICAgICBpbml0aWFsTmF2Q29sb3IgPSBcInRyYW5zcGFyZW50XCI7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBpbml0aWFsTmF2Q29sb3IgPSBcInJnYmEoMCwwLDAsMC43KVwiXHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbmF2JylbMF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gaW5pdGlhbE5hdkNvbG9yO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY3VycmVudFBhZ2UpLmNsYXNzTmFtZSA9IFwic2VsZWN0ZWRcIjtcclxufSlcclxuXHJcblxyXG5mdW5jdGlvbiBzZXRXaGl0ZUJhY2tncm91bmQoKXtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xyXG59XHJcblxyXG5sZXQgdGltZXIgPSBudWxsO1xyXG5cclxubGV0IHggPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDEwMjRweClcIik7LyptaW4td2lkdGg6IDEwMjRweCovXHJcblxyXG5mdW5jdGlvbiBzZXROYXZiYXIoeCl7XHJcbiAgICBtb2JpbGVOYXZiYXIoKTtcclxufVxyXG5zZXROYXZiYXIoeCk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oZSl7XHJcbiAgICBzZXROYXZiYXIoeCk7XHJcbn0pO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGRlc2t0b3BOYXZiYXIoKXtcclxuICAgIGNvbnNvbGUubG9nKFwiZGVza3RvcFwiKTtcclxuICAgIGxldCBuYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbmF2JylbMF07LyoqL1xyXG4gICAgbmF2YmFyLnN0eWxlLmJhY2tncm91bmRDb2xvcj1cInJnYmEoMCwwLDAsMC43KVwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb2JpbGVOYXZiYXIoKXtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbihlKXtcclxuICAgICAgIFxyXG4gICAgICAgIGxldCBuYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbmF2JylbMF07XHJcbiAgICAgICAgaWYod2luZG93LnNjcm9sbFkgPjEwKXtcclxuICAgICAgICAgICAgbmF2YmFyLnN0eWxlLmJhY2tncm91bmRDb2xvcj1cInJnYmEoMCwwLDAsMC43KVwiO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBuYXZiYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yPSBpbml0aWFsTmF2Q29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZSgpe1xyXG4gICAgbGV0IG1lbnVCdG5EaXZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LWJ0blwiKS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRpdlwiKTtcclxuICAgIGxldCBkaXYgPSBtZW51QnRuRGl2c1swXTtcclxuICAgIGxldCBkaXYyID0gbWVudUJ0bkRpdnNbMV07XHJcbiAgICBpZihkaXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwibGVhbi1yaWdodFwiKSl7Ly9jbG9zZSBtZW51XHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJsZWFuLXJpZ2h0XCIpO1xyXG4gICAgICAgIGRpdjIuY2xhc3NMaXN0LnJlbW92ZShcImxlYW4tbGVmdFwiKTtcclxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcInRvcC1wYXJhbGxlbFwiKTtcclxuICAgICAgICBkaXYyLmNsYXNzTGlzdC5hZGQoXCJib3R0b20tcGFyYWxsZWxcIik7XHJcbiAgICAgICAgY2xvc2VOYXYoKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwidG9wLXBhcmFsbGVsXCIpO1xyXG4gICAgICAgIGRpdjIuY2xhc3NMaXN0LnJlbW92ZShcImJvdHRvbS1wYXJhbGxlbFwiKTtcclxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcImxlYW4tcmlnaHRcIik7XHJcbiAgICAgICAgZGl2Mi5jbGFzc0xpc3QuYWRkKFwibGVhbi1sZWZ0XCIpO1xyXG4gICAgICAgIG9wZW5OYXYoKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb3Blbk5hdigpe1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2JpbGUtbWVudVwiKS5zdHlsZS53aWR0aCA9IFwiMjUwcHhcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VOYXYoKXtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9iaWxlLW1lbnVcIikuc3R5bGUud2lkdGggPSBcIjBcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FsY01vcnRnYWdlUGF5bWVudChwLGkseSl7XHJcbiAgICBsZXQgciA9IChpLzEyMDApO1xyXG4gICAgbGV0IG4gPSB5KjEyO1xyXG4gICAgbGV0IHggPSBNYXRoLnBvdygxK3Isbik7XHJcbiAgICBsZXQgbSA9IHAqKHIqeC8oeC0xKSk7XHJcbiAgICByZXR1cm4gZm9ybWF0TnVtKE1hdGgucm91bmQobSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYWxjVG90YWxNb3J0Z2FnZShwLGkseSl7XHJcbiAgICBsZXQgciA9IChpLzEyMDApO1xyXG4gICAgbGV0IG4gPSB5KjEyO1xyXG4gICAgbGV0IHggPSBNYXRoLnBvdygxK3Isbik7XHJcbiAgICBsZXQgbSA9IHAqKHIqeC8oeC0xKSk7XHJcbiAgICByZXR1cm4gZm9ybWF0TnVtKE1hdGgucm91bmQobSpuKSk7XHJcbn1cclxuZnVuY3Rpb24gdmFsaWRhdGVJbnB1dCgpe1xyXG4gICAgbGV0IG1BID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb3J0Z2FnZS1hbW91bnRcIik7XHJcbiAgICBsZXQgaVIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImludGVyZXN0LXJhdGVcIik7XHJcbiAgICBsZXQgbVAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vcnRnYWdlLXBlcmlvZFwiKTtcclxuICAgIGxldCBwID0gcGFyc2VGbG9hdChtQS52YWx1ZSk7XHJcbiAgICBsZXQgaSA9IHBhcnNlRmxvYXQoaVIudmFsdWUpO1xyXG4gICAgbGV0IHkgPSBwYXJzZUludChtUC52YWx1ZSk7XHJcbiAgICBpZihwPjAgJiYgaT49MCAmJiB5PjApe1xyXG4gICAgICAgIHJlbW92ZUVycm9yQ2xhc3MobUEsaVIsbVApO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgaWYocDw9MCB8fCAhcCl7XHJcbiAgICAgICAgICAgIG1BLmNsYXNzTmFtZSA9IFwiZXJyb3JcIjtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbUEuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaTwwIHx8ICFpKXtcclxuICAgICAgICAgICAgaVIuY2xhc3NOYW1lID0gXCJlcnJvclwiO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpUi5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih5PD0wIHx8ICF5KXtcclxuICAgICAgICAgICAgbVAuY2xhc3NOYW1lID0gXCJlcnJvclwiO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBtUC5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUVycm9yQ2xhc3MobUEsaVIsbVApe1xyXG4gICAgaWYobUEuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZXJyb3JcIikpe1xyXG4gICAgICAgIG1BLmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICBpZihpUi5jbGFzc0xpc3QuY29udGFpbnMoXCJlcnJvclwiKSl7XHJcbiAgICAgICAgaVIuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgIH1cclxuICAgIGlmKG1QLmNsYXNzTGlzdC5jb250YWlucyhcImVycm9yXCIpKXtcclxuICAgICAgICBtUC5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlbnRlck1vcnRnYWdlSW5mbygpe1xyXG4gICAgaWYodmFsaWRhdGVJbnB1dCgpKXtcclxuICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9ydGdhZ2UtYW1vdW50XCIpLnZhbHVlO1xyXG4gICAgICAgIGxldCBpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnRlcmVzdC1yYXRlXCIpLnZhbHVlO1xyXG4gICAgICAgIGxldCB5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb3J0Z2FnZS1wZXJpb2RcIikudmFsdWU7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb250aGx5LXBheW1lbnRcIikuaW5uZXJIVE1MPWNhbGNNb3J0Z2FnZVBheW1lbnQocCxpLHkpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG90YWwtbW9ydGdhZ2VcIikuaW5uZXJIVE1MID0gY2FsY1RvdGFsTW9ydGdhZ2UocCxpLHkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldENhbGN1bGF0b3IoKXtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9ydGdhZ2UtYW1vdW50XCIpLnZhbHVlPVwiXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImludGVyZXN0LXJhdGVcIikudmFsdWU9XCJcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9ydGdhZ2UtcGVyaW9kXCIpLnZhbHVlPVwiXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdE51bSh4KXtcclxuICAgIHJldHVybiBcIiQgXCIreC50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csXCIsXCIpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==