import { getRng } from "./random";

export const weibull = (lambda: number, k: number) => {
  const U = getRng()();

  return lambda * (-Math.log(1 - U)) ** (1 / k);
};
