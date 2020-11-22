import { getRng } from "./random";

export const triangular = (mode: number, left: number, right: number) => {
  const U = getRng()();
  const modeInverse = (mode - left) / (right - left);

  if (U < modeInverse) {
    return left + Math.sqrt(U * (right - left) * (mode - left));
  }
  return right - Math.sqrt((1 - U) * (right - left) * (right - mode));
};
