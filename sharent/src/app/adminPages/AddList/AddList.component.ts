import { Component, OnInit, AfterViewInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { DropzoneComponent , DropzoneDirective, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

import { Product } from 'src/app/listing/product.model';
import { AuthService } from 'src/app/session/auth.service';
import { ProductsService } from 'src/app/listing/products.service';
import { mimeType } from './mime-type.validator';

declare var $ : any;

@Component({
  selector: 'admin-add-list',
  templateUrl: './AddList.component.html',
  styleUrls: ['./AddList.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AddListComponent implements OnInit, AfterViewInit, OnDestroy {

   enteredTitle = '';
   enteredContent = '';
   product: Product;
   isLoading = false;
   form: FormGroup;
   imagePreview: string;
   private mode = 'create';
   private postId: string;
   private userId: string;
   private authStatusSub: Subscription;
 
   constructor(
     public productsService: ProductsService,
     public route: ActivatedRoute,
     private authService: AuthService
   ) {}


   ngOnInit() {
      this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(authStatus => {
        this.isLoading = false;
        this.userId = this.authService.getUserId();
      });
    this.form = new FormGroup({
      'product_name': new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      'description': new FormControl(null, { validators: [Validators.required] }),
      'price': new FormControl(null, { validators: [Validators.required] }),
      'image': new FormControl(null, {asyncValidators: [mimeType]})
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
        this.isLoading = true;
        this.productsService.getProduct(this.postId).subscribe(productData => {
          this.isLoading = false;
          this.product = {
            id: productData.id,
            userId: productData.userId,
            product_name: productData.product_name,
            description: productData.description,
            price: productData.price,
            imagePath: productData.imagePath,
            created_at: productData.created_at
          };
          this.form.setValue({
            product_name: this.product.product_name,
            description: this.product.description,
            price: this.product.price,
            image: this.product.imagePath
          });
        });
      } else {
        this.mode = 'create';
        this.postId = null;
      }
    });
   }

   onSavePost() {
      if (this.form.invalid) {
        return;
      }
      this.isLoading = true;
      console.log(this.form.value);
      if (this.mode === 'create') {
        this.productsService.addProduct(
          this.userId,
          this.form.value.product_name,
          this.form.value.description,
          this.form.value.price,
          this.form.value.image
        );
      } else {
        this.productsService.updateProduct(
          this.postId,
          this.form.value.product_name,
          this.form.value.description,
          this.form.value.price,
          this.form.value.image
        );
      }
      this.form.reset();
    }

    onImagePicked(event: Event) {
      const file = (event.target as HTMLInputElement).files[0];
      this.form.patchValue({ image: file });
      this.form.get("image").updateValueAndValidity();
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }

   ngAfterViewInit() {
      $('.add-listing-section').each(function() {

         const switcherSection = $(this);
         const switcherInput = $(this).find('.switch input');

         // if (switcherInput.is(':checked')) {
         //    $(switcherSection).addClass('switcher-on');
         // }

         // switcherInput.change(function(){
         //    if (this.checked === true) {
         //       $(switcherSection).addClass('switcher-on');
         //    } else {
         //       $(switcherSection).removeClass('switcher-on');
         //    }
         // });

      });
   }

   ngOnDestroy() {}
}
