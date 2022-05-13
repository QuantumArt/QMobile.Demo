export type ServiceInfo = {
  id: number;
  alias: string;
  description: string;
  price: number
};

export type ServicesList = {
  type: string;
  services: Array<ServiceInfo>;
};

export type IConnectServices = {
  servicesList: Array<ServicesList>;
  activeServicesIds: Array<number>
}
