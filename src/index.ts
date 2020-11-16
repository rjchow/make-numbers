import { getLogger } from "./util/logger";
import { getRng } from "./random";

export { getRng, setSeed } from "./random";

const { trace } = getLogger("sayHello");

/**
 * This function says hello.
 * @param name Some name to say hello for.
 * @returns The hello.
 */
const sayHello = (name: string = "Haz"): string => {
  trace("I'm working!");
  return `Hello, ${name}!`;
};

export default sayHello;

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

/**
 * The Erlang distribution is a generalisation of the exponential distribution.
 * While the exponential random variable describes the time between adjacent events,
 * the Erlang random variable describes the time interval between any event and the nth following event.
 *
 * @param n shape
 * @param lambda rate
 */
export const erlang = (n: number, lambda: number) => {
  const rng = getRng();
  return Math.log([...Array(n).keys()].reduce((acc) => acc * rng(), 1)) * (-1 / lambda);
};

export const fillArray = (count: any, generatorFunction: any) => {
  return [...Array(count).keys()].map(generatorFunction);
};
