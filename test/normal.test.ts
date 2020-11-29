import { mean, variance } from "jstat";
import { normal, NormalDistributionGeneratorType } from "../src/normal";
import { fillArray } from "../src/util/fillArray";

describe("Normal Distribution", () => {
  describe("Box-Muller method", () => {
    test("mean should be mu", () => {
      const mu = 2;
      const stdev = 4;
      const vals = fillArray(100000, () => normal(mu, stdev, NormalDistributionGeneratorType.boxmuller));
      expect(mean(vals) - mu).toBeCloseTo(0, 1);
    });

    test("variance should be s2", () => {
      const mu = 2;
      const stdev = 4;
      const vals = fillArray(100000, () => normal(mu, stdev, NormalDistributionGeneratorType.boxmuller));
      expect(variance(vals) - stdev ** 2).toBeCloseTo(0, 1);
    });
  });
});
