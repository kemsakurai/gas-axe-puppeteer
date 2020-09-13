import Utils from "../libs/Utils";

export type GetScriptPropertiesResult = {
  firebaseFunctionsKey: string;
  targetURL: string;
  endPointURL: string;
};

export const getScriptProperties = (): GetScriptPropertiesResult => {
  const ret: GetScriptPropertiesResult = {
    firebaseFunctionsKey: Utils.getFirebaseFunctionsKey(),
    targetURL: Utils.getTargetURL(),
    endPointURL: Utils.getEndPointURL()
  };
  return ret;
};
