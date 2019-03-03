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
    console.log("show");
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


/*FORM SUBMISSION */
const myForm = document.getElementById("myForm");
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    const xhr  = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            console.log("Done");
            if (xhr.status == 200) {
                console.log("200");
                console.log(xhr.responseText);
            }
        }
    }
    xhr.open("post", "https://p10.secure.webhosting.luminate.com/forms?ssc=us1&login=elisabethb_cpatrust",true);
    xhr.setRequestHeader('Content-Type', 'multipart/form-data');
    xhr.send(new FormData(myForm));
});





/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tLmNzcz85Mzc1Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsMkJBQTJCLG1CQUFPLENBQUMscUdBQWdEO0FBQ25GO0FBQ0EsY0FBYyxRQUFTLGlCQUFpQiwyQkFBMkIsZ0NB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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkZBLGNBQWMsbUJBQU8sQ0FBQyxvSEFBdUQ7O0FBRTdFLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxtR0FBZ0Q7O0FBRXJFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ25CZjtBQUFBO0FBQUE7QUFBc0I7QUFDdEIsOEJBQThCOztBQUU5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpREFBaUQ7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0MsRUFBRTtBQUNqRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuXFxyXFxuOnJvb3R7XFxyXFxuICAgIC0tbWFpbi1jb2xvcjogdGVhbDtcXHJcXG4gICAgLS1oZWFkZXItY29sb3I6ICM3MTcxNzE7XFxyXFxuICAgIC0tdGV4dC1jb2xvcjogIzQwNDA0MTtcXHJcXG59XFxyXFxuYm9keXtcXHJcXG4gICAgcGFkZGluZzowO21hcmdpbjogMDtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbmgyLGgze1xcclxcbiAgICBjb2xvcjp2YXIoLS1oZWFkZXItY29sb3IpO1xcclxcbn1cXHJcXG5he1xcclxcbiAgICBjb2xvcjp2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG59XFxyXFxuLmNvbnRhaW5lcntcXHJcXG4gICAgcGFkZGluZzogMWVtO1xcclxcbn1cXHJcXG4ucm93LFxcclxcbi5jb2x1bW57XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbi5yb3d7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG59XFxyXFxuLnJvdzpiZWZvcmUsIFxcclxcbi5yb3c6YWZ0ZXJ7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBkaXNwbGF5OiB0YWJsZTtcXHJcXG59XFxyXFxuLnJvdzphZnRlcntcXHJcXG4gICAgY2xlYXI6IGJvdGg7XFxyXFxufVxcclxcbltjbGFzcyo9Y29sdW1uXXtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBmbG9hdDpsZWZ0O1xcclxcbn1cXHJcXG5bY2xhc3MqPWNvbHVtbl0gKyBbY2xhc3MqPWNvbHVtbl17XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxLjYlO1xcclxcbn1cXHJcXG4uY29sdW1uLTF7XFxyXFxuICAgIHdpZHRoOiA2Ljg2NjY2NjY2NyU7XFxyXFxufVxcclxcbi5jb2x1bW4tMntcXHJcXG4gICAgd2lkdGg6IDE1LjMzMzMzMzMzMzMlO1xcclxcbn1cXHJcXG4uY29sdW1uLTN7XFxyXFxuICAgIHdpZHRoOiAyMy44JTtcXHJcXG59XFxyXFxuLmNvbHVtbi00e1xcclxcbiAgICB3aWR0aDogMzIuMjY2NjY2NjY2NyU7XFxyXFxufVxcclxcbi5jb2x1bW4tNXsgXFxyXFxuICAgIHdpZHRoOiA0MC43MzMzMzMzMzMzJTtcXHJcXG59XFxyXFxuLmNvbHVtbi02e1xcclxcbiAgICB3aWR0aDogNDkuMiU7XFxyXFxufVxcclxcbi5jb2x1bW4tN3tcXHJcXG4gICAgd2lkdGg6IDU3LjY2NjY2NjY2NjclO1xcclxcbn1cXHJcXG4uY29sdW1uLTh7XFxyXFxuICAgIHdpZHRoOiA2Ni4xMzMzMzMzMzMzJTtcXHJcXG59XFxyXFxuLmNvbHVtbi05e1xcclxcbiAgICB3aWR0aDogNzQuNiU7XFxyXFxufVxcclxcbi5jb2x1bW4tMTB7XFxyXFxuICAgIHdpZHRoOiA4My4wNjY2NjY2NyU7XFxyXFxufVxcclxcbi5jb2x1bW4tMTF7XFxyXFxuICAgIHdpZHRoOiA5MS41MzMzMzMzMzMzJTtcXHJcXG59XFxyXFxuLmNvbHVtbi0xMntcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG59XFxyXFxuLypvZmZzZXQqL1xcclxcbi5jb2x1bW4tb2Zmc2V0LTF7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA4LjQ2NjY2NjY2NyU7XFxyXFxufVxcclxcbi5jb2x1bW4tb2Zmc2V0LTJ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNi45MzMzMzMzMyU7XFxyXFxufVxcclxcbi5jb2x1bW4tb2Zmc2V0LTN7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyNS40JTtcXHJcXG59XFxyXFxuLmNvbHVtbi1vZmZzZXQtNHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDMzLjg2NjY2NjY2NyU7XFxyXFxufVxcclxcbi5jb2x1bW4tb2Zmc2V0LTV7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA0Mi4zMzMzMzMzMzMlO1xcclxcbn1cXHJcXG4uY29sdW1uLW9mZnNldC02e1xcclxcbiAgICBtYXJnaW4tbGVmdDogNTAuOCU7XFxyXFxufVxcclxcbi5jb2x1bW4tb2Zmc2V0LTd7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1OS4yNjY2NjY2NjclO1xcclxcbn1cXHJcXG4uY29sdW1uLW9mZnNldC04e1xcclxcbiAgICBtYXJnaW4tbGVmdDogNjcuNzMzMzMzMzMzJTtcXHJcXG59XFxyXFxuLmNvbHVtbi1vZmZzZXQtOXtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDc2LjIlO1xcclxcbn1cXHJcXG4uY29sdW1uLW9mZnNldC0xMHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDg0LjY2NjY2NjY2NyU7XFxyXFxufVxcclxcbi5jb2x1bW4tb2Zmc2V0LTExe1xcclxcbiAgICBtYXJnaW4tbGVmdDogOTMuMTMzMzMzMzMzJTtcXHJcXG59LyplbmQgb2YgbXktZ3JpZCovXFxyXFxucHtcXHJcXG5cXHRtYXJnaW46MDtcXHJcXG5cXHRwYWRkaW5nOjA7XFxyXFxufVxcclxcbmF7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5uYXZ7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgaGVpZ2h0OjNlbTtcXHJcXG5cXHRwYWRkaW5nOjA7XFxyXFxuXFx0d2lkdGg6MTAwJTtcXHJcXG5cXHR6LWluZGV4OjI7XFxyXFxuICAgIHBvc2l0aW9uOmZpeGVkO1xcclxcbn1cXHJcXG5uYXYgaW1ne1xcclxcbiAgICB3aWR0aDo1MHB4O3RvcDoxNSU7bGVmdDoyZW07cG9zaXRpb246YWJzb2x1dGU7XFxyXFxufVxcclxcbiNsb2dvLXdyYXBwZXJ7XFxyXFxuXFx0aGVpZ2h0OiA0MHB4O1xcclxcblxcdHdpZHRoOiAyNzVweDtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcdGZsb2F0OmxlZnQ7XFxyXFxufVxcclxcbiNsb2dvLWltYWdle1xcclxcblxcdGhlaWdodDogNTBweDtcXHJcXG5cXHR3aWR0aDogOTBweDtcXHJcXG5cXHRmbG9hdDogbGVmdDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vczMudXMtZWFzdC0yLmFtYXpvbmF3cy5jb20vd2pzLWFjY291bnRpbmctcHJvamVjdC9pbWFnZXMvanNsb2dveWVsbG93LmpwZWcnKTtcXHJcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcbiNsb2dvLXRleHR7XFxyXFxuXFx0aGVpZ2h0OiA1MHB4O1xcclxcblxcdHdpZHRoOiAxMzBweDtcXHJcXG5cXHRmbG9hdDogbGVmdDtcXHJcXG5cXHRmb250LXNpemU6IDEycHg7XFxyXFxuXFx0cGFkZGluZy1sZWZ0OiAxZW07XFxyXFxuXFx0cGFkZGluZy10b3A6IDVweDtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcdGJhY2tncm91bmQtc2l6ZTp3aGl0ZTtcXHJcXG59XFxyXFxubmF2OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcclxcbiAgICBjbGVhcjogYm90aDtcXHJcXG59XFxyXFxuI21lbnUtYnRue1xcclxcbiAgICB3aWR0aDoyZW07XFxyXFxuICAgIGhlaWdodDoyZW07XFxyXFxuICAgIHBhZGRpbmc6MWVtIDFlbSAwIDFlbTtcXHJcXG4gICAgZmxvYXQ6cmlnaHQ7XFxyXFxuICAgIGN1cnNvcjpwb2ludGVyO1xcclxcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG59XFxyXFxuI21lbnUtYnRuIGRpdiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxyXFxuXFx0aGVpZ2h0OiAycHg7XFxyXFxuXFx0d2lkdGg6IDI1cHg7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG4jbWVudS1idG4gZGl2OmZpcnN0LWNoaWxke1xcclxcblxcdG1hcmdpbi1ib3R0b206MC41ZW07XFxyXFxufVxcclxcbiNtZW51LWJ0biBkaXY6bGFzdC1jaGlsZHtcXHJcXG5cXHR0b3A6MS41ZW07XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgdG9wLXBhcmFsbGVse1xcclxcbiAgICAwJXtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwLjVlbSkgcm90YXRlKDEzNWRlZyk7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJXtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoMGRlZyk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLnRvcC1wYXJhbGxlbHtcXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHRvcC1wYXJhbGxlbDtcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBib3R0b20tcGFyYWxsZWx7XFxyXFxuICAgIDAle1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCV7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4uYm90dG9tLXBhcmFsbGVse1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogYm90dG9tLXBhcmFsbGVsO1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGxlYW4tcmlnaHR7XFxyXFxuICAgIDAle1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAle1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAuNWVtKSByb3RhdGUoMTM1ZGVnKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4ubGVhbi1yaWdodHtcXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGxlYW4tcmlnaHQ7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgbGVhbi1sZWZ0e1xcclxcbiAgICAwJXtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCV7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLmxlYW4tbGVmdHtcXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGxlYW4tbGVmdDtcXHJcXG59XFxyXFxuLmFuaW1hdGUtYnRue1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246MC41cztcXHJcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXHJcXG59XFxyXFxuI2Rlc2t0b3AtbWVudXtcXHJcXG5cXHRkaXNwbGF5Om5vbmU7XFxyXFxufVxcclxcbiNob21lLW1haW4tcGlje1xcclxcblxcdC8qIGhlaWdodDogMjB2aDsgKi9cXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRoZWlnaHQ6IDMwdnc7XFxyXFxufVxcclxcbi5vYmplY3QtZmlsbF9maWxse1xcclxcblxcdG9iamVjdC1maXQ6IGZpbGw7XFxyXFxufVxcclxcblxcclxcbi5jb3ZlcntcXHJcXG5cXHR3aWR0aDoyNjBweDtcXHJcXG5cXHRvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuI21haW4tdGV4dHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzogNWVtIDFlbTsvKnBhZGRpbmc6IDNlbSAzZW0qL1xcclxcblxcdG1heC13aWR0aDoyMGVtO1xcclxcblxcdG1hcmdpbjowIGF1dG87XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuN2VtO1xcclxcblxcdFxcclxcblxcdGNvbG9yOiAjNjY1ZDVkO1xcclxcblxcdGZvbnQtc2l6ZToxOHB4O1xcclxcbn1cXHJcXG4jc2VydmljZS1waWN7XFxyXFxuXFx0bWFyZ2luOiAwIGF1dG87XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0aGVpZ2h0OjkwcHg7XFxyXFxufVxcclxcbi5zZXJ2aWNlLWhlYWRlcntcXHJcXG5cXHRmb250LXNpemU6MjBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xcclxcbn1cXHJcXG4uc2VydmljZS1kZXNjcmlwdGlvbntcXHJcXG5cXHRmb250LXNpemU6MThweDtcXHJcXG59XFxyXFxuLnNlcnZpY2UtaGVhZGVyLCAuc2VydmljZS1kZXNjcmlwdGlvbntcXHJcXG5cXHRjb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbiNzZXJ2aWNlc3tcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRUNFQ0VDO1xcclxcblxcdHBhZGRpbmc6IDVlbSAyZW0gMGVtIDJlbTsvKjUgMiAwIDIqL1xcclxcbn1cXHJcXG4jcmVhZC1tb3JlLWJ0bntcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0cGFkZGluZzoxZW07XFxyXFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdHdpZHRoOiA2LjJlbTtcXHJcXG5cXHRtYXJnaW46IDVlbSBhdXRvIDVlbSBhdXRvO1xcclxcbn1cXHJcXG4jc2VydmljZXMgLmNvbHVtbi00e1xcclxcblxcdHBhZGRpbmctYm90dG9tOjRlbTtcXHJcXG59XFxyXFxuI2NvbnRhY3QtaW5mb3tcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzogNmVtIDFlbTtcXHJcXG59XFxyXFxuI2NvbnRhY3QtaW5mbyBwe1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjhlbTtcXHJcXG5cXHRmb250LXNpemU6IDE3cHg7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbn1cXHJcXG4jY29udGFjdC1pbmZvIGgze1xcclxcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuXFx0Lypjb2xvcjogcmdiKDExMywxMTMsMTEzKTsqL1xcclxcblxcdGZvbnQtc2l6ZToyNXB4O1xcclxcbn1cXHJcXG4jY29udGFjdC1pbmZvIGF7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG59XFxyXFxuLm1hcC1jb250YWN0LXdyYXBwZXJ7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI0VDRUNFQztcXHJcXG5cXHRtYXJnaW4tYm90dG9tOjA7XFxyXFxufVxcclxcbi5idG57XFxyXFxuXFx0cGFkZGluZzogMWVtO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHR3aWR0aDogMTBlbTtcXHJcXG5cXHRtYXJnaW46IDJlbSBhdXRvO1xcclxcblxcdC8qIGZvbnQtc2l6ZTogMTVweDsgKi9cXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuLmNvbW11bmljYXRpb24tcm93LXdyYXBwZXJ7XFxyXFxuXFx0bWFyZ2luLXRvcDogNWVtO21hcmdpbi1ib3R0b206IDVlbTsvKmZvbnQtc2l6ZToxNHB4O3NkZXNrdG9wOiBtYXJnaW4tdG9wLG1hcmdpbi1ib3R0b206IDNlbSovXFxyXFxufVxcclxcbi5jb21tdW5pY2F0aW9uLXJvdy13cmFwcGVyIHB7XFxyXFxuXFx0Zm9udC1zaXplOjE3cHg7XFxyXFxufVxcclxcbi5pbm5lci13cmFwcGVye1xcclxcblxcdHdpZHRoOjEwMCU7dGV4dC1hbGlnbjogY2VudGVyXFxyXFxufVxcclxcbi5pbm5lci13cmFwcGVyIGRpdntcXHJcXG5cXHRtYXgtd2lkdGg6MjllbTtcXHJcXG5cXHRkaXNwbGF5OmJsb2NrO1xcclxcblxcdG1hcmdpbjowIGF1dG87XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdHBhZGRpbmc6IDBlbSAzZW07LyoxZW0qL1xcclxcblxcdC8qcGFkZGluZzogM2VtIDNlbTsgZm9yIGRlc2t0b3AqL1xcclxcbn1cXHJcXG4uaW5uZXItd3JhcHBlci5maXJzdHtcXHJcXG5cXHQvKm1hcmdpbi10b3A6IDJlbTsqL1xcclxcblxcdHBhZGRpbmctYm90dG9tOiAxZW07LyowIGluIG5vbi1tb2JpbGUqL1xcclxcblxcdGJvcmRlci1yaWdodDowcHg7XFxyXFxufVxcclxcbi5pbm5lci13cmFwcGVyLmxhc3R7XFxyXFxuXFx0LyptYXJnaW4tYm90dG9tOiA1ZW07Ki9cXHJcXG5cXHRwYWRkaW5nLXRvcDogMWVtOy8qMCBpbiBub24tbW9iaWxlKi9cXHJcXG59XFxyXFxuLmlubmVyLXdyYXBwZXIgaDJ7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxyXFxuXFx0Zm9udC1zaXplOiAyNXB4Oy8qZGVza3RvcCBmb250LXNpemU6IDJlbSovXFxyXFxuXFx0XFxyXFxuXFx0Lypjb2xvcjogZ3JleTsqL1xcclxcbn1cXHJcXG4jaG9tZS1oZWFkZXJ7XFxyXFxuICAgIGNvbG9yOnZhcigtLWhlYWRlci1jb2xvcik7Zm9udC1zaXplOiAyMnB4O21hcmdpbi10b3A6Mi41ZW07bWFyZ2luLWJvdHRvbTowLjVlbTtmb250LXdlaWdodDo1MDA7XFxyXFxufVxcclxcbi5pbm5lci13cmFwcGVyIHB7XFxyXFxuXFx0LypsaW5lLWhlaWdodDozZW07Ki9cXHJcXG5cXHRsaW5lLWhlaWdodDogMmVtO1xcclxcbn1cXHJcXG4uaW5uZXItd3JhcHBlciBhe1xcclxcblxcdHBvaW50ZXItZXZlbnRzOiBhdXRvOy8qbm9uZSBmb3IgZGVza3RvcCovXFxyXFxufVxcclxcblxcclxcbnVse1xcclxcblxcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG5cXHRwYWRkaW5nOjA7XFxyXFxufVxcclxcbiNuYXZpZ2F0aW9ue1xcclxcblxcdHRleHQtYWxpZ246Y2VudGVyO1xcclxcblxcdGZvbnQtc2l6ZToxMnB4O1xcclxcbn1cXHJcXG51bCBhOmxpbmssIHVsIGE6dmlzaXRlZHtcXHJcXG5cXHRjb2xvcjp2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG59XFxyXFxuI25hdmlnYXRpb24gdWwgbGl7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbToyZW07XFxyXFxufVxcclxcbmZvb3RlcntcXHJcXG5cXHRwYWRkaW5nOiAxMGVtIDAgNGVtIDA7XFxyXFxuXFx0Y29sb3I6IzMzMzMzMztcXHJcXG59XFxyXFxuI2NvcHlyaWdodHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcclxcblxcdGZvbnQtc2l6ZToxMXB4O1xcclxcblxcdG1hcmdpbjowIGF1dG87XFxyXFxuXFx0d2lkdGg6MTVlbTtcXHJcXG59XFxyXFxuLmhlYWRlcntcXHJcXG5cXHRtYXJnaW4tYm90dG9tOjEuNWVtO2ZvbnQtc2l6ZToxOHB4Oy8qY29sb3I6Z3JleSovXFxyXFxufVxcclxcbiNmb290ZXItY29udGFjdCBwe1xcclxcblxcdG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG59XFxyXFxuI2Zvb3Rlci1jb250YWN0IHtcXHJcXG5cXHRmb250LXNpemU6MTNweDtcXHJcXG5cXHRtYXgtd2lkdGggOjE1ZW07XFx0XFxyXFxuXFx0bWFyZ2luOjAgYXV0bztcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbiNuYXZpZ2F0aW9uLCAjZm9vdGVyLWNvbnRhY3QsI2NvcHlyaWdodHtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOjVlbTtcXHJcXG59XFxyXFxuI21vYmlsZS1tZW51IHVse1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuI21vYmlsZS1tZW51IHVsIGxpe1xcclxcblxcdHBhZGRpbmc6MWVtIDA7XFxyXFxufVxcclxcblxcclxcbiNtb2JpbGUtbWVudSB1bCBsaXtcXHJcXG5cXHRib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZWNlY2VjO1xcclxcbn1cXHJcXG4jbW9iaWxlLW1lbnUgdWwgbGk6bGFzdC1jaGlsZHtcXHJcXG5cXHRib3JkZXI6bm9uZTtcXHJcXG59XFxyXFxuI21hcHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xcclxcbn1cXHJcXG4jcGF5cm9sbC1jb250ZW50e1xcclxcblxcdHBhZGRpbmctbGVmdDoxZW07XFxyXFxuXFx0cGFkZGluZy1yaWdodDoxZW07XFxyXFxuXFx0cGFkZGluZy1ib3R0b206NWVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAyZW07XFxyXFxufVxcclxcbiNwYXlyb2xsLWNvbnRlbnQgcCwgLnN1Yi1kZXNjcmlwdGlvbntcXHJcXG5cXHQvKmNvbG9yOiAjMzMzMzMzOyovXFxyXFxuXFx0Zm9udC13ZWlnaHQ6bGlnaHRlcjt0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG59XFxyXFxuI3BheXJvbGwtY29udGVudCB1bHtcXHJcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcXHJcXG5cXHRwYWRkaW5nLWxlZnQ6M2VtO1xcclxcblxcdHBhZGRpbmctcmlnaHQ6MWVtO1xcclxcblxcdC8qY29sb3I6IzMzMzMzMzsqL1xcclxcbn1cXHJcXG4jZm9ybXMgdWx7XFxyXFxuXFx0bGlzdC1zdHlsZS10eXBlOiBjaXJjbGU7XFxyXFxuXFx0cGFkZGluZy1sZWZ0OiAyZW07XFxyXFxuXFx0Zm9udC1zaXplOjE1cHg7XFxyXFxufVxcclxcbiNmb3Jtc3tcXHJcXG5cXHRsaW5lLWhlaWdodDogMmVtO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICAgIHBhZGRpbmc6NWVtIDAgNWVtIDFlbTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOndoaXRlc21va2U7XFxyXFxufVxcclxcbi5wYWdlLWluZm8tYm94e1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6dmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuXFx0d2lkdGg6MTAwJTtcXHJcXG5cXHRoZWlnaHQ6ODV2aDsvKmNoYW5nZSB0byBwZXJtYW5lbnQgaGVpZ2h0IGluIGRlc2t0b3AqL1xcclxcblxcdGRpc3BsYXk6dGFibGU7XFxyXFxufVxcclxcbi5wYWdlLWluZm8tYm94IHB7XFxyXFxuXFx0Y29sb3I6d2hpdGU7XFxyXFxuXFx0Zm9udC1zaXplOjEuNWVtO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRkaXNwbGF5OnRhYmxlLWNlbGw7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuLmNvbnRlbnQtYm94e1xcclxcblxcdHBhZGRpbmc6M2VtIDJlbTtcXHJcXG5cXHR6LWluZGV4OjA7LyotMiovXFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuOGVtO1xcclxcblxcdC8qY29sb3I6IzMzMzsqL1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxyXFxufVxcclxcbi5jb250ZW50LWJveCBoMywgLmNvbnRlbnQtYm94IGg0e1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmNvbnRlbnQtYm94LmNvbnRhY3R7XFxyXFxuICAgIHBhZGRpbmctdG9wOjUuNWVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTozZW07XFxyXFxufVxcclxcbi5jb250ZW50LWJveC5hYm91dHtcXHJcXG4gICAgLypwYWRkaW5nOjFlbSAxLjVlbSA4ZW0gMS41ZW07Ki9cXHJcXG4gICAgcGFkZGluZzozZW0gMmVtIDEwZW0gMmVtO1xcclxcbn1cXHJcXG4jbW9iaWxlLW1lbnV7XFxyXFxuICAgIHdpZHRoOiAwO1xcclxcbiAgICBoZWlnaHQ6OTB2aDtcXHJcXG5cXHRmb250LXdlaWdodDpib2xkO1xcclxcblxcdGZvbnQtc2l6ZToyMXB4O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxyXFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICByaWdodDowO1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxyXFxuICAgIHBhZGRpbmctdG9wOjYwcHg7XFxyXFxuICAgIGRpc3BsYXk6YmxvY2s7IFxcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IHJnYmEoMCwwLDAsMC4xKSAtMnB4IDAgMnB4O1xcclxcbiAgICAtbW96LWJveC1zaGFkb3c6IHJnYmEoMCwwLDAsMC4xKSAtMnB4IDAgMnB4O1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsMCwwLDAuMSkgLTJweCAwIDJweDtcXHJcXG59XFxyXFxuLnNlcnZpY2UtYm94LXdyYXBwZXJ7XFxyXFxuICAgIHBhZGRpbmc6MCAwZW07XFxyXFxufVxcclxcbi5zZXJ2aWNlLWJveC13cmFwcGVyIGRpdntcXHJcXG5cXHR3aWR0aDoxMDAlO3RleHQtYWxpZ246Y2VudGVyO2Rpc3BsYXk6dGFibGU7aGVpZ2h0OjZlbTtcXHJcXG59XFxyXFxuLnNlcnZpY2UtYm94LXdyYXBwZXIgaDN7XFxyXFxuXFx0ZGlzcGxheTp0YWJsZS1jZWxsO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtcXHJcXG59XFxyXFxuI2FjY291bnRpbmctc2VydmljZXMgdWx7XFxyXFxuXFx0bGlzdC1zdHlsZS10eXBlOiBjaXJjbGU7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDNlbTtcXHJcXG5cXHRmb250LXNpemU6MTRweDtcXHJcXG59XFxyXFxuI2FjY291bnRpbmctc2VydmljZXN7XFxyXFxuXFx0cGFkZGluZzozZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6MS41ZW07XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXHJcXG5cXHRmb250LXNpemU6MTVweDtcXHJcXG59XFxyXFxuLmNvbnRlbnQtYm94LnNlcnZpY2Vze1xcclxcblxcdG1hcmdpbi10b3A6MDsvKmJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQqL3BhZGRpbmc6MCAwIDVlbSAwO1xcclxcbn1cXHJcXG4ucm93LnNlcnZpY2Vze1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG4vKnNlcnZpY2VzIHBhZ2UqL1xcclxcbi5jb250ZW50LWJveC5tYWluLWltZ3tcXHJcXG5cXHRwYWRkaW5nOjA7cG9zaXRpb246cmVsYXRpdmU7XFxyXFxuXFx0bWFyZ2luOjAvKjEwJSovO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcbi5vdmVybGF5e1xcclxcblxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sdHJhbnNwYXJlbnQgMCxyZ2JhKDAsMCwwLDAuNjUpIDEwMCUpO1xcclxcblxcdHBvc2l0aW9uOmFic29sdXRlO1xcclxcbn1cXHJcXG4uY29udGVudC1ib3gubWFpbi1pbWcgaW1nLCAub3ZlcmxheXtcXHJcXG5cXHR3aWR0aDoxMDAlO2hlaWdodDoyMDdweDtcXHJcXG59XFxyXFxuLmNvbnRlbnQtYm94Lm1haW4taW1nIHB7XFxyXFxuXFx0cG9zaXRpb246YWJzb2x1dGU7cGFkZGluZzowIDUlO3RleHQtYWxpZ246IGNlbnRlcjtjb2xvcjp3aGl0ZTt0b3A6MjUlO1xcclxcbn1cXHJcXG4uY29udGFjdC1pbmZve1xcclxcblxcdC8qY29sb3I6IzMzMzMzMzsqL1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRsaW5lLWhlaWdodDoyLjNlbTtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOjVlbTtcXHJcXG59XFxyXFxuLmNvbnRhY3QtaW5mbyBoNHtcXHJcXG5cXHRtYXJnaW46MDtcXHJcXG5cXHRmb250LXNpemU6MS4yZW07XFxyXFxufVxcclxcbi5jb250YWN0LWluZm8gaW1ne1xcclxcblxcdHdpZHRoOiAzMHB4O1xcclxcbn1cXHJcXG4uY29udGFjdC1pbmZvIGF7XFxyXFxuXFx0Y29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbn1cXHJcXG4uY29udGFjdC1pbmZvIGE6aG92ZXJ7XFxyXFxuXFx0Y29sb3I6dmFyKC0tbWFpbi1jb2xvcik7XFxyXFxufVxcclxcbi5yb3cuY29udGFjdHtcXHJcXG5cXHRtYXJnaW4tdG9wOjQuNWVtO1xcclxcbn1cXHJcXG4ubG9nby1zdHlsZXtcXHJcXG5cXHR0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG5cXHRwYWRkaW5nOjFlbSAwO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IzcyNzE2YjtcXHJcXG5cXHRjb2xvcjp3aGl0ZTtcXHJcXG59XFxyXFxuLmltYWdle1xcclxcblxcdHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcblxcdHotaW5kZXg6IC0zO1xcclxcbn1cXHJcXG4ucGFnZS1pbmZvLXRhZ3tcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0Ym90dG9tOiAyNSU7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGNvbG9yOndoaXRlO1xcclxcblxcdHotaW5kZXg6MTtcXHJcXG59XFxyXFxuLnBhZ2UtaW5mby10YWcgc3BhbntcXHJcXG5cXHRmb250LXNpemU6MmVtO1xcclxcblxcdGZvbnQtd2VpZ2h0OjUwMDtcXHJcXG59XFxyXFxuI2NvbnRhY3QtcGFnZS1pbmZve1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtwYWRkaW5nLXRvcDo0ZW07cGFkZGluZy1ib3R0b206M2VtO1xcclxcbn1cXHJcXG4jY29udGFjdC1wYWdlLWluZm8gaDN7XFxyXFxuICAgIC8qY29sb3I6IzcxNzE3MSovO2ZvbnQtc2l6ZToyMHB4O2ZvbnQtd2VpZ2h0OjUwMDt0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjJlbSAxZW0gMGVtIDFlbTttYXJnaW4tdG9wOjA7XFxyXFxufVxcclxcbiNtZW51LWJ0bi13cmFwcGVyey8qcHJldmVudHMgY2hhbmdlIGluIHNpemUgd2hlbiBvcGVuaW5nICYgY2xvc2luZyBtZW51Ki9cXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgaGVpZ2h0OjNlbTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuI21lbnUtYnRuLXdyYXBwZXI6YWZ0ZXJ7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBkaXNwbGF5OnRhYmxlO1xcclxcbiAgICBjbGVhcjpib3RoO1xcclxcbn1cXHJcXG4ubG9nby1zdHlsZSAjaGVhZGVye1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxufVxcclxcbi5sb2dvLXN0eWxlICNzdWJoZWFkZXJ7XFxyXFxuICAgIGZvbnQtc2l6ZToxNXB4O1xcclxcbn1cXHJcXG4ubG9nby1zdHlsZSAjc3ViaGVhZGVyLXR3b3tcXHJcXG4gICAgZm9udC1zaXplOjEwcHg7XFxyXFxufVxcclxcbiNob21lLW1haW4taW1hZ2V7XFxyXFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbiAgICBoZWlnaHQ6MzYwcHg7XFxyXFxuICAgYmFja2dyb3VuZDogdXJsKFxcXCJodHRwOi8vanNjcGFncm93dGguY29tL2Fzc2V0cy9ob21lcGFnZS1tYWluLWltYWdlLmpwZWdcXFwiKSBuby1yZXBlYXQgY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG4jaG9tZS1tYWluLWltYWdlIC5vdmVybGF5e1xcclxcbiAgICBtYXJnaW46MDtoZWlnaHQ6MzYwcHg7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQscmdiYSgwLDAsMCwwLjQpKVxcclxcbn1cXHJcXG4jaG9tZS1tYWluLWltYWdlIGgxe1xcclxcbiAgICBtYXJnaW46MDt0ZXh0LWFsaWduOmNlbnRlcjtjb2xvcjp3aGl0ZTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDNlbTtmb250LXNpemU6MS41ZW07XFxyXFxuICAgIGFuaW1hdGlvbi1kZWxheTogMC43cztcXHJcXG59XFxyXFxuI2hvbWUtbWFpbi1pbWFnZSBoM3tcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO2NvbG9yOndoaXRlO1xcclxcbiAgICBmb250LXNpemU6MTJweDtwYWRkaW5nOjAgNSU7bGluZS1oZWlnaHQ6MjBweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcclxcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuN3M7XFxyXFxufVxcclxcbiNob21lLW1haW4taW1hZ2UgZGl2e1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6MjAlO1xcclxcbiAgICBhbmltYXRpb24tZGVsYXk6IDEuMXM7XFxyXFxufVxcclxcbiNob21lLW1haW4taW1hZ2UgZGl2IHNwYW57XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcXHJcXG4gICAgbWFyZ2luOjElO1xcclxcbiAgICBib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMSwyLDMsMC41KTtcXHJcXG4gICAgcGFkZGluZzoxZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcclxcbn1cXHJcXG4jaG9tZS1tYWluLWltYWdlIGRpdiBzcGFuOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMSwyLDMsMC43KTtcXHJcXG59XFxyXFxuc3BhbiNjb250YWN0LWJ0bntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp0ZWFsICFpbXBvcnRhbnQ7XFxyXFxuICAgIC8qYm9yZGVyOjFweCBzb2xpZCB0ZWFsICFpbXBvcnRhbnQ7Ki9cXHJcXG59XFxyXFxuc3BhbiNjb250YWN0LWJ0bjpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDA1OTU5ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbiNob21lLW1haW4taW1hZ2UgZGl2IHNwYW4gYXtcXHJcXG4gICAgY29sb3I6d2hpdGU7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgZmFkZURvd257XFxyXFxuICAgIDAle1xcclxcbiAgICAgICAgb3BhY2l0eTowO1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xcclxcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XFxyXFxuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCV7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXHJcXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXHJcXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGZhZGVVcHtcXHJcXG4gICAgMCV7XFxyXFxuICAgICAgICBvcGFjaXR5OjA7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXHJcXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XFxyXFxuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAle1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxyXFxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxyXFxuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLmZhZGVVcHtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYWRlVXA7XFxyXFxuICAgIC1tb3otYW5pbWF0aW9uLW5hbWU6ZmFkZVVwO1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZVVwO1xcclxcbn1cXHJcXG4uZmFkZURvd257XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ZmFkZURvd247XFxyXFxuICAgIC1tb3otYW5pbWF0aW9uLW5hbWU6ZmFkZURvd247XFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOmZhZGVEb3duO1xcclxcbn1cXHJcXG4uYW5pbWF0ZXtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEuNXM7XFxyXFxuICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO1xcclxcbiAgICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDtcXHJcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO1xcclxcbn1cXHJcXG4uaGVhZGVyLWltZ3tcXHJcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICAgIGhlaWdodDoyMDdweDtcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG59XFxyXFxuLmRlc2NyaXB0aW9ue1xcclxcbiAgICBmb250LXNpemU6MTZweDt0ZXh0LWFsaWduOmNlbnRlcjtsaW5lLWhlaWdodDoxLjhlbTtjb2xvcjojNzE3MTcxO1xcclxcbiAgICBtaW4td2lkdGg6NTBweDttYXgtd2lkdGg6NzAwcHg7bWFyZ2luOjAgYXV0bztwYWRkaW5nOjAuNWVtIDAuOGVtIDZlbSAwLjhlbTtcXHJcXG59XFxyXFxuLmNvbnRlbnQtYm94LW5vLXBhZGRpbmd7XFxyXFxuXFx0YmFja2dyb3VuZDp3aGl0ZTtcXHJcXG5cXHRwYWRkaW5nLXRvcDo1LjVlbTtwYWRkaW5nLWJvdHRvbTozZW07XFxyXFxuXFx0cGFkZGluZy1sZWZ0OjFlbTtwYWRkaW5nLXJpZ2h0OjFlbTtcXHJcXG59XFxyXFxuI2Zvcm17XFxyXFxuXFxyXFxufVxcclxcbmZvcm17XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6I2VkZWNlYTttYXJnaW46MCBhdXRvO3dpZHRoOjEwMCU7Lypjb2xvcjojNzE3MTcxKi87Ym94LXNpemluZzpib3JkZXItYm94O1xcclxcbiAgICBwYWRkaW5nOjNlbSAxZW0gNWVtIDFlbTtcXHJcXG59XFxyXFxuZm9ybSBoM3tcXHJcXG4gICAgcGFkZGluZzowO21hcmdpbjowIDAgMi41ZW0gMDtcXHJcXG59XFxyXFxuLmZvcm0taW5wdXR7XFxyXFxuICB3aWR0aDoxMDAlO2hlaWdodDozZW07cGFkZGluZy1sZWZ0OjJlbTtib3JkZXI6MXB4IHNvbGlkIHdoaXRlO2JvcmRlci1yYWRpdXM6NXB4O1xcclxcbiAgbWFyZ2luOjFlbSAwIDIuNWVtIDA7Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuLmZvcm0tdGV4dC1pbnB1dHtcXHJcXG4gIGJvcmRlcjoxcHggc29saWQgd2hpdGU7Ym9yZGVyLXJhZGl1czo1cHg7cGFkZGluZzoxZW0gMmVtO1xcclxcbiAgd2lkdGg6MTAwJTtoZWlnaHQ6MjAwcHg7Ym94LXNpemluZzpib3JkZXItYm94O21hcmdpbjoxZW0gMCAyLjVlbSAwO1xcclxcbn1cXHJcXG4uZm9ybS1idG57XFxyXFxuICBwYWRkaW5nOjFlbSAyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOjVweDtcXHJcXG59XFxyXFxuLnNlbmR7XFxyXFxuICBjb2xvcjp3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6dmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICBib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG4uc2VuZDpob3ZlcntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IzAwNDQ3MyA7XFxyXFxuICBjdXJzb3I6cG9pbnRlcjtcXHJcXG59XFxyXFxuLnJlc2V0e1xcclxcbiAgIGJvcmRlcjoxcHggc29saWQgd2hpdGU7Ym9yZGVyLXJhZGl1czo1cHg7cGFkZGluZzoxZW0gMmVtOyBcXHJcXG59XFxyXFxuLnJlc2V0OmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjojNzI3MTZiO1xcclxcbiAgY29sb3I6d2hpdGU7XFxyXFxuICBjdXJzb3I6cG9pbnRlcjtcXHJcXG59XFxyXFxuLnBheXJvbGwtaWNvbnN7XFxyXFxuICAgIHBhZGRpbmctdG9wOjIuNWVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTozZW07XFxyXFxufVxcclxcbi5wYXlyb2xsLWljb25zIGltZ3tcXHJcXG4gICAgd2lkdGg6ODBweDtcXHJcXG59XFxyXFxuLnBheXJvbGwtaWNvbnMgZGl2e1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5wYXlyb2xsLWljb25zIHB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OmJvbGQgIWltcG9ydGFudDtwYWRkaW5nLXRvcDoyZW07bGluZS1oZWlnaHQ6IDEuNWVtO1xcclxcbn1cXHJcXG4jbWlkZGxle1xcclxcbiAgICBwYWRkaW5nOjQuNWVtIDA7XFxyXFxufVxcclxcbi5mb3JtcyBpbWd7XFxyXFxuICAgIHdpZHRoOjEwMHB4O2hlaWdodDogMTAwcHg7XFxyXFxufVxcclxcbi5mb3JtcyBwe1xcclxcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcclxcbiAgICBmb250LXNpemU6MTRweDtcXHJcXG4gICAgcGFkZGluZzoxZW07XFxyXFxuICAgIC8qY29sb3I6IzcxNzE3MTsqL1xcclxcbn1cXHJcXG4uZm9ybXMgYXtcXHJcXG4gICAgLypjb2xvcjojNzE3MTcxOyovXFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOjAuNWVtO1xcclxcbn1cXHJcXG4uZm9ybXMgYTpob3ZlcntcXHJcXG4gICAgY29sb3I6dGVhbDtcXHJcXG59XFxyXFxuLmZvcm1ze1xcclxcbiAgICAvKnBhZGRpbmctdG9wOjNlbTsqL1xcclxcbiAgICB6LWluZGV4OjE7XFxyXFxufVxcclxcbiNmb3JtLWJvdHRvbS1yb3d7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVlbTtcXHJcXG59XFxyXFxuLmNhbGN1bGF0b3J7XFxyXFxuICAgIG1heC13aWR0aDo0MDBweDtiYWNrZ3JvdW5kLWNvbG9yOnRlYWw7cGFkZGluZzoyZW07Ym9yZGVyOjFweCBzb2xpZCB0ZWFsO2JvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIG1hcmdpbjowIGF1dG87bWFyZ2luLWJvdHRvbTo4ZW07XFxyXFxufVxcclxcbi5jYWxjdWxhdG9yIHB7XFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbn1cXHJcXG4uY2FsY3VsYXRvciBpbnB1dHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp0ZWFsO2JvcmRlcjowO2JvcmRlci1ib3R0b206MnB4IHNvbGlkIHdoaXRlO2NvbG9yOndoaXRlO3BhZGRpbmc6MC41ZW07XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxufVxcclxcbi5lcnJvcntcXHJcXG4gICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgcmVkICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi5jYWxjdWxhdG9yIGlucHV0OjpwbGFjZWhvbGRlcntcXHJcXG4gICAgY29sb3I6I2VlZWVlZTtcXHJcXG59XFxyXFxuLmNhbGN1bGF0b3IgaW5wdXQ6Zm9jdXMsIC5jYWxjdWxhdG9yIGJ1dHRvbjpmb2N1c3tcXHJcXG4gICAgb3V0bGluZTpub25lO1xcclxcbn1cXHJcXG4uY2FsY3VsYXRvciBidXR0b257XFxyXFxuICAgIGNvbG9yOndoaXRlO21hcmdpbi10b3A6MmVtO2JhY2tncm91bmQtY29sb3I6Z3JleTtjdXJzb3I6cG9pbnRlcjtwYWRkaW5nOjAuNWVtIDFlbTtcXHJcXG59XFxyXFxuLmNhbGN1bGF0b3IgYnV0dG9uOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM3NTc1NzU7XFxyXFxufVxcclxcbi5jYWxjdWxhdG9yIGJ1dHRvbiNyZXNldHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtjb2xvcjpncmV5O1xcclxcbn1cXHJcXG4uY2FsY3VsYXRvciBidXR0b24jcmVzZXQ6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6I2UwZTBlMDtcXHJcXG59XFxyXFxuLnN1YmhlYWRlcntcXHJcXG4gICAgLypjb2xvcjojNzE3MTcxKi87bGV0dGVyLXNwYWNpbmc6IDJweDt0ZXh0LWFsaWduOiBjZW50ZXI7bWFyZ2luLWJvdHRvbTogMmVtO1xcclxcbiAgICBmb250LXdlaWdodDo1MDA7Zm9udC1zaXplOjEuNWVtO1xcclxcbn1cXHJcXG5hcnRpY2xle1xcclxcbiAgICBtYXJnaW4tYm90dG9tOjRlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpey8qNTUwcHgqL1xcclxcbiAgICAuY29sdW1uLTEsXFxyXFxuICAgIC5jb2x1bW4tMixcXHJcXG4gICAgLmNvbHVtbi0zLFxcclxcbiAgICAuY29sdW1uLTQsXFxyXFxuICAgIC5jb2x1bW4tNSxcXHJcXG4gICAgLmNvbHVtbi02LFxcclxcbiAgICAuY29sdW1uLTcsXFxyXFxuICAgIC5jb2x1bW4tOCxcXHJcXG4gICAgLmNvbHVtbi05LFxcclxcbiAgICAuY29sdW1uLTEwLFxcclxcbiAgICAuY29sdW1uLTExLFxcclxcbiAgICAuY29sdW1uLTEyIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgW2NsYXNzKj1jb2x1bW5de1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgICB9XFxyXFxuICAgIFtjbGFzcyo9Y29sdW1uXSArIFtjbGFzcyo9Y29sdW1uXXtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjUwMHB4KXtcXHJcXG4gICAgI2hvbWUtbWFpbi1pbWFnZXtcXHJcXG4gICAgICAgIGhlaWdodDo0NTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAjaG9tZS1tYWluLWltYWdlIC5vdmVybGF5e1xcclxcbiAgICAgICAgaGVpZ2h0OjQ1MHB4O1xcclxcbiAgICB9XFxyXFxuICAgICNob21lLW1haW4taW1hZ2UgaDF7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogMjAlO2ZvbnQtc2l6ZToyLjJlbTttYXJnaW4tbGVmdDoxMCU7bWFyZ2luOjAgMTAlO1xcclxcbiAgICB9XFxyXFxuICAgICNob21lLW1haW4taW1hZ2UgaDN7XFxyXFxuICAgICAgICAvKmZvbnQtd2VpZ2h0OmxpZ2h0ZXI7XFxyXFxuICAgICAgICBmb250LXNpemU6MTdweDsqL1xcclxcbiAgICAgICAgZm9udC1zaXplOjE1cHg7cGFkZGluZzowO2xpbmUtaGVpZ2h0OjI0cHg7bGV0dGVyLXNwYWNpbmc6IDAuOXB4O3RleHQtc2hhZG93OjJweCAwIGJsYWNrO1xcclxcbiAgICB9XFxyXFxuICAgICNob21lLW1haW4taW1hZ2UgZGl2e1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDoxMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgI2hvbWUtbWFpbi1pbWFnZSBkaXYgc3BhbntcXHJcXG4gICAgICAgIGJvcmRlcjoycHggc29saWQgd2hpdGU7XFxyXFxuICAgIH1cXHJcXG4gICAgc3BhbiNjb250YWN0LWJ0bntcXHJcXG4gICAgICAgIC8qYm9yZGVyOjJweCBzb2xpZCB0ZWFsICFpbXBvcnRhbnQ7Ki9cXHJcXG4gICAgfVxcclxcbiAgICBuYXYgaW1ne1xcclxcbiAgICAgICAgd2lkdGg6ODBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuaGVhZGVyLWltZ3tcXHJcXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbiAgICAgICAgaGVpZ2h0OjMwMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5vdmVybGF5ey8qaHVoKi9cXHJcXG4gICAgICAgIGhlaWdodDozMDBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NjAwcHgpe1xcclxcbiAgICBmb3Jte1xcclxcbiAgICAgICAgcGFkZGluZzozZW0gNGVtIDVlbSA0ZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NTBweCl7XFxyXFxuICAgICNjb250YWN0LWluZm97XFxyXFxuICAgICAgICBwYWRkaW5nOiA0ZW0gMWVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5yb3cuc2VydmljZXN7XFxyXFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4OyBkaXNwbGF5OiAtd2Via2l0LWZsZXg7IGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgfVxcclxcbiAgICAuc2VydmljZS1ib3gtd3JhcHBlcntcXHJcXG4gICAgICAgIHBhZGRpbmc6MCAyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLmNvbW11bmljYXRpb24tcm93LXdyYXBwZXJ7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiA1ZW07bWFyZ2luLWJvdHRvbTogNWVtOy8qZGVza3RvcDogbWFyZ2luLXRvcCxtYXJnaW4tYm90dG9tOiAzZW0qL1xcclxcbiAgICB9XFxyXFxuICAgIC5pbm5lci13cmFwcGVyLmZpcnN0e1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XFxyXFxuICAgICAgICBib3JkZXItcmlnaHQ6MXB4IHNvbGlkIGdyZXk7XFxyXFxuICAgIH1cXHJcXG4gICAgLmlubmVyLXdyYXBwZXIubGFzdHtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xcclxcbiAgICB9XFxyXFxuICAgIC5pbm5lci13cmFwcGVyIGF7XFxyXFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsvKm1zZyBhbmQgY2FsbCBmb3IgZGVza3RvcCovXFxyXFxuICAgIH1cXHJcXG4gICAgLmlubmVyLXdyYXBwZXIuZmlyc3QgYXtcXHJcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcclxcbiAgICB9XFxyXFxuICAgIC5sb2dvLXN0eWxlICNoZWFkZXJ7XFxyXFxuICAgICAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmxvZ28tc3R5bGUgI3N1YmhlYWRlcntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZToxN3B4O1xcclxcbiAgICB9XFxyXFxuICAgIC5sb2dvLXN0eWxlICNzdWJoZWFkZXItdHdve1xcclxcbiAgICAgICAgZm9udC1zaXplOjEwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgICNtaWRkbGV7XFxyXFxuICAgICAgICBwYWRkaW5nOjA7XFxyXFxuICAgIH1cXHJcXG4gICAgLnBheXJvbGwtaWNvbnMgcHtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOjEuMmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3MDBweCl7XFxyXFxuICAgICNob21lLW1haW4taW1hZ2V7XFxyXFxuICAgICAgICBoZWlnaHQ6ODAwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgICNob21lLW1haW4taW1hZ2UgLm92ZXJsYXl7XFxyXFxuICAgICAgICBoZWlnaHQ6ODAwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgI2hvbWUtbWFpbi1pbWFnZSBoMXtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxOCU7Zm9udC1zaXplOjMuNWVtO21hcmdpbi1sZWZ0OjEwJTttYXJnaW46MCAxMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgI2hvbWUtbWFpbi1pbWFnZSBoM3tcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OmxpZ2h0ZXI7XFxyXFxuICAgICAgICBmb250LXNpemU6MThweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6NSUgOCUgMCA4JTtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OjMwcHg7bGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gICAgfVxcclxcbiAgICAjaG9tZS1tYWluLWltYWdlIGRpdntcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6MTAlO1xcclxcbiAgICB9XFxyXFxuICAgICNob21lLW1haW4taW1hZ2UgZGl2IHNwYW57XFxyXFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgICAgICBmb250LXdlaWdodDo1MDA7XFxyXFxuICAgIH1cXHJcXG4gICAgc3BhbiNjb250YWN0LWJ0bntcXHJcXG4gICAgICAgIC8qYm9yZGVyOjJweCBzb2xpZCB0ZWFsICFpbXBvcnRhbnQ7Ki9cXHJcXG4gICAgfVxcclxcbiAgICAuaGVhZGVyLWltZ3tcXHJcXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbiAgICAgICAgaGVpZ2h0OjQwMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5vdmVybGF5e1xcclxcbiAgICAgICAgaGVpZ2h0OjQwMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5kZXNjcmlwdGlvbntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZToyMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIGZvcm17XFxyXFxuICAgICAgICBtYXgtd2lkdGg6NzAwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLnBheXJvbGwtaWNvbnMgcHtcXHJcXG4gICAgICAgIHBhZGRpbmc6MCAxZW07XFxyXFxuICAgIH1cXHJcXG4gICAgI2hvbWUtaGVhZGVye1xcclxcbiAgICAgICAgZm9udC1zaXplOjI1cHg7XFxyXFxuICAgIH1cXHJcXG4gICBcXHJcXG59XFxyXFxuXFxyXFxuLypsYXJnZXIgc2NyZWVucyAoZS5nLiBkZXNrdG9wKSovXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpe1xcclxcbiAgICBcXHJcXG4gICAgI2hvbWUtbWFpbi1pbWFnZSBoMXtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOjE1JTtcXHJcXG4gICAgfVxcclxcbiAgICAjaG9tZS1tYWluLWltYWdlIGgze1xcclxcbiAgICAgICAgcGFkZGluZzoyJSA4JSAwIDglO1xcclxcbiAgICB9XFxyXFxuICAgICNob21lLW1haW4taW1hZ2UgZGl2e1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDo2JTtcXHJcXG4gICAgfVxcclxcbiAgICAjZm9vdGVyLWNvbnRhY3QgcHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZToxOHB4O1xcclxcbiAgICAgICAgY29sb3I6Z3JleTtcXHJcXG4gICAgfVxcclxcbiAgICAuaGVhZGVye1xcclxcbiAgICAgICAgZm9udC1zaXplOjI0cHggIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcbiAgICAjbmF2aWdhdGlvbntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZToxOHB4O1xcclxcbiAgICAgICAgY29sb3I6Z3JleTtcXHJcXG4gICAgfVxcclxcbiAgICAjbmF2aWdhdGlvbiBhOmhvdmVye1xcclxcbiAgICAgICAgY29sb3I6d2hpdGU7XFxyXFxuICAgIH1cXHJcXG4gICAgI2NvcHlyaWdodHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgfVxcclxcblxcdCNtZW51LWJ0bntcXHJcXG5cXHRcXHRkaXNwbGF5Om5vbmU7XFxyXFxuXFx0fVxcclxcblxcdCNkZXNrdG9wLW1lbnV7XFxyXFxuXFx0XFx0ZGlzcGxheTpibG9jaztcXHJcXG5cXHRcXHR0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG5cXHRcXHRtYXJnaW4tdG9wOjFlbTtcXHJcXG5cXHR9XFxyXFxuXFx0I2Rlc2t0b3AtbWVudSBhe1xcclxcblxcdFxcdG1hcmdpbjowIDIuNWVtO1xcclxcblxcdFxcdHBhZGRpbmctYm90dG9tOjAuNWVtO1xcclxcblxcdH1cXHJcXG5cXHQjZGVza3RvcC1tZW51IGE6bGluaywgI2Rlc2t0b3AtbWVudSBhOnZpc2l0ZWR7XFxyXFxuXFx0XFx0Zm9udC1zaXplOjEycHg7XFxyXFxuXFx0XFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdH1cXHJcXG5cXHQjZGVza3RvcC1tZW51IGE6aG92ZXJ7XFxyXFxuXFx0XFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLW1haW4tY29sb3IpO1xcclxcblxcdH1cXHJcXG5cXHQuc2VsZWN0ZWR7XFxyXFxuXFx0XFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLW1haW4tY29sb3IpO1xcclxcblxcdH1cXHJcXG4gICAgI2hvbWUtbWFpbi1pbWFnZSBkaXYgc3BhbntcXHJcXG4gICAgICAgIGJvcmRlcjoyLjVweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgfVxcclxcbiAgICBzcGFuI2NvbnRhY3QtYnRuIHtcXHJcXG4gICAgICAgIC8qYm9yZGVyOjIuNXB4IHNvbGlkIHRlYWwgIWltcG9ydGFudDsqL1xcclxcbiAgICB9XFxyXFxuICAgICNob21lLW1haW4taW1hZ2UgaDN7XFxyXFxuICAgICAgICBmb250LXdlaWdodDpsaWdodGVyO1xcclxcbiAgICAgICAgZm9udC1zaXplOjIwcHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDozNXB4O2xldHRlci1zcGFjaW5nOiAxcHg7dGV4dC1zaGFkb3c6MDtcXHJcXG4gICAgfVxcclxcblxcdC8qaW5uZXIgd3JhcHBlciBzdHVmZiovXFxyXFxuXFx0I2Zvb3Rlci1jb250YWN0IHtcXHJcXG5cXHRcXHR0ZXh0LWFsaWduOiBsZWZ0O1xcclxcblxcdH1cXHJcXG5cXHQjbmF2aWdhdGlvbiwgI2Zvb3Rlci1jb250YWN0LCNjb3B5cmlnaHR7XFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTowO1xcclxcblxcdH1cXHJcXG5cXHQjaG9tZS1tYWluLXBpY3tcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRoZWlnaHQ6IDMwdnc7XFxyXFxuXFx0fVxcclxcblxcdCNwYXlyb2xsLWNvbnRlbnR7XFxyXFxuXFx0XFx0cGFkZGluZy1ib3R0b206NS41ZW07XFxyXFxuXFx0fVxcclxcblxcdCNmb3JtcyB1bCwgI3BheXJvbGwtY29udGVudHtcXHJcXG5cXHRcXHRmb250LXNpemU6MWVtO1xcclxcblxcdH1cXHJcXG5cXHQucGFnZS1pbmZvLWJveHtcXHJcXG5cXHRcXHRoZWlnaHQ6IDIwZW07XFxyXFxuXFx0XFx0cG9zaXRpb246c3RhdGljO1xcclxcblxcdFxcdHotaW5kZXg6LTI7XFxyXFxuXFx0fVxcclxcblxcdC5wYWdlLWluZm8tYm94IHB7XFxyXFxuXFx0XFx0Zm9udC1zaXplOjIuNWVtO1xcclxcblxcdFxcdGRpc3BsYXk6YmxvY2s7XFxyXFxuXFx0XFx0bWFyZ2luLXRvcDoyZW07XFxyXFxuXFx0fVxcclxcbiAgICAucGFnZS1pbmZvLXRhZyBzcGFue1xcclxcbiAgICAgICAgZm9udC1zaXplOjIuNWVtO1xcclxcbiAgICB9XFxyXFxuXFx0LmNvbnRlbnQtYm94e1xcclxcblxcdFxcdGZvbnQtc2l6ZToyMHB4O1xcclxcblxcdFxcdHBhZGRpbmc6NWVtIDRlbSA1ZW0gNGVtO1xcclxcblxcdFxcdG1hcmdpbjowIGF1dG87XFxyXFxuXFx0XFx0cG9zaXRpb246cmVsYXRpdmU7XFxyXFxuXFx0XFx0bWluLXdpZHRoOjA7bWF4LXdpZHRoOiAxMDgwcHg7XFxyXFxuXFx0XFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHR9XFxyXFxuXFx0LmNvbnRlbnQtYm94IGgze1xcclxcblxcdFxcdGZvbnQtc2l6ZToxLjVlbTtcXHJcXG5cXHRcXHRmb250LXdlaWdodDpsaWdodGVyO1xcclxcblxcdH1cXHJcXG5cXHRmb290ZXJ7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjpibGFjaztcXHJcXG5cXHRcXHRwYWRkaW5nLXRvcDo3ZW07cGFkZGluZy1ib3R0b206OGVtO1xcclxcblxcdH1cXHJcXG5cXHRmb290ZXIgYXtcXHJcXG5cXHRcXHRjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuXFx0fVxcclxcblxcdCNjb3B5cmlnaHR7XFxyXFxuXFx0XFx0Y29sb3I6IGdyZXk7XFxyXFxuXFx0fVxcclxcblxcdC5jb250ZW50LWJveC5tYWluLWltZ3tcXHJcXG5cXHRcXHRtYXJnaW46LTMuN2VtIDNlbSAzZW0gM2VtO1xcclxcblxcdH1cXHJcXG5cXHRcXHJcXG5cXHQuY29udGVudC1ib3gubWFpbi1pbWcgaW1nLCAub3ZlcmxheXtcXHJcXG5cXHRcXHRoZWlnaHQ6ODB2aDtcXHJcXG5cXHR9XFxyXFxuXFx0LmNvbnRlbnQtYm94Lm1haW4taW1nIHB7XFxyXFxuXFx0XFx0cGFkZGluZzowIDIwJTt0b3A6NDAlO1xcclxcblxcdH1cXHJcXG5cXHRuYXZ7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcpO1xcclxcblxcdFxcdHBhZGRpbmc6MC41ZW0gMC41ZW0gMWVtIDAuNWVtO1xcclxcbiAgICAgICAgaGVpZ2h0OjRlbTtcXHJcXG5cXHR9XFxyXFxuXFx0LmltYWdle1xcclxcblxcdFxcdG1hcmdpbi10b3A6IC00LjFlbTtcXHJcXG5cXHR9XFxyXFxuXFx0LmxvZ28tc3R5bGV7XFxyXFxuXFx0XFx0dGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxuXFx0XFx0cGFkZGluZzoxZW0gMDtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiM3MjcxNmI7XFxyXFxuXFx0XFx0Y29sb3I6d2hpdGU7XFxyXFxuXFx0fVxcclxcblxcdCNtYWluLXRleHR7XFxyXFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdFxcdHBhZGRpbmc6IDVlbSA1ZW07XFxyXFxuXFx0XFx0bWF4LXdpZHRoOjcwMHB4O1xcclxcblxcdFxcdG1hcmdpbjowIGF1dG87XFxyXFxuXFx0XFx0bGluZS1oZWlnaHQ6IDEuN2VtO1xcclxcblxcdFxcdGNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcclxcblxcdFxcdGZvbnQtc2l6ZToyNHB4O1xcclxcblxcdH1cXHJcXG4gICAgLmNvbnRlbnQtYm94LmNvbnRhY3R7XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTo2ZW07XFxyXFxuICAgIH1cXHJcXG4gICAgI2NvbnRhY3QtcGFnZS1pbmZvIGgze1xcclxcbiAgICAgICAgZm9udC1zaXplOjI4cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgI21lbnUtYnRuLXdyYXBwZXJ7XFxyXFxuICAgICAgICBkaXNwbGF5Om5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgI21vYmlsZS1tZW51e1xcclxcbiAgICAgICAgZGlzcGxheTpub25lO1xcclxcbiAgICB9XFxyXFxuICAgIC5sb2dvLXN0eWxlICNoZWFkZXJ7XFxyXFxuICAgICAgICBmb250LXNpemU6IDUwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmxvZ28tc3R5bGUgI3N1YmhlYWRlcntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZToxOHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5sb2dvLXN0eWxlICNzdWJoZWFkZXItdHdve1xcclxcbiAgICAgICAgZm9udC1zaXplOjEycHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmhlYWRlci1pbWd7XFxyXFxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gICAgICAgIGhlaWdodDo1MTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAub3ZlcmxheXtcXHJcXG4gICAgICAgIGhlaWdodDo1MTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZGVzY3JpcHRpb257XFxyXFxuICAgICAgICBmb250LXNpemU6MjJweDtcXHJcXG4gICAgfVxcclxcbiAgICAuY29udGVudC1ib3gtbm8tcGFkZGluZ3tcXHJcXG4gICAgXFx0bWluLXdpZHRoOjA7bWF4LXdpZHRoOjEwODBweDtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7bWFyZ2luOjAgYXV0bztcXHJcXG4gICAgfVxcclxcbiAgICAuY29udGVudC1ib3guYWJvdXR7XFxyXFxuICAgICAgICBwYWRkaW5nOjVlbSA2ZW0gOGVtIDZlbTtcXHJcXG4gICAgfVxcclxcbiAgICAjYWNjb3VudGluZy1zZXJ2aWNlcyB1bHtcXHJcXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogY2lyY2xlO1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDNlbTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZToxOHB4O1xcclxcbiAgICB9XFxyXFxuICAgICNhY2NvdW50aW5nLXNlcnZpY2Vze1xcclxcbiAgICAgICAgcGFkZGluZzozZW07XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDoxLjVlbTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZToyMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5wYXlyb2xsLWljb25zIHB7XFxyXFxuICAgICAgICBwYWRkaW5nOjAgMi41ZW07XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDoxLjVlbTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZToxNXB4O1xcclxcbiAgICB9ICBcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyNTYwcHgpe1xcclxcbiAgICAjaG9tZS1tYWluLWltYWdlIGgxe1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDEwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjaG9tZS1tYWluLWltYWdlIGRpdntcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6NCU7XFxyXFxuICAgIH1cXHJcXG59XCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2N1c3RvbS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY3VzdG9tLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY3VzdG9tLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCAnLi9jdXN0b20uY3NzJztcclxuLyppbXBvcnQgXyBmcm9tICdmbGV4Ym94Z3JpZCc7Ki9cclxuXHJcbmxldCBpbml0aWFsTmF2Q29sb3I7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBmdW5jdGlvbigpe1xyXG4gICAgY29uc29sZS5sb2coXCJzaG93XCIpO1xyXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0aXRsZVwiKVswXS5pbm5lckhUTUw7XHJcbiAgICBsZXQgY3VycmVudFBhZ2U7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI0U4RThFM1wiO1xyXG4gICAgaWYodGl0bGUuaW5jbHVkZXMoXCJob21lXCIpKXtcclxuICAgICAgICBjdXJyZW50UGFnZSA9IFwibmF2LWhvbWVcIlxyXG4gICAgICAgIHNldFdoaXRlQmFja2dyb3VuZCgpO1xyXG4gICAgfWVsc2UgaWYodGl0bGUuaW5jbHVkZXMoXCJhYm91dFwiKSl7XHJcbiAgICAgICAgY3VycmVudFBhZ2UgPSBcIm5hdi1hYm91dFwiXHJcbiAgICB9ZWxzZSBpZih0aXRsZS5pbmNsdWRlcyhcImNvbnRhY3RcIikpe1xyXG4gICAgICAgIGN1cnJlbnRQYWdlID0gXCJuYXYtY29udGFjdFwiXHJcbiAgICB9ZWxzZSBpZih0aXRsZS5pbmNsdWRlcyhcInJlc291cmNlc1wiKSl7XHJcbiAgICAgICAgY3VycmVudFBhZ2UgPSBcIm5hdi1yZXNvdXJjZXNcIlxyXG4gICAgfWVsc2UgaWYodGl0bGUuaW5jbHVkZXMoXCJwYXlyb2xsXCIpKXtcclxuICAgICAgICBjdXJyZW50UGFnZSA9IFwibmF2LXBheXJvbGxcIjtcclxuICAgIH1lbHNlIGlmKHRpdGxlLmluY2x1ZGVzKFwic2VydmljZXNcIikpe1xyXG4gICAgICAgIGN1cnJlbnRQYWdlID0gXCJuYXYtc2VydmljZXNcIjtcclxuICAgIH1cclxuXHJcbiAgICBpZih0aXRsZS5pbmNsdWRlcyhcImhvbWVcIikpe1xyXG4gICAgICAgIGluaXRpYWxOYXZDb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGluaXRpYWxOYXZDb2xvciA9IFwicmdiYSgwLDAsMCwwLjcpXCJcclxuICAgIH1cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCduYXYnKVswXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBpbml0aWFsTmF2Q29sb3I7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjdXJyZW50UGFnZSkuY2xhc3NOYW1lID0gXCJzZWxlY3RlZFwiO1xyXG59KVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNldFdoaXRlQmFja2dyb3VuZCgpe1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XHJcbn1cclxuXHJcbmxldCB0aW1lciA9IG51bGw7XHJcblxyXG5sZXQgeCA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogMTAyNHB4KVwiKTsvKm1pbi13aWR0aDogMTAyNHB4Ki9cclxuXHJcbmZ1bmN0aW9uIHNldE5hdmJhcih4KXtcclxuICAgIG1vYmlsZU5hdmJhcigpO1xyXG59XHJcbnNldE5hdmJhcih4KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbihlKXtcclxuICAgIHNldE5hdmJhcih4KTtcclxufSk7XHJcblxyXG5cclxuZnVuY3Rpb24gZGVza3RvcE5hdmJhcigpe1xyXG4gICAgY29uc29sZS5sb2coXCJkZXNrdG9wXCIpO1xyXG4gICAgbGV0IG5hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCduYXYnKVswXTsvKiovXHJcbiAgICBuYXZiYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwicmdiYSgwLDAsMCwwLjcpXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vYmlsZU5hdmJhcigpe1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgXHJcbiAgICAgICAgbGV0IG5hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCduYXYnKVswXTtcclxuICAgICAgICBpZih3aW5kb3cuc2Nyb2xsWSA+MTApe1xyXG4gICAgICAgICAgICBuYXZiYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwicmdiYSgwLDAsMCwwLjcpXCI7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG5hdmJhci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9IGluaXRpYWxOYXZDb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlKCl7XHJcbiAgICBsZXQgbWVudUJ0bkRpdnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtYnRuXCIpLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZGl2XCIpO1xyXG4gICAgbGV0IGRpdiA9IG1lbnVCdG5EaXZzWzBdO1xyXG4gICAgbGV0IGRpdjIgPSBtZW51QnRuRGl2c1sxXTtcclxuICAgIGlmKGRpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJsZWFuLXJpZ2h0XCIpKXsvL2Nsb3NlIG1lbnVcclxuICAgICAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZShcImxlYW4tcmlnaHRcIik7XHJcbiAgICAgICAgZGl2Mi5jbGFzc0xpc3QucmVtb3ZlKFwibGVhbi1sZWZ0XCIpO1xyXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwidG9wLXBhcmFsbGVsXCIpO1xyXG4gICAgICAgIGRpdjIuY2xhc3NMaXN0LmFkZChcImJvdHRvbS1wYXJhbGxlbFwiKTtcclxuICAgICAgICBjbG9zZU5hdigpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJ0b3AtcGFyYWxsZWxcIik7XHJcbiAgICAgICAgZGl2Mi5jbGFzc0xpc3QucmVtb3ZlKFwiYm90dG9tLXBhcmFsbGVsXCIpO1xyXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwibGVhbi1yaWdodFwiKTtcclxuICAgICAgICBkaXYyLmNsYXNzTGlzdC5hZGQoXCJsZWFuLWxlZnRcIik7XHJcbiAgICAgICAgb3Blbk5hdigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBvcGVuTmF2KCl7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vYmlsZS1tZW51XCIpLnN0eWxlLndpZHRoID0gXCIyNTBweFwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZU5hdigpe1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2JpbGUtbWVudVwiKS5zdHlsZS53aWR0aCA9IFwiMFwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYWxjTW9ydGdhZ2VQYXltZW50KHAsaSx5KXtcclxuICAgIGxldCByID0gKGkvMTIwMCk7XHJcbiAgICBsZXQgbiA9IHkqMTI7XHJcbiAgICBsZXQgeCA9IE1hdGgucG93KDErcixuKTtcclxuICAgIGxldCBtID0gcCoocip4Lyh4LTEpKTtcclxuICAgIHJldHVybiBmb3JtYXROdW0oTWF0aC5yb3VuZChtKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGNUb3RhbE1vcnRnYWdlKHAsaSx5KXtcclxuICAgIGxldCByID0gKGkvMTIwMCk7XHJcbiAgICBsZXQgbiA9IHkqMTI7XHJcbiAgICBsZXQgeCA9IE1hdGgucG93KDErcixuKTtcclxuICAgIGxldCBtID0gcCoocip4Lyh4LTEpKTtcclxuICAgIHJldHVybiBmb3JtYXROdW0oTWF0aC5yb3VuZChtKm4pKTtcclxufVxyXG5mdW5jdGlvbiB2YWxpZGF0ZUlucHV0KCl7XHJcbiAgICBsZXQgbUEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vcnRnYWdlLWFtb3VudFwiKTtcclxuICAgIGxldCBpUiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW50ZXJlc3QtcmF0ZVwiKTtcclxuICAgIGxldCBtUCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9ydGdhZ2UtcGVyaW9kXCIpO1xyXG4gICAgbGV0IHAgPSBwYXJzZUZsb2F0KG1BLnZhbHVlKTtcclxuICAgIGxldCBpID0gcGFyc2VGbG9hdChpUi52YWx1ZSk7XHJcbiAgICBsZXQgeSA9IHBhcnNlSW50KG1QLnZhbHVlKTtcclxuICAgIGlmKHA+MCAmJiBpPj0wICYmIHk+MCl7XHJcbiAgICAgICAgcmVtb3ZlRXJyb3JDbGFzcyhtQSxpUixtUCk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBpZihwPD0wIHx8ICFwKXtcclxuICAgICAgICAgICAgbUEuY2xhc3NOYW1lID0gXCJlcnJvclwiO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBtQS5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpPDAgfHwgIWkpe1xyXG4gICAgICAgICAgICBpUi5jbGFzc05hbWUgPSBcImVycm9yXCI7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlSLmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHk8PTAgfHwgIXkpe1xyXG4gICAgICAgICAgICBtUC5jbGFzc05hbWUgPSBcImVycm9yXCI7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG1QLmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRXJyb3JDbGFzcyhtQSxpUixtUCl7XHJcbiAgICBpZihtQS5jbGFzc0xpc3QuY29udGFpbnMoXCJlcnJvclwiKSl7XHJcbiAgICAgICAgbUEuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgIH1cclxuICAgIGlmKGlSLmNsYXNzTGlzdC5jb250YWlucyhcImVycm9yXCIpKXtcclxuICAgICAgICBpUi5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgfVxyXG4gICAgaWYobVAuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZXJyb3JcIikpe1xyXG4gICAgICAgIG1QLmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVudGVyTW9ydGdhZ2VJbmZvKCl7XHJcbiAgICBpZih2YWxpZGF0ZUlucHV0KCkpe1xyXG4gICAgICAgIGxldCBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb3J0Z2FnZS1hbW91bnRcIikudmFsdWU7XHJcbiAgICAgICAgbGV0IGkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImludGVyZXN0LXJhdGVcIikudmFsdWU7XHJcbiAgICAgICAgbGV0IHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vcnRnYWdlLXBlcmlvZFwiKS52YWx1ZTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vbnRobHktcGF5bWVudFwiKS5pbm5lckhUTUw9Y2FsY01vcnRnYWdlUGF5bWVudChwLGkseSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3RhbC1tb3J0Z2FnZVwiKS5pbm5lckhUTUwgPSBjYWxjVG90YWxNb3J0Z2FnZShwLGkseSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0Q2FsY3VsYXRvcigpe1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb3J0Z2FnZS1hbW91bnRcIikudmFsdWU9XCJcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW50ZXJlc3QtcmF0ZVwiKS52YWx1ZT1cIlwiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb3J0Z2FnZS1wZXJpb2RcIikudmFsdWU9XCJcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0TnVtKHgpe1xyXG4gICAgcmV0dXJuIFwiJCBcIit4LnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZyxcIixcIik7XHJcbn1cclxuXHJcblxyXG4vKkZPUk0gU1VCTUlTU0lPTiAqL1xyXG5jb25zdCBteUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Rm9ybVwiKTtcclxuY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC1idG4nKTtcclxuc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgeGhyICA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYoeGhyLnJlYWR5U3RhdGUgPT0gNCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRG9uZVwiKTtcclxuICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjIwMFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgeGhyLm9wZW4oXCJwb3N0XCIsIFwiaHR0cHM6Ly9wMTAuc2VjdXJlLndlYmhvc3RpbmcubHVtaW5hdGUuY29tL2Zvcm1zP3NzYz11czEmbG9naW49ZWxpc2FiZXRoYl9jcGF0cnVzdFwiLHRydWUpO1xyXG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdtdWx0aXBhcnQvZm9ybS1kYXRhJyk7XHJcbiAgICB4aHIuc2VuZChuZXcgRm9ybURhdGEobXlGb3JtKSk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9