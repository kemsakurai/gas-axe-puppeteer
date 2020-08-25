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

export default class I18n {
  public static t(key: string): string {
    const lang = Session.getActiveUserLocale();
    const message = Translations.instance.get(lang, key);
    if (typeof message === "undefined") {
      return Translations.instance.get("ja", key);
    }
    return message;
  }
}
