
type ServiceInfo = {
  id: number;
  alias: string;
  description: string;
};

export type ServicesList = {
  type: string;
  services: Array<ServiceInfo>;
};

export type IConnectServices = {
  servicesList: Array<ServicesList>;
  activeServicesIds: Array<number>
}
