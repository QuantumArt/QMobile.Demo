import { action, computed, observable, runInAction } from 'mobx';
import { BootState } from '../../app/enums/boot-state';
import { IFeatureItem, IMarketingProduct } from '../../app/types';

export class DevicesStore {
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

  @computed
  public get description(): string | undefined {
    return this._currentDevice?.Parameters.find(
      parameter => parameter.Group.Title === 'Описание',
    )?.Value;
  }

  @computed
  public get featuresList(): Map<string, IFeatureItem[]> {
    return DevicesStore.generateFeaturesList(this._currentDevice);
  }

  static generateFeaturesList(
    device: IMarketingProduct,
  ): Map<string, IFeatureItem[]> {
    const featuresListByTabs = new Map<string, IFeatureItem[]>();

    device?.Parameters.forEach(parameter => {
      if (parameter?.Group?.Title === 'Характеристики' && parameter?.Parent) {
        const feature = {
          id: parameter.Id,
          property: parameter.Title,
          value: parameter?.Value ?? '',
        };

        if (featuresListByTabs.has(parameter?.Parent.Title)) {
          featuresListByTabs.get(parameter?.Parent.Title)?.push(feature);
        } else {
          featuresListByTabs.set(parameter?.Parent.Title, [feature]);
        }
      }
    });

    return featuresListByTabs;
  }

  @action
  async init(): Promise<void> {
    try {
      const response = await fetch(
        'http://sber-dpc.demo.dev.qsupport.ru/api/qmobile_catalog/products/Device?fields=MarketingProduct,Parameters,Id,Images,Modifiers',
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

      this._currentDevice = fetchedData;
    } catch (error) {
      console.log(error);
    }
  }
}

const devicesStore = new DevicesStore();

export default devicesStore;
