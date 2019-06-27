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
  private posts: Product[] = [];
  private postsUpdated = new Subject<{ posts: Product[]; postCount: number }>();

  constructor(private http: HttpClient, private router: Router) {}

  getProducts(productsPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${productsPerPage}&page=${currentPage}`;
    this.http
      .get<{ message: string; posts: any; maxPosts: number }>(
        BACKEND_URL + queryParams
      )
      .pipe(
        map(postData => {
          return {
            posts: postData.posts.map(post => {
              return {
                title: post.title,
                content: post.content,
                id: post._id,
                imagePath: post.imagePath,
                creator: post.creator
              };
            }),
            maxPosts: postData.maxPosts
          };
        })
      )
      .subscribe(transformedPostData => {
        this.posts = transformedPostData.posts;
        this.postsUpdated.next({
          posts: [...this.posts],
          postCount: transformedPostData.maxPosts
        });
      });
  }

  getProductUpdateListener() {
    return this.postsUpdated.asObservable();
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
