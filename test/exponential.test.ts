import { mean, variance } from "jstat";
import { exponential } from "../src/exponential";
import { fillArray } from "../src/util/fillArray";

describe("Exponential Distribution", () => {
  test("mean should be 1/lambda", () => {
    const lambda = 0.5;
    const vals = fillArray(100000, () => exponential(lambda));
    expect(mean(vals) - 1 / lambda).toBeCloseTo(0, 1);
  });

  test("variance should be 1/(lambda**2)", () => {
    const lambda = 0.5;
    const vals = fillArray(100000, () => exponential(lambda));
    expect(variance(vals) - 1 / lambda ** 2).toBeCloseTo(0, 1);
  });
});
