import { getRng } from "./random";
/**
 * In probability theory and statistics, the Bernoulli distribution,
 * named after Swiss mathematician Jacob Bernoulli,[1]
 * is the discrete probability distribution of a random variable
 * which takes the value 1 with probability p and the value 0 with
 * probability q = 1 − .
 *
 * Less formally, it can be thought of as a model for the set of
 * possible outcomes of any single experiment that asks a yes–no question.
 * @param p probability
 */
export const bernoulli = (p: number) => {
  return getRng()() < p ? 1 : 0;
};
