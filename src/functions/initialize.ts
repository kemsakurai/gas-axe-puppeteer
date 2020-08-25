import Utils from "../libs/Utils";

export let initialize = (): void => {
  console.info("initialize start");
  const recordSheetName: string = Utils.getRecordsSheetName();
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(
      recordSheetName
  );
  if (!sheet) {
    sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet();
    sheet.setName(recordSheetName);
    const range = sheet.getRange("A1:H1");
    range.setBackground("yellow");
    const headers: string[] = [];
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
