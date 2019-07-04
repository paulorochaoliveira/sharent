import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { RouterModule } from '@angular/router';
import { BarRatingModule } from "ngx-bar-rating";
import { SlickModule } from 'ngx-slick';

import { MapBannerComponent } from '../globalFrontendComponents/MapBanner/MapBanner.component'; 
import { TitleBarComponent } from '../globalFrontendComponents/TitleBar/TitleBar.component'; 
import { PaginationComponent } from '../globalFrontendComponents/Pagination/Pagination.component'; 
import { RatingComponent } from '../globalFrontendComponents/Rating/Rating.component'; 
import { BannerComponent } from './Banner/Banner.component'; 
import { PopularCategoriesComponent } from './PopuplarCategories/PopularCategories.component'; 
import { ParallaxComponent } from './ParallaxSection/Parallax.component'; 

@NgModule({
   imports : [
   CommonModule,
   RouterModule,
   BarRatingModule,
   SlickModule.forRoot(),
   AgmCoreModule.forRoot({apiKey: 'AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk'})],
  declarations: [
    MapBannerComponent,
    TitleBarComponent,
    PaginationComponent,
    RatingComponent,
    BannerComponent ,
     PopularCategoriesComponent,
     ParallaxComponent
  ],
  exports: [ 
     MapBannerComponent,
     TitleBarComponent,
     PaginationComponent,
     RatingComponent,
     BannerComponent ,
     PopularCategoriesComponent,
     ParallaxComponent
   ]
})

export class GlobalModule {}
