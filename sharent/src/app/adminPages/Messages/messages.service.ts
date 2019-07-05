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
  private messagesUpdated = new Subject<{ messages: Message[]; maxMessages: number }>();

  constructor(private http: HttpClient, private router: Router) {}

  getMessages(messagesPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${messagesPerPage}&page=${currentPage}`;
    this.http
      .get<{ message: string; messages: any; maxMessages: number }>(
        BACKEND_URL + queryParams
      )
      .pipe(
        map(messageData => {
          return {
            message: messageData.message,
            messages: messageData.messages.map(message => {
              return {
                id: message.id,
                userId: message.userId,
                recipientId: message.recipientId,
                title: message.title,
                content: message.content,
                isRead: message.isRead
              };
            }),
            maxMessages: messageData.maxMessages
          };
        })
      )
      .subscribe(transformedMessageData => {
        this.messages = transformedMessageData.messages;
        this.messagesUpdated.next({
          messages: [...this.messages],
          maxMessages: transformedMessageData.maxMessages
        });
      });
  }

  getMessageUpdateListener() {
    return this.messagesUpdated.asObservable();
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

  addMessage(userId: string, recipientId: string, title: string, content: string, isRead: string) {
    const messageData = new FormData();
    messageData.append('userId', userId);
    messageData.append('recipientId', recipientId);
    messageData.append('title', title);
    messageData.append('content', content);
    messageData.append('isRead', isRead);

    this.http
      .post<{ message: Message }>(
        BACKEND_URL,
        messageData
      )
      .subscribe(responseData => {
        console.log(responseData);
        this.router.navigate(['/']);
      });
  }
}
