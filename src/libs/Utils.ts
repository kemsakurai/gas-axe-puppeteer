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
}
