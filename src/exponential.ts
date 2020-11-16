import { erlang } from "./erlang";

/**
 * In probability theory and statistics, the exponential distribution is the probability distribution
 * of the time between events in a Poisson point process,
 * i.e., a process in which events occur continuously and independently at a constant average rate.
 * @param lambda rate
 */
export const exponential = (lambda: number) => {
  return erlang(1, lambda);
};
