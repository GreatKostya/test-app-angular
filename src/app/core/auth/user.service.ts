import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private STORAGE_KEY = 'user'

  user = new BehaviorSubject<UserModel>(null);

  constructor() {
    this.fetchUserData();
  }

  login(user: UserModel) {
    this.saveToStorage(user);
    this.user.next(user);
  }

  logout() {
    this.removeFromStorage();
    this.user.next(null);
  }

  private fetchUserData() {
    const user = this.getUser();
    this.user.next(user);
  }

  //SRP is broken here
  private saveToStorage(user: UserModel) {
    window.localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
  }

  private getUser(): UserModel {
    return JSON.parse(window.localStorage.getItem(this.STORAGE_KEY)) as UserModel;
  }

  private removeFromStorage() {
    window.localStorage.removeItem(this.STORAGE_KEY);
  }
}
