import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {User} from './user.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  baseUrl: string;
debugger;
  message = new BehaviorSubject <string> ('name');

  constructor(private _httpClient: HttpClient) {
    this.baseUrl = environment.baseUrl;
    console.log(this.message);
  }

  fetchUser() {
    return  this._httpClient.get<User>(`${this.baseUrl}/intenal`);
    
  }
}
