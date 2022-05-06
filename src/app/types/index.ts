export type IRoute = {
  path: string;
  element: JSX.Element;
  exact?: boolean;
};

type NavigationRoute = {
  name: string;
  linkto: string;
};

export type NavigationRoutesGroup = NavigationRoute[];

export type IParameters = {
  NumValue: number;
  BaseParameter: {
    Alias: string;
    Title: string;
    Id: number;
  };
  Title: string;
  Unit: {
    Title: string;
    Id: number;
    Display: string;
    QuotaPeriod: string;
  };
};

export type IMarketingProduct = {
  MarketingProduct: {
    Category: {
      Alias: string;
      Title: string;
    };
  };
  Parameters: Array<IParameters>;
  Id: number;
};
