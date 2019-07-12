import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { MenuItems } from './menu-items';
import { AuthService } from 'src/app/session/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './Menu.component.html',
  styleUrls: ['./Menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {

   selectedMenu: any = null;
   selectedSubMenu: any = null;
   userIsAuthenticated = false;
   private authListenerSubs: Subscription;

   constructor(public menuItems: MenuItems, public authService: AuthService) {}

   ngOnInit(){
      this.userIsAuthenticated = this.authService.getIsAuth();
      this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
   }

   menuClick(value)
   {
      if(this.selectedMenu == value)
      {
         this.selectedMenu = null;
      }
      else
      {
         this.selectedMenu = value;
      }
   }

   subMenuClick(value)
   {
      if(this.selectedSubMenu == value)
      {
         this.selectedSubMenu = null;
      }
      else
      {
         this.selectedSubMenu = value;
      }
   }
}
