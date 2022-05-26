import { action, computed, observable, runInAction } from 'mobx';
import { BootState } from '../../app/enums/boot-state';
import { IMarketingProduct, IParameters } from '../../app/types';

class ServiceStore {
  @observable
  private _bootState: BootState = BootState.None;

  @computed
  public get bootState(): BootState {
    return this._bootState;
  }

  @observable
  private _servicesList: Array<IMarketingProduct> = [];

  @computed
  public get servicesList(): Array<IMarketingProduct> {
    return this._servicesList;
  }

  @observable
  private _currentService!: IMarketingProduct;

  @computed
  public get currentService(): IMarketingProduct {
    return this._currentService;
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
  private _advantages: {
    text: string;
    image?: string;
  }[] = [];

  @computed
  public get advantages(): typeof this._advantages {
    return this._advantages;
  }

  @computed
  public get getPrice(): number {
    let subscriptionPrice = NaN;

    Array.from(this._parametersByGroup).forEach(([_, value]) => {
      const parameterWithSubscription = value
        .flat()
        .find(
          parameter => parameter?.BaseParameter?.Alias === 'SubscriptionFee',
        );

      subscriptionPrice =
        parameterWithSubscription?.NumValue ?? subscriptionPrice;
    });

    return subscriptionPrice;
  }

  @action
  async init(): Promise<void> {
    try {
      const response = await fetch(
        'http://sber-dpc.demo.dev.qsupport.ru/api/qmobile_catalog/products/Service?fields=Id,MarketingProduct.Title,MarketingProduct.Description,MarketingProduct.ListImage',
      );
      const fetchedData = await response.json();
      runInAction(() => {
        this._servicesList = fetchedData;
      });
    } catch (error) {
      console.log(error);
    }
  }

  @action
  async fetchService(serviceId: string): Promise<void> {
    try {
      this._parametersByGroup = new Map();
      const response = await fetch(
        `http://sber-dpc.demo.dev.qsupport.ru/api/qmobile_catalog/products/${serviceId}`,
      );
      const fetchedData: IMarketingProduct = await response.json();

      this._currentService = fetchedData;

      this._currentService.Parameters?.forEach(parameter => {
        const groupId = parameter.Group.Id;
        if (parameter.Group.Title !== 'Системная') {
          if (this._parametersByGroup.has(groupId)) {
            this._parametersByGroup.get(groupId)?.push(parameter);
          } else {
            this._parametersByGroup.set(groupId, [parameter]);
          }
        }

        if (parameter.Group.Title === 'Системная') {
          this._advantages.push({
            text: parameter.Title,
            image: parameter?.Image,
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  @action
  unmount(): void {
    this._advantages = [];
  }
}

const servicesStore = new ServiceStore();

export default servicesStore;
