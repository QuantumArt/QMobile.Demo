/* eslint-disable no-restricted-syntax */
import { action, computed, observable, runInAction } from 'mobx';
import { services } from '../../app/constants/fakeData';
import { IMarketingProduct, IParameters } from '../../app/types';
import { ITariffPackageParameter } from '../../app/types/marketing-product';
import { ITariffPackages } from '../tariffs/tariffs-cards-group';
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
  private _minutes = 0;

  @computed
  public get minutes(): number {
    return this._minutes;
  }

  @observable
  private _internet = 0;

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

  @observable
  private _rangeMinutesValues: number[] = [];

  @computed
  public get rangeMinutesValues(): number[] {
    return this._rangeMinutesValues;
  }

  @observable
  private _rangeInternetValues: number[] = [];

  @computed
  public get rangeInternetValues(): number[] {
    return this._rangeInternetValues;
  }

  @observable
  private _rangesPrice: {
    [key: string]: number;
  } = {};

  @computed
  public get rangesPrice(): typeof this._rangesPrice {
    return this._rangesPrice;
  }

  @computed
  get getPrice(): number {
    const rangesAlias = `${this._internet}${this._minutes}`;

    return this._rangesPrice[rangesAlias];
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
        const minutes = this.findTariffPackageParameterValues('MinutesPackage');
        const gigabytes =
          this.findTariffPackageParameterValues('InternetPackage');

        if (minutes) {
          this._rangeMinutesValues = minutes
            .filter((value, index, arr) => arr.indexOf(value) === index)
            .sort();

          const [minValue] = this._rangeMinutesValues;
          this._minutes = minValue;
        }

        if (gigabytes) {
          this._rangeInternetValues = gigabytes
            .filter((value, index, arr) => arr.indexOf(value) === index)
            .sort();

          const [minValue] = this._rangeInternetValues;
          this._internet = minValue;
        }

        this._currentTariff.Parameters.forEach(parameter => {
          const groupId = parameter.Group.Id;
          if (
            parameter.Group.Title !== 'Дополнительная информация' &&
            parameter.Group.Title !== 'Преимущества'
          ) {
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

        this._currentTariff.TariffPackages?.forEach(tariffPackage => {
          let alias = '';
          let subscriptionPrice = 0;
          tariffPackage.Parent.Parameters.forEach(parameter => {
            if (parameter.BaseParameter.Alias === 'InternetPackage') {
              alias += parameter.NumValue;
            }
            if (parameter.BaseParameter.Alias === 'MinutesPackage') {
              alias += parameter.NumValue;
            }
            if (parameter.BaseParameter.Alias === 'SubscriptionFee') {
              subscriptionPrice = parameter.NumValue;
            }
          });

          this._rangesPrice[alias] = subscriptionPrice;
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  private findTariffPackageParameterValues(
    parameterName: 'InternetPackage' | 'MinutesPackage',
  ): number[] | undefined {
    const values = this._currentTariff.TariffPackages?.reduce<Array<number>>(
      (acc, tariffPackage) => {
        const minutesParameters: ITariffPackageParameter[] = [];

        tariffPackage.Parent.Parameters.forEach(parameter => {
          if (parameter.BaseParameter.Alias === parameterName)
            minutesParameters.push(parameter);
        });

        const minutesValues = minutesParameters.reduce<Array<number>>(
          (accum, parameter) => accum.concat(parameter.NumValue),
          [],
        );

        return minutesValues.length > 0 ? acc.concat(...minutesValues) : acc;
      },
      [],
    );
    return values;
  }
}

const connectStore = new ConnectStore();

export default connectStore;
