import Utils from "./Utils";

describe("Utils", () => {
  describe("isValidURL()", () => {
    it("valid URL", () => {
      expect(Utils.isValidURL("https://www.monotalk.xyz")).toBe(true);
    });
    it("invalid URL", () => {
      expect(Utils.isValidURL("sssXXXX")).toBe(false);
    });
  });
});
