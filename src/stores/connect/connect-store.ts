/* eslint-disable no-restricted-syntax */
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
  public get services(): IConnectServices {
    return this._services;
  }

  @observable
  private _minutes = 150;

  @computed
  public get minutes(): number {
    return this._minutes;
  }

  @observable
  private _internet = 15;

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

  @observable
  private _parametersByGroup: Map<number, IParameters[]> = new Map<
    number,
    IParameters[]
  >();

  @computed
  public get parametersByGroup(): Map<number, IParameters[]> {
    return this._parametersByGroup;
  }

  @observable
  private _additionalInfo: Map<number, IParameters[]> = new Map<
    number,
    IParameters[]
  >();

  @computed
  public get additionalInfo(): Map<number, IParameters[]> {
    return this._additionalInfo;
  }

  @action setMinutes(value: number): void {
    this._minutes = value;
  }

  @action setInternet(value: number): void {
    this._internet = value;
  }

  @computed
  get getPrice(): number {
    const minutesPrice = this._minutes;
    const internetPrice = this._internet * 25;
    const activeServicesPrice = this.services.activeServicesIds.reduce(
      (acc, id) => {
        let serviceInfo: ServiceInfo | undefined;

        for (const el of this._services.servicesList) {
          if (serviceInfo) break;
          serviceInfo = el.services.find(service => service.id === id);
        }

        return serviceInfo ? acc + serviceInfo.price : acc;
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
  initTariffConstructor(): void {
    this._services = services;
  }

  private addActiveService(id: number): void {
    this._services.activeServicesIds.push(id);
  }

  private removeActiveService(id: number): void {
    this._services.activeServicesIds = this._services.activeServicesIds.filter(
      el => el !== id,
    );
  }

  @action
  toggleActiveServices(id: number): void {
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
        this._parametersByGroup = new Map();
        this._additionalInfo = new Map();

        this._currentTariff.Parameters.forEach(parameter => {
          const groupId = parameter.Group.Id;
          if (parameter.Group.Title !== 'Дополнительная информация') {
            if (this._parametersByGroup.has(groupId)) {
              this._parametersByGroup.get(groupId)?.push(parameter);
            } else {
              this._parametersByGroup.set(groupId, [parameter]);
            }
          } else if (parameter.Group.Title === 'Дополнительная информация') {
            if (this._additionalInfo.has(groupId)) {
              this._additionalInfo.get(groupId)?.push(parameter);
            } else {
              this._additionalInfo.set(groupId, [parameter]);
            }
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
}

const connectStore = new ConnectStore();

export default connectStore;
