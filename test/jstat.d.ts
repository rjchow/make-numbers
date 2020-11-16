declare module "jstat" {
  let jstat: {
    mean: any;
    variance: any;
  };
  export = jstat;
}

// DefinitelyTyped doesn't have typescript definitions for jstat and we're only using it in tests
