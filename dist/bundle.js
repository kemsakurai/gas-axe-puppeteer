function onOpen() {
}
function initialize() {
}
function setURL() {
}
function runAxePuppeteer() {
}
function createSchedule() {
}
function updateSchedule() {
}/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/functions/createSchedule.ts":
/*!*****************************************!*\
  !*** ./src/functions/createSchedule.ts ***!
  \*****************************************/
/*! exports provided: createSchedule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSchedule", function() { return createSchedule; });
/* harmony import */ var _libs_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/i18n */ "./src/libs/i18n.ts");

const createSchedule = () => {
    const htmlOutput = HtmlService.createHtmlOutputFromFile("index")
        .setWidth(600)
        .setHeight(100);
    SpreadsheetApp.getUi().showModalDialog(htmlOutput, _libs_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t("createSchedule"));
};


/***/ }),

/***/ "./src/functions/initialize.ts":
/*!*************************************!*\
  !*** ./src/functions/initialize.ts ***!
  \*************************************/
/*! exports provided: initialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony import */ var _libs_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/Utils */ "./src/libs/Utils.ts");

const initialize = () => {
    console.info("initialize start");
    const recordSheetName = _libs_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].getRecordsSheetName();
    let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(recordSheetName);
    if (!sheet) {
        sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet();
        sheet.setName(recordSheetName);
        const range = sheet.getRange("A1:J1");
        range.setBackground("yellow");
        const headers = [];
        headers.push("TimeStamp");
        headers.push("Url");
        headers.push("Id");
        headers.push("Impact");
        headers.push("Tags");
        headers.push("Description");
        headers.push("Help");
        headers.push("HelpUrl");
        headers.push("Node.html");
        headers.push("Node.failureSummary");
        range.setValues([headers]);
    }
    console.info("initialize end");
};


/***/ }),

/***/ "./src/functions/runAxePuppeteer.ts":
/*!******************************************!*\
  !*** ./src/functions/runAxePuppeteer.ts ***!
  \******************************************/
/*! exports provided: runAxePuppeteer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runAxePuppeteer", function() { return runAxePuppeteer; });
/* harmony import */ var _libs_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/Utils */ "./src/libs/Utils.ts");

class Row {
    constructor(url, timestamp, id, impact, tags, description, help, helpUrl, nodeHtml, nodeFailureSummary) {
        this.url = url;
        this.timestamp = timestamp;
        this.id = id;
        this.impact = impact;
        this.tags = tags;
        this.description = description;
        this.help = help;
        this.helpUrl = helpUrl;
        this.nodeHtml = nodeHtml;
        this.nodeFailureSummary = nodeFailureSummary;
    }
    toArray() {
        return [
            this.url,
            this.timestamp,
            this.id,
            this.impact,
            this.tags.join(","),
            this.description,
            this.help,
            this.helpUrl,
            this.nodeHtml,
            this.nodeFailureSummary
        ];
    }
}
const runAxePuppeteer = () => {
    console.info("runAxePuppeteer start");
    // Get Value from property
    const key = _libs_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].getFirebaseFunctionsKey();
    const endPointURL = _libs_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].getEndPointURL();
    const targetURL = _libs_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].getTargetURL();
    // create KEY
    // eslint-disable-next-line @typescript-eslint/camelcase
    const headers = {
        Authorization: "Bearer " + key
    };
    // create option
    // eslint-disable-next-line @typescript-eslint/camelcase
    const options = {
        method: "get",
        contentType: "application/json",
        headers: headers
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const json = _libs_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].fetchAsJson(endPointURL + "?url=" + targetURL, options);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rows = [];
    for (const violation of json["violations"]) {
        for (const node of violation["nodes"]) {
            const row = new Row(json["url"], json["timestamp"], violation["id"], violation["impact"], violation["tags"], violation["description"], violation["help"], violation["helpUrl"], node["html"], node["failureSummary"]);
            rows.push(row.toArray());
        }
    }
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(_libs_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].getRecordsSheetName());
    const range = sheet.getRange(sheet.getLastRow() + 1, 1, rows.length, rows[0].length);
    range.setValues(rows);
    console.info("runAxePuppeteer end");
};


/***/ }),

/***/ "./src/functions/setURL.ts":
/*!*********************************!*\
  !*** ./src/functions/setURL.ts ***!
  \*********************************/
/*! exports provided: setURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setURL", function() { return setURL; });
/* harmony import */ var _libs_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/Utils */ "./src/libs/Utils.ts");
/* harmony import */ var _libs_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/i18n */ "./src/libs/i18n.ts");


function isPromptCloseOrEmptyInput(axePupeteetEndPointURL, response, ui) {
    return (axePupeteetEndPointURL == "" ||
        response.getSelectedButton() == ui.Button.CLOSE);
}
const setURL = () => {
    const ui = SpreadsheetApp.getUi();
    let response = ui.prompt(_libs_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t("setAxePupeteetEndPointURL"));
    const axePupeteetEndPointURL = response.getResponseText();
    if (isPromptCloseOrEmptyInput(axePupeteetEndPointURL, response, ui)) {
        return;
    }
    if (!_libs_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].isValidURL(axePupeteetEndPointURL)) {
        ui.alert(_libs_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t("noticeUnValidURL"));
        return;
    }
    _libs_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].setEndPointURL(axePupeteetEndPointURL);
    response = ui.prompt(_libs_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t("showTargetUrl"));
    const targetUrl = response.getResponseText();
    if (isPromptCloseOrEmptyInput(targetUrl, response, ui)) {
        return;
    }
    if (!_libs_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].isValidURL(targetUrl)) {
        ui.alert(_libs_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t("noticeUnValidURL"));
        return;
    }
    _libs_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].setTargetURL(targetUrl);
    ui.alert(_libs_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t("showSetURL"));
};


/***/ }),

/***/ "./src/functions/updateSchedule.ts":
/*!*****************************************!*\
  !*** ./src/functions/updateSchedule.ts ***!
  \*****************************************/
/*! exports provided: updateSchedule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSchedule", function() { return updateSchedule; });
const KEY = "trigger";
const FUNCTION_NAME = "runAxePuppeteer";
const weekDay = [
    ScriptApp.WeekDay.MONDAY,
    ScriptApp.WeekDay.TUESDAY,
    ScriptApp.WeekDay.WEDNESDAY,
    ScriptApp.WeekDay.THURSDAY,
    ScriptApp.WeekDay.FRIDAY,
    ScriptApp.WeekDay.SATURDAY,
    ScriptApp.WeekDay.SUNDAY
];
//serializeArrayをjsonに変換する
function toJson_(formData) {
    const result = {};
    let automateValue = 0;
    formData.forEach(function (elem) {
        if (elem["name"] == "automate" && elem["value"] == 1) {
            automateValue = 1;
        }
        result[elem.name] = elem.value;
    });
    result["automate"] = automateValue;
    const data = {
        automate: result["automate"],
        interval: result["interval"],
        hourOfDay: result["hourOfDay"],
        dayOfWeek: result["dayOfWeek"],
        dayOfMonth: result["dayOfMonth"],
        minitueOfHour: result["minitueOfHour"]
    };
    return data;
}
//指定したkeyに保存されているトリガーIDを使って、トリガーを削除する
function deleteTrigger_() {
    const triggerId = PropertiesService.getScriptProperties().getProperty(KEY);
    if (!triggerId)
        return;
    ScriptApp.getProjectTriggers()
        .filter(function (trigger) {
        return trigger.getUniqueId() == triggerId;
    })
        .forEach(function (trigger) {
        ScriptApp.deleteTrigger(trigger);
    });
    PropertiesService.getScriptProperties().deleteProperty(KEY);
}
//トリガーを発行
function setTrigger_(triggerId) {
    //あとでトリガーを削除するためにトリガーIDを保存しておく
    PropertiesService.getScriptProperties().setProperty(KEY, triggerId);
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types
const updateSchedule = (formData) => {
    const data = toJson_(formData);
    Logger.log(data);
    if (data != null) {
        if (data.automate == 0) {
            deleteTrigger_();
        }
        else if (data.automate == 1) {
            if (data.interval == 0) {
                deleteTrigger_();
                const triggerId = ScriptApp.newTrigger(FUNCTION_NAME)
                    .timeBased()
                    .everyMinutes(data.minitueOfHour)
                    .create()
                    .getUniqueId();
                setTrigger_(triggerId);
            }
            else if (data.interval == 1) {
                deleteTrigger_();
                const triggerId = ScriptApp.newTrigger(FUNCTION_NAME)
                    .timeBased()
                    .everyHours(1)
                    .create()
                    .getUniqueId();
                setTrigger_(triggerId);
            }
            else if (data.interval == 2) {
                deleteTrigger_();
                const triggerId = ScriptApp.newTrigger(FUNCTION_NAME)
                    .timeBased()
                    .atHour(data.hourOfDay)
                    .everyDays(1)
                    .inTimezone(Session.getTimeZone())
                    .create()
                    .getUniqueId();
                setTrigger_(triggerId);
            }
            else if (data.interval == 3) {
                deleteTrigger_();
                const triggerId = ScriptApp.newTrigger(FUNCTION_NAME)
                    .timeBased()
                    .onWeekDay(weekDay[data.dayOfWeek])
                    .atHour(data.hourOfDay)
                    .nearMinute(30)
                    .create()
                    .getUniqueId();
                setTrigger_(triggerId);
            }
            else if (data.interval == 4) {
                deleteTrigger_();
                const triggerId = ScriptApp.newTrigger(FUNCTION_NAME)
                    .timeBased()
                    .onMonthDay(data.dayOfMonth)
                    .atHour(data.hourOfDay)
                    .nearMinute(30)
                    .create()
                    .getUniqueId();
                setTrigger_(triggerId);
            }
            else {
                throw new Error("Illegal Argments...");
            }
        }
    }
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _libs_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/i18n */ "./src/libs/i18n.ts");
/* harmony import */ var _functions_initialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/initialize */ "./src/functions/initialize.ts");
/* harmony import */ var _functions_updateSchedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/updateSchedule */ "./src/functions/updateSchedule.ts");
/* harmony import */ var _functions_createSchedule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/createSchedule */ "./src/functions/createSchedule.ts");
/* harmony import */ var _functions_runAxePuppeteer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/runAxePuppeteer */ "./src/functions/runAxePuppeteer.ts");
/* harmony import */ var _functions_setURL__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/setURL */ "./src/functions/setURL.ts");






function onOpen() {
    const ui = SpreadsheetApp.getUi();
    const menu = ui.createMenu("gas-axePuppeteerFirebaseFunctionsClient");
    menu.addSubMenu(ui.createMenu(_libs_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t("initialSetting"))
        .addItem(_libs_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t("createConfigSheets"), "initialize")
        .addItem(_libs_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t("settingURL"), "setURL"))
        .addSeparator()
        .addItem(_libs_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t("execution"), "runAxePuppeteer")
        .addItem(_libs_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t("scheduleExecution"), "createSchedule")
        .addToUi();
}
global.onOpen = onOpen;
global.initialize = _functions_initialize__WEBPACK_IMPORTED_MODULE_1__["initialize"];
global.setURL = _functions_setURL__WEBPACK_IMPORTED_MODULE_5__["setURL"];
global.runAxePuppeteer = _functions_runAxePuppeteer__WEBPACK_IMPORTED_MODULE_4__["runAxePuppeteer"];
global.createSchedule = _functions_createSchedule__WEBPACK_IMPORTED_MODULE_3__["createSchedule"];
global.updateSchedule = _functions_updateSchedule__WEBPACK_IMPORTED_MODULE_2__["updateSchedule"];

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/libs/Utils.ts":
/*!***************************!*\
  !*** ./src/libs/Utils.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Utils; });
class Utils {
    static fetchAsJson(url, 
    // eslint-disable-next-line @typescript-eslint/camelcase
    requestOptions
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) {
        const response = UrlFetchApp.fetch(url, requestOptions);
        return JSON.parse(response.getContentText());
    }
    /**
     * truncate
     * @param value
     * @param length
     */
    static truncate(value, length) {
        if (value.length <= length) {
            return value;
        }
        return value.substring(0, length) + "...";
    }
    /**
     * setEndPointURL
     * @param url
     */
    static setEndPointURL(url) {
        PropertiesService.getScriptProperties().setProperty("END_POINT_URL", url);
    }
    /**
     * getEndPointURL
     */
    static getEndPointURL() {
        return PropertiesService.getScriptProperties().getProperty("END_POINT_URL");
    }
    /**
     * getFirebaseFunctionsKey
     */
    static getFirebaseFunctionsKey() {
        return PropertiesService.getScriptProperties().getProperty("FIREBASE_FUNCTIONS_KEY");
    }
    /**
     * setFirebaseFunctionsKey
     * @param key
     */
    static setFirebaseFunctionsKey(key) {
        PropertiesService.getScriptProperties().setProperty("FIREBASE_FUNCTIONS_KEY", key);
    }
    /**
     * getTargetURL
     */
    static getTargetURL() {
        return PropertiesService.getScriptProperties().getProperty("TARGET_URL");
    }
    /**
     * setTargetURL
     * @param key
     */
    static setTargetURL(key) {
        PropertiesService.getScriptProperties().setProperty("TARGET_URL", key);
    }
    /**
     * checkNotEmpty
     */
    static checkNotEmpty(value, message) {
        if (typeof value === "undefined" || value == "") {
            throw new Error(message);
        }
    }
    /**
     * getRecordsSheetName
     */
    static getRecordsSheetName() {
        return "Records";
    }
    /**
     * isValidURL
     * @param str
     */
    static isValidURL(str) {
        const pattern = new RegExp("^((https?:)?\\/\\/)?" + // protocol
            "(?:\\S+(?::\\S*)?@)?" + // authentication
            "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
            "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
            "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
            "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
            "(\\#[-a-z\\d_]*)?$", "i"); // fragment locater
        if (!pattern.test(str)) {
            return false;
        }
        else {
            return true;
        }
    }
}


/***/ }),

/***/ "./src/libs/i18n.ts":
/*!**************************!*\
  !*** ./src/libs/i18n.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return I18n; });
/* harmony import */ var _locales_en_translation_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../locales/en/translation.json */ "./src/locales/en/translation.json");
var _locales_en_translation_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../locales/en/translation.json */ "./src/locales/en/translation.json", 1);
/* harmony import */ var _locales_ja_translation_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locales/ja/translation.json */ "./src/locales/ja/translation.json");
var _locales_ja_translation_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../locales/ja/translation.json */ "./src/locales/ja/translation.json", 1);


/**
 * Translations
 */
class Translations {
    /** プライベートコンストラクタ */
    constructor() {
        this.map = {
            en: _locales_en_translation_json__WEBPACK_IMPORTED_MODULE_0___namespace,
            ja: _locales_ja_translation_json__WEBPACK_IMPORTED_MODULE_1___namespace
        };
    }
    get(lang, key) {
        return this.map[lang]["default"][key];
    }
    /** インスタンスの取得 */
    static get instance() {
        // _inctanceが存在しない場合に、new Hoge()を実行する。
        if (!this._instance) {
            this._instance = new Translations();
        }
        // 生成済みのインスタンスを返す
        return this._instance;
    }
}
class I18n {
    static t(key) {
        const lang = Session.getActiveUserLocale();
        const message = Translations.instance.get(lang, key);
        if (typeof message === "undefined") {
            const failoverMessage = Translations.instance.get("ja", key);
            if (typeof failoverMessage === "undefined") {
                throw new Error("Message undefined.. key = " + key);
            }
            return failoverMessage;
        }
        return message;
    }
}


/***/ }),

/***/ "./src/locales/en/translation.json":
/*!*****************************************!*\
  !*** ./src/locales/en/translation.json ***!
  \*****************************************/
/*! exports provided: initialSetting, gettingStart, createConfigSheets, settingURL, execution, scheduleExecution, setAxePupeteetEndPointURL, noticeUnValidURL, showSetURL, showTargetUrl, createSchedule, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"initialSetting\":\"Initial setting\",\"gettingStart\":\"Getting start\",\"createConfigSheets\":\"Create config sheets\",\"settingURL\":\"Setting URL\",\"execution\":\"Execution\",\"scheduleExecution\":\"Schedule Execution\",\"setAxePupeteetEndPointURL\":\"Set Axe Pupeteet End Point URL\",\"noticeUnValidURL\":\"The URL format is invalid.\",\"showSetURL\":\"The specified URL has been set.\",\"showTargetUrl\":\"Please set the URL to be verified.\",\"createSchedule\":\"Create schedule\"}");

/***/ }),

/***/ "./src/locales/ja/translation.json":
/*!*****************************************!*\
  !*** ./src/locales/ja/translation.json ***!
  \*****************************************/
/*! exports provided: initialSetting, gettingStart, createConfigSheets, settingURL, execution, scheduleExecution, setAxePupeteetEndPointURL, noticeUnValidURL, showSetURL, showTargetUrl, createSchedule, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"initialSetting\":\"設定\",\"gettingStart\":\"初期設定\",\"createConfigSheets\":\"設定シート作成\",\"settingURL\":\"URL設定\",\"execution\":\"実行\",\"scheduleExecution\":\"スケジュール実行\",\"setAxePupeteetEndPointURL\":\"Axe PuppeteerエンドポイントURLを設定してください\",\"noticeUnValidURL\":\"URLの形式が不正です。\",\"showSetURL\":\"指定したURLを設定しました。\",\"showTargetUrl\":\"検証対象のURLを設定してください。\",\"createSchedule\":\"スケジュール作成\"}");

/***/ })

/******/ });