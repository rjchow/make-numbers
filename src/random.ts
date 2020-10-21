const seedrandom = require("seedrandom");

let seed = "";
let rng = seedrandom(seed);

export const setSeed = (newSeed: string) => {
  seed = newSeed;
  rng = seedrandom(seed);
};

export const getRng = () => rng;
