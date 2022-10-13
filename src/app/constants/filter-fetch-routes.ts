export const filterFetchRoutes = {
  forall: `${process.env.REACT_APP_SBER_DPC_HOST}/api/qmobile_catalog/products/Tariff?id=mock`,
  cashback: `${process.env.REACT_APP_SBER_DPC_HOST}/api/qmobile_catalog/products/Tariff?id=mock`,
  phone: `${process.env.REACT_APP_SBER_DPC_HOST}/api/qmobile_catalog/products/Tariff?fields=MarketingProduct.Category.Title,MarketingProduct.Category.Alias,MarketingProduct.Title,Parameters.Title,Parameters.NumValue,Parameters.BaseParameter,Parameters.Unit&MarketingProduct.Category.Alias=phone`,
  smartdevices: `${process.env.REACT_APP_SBER_DPC_HOST}/api/qmobile_catalog/products/Tariff?id=mock`,
  devices: `${process.env.REACT_APP_SBER_DPC_HOST}/api/qmobile_catalog/products/Tariff?id=mock`,
  forcalls: `${process.env.REACT_APP_SBER_DPC_HOST}/api/qmobile_catalog/products/Tariff?id=mock`,
};
