export interface IMarketingProduct {
  Type: string;
  Alias: string;
  Title: string;
  Id: number;
}

export interface ITariffCard {
  MarketingProduct: IMarketingProduct;
}

export type ITariffsCardsGroup = Array<ITariffCard>;
