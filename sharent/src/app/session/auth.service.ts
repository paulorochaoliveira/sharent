import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { AuthData } from './auth-data.model';
import { environment } from '../../environments/environment';
import { User } from './user.model';
import { Address } from './address.model';

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
    private authUserListener = new Subject<User>();

    private loginFailed = false;
    private user: {id: string, first_name: string, last_name: string, email: string, imagePath: string};
    private userEmail: string;
    private userAuth: User;

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

    getUserFullName() {
      return this.userFirstName + ' ' + this.userLastName;
    }
  
    getAuthStatusListener() {
      return this.authStatusListener.asObservable();
    }

    getAuthUserListener() {
      return this.authUserListener.asObservable();
    }

    getLoginFailed() {
      return this.loginFailed;
    }

    getAuthUser() {
      return this.user;
    }

    getUserAuth() {
      return this.userAuth;
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

    // tslint:disable-next-line: max-line-length
    createAddress(civicNumber: string, apto: string, streetName: string, city: string, province: string, postalCode: string, UserId: string) {
      const  addressData: Address = {
        civicNumber: civicNumber,
        apto: apto,
        streetName: streetName,
        city: city,
        province: province,
        postalCode: postalCode,
        UserId: UserId,
        latitude: null,
        longitude: null,
      };
      this.http.post('http://localhost:3000/api/address', addressData)
          .subscribe(response => {
              console.log(response);
          }
      );
    }

    updateAddress(civicNumber: string, apto: string, streetName : string,
      city: string, province: string, postalCode: string, UserId: string){
        const  addressData: Address = {
          civicNumber: civicNumber,
          apto: apto,
          streetName: streetName,
          city: city,
          province: province,
          postalCode: postalCode,
          UserId: UserId,
          latitude: null,
          longitude: null,
        };
        this.http.put('http://localhost:3000/api/address/update', addressData)
          .subscribe(response => {
              console.log(response);
          }
      );
    }

    login(email: string, password: string) {
        const authData = { last_name: null, first_name : null, email: email, password: password };
        this.http
          .post<{ token: string; expiresIn: number; UserId: string; userLastName: string; userFirstName: string, imagePath: string }>(
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
                this.loginFailed = false;
                this.isAuthenticated = true;
                this.UserId = response.UserId;
                this.userLastName = response.userLastName;
                this.userFirstName = response.userFirstName;
                this.userEmail = email;
                this.getUser();
                this.user = {
                  id: this.UserId,
                  first_name: this.userFirstName,
                  last_name: this.userLastName,
                  email: email,
                  imagePath: response.imagePath
                };
                this.authStatusListener.next(true);
                const now = new Date();
                const expirationDate = new Date(
                  now.getTime() + expiresInDuration * 1000
                );
                console.log(expirationDate);
                this.saveAuthData(token, expirationDate, this.UserId, this.userLastName,
                                  this.userFirstName, this.userEmail, response.imagePath);
                this.router.navigate(['/']);
              } else
              {
                this.loginFailed = true;
                this.authStatusListener.next(false);
              }
            },
            error => {
              this.authStatusListener.next(false);
            }
          );
      }

      updateUser(id: string, first_name: string, last_name: string, image: File | string) {
        let userData: User | FormData;
        if (typeof image === 'object') {
          userData = new FormData();
          userData.append('id', id);
          userData.append('first_name', first_name);
          userData.append('last_name', last_name);
          userData.append('image', image, first_name + ' ' + last_name);
        } else {
          userData = {
            id: id,
            first_name: first_name,
            last_name: last_name,
            imagePath: image,
            email: null,
            password: null,
            Address: null
          };
        }
        console.log(userData);
        this.http.put(BACKEND_URL + '/update', userData).subscribe(userData => {
          console.log(userData);
          this.getUser();
          this.authUserListener.next(this.userAuth);
          this.router.navigate(['/admin/list']);
          // this.userAuth = userData;
        });
      }


      getUser() {
        this.http.get<{ message: string; user: User}>(
          BACKEND_URL + '/profile'
        ).subscribe(userData => {
          console.log(userData);
          this.userAuth = userData.user;
          this.userFirstName = userData.user.first_name;
          this.userLastName = userData.user.last_name;

        });
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
          this.user = {
            id: authInformation.UserId,
            first_name: authInformation.userFirstName,
            last_name: authInformation.userLastName,
            email: authInformation.userEmail,
            imagePath: authInformation.imagePath
          };
          console.log(this.user);
          this.getUser();
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
    
      private saveAuthData(token: string, expirationDate: Date, UserId: string,
                            userLastName: string, userFirstName: string, userEmail: string, imagePath: string) {
        localStorage.setItem('token', token);
        localStorage.setItem('expiration', expirationDate.toISOString());
        localStorage.setItem('UserId', UserId);
        localStorage.setItem('userLastName', userLastName);
        localStorage.setItem('userFirstName', userFirstName);
        localStorage.setItem('userEmail', userEmail);
        localStorage.setItem('imagePath', imagePath);
      }
    
      private clearAuthData() {
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
        localStorage.removeItem('UserId');
        localStorage.removeItem('userLastName');
        localStorage.removeItem('userFirstName');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('imagePath');

      }
    
      private getAuthData() {
        const token = localStorage.getItem('token');
        const expirationDate = localStorage.getItem('expiration');
        const UserId = localStorage.getItem('UserId');
        const userLastName = localStorage.getItem('userLastName');
        const userFirstName = localStorage.getItem('userFirstName');
        const userEmail = localStorage.getItem('userEmail');
        const imagePath = localStorage.getItem('imagePath');
        if (!token || !expirationDate) {
          return;
        }
        return {
          token: token,
          expirationDate: new Date(expirationDate),
          UserId: UserId,
          userLastName : userLastName,
          userFirstName: userFirstName,
          userEmail: userEmail,
          imagePath: imagePath,
        };
      }

}
