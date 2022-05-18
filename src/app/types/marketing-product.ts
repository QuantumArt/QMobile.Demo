export type IParameters = {
  NumValue: number;
  BaseParameter: {
    Alias: string;
    Title: string;
    Id: number;
  };
  Title: string;
  Id: number;
  Unit: {
    Title: string;
    Id: number;
    Display: string;
    QuotaPeriod: string;
  };
  Group: {
    Id: number;
    Title: string;
  };
};

export type ITariffPackageParameter = {
  Id: number;
  Title: string;
  NumValue: number;
  BaseParameter: {
    Id: number;
    Title: string;
    Alias: 'InternetPackage' | 'MinutesPackage' | 'SubscriptionFee';
  };
};

export type ITariffPackages = {
  Id: number;
  Alias: string;
  Parent: {
    Parameters: Array<ITariffPackageParameter>;
  };
};

export type IModifier = {
  Id: number;
  Title: string;
  Alias: string;
};

export type IServiceOnTariff = {
  Id: number;
  Service: {
    Id: number;
    MarketingProduct: {
      Id: number;
      Title: string;
      Alias: string;
    };
    Description: string;
    Modifiers: Array<IModifier>;
  };
  Parent: {
    Id: number;
    Title: string;
    Type: number;
    Parameters: Array<ITariffPackageParameter>;
  };
};

export type IMarketingProduct = {
  MarketingProduct: {
    Category: {
      Alias: string;
      Title: string;
    };
    Title: string;
    ListImage: string;
    Description: string;
    DetailsImage: string;
  };
  Parameters: Array<IParameters>;
  Id: number;
  TariffPackages?: Array<ITariffPackages>;
  ServicesOnTariff?: Array<IServiceOnTariff>;
};
