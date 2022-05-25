export type BaseParameter = {
  Id: number;
  Title: string;
  Alias: string;
  Value: number;
  ServiceId: number;
};

export type ServiceInfo = {
  id: number;
  alias: string;
  description: string;
  price: number;
  type: string;
  value: number;
  baseParameters?: BaseParameter[];
};

export type IConnectServices = {
  servicesIds: Array<number>;
  servicesGroup: {
    [key: number]: ServiceInfo;
  };
  activeServicesIds: Array<number>;
};
