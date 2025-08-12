import assert from "node:assert";
import { describe, test } from "node:test";

import snapshot from "@snapshot-labs/snapshot.js";

import settings from "../src/settings.json" with { type: "json" };

describe("settings.json", () => {
  test("validates schema", () => {
    assert(snapshot.utils.validateSchema(snapshot.schemas.space, settings));
  });
  test("Spam protection: require 10000 COW/vCOW", () => {
    assert.strictEqual(settings.validation.params.minScore, 10000);
  });
  test("Participation: require 35M COW/vCOW quorum", () => {
    assert.strictEqual(settings.voting.quorum, 35000000);
  });
});
