export const fillArray = (count: any, generatorFunction: any) => {
  return [...Array(count).keys()].map(generatorFunction);
};
