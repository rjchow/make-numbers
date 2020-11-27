import { mean, variance } from "jstat";
import { fillArray } from "../src/util/fillArray";
import { binomial } from "../src";

describe("Binomial Distribution", () => {
  test("mean should be np", () => {
    const p = 0.7;
    const n = 7;
    const vals = fillArray(100000, () => binomial(n, p));
    expect(mean(vals) - n * p).toBeLessThanOrEqual(0.1);
  });

  test("variance should be n * p * (1 - p)", () => {
    const p = 0.2;
    const n = 14;
    const vals = fillArray(100000, () => binomial(n, p));
    expect(variance(vals) - n * p * (1 - p)).toBeLessThanOrEqual(0.1);
  });
});
