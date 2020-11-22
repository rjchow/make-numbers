import { mean, variance } from "jstat";
import { negbin } from "../src/negbin";
import { fillArray } from "../src/util/fillArray";

describe("Negative Binomial Distribution", () => {
  test("mean should be pr/(1-p)", () => {
    const p = 0.3;
    const r = 3;
    const vals = fillArray(100000, () => negbin(r, p));
    expect(mean(vals) - ((1 - p) * r) / p).toBeLessThanOrEqual(0.1);
  });

  test("variance should be pr / (1-p)**2", () => {
    const p = 0.3;
    const r = 3;
    const vals = fillArray(100000, () => negbin(r, p));
    expect(variance(vals) - (p * r) / (1 - p) ** 2).toBeLessThanOrEqual(0.1);
  });
});
