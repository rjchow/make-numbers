import { getRng } from "./random";

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
