import { mean, variance } from "jstat";
import { erlang } from "../src/erlang";
import { fillArray } from "../src/util/fillArray";

describe("Erlang Distribution", () => {
  test("mean should be k/lambda", () => {
    const k = 2;
    const lambda = 4;
    const vals = fillArray(100000, () => erlang(k, lambda));
    expect(mean(vals) - k / lambda).toBeLessThanOrEqual(0.1);
  });

  test("variance should be k/(lambda**2)", () => {
    const k = 2;
    const lambda = 4;
    const vals = fillArray(100000, () => erlang(k, lambda));
    expect(variance(vals) - k / lambda ** 2).toBeLessThanOrEqual(0.1);
  });
});
