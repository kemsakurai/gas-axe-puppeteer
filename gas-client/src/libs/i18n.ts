import * as en from "../locales/en/translation.json";
import * as ja from "../locales/ja/translation.json";

/**
 * Translations
 */
class Translations {
  /** インスタンス */
  private static _instance: Translations;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private map: any;

  /** プライベートコンストラクタ */
  private constructor() {
    this.map = {
      en,
      ja
    };
  }

  public get(lang: string, key: string): string {
    return this.map[lang]["default"][key];
  }

  /** インスタンスの取得 */
  public static get instance(): Translations {
    // _inctanceが存在しない場合に、new Hoge()を実行する。
    if (!this._instance) {
      this._instance = new Translations();
    }
    // 生成済みのインスタンスを返す
    return this._instance;
  }
}
const printf = function(params: string[]): string {
  const num = params.length;
  let oStr = params[0];
  for (let i = 1; i < num; i++) {
    const pattern = "\\{" + (i - 1) + "\\}";
    const re = new RegExp(pattern, "g");
    oStr = oStr.replace(re, params[i]);
  }
  return oStr;
};

export default class I18n {
  public static t(key: string, locale?: string, params?: string[]): string {
    let lang;
    if (typeof locale === "undefined") {
      lang = Session.getActiveUserLocale();
    } else {
      lang = locale;
    }
    let message = Translations.instance.get(lang, key);
    if (typeof message === "undefined") {
      message = Translations.instance.get("ja", key);
      if (typeof message === "undefined") {
        throw new Error("Message undefined.. key = " + key);
      }
    }
    if (typeof params === "undefined") {
      return message;
    }
    return printf([message, ...params]);
  }
}
