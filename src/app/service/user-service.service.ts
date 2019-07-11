import { Injectable } from '@angular/core';
import { User } from '../model/user.class';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }
  private USERS: User[] = [
    {
        id: 101,
        name: 'Doe'
    },
    {
        id: 102,
        name: 'Smith'
    }
];
  getUsersMock(): User[] {
    return this.USERS;
}
}
