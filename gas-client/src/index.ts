import { onOpen,openUrlSettings } from "./functions/onOpen";
import { getScriptProperties } from "./functions/getScriptsProperties";
import { saveScriptProperties } from "./functions/saveScriptProperties";
import { initialize } from "./functions/initialize";
import { updateSchedule } from "./functions/updateSchedule";
import { createSchedule } from "./functions/createSchedule";
import { runAxePuppeteer } from "./functions/runAxePuppeteer";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let global: any;
global.onOpen = onOpen;
global.openUrlSettings = openUrlSettings;
global.getScriptProperties = getScriptProperties;
global.saveScriptProperties = saveScriptProperties;
global.initialize = initialize;
global.runAxePuppeteer = runAxePuppeteer;
global.createSchedule = createSchedule;
global.updateSchedule = updateSchedule;
