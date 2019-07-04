import { Component, OnInit, AfterViewInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AuthService } from 'src/app/session/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit, OnDestroy {

   private _router: Subscription;
   url: string;

   private userName: string;

   isFixedClass = false;

   userIsAuthenticated = false;
   private authListenerSubs: Subscription;

  constructor(private authService: AuthService) {}

   ngOnInit(){
      this.userName = this.authService.getUserFullName();
      this.userIsAuthenticated = this.authService.getIsAuth();
      console.log(this.userIsAuthenticated);
      this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        console.log(this.userIsAuthenticated);
      });
   }

   getUserName() {
      return this.userName;
   }
   onLogout() {
      this.authService.logout();
    }
  
    ngOnDestroy() {
      this.authListenerSubs.unsubscribe();
    }

   isFixedHeader()
   {
      if (this.url === '/listing/half-map/grid' || this.url === '/listing/half-map/list') {
         return true;
       } else {
         return false;
       }
   }

   ngAfterViewInit()
   {
     
   }
}
