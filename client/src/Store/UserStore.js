import { makeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    this._isAuth = false;
    this._user = {};
    this._email = "";
    this._password = "";
    this._isValidEmail = false;
    this._isValidPassword = false;
    makeAutoObservable(this);
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }
  setUser(user) {
    this._user = user;
  }
  setEmail(email) {
    this._email = email;
  }
  setPassword(password) {
    this._password = password;
  }
  setIsValidEmail(isValidEmail) {
    this._isValidEmail = isValidEmail;
  }
  setIsValidPassword(isValidPassword) {
    this._isValidPassword = isValidPassword;
  }

  get isAuth() {
    return this._isAuth;
  }
  get user() {
    return this._user;
  }
  get email() {
    return this._email;
  }
  get password() {
    return this._password;
  }
  get isValidEmail() {
    return this._isValidEmail;
  }
  get isValidPassword() {
    return this._isValidPassword;
  }
}
