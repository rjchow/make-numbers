import { mean, variance } from "jstat";
import { negbin } from "../src/negbin";
import { fillArray } from "../src/util/fillArray";

describe("Negative Binomial Distribution", () => {
  test("mean should be r/(1-p)", () => {
    const p = 0.3;
    const r = 7;
    const vals = fillArray(100000, () => negbin(r, p));
    expect(mean(vals) - r / (1 - p)).toBeCloseTo(0, 1);
  });

  test("variance should be pr / (1-p)**2", () => {
    const p = 0.3;
    const r = 7;
    const vals = fillArray(100000, () => negbin(r, p));
    expect(variance(vals) - (p * r) / (1 - p) ** 2).toBeCloseTo(0, 1);
  });
});
