import { Component, OnInit, AfterViewInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { AdminMenuItems } from './admin-menu-items';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/session/auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { User } from 'src/app/session/user.model';

@Component({
  selector: 'app-admin-header',
  templateUrl: './AdminHeader.component.html',
  styleUrls: ['./AdminHeader.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminHeaderComponent implements OnInit, OnDestroy {

  private _router: Subscription;
  url: string;

  isFixedClass: boolean = false;
  private userName: string;
  user: User;
  
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;

 constructor(public authService: AuthService) {}

  ngOnInit() {
     // this._router = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
     //    this.url = event.url;
     //    if (this.isFixedHeader()) {
     //       this.isFixedClass = true;
     //    }
     //    else
     //    {
     //       this.isFixedClass = false;
     //    }
     // });
     this.userIsAuthenticated = this.authService.getIsAuth();
     this.userName = this.authService.getUserFullName();
     this.user = this.authService.getUserAuth();
     this.authListenerSubs = this.authService
     .getAuthStatusListener()
     .subscribe(isAuthenticated => {
       this.userIsAuthenticated = isAuthenticated;
       this.user = this.authService.getUserAuth();
     });
     console.log(this.user.imagePath);
  }

  getUserImagePath() {
    return this.user.imagePath;
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

  ngAfterViewInit() {}
}
