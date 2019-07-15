import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';
import { Message } from './message.model';

const BACKEND_URL = environment.apiUrl + '/message/';

@Injectable({ providedIn: 'root' })
export class MessagesService {
  private messages: Message[] = [];
  private usersData: {id: string, first_name: string, last_name: string, imagePath: string}[];
  private messagesUpdated = new Subject<{ messages: Message[]}>();
// tslint:disable-next-line: max-line-length
  private usersUpdated = new Subject<{ usersData: {id: string, first_name: string, last_name: string, email: string, imagePath: string}[]}>();
  

  constructor(private http: HttpClient, private router: Router) {}

  getUsers(UserId: string) {
    const queryParams = `?UserId=${UserId}`;
    this.http
      .get<{ users: any}>(
        BACKEND_URL + 'users' + queryParams
      )
      .pipe(
        map(usersData => {
          // console.log(usersData);
          return {
            users: usersData.users
            .map(user => {
              return {
                id : user.User.id,
                first_name: user.User.first_name,
                last_name: user.User.last_name,
                email: user.User.email,
                imagePath: user.User.imagePath
              };
            })
          };
        })
      )
      .subscribe(transformedUsersData => {
        this.usersData = transformedUsersData.users;
        this.usersUpdated.next({
          usersData: transformedUsersData.users
        });
      });
    }

  getMessages(UserId: string, receiver: string) {

    const queryParams = `?UserId=${UserId}&receiver=${receiver}`;
    this.http
      .get<{ messages: any }>(
        BACKEND_URL + queryParams
      )
      .pipe(
        map(messageData => {
          return {
            messages: messageData.messages.map(message => {
              return {
                id: message.id,
                UserId: message.UserId,
                receiver: message.receiver,
                title: message.title,
                content: message.content,
                isRead: message.isRead,
                createdAt: message.createdAt,
                User: message.User
              };
            })
          };
        })
      )
      .subscribe(transformedMessageData => {
        this.messages = transformedMessageData.messages;
        this.messagesUpdated.next({
          messages: [...this.messages]
        });
      });
  }

  getMessageUpdateListener() {
    return this.messagesUpdated.asObservable();
  }

  getUsersUpdateListener() {
    return this.usersUpdated.asObservable();
  }

  getMessage(id: string) {
    return this.http.get<{
      id: string;
      userId: string;
      recipientId: string;
      title: string;
      content: string;
      idRead: string;
      created_at: string;
    }>(BACKEND_URL + id);
  }

  addMessage(userId: string, receiver: string, title: string, content: string) {
    const messageData = new FormData();
    messageData.append('userId', userId);
    messageData.append('receiver', receiver);
    messageData.append('title', title);
    messageData.append('content', content);

    this.http
      .post<{ message: Message }>(
        BACKEND_URL,
        messageData
      )
      .subscribe(responseData => {
        console.log(responseData);
        // this.router.navigate(['/']);
      });
  }
}
