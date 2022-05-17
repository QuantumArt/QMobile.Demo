import { action, computed, observable, runInAction } from 'mobx';
import { BootState } from '../../app/enums/boot-state';
import { IMarketingProduct } from '../../app/types';

class DevicesStore {
  @observable
  private _bootState: BootState = BootState.None;

  @computed
  public get bootState(): BootState {
    return this._bootState;
  }

  @observable
  private _devicesList: Array<IMarketingProduct> = [];

  @computed
  public get devicesList(): Array<IMarketingProduct> {
    return this._devicesList;
  }

  @observable
  private _currentDevice!: IMarketingProduct;

  @computed
  public get currentDevice(): IMarketingProduct {
    return this._currentDevice;
  }

  @action
  async init(): Promise<void> {
    try {
      const response = await fetch(
        'http://sber-dpc.demo.dev.qsupport.ru/api/qmobile_catalog/products/Device?fields=MarketingProduct,Parameters,Id',
      );
      const fetchedData = await response.json();
      runInAction(() => {
        this._devicesList = fetchedData;
      });
    } catch (error) {
      console.log(error);
    }
  }

  @action
  async fetchDevice(deviceId: string): Promise<void> {
    try {
      const response = await fetch(
        `http://sber-dpc.demo.dev.qsupport.ru/api/qmobile_catalog/products/${deviceId}`,
      );
      const fetchedData: IMarketingProduct = await response.json();
      console.log(fetchedData);

      this._currentDevice = fetchedData;
    } catch (error) {
      console.log(error);
    }
  }
}

const devicesStore = new DevicesStore();

export default devicesStore;
