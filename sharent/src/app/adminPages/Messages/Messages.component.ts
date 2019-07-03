import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from 'src/app/session/auth.service';
import { MessagesService } from './messages.service';
import { PageEvent } from '@angular/material';
import { Message } from './message.model';

@Component({
  selector: 'grid-full-width',
  templateUrl: './Messages.component.html',
  styleUrls: ['./Messages.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MessagesComponent implements OnInit{
   
   messages: Message[] = [];
   isLoading = false;
   totalMessages = 0;
   messagesPerPage = 10;
   currentPage = 1;
   pageSizeOptions = [1, 3, 6, 12];
   userIsAuthenticated = false;
   userId: string;
   private messagesSub: Subscription;
   private authStatusSub: Subscription;

   constructor(public messagesService: MessagesService, private authService: AuthService) {}

   onChangedPage(pageData: PageEvent) {
      // this.isLoading = true;
      this.currentPage = pageData.pageIndex + 1;
      this.messagesPerPage = pageData.pageSize;
      this.messagesService.getMessages(this.messagesPerPage, this.currentPage);
   }

   ngOnInit() {
      this.isLoading = true;
      this.messagesService.getMessages(this.messagesPerPage, this.currentPage);
      this.userId = this.authService.getUserId();
      this.messagesSub = this.messagesService
      .getMessageUpdateListener()
      .subscribe((messageData: { messages: Message[]; maxMessages: number }) => {
        this.isLoading = false;
        this.totalMessages = messageData.maxMessages;
        this.messages = messageData.messages;
        console.log(messageData);
      });
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        this.userId = this.authService.getUserId();
      });
   }

   ngAfterViewInit()
   {

   }

}
