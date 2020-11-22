export const fillArray = (count: number, generatorFunction: (...args: any) => number) => {
  return [...Array(count).keys()].map(generatorFunction);
};
