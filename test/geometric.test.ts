import { mean, variance } from "jstat";
import { geometric } from "../src/geometric";
import { fillArray } from "../src/util/fillArray";

describe("Geometric Distribution", () => {
  test("mean should be 1/p", () => {
    const p = 0.3;
    const vals = fillArray(100000, () => geometric(p));
    expect(mean(vals) - 1 / p).toBeLessThanOrEqual(0.1);
  });

  test("variance should be (1-p)/p**2", () => {
    const p = 0.3;
    const vals = fillArray(100000, () => geometric(p));
    expect(variance(vals) - (1 - p) / p ** 2).toBeLessThanOrEqual(0.1);
  });
});
