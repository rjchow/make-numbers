import { getRng } from "./random";

export { getRng, setSeed } from "./random";

export const triangular = (mode: number, left: number, right: number) => {
  const U = getRng()();
  const modeInverse = (mode - left) / (right - left);

  if (U < modeInverse) {
    return left + Math.sqrt(U * (right - left) * (mode - left));
  }
  return right - Math.sqrt((1 - U) * (right - left) * (right - mode));
};

export const weibull = (lambda: number, k: number) => {
  const U = getRng()();

  return lambda * (-Math.log(1 - U)) ** (1 / k);
};

enum NormalDistributionGeneratorType {
  boxmuller = "box-muller",
}

export const normal = (
  mean: number,
  stdev: number,
  method: NormalDistributionGeneratorType = NormalDistributionGeneratorType.boxmuller
) => {
  const rng = getRng();

  if (method === NormalDistributionGeneratorType.boxmuller) {
    let u1 = 0;
    let u2 = 0;
    while (u1 === 0) u1 = rng(); // U1 and U2 need to exclude 0
    while (u2 === 0) u2 = rng();
    const R = Math.sqrt(-2.0 * Math.log(u1));
    const theta = 2.0 * Math.PI * u2;
    return mean + R * Math.cos(theta) * stdev;
  }
  throw new Error("Invalid Normal Distribution Generator");
};

export * from "./geometric";
export * from "./erlang";
