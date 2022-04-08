import { makeAutoObservable } from 'mobx';

export default class CardStore {
  constructor() {
    this._cardData = [];
    this._choiseCardData = [];
    makeAutoObservable(this);
  }

  setCardData(data) {
    this._cardData = data;
  }
  setChoiseCardData(data) {
    this._choiseCardData = data;
  }

  get cardData() {
    return this._cardData;
  }

  get choiseCardData() {
    return this._choiseCardData;
  }
}
