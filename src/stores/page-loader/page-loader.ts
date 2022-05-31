import { action, computed, observable, runInAction } from 'mobx';
import { BootState } from '../../app/enums/boot-state';

export class PageLoader {
  @observable
  private _bootState: BootState = BootState.None;

  @computed
  public get bootState(): BootState {
    return this._bootState;
  }

  @action
  setBootState(state: BootState): void {
    this._bootState = state;
  }
}

const pageLoaderStore = new PageLoader();

export default pageLoaderStore;
