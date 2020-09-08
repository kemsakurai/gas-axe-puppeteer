import Utils from "../libs/Utils";

export const initialize = (): void => {
  console.info("initialize start");
  // Create records sheet
  const recordSheetName: string = Utils.getRecordsSheetName();
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(
    recordSheetName
  );
  if (!sheet) {
    sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet();
    sheet.setName(recordSheetName);
    const range = sheet.getRange("A1:J1");
    range.setBackground("yellow");
    const headers: string[] = [];
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
  // Create aggregations sheet
  const aggregationsSheetName: string = Utils.getAggregationsSheetName();
  sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(
    aggregationsSheetName
  );
  if (!sheet) {
    sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet();
    sheet.setName(aggregationsSheetName);
    sheet
      .getRange("A1:A1")
      .setFormula(
        "=QUERY(Records!A:J,\"select A, B, count(B) where A <> '' group by A, B\",true)"
      );
    sheet.getRange("A1:C1").setBackground("yellow");
  }
  console.info("initialize end");
};
