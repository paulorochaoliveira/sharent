import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/session/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { mimeType } from '../AddList/mime-type.validator';
import { User } from 'src/app/session/user.model';

@Component({
  selector: 'admin-profile',
  templateUrl: './Profile.component.html',
  styleUrls: ['./Profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {

  form: FormGroup;
  imagePreview: string;
  userAuth: User;

   constructor(private authService: AuthService) {}

   ngOnInit() {
    this.authService.getUser();
    this.userAuth = this.authService.getUserAuth();
    this.form = new FormGroup({
      first_name: new FormControl(null, {validators: Validators.required}),
      last_name: new FormControl(null, {validators: Validators.required}),
      civicNumber: new FormControl(null),
      apto: new FormControl(null),
      streetName: new FormControl(null),
      city: new FormControl(null),
      province: new FormControl(null),
      postalCode: new FormControl(null),
      email: new FormControl({value: this.userAuth.email, disabled: true}),
      image: new FormControl(null, {asyncValidators: [mimeType]})
    });
    
    this.imagePreview = this.userAuth.imagePath;
    console.log(this.userAuth);
    if(this.userAuth.Address) {
      this.form.setValue({
        first_name: this.userAuth.first_name,
        last_name: this.userAuth.last_name,
        civicNumber: this.userAuth.Address.civicNumber,
        apto: this.userAuth.Address.apto,
        streetName: this.userAuth.Address.streetName,
        city: this.userAuth.Address.city,
        province: this.userAuth.Address.province,
        postalCode: this.userAuth.Address.postalCode,
        email: this.userAuth.email,
        image: this.userAuth.imagePath
      });
    } else {
      this.form.setValue({
        first_name: this.userAuth.first_name,
        last_name: this.userAuth.last_name,
        email: this.userAuth.email,
        image: this.userAuth.imagePath,
        civicNumber: '',
        apto: '',
        streetName: '',
        city: '',
        province: '',
        postalCode: ''
      });
    }


   }

   onUpdateUser() {
    if (this.form.invalid) {
      return;
    }

    this.authService.updateUser(this.userAuth.id, this.form.value.first_name, this.form.value.last_name, this.form.value.image);
    if (this.userAuth.Address.UserId) {
      this.authService.updateAddress(this.form.value.civicNumber, this.form.value.apto, this.form.value.streetName,
        this.form.value.city, this.form.value.province, this.form.value.postalCode, this.userAuth.id);
    } else {
      this.authService.createAddress(this.form.value.civicNumber, this.form.value.apto, this.form.value.streetName,
        this.form.value.city, this.form.value.province, this.form.value.postalCode, this.userAuth.id);
    }
   }

   onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

   ngAfterViewInit () {}
}
