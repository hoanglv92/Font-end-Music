import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Users} from './users';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) {
  }

  // @ts-ignore
  saveUser(user: Users) {
    this.httpClient.post('http://localhost:8080/api/register', user).subscribe();
  }

}
