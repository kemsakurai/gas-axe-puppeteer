export default class Utils {
  public static fetchAsJson(
    url: string,
    // eslint-disable-next-line @typescript-eslint/camelcase
    requestOptions: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): any {
    const response = UrlFetchApp.fetch(url, requestOptions);
    return JSON.parse(response.getContentText());
  }
  /**
   * truncate
   * @param value
   * @param length
   */
  public static truncate(value: string, length: number): string {
    if (value.length <= length) {
      return value;
    }
    return value.substring(0, length) + "...";
  }
  /**
   * setEndPointURL
   * @param url
   */
  public static setEndPointURL(url: string): void {
    PropertiesService.getScriptProperties().setProperty("END_POINT_URL", url);
  }
  /**
   * getEndPointURL
   */
  public static getEndPointURL(): string {
    return PropertiesService.getScriptProperties().getProperty("END_POINT_URL");
  }
  /**
   * checkNotEmpty
   */
  public static checkNotEmpty(value: string, message: string): void {
    if (typeof value === "undefined" || value == "") {
      throw new Error(message);
    }
  }
  /**
   * getRecordsSheetName
   */
  public static getRecordsSheetName(): string {
    return "Records";
  }

  /**
   * isValidURL
   * @param str
   */
  public static isValidURL(str: string): boolean {
    const pattern = new RegExp(
      "^((https?:)?\\/\\/)?" + // protocol
      "(?:\\S+(?::\\S*)?@)?" + // authentication
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locater
    if (!pattern.test(str)) {
      return false;
    } else {
      return true;
    }
  }
}
