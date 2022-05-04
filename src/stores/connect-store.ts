import { action, computed, observable, runInAction } from 'mobx';

export class ConnectStore {
  @observable
  private _minutes: number = 150;
  @computed
  public get minutes(): number {
    return this._minutes;
  }

  @observable
  private _internet: number = 15;
  @computed
  public get internet(): number {
    return this._internet;
  }

  @action setMinutes(value: number) {
    this._minutes = value;
  }

  @action setInternet(value: number) {
    this._internet = value;
  }

  @computed
  get getPrice() {
    const minutesPrice = this._minutes;
    const internetPrice = this._internet * 25;

    const price = Math.ceil(minutesPrice + internetPrice);
    return price;
  }
}

const connectStore = new ConnectStore();

export default connectStore;
