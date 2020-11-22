import { geometric } from "./geometric";
import { fillArray } from "./util/fillArray";
/**
 * In probability theory and statistics, the negative binomial distribution is a
 * discrete probability distribution that models the number of successes in a sequence
 * of independent and identically distributed Bernoulli trials before a specified
 * (non-random) number of failures (denoted r) occurs.
 * @param r number of failures
 * @param p probability
 */
export const negbin = (r: number, p: number) => {
  return fillArray(r, () => geometric(1 - p)).reduce((prev, curr) => prev + curr, 0);
};
