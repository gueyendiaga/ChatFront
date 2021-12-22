import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private chatUrl = environment.baseURL + 'chat';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  sendMessage(message: any) {
    return this.http.post(this.chatUrl + '/message', message);
  }

  getAllUsers() {
    return this.http.get(this.chatUrl + '/users');
  }

  getAllUsersDiscussions() {
    return this.http.get(this.chatUrl + '/users-discussions');
  }

  getAllGroupesDiscussions() {
    return this.http.get(this.chatUrl + '/groupes-discussions');
  }

}
