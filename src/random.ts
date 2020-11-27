const Seedrandom = require("seedrandom");

let seed = "";
let rng = new Seedrandom(seed);

export const setSeed = (newSeed: string) => {
  seed = newSeed;
  rng = new Seedrandom(seed);
};

export const getRng = () => rng;
