import { Component, OnInit, AfterViewInit, ViewEncapsulation, Input } from '@angular/core';
import { MessagesService } from 'src/app/adminPages/Messages/messages.service';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/session/auth.service';

@Component({
  selector: 'sidebar-layout-two',
  templateUrl: './SidebarLayoutTwo.component.html',
  styleUrls: ['./SidebarLayoutTwo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarLayoutTwoComponent implements OnInit {

  @Input() userIdChild: string;
  @Input() userNameChild: string;
  @Input() userImagePathChild: string;

  public userId: string;
  public isAuth = false;

   constructor(public messagesService: MessagesService, private authService: AuthService) {}

   ngOnInit() {
     this.isAuth = this.authService.getIsAuth();
     if (this.isAuth) {
       this.userId = this.authService.getUserId();
     }
   }

   onSaveMessage(form: NgForm) {

    const content = form.value.content;

    this.messagesService.addMessage(this.userId, this.userIdChild, 'Title', content);

     form.reset();
   }

   ngAfterViewInit()
   {

   }
}
