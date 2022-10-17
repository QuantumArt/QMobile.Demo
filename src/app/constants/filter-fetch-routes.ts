export const filterFetchRoutes = {
  forall: `${window.env.DPC_HOST}/api/qmobile_catalog/products/Tariff?id=mock`,
  cashback: `${window.env.DPC_HOST}/api/qmobile_catalog/products/Tariff?id=mock`,
  phone: `${window.env.DPC_HOST}/api/qmobile_catalog/products/Tariff?fields=MarketingProduct.Category.Title,MarketingProduct.Category.Alias,MarketingProduct.Title,Parameters.Title,Parameters.NumValue,Parameters.BaseParameter,Parameters.Unit&MarketingProduct.Category.Alias=phone`,
  smartdevices: `${window.env.DPC_HOST}/api/qmobile_catalog/products/Tariff?id=mock`,
  devices: `${window.env.DPC_HOST}/api/qmobile_catalog/products/Tariff?id=mock`,
  forcalls: `${window.env.DPC_HOST}/api/qmobile_catalog/products/Tariff?id=mock`,
};
