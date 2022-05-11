import { action, computed, observable, runInAction } from 'mobx';
import { services } from '../../app/constants/fakeData';
import { IMarketingProduct, IParameters } from '../../app/types';
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

  @observable
  private _currentTariff!: IMarketingProduct;
  @computed
  public get currentTariff(): IMarketingProduct {
    return this._currentTariff;
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

  // @computed
  // get getParametersByGroup() {
  //   // const parametersList = new Map<number, IParameters[]>();

  //   // this._currentTariff.Parameters.forEach(parameter => {
  //   //   const groupId = parameter.Group.Id;
  //   //   if (parametersList.has(groupId)) {
  //   //     parametersList.get(groupId)?.push(parameter);
  //   //   } else {
  //   //     parametersList.set(groupId, [parameter]);
  //   //   }
  //   // });

  //   // return parametersList;
  // }

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

  @action
  public fetchTariff = async (tariffId: string): Promise<void> => {
    try {
      const response = await fetch(
        `http://sber-dpc.demo.dev.qsupport.ru/api/qmobile_catalog/products/${tariffId}`,
      );
      const fetchedData: IMarketingProduct = await response.json();
      console.log(fetchedData);
      runInAction(() => {
        this._currentTariff = fetchedData;
      });
    } catch (error) {
      console.log(error);
    }
  };
}

const connectStore = new ConnectStore();

export default connectStore;
