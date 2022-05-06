import { action, computed, observable, runInAction } from 'mobx';
import { services } from '../../app/constants/fakeData';
import { IConnectServices, ServiceInfo } from './connect-services-groups';

export class ConnectStore {
  @observable
  private _services: IConnectServices = {
    servicesList: [],
    activeServicesIds: [],
  };
  @computed
  public get services() {
    return this._services;
  }

  @observable
  private _minutes: number = 150;
  @computed
  public get minutes(): number {
    return this._minutes;
  }

  @observable
  private _internet: number = 15;
  @computed
  public get internet(): number {
    return this._internet;
  }

  @action setMinutes(value: number) {
    this._minutes = value;
  }

  @action setInternet(value: number) {
    this._internet = value;
  }

  @computed
  get getPrice() {
    const minutesPrice = this._minutes;
    const internetPrice = this._internet * 25;
    const activeServicesPrice = this.services.activeServicesIds.reduce(
      (acc, id) => {
        let service: ServiceInfo | undefined;

        for (const el of this._services.servicesList) {
          if (service) break;
          service = el.services.find(service => service.id === id);
        }

        return service ? acc + service.price : acc;
      },
      0,
    );

    const price = Math.ceil(minutesPrice + internetPrice + activeServicesPrice);
    return price;
  }

  @action
  initTariffConstructor() {
    this._services = services;
  }

  private addActiveService(id: number) {
    this._services.activeServicesIds.push(id);
  }

  private removeActiveService(id: number) {
    this._services.activeServicesIds = this._services.activeServicesIds.filter(
      el => el !== id,
    );
  }

  @action
  toggleActiveServices(id: number) {
    if (this._services.activeServicesIds.includes(id)) {
      this.removeActiveService(id);
    } else {
      this.addActiveService(id);
    }
  }
}

const connectStore = new ConnectStore();

export default connectStore;
