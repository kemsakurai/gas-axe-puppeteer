import Utils from "../libs/Utils";

export type SaveScriptPropertiesResult = {
  result: string;
};

export const saveScriptProperties = (data: any): SaveScriptPropertiesResult => {
  Utils.setFirebaseFunctionsKey(data["firebaseFunctionsKey"]);
  Utils.setTargetURL(data["targetURL"]);
  Utils.setEndPointURL(data["endPointURL"]);
  return {
    result: "SUCCESS"
  };
};
