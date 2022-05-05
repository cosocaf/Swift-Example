declare module "*.scss" {
  type Selectors = {
    [selector: string]: string;
  };
  const selectors: Selectors;
  export = selectors;
}
declare module "*.css" {
  type Selectors = {
    [selector: string]: string;
  };
  const selectors: Selectors;
  export = selectors;
}
