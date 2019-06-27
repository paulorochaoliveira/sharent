import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
import { Product } from './product.model';

const BACKEND_URL = environment.apiUrl + '/product/';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private products: Product[] = [];
  private productsUpdated = new Subject<{ products: Product[]; maxProducts: number }>();

  constructor(private http: HttpClient, private router: Router) {}

  getProducts(productsPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${productsPerPage}&page=${currentPage}`;
    this.http
      .get<{ message: string; products: any; maxProducts: number }>(
        BACKEND_URL + queryParams
      )
      .pipe(
        map(productData => {
          return {
            message: productData.message,
            products: productData.products.map(product => {
              return {
                product_name: product.product_name,
                description: product.description,
                id: product.id,
                price: product.price,
                imagePath: product.imagePath,
                userId: product.userId
              };
            }),
            maxProducts: productData.maxProducts
          };
        })
      )
      .subscribe(transformedProductData => {
        this.products = transformedProductData.products;
        this.productsUpdated.next({
          products: [...this.products],
          maxProducts: transformedProductData.maxProducts
        });
      });
  }

  getProductUpdateListener() {
    return this.productsUpdated.asObservable();
  }

  getProduct(id: string) {
    return this.http.get<{
      id: string;
      userId: string;
      product_name: string;
      description: string;
      price: string;
      imagePath: string;
      created_at: string;
    }>(BACKEND_URL + id);
  }

  addProduct(userId: string, product_name: string, description: string, price: string, image: File) {
    const productData = new FormData();
    productData.append('userId', userId);
    productData.append('product_name', product_name);
    productData.append('description', description);
    productData.append('price', price);
    productData.append('image', image, product_name);

    this.http
      .post<{ message: string; product: Product }>(
        BACKEND_URL,
        productData
      )
      .subscribe(responseData => {
        console.log(responseData);
        this.router.navigate(['/']);
      });
  }

  updateProduct(id: string, product_name: string, description: string, price: string, image: File | string) {
    let productData: Product | FormData;
    if (typeof image === 'object') {
      productData = new FormData();
      productData.append('id', id);
      productData.append('product_name', product_name);
      productData.append('description', description);
      productData.append('price', price);
      productData.append('image', image, product_name);
    } else {
      productData = {
        id: id,
        userId: null,
        product_name: product_name,
        description: description,
        price: price,
        imagePath: image,
        created_at: null
      };
    }
    this.http
      .put(BACKEND_URL + id, productData)
      .subscribe(response => {
        this.router.navigate(['/']);
      });
  }

  deleteProduct(postId: string) {
    return this.http.delete(BACKEND_URL + postId);
  }
}
