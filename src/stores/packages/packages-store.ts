import delay from 'delay';
import { action, computed, observable, runInAction } from 'mobx';
import { BootState } from '../../app/enums/boot-state';
import {
  IMarketingProduct,
  IPackage,
  IParameters,
  ItemsInPackage,
} from '../../app/types';

export class PackagesStore {
  @observable
  private _bootState: BootState = BootState.None;

  @computed
  public get bootState(): BootState {
    return this._bootState;
  }

  @observable
  private _packagesList: Array<IPackage> = [];

  @computed
  public get packagesList(): Array<IPackage> {
    return this._packagesList;
  }

  @observable
  private _currentPackage!: IPackage;

  @computed
  public get currentPackage(): IPackage {
    return this._currentPackage;
  }

  @observable
  private _itemsInPackage: ItemsInPackage = [];

  @computed
  public get itemsInPackage(): ItemsInPackage {
    return this._itemsInPackage;
  }

  @computed
  public get packagePrice(): number {
    const parameterWithPrice = this._currentPackage?.Parameters.find(
      parameter => parameter.Title === 'Цена стартового комплекта',
    );

    return parameterWithPrice?.NumValue ?? 0;
  }

  @action
  async init(): Promise<void> {
    try {
      const response = await fetch(
        'http://sber-dpc.demo.dev.qsupport.ru/api/qmobile_catalog/products/Kit?fields=Id,MarketingProduct.Title,MarketingProduct.Description,Images',
      );
      const fetchedData = await response.json();

      runInAction(() => {
        this._packagesList = fetchedData;
      });
    } catch (error) {
      console.log(error);
    }
  }

  @action
  async fetchPackage(packageId: string): Promise<void> {
    try {
      const response = await fetch(
        `http://sber-dpc.demo.dev.qsupport.ru/api/qmobile_catalog/products/${packageId}`,
      );
      const fetchedData: IPackage = await response.json();

      this._currentPackage = fetchedData;

      // ! Can't use Promise.all because of  "API rate limit exceeded for 172.16.4.125" error
      // eslint-disable-next-line no-restricted-syntax
      for (const product of this._currentPackage.ProductsInKit) {
        // eslint-disable-next-line no-await-in-loop
        const itemResponse = await fetch(
          `http://sber-dpc.demo.dev.qsupport.ru/api/qmobile_catalog/products/${product.Id}`,
        );

        // eslint-disable-next-line no-await-in-loop
        const item: IMarketingProduct = await itemResponse.json();
        this._itemsInPackage = [...this._itemsInPackage, item];
        console.log(this._itemsInPackage);
        // eslint-disable-next-line no-await-in-loop
        await delay(500);
      }
    } catch (error) {
      console.log(error);
    }
  }

  static generateParametersByGroup(
    item: IMarketingProduct,
  ): Map<number, IParameters[]> {
    const parametersByGroup = new Map<number, IParameters[]>();

    item.Parameters.forEach(parameter => {
      const groupId = parameter.Group.Id;
      if (
        parameter.Group.Title !== 'Дополнительная информация' &&
        parameter.Group.Title !== 'Преимущества'
      ) {
        if (parametersByGroup.has(groupId)) {
          parametersByGroup.get(groupId)?.push(parameter);
        } else {
          parametersByGroup.set(groupId, [parameter]);
        }
      }
    });

    return parametersByGroup;
  }
}

const packagesStore = new PackagesStore();

export default packagesStore;
