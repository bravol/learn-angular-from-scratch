import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Brian' },
    { id: 3, name: 'Maria' },
  ];
  constructor() {}

  getUsers() {
    return of(this.users);
  }
}

// ng g service user/user
