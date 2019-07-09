import { Injectable } from '@angular/core';
import { User } from '../_model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _users: User[] = [];

  get users(): User[] {
    return this._users;
  }

  public getUserWithEmail(emailId: string): User {
    return this._users.find(user => {
      return user.emailId === emailId;
    });
  }

  public saveUser(user: User): boolean {
    if (this._users && this._users.length > 0) {
      const userAlreadyRegistered = this._users.filter(existingUser => {
        return existingUser.emailId === user.emailId;
      });
      if (userAlreadyRegistered) {
        return false;
      }
    }
    this._users.push(user);
    return true;
  }
}
