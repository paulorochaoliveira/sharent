import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';


import { ProductsService } from '../products.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from 'src/app/session/auth.service';
import { Product } from '../product.model';

@Component({
  selector: 'list-detail-two',
  templateUrl: './ListingDetailTwo.component.html',
  styleUrls: ['./ListingDetailTwo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListingDetailTwoComponent implements OnInit {
   isLoading = false;
   product: Product;
   userId: string;
   user: any;
   userName: string;

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
         if (paramMap.has('id')) {
           this.productId = paramMap.get('id');
           this.isLoading = true;
           this.productsService.getProduct(this.productId).subscribe(productData => {
               console.log(productData);
             this.isLoading = false;
             this.userId = productData[0].User.id;
             this.userName = productData[0].User.first_name + ' ' + productData[0].User.last_name;
             this.product = {
               id: productData[0].id,
               UserId: productData[0].UserId,
               product_name: productData[0].product_name,
               description: productData[0].description,
               price: productData[0].price,
               imagePath: productData[0].imagePath,
               createdAt: productData[0].createdAt,
               updatedAt: productData[0].updatedAt
             };
             console.log(this.user);
            //  this.userName = productData.User.first_name + ' ' + productData.User.last_name;

           });
         }
      });
   }
}
