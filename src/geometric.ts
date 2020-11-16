import { getRng } from "./random";
/**
 * The Geometric distribution is the probability distribution of the number X of
 * Bernoulli trials needed to get one success
 * @param p
 */
export const geometric = (p: number) => {
  const rng = getRng();
  return Math.ceil(Math.log(rng()) / Math.log(1 - p));
};
