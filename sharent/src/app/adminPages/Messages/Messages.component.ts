import { Component, OnInit, AfterViewInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from 'src/app/session/auth.service';
import { MessagesService } from './messages.service';
import { PageEvent } from '@angular/material';
import { Message } from './message.model';
import { ChatService } from 'src/app/chat.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'grid-full-width',
  templateUrl: './Messages.component.html',
  styleUrls: ['./Messages.component.scss'],
  providers: [ChatService],
  encapsulation: ViewEncapsulation.None
})

export class MessagesComponent implements OnInit, OnDestroy {

   
   messages: Message[] = [];
   isLoading = false;
  //  totalMessages = 0;
  //  messagesPerPage = 10;
  //  currentPage = 1;
  //  pageSizeOptions = [1, 3, 6, 12];
   userIsAuthenticated = false;
   userId: string;
   usersData: {id: string, first_name: string, last_name: string, email: string, imagePath: string}[];
   userSelected: {id: string, first_name: string, last_name: string, email: string, imagePath: string};
   selectedIndex = 0;
   userAuth: {id: string, first_name: string, last_name: string, email: string, imagePath: string};

   private senderUsername: string; // sender username for socket connection
   private receiverUsername: string; // receiver username for socket connection
   private messagesSub: Subscription;
   private authStatusSub: Subscription;
   
   constructor(public messagesService: MessagesService, private authService: AuthService, private chatService: ChatService) {}

  //  onChangedPage(pageData: PageEvent) {
  //     // this.isLoading = true;
  //     this.currentPage = pageData.pageIndex + 1;
  //     this.messagesPerPage = pageData.pageSize;
  //     this.messagesService.getMessages(this.userId, this.messagesPerPage, this.currentPage);
  //  }

   ngOnInit() {


      this.isLoading = true;
      this.userId = this.authService.getUserId();
      this.userAuth = this.authService.getAuthUser();
      this.messagesService.getUsers(this.userId);
      // this.userName = this.authService.getUserFullName();
      this.messagesSub = this.messagesService
      .getUsersUpdateListener()
      .subscribe(usersData => {
        this.usersData = usersData.usersData;
        console.log(this.usersData);
        this.onUserSelected(this.usersData[0]);
      });
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        this.userId = this.authService.getUserId();
      });
   }

    getUserName() {
      // return this.userName;
   }
   
   getUserId() {
      return this.userId;
   }
   
   ngAfterViewInit()
   {

   }
   onSaveMessage(form: NgForm) {
     console.log(form.value);
     const content = form.value.content;


    //  this.chatService.socket.emit('sendMessage', message);

      this.messagesService.addMessage(this.userId, this.userSelected.id, 'Title', content);
      
      form.reset();

      // this.messagesService.getMessageUpdateListener()
      // .subscribe(messages => {
      //   this.messages = messages.messages;
      // });

      console.log(this.messages);

      this.chatService.socket.emit('private_chat', {
        to : this.receiverUsername,
        from: this.senderUsername,
        message : {
          UserId : this.userId,
          receiver: this.userSelected.id,
          title: 'Title',
          content: content
        }
      });



    }

    onUserSelected(userSelected: {id: string, first_name: string, last_name: string, email: string, imagePath: string}) {
      this.userSelected = userSelected;
      this.receiverUsername = this.userSelected.email + this.userAuth.email;
      this.senderUsername = this.userAuth.email + this.userSelected.email;

      console.log(this.receiverUsername);
      console.log(this.senderUsername);
      this.messagesService.getMessages(userSelected.id, this.userId);
      
      this.messagesService.getMessageUpdateListener()
      .subscribe(messages => {
        this.messages = messages.messages;
      });

      this.chatService.setSocket();

      this.chatService.socket.emit('register', this.senderUsername);
      
      this.chatService.socket.on('message', (message) => {
        console.log(message);
        // this.messages.push(message);
      });

      /*Received private messages*/
      this.chatService.socket.on('private_chat', (data) => {
        const username = data.username;
        const message = data.message as Message;

        this.messages.push(message);
        // console.log(message);
      });

    }

    setIndex(index: number) {
      this.selectedIndex = index;
      console.log(index);
   }

   ngOnDestroy(): void {
    this.chatService.socket.disconnect();
  }
}
