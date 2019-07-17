import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
import { Product } from './product.model';
import { AuthService } from '../session/auth.service';
import { ProductEvaluation } from './productEvaluation.model';

const BACKEND_URL = environment.apiUrl + '/product/';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private products: Product[] = [];
  private categories: {id: string, name: string}[] = [];
  private productsUpdated = new Subject<{ products: Product[]; maxProducts: number }>();

  constructor(private http: HttpClient, private router: Router, public authService: AuthService) {}

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
                UserId: product.UserId,
                user: product.User,
                category: product.Category
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

  getCategories() {
    this.http
      .get<{ message: string; categories: any; }>(
        environment.apiUrl + '/category/'
      )
      .pipe(
        map(categoriesData => {
          return {
            message: categoriesData.message,
            categories: categoriesData.categories.map(category => {
              return {
                id: category.id,
                name: category.name
              };
            })
          };
        })
      )
      .subscribe(transformedCategoriesData => {
        this.categories = transformedCategoriesData.categories;
      });
  }

  getCategoriesList() {
    return this.categories;
  }

  getProductsUser(productsPerPage: number, currentPage: number) {
    
    const UserId = this.authService.getUserId();
    const queryParams = `?UserId=${UserId}&pagesize=${productsPerPage}&page=${currentPage}`;
    this.http
      .get<{ message: string; products: any; maxProducts: number }>(
        BACKEND_URL + 'userProducts/' + queryParams
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
                UserId: product.UserId
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
      UserId: string;
      product_name: string;
      description: string;
      price: string;
      imagePath: string;
      createdAt: string;
      updatedAt: string;
      User: any;
      ProductEvaluations: any;
      Category: any;
    }>(BACKEND_URL + id);
  }

  addProduct(UserId: string, product_name: string, CategoryId: string, description: string, price: string, image: File) {
    const productData = new FormData();
    productData.append('UserId', UserId);
    productData.append('product_name', product_name);
    productData.append('CategoryId', CategoryId);
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
        this.router.navigate(['/admin/list']);
      });
  }

  updateProduct(id: string, product_name: string, CategoryId: string, description: string, price: string, image: File | string) {
    let productData: Product | FormData;
    if (typeof image === 'object') {
      productData = new FormData();
      productData.append('id', id);
      productData.append('product_name', product_name);
      productData.append('CategoryId', CategoryId);
      productData.append('description', description);
      productData.append('price', price);
      productData.append('image', image, product_name);
    } else {
      productData = {
        id: id,
        UserId: null,
        product_name: product_name,
        description: description,
        price: price,
        imagePath: image,
        createdAt: null,
        updatedAt: null,
        category: null
      };
    }
    this.http
      .put(BACKEND_URL + id, productData)
      .subscribe(response => {
        this.router.navigate(['/admin/list']);
      });
  }

  deleteProduct(productId: string) {
    console.log(productId);
    return this.http.delete(BACKEND_URL + productId);
  }

  addProductEvaluation(rate: string, evaluation: string, ProductId: string, UserId: string) {
    const productEvaluationData: ProductEvaluation = {
      id: null,
      rate: rate,
      evaluation: evaluation,
      ProductId: ProductId,
      UserId: UserId,
      createdAt: null,
      updatedAt: null
    };

    // const productEvaluationData = new FormData();
    // productEvaluationData.append('rate', rate);
    // productEvaluationData.append('evaluation', evaluation);
    // productEvaluationData.append('ProductId', ProductId);
    // productEvaluationData.append('UserId', UserId);

    console.log(productEvaluationData);
    return this.http.post<{ message: string; productEvaluation: any }>(
      environment.apiUrl + '/productEvaluation/',
      productEvaluationData
    )
    .subscribe(responseData => {
      console.log(responseData);
      this.router.navigate(['/listing/detail/version2/' + ProductId]);
    });
  }
}
