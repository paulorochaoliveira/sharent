import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from 'src/app/session/auth.service';
import { ProductsService } from '../products.service';
import { PageEvent } from '@angular/material';
import { Product } from '../product.model';

@Component({
  selector: 'grid-full-width',
  templateUrl: './GridFullWidth.component.html',
  styleUrls: ['./GridFullWidth.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GridFullWidthComponent implements OnInit {
   
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
      this.productsService.getProducts(this.productsPerPage, this.currentPage);
   }

   ngOnInit() {
      this.isLoading = true;
      this.productsService.getProducts(this.productsPerPage, this.currentPage);
      this.userId = this.authService.getUserId();
      this.productsSub = this.productsService
      .getProductUpdateListener()
      .subscribe((productData: { products: Product[]; maxProducts: number }) => {
        this.isLoading = false;
        this.totalProducts = productData.maxProducts;
        this.products = productData.products;
        console.log(this.products);
      });
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        this.userId = this.authService.getUserId();
      });
   }

   ngAfterViewInit()
   {

   }

}
