import { Injectable } from '@angular/core';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _users: User[] = [];

  get users(): User[] {
    return this._users;
  }

  public authenticateUser(username: string, password: string) {
    const user = this._users.find(existingUser => {
      return existingUser.password === password && existingUser.username === username;
    });
    if (user) {
      user.isCurrentUser = true;
      return true;
    }
    return false;
  }

  public getUserWithEmail(emailId: string): User {
    return this._users.find(user => {
      return user.emailId === emailId;
    });
  }

  public saveUser(user: User): boolean {
    if (this._users && this._users.length > 0) {
      const userAlreadyRegistered = this._users.filter(existingUser => {
        return existingUser.emailId === user.emailId || existingUser.username === user.username;
      });
      if (userAlreadyRegistered && userAlreadyRegistered.length > 0) {
        return false;
      }
    }
    user.isCurrentUser = true;
    this._users.push(user);
    return true;
  }

  public getCurrentUser(): User {
    return this._users.find(user => {
      return user.isCurrentUser === true;
    });
  }

  public logoutUser() {
    this._users.filter(user => {
      if (user.isCurrentUser) {
        user.isCurrentUser = false;
      }
    });
  }
}
