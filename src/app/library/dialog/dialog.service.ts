import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private openDelete: boolean = false;
  private openTip: boolean = false;
  private openStatus: boolean = false;

  constructor() { }

  get modalDelete() {
    return this.openDelete;
  } 

  get modalTip() {
    return this.openTip;
  } 

  get modalStatus() {
    return this.openStatus;
  } 

  toogleDelete() {
    this.openDelete = !this.openDelete;
  }

  toogleTip() {
    this.openTip = !this.openTip ;
  }

  toogleStatus() {
    this.openStatus = !this.openStatus;
  }
}
