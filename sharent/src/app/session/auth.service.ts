import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { AuthData } from './auth-data.model';
import { environment } from '../../environments/environment';

const BACKEND_URL = environment.apiUrl + '/user/';

@Injectable({ providedIn: 'root'})
export class AuthService {

    private isAuthenticated = false;
    private token: string;
    private tokenTimer: any;
    private UserId: string;
    private userFirstName: string;
    private userLastName: string;
    private authStatusListener = new Subject<boolean>();

    constructor(private http: HttpClient, private router: Router) {}
    
    getToken() {
      return this.token;
    }

    getIsAuth() {
      return this.isAuthenticated;
    }
  
    getUserId() {
      return this.UserId;
    }

    getUserFullName(){
      return this.userFirstName + ' ' + this.userLastName;
    }
  
    getAuthStatusListener() {
      return this.authStatusListener.asObservable();
    }

    createUser(last_name: string, first_name: string, email: string, password: string) {
        const  authData: AuthData = {
            last_name: last_name, first_name: first_name, email: email, password: password
        };
        this.http.post('http://localhost:3000/api/user/register', authData)
            .subscribe(response => {
                console.log(response);
                this.router.navigate(['/']);
            },
            error => {
                this.authStatusListener.next(false);
            }
        );
    }

    login(email: string, password: string) {
        const authData: AuthData = { last_name: null, first_name : null, email: email, password: password };
        this.http
          .post<{ token: string; expiresIn: number; UserId: string; userLastName: string; userFirstName: string }>(
            BACKEND_URL + '/login',
            authData
          )
          .subscribe(
            response => {
              const token = response.token;
              this.token = token;
              if (token) {
                const expiresInDuration = response.expiresIn;
                this.setAuthTimer(expiresInDuration);
                this.isAuthenticated = true;
                this.UserId = response.UserId;
                this.userLastName = response.userLastName;
                this.userFirstName = response.userFirstName;
                this.authStatusListener.next(true);
                const now = new Date();
                const expirationDate = new Date(
                  now.getTime() + expiresInDuration * 1000
                );
                console.log(expirationDate);
                this.saveAuthData(token, expirationDate, this.UserId, this.userLastName, this.userFirstName);
                this.router.navigate(['/']);
              }
            },
            error => {
              this.authStatusListener.next(false);
            }
          );
      }
    
      autoAuthUser() {
        const authInformation = this.getAuthData();
        if (!authInformation) {
          return;
        }
        const now = new Date();
        const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
        if (expiresIn > 0) {
          this.token = authInformation.token;
          this.isAuthenticated = true;
          this.UserId = authInformation.UserId;
          this.userLastName = authInformation.userLastName;
          this.userFirstName = authInformation.userFirstName;
          this.setAuthTimer(expiresIn / 1000);
          this.authStatusListener.next(true);
        }
      }
    
      logout() {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        this.UserId = null;
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigate(['/']);
      }
    
      private setAuthTimer(duration: number) {
        console.log('Setting timer: ' + duration);
        this.tokenTimer = setTimeout(() => {
          this.logout();
        }, duration * 1000);
      }
    
      private saveAuthData(token: string, expirationDate: Date, UserId: string, userLastName: string, userFirstName: string) {
        localStorage.setItem('token', token);
        localStorage.setItem('expiration', expirationDate.toISOString());
        localStorage.setItem('UserId', UserId);
        localStorage.setItem('userLastName', userLastName);
        localStorage.setItem('userFirstName', userFirstName);
      }
    
      private clearAuthData() {
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
        localStorage.removeItem('UserId');
        localStorage.removeItem('userLastName');
        localStorage.removeItem('userFirstName');

      }
    
      private getAuthData() {
        const token = localStorage.getItem('token');
        const expirationDate = localStorage.getItem('expiration');
        const UserId = localStorage.getItem('UserId');
        const userLastName = localStorage.getItem('userLastName');
        const userFirstName = localStorage.getItem('userFirstName');
        if (!token || !expirationDate) {
          return;
        }
        return {
          token: token,
          expirationDate: new Date(expirationDate),
          UserId: UserId,
          userLastName : userLastName,
          userFirstName: userFirstName
        };
      }

}
