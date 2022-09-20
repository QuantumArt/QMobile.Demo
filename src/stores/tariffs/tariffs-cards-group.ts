import { IMarketingProduct, IParameters } from '../../app/types';

export type ITariffPackages = {
  [key: string]: IParameters;
};

export type TariffCard = IMarketingProduct & {
  packages?: ITariffPackages;
};

export type ITariffsCardsGroup = Array<TariffCard>;
