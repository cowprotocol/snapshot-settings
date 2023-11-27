import snapshot from "@snapshot-labs/snapshot.js";

import settings from "../src/settings.json";

describe("settings.json", () => {
  test("validates schema", () => {
    expect(
      snapshot.utils.validateSchema(snapshot.schemas.space, settings),
    ).toBe(true);
  });
  test("Spam protection: require 10000 COW/vCOW", () => {
    expect(settings.validation.params.minScore == 10000).toBe(true);
  });
});
