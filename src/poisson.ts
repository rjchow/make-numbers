import { getRng } from "./random";
/**
 * In probability theory and statistics, the Poisson distribution
 * (/ˈpwɑːsɒn/; French pronunciation: [pwasɔ̃]), named after
 * French mathematician Siméon Denis Poisson,
 * is a discrete probability distribution that expresses the
 * probability of a given number of events occurring in a fixed
 * interval of time or space if these events occur with a
 * known constant mean rate and independently of the time since the last event.
 * @param lambda rate
 */
export const poisson = (lambda: number) => {
  const rng = getRng();
  const a = Math.exp(-lambda);
  let p = 1;
  let X = -1;
  while (p > a) {
    const U = rng();
    p *= U;
    X += 1;
  }

  return X;
};
