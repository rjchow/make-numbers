import { mean, variance } from "jstat";
import { fillArray } from "../src/util/fillArray";
import { bernoulli } from "../src";

describe("Bernoulli Distribution", () => {
  test("mean should be p", () => {
    const p = 0.7;
    const vals = fillArray(100000, () => bernoulli(p));
    expect(mean(vals) - p).toBeLessThanOrEqual(0.1);
  });

  test("variance should be p * (1 - p)", () => {
    const p = 0.2;
    const vals = fillArray(100000, () => bernoulli(p));
    expect(variance(vals) - p * (1 - p)).toBeLessThanOrEqual(0.1);
  });
});
