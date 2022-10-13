/* eslint-disable no-restricted-syntax */
import { action, computed, observable, runInAction, autorun } from 'mobx';
import { BootState } from '../../app/enums/boot-state';
import { IMarketingProduct, IParameters } from '../../app/types';
import { ITariffPackageParameter } from '../../app/types/marketing-product';
import { BaseParameter, IConnectServices } from './connect-services-groups';

export class ConnectStore {
  @observable
  private _bootState: BootState = BootState.None;

  @computed
  public get bootState(): BootState {
    return this._bootState;
  }

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

    return rangesPrice + subscriptionPrice;
  }

  @observable
  private _activeBaseParameters: BaseParameter[] = [];

  @observable
  private _activeParametersGroups: number[] = [];

  @computed
  public get activeParametersGroups(): number[] {
    return this._activeParametersGroups;
  }

  @action
  setActiveParametersGroups(arr: number[]): void {
    this._activeParametersGroups = arr;
  }

  initServices(): void {
    this._services = {
      servicesGroup: {},
      servicesIds: [],
      activeServicesIds: [],
    };
    this._currentTariff?.ServicesOnTariff?.forEach(service => {
      const parametersValues: {
        price: number;
        value: number;
        type: string;
        baseParameters: BaseParameter[];
      } = { price: 0, value: 0, type: '', baseParameters: [] };

      service.Parent.Parameters?.forEach(parameter => {
        parametersValues.baseParameters.push({
          ...parameter?.BaseParameter,
          Value: parameter.NumValue,
          ServiceId: service.Id,
        });
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
        fetchId: service.Service.Id,
        alias: service.Service.MarketingProduct.Title,
        description: service.Service.Description,
        ...parametersValues,
      };

      this._services.servicesIds.push(service.Id);
    });
  }

  private async addActiveService(id: number): Promise<void> {
    this._services.activeServicesIds.push(id);
    const requestQuery = this._services.activeServicesIds.reduce(
      (acc, servId) => {
        const { fetchId } = this._services.servicesGroup[servId];
        return `${acc}serviceIds=${fetchId}&`;
      },
      '',
    );

    const requestString = `${this._currentTariff.Id}?${requestQuery}`;

    await this.fetchTariff(requestString);
  }

  private async removeActiveService(id: number): Promise<void> {
    this._services.activeServicesIds = this._services.activeServicesIds.filter(
      el => el !== id,
    );

    const requestQuery = this._services.activeServicesIds.reduce(
      (acc, servId) => {
        const { fetchId } = this._services.servicesGroup[servId];
        return `${acc}serviceIds=${fetchId}&`;
      },
      '',
    );

    const requestString = `${this._currentTariff.Id}?${requestQuery}`;

    await this.fetchTariff(requestString);
  }

  @action
  async toggleActiveServices(id: number): Promise<void> {
    if (this._services.activeServicesIds.includes(id)) {
      await this.removeActiveService(id);
    } else {
      await this.addActiveService(id);
    }
  }

  @action
  public fetchTariff = async (tariffId: string): Promise<void> => {
    try {
      this._bootState = BootState.Loading;
      const response = await fetch(
        `${process.env.REACT_APP_IMPACT_HOST}/api/base/${tariffId}?language=invariant&state=live`,
      );
      const fetchedData: IMarketingProduct = await response.json();
      runInAction(() => {
        this._currentTariff = fetchedData;
        if (this._services.servicesIds.length === 0) this.initServices();
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
        this._activeParametersGroups = [];
        this._currentTariff.Parameters.forEach(parameter => {
          const groupId = parameter.Group.Id;
          if (parameter?.Changed) {
            this._activeParametersGroups.push(parameter.Group.Id);
          }
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
          tariffPackage?.Parent?.Parameters?.forEach(parameter => {
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
      this._bootState = BootState.Success;
    } catch (error) {
      this._bootState = BootState.Error;
      console.log(error);
    }
  };

  private findTariffPackageParameterValues(
    parameterName: 'InternetPackage' | 'MinutesPackage',
  ): number[] | undefined {
    const values = this._currentTariff?.TariffPackages?.reduce<Array<number>>(
      (acc, tariffPackage) => {
        const minutesParameters: ITariffPackageParameter[] = [];

        tariffPackage?.Parent?.Parameters?.forEach(parameter => {
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
          .sort((a, b) => a - b)
      : [];
  }

  @action unmount(): void {
    this._activeBaseParameters = [];
    this._services = {
      servicesGroup: {},
      servicesIds: [],
      activeServicesIds: [],
    };
  }
}

const connectStore = new ConnectStore();

export default connectStore;
