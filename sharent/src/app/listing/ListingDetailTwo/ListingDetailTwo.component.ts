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
           });
         }
      });
   }



}
