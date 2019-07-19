import { Component, OnInit, AfterViewInit, ViewEncapsulation, Input } from '@angular/core';
import { Subscription } from 'rxjs';


import { ProductsService } from '../products.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from 'src/app/session/auth.service';
import { Product } from '../product.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'list-detail-two',
  templateUrl: './ListingDetailTwo.component.html',
  styleUrls: ['./ListingDetailTwo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListingDetailTwoComponent implements OnInit {
   @Input() rating: number;
   isLoading = false;
   isEvaluating = false;
   product: Product;
   userAuth: string;
   userId: string;
   user: any;
   userName: string;
   userImagePath: string;
   ProductEvaluations: [];
   latitude: string;
   longitude: string;
   googleMaps:string;

   private productId: string;
   private authStatusSub: Subscription;

   lat = -34.397;
   lng = 150.644;
   smallGalleryTitle = 'Gallery';
   smallGalleryData : any = [
                              {
                                 image : 'assets/images/dp-1.jpg',
                              },
                              {
                                 image : 'assets/images/dp-4.jpg',
                              },
                              {
                                 image : 'assets/images/dp-3.jpg',
                              },
                              {
                                 image : 'assets/images/dp-5.jpg',
                              }
                           ];


   constructor(
      public productsService: ProductsService,
      public route: ActivatedRoute,
      private authService: AuthService
    ) {}

   ngOnInit() {
      this.route.paramMap.subscribe((paramMap: ParamMap) => {
         this.userAuth = this.authService.getUserId();
         if (paramMap.has('id')) {
           this.productId = paramMap.get('id');
           this.isLoading = true;
           this.productsService.getProduct(this.productId).subscribe(productData => {
               this.isLoading = false;
               this.userId = productData.User.id;
               this.userName = productData.User.first_name + ' ' + productData.User.last_name;
               this.ProductEvaluations = productData.ProductEvaluations;
               this.userImagePath = productData.User.imagePath;
               this.latitude = productData.User.Address.latitude;
               this.longitude = productData.User.Address.longitude;
               this.googleMaps = "https://maps.google.com/maps?q='45.471026','-73.638541'&hl=en;z=14&amp;output=embed";
               this.product = {
                  id: productData.id,
                  UserId: productData.UserId,
                  product_name: productData.product_name,
                  description: productData.description,
                  price: productData.price,
                  imagePath: productData.imagePath,
                  createdAt: productData.createdAt,
                  updatedAt: productData.updatedAt,
                  category: productData.Category,
               };
             console.log(this.product);
             console.log(this.googleMaps);
           });
         }
      });
   }

   onClick(rating: number): void {
      this.rating = rating;
      console.log(this.rating);
    }

   onEvaluated(form: NgForm) {
      if (form.invalid) {
         return;
      }

      this.productsService
      .addProductEvaluation(this.rating.toString(), form.value.evaluation, this.productId, this.userAuth);
      this.productsService.getProduct(this.productId).subscribe(productData => {
         this.ProductEvaluations = productData.ProductEvaluations;
         this.isEvaluating = false;
         form.reset();
      });
   }

   onEvaluating() {
      this.isEvaluating = true;
   }

   stopEvaluation() {
      this.isEvaluating = false;
   }
}
