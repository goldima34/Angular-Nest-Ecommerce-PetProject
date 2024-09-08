import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = inject(HttpClient);

  baseApiUrl = 'http://localhost:5000/';

  getUsers() {
    return this.http.get<User>(`${this.baseApiUrl}/users`);
  }
}
