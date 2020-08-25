import i18n from "./libs/i18n";
import { initialize } from "./functions/initialize";
import { updateSchedule } from "./functions/updateSchedule";
import { createSchedule } from "./functions/createSchedule";

function onOpen() {
  const ui = SpreadsheetApp.getUi();
  const menu = ui.createMenu("gas-axePuppeteerFirebaseFunctionsClient");
  menu.addSubMenu(
      ui.createMenu(i18n.t("initialSetting"))
          .addItem(i18n.t("createConfigSheets"), "initialize")
          .addItem(i18n.t("settingURL"), "setURL")
      )
      .addSeparator()
      .addItem(i18n.t("execution"), "runAxePuppeteer")
      .addItem(i18n.t("scheduleExecution"), "createSchedule")
      .addToUi();
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let global: any;
global.onOpen = onOpen;
global.initialize = initialize;
global.createSchedule = createSchedule;
global.updateSchedule = updateSchedule;
