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
  public get currentTariff(): IMarketingProduct {
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
      const response = await fetch(
        `http://sber-dpc.demo.dev.qsupport.ru/api/qmobile_catalog/products/${serviceId}`,
      );
      const fetchedData: IMarketingProduct = await response.json();
      console.log(fetchedData);

      this._currentService = fetchedData;
    } catch (error) {
      console.log(error);
    }
  }
}

const servicesStore = new ServiceStore();

export default servicesStore;
