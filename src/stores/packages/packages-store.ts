import { action, computed, observable, runInAction } from 'mobx';
import { BootState } from '../../app/enums/boot-state';
import { IMarketingProduct } from '../../app/types';

class PackagesStore {
  @observable
  private _bootState: BootState = BootState.None;

  @computed
  public get bootState(): BootState {
    return this._bootState;
  }

  @observable
  private _packagesList: Array<IMarketingProduct> = [];

  @computed
  public get packagesList(): Array<IMarketingProduct> {
    return this._packagesList;
  }

  @action
  async init(): Promise<void> {
    try {
      const response = await fetch(
        'http://sber-dpc.demo.dev.qsupport.ru/api/qmobile_catalog/products/Kit?fields=Id,MarketingProduct.Title,MarketingProduct.Description,MarketingProduct.ListImage',
      );
      const fetchedData = await response.json();
      runInAction(() => {
        this._packagesList = fetchedData;
      });
    } catch (error) {
      console.log(error);
    }
  }
}

const packagesStore = new PackagesStore();

export default packagesStore;
