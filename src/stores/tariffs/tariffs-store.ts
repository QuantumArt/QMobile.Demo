// import { FormControl, FormGroup } from '@quantumart/mobx-form-validation-kit';
import { action, computed, observable, runInAction } from 'mobx';
import { filterFetchRoutes } from '../../app/constants/filter-fetch-routes';
import { BootState } from '../../app/enums/boot-state';
// import { FormTariffFilter } from './forms';
import { ITariffsCardsGroup } from './tariffs-cards-group';
import { ITariffFilterGroup, tariffsFilters } from './tariffs-filters-group';

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
  setFilter(filterAlias: string) {
    this._selectedFilter = filterAlias;
  }

  @action
  public init = async (): Promise<void> => {
    this._bootState = BootState.Loading;
    this._filtersGroups = tariffsFilters;
    this._selectedFilter = tariffsFilters[0].alias as string;
    await this.fetchTariffs();
    // this.initForm();
    await this.load();
    this._bootState = BootState.Success;
  };

  @action
  unmount() {
    this._tariffsCardsGroup = [];
    this._selectedFilter = '';
  }

  // public initForm = (): void => {
  //   this._form = new FormGroup<FormTariffFilter>({
  //     group: new FormControl<ITariffFilterGroup>(tariffsFilters[0]),
  //     search: new FormControl<string>(''),
  //   });
  // };

  public load = async (): Promise<void> => {
    ///fetch
  };

  @action
  public fetchTariffs = async (): Promise<void> => {
    try {
      this._bootStateTariffCards = BootState.Loading;
      const response = await fetch(
        filterFetchRoutes[
          this._selectedFilter as keyof typeof filterFetchRoutes
        ],
      ); // нужен тайпгард
      const fetchedData: ITariffsCardsGroup = await response.json();
      console.log(fetchedData);
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
