export type ServiceInfo = {
  id: number;
  alias: string;
  description: string;
  price: number;
};

export type IConnectServices = {
  servicesIds: Array<number>;
  servicesGroup: {
    [key: number]: ServiceInfo;
  };
  activeServicesIds: Array<number>;
};
