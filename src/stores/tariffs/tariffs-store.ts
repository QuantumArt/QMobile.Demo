// import { FormControl, FormGroup } from '@quantumart/mobx-form-validation-kit';
import { action, computed, observable, runInAction } from 'mobx';
import { BootState } from '../../app/enums/boot-state';
import { IMarketingProduct } from '../../app/types';
// import { FormTariffFilter } from './forms';
import { ITariffsCardsGroup } from './tariffs-cards-group';
import { ITariffFilterGroup } from './tariffs-filters-group';

export class TariffsStore {
  @observable
  private _bootState: BootState = BootState.None;

  @computed
  public get bootState(): BootState {
    return this._bootState;
  }

  @observable
  private _bootStateTariffCards: BootState = BootState.None;

  @computed
  public get bootStateTariffCards(): BootState {
    return this._bootStateTariffCards;
  }

  private _filtersGroups: ITariffFilterGroup[] = [];

  public get filtersGroups(): ITariffFilterGroup[] {
    return this._filtersGroups;
  }

  // private _form?: FormGroup<FormTariffFilter>;
  // public get form(): FormGroup<FormTariffFilter> {
  //   return this._form!;
  // }

  @observable
  private _selectedFilter!: string;

  @computed
  public get selectedFilter(): string {
    return this._selectedFilter;
  }

  @observable
  private _tariffsCardsGroup: ITariffsCardsGroup = [];

  @computed
  public get tariffsCardsGroup(): ITariffsCardsGroup {
    return this._tariffsCardsGroup;
  }

  @action
  setFilter(filterAlias: string): void {
    this._selectedFilter = filterAlias;
  }

  @action
  public init = async (): Promise<void> => {
    try {
      this._bootState = BootState.Loading;
      // this._filtersGroups = tariffsFilters;
      const response = await fetch(
        'http://sber-dpc.demo.dev.qsupport.ru/api/qmobile_catalog/products/Tariff?fields=MarketingProduct.Category.Title,MarketingProduct.Category.Alias',
      );
      const data: Array<IMarketingProduct> = await response.json();

      data.forEach(product => {
        const filter: ITariffFilterGroup = {
          Title: product.MarketingProduct.Category.Title,
          Alias: product.MarketingProduct.Category.Alias,
        };

        if (!this._filtersGroups.some(el => el.Alias === filter.Alias)) {
          this._filtersGroups.push(filter);
        }
      });

      this._selectedFilter = this._filtersGroups[0].Alias as string;
      await this.fetchTariffs();
      // this.initForm();
      // await this.load();
      this._bootState = BootState.Success;
    } catch (error) {
      console.log(error);
      this._bootState = BootState.Error;
    }
  };

  @action
  unmount(): void {
    this._tariffsCardsGroup = [];
    this._selectedFilter = '';
  }

  @action
  public fetchTariffs = async (): Promise<void> => {
    try {
      this._bootStateTariffCards = BootState.Loading;
      const response = await fetch(
        `http://sber-dpc.demo.dev.qsupport.ru/api/qmobile_catalog/products/Tariff?fields=Id,MarketingProduct.ListImage,Modifiers,MarketingProduct.Category.Title,MarketingProduct.Category.Alias,MarketingProduct.Title,Parameters.Title,Parameters.NumValue,Parameters.BaseParameter,Parameters.Unit&MarketingProduct.Category.Alias=${this._selectedFilter}`,
      );
      const fetchedData: ITariffsCardsGroup = await response.json();
      runInAction(() => {
        this._tariffsCardsGroup = fetchedData;
        this._bootStateTariffCards = BootState.Success;
      });
    } catch (error) {
      console.log(error);
    }
  };
}

const tariffsStore = new TariffsStore();

export default tariffsStore;
