import { Component, OnInit, Input, Output, AfterViewInit, ViewEncapsulation, OnChanges } from '@angular/core';
import { ProductsService } from 'src/app/listing/products.service';

@Component({
  selector: 'banner-version1',
  templateUrl: './Banner.component.html',
  styleUrls: ['./Banner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BannerComponent implements OnInit, OnChanges{


  selectedCategory= 'all';
  name = '';
  categories: {id: string, name: string}[] = [];

   /** Title for baner **/
   @Input('title') Title: any = 'Dummy Title';

   /** Description for baner **/
   @Input('desc') Desc: any = 'Description';

   /** Background for baner **/
   @Input('bgImageUrl') BgImageUrl: any = 'assets/images/main-search-background-01.jpg';

   constructor(public productsService: ProductsService) {}

   ngOnChanges() {
     this.productsService.getCategories();
   }

   ngOnInit() {

    this.categories = this.productsService.getCategoriesList();
   }

   ngAfterViewInit()
   {

   }

   onSelectCategory(categoryId: any) {
     this.selectedCategory = categoryId;
   }
}
