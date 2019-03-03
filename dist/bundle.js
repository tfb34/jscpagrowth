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

/*document.addEventListener("readystatechange", function(){
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
*/

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


window.toggle= toggle;
window.enterMortgageInfo = enterMortgageInfo;
window.resetCalculator = resetCalculator;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tLmNzcz85Mzc1Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsMkJBQTJCLG1CQUFPLENBQUMscUdBQWdEO0FBQ25GO0FBQ0EsY0FBYyxRQUFTLGlCQUFpQiwyQkFBMkIsZ0NB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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkZBLGNBQWMsbUJBQU8sQ0FBQyxvSEFBdUQ7O0FBRTdFLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxtR0FBZ0Q7O0FBRXJFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ25CZjtBQUFBO0FBQUE7QUFBc0I7QUFDdEIsOEJBQThCOztBQUU5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlEQUFpRDs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0MsRUFBRTtBQUNqRDs7O0FBR0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG5cXHJcXG46cm9vdHtcXHJcXG4gICAgLS1tYWluLWNvbG9yOiB0ZWFsO1xcclxcbiAgICAtLWhlYWRlci1jb2xvcjogIzcxNzE3MTtcXHJcXG4gICAgLS10ZXh0LWNvbG9yOiAjNDA0MDQxO1xcclxcbn1cXHJcXG5ib2R5e1xcclxcbiAgICBwYWRkaW5nOjA7bWFyZ2luOiAwO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuaDIsaDN7XFxyXFxuICAgIGNvbG9yOnZhcigtLWhlYWRlci1jb2xvcik7XFxyXFxufVxcclxcbmF7XFxyXFxuICAgIGNvbG9yOnZhcigtLXRleHQtY29sb3IpO1xcclxcbn1cXHJcXG4uY29udGFpbmVye1xcclxcbiAgICBwYWRkaW5nOiAxZW07XFxyXFxufVxcclxcbi5yb3csXFxyXFxuLmNvbHVtbntcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuLnJvd3tcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbn1cXHJcXG4ucm93OmJlZm9yZSwgXFxyXFxuLnJvdzphZnRlcntcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcclxcbn1cXHJcXG4ucm93OmFmdGVye1xcclxcbiAgICBjbGVhcjogYm90aDtcXHJcXG59XFxyXFxuW2NsYXNzKj1jb2x1bW5de1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGZsb2F0OmxlZnQ7XFxyXFxufVxcclxcbltjbGFzcyo9Y29sdW1uXSArIFtjbGFzcyo9Y29sdW1uXXtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEuNiU7XFxyXFxufVxcclxcbi5jb2x1bW4tMXtcXHJcXG4gICAgd2lkdGg6IDYuODY2NjY2NjY3JTtcXHJcXG59XFxyXFxuLmNvbHVtbi0ye1xcclxcbiAgICB3aWR0aDogMTUuMzMzMzMzMzMzMyU7XFxyXFxufVxcclxcbi5jb2x1bW4tM3tcXHJcXG4gICAgd2lkdGg6IDIzLjglO1xcclxcbn1cXHJcXG4uY29sdW1uLTR7XFxyXFxuICAgIHdpZHRoOiAzMi4yNjY2NjY2NjY3JTtcXHJcXG59XFxyXFxuLmNvbHVtbi01eyBcXHJcXG4gICAgd2lkdGg6IDQwLjczMzMzMzMzMzMlO1xcclxcbn1cXHJcXG4uY29sdW1uLTZ7XFxyXFxuICAgIHdpZHRoOiA0OS4yJTtcXHJcXG59XFxyXFxuLmNvbHVtbi03e1xcclxcbiAgICB3aWR0aDogNTcuNjY2NjY2NjY2NyU7XFxyXFxufVxcclxcbi5jb2x1bW4tOHtcXHJcXG4gICAgd2lkdGg6IDY2LjEzMzMzMzMzMzMlO1xcclxcbn1cXHJcXG4uY29sdW1uLTl7XFxyXFxuICAgIHdpZHRoOiA3NC42JTtcXHJcXG59XFxyXFxuLmNvbHVtbi0xMHtcXHJcXG4gICAgd2lkdGg6IDgzLjA2NjY2NjY3JTtcXHJcXG59XFxyXFxuLmNvbHVtbi0xMXtcXHJcXG4gICAgd2lkdGg6IDkxLjUzMzMzMzMzMzMlO1xcclxcbn1cXHJcXG4uY29sdW1uLTEye1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbn1cXHJcXG4vKm9mZnNldCovXFxyXFxuLmNvbHVtbi1vZmZzZXQtMXtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDguNDY2NjY2NjY3JTtcXHJcXG59XFxyXFxuLmNvbHVtbi1vZmZzZXQtMntcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDE2LjkzMzMzMzMzJTtcXHJcXG59XFxyXFxuLmNvbHVtbi1vZmZzZXQtM3tcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDI1LjQlO1xcclxcbn1cXHJcXG4uY29sdW1uLW9mZnNldC00e1xcclxcbiAgICBtYXJnaW4tbGVmdDogMzMuODY2NjY2NjY3JTtcXHJcXG59XFxyXFxuLmNvbHVtbi1vZmZzZXQtNXtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDQyLjMzMzMzMzMzMyU7XFxyXFxufVxcclxcbi5jb2x1bW4tb2Zmc2V0LTZ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1MC44JTtcXHJcXG59XFxyXFxuLmNvbHVtbi1vZmZzZXQtN3tcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDU5LjI2NjY2NjY2NyU7XFxyXFxufVxcclxcbi5jb2x1bW4tb2Zmc2V0LTh7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA2Ny43MzMzMzMzMzMlO1xcclxcbn1cXHJcXG4uY29sdW1uLW9mZnNldC05e1xcclxcbiAgICBtYXJnaW4tbGVmdDogNzYuMiU7XFxyXFxufVxcclxcbi5jb2x1bW4tb2Zmc2V0LTEwe1xcclxcbiAgICBtYXJnaW4tbGVmdDogODQuNjY2NjY2NjY3JTtcXHJcXG59XFxyXFxuLmNvbHVtbi1vZmZzZXQtMTF7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA5My4xMzMzMzMzMzMlO1xcclxcbn0vKmVuZCBvZiBteS1ncmlkKi9cXHJcXG5we1xcclxcblxcdG1hcmdpbjowO1xcclxcblxcdHBhZGRpbmc6MDtcXHJcXG59XFxyXFxuYXtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbm5hdntcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBoZWlnaHQ6M2VtO1xcclxcblxcdHBhZGRpbmc6MDtcXHJcXG5cXHR3aWR0aDoxMDAlO1xcclxcblxcdHotaW5kZXg6MjtcXHJcXG4gICAgcG9zaXRpb246Zml4ZWQ7XFxyXFxufVxcclxcbm5hdiBpbWd7XFxyXFxuICAgIHdpZHRoOjUwcHg7dG9wOjE1JTtsZWZ0OjJlbTtwb3NpdGlvbjphYnNvbHV0ZTtcXHJcXG59XFxyXFxuI2xvZ28td3JhcHBlcntcXHJcXG5cXHRoZWlnaHQ6IDQwcHg7XFxyXFxuXFx0d2lkdGg6IDI3NXB4O1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFx0ZmxvYXQ6bGVmdDtcXHJcXG59XFxyXFxuI2xvZ28taW1hZ2V7XFxyXFxuXFx0aGVpZ2h0OiA1MHB4O1xcclxcblxcdHdpZHRoOiA5MHB4O1xcclxcblxcdGZsb2F0OiBsZWZ0O1xcclxcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zMy51cy1lYXN0LTIuYW1hem9uYXdzLmNvbS93anMtYWNjb3VudGluZy1wcm9qZWN0L2ltYWdlcy9qc2xvZ295ZWxsb3cuanBlZycpO1xcclxcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuI2xvZ28tdGV4dHtcXHJcXG5cXHRoZWlnaHQ6IDUwcHg7XFxyXFxuXFx0d2lkdGg6IDEzMHB4O1xcclxcblxcdGZsb2F0OiBsZWZ0O1xcclxcblxcdGZvbnQtc2l6ZTogMTJweDtcXHJcXG5cXHRwYWRkaW5nLWxlZnQ6IDFlbTtcXHJcXG5cXHRwYWRkaW5nLXRvcDogNXB4O1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFx0YmFja2dyb3VuZC1zaXplOndoaXRlO1xcclxcbn1cXHJcXG5uYXY6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgZGlzcGxheTogdGFibGU7XFxyXFxuICAgIGNsZWFyOiBib3RoO1xcclxcbn1cXHJcXG4jbWVudS1idG57XFxyXFxuICAgIHdpZHRoOjJlbTtcXHJcXG4gICAgaGVpZ2h0OjJlbTtcXHJcXG4gICAgcGFkZGluZzoxZW0gMWVtIDAgMWVtO1xcclxcbiAgICBmbG9hdDpyaWdodDtcXHJcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbn1cXHJcXG4jbWVudS1idG4gZGl2IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXHJcXG5cXHRoZWlnaHQ6IDJweDtcXHJcXG5cXHR3aWR0aDogMjVweDtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcbiNtZW51LWJ0biBkaXY6Zmlyc3QtY2hpbGR7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTowLjVlbTtcXHJcXG59XFxyXFxuI21lbnUtYnRuIGRpdjpsYXN0LWNoaWxke1xcclxcblxcdHRvcDoxLjVlbTtcXHJcXG59XFxyXFxuQGtleWZyYW1lcyB0b3AtcGFyYWxsZWx7XFxyXFxuICAgIDAle1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAuNWVtKSByb3RhdGUoMTM1ZGVnKTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAle1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4udG9wLXBhcmFsbGVse1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogdG9wLXBhcmFsbGVsO1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGJvdHRvbS1wYXJhbGxlbHtcXHJcXG4gICAgMCV7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJXtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5ib3R0b20tcGFyYWxsZWx7XFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBib3R0b20tcGFyYWxsZWw7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgbGVhbi1yaWdodHtcXHJcXG4gICAgMCV7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDBkZWcpO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCV7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMC41ZW0pIHJvdGF0ZSgxMzVkZWcpO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5sZWFuLXJpZ2h0e1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogbGVhbi1yaWdodDtcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBsZWFuLWxlZnR7XFxyXFxuICAgIDAle1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJXtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4ubGVhbi1sZWZ0e1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogbGVhbi1sZWZ0O1xcclxcbn1cXHJcXG4uYW5pbWF0ZS1idG57XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjowLjVzO1xcclxcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcclxcbn1cXHJcXG4jZGVza3RvcC1tZW51e1xcclxcblxcdGRpc3BsYXk6bm9uZTtcXHJcXG59XFxyXFxuI2hvbWUtbWFpbi1waWN7XFxyXFxuXFx0LyogaGVpZ2h0OiAyMHZoOyAqL1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGhlaWdodDogMzB2dztcXHJcXG59XFxyXFxuLm9iamVjdC1maWxsX2ZpbGx7XFxyXFxuXFx0b2JqZWN0LWZpdDogZmlsbDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvdmVye1xcclxcblxcdHdpZHRoOjI2MHB4O1xcclxcblxcdG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG4jbWFpbi10ZXh0e1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRwYWRkaW5nOiA1ZW0gMWVtOy8qcGFkZGluZzogM2VtIDNlbSovXFxyXFxuXFx0bWF4LXdpZHRoOjIwZW07XFxyXFxuXFx0bWFyZ2luOjAgYXV0bztcXHJcXG5cXHRsaW5lLWhlaWdodDogMS43ZW07XFxyXFxuXFx0XFxyXFxuXFx0Y29sb3I6ICM2NjVkNWQ7XFxyXFxuXFx0Zm9udC1zaXplOjE4cHg7XFxyXFxufVxcclxcbiNzZXJ2aWNlLXBpY3tcXHJcXG5cXHRtYXJnaW46IDAgYXV0bztcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRoZWlnaHQ6OTBweDtcXHJcXG59XFxyXFxuLnNlcnZpY2UtaGVhZGVye1xcclxcblxcdGZvbnQtc2l6ZToyMHB4O1xcclxcbiAgICBmb250LXdlaWdodDpub3JtYWw7XFxyXFxufVxcclxcbi5zZXJ2aWNlLWRlc2NyaXB0aW9ue1xcclxcblxcdGZvbnQtc2l6ZToxOHB4O1xcclxcbn1cXHJcXG4uc2VydmljZS1oZWFkZXIsIC5zZXJ2aWNlLWRlc2NyaXB0aW9ue1xcclxcblxcdGNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuI3NlcnZpY2Vze1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNFQ0VDRUM7XFxyXFxuXFx0cGFkZGluZzogNWVtIDJlbSAwZW0gMmVtOy8qNSAyIDAgMiovXFxyXFxufVxcclxcbiNyZWFkLW1vcmUtYnRue1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRwYWRkaW5nOjFlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0d2lkdGg6IDYuMmVtO1xcclxcblxcdG1hcmdpbjogNWVtIGF1dG8gNWVtIGF1dG87XFxyXFxufVxcclxcbiNzZXJ2aWNlcyAuY29sdW1uLTR7XFxyXFxuXFx0cGFkZGluZy1ib3R0b206NGVtO1xcclxcbn1cXHJcXG4jY29udGFjdC1pbmZve1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRwYWRkaW5nOiA2ZW0gMWVtO1xcclxcbn1cXHJcXG4jY29udGFjdC1pbmZvIHB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuOGVtO1xcclxcblxcdGZvbnQtc2l6ZTogMTdweDtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxufVxcclxcbiNjb250YWN0LWluZm8gaDN7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG5cXHQvKmNvbG9yOiByZ2IoMTEzLDExMywxMTMpOyovXFxyXFxuXFx0Zm9udC1zaXplOjI1cHg7XFxyXFxufVxcclxcbiNjb250YWN0LWluZm8gYXtcXHJcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbn1cXHJcXG4ubWFwLWNvbnRhY3Qtd3JhcHBlcntcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRUNFQ0VDO1xcclxcblxcdG1hcmdpbi1ib3R0b206MDtcXHJcXG59XFxyXFxuLmJ0bntcXHJcXG5cXHRwYWRkaW5nOiAxZW07XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdHdpZHRoOiAxMGVtO1xcclxcblxcdG1hcmdpbjogMmVtIGF1dG87XFxyXFxuXFx0LyogZm9udC1zaXplOiAxNXB4OyAqL1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG4uY29tbXVuaWNhdGlvbi1yb3ctd3JhcHBlcntcXHJcXG5cXHRtYXJnaW4tdG9wOiA1ZW07bWFyZ2luLWJvdHRvbTogNWVtOy8qZm9udC1zaXplOjE0cHg7c2Rlc2t0b3A6IG1hcmdpbi10b3AsbWFyZ2luLWJvdHRvbTogM2VtKi9cXHJcXG59XFxyXFxuLmNvbW11bmljYXRpb24tcm93LXdyYXBwZXIgcHtcXHJcXG5cXHRmb250LXNpemU6MTdweDtcXHJcXG59XFxyXFxuLmlubmVyLXdyYXBwZXJ7XFxyXFxuXFx0d2lkdGg6MTAwJTt0ZXh0LWFsaWduOiBjZW50ZXJcXHJcXG59XFxyXFxuLmlubmVyLXdyYXBwZXIgZGl2e1xcclxcblxcdG1heC13aWR0aDoyOWVtO1xcclxcblxcdGRpc3BsYXk6YmxvY2s7XFxyXFxuXFx0bWFyZ2luOjAgYXV0bztcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzogMGVtIDNlbTsvKjFlbSovXFxyXFxuXFx0LypwYWRkaW5nOiAzZW0gM2VtOyBmb3IgZGVza3RvcCovXFxyXFxufVxcclxcbi5pbm5lci13cmFwcGVyLmZpcnN0e1xcclxcblxcdC8qbWFyZ2luLXRvcDogMmVtOyovXFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDFlbTsvKjAgaW4gbm9uLW1vYmlsZSovXFxyXFxuXFx0Ym9yZGVyLXJpZ2h0OjBweDtcXHJcXG59XFxyXFxuLmlubmVyLXdyYXBwZXIubGFzdHtcXHJcXG5cXHQvKm1hcmdpbi1ib3R0b206IDVlbTsqL1xcclxcblxcdHBhZGRpbmctdG9wOiAxZW07LyowIGluIG5vbi1tb2JpbGUqL1xcclxcbn1cXHJcXG4uaW5uZXItd3JhcHBlciBoMntcXHJcXG5cXHRmb250LXdlaWdodDogbGlnaHRlcjtcXHJcXG5cXHRmb250LXNpemU6IDI1cHg7LypkZXNrdG9wIGZvbnQtc2l6ZTogMmVtKi9cXHJcXG5cXHRcXHJcXG5cXHQvKmNvbG9yOiBncmV5OyovXFxyXFxufVxcclxcbiNob21lLWhlYWRlcntcXHJcXG4gICAgY29sb3I6dmFyKC0taGVhZGVyLWNvbG9yKTtmb250LXNpemU6IDIycHg7bWFyZ2luLXRvcDoyLjVlbTttYXJnaW4tYm90dG9tOjAuNWVtO2ZvbnQtd2VpZ2h0OjUwMDtcXHJcXG59XFxyXFxuLmlubmVyLXdyYXBwZXIgcHtcXHJcXG5cXHQvKmxpbmUtaGVpZ2h0OjNlbTsqL1xcclxcblxcdGxpbmUtaGVpZ2h0OiAyZW07XFxyXFxufVxcclxcbi5pbm5lci13cmFwcGVyIGF7XFxyXFxuXFx0cG9pbnRlci1ldmVudHM6IGF1dG87Lypub25lIGZvciBkZXNrdG9wKi9cXHJcXG59XFxyXFxuXFxyXFxudWx7XFxyXFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcblxcdHBhZGRpbmc6MDtcXHJcXG59XFxyXFxuI25hdmlnYXRpb257XFxyXFxuXFx0dGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxuXFx0Zm9udC1zaXplOjEycHg7XFxyXFxufVxcclxcbnVsIGE6bGluaywgdWwgYTp2aXNpdGVke1xcclxcblxcdGNvbG9yOnZhcigtLW1haW4tY29sb3IpO1xcclxcbn1cXHJcXG4jbmF2aWdhdGlvbiB1bCBsaXtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOjJlbTtcXHJcXG59XFxyXFxuZm9vdGVye1xcclxcblxcdHBhZGRpbmc6IDEwZW0gMCA0ZW0gMDtcXHJcXG5cXHRjb2xvcjojMzMzMzMzO1xcclxcbn1cXHJcXG4jY29weXJpZ2h0e1xcclxcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuXFx0Zm9udC1zaXplOjExcHg7XFxyXFxuXFx0bWFyZ2luOjAgYXV0bztcXHJcXG5cXHR3aWR0aDoxNWVtO1xcclxcbn1cXHJcXG4uaGVhZGVye1xcclxcblxcdG1hcmdpbi1ib3R0b206MS41ZW07Zm9udC1zaXplOjE4cHg7Lypjb2xvcjpncmV5Ki9cXHJcXG59XFxyXFxuI2Zvb3Rlci1jb250YWN0IHB7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbn1cXHJcXG4jZm9vdGVyLWNvbnRhY3Qge1xcclxcblxcdGZvbnQtc2l6ZToxM3B4O1xcclxcblxcdG1heC13aWR0aCA6MTVlbTtcXHRcXHJcXG5cXHRtYXJnaW46MCBhdXRvO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuI25hdmlnYXRpb24sICNmb290ZXItY29udGFjdCwjY29weXJpZ2h0e1xcclxcblxcdG1hcmdpbi1ib3R0b206NWVtO1xcclxcbn1cXHJcXG4jbW9iaWxlLW1lbnUgdWx7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4jbW9iaWxlLW1lbnUgdWwgbGl7XFxyXFxuXFx0cGFkZGluZzoxZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuI21vYmlsZS1tZW51IHVsIGxpe1xcclxcblxcdGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNlY2VjZWM7XFxyXFxufVxcclxcbiNtb2JpbGUtbWVudSB1bCBsaTpsYXN0LWNoaWxke1xcclxcblxcdGJvcmRlcjpub25lO1xcclxcbn1cXHJcXG4jbWFwe1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XFxyXFxufVxcclxcbiNwYXlyb2xsLWNvbnRlbnR7XFxyXFxuXFx0cGFkZGluZy1sZWZ0OjFlbTtcXHJcXG5cXHRwYWRkaW5nLXJpZ2h0OjFlbTtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTo1ZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDJlbTtcXHJcXG59XFxyXFxuI3BheXJvbGwtY29udGVudCBwLCAuc3ViLWRlc2NyaXB0aW9ue1xcclxcblxcdC8qY29sb3I6ICMzMzMzMzM7Ki9cXHJcXG5cXHRmb250LXdlaWdodDpsaWdodGVyO3RleHQtYWxpZ246Y2VudGVyO1xcclxcbn1cXHJcXG4jcGF5cm9sbC1jb250ZW50IHVse1xcclxcblxcdGxpc3Qtc3R5bGUtdHlwZTogY2lyY2xlO1xcclxcblxcdHBhZGRpbmctbGVmdDozZW07XFxyXFxuXFx0cGFkZGluZy1yaWdodDoxZW07XFxyXFxuXFx0Lypjb2xvcjojMzMzMzMzOyovXFxyXFxufVxcclxcbiNmb3JtcyB1bHtcXHJcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcXHJcXG5cXHRwYWRkaW5nLWxlZnQ6IDJlbTtcXHJcXG5cXHRmb250LXNpemU6MTVweDtcXHJcXG59XFxyXFxuI2Zvcm1ze1xcclxcblxcdGxpbmUtaGVpZ2h0OiAyZW07XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gICAgcGFkZGluZzo1ZW0gMCA1ZW0gMWVtO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6d2hpdGVzbW9rZTtcXHJcXG59XFxyXFxuLnBhZ2UtaW5mby1ib3h7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG5cXHR3aWR0aDoxMDAlO1xcclxcblxcdGhlaWdodDo4NXZoOy8qY2hhbmdlIHRvIHBlcm1hbmVudCBoZWlnaHQgaW4gZGVza3RvcCovXFxyXFxuXFx0ZGlzcGxheTp0YWJsZTtcXHJcXG59XFxyXFxuLnBhZ2UtaW5mby1ib3ggcHtcXHJcXG5cXHRjb2xvcjp3aGl0ZTtcXHJcXG5cXHRmb250LXNpemU6MS41ZW07XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGRpc3BsYXk6dGFibGUtY2VsbDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG4uY29udGVudC1ib3h7XFxyXFxuXFx0cGFkZGluZzozZW0gMmVtO1xcclxcblxcdHotaW5kZXg6MDsvKi0yKi9cXHJcXG5cXHRsaW5lLWhlaWdodDogMS44ZW07XFxyXFxuXFx0Lypjb2xvcjojMzMzOyovXFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXHJcXG59XFxyXFxuLmNvbnRlbnQtYm94IGgzLCAuY29udGVudC1ib3ggaDR7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uY29udGVudC1ib3guY29udGFjdHtcXHJcXG4gICAgcGFkZGluZy10b3A6NS41ZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOjNlbTtcXHJcXG59XFxyXFxuLmNvbnRlbnQtYm94LmFib3V0e1xcclxcbiAgICAvKnBhZGRpbmc6MWVtIDEuNWVtIDhlbSAxLjVlbTsqL1xcclxcbiAgICBwYWRkaW5nOjNlbSAyZW0gMTBlbSAyZW07XFxyXFxufVxcclxcbiNtb2JpbGUtbWVudXtcXHJcXG4gICAgd2lkdGg6IDA7XFxyXFxuICAgIGhlaWdodDo5MHZoO1xcclxcblxcdGZvbnQtd2VpZ2h0OmJvbGQ7XFxyXFxuXFx0Zm9udC1zaXplOjIxcHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXHJcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIHJpZ2h0OjA7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXHJcXG4gICAgcGFkZGluZy10b3A6NjBweDtcXHJcXG4gICAgZGlzcGxheTpibG9jazsgXFxyXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogcmdiYSgwLDAsMCwwLjEpIC0ycHggMCAycHg7XFxyXFxuICAgIC1tb3otYm94LXNoYWRvdzogcmdiYSgwLDAsMCwwLjEpIC0ycHggMCAycHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwwLDAsMC4xKSAtMnB4IDAgMnB4O1xcclxcbn1cXHJcXG4uc2VydmljZS1ib3gtd3JhcHBlcntcXHJcXG4gICAgcGFkZGluZzowIDBlbTtcXHJcXG59XFxyXFxuLnNlcnZpY2UtYm94LXdyYXBwZXIgZGl2e1xcclxcblxcdHdpZHRoOjEwMCU7dGV4dC1hbGlnbjpjZW50ZXI7ZGlzcGxheTp0YWJsZTtoZWlnaHQ6NmVtO1xcclxcbn1cXHJcXG4uc2VydmljZS1ib3gtd3JhcHBlciBoM3tcXHJcXG5cXHRkaXNwbGF5OnRhYmxlLWNlbGw7dmVydGljYWwtYWxpZ246bWlkZGxlO1xcclxcbn1cXHJcXG4jYWNjb3VudGluZy1zZXJ2aWNlcyB1bHtcXHJcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcXHJcXG5cXHRtYXJnaW4tbGVmdDogM2VtO1xcclxcblxcdGZvbnQtc2l6ZToxNHB4O1xcclxcbn1cXHJcXG4jYWNjb3VudGluZy1zZXJ2aWNlc3tcXHJcXG5cXHRwYWRkaW5nOjNlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDoxLjVlbTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcclxcblxcdGZvbnQtc2l6ZToxNXB4O1xcclxcbn1cXHJcXG4uY29udGVudC1ib3guc2VydmljZXN7XFxyXFxuXFx0bWFyZ2luLXRvcDowOy8qYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudCovcGFkZGluZzowIDAgNWVtIDA7XFxyXFxufVxcclxcbi5yb3cuc2VydmljZXN7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbi8qc2VydmljZXMgcGFnZSovXFxyXFxuLmNvbnRlbnQtYm94Lm1haW4taW1ne1xcclxcblxcdHBhZGRpbmc6MDtwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG5cXHRtYXJnaW46MC8qMTAlKi87YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuLm92ZXJsYXl7XFxyXFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSx0cmFuc3BhcmVudCAwLHJnYmEoMCwwLDAsMC42NSkgMTAwJSk7XFxyXFxuXFx0cG9zaXRpb246YWJzb2x1dGU7XFxyXFxufVxcclxcbi5jb250ZW50LWJveC5tYWluLWltZyBpbWcsIC5vdmVybGF5e1xcclxcblxcdHdpZHRoOjEwMCU7aGVpZ2h0OjIwN3B4O1xcclxcbn1cXHJcXG4uY29udGVudC1ib3gubWFpbi1pbWcgcHtcXHJcXG5cXHRwb3NpdGlvbjphYnNvbHV0ZTtwYWRkaW5nOjAgNSU7dGV4dC1hbGlnbjogY2VudGVyO2NvbG9yOndoaXRlO3RvcDoyNSU7XFxyXFxufVxcclxcbi5jb250YWN0LWluZm97XFxyXFxuXFx0Lypjb2xvcjojMzMzMzMzOyovXFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGxpbmUtaGVpZ2h0OjIuM2VtO1xcclxcblxcdG1hcmdpbi1ib3R0b206NWVtO1xcclxcbn1cXHJcXG4uY29udGFjdC1pbmZvIGg0e1xcclxcblxcdG1hcmdpbjowO1xcclxcblxcdGZvbnQtc2l6ZToxLjJlbTtcXHJcXG59XFxyXFxuLmNvbnRhY3QtaW5mbyBpbWd7XFxyXFxuXFx0d2lkdGg6IDMwcHg7XFxyXFxufVxcclxcbi5jb250YWN0LWluZm8gYXtcXHJcXG5cXHRjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxufVxcclxcbi5jb250YWN0LWluZm8gYTpob3ZlcntcXHJcXG5cXHRjb2xvcjp2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG59XFxyXFxuLnJvdy5jb250YWN0e1xcclxcblxcdG1hcmdpbi10b3A6NC41ZW07XFxyXFxufVxcclxcbi5sb2dvLXN0eWxle1xcclxcblxcdHRleHQtYWxpZ246Y2VudGVyO1xcclxcblxcdHBhZGRpbmc6MWVtIDA7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjojNzI3MTZiO1xcclxcblxcdGNvbG9yOndoaXRlO1xcclxcbn1cXHJcXG4uaW1hZ2V7XFxyXFxuXFx0cG9zaXRpb246cmVsYXRpdmU7XFxyXFxuXFx0ei1pbmRleDogLTM7XFxyXFxufVxcclxcbi5wYWdlLWluZm8tdGFne1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRib3R0b206IDI1JTtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0Y29sb3I6d2hpdGU7XFxyXFxuXFx0ei1pbmRleDoxO1xcclxcbn1cXHJcXG4ucGFnZS1pbmZvLXRhZyBzcGFue1xcclxcblxcdGZvbnQtc2l6ZToyZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6NTAwO1xcclxcbn1cXHJcXG4jY29udGFjdC1wYWdlLWluZm97XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO3BhZGRpbmctdG9wOjRlbTtwYWRkaW5nLWJvdHRvbTozZW07XFxyXFxufVxcclxcbiNjb250YWN0LXBhZ2UtaW5mbyBoM3tcXHJcXG4gICAgLypjb2xvcjojNzE3MTcxKi87Zm9udC1zaXplOjIwcHg7Zm9udC13ZWlnaHQ6NTAwO3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6MmVtIDFlbSAwZW0gMWVtO21hcmdpbi10b3A6MDtcXHJcXG59XFxyXFxuI21lbnUtYnRuLXdyYXBwZXJ7LypwcmV2ZW50cyBjaGFuZ2UgaW4gc2l6ZSB3aGVuIG9wZW5pbmcgJiBjbG9zaW5nIG1lbnUqL1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbiAgICBoZWlnaHQ6M2VtO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG4jbWVudS1idG4td3JhcHBlcjphZnRlcntcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIGRpc3BsYXk6dGFibGU7XFxyXFxuICAgIGNsZWFyOmJvdGg7XFxyXFxufVxcclxcbi5sb2dvLXN0eWxlICNoZWFkZXJ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuLmxvZ28tc3R5bGUgI3N1YmhlYWRlcntcXHJcXG4gICAgZm9udC1zaXplOjE1cHg7XFxyXFxufVxcclxcbi5sb2dvLXN0eWxlICNzdWJoZWFkZXItdHdve1xcclxcbiAgICBmb250LXNpemU6MTBweDtcXHJcXG59XFxyXFxuI2hvbWUtbWFpbi1pbWFnZXtcXHJcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgIGhlaWdodDozNjBweDtcXHJcXG4gICBiYWNrZ3JvdW5kOiB1cmwoXFxcImh0dHA6Ly9qc2NwYWdyb3d0aC5jb20vYXNzZXRzL2hvbWVwYWdlLW1haW4taW1hZ2UuanBlZ1xcXCIpIG5vLXJlcGVhdCBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcbiNob21lLW1haW4taW1hZ2UgLm92ZXJsYXl7XFxyXFxuICAgIG1hcmdpbjowO2hlaWdodDozNjBweDtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCxyZ2JhKDAsMCwwLDAuNCkpXFxyXFxufVxcclxcbiNob21lLW1haW4taW1hZ2UgaDF7XFxyXFxuICAgIG1hcmdpbjowO3RleHQtYWxpZ246Y2VudGVyO2NvbG9yOndoaXRlO1xcclxcbiAgICBwYWRkaW5nLXRvcDogM2VtO2ZvbnQtc2l6ZToxLjVlbTtcXHJcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjdzO1xcclxcbn1cXHJcXG4jaG9tZS1tYWluLWltYWdlIGgze1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7Y29sb3I6d2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZToxMnB4O3BhZGRpbmc6MCA1JTtsaW5lLWhlaWdodDoyMHB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxyXFxuICAgIGFuaW1hdGlvbi1kZWxheTogMC43cztcXHJcXG59XFxyXFxuI2hvbWUtbWFpbi1pbWFnZSBkaXZ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDoyMCU7XFxyXFxuICAgIGFuaW1hdGlvbi1kZWxheTogMS4xcztcXHJcXG59XFxyXFxuI2hvbWUtbWFpbi1pbWFnZSBkaXYgc3BhbntcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBmb250LXdlaWdodDpib2xkO1xcclxcbiAgICBtYXJnaW46MSU7XFxyXFxuICAgIGJvcmRlcjoxcHggc29saWQgd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgxLDIsMywwLjUpO1xcclxcbiAgICBwYWRkaW5nOjFlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XFxyXFxufVxcclxcbiNob21lLW1haW4taW1hZ2UgZGl2IHNwYW46aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgxLDIsMywwLjcpO1xcclxcbn1cXHJcXG5zcGFuI2NvbnRhY3QtYnRue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRlYWwgIWltcG9ydGFudDtcXHJcXG4gICAgLypib3JkZXI6MXB4IHNvbGlkIHRlYWwgIWltcG9ydGFudDsqL1xcclxcbn1cXHJcXG5zcGFuI2NvbnRhY3QtYnRuOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDU5NTkgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuI2hvbWUtbWFpbi1pbWFnZSBkaXYgc3BhbiBhe1xcclxcbiAgICBjb2xvcjp3aGl0ZTtcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBmYWRlRG93bntcXHJcXG4gICAgMCV7XFxyXFxuICAgICAgICBvcGFjaXR5OjA7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XFxyXFxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcXHJcXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJXtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcclxcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcclxcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcclxcbiAgICB9XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgZmFkZVVwe1xcclxcbiAgICAwJXtcXHJcXG4gICAgICAgIG9wYWNpdHk6MDtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xcclxcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXHJcXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCV7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXHJcXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXHJcXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4uZmFkZVVwe1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOmZhZGVVcDtcXHJcXG4gICAgLW1vei1hbmltYXRpb24tbmFtZTpmYWRlVXA7XFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlVXA7XFxyXFxufVxcclxcbi5mYWRlRG93bntcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYWRlRG93bjtcXHJcXG4gICAgLW1vei1hbmltYXRpb24tbmFtZTpmYWRlRG93bjtcXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6ZmFkZURvd247XFxyXFxufVxcclxcbi5hbmltYXRle1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcXHJcXG4gICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDEuNXM7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7XFxyXFxuICAgIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO1xcclxcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7XFxyXFxufVxcclxcbi5oZWFkZXItaW1ne1xcclxcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OjIwN3B4O1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbn1cXHJcXG4uZGVzY3JpcHRpb257XFxyXFxuICAgIGZvbnQtc2l6ZToxNnB4O3RleHQtYWxpZ246Y2VudGVyO2xpbmUtaGVpZ2h0OjEuOGVtO2NvbG9yOiM3MTcxNzE7XFxyXFxuICAgIG1pbi13aWR0aDo1MHB4O21heC13aWR0aDo3MDBweDttYXJnaW46MCBhdXRvO3BhZGRpbmc6MC41ZW0gMC44ZW0gNmVtIDAuOGVtO1xcclxcbn1cXHJcXG4uY29udGVudC1ib3gtbm8tcGFkZGluZ3tcXHJcXG5cXHRiYWNrZ3JvdW5kOndoaXRlO1xcclxcblxcdHBhZGRpbmctdG9wOjUuNWVtO3BhZGRpbmctYm90dG9tOjNlbTtcXHJcXG5cXHRwYWRkaW5nLWxlZnQ6MWVtO3BhZGRpbmctcmlnaHQ6MWVtO1xcclxcbn1cXHJcXG4jZm9ybXtcXHJcXG5cXHJcXG59XFxyXFxuZm9ybXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZWRlY2VhO21hcmdpbjowIGF1dG87d2lkdGg6MTAwJTsvKmNvbG9yOiM3MTcxNzEqLztib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxyXFxuICAgIHBhZGRpbmc6M2VtIDFlbSA1ZW0gMWVtO1xcclxcbn1cXHJcXG5mb3JtIGgze1xcclxcbiAgICBwYWRkaW5nOjA7bWFyZ2luOjAgMCAyLjVlbSAwO1xcclxcbn1cXHJcXG4uZm9ybS1pbnB1dHtcXHJcXG4gIHdpZHRoOjEwMCU7aGVpZ2h0OjNlbTtwYWRkaW5nLWxlZnQ6MmVtO2JvcmRlcjoxcHggc29saWQgd2hpdGU7Ym9yZGVyLXJhZGl1czo1cHg7XFxyXFxuICBtYXJnaW46MWVtIDAgMi41ZW0gMDtib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG4uZm9ybS10ZXh0LWlucHV0e1xcclxcbiAgYm9yZGVyOjFweCBzb2xpZCB3aGl0ZTtib3JkZXItcmFkaXVzOjVweDtwYWRkaW5nOjFlbSAyZW07XFxyXFxuICB3aWR0aDoxMDAlO2hlaWdodDoyMDBweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7bWFyZ2luOjFlbSAwIDIuNWVtIDA7XFxyXFxufVxcclxcbi5mb3JtLWJ0bntcXHJcXG4gIHBhZGRpbmc6MWVtIDJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6NXB4O1xcclxcbn1cXHJcXG4uc2VuZHtcXHJcXG4gIGNvbG9yOndoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gIGJvcmRlcjoxcHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcbi5zZW5kOmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjojMDA0NDczIDtcXHJcXG4gIGN1cnNvcjpwb2ludGVyO1xcclxcbn1cXHJcXG4ucmVzZXR7XFxyXFxuICAgYm9yZGVyOjFweCBzb2xpZCB3aGl0ZTtib3JkZXItcmFkaXVzOjVweDtwYWRkaW5nOjFlbSAyZW07IFxcclxcbn1cXHJcXG4ucmVzZXQ6aG92ZXJ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiM3MjcxNmI7XFxyXFxuICBjb2xvcjp3aGl0ZTtcXHJcXG4gIGN1cnNvcjpwb2ludGVyO1xcclxcbn1cXHJcXG4ucGF5cm9sbC1pY29uc3tcXHJcXG4gICAgcGFkZGluZy10b3A6Mi41ZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOjNlbTtcXHJcXG59XFxyXFxuLnBheXJvbGwtaWNvbnMgaW1ne1xcclxcbiAgICB3aWR0aDo4MHB4O1xcclxcbn1cXHJcXG4ucGF5cm9sbC1pY29ucyBkaXZ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLnBheXJvbGwtaWNvbnMgcHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6Ym9sZCAhaW1wb3J0YW50O3BhZGRpbmctdG9wOjJlbTtsaW5lLWhlaWdodDogMS41ZW07XFxyXFxufVxcclxcbiNtaWRkbGV7XFxyXFxuICAgIHBhZGRpbmc6NC41ZW0gMDtcXHJcXG59XFxyXFxuLmZvcm1zIGltZ3tcXHJcXG4gICAgd2lkdGg6MTAwcHg7aGVpZ2h0OiAxMDBweDtcXHJcXG59XFxyXFxuLmZvcm1zIHB7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc2l6ZToxNHB4O1xcclxcbiAgICBwYWRkaW5nOjFlbTtcXHJcXG4gICAgLypjb2xvcjojNzE3MTcxOyovXFxyXFxufVxcclxcbi5mb3JtcyBhe1xcclxcbiAgICAvKmNvbG9yOiM3MTcxNzE7Ki9cXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206MC41ZW07XFxyXFxufVxcclxcbi5mb3JtcyBhOmhvdmVye1xcclxcbiAgICBjb2xvcjp0ZWFsO1xcclxcbn1cXHJcXG4uZm9ybXN7XFxyXFxuICAgIC8qcGFkZGluZy10b3A6M2VtOyovXFxyXFxuICAgIHotaW5kZXg6MTtcXHJcXG59XFxyXFxuI2Zvcm0tYm90dG9tLXJvd3tcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNWVtO1xcclxcbn1cXHJcXG4uY2FsY3VsYXRvcntcXHJcXG4gICAgbWF4LXdpZHRoOjQwMHB4O2JhY2tncm91bmQtY29sb3I6dGVhbDtwYWRkaW5nOjJlbTtib3JkZXI6MXB4IHNvbGlkIHRlYWw7Ym9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgbWFyZ2luOjAgYXV0bzttYXJnaW4tYm90dG9tOjhlbTtcXHJcXG59XFxyXFxuLmNhbGN1bGF0b3IgcHtcXHJcXG4gICAgY29sb3I6d2hpdGU7XFxyXFxufVxcclxcbi5jYWxjdWxhdG9yIGlucHV0e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRlYWw7Ym9yZGVyOjA7Ym9yZGVyLWJvdHRvbToycHggc29saWQgd2hpdGU7Y29sb3I6d2hpdGU7cGFkZGluZzowLjVlbTtcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG59XFxyXFxuLmVycm9ye1xcclxcbiAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCByZWQgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuLmNhbGN1bGF0b3IgaW5wdXQ6OnBsYWNlaG9sZGVye1xcclxcbiAgICBjb2xvcjojZWVlZWVlO1xcclxcbn1cXHJcXG4uY2FsY3VsYXRvciBpbnB1dDpmb2N1cywgLmNhbGN1bGF0b3IgYnV0dG9uOmZvY3Vze1xcclxcbiAgICBvdXRsaW5lOm5vbmU7XFxyXFxufVxcclxcbi5jYWxjdWxhdG9yIGJ1dHRvbntcXHJcXG4gICAgY29sb3I6d2hpdGU7bWFyZ2luLXRvcDoyZW07YmFja2dyb3VuZC1jb2xvcjpncmV5O2N1cnNvcjpwb2ludGVyO3BhZGRpbmc6MC41ZW0gMWVtO1xcclxcbn1cXHJcXG4uY2FsY3VsYXRvciBidXR0b246aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6Izc1NzU3NTtcXHJcXG59XFxyXFxuLmNhbGN1bGF0b3IgYnV0dG9uI3Jlc2V0e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO2NvbG9yOmdyZXk7XFxyXFxufVxcclxcbi5jYWxjdWxhdG9yIGJ1dHRvbiNyZXNldDpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZTBlMGUwO1xcclxcbn1cXHJcXG4uc3ViaGVhZGVye1xcclxcbiAgICAvKmNvbG9yOiM3MTcxNzEqLztsZXR0ZXItc3BhY2luZzogMnB4O3RleHQtYWxpZ246IGNlbnRlcjttYXJnaW4tYm90dG9tOiAyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OjUwMDtmb250LXNpemU6MS41ZW07XFxyXFxufVxcclxcbmFydGljbGV7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206NGVtO1xcclxcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCl7Lyo1NTBweCovXFxyXFxuICAgIC5jb2x1bW4tMSxcXHJcXG4gICAgLmNvbHVtbi0yLFxcclxcbiAgICAuY29sdW1uLTMsXFxyXFxuICAgIC5jb2x1bW4tNCxcXHJcXG4gICAgLmNvbHVtbi01LFxcclxcbiAgICAuY29sdW1uLTYsXFxyXFxuICAgIC5jb2x1bW4tNyxcXHJcXG4gICAgLmNvbHVtbi04LFxcclxcbiAgICAuY29sdW1uLTksXFxyXFxuICAgIC5jb2x1bW4tMTAsXFxyXFxuICAgIC5jb2x1bW4tMTEsXFxyXFxuICAgIC5jb2x1bW4tMTIge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBmbG9hdDogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBbY2xhc3MqPWNvbHVtbl17XFxyXFxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgW2NsYXNzKj1jb2x1bW5dICsgW2NsYXNzKj1jb2x1bW5de1xcclxcbiAgICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NTAwcHgpe1xcclxcbiAgICAjaG9tZS1tYWluLWltYWdle1xcclxcbiAgICAgICAgaGVpZ2h0OjQ1MHB4O1xcclxcbiAgICB9XFxyXFxuICAgICNob21lLW1haW4taW1hZ2UgLm92ZXJsYXl7XFxyXFxuICAgICAgICBoZWlnaHQ6NDUwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgI2hvbWUtbWFpbi1pbWFnZSBoMXtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMCU7Zm9udC1zaXplOjIuMmVtO21hcmdpbi1sZWZ0OjEwJTttYXJnaW46MCAxMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgI2hvbWUtbWFpbi1pbWFnZSBoM3tcXHJcXG4gICAgICAgIC8qZm9udC13ZWlnaHQ6bGlnaHRlcjtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZToxN3B4OyovXFxyXFxuICAgICAgICBmb250LXNpemU6MTVweDtwYWRkaW5nOjA7bGluZS1oZWlnaHQ6MjRweDtsZXR0ZXItc3BhY2luZzogMC45cHg7dGV4dC1zaGFkb3c6MnB4IDAgYmxhY2s7XFxyXFxuICAgIH1cXHJcXG4gICAgI2hvbWUtbWFpbi1pbWFnZSBkaXZ7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOjEwJTtcXHJcXG4gICAgfVxcclxcbiAgICAjaG9tZS1tYWluLWltYWdlIGRpdiBzcGFue1xcclxcbiAgICAgICAgYm9yZGVyOjJweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgfVxcclxcbiAgICBzcGFuI2NvbnRhY3QtYnRue1xcclxcbiAgICAgICAgLypib3JkZXI6MnB4IHNvbGlkIHRlYWwgIWltcG9ydGFudDsqL1xcclxcbiAgICB9XFxyXFxuICAgIG5hdiBpbWd7XFxyXFxuICAgICAgICB3aWR0aDo4MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5oZWFkZXItaW1ne1xcclxcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICAgICAgICBoZWlnaHQ6MzAwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLm92ZXJsYXl7LypodWgqL1xcclxcbiAgICAgICAgaGVpZ2h0OjMwMHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo2MDBweCl7XFxyXFxuICAgIGZvcm17XFxyXFxuICAgICAgICBwYWRkaW5nOjNlbSA0ZW0gNWVtIDRlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY1MHB4KXtcXHJcXG4gICAgI2NvbnRhY3QtaW5mb3tcXHJcXG4gICAgICAgIHBhZGRpbmc6IDRlbSAxZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLnJvdy5zZXJ2aWNlc3tcXHJcXG4gICAgZGlzcGxheTogLW1zLWZsZXg7IGRpc3BsYXk6IC13ZWJraXQtZmxleDsgZGlzcGxheTpmbGV4O1xcclxcbiAgICB9XFxyXFxuICAgIC5zZXJ2aWNlLWJveC13cmFwcGVye1xcclxcbiAgICAgICAgcGFkZGluZzowIDJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAuY29tbXVuaWNhdGlvbi1yb3ctd3JhcHBlcntcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDVlbTttYXJnaW4tYm90dG9tOiA1ZW07LypkZXNrdG9wOiBtYXJnaW4tdG9wLG1hcmdpbi1ib3R0b206IDNlbSovXFxyXFxuICAgIH1cXHJcXG4gICAgLmlubmVyLXdyYXBwZXIuZmlyc3R7XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcXHJcXG4gICAgICAgIGJvcmRlci1yaWdodDoxcHggc29saWQgZ3JleTtcXHJcXG4gICAgfVxcclxcbiAgICAuaW5uZXItd3JhcHBlci5sYXN0e1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgLmlubmVyLXdyYXBwZXIgYXtcXHJcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOy8qbXNnIGFuZCBjYWxsIGZvciBkZXNrdG9wKi9cXHJcXG4gICAgfVxcclxcbiAgICAuaW5uZXItd3JhcHBlci5maXJzdCBhe1xcclxcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxyXFxuICAgIH1cXHJcXG4gICAgLmxvZ28tc3R5bGUgI2hlYWRlcntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgfVxcclxcbiAgICAubG9nby1zdHlsZSAjc3ViaGVhZGVye1xcclxcbiAgICAgICAgZm9udC1zaXplOjE3cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmxvZ28tc3R5bGUgI3N1YmhlYWRlci10d297XFxyXFxuICAgICAgICBmb250LXNpemU6MTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAgI21pZGRsZXtcXHJcXG4gICAgICAgIHBhZGRpbmc6MDtcXHJcXG4gICAgfVxcclxcbiAgICAucGF5cm9sbC1pY29ucyBwe1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6MS4yZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjcwMHB4KXtcXHJcXG4gICAgI2hvbWUtbWFpbi1pbWFnZXtcXHJcXG4gICAgICAgIGhlaWdodDo4MDBweDtcXHJcXG4gICAgfVxcclxcbiAgICAgI2hvbWUtbWFpbi1pbWFnZSAub3ZlcmxheXtcXHJcXG4gICAgICAgIGhlaWdodDo4MDBweDtcXHJcXG4gICAgfVxcclxcbiAgICAjaG9tZS1tYWluLWltYWdlIGgxe1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDE4JTtmb250LXNpemU6My41ZW07bWFyZ2luLWxlZnQ6MTAlO21hcmdpbjowIDEwJTtcXHJcXG4gICAgfVxcclxcbiAgICAjaG9tZS1tYWluLWltYWdlIGgze1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6bGlnaHRlcjtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZToxOHB4O1xcclxcbiAgICAgICAgcGFkZGluZzo1JSA4JSAwIDglO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6MzBweDtsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbiAgICB9XFxyXFxuICAgICNob21lLW1haW4taW1hZ2UgZGl2e1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDoxMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgI2hvbWUtbWFpbi1pbWFnZSBkaXYgc3BhbntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OjUwMDtcXHJcXG4gICAgfVxcclxcbiAgICBzcGFuI2NvbnRhY3QtYnRue1xcclxcbiAgICAgICAgLypib3JkZXI6MnB4IHNvbGlkIHRlYWwgIWltcG9ydGFudDsqL1xcclxcbiAgICB9XFxyXFxuICAgIC5oZWFkZXItaW1ne1xcclxcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICAgICAgICBoZWlnaHQ6NDAwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLm92ZXJsYXl7XFxyXFxuICAgICAgICBoZWlnaHQ6NDAwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmRlc2NyaXB0aW9ue1xcclxcbiAgICAgICAgZm9udC1zaXplOjIwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgZm9ybXtcXHJcXG4gICAgICAgIG1heC13aWR0aDo3MDBweDtcXHJcXG4gICAgfVxcclxcbiAgICAucGF5cm9sbC1pY29ucyBwe1xcclxcbiAgICAgICAgcGFkZGluZzowIDFlbTtcXHJcXG4gICAgfVxcclxcbiAgICAjaG9tZS1oZWFkZXJ7XFxyXFxuICAgICAgICBmb250LXNpemU6MjVweDtcXHJcXG4gICAgfVxcclxcbiAgIFxcclxcbn1cXHJcXG5cXHJcXG4vKmxhcmdlciBzY3JlZW5zIChlLmcuIGRlc2t0b3ApKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCl7XFxyXFxuICAgIFxcclxcbiAgICAjaG9tZS1tYWluLWltYWdlIGgxe1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6MTUlO1xcclxcbiAgICB9XFxyXFxuICAgICNob21lLW1haW4taW1hZ2UgaDN7XFxyXFxuICAgICAgICBwYWRkaW5nOjIlIDglIDAgOCU7XFxyXFxuICAgIH1cXHJcXG4gICAgI2hvbWUtbWFpbi1pbWFnZSBkaXZ7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOjYlO1xcclxcbiAgICB9XFxyXFxuICAgICNmb290ZXItY29udGFjdCBwe1xcclxcbiAgICAgICAgZm9udC1zaXplOjE4cHg7XFxyXFxuICAgICAgICBjb2xvcjpncmV5O1xcclxcbiAgICB9XFxyXFxuICAgIC5oZWFkZXJ7XFxyXFxuICAgICAgICBmb250LXNpemU6MjRweCAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxuICAgICNuYXZpZ2F0aW9ue1xcclxcbiAgICAgICAgZm9udC1zaXplOjE4cHg7XFxyXFxuICAgICAgICBjb2xvcjpncmV5O1xcclxcbiAgICB9XFxyXFxuICAgICNuYXZpZ2F0aW9uIGE6aG92ZXJ7XFxyXFxuICAgICAgICBjb2xvcjp3aGl0ZTtcXHJcXG4gICAgfVxcclxcbiAgICAjY29weXJpZ2h0e1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICB9XFxyXFxuXFx0I21lbnUtYnRue1xcclxcblxcdFxcdGRpc3BsYXk6bm9uZTtcXHJcXG5cXHR9XFxyXFxuXFx0I2Rlc2t0b3AtbWVudXtcXHJcXG5cXHRcXHRkaXNwbGF5OmJsb2NrO1xcclxcblxcdFxcdHRleHQtYWxpZ246Y2VudGVyO1xcclxcblxcdFxcdG1hcmdpbi10b3A6MWVtO1xcclxcblxcdH1cXHJcXG5cXHQjZGVza3RvcC1tZW51IGF7XFxyXFxuXFx0XFx0bWFyZ2luOjAgMi41ZW07XFxyXFxuXFx0XFx0cGFkZGluZy1ib3R0b206MC41ZW07XFxyXFxuXFx0fVxcclxcblxcdCNkZXNrdG9wLW1lbnUgYTpsaW5rLCAjZGVza3RvcC1tZW51IGE6dmlzaXRlZHtcXHJcXG5cXHRcXHRmb250LXNpemU6MTJweDtcXHJcXG5cXHRcXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0fVxcclxcblxcdCNkZXNrdG9wLW1lbnUgYTpob3ZlcntcXHJcXG5cXHRcXHRib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuXFx0fVxcclxcblxcdC5zZWxlY3RlZHtcXHJcXG5cXHRcXHRib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuXFx0fVxcclxcbiAgICAjaG9tZS1tYWluLWltYWdlIGRpdiBzcGFue1xcclxcbiAgICAgICAgYm9yZGVyOjIuNXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICB9XFxyXFxuICAgIHNwYW4jY29udGFjdC1idG4ge1xcclxcbiAgICAgICAgLypib3JkZXI6Mi41cHggc29saWQgdGVhbCAhaW1wb3J0YW50OyovXFxyXFxuICAgIH1cXHJcXG4gICAgI2hvbWUtbWFpbi1pbWFnZSBoM3tcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OmxpZ2h0ZXI7XFxyXFxuICAgICAgICBmb250LXNpemU6MjBweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OjM1cHg7bGV0dGVyLXNwYWNpbmc6IDFweDt0ZXh0LXNoYWRvdzowO1xcclxcbiAgICB9XFxyXFxuXFx0Lyppbm5lciB3cmFwcGVyIHN0dWZmKi9cXHJcXG5cXHQjZm9vdGVyLWNvbnRhY3Qge1xcclxcblxcdFxcdHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuXFx0fVxcclxcblxcdCNuYXZpZ2F0aW9uLCAjZm9vdGVyLWNvbnRhY3QsI2NvcHlyaWdodHtcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOjA7XFxyXFxuXFx0fVxcclxcblxcdCNob21lLW1haW4tcGlje1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdGhlaWdodDogMzB2dztcXHJcXG5cXHR9XFxyXFxuXFx0I3BheXJvbGwtY29udGVudHtcXHJcXG5cXHRcXHRwYWRkaW5nLWJvdHRvbTo1LjVlbTtcXHJcXG5cXHR9XFxyXFxuXFx0I2Zvcm1zIHVsLCAjcGF5cm9sbC1jb250ZW50e1xcclxcblxcdFxcdGZvbnQtc2l6ZToxZW07XFxyXFxuXFx0fVxcclxcblxcdC5wYWdlLWluZm8tYm94e1xcclxcblxcdFxcdGhlaWdodDogMjBlbTtcXHJcXG5cXHRcXHRwb3NpdGlvbjpzdGF0aWM7XFxyXFxuXFx0XFx0ei1pbmRleDotMjtcXHJcXG5cXHR9XFxyXFxuXFx0LnBhZ2UtaW5mby1ib3ggcHtcXHJcXG5cXHRcXHRmb250LXNpemU6Mi41ZW07XFxyXFxuXFx0XFx0ZGlzcGxheTpibG9jaztcXHJcXG5cXHRcXHRtYXJnaW4tdG9wOjJlbTtcXHJcXG5cXHR9XFxyXFxuICAgIC5wYWdlLWluZm8tdGFnIHNwYW57XFxyXFxuICAgICAgICBmb250LXNpemU6Mi41ZW07XFxyXFxuICAgIH1cXHJcXG5cXHQuY29udGVudC1ib3h7XFxyXFxuXFx0XFx0Zm9udC1zaXplOjIwcHg7XFxyXFxuXFx0XFx0cGFkZGluZzo1ZW0gNGVtIDVlbSA0ZW07XFxyXFxuXFx0XFx0bWFyZ2luOjAgYXV0bztcXHJcXG5cXHRcXHRwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG5cXHRcXHRtaW4td2lkdGg6MDttYXgtd2lkdGg6IDEwODBweDtcXHJcXG5cXHRcXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcdH1cXHJcXG5cXHQuY29udGVudC1ib3ggaDN7XFxyXFxuXFx0XFx0Zm9udC1zaXplOjEuNWVtO1xcclxcblxcdFxcdGZvbnQtd2VpZ2h0OmxpZ2h0ZXI7XFxyXFxuXFx0fVxcclxcblxcdGZvb3RlcntcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xcclxcblxcdFxcdHBhZGRpbmctdG9wOjdlbTtwYWRkaW5nLWJvdHRvbTo4ZW07XFxyXFxuXFx0fVxcclxcblxcdGZvb3RlciBhe1xcclxcblxcdFxcdGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG5cXHR9XFxyXFxuXFx0I2NvcHlyaWdodHtcXHJcXG5cXHRcXHRjb2xvcjogZ3JleTtcXHJcXG5cXHR9XFxyXFxuXFx0LmNvbnRlbnQtYm94Lm1haW4taW1ne1xcclxcblxcdFxcdG1hcmdpbjotMy43ZW0gM2VtIDNlbSAzZW07XFxyXFxuXFx0fVxcclxcblxcdFxcclxcblxcdC5jb250ZW50LWJveC5tYWluLWltZyBpbWcsIC5vdmVybGF5e1xcclxcblxcdFxcdGhlaWdodDo4MHZoO1xcclxcblxcdH1cXHJcXG5cXHQuY29udGVudC1ib3gubWFpbi1pbWcgcHtcXHJcXG5cXHRcXHRwYWRkaW5nOjAgMjAlO3RvcDo0MCU7XFxyXFxuXFx0fVxcclxcblxcdG5hdntcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7XFxyXFxuXFx0XFx0cGFkZGluZzowLjVlbSAwLjVlbSAxZW0gMC41ZW07XFxyXFxuICAgICAgICBoZWlnaHQ6NGVtO1xcclxcblxcdH1cXHJcXG5cXHQuaW1hZ2V7XFxyXFxuXFx0XFx0bWFyZ2luLXRvcDogLTQuMWVtO1xcclxcblxcdH1cXHJcXG5cXHQubG9nby1zdHlsZXtcXHJcXG5cXHRcXHR0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG5cXHRcXHRwYWRkaW5nOjFlbSAwO1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IzcyNzE2YjtcXHJcXG5cXHRcXHRjb2xvcjp3aGl0ZTtcXHJcXG5cXHR9XFxyXFxuXFx0I21haW4tdGV4dHtcXHJcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0XFx0cGFkZGluZzogNWVtIDVlbTtcXHJcXG5cXHRcXHRtYXgtd2lkdGg6NzAwcHg7XFxyXFxuXFx0XFx0bWFyZ2luOjAgYXV0bztcXHJcXG5cXHRcXHRsaW5lLWhlaWdodDogMS43ZW07XFxyXFxuXFx0XFx0Y29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxyXFxuXFx0XFx0Zm9udC1zaXplOjI0cHg7XFxyXFxuXFx0fVxcclxcbiAgICAuY29udGVudC1ib3guY29udGFjdHtcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOjZlbTtcXHJcXG4gICAgfVxcclxcbiAgICAjY29udGFjdC1wYWdlLWluZm8gaDN7XFxyXFxuICAgICAgICBmb250LXNpemU6MjhweDtcXHJcXG4gICAgfVxcclxcbiAgICAjbWVudS1idG4td3JhcHBlcntcXHJcXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAjbW9iaWxlLW1lbnV7XFxyXFxuICAgICAgICBkaXNwbGF5Om5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmxvZ28tc3R5bGUgI2hlYWRlcntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAubG9nby1zdHlsZSAjc3ViaGVhZGVye1xcclxcbiAgICAgICAgZm9udC1zaXplOjE4cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmxvZ28tc3R5bGUgI3N1YmhlYWRlci10d297XFxyXFxuICAgICAgICBmb250LXNpemU6MTJweDtcXHJcXG4gICAgfVxcclxcbiAgICAuaGVhZGVyLWltZ3tcXHJcXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbiAgICAgICAgaGVpZ2h0OjUxMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5vdmVybGF5e1xcclxcbiAgICAgICAgaGVpZ2h0OjUxMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5kZXNjcmlwdGlvbntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZToyMnB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5jb250ZW50LWJveC1uby1wYWRkaW5ne1xcclxcbiAgICBcXHRtaW4td2lkdGg6MDttYXgtd2lkdGg6MTA4MHB4O3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDttYXJnaW46MCBhdXRvO1xcclxcbiAgICB9XFxyXFxuICAgIC5jb250ZW50LWJveC5hYm91dHtcXHJcXG4gICAgICAgIHBhZGRpbmc6NWVtIDZlbSA4ZW0gNmVtO1xcclxcbiAgICB9XFxyXFxuICAgICNhY2NvdW50aW5nLXNlcnZpY2VzIHVse1xcclxcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBjaXJjbGU7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogM2VtO1xcclxcbiAgICAgICAgZm9udC1zaXplOjE4cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgI2FjY291bnRpbmctc2VydmljZXN7XFxyXFxuICAgICAgICBwYWRkaW5nOjNlbTtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OjEuNWVtO1xcclxcbiAgICAgICAgZm9udC1zaXplOjIwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLnBheXJvbGwtaWNvbnMgcHtcXHJcXG4gICAgICAgIHBhZGRpbmc6MCAyLjVlbTtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OjEuNWVtO1xcclxcbiAgICAgICAgZm9udC1zaXplOjE1cHg7XFxyXFxuICAgIH0gIFxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDI1NjBweCl7XFxyXFxuICAgICNob21lLW1haW4taW1hZ2UgaDF7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogMTAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNob21lLW1haW4taW1hZ2UgZGl2e1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDo0JTtcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIl0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY3VzdG9tLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jdXN0b20uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jdXN0b20uY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0ICcuL2N1c3RvbS5jc3MnO1xyXG4vKmltcG9ydCBfIGZyb20gJ2ZsZXhib3hncmlkJzsqL1xyXG5cclxubGV0IGluaXRpYWxOYXZDb2xvcjtcclxuXHJcbi8qZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwgZnVuY3Rpb24oKXtcclxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGl0bGVcIilbMF0uaW5uZXJIVE1MO1xyXG4gICAgbGV0IGN1cnJlbnRQYWdlO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNFOEU4RTNcIjtcclxuICAgIGlmKHRpdGxlLmluY2x1ZGVzKFwiaG9tZVwiKSl7XHJcbiAgICAgICAgY3VycmVudFBhZ2UgPSBcIm5hdi1ob21lXCJcclxuICAgICAgICBzZXRXaGl0ZUJhY2tncm91bmQoKTtcclxuICAgIH1lbHNlIGlmKHRpdGxlLmluY2x1ZGVzKFwiYWJvdXRcIikpe1xyXG4gICAgICAgIGN1cnJlbnRQYWdlID0gXCJuYXYtYWJvdXRcIlxyXG4gICAgfWVsc2UgaWYodGl0bGUuaW5jbHVkZXMoXCJjb250YWN0XCIpKXtcclxuICAgICAgICBjdXJyZW50UGFnZSA9IFwibmF2LWNvbnRhY3RcIlxyXG4gICAgfWVsc2UgaWYodGl0bGUuaW5jbHVkZXMoXCJyZXNvdXJjZXNcIikpe1xyXG4gICAgICAgIGN1cnJlbnRQYWdlID0gXCJuYXYtcmVzb3VyY2VzXCJcclxuICAgIH1lbHNlIGlmKHRpdGxlLmluY2x1ZGVzKFwicGF5cm9sbFwiKSl7XHJcbiAgICAgICAgY3VycmVudFBhZ2UgPSBcIm5hdi1wYXlyb2xsXCI7XHJcbiAgICB9ZWxzZSBpZih0aXRsZS5pbmNsdWRlcyhcInNlcnZpY2VzXCIpKXtcclxuICAgICAgICBjdXJyZW50UGFnZSA9IFwibmF2LXNlcnZpY2VzXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYodGl0bGUuaW5jbHVkZXMoXCJob21lXCIpKXtcclxuICAgICAgICBpbml0aWFsTmF2Q29sb3IgPSBcInRyYW5zcGFyZW50XCI7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBpbml0aWFsTmF2Q29sb3IgPSBcInJnYmEoMCwwLDAsMC43KVwiXHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbmF2JylbMF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gaW5pdGlhbE5hdkNvbG9yO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY3VycmVudFBhZ2UpLmNsYXNzTmFtZSA9IFwic2VsZWN0ZWRcIjtcclxufSlcclxuKi9cclxuXHJcbmZ1bmN0aW9uIHNldFdoaXRlQmFja2dyb3VuZCgpe1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XHJcbn1cclxuXHJcbmxldCB0aW1lciA9IG51bGw7XHJcblxyXG5sZXQgeCA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogMTAyNHB4KVwiKTsvKm1pbi13aWR0aDogMTAyNHB4Ki9cclxuXHJcbmZ1bmN0aW9uIHNldE5hdmJhcih4KXtcclxuICAgIG1vYmlsZU5hdmJhcigpO1xyXG59XHJcbnNldE5hdmJhcih4KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbihlKXtcclxuICAgIHNldE5hdmJhcih4KTtcclxufSk7XHJcblxyXG5cclxuZnVuY3Rpb24gZGVza3RvcE5hdmJhcigpe1xyXG4gICAgbGV0IG5hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCduYXYnKVswXTsvKiovXHJcbiAgICBuYXZiYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwicmdiYSgwLDAsMCwwLjcpXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vYmlsZU5hdmJhcigpe1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgXHJcbiAgICAgICAgbGV0IG5hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCduYXYnKVswXTtcclxuICAgICAgICBpZih3aW5kb3cuc2Nyb2xsWSA+MTApe1xyXG4gICAgICAgICAgICBuYXZiYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwicmdiYSgwLDAsMCwwLjcpXCI7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG5hdmJhci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9IGluaXRpYWxOYXZDb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlKCl7XHJcbiAgICBsZXQgbWVudUJ0bkRpdnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtYnRuXCIpLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZGl2XCIpO1xyXG4gICAgbGV0IGRpdiA9IG1lbnVCdG5EaXZzWzBdO1xyXG4gICAgbGV0IGRpdjIgPSBtZW51QnRuRGl2c1sxXTtcclxuICAgIGlmKGRpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJsZWFuLXJpZ2h0XCIpKXsvL2Nsb3NlIG1lbnVcclxuICAgICAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZShcImxlYW4tcmlnaHRcIik7XHJcbiAgICAgICAgZGl2Mi5jbGFzc0xpc3QucmVtb3ZlKFwibGVhbi1sZWZ0XCIpO1xyXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwidG9wLXBhcmFsbGVsXCIpO1xyXG4gICAgICAgIGRpdjIuY2xhc3NMaXN0LmFkZChcImJvdHRvbS1wYXJhbGxlbFwiKTtcclxuICAgICAgICBjbG9zZU5hdigpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJ0b3AtcGFyYWxsZWxcIik7XHJcbiAgICAgICAgZGl2Mi5jbGFzc0xpc3QucmVtb3ZlKFwiYm90dG9tLXBhcmFsbGVsXCIpO1xyXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwibGVhbi1yaWdodFwiKTtcclxuICAgICAgICBkaXYyLmNsYXNzTGlzdC5hZGQoXCJsZWFuLWxlZnRcIik7XHJcbiAgICAgICAgb3Blbk5hdigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBvcGVuTmF2KCl7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vYmlsZS1tZW51XCIpLnN0eWxlLndpZHRoID0gXCIyNTBweFwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZU5hdigpe1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2JpbGUtbWVudVwiKS5zdHlsZS53aWR0aCA9IFwiMFwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYWxjTW9ydGdhZ2VQYXltZW50KHAsaSx5KXtcclxuICAgIGxldCByID0gKGkvMTIwMCk7XHJcbiAgICBsZXQgbiA9IHkqMTI7XHJcbiAgICBsZXQgeCA9IE1hdGgucG93KDErcixuKTtcclxuICAgIGxldCBtID0gcCoocip4Lyh4LTEpKTtcclxuICAgIHJldHVybiBmb3JtYXROdW0oTWF0aC5yb3VuZChtKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGNUb3RhbE1vcnRnYWdlKHAsaSx5KXtcclxuICAgIGxldCByID0gKGkvMTIwMCk7XHJcbiAgICBsZXQgbiA9IHkqMTI7XHJcbiAgICBsZXQgeCA9IE1hdGgucG93KDErcixuKTtcclxuICAgIGxldCBtID0gcCoocip4Lyh4LTEpKTtcclxuICAgIHJldHVybiBmb3JtYXROdW0oTWF0aC5yb3VuZChtKm4pKTtcclxufVxyXG5mdW5jdGlvbiB2YWxpZGF0ZUlucHV0KCl7XHJcbiAgICBsZXQgbUEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vcnRnYWdlLWFtb3VudFwiKTtcclxuICAgIGxldCBpUiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW50ZXJlc3QtcmF0ZVwiKTtcclxuICAgIGxldCBtUCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9ydGdhZ2UtcGVyaW9kXCIpO1xyXG4gICAgbGV0IHAgPSBwYXJzZUZsb2F0KG1BLnZhbHVlKTtcclxuICAgIGxldCBpID0gcGFyc2VGbG9hdChpUi52YWx1ZSk7XHJcbiAgICBsZXQgeSA9IHBhcnNlSW50KG1QLnZhbHVlKTtcclxuICAgIGlmKHA+MCAmJiBpPj0wICYmIHk+MCl7XHJcbiAgICAgICAgcmVtb3ZlRXJyb3JDbGFzcyhtQSxpUixtUCk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBpZihwPD0wIHx8ICFwKXtcclxuICAgICAgICAgICAgbUEuY2xhc3NOYW1lID0gXCJlcnJvclwiO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBtQS5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpPDAgfHwgIWkpe1xyXG4gICAgICAgICAgICBpUi5jbGFzc05hbWUgPSBcImVycm9yXCI7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlSLmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHk8PTAgfHwgIXkpe1xyXG4gICAgICAgICAgICBtUC5jbGFzc05hbWUgPSBcImVycm9yXCI7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG1QLmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRXJyb3JDbGFzcyhtQSxpUixtUCl7XHJcbiAgICBpZihtQS5jbGFzc0xpc3QuY29udGFpbnMoXCJlcnJvclwiKSl7XHJcbiAgICAgICAgbUEuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgIH1cclxuICAgIGlmKGlSLmNsYXNzTGlzdC5jb250YWlucyhcImVycm9yXCIpKXtcclxuICAgICAgICBpUi5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgfVxyXG4gICAgaWYobVAuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZXJyb3JcIikpe1xyXG4gICAgICAgIG1QLmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVudGVyTW9ydGdhZ2VJbmZvKCl7XHJcbiAgICBpZih2YWxpZGF0ZUlucHV0KCkpe1xyXG4gICAgICAgIGxldCBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb3J0Z2FnZS1hbW91bnRcIikudmFsdWU7XHJcbiAgICAgICAgbGV0IGkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImludGVyZXN0LXJhdGVcIikudmFsdWU7XHJcbiAgICAgICAgbGV0IHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vcnRnYWdlLXBlcmlvZFwiKS52YWx1ZTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vbnRobHktcGF5bWVudFwiKS5pbm5lckhUTUw9Y2FsY01vcnRnYWdlUGF5bWVudChwLGkseSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3RhbC1tb3J0Z2FnZVwiKS5pbm5lckhUTUwgPSBjYWxjVG90YWxNb3J0Z2FnZShwLGkseSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0Q2FsY3VsYXRvcigpe1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb3J0Z2FnZS1hbW91bnRcIikudmFsdWU9XCJcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW50ZXJlc3QtcmF0ZVwiKS52YWx1ZT1cIlwiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb3J0Z2FnZS1wZXJpb2RcIikudmFsdWU9XCJcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0TnVtKHgpe1xyXG4gICAgcmV0dXJuIFwiJCBcIit4LnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZyxcIixcIik7XHJcbn1cclxuXHJcblxyXG53aW5kb3cudG9nZ2xlPSB0b2dnbGU7XHJcbndpbmRvdy5lbnRlck1vcnRnYWdlSW5mbyA9IGVudGVyTW9ydGdhZ2VJbmZvO1xyXG53aW5kb3cucmVzZXRDYWxjdWxhdG9yID0gcmVzZXRDYWxjdWxhdG9yO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9