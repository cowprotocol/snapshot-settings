import settings from "../src/settings.json";

describe("settings.json", () => {
  test("is a structured object", () => {
    expect(typeof settings).toBe("object");
  });
});
