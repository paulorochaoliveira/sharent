import { Component, OnInit, AfterViewInit, ViewEncapsulation, OnChanges } from '@angular/core';
import { Product } from '../product.model';
import { Subscription } from 'rxjs';
import { ProductsService } from '../products.service';
import { AuthService } from 'src/app/session/auth.service';
import { PageEvent } from '@angular/material';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'list-full-width',
  templateUrl: './ListFullWidth.component.html',
  styleUrls: ['./ListFullWidth.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListFullWidthComponent implements OnInit, OnChanges{

   products: Product[] = [];
   isLoading = false;
   totalProducts = 0;
   productsPerPage = 6;
   currentPage = 1;
   pageSizeOptions = [1, 3, 6, 12, 24];
   userIsAuthenticated = false;
   userId: string;
   private productsSub: Subscription;
   private authStatusSub: Subscription;
   categorySelected: string;
   name = '';

   constructor(public productsService: ProductsService, private authService: AuthService, public route: ActivatedRoute) {}

   onChangedPage(pageData: PageEvent) {
      // this.isLoading = true;
      this.route.paramMap.subscribe((paramMap: ParamMap) => {
         if (paramMap.has('category')) {
           this.categorySelected = paramMap.get('category');
         }
         if (paramMap.has('name')) {
           this.name = paramMap.get('name');
         }
         this.currentPage = pageData.pageIndex + 1;
         this.productsPerPage = pageData.pageSize;
         this.productsService.getProducts(this.productsPerPage, this.currentPage, this.categorySelected, this.name);
      });
   }


   ngOnChanges() {
      this.productsService.getCategories();
    }

   ngOnInit() {
      this.isLoading = true;
      this.route.paramMap.subscribe((paramMap: ParamMap) => {
         if (paramMap.has('category')) {
           this.categorySelected = paramMap.get('category');
         }
         if (paramMap.has('name')) {
           this.name = paramMap.get('name');
         }
 
         this.productsService.getProducts(this.productsPerPage, this.currentPage, this.categorySelected, this.name);
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
      });
   }

   onSelectCategory(categoryId: any) {
      this.categorySelected = categoryId;
    }

   ngAfterViewInit() {}

      // Data : any = [
   //                   {
   //                      badge    : 'Now Open',
   //                      category : 'Eat & Drink',
   //                      title    : 'Tom Restaurant',
   //                      address  : '964 School Street, New York',
   //                      image    : 'assets/images/most-img-1.jpg',
   //                      rating   : '5',
   //                      review   : '(12 reviews)'
   //                   },
   //                   {
   //                      badge    : 'Now Open',
   //                      category : 'Events',
   //                      title    : 'Sticky Band',
   //                      address  : 'Bishop Avenue, New York',
   //                      image    : 'assets/images/most-img-2.jpg',
   //                      rating   : '5',
   //                      review   : '(23 reviews)'
   //                   },
   //                   {
   //                      badge    : 'Now Open',
   //                      category : 'Hotels',
   //                      title    : 'Hotel Govendor',
   //                      address  : '778 Country Street, New York',
   //                      image    : 'assets/images/most-img-3.jpg',
   //                      rating   : '5',
   //                      review   : '(17 reviews)'
   //                   },
   //                   {
   //                      badge    : 'Now Open',
   //                      category : 'Eat & Drink',
   //                      title    : 'Burger House',
   //                      address  : '2726 Shinn Street, New York',
   //                      image    : 'assets/images/most-img-4.jpg',
   //                      rating   : '5',
   //                      review   : '(31 reviews)'
   //                   },
   //                   {
   //                      badge    : 'Now Open',
   //                      category : 'Airport',
   //                      title    : 'Burger House',
   //                      address  : '1512 Duncan Avenue, New York',
   //                      image    : 'assets/images/most-img-2.jpg',
   //                      rating   : '5',
   //                      review   : '(46 reviews)'
   //                   },
   //                   {
   //                      badge    : 'Now Closed',
   //                      category : 'Eat & Drink',
   //                      title    : 'Think Coffee',
   //                      address  : '215 Terry Lane, New York',
   //                      image    : 'assets/images/most-img-6.jpg',
   //                      rating   : '5',
   //                      review   : '(15 reviews)'
   //                   }

   //                ];
}
