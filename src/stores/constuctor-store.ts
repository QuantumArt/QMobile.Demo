import { action, computed, observable, runInAction } from 'mobx';

export class ConstructorStore {
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
        this._minutes = value
    }

    @action setInternet(value: number) {
        this._internet = value
    }
}


const constructorStore = new ConstructorStore();

export default constructorStore;
