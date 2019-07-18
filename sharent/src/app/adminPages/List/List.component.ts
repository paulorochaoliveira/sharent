import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from 'src/app/session/auth.service';
import { ProductsService } from 'src/app/listing/products.service';
import { PageEvent } from '@angular/material';
import { Product } from 'src/app/listing/product.model';

@Component({
  selector: 'admin-list',
  templateUrl: './List.component.html',
  styleUrls: ['./List.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit{

   products: Product[] = [];
   isLoading = false;
   totalProducts = 0;
   productsPerPage = 6;
   currentPage = 1;
   pageSizeOptions = [1, 3, 6, 12];
   userIsAuthenticated = false;
   userId: string;
   private productsSub: Subscription;
   private authStatusSub: Subscription;

   constructor(public productsService: ProductsService, private authService: AuthService) {}

   onChangedPage(pageData: PageEvent) {
      // this.isLoading = true;
      this.currentPage = pageData.pageIndex + 1;
      this.productsPerPage = pageData.pageSize;
      this.productsService.getProducts(this.productsPerPage, this.currentPage, null, null);
   }

   ngOnInit() {
      this.isLoading = true;
      this.productsService.getProductsUser(this.productsPerPage, this.currentPage);
      this.userId = this.authService.getUserId();
      this.productsSub = this.productsService
      .getProductUpdateListener()
      .subscribe((productData: { products: Product[]; maxProducts: number }) => {
         this.isLoading = false;
         this.totalProducts = productData.maxProducts;
         this.products = productData.products;
         console.log(productData);
      });
      this.userIsAuthenticated = this.authService.getIsAuth();
      this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
         this.userIsAuthenticated = isAuthenticated;
         this.userId = this.authService.getUserId();
      });
   }

   onDelete(productId: string) {
      console.log(productId);
      this.isLoading = true;
      this.productsService.deleteProduct(productId).subscribe(() => {
        console.log('Voltei');
        this.productsService.getProductsUser(this.productsPerPage, this.currentPage);
        this.productsSub = this.productsService
        .getProductUpdateListener()
        .subscribe((productData: { products: Product[]; maxProducts: number }) => {
           this.isLoading = false;
           this.totalProducts = productData.maxProducts;
           this.products = productData.products;
           console.log(productData);
        });
      });
   }

   ngAfterViewInit()
   {

   }


   // Data : any = [
   //                   {
   //                      badge    : 'Open',
   //                      category : 'Eat & Drink',
   //                      title    : 'Cafe Bar',
   //                      address  : 'Wall Street, New York',
   //                      image    : 'assets/images/most-img-1.jpg',
   //                      review   : '(12 reviews)'
   //                   },
   //                   {
   //                      badge    : 'Coming Soon',
   //                      category : 'Concert',
   //                      title    : 'Milky Ducth',
   //                      address  : 'MayLand Square, LA',
   //                      image    : 'assets/images/most-img-2.jpg',
   //                      review   : '(23 reviews)'
   //                   },
   //                   {
   //                      badge    : 'Open',
   //                      category : 'Hotels',
   //                      title    : 'Maledy Hotels',
   //                      address  : '672, CreedWay, New York',
   //                      image    : 'assets/images/most-img-3.jpg',
   //                      review   : '(17 reviews)'
   //                   },
   //                   {
   //                      badge    : 'Open',
   //                      category : 'Eat & Drink',
   //                      title    : 'Donuts Hub',
   //                      address  : '56,Hihu Pora, New York',
   //                      image    : 'assets/images/most-img-4.jpg',
   //                      review   : '(31 reviews)'
   //                   },
   //                   {
   //                      badge    : 'Now Open',
   //                      category : 'Airport',
   //                      title    : 'NYC',
   //                      address  : 'Mill Dee, New York',
   //                      image    : 'assets/images/most-img-2.jpg',
   //                      review   : '(46 reviews)'
   //                   },
   //                   {
   //                      badge    : 'Closed',
   //                      category : 'Eat & Drink',
   //                      title    : 'Groos Day',
   //                      address  : '71,Rowling Street, New York',
   //                      image    : 'assets/images/most-img-6.jpg',
   //                      review   : '(15 reviews)'
   //                   }

   //                ];

               
}
