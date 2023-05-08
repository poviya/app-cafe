import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private open: boolean = false;
  constructor() { }

  get search() {
    return this.open;
  }

  toogle() {
    this.open =  !this.open;
  }

  device(value: boolean) {
    this.open = value;
  }
}
