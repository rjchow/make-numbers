import { bernoulli } from "./bernoulli";
import { fillArray } from "./util/fillArray";
/**
 * In probability theory and statistics, the binomial distribution
 * with parameters n and p is the discrete probability distribution
 * of the number of successes in a sequence of n independent
 * experiments, each asking a yes–no question, and each with its own
 * Boolean-valued outcome: success (with probability p) or
 * failure (with probability q = 1 − p)
 * @param n number of experiments
 * @param p probability
 */
export const binomial = (n: number, p: number) => {
  return fillArray(n, () => bernoulli(n)).reduce((prev, curr) => prev + curr, 0);
};
