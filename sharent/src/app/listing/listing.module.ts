import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { SlickModule } from 'ngx-slick';
import { NouisliderModule } from 'ng2-nouislider';

import { GridFullWidthComponent } from './GridFullWidth/GridFullWidth.component';
import { ListingDetailTwoComponent } from './ListingDetailTwo/ListingDetailTwo.component';

import { ListFullWidthComponent } from './ListFullWidth/ListFullWidth.component';

import { GallerySliderComponent } from '../globalFrontendComponents/GallerySlider/GallerySlider.component';
import { SmallGallerySliderComponent } from '../globalFrontendComponents/SmallGallerySlider/SmallGallerySlider.component';

import { ListingRoutes } from './listing.routing';
import { SidebarLayoutTwoComponent } from './SidebarLayoutTwo/SidebarLayoutTwo.component';

import { GlobalModule } from '../globalFrontendComponents/global.module';
import { AngularMaterialModule } from '../angular-material.module';


@NgModule({
  imports: [
    CommonModule,
    GlobalModule,
    SlickModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    NouisliderModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk'}),
    RouterModule.forChild(ListingRoutes),
    AngularMaterialModule
  ],
  declarations: [
     GridFullWidthComponent,
     ListingDetailTwoComponent,
     GallerySliderComponent,
     SmallGallerySliderComponent,
     SidebarLayoutTwoComponent,
     ListFullWidthComponent
   ]
})

export class ListingModule {}
