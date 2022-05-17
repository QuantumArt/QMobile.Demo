import { IMarketingProduct, IParameters } from '../../app/types';

export type ITariffPackages = {
  [key: string]: IParameters;
};

type TariffCard = IMarketingProduct & {
  packages?: ITariffPackages;
};

export type ITariffsCardsGroup = Array<TariffCard>;
