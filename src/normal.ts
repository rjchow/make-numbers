import { getRng } from "./random";

export enum NormalDistributionGeneratorType {
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
