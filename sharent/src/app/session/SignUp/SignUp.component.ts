import { Component, OnInit, AfterViewInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { AuthService } from '../auth.service';

@Component({
  selector: 'signup',
  templateUrl: './SignUp.component.html',
  styleUrls: ['./SignUp.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignUpComponent implements OnInit, OnDestroy {
    isLoading = false;
    private authStatusSub: Subscription;

   constructor(public authService: AuthService) {}

   onSignup(form: NgForm) {
      console.log(form.value);
      if (form.invalid) {
        return;
      }
      this.authService.createUser(form.value.last_name, form.value.first_name, form.value.email, form.value.password);
   }

   ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus => {
        this.isLoading = false;
      }
    );
   }

   ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }

   ngAfterViewInit() {}
}
