/* eslint-disable no-restricted-syntax */
import { action, computed, observable, runInAction } from 'mobx';
import { stringify } from 'querystring';
import { IMarketingProduct, IParameters } from '../../app/types';
import { ITariffPackageParameter } from '../../app/types/marketing-product';
import { ITariffPackages } from '../tariffs/tariffs-cards-group';
import { IConnectServices, ServiceInfo } from './connect-services-groups';

export class ConnectStore {
  @observable
  private _services: IConnectServices = {
    servicesGroup: {},
    servicesIds: [],
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
    const fromServices = this._services.activeServicesIds
      .filter(id => this._services.servicesGroup[id].type === 'MinutesPackage')
      .reduce<number>(
        (acc, id) => acc + this._services.servicesGroup[id].value,
        0,
      );
    return this._minutes + fromServices;
  }

  @computed
  public get rangeMinutes(): number {
    return this._minutes;
  }

  @observable
  private _internet = 0;

  @computed
  public get internet(): number {
    const fromServices = this._services.activeServicesIds
      .filter(id => this._services.servicesGroup[id].type === 'InternetPackage')
      .reduce<number>(
        (acc, id) => acc + this._services.servicesGroup[id].value,
        0,
      );
    return this._internet + fromServices;
  }

  @computed
  public get rangeInternet(): number {
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
    let rangesPrice = this._rangesPrice[rangesAlias];

    let subscriptionPrice = 0;

    if (!rangesPrice) {
      const paramWithSubcriptionPrice = this._currentTariff?.Parameters?.find(
        parameter => {
          return parameter?.BaseParameter?.Alias === 'SubscriptionFee';
        },
      );
      rangesPrice = 0;
      subscriptionPrice = paramWithSubcriptionPrice?.NumValue ?? 0;
    }

    const servicesPrice = this._services.activeServicesIds.reduce<number>(
      (acc, id) => {
        const { price } = this.services.servicesGroup[id];
        return acc + price;
      },
      0,
    );

    return rangesPrice + subscriptionPrice + servicesPrice;
  }

  initServices(): void {
    this._services = {
      servicesGroup: {},
      servicesIds: [],
      activeServicesIds: [],
    };
    this._currentTariff?.ServicesOnTariff?.forEach(service => {
      const parametersValues = {
        price: 0,
        value: 0,
        type: '',
      };

      service.Parent.Parameters.forEach(parameter => {
        switch (parameter?.BaseParameter?.Alias) {
          case 'SubscriptionFee':
            parametersValues.price = parameter.NumValue;
            break;
          case 'InternetPackage':
            parametersValues.type = 'InternetPackage';
            parametersValues.value = parameter.NumValue;
            break;
          case 'MinutesPackage':
            parametersValues.type = 'MinutesPackage';
            parametersValues.value = parameter.NumValue;
            break;
          default:
        }
      });

      this._services.servicesGroup[service.Id] = {
        id: service.Id,
        alias: service.Service.MarketingProduct.Title,
        description: service.Service.Description,
        ...parametersValues,
      };

      this._services.servicesIds.push(service.Id);
    });
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
        this.initServices();
        this._parametersByGroup = new Map();
        this._additionalInfo = new Map();
        const minutes = this.findTariffPackageParameterValues('MinutesPackage');
        const gigabytes =
          this.findTariffPackageParameterValues('InternetPackage');

        if (minutes) {
          this._rangeMinutesValues = minutes;

          const [minValue] = this._rangeMinutesValues;
          this._minutes = minValue;
        }

        if (gigabytes) {
          this._rangeInternetValues = gigabytes;

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
    return values
      ? values
          .filter((value, index, arr) => arr.indexOf(value) === index)
          .sort()
      : [];
  }
}

const connectStore = new ConnectStore();

export default connectStore;
