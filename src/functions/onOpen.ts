import i18n from "../libs/i18n";

export const onOpen = () => {
  const ui = SpreadsheetApp.getUi();
  const menu = ui.createMenu("gas-axePuppeteerFirebaseFunctionsClient");
  menu
    .addSubMenu(
      ui
        .createMenu(i18n.t("initialSetting"))
        .addItem(i18n.t("createConfigSheets"), "initialize")
        .addItem(i18n.t("settingURL"), "openUrlSettings")
    )
    .addSeparator()
    .addItem(i18n.t("execution"), "runAxePuppeteer")
    .addItem(i18n.t("scheduleExecution"), "createSchedule")
    .addToUi();
};

export const openUrlSettings = () => {
  const html = HtmlService.createHtmlOutputFromFile("sidebar")
    .setWidth(600)
    .setHeight(600);
  SpreadsheetApp.getUi().showModalDialog(
    html,
    i18n.t("modal.title.urlSettings")
  );
};
