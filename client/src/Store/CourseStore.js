import { makeAutoObservable } from "mobx";

export default class CourseStore {
  constructor() {
    this._occupations = [];
    this._authors = [];
    this._courseData = [];
    this._unmoderatedCourseData = [];
    this._choiseCardData = [];
    this._selectedOccupation = {};
    this._selectedAuthor = {};
    this._page = 1;
    this._totalCount = 0;
    this._limit = 3;
    makeAutoObservable(this);
  }

  setOccupations(occupations) {
    this._occupations = occupations;
  }
  setAuthors(authors) {
    this._authors = authors;
  }

  setCourseData(data) {
    this._courseData = data;
  }
  setUnmoderatedCourseData(data) {
    this._unmoderatedCourseData = data;
  }

  setChoiseCardData(data) {
    this._choiseCardData = data;
  }

  setSelectedOccupation(type) {
    this.setPage(1);
    this._selectedOccupation = type;
  }
  setSelectedAuthor(brand) {
    this.setPage(1);
    this._selectedAuthor = brand;
  }
  setPage(page) {
    this._page = page;
  }
  setTotalCount(count) {
    this._totalCount = count;
  }

  get occupations() {
    return this._occupations;
  }
  get authors() {
    return this._authors;
  }

  get courseData() {
    return this._courseData;
  }
  get unmoderatedCourseData() {
    return this._unmoderatedCourseData;
  }

  get selectedOccupation() {
    return this._selectedOccupation;
  }
  get selectedAuthor() {
    return this._selectedAuthor;
  }

  //
  get totalCount() {
    return this._totalCount;
  }
  get page() {
    return this._page;
  }
  get limit() {
    return this._limit;
  }
}
