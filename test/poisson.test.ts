import { mean, variance } from "jstat";
import { poisson } from "../src/poisson";
import { fillArray } from "../src/util/fillArray";

describe("Poisson Distribution", () => {
  test("mean should be lambda", () => {
    const lambda = 7;
    const vals = fillArray(100000, () => poisson(lambda));
    expect(mean(vals) - lambda).toBeCloseTo(0, 1);
  });

  test("variance should be lambda", () => {
    const lambda = 2;
    const vals = fillArray(100000, () => poisson(lambda));
    expect(variance(vals) - lambda).toBeCloseTo(0, 1);
  });
});
