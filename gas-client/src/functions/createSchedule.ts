import i18n from "../libs/i18n";

export const createSchedule = (): void => {
  const htmlOutput = HtmlService.createHtmlOutputFromFile("index")
    .setWidth(600)
    .setHeight(100);
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, i18n.t("createSchedule"));
};
