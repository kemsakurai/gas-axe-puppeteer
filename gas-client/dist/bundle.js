function onOpen() {
}
function openUrlSettings() {
}
function getScriptProperties() {
}
function saveScriptProperties() {
}
function initialize() {
}
function runAxePuppeteer() {
}
function createSchedule() {
}
function updateSchedule() {
}/*! For license information please see bundle.js.LICENSE.txt */
!function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        module.l = !0, module.exports;
    }
    __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function(exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            enumerable: !0,
            get: getter
        });
    }, __webpack_require__.r = function(exports) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(exports, "__esModule", {
            value: !0
        });
    }, __webpack_require__.t = function(value, mode) {
        if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
        if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
            enumerable: !0,
            value
        }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    }, __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        return __webpack_require__.d(getter, "a", getter), getter;
    }, __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = "./src/index.ts");
}({
    "./node_modules/webpack/buildin/global.js": function(module, exports) {
        var g;
        g = function() {
            return this;
        }();
        try {
            g = g || new Function("return this")();
        } catch (e) {
            "object" == typeof window && (g = window);
        }
        module.exports = g;
    },
    "./src/functions/createSchedule.ts": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, "createSchedule", (function() {
            return createSchedule;
        }));
        var _libs_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/libs/i18n.ts");
        const createSchedule = () => {
            const htmlOutput = HtmlService.createHtmlOutputFromFile("index").setWidth(600).setHeight(100);
            SpreadsheetApp.getUi().showModalDialog(htmlOutput, _libs_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t("createSchedule"));
        };
    },
    "./src/functions/getScriptsProperties.ts": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, "getScriptProperties", (function() {
            return getScriptProperties;
        }));
        var _libs_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/libs/Utils.ts");
        const getScriptProperties = () => ({
            firebaseFunctionsKey: _libs_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].getFirebaseFunctionsKey(),
            targetURL: _libs_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].getTargetURL(),
            endPointURL: _libs_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].getEndPointURL()
        });
    },
    "./src/functions/initialize.ts": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, "initialize", (function() {
            return initialize;
        }));
        var _libs_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/libs/Utils.ts");
        const initialize = () => {
            console.info("initialize start");
            const recordSheetName = _libs_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].getRecordsSheetName();
            let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(recordSheetName);
            if (!sheet) {
                sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(), sheet.setName(recordSheetName);
                const range = sheet.getRange("A1:J1");
                range.setBackground("yellow");
                const headers = [];
                headers.push("TimeStamp"), headers.push("Url"), headers.push("Id"), headers.push("Impact"), 
                headers.push("Tags"), headers.push("Description"), headers.push("Help"), headers.push("HelpUrl"), 
                headers.push("Node.html"), headers.push("Node.failureSummary"), range.setValues([ headers ]);
            }
            const aggregationsSheetName = _libs_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].getAggregationsSheetName();
            sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(aggregationsSheetName), 
            sheet || (sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(), sheet.setName(aggregationsSheetName), 
            sheet.getRange("A1:A1").setFormula("=QUERY(Records!A:J,\"select A, B, count(B) where A <> '' group by A, B\",true)"), 
            sheet.getRange("A1:C1").setBackground("yellow")), console.info("initialize end");
        };
    },
    "./src/functions/onOpen.ts": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, "onOpen", (function() {
            return onOpen;
        })), __webpack_require__.d(__webpack_exports__, "openUrlSettings", (function() {
            return openUrlSettings;
        }));
        var _libs_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/libs/i18n.ts");
        const onOpen = () => {
            const ui = SpreadsheetApp.getUi();
            ui.createMenu("gas-axePuppeteerFirebaseFunctionsClient").addSubMenu(ui.createMenu(_libs_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t("initialSetting")).addItem(_libs_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t("createConfigSheets"), "initialize").addItem(_libs_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t("settingURL"), "openUrlSettings")).addSeparator().addItem(_libs_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t("execution"), "runAxePuppeteer").addItem(_libs_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t("scheduleExecution"), "createSchedule").addToUi();
        }, openUrlSettings = () => {
            const html = HtmlService.createHtmlOutputFromFile("sidebar").setWidth(600).setHeight(600);
            SpreadsheetApp.getUi().showModalDialog(html, _libs_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t("modal.title.urlSettings"));
        };
    },
    "./src/functions/runAxePuppeteer.ts": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, "runAxePuppeteer", (function() {
            return runAxePuppeteer;
        }));
        var _libs_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/libs/Utils.ts");
        class Row {
            constructor(url, timestamp, id, impact, tags, description, help, helpUrl, nodeHtml, nodeFailureSummary) {
                this.url = url, this.timestamp = timestamp, this.id = id, this.impact = impact, 
                this.tags = tags, this.description = description, this.help = help, this.helpUrl = helpUrl, 
                this.nodeHtml = nodeHtml, this.nodeFailureSummary = nodeFailureSummary;
            }
            toArray() {
                return [ this.url, this.timestamp, this.id, this.impact, this.tags.join(","), this.description, this.help, this.helpUrl, this.nodeHtml, this.nodeFailureSummary ];
            }
        }
        const runAxePuppeteer = () => {
            console.info("runAxePuppeteer start");
            const key = _libs_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].getFirebaseFunctionsKey(), endPointURL = _libs_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].getEndPointURL(), targetURL = _libs_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].getTargetURL(), options = {
                method: "get",
                contentType: "application/json",
                headers: {
                    Authorization: "Bearer " + key
                }
            }, json = _libs_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].fetchAsJson(endPointURL + "?url=" + targetURL, options), rows = [];
            for (const violation of json["violations"]) for (const node of violation["nodes"]) {
                const row = new Row(json["timestamp"], json["url"], violation["id"], violation["impact"], violation["tags"], violation["description"], violation["help"], violation["helpUrl"], node["html"], node["failureSummary"]);
                rows.push(row.toArray());
            }
            const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(_libs_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].getRecordsSheetName());
            sheet.getRange(sheet.getLastRow() + 1, 1, rows.length, rows[0].length).setValues(rows), 
            console.info("runAxePuppeteer end");
        };
    },
    "./src/functions/saveScriptProperties.ts": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, "saveScriptProperties", (function() {
            return saveScriptProperties;
        }));
        var _libs_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/libs/Utils.ts");
        const saveScriptProperties = data => (_libs_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].setFirebaseFunctionsKey(data["firebaseFunctionsKey"]), 
        _libs_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].setTargetURL(data["targetURL"]), 
        _libs_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].setEndPointURL(data["endPointURL"]), 
        {
            result: "SUCCESS"
        });
    },
    "./src/functions/updateSchedule.ts": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, "updateSchedule", (function() {
            return updateSchedule;
        }));
        const KEY = "trigger", weekDay = [ ScriptApp.WeekDay.MONDAY, ScriptApp.WeekDay.TUESDAY, ScriptApp.WeekDay.WEDNESDAY, ScriptApp.WeekDay.THURSDAY, ScriptApp.WeekDay.FRIDAY, ScriptApp.WeekDay.SATURDAY, ScriptApp.WeekDay.SUNDAY ];
        function deleteTrigger_() {
            const triggerId = PropertiesService.getScriptProperties().getProperty(KEY);
            triggerId && (ScriptApp.getProjectTriggers().filter((function(trigger) {
                return trigger.getUniqueId() == triggerId;
            })).forEach((function(trigger) {
                ScriptApp.deleteTrigger(trigger);
            })), PropertiesService.getScriptProperties().deleteProperty(KEY));
        }
        function setTrigger_(triggerId) {
            PropertiesService.getScriptProperties().setProperty(KEY, triggerId);
        }
        const updateSchedule = formData => {
            const data = function(formData) {
                const result = {};
                let automateValue = 0;
                return formData.forEach((function(elem) {
                    "automate" == elem["name"] && 1 == elem["value"] && (automateValue = 1), result[elem.name] = elem.value;
                })), result["automate"] = automateValue, {
                    automate: result["automate"],
                    interval: result["interval"],
                    hourOfDay: result["hourOfDay"],
                    dayOfWeek: result["dayOfWeek"],
                    dayOfMonth: result["dayOfMonth"],
                    minitueOfHour: result["minitueOfHour"]
                };
            }(formData);
            if (Logger.log(data), null != data) if (0 == data.automate) deleteTrigger_(); else if (1 == data.automate) if (0 == data.interval) {
                deleteTrigger_();
                setTrigger_(ScriptApp.newTrigger("runAxePuppeteer").timeBased().everyMinutes(data.minitueOfHour).create().getUniqueId());
            } else if (1 == data.interval) {
                deleteTrigger_();
                setTrigger_(ScriptApp.newTrigger("runAxePuppeteer").timeBased().everyHours(1).create().getUniqueId());
            } else if (2 == data.interval) {
                deleteTrigger_();
                setTrigger_(ScriptApp.newTrigger("runAxePuppeteer").timeBased().atHour(data.hourOfDay).everyDays(1).inTimezone(Session.getTimeZone()).create().getUniqueId());
            } else if (3 == data.interval) {
                deleteTrigger_();
                setTrigger_(ScriptApp.newTrigger("runAxePuppeteer").timeBased().onWeekDay(weekDay[data.dayOfWeek]).atHour(data.hourOfDay).nearMinute(30).create().getUniqueId());
            } else {
                if (4 != data.interval) throw new Error("Illegal Argments...");
                deleteTrigger_();
                setTrigger_(ScriptApp.newTrigger("runAxePuppeteer").timeBased().onMonthDay(data.dayOfMonth).atHour(data.hourOfDay).nearMinute(30).create().getUniqueId());
            }
        };
    },
    "./src/index.ts": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__), function(global) {
            var _functions_onOpen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/functions/onOpen.ts"), _functions_getScriptsProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/functions/getScriptsProperties.ts"), _functions_saveScriptProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/functions/saveScriptProperties.ts"), _functions_initialize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/functions/initialize.ts"), _functions_updateSchedule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/functions/updateSchedule.ts"), _functions_createSchedule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/functions/createSchedule.ts"), _functions_runAxePuppeteer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/functions/runAxePuppeteer.ts");
            global.onOpen = _functions_onOpen__WEBPACK_IMPORTED_MODULE_0__["onOpen"], global.openUrlSettings = _functions_onOpen__WEBPACK_IMPORTED_MODULE_0__["openUrlSettings"], 
            global.getScriptProperties = _functions_getScriptsProperties__WEBPACK_IMPORTED_MODULE_1__["getScriptProperties"], 
            global.saveScriptProperties = _functions_saveScriptProperties__WEBPACK_IMPORTED_MODULE_2__["saveScriptProperties"], 
            global.initialize = _functions_initialize__WEBPACK_IMPORTED_MODULE_3__["initialize"], 
            global.runAxePuppeteer = _functions_runAxePuppeteer__WEBPACK_IMPORTED_MODULE_6__["runAxePuppeteer"], 
            global.createSchedule = _functions_createSchedule__WEBPACK_IMPORTED_MODULE_5__["createSchedule"], 
            global.updateSchedule = _functions_updateSchedule__WEBPACK_IMPORTED_MODULE_4__["updateSchedule"];
        }.call(this, __webpack_require__("./node_modules/webpack/buildin/global.js"));
    },
    "./src/libs/Utils.ts": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, "default", (function() {
            return Utils;
        }));
        class Utils {
            static fetchAsJson(url, requestOptions) {
                const response = UrlFetchApp.fetch(url, requestOptions);
                return JSON.parse(response.getContentText());
            }
            static truncate(value, length) {
                return value.length <= length ? value : value.substring(0, length) + "...";
            }
            static setEndPointURL(url) {
                PropertiesService.getScriptProperties().setProperty("END_POINT_URL", url);
            }
            static getEndPointURL() {
                return PropertiesService.getScriptProperties().getProperty("END_POINT_URL");
            }
            static getFirebaseFunctionsKey() {
                return PropertiesService.getScriptProperties().getProperty("FIREBASE_FUNCTIONS_KEY");
            }
            static setFirebaseFunctionsKey(value) {
                PropertiesService.getScriptProperties().setProperty("FIREBASE_FUNCTIONS_KEY", value);
            }
            static getTargetURL() {
                return PropertiesService.getScriptProperties().getProperty("TARGET_URL");
            }
            static setTargetURL(value) {
                PropertiesService.getScriptProperties().setProperty("TARGET_URL", value);
            }
            static checkNotEmpty(value, message) {
                if (void 0 === value || "" == value) throw new Error(message);
            }
            static getRecordsSheetName() {
                return "Records";
            }
            static getAggregationsSheetName() {
                return "Aggregations";
            }
            static isValidURL(str) {
                return !!new RegExp("^((https?:)?\\/\\/)?(?:\\S+(?::\\S*)?@)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i").test(str);
            }
        }
    },
    "./src/libs/i18n.ts": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, "default", (function() {
            return I18n;
        }));
        __webpack_require__("./src/locales/en/translation.json");
        var _locales_en_translation_json__WEBPACK_IMPORTED_MODULE_0___namespace = __webpack_require__.t("./src/locales/en/translation.json", 1), _locales_ja_translation_json__WEBPACK_IMPORTED_MODULE_1___namespace = (__webpack_require__("./src/locales/ja/translation.json"), 
        __webpack_require__.t("./src/locales/ja/translation.json", 1));
        class Translations {
            constructor() {
                this.map = {
                    en: _locales_en_translation_json__WEBPACK_IMPORTED_MODULE_0___namespace,
                    ja: _locales_ja_translation_json__WEBPACK_IMPORTED_MODULE_1___namespace
                };
            }
            get(lang, key) {
                return this.map[lang]["default"][key];
            }
            static get instance() {
                return this._instance || (this._instance = new Translations), this._instance;
            }
        }
        class I18n {
            static t(key, locale, params) {
                let lang;
                lang = void 0 === locale ? Session.getActiveUserLocale() : locale;
                let message = Translations.instance.get(lang, key);
                if (void 0 === message && (message = Translations.instance.get("ja", key), void 0 === message)) throw new Error("Message undefined.. key = " + key);
                return void 0 === params ? message : function(params) {
                    const num = params.length;
                    let oStr = params[0];
                    for (let i = 1; i < num; i++) {
                        const re = new RegExp("\\{" + (i - 1) + "\\}", "g");
                        oStr = oStr.replace(re, params[i]);
                    }
                    return oStr;
                }([ message, ...params ]);
            }
        }
    },
    "./src/locales/en/translation.json": function(module) {
        module.exports = JSON.parse('{"initialSetting":"Preferences","gettingStart":"Getting start","createConfigSheets":"Create sheets","settingURL":"URL Settings","execution":"Execution","scheduleExecution":"Schedule Execution","setAxePupeteetEndPointURL":"Set Axe Pupeteet End Point URL","noticeUnValidURL":"The URL format is invalid.","showSetURL":"The specified URL has been set.","showTargetUrl":"Please set the URL to be verified.","createSchedule":"Create schedule","showFirebaseFunctionsKey":"Enter the API Key for your Firebase function.","message.required":"{0} is required","message.invalidPattern":"The format of {0} is invalid.","message.onSaveSuccess":"Saved the setting.","message.title.resultNotification":"Result notification","modal.title.urlSettings":"URL settings","button.close":"Close","button.save":"Save"}');
    },
    "./src/locales/ja/translation.json": function(module) {
        module.exports = JSON.parse('{"initialSetting":"設定","gettingStart":"初期設定","createConfigSheets":"設定シート作成","settingURL":"URL設定","execution":"実行","scheduleExecution":"スケジュール実行","setAxePupeteetEndPointURL":"Axe PuppeteerエンドポイントURLを設定してください","noticeUnValidURL":"URLの形式が不正です。","showSetURL":"指定したURLを設定しました。","showTargetUrl":"検証対象のURLを設定してください。","createSchedule":"スケジュール作成","showFirebaseFunctionsKey":"Firebase function の API Key を入力してください。","message.required":"{0} は必須です。","message.invalidPattern":"{0} の形式が不正です。","message.onSaveSuccess":"設定を保存しました。","message.title.resultNotification":"結果通知","modal.title.urlSettings":"URL設定","button.close":"閉じる","button.save":"保存する"}');
    }
});