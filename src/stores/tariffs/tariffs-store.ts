import { FormControl, FormGroup } from '@quantumart/mobx-form-validation-kit';
import { action, computed, observable } from 'mobx';
import { BootState } from '../../app/enums/boot-state';
import { FormTariffFilter } from './forms';
import { ITariffFilterGroup, tariffsFilters } from './tariffs-filters-group';

export class TariffsStore {
  @observable
  private _bootState: BootState = BootState.None;

  @computed
  public get bootState(): BootState {
    return this._bootState;
  }
  private _filtersGroups: ITariffFilterGroup[] = [];
  public get filtersGroups(): ITariffFilterGroup[] {
    return this._filtersGroups;
  }

  private _form?: FormGroup<FormTariffFilter>;
  public get form(): FormGroup<FormTariffFilter> {
    return this._form!;
  }

  @observable
  private _selectedFilter!: string;

  @computed
  public get selectedFilter(): string {
    return this._selectedFilter;
  }

  @action
  setFilter(filterAlias: string) {
    this._selectedFilter = filterAlias;
  }

  @action
  public init = async (): Promise<void> => {
    this._bootState = BootState.Loading;
    this._filtersGroups = tariffsFilters;
    this._selectedFilter = tariffsFilters[0].alias;
    this.initForm();
    await this.load();
    this._bootState = BootState.Success;
  };

  public initForm = (): void => {
    this._form = new FormGroup<FormTariffFilter>({
      group: new FormControl<ITariffFilterGroup>(tariffsFilters[0]),
      search: new FormControl<string>(''),
    });
  };

  public load = async (): Promise<void> => {
    ///fetch
  };
}

const tariffsStore = new TariffsStore();

export default tariffsStore;
