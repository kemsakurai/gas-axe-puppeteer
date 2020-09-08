import Utils from "../libs/Utils";

class Row {
  url: string;
  timestamp: string;
  id: string;
  impact: string;
  tags: string[];
  description: string;
  help: string;
  helpUrl: string;
  nodeHtml: string;
  nodeFailureSummary: string;

  constructor(
    url: string,
    timestamp: string,
    id: string,
    impact: string,
    tags: string[],
    description: string,
    help: string,
    helpUrl: string,
    nodeHtml: string,
    nodeFailureSummary: string
  ) {
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

  public toArray(): string[] {
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

export const runAxePuppeteer = (): void => {
  console.info("runAxePuppeteer start");

  // Get Value from property
  const key = Utils.getFirebaseFunctionsKey();
  const endPointURL = Utils.getEndPointURL();
  const targetURL = Utils.getTargetURL();

  // create KEY
  // eslint-disable-next-line @typescript-eslint/camelcase
  const headers: GoogleAppsScript.URL_Fetch.HttpHeaders = {
    Authorization: "Bearer " + key
  };
  // create option
  // eslint-disable-next-line @typescript-eslint/camelcase
  const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
    method: "get",
    contentType: "application/json",
    headers: headers
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const json: any = Utils.fetchAsJson(
    endPointURL + "?url=" + targetURL,
    options
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rows: any[] = [];
  for (const violation of json["violations"]) {
    for (const node of violation["nodes"]) {
      const row = new Row(
        json["url"],
        json["timestamp"],
        violation["id"],
        violation["impact"],
        violation["tags"],
        violation["description"],
        violation["help"],
        violation["helpUrl"],
        node["html"],
        node["failureSummary"]
      );
      rows.push(row.toArray());
    }
  }
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(
    Utils.getRecordsSheetName()
  );
  const range = sheet.getRange(
    sheet.getLastRow() + 1,
    1,
    rows.length,
    rows[0].length
  );
  range.setValues(rows);
  console.info("runAxePuppeteer end");
};
