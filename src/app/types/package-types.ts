import { IMarketingProduct } from './marketing-product';

type IProductsInKit = {
  Id: number;
  Type: number;
};

export type IPackage = IMarketingProduct & {
  ProductsInKit?: Array<IProductsInKit>;
};

export type ItemsInPackage = Array<IMarketingProduct>;
