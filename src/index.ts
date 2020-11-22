import { getRng } from "./random";

export { getRng, setSeed } from "./random";

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

export * from "./normal";
export * from "./geometric";
export * from "./erlang";
