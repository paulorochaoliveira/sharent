import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagesComponent } from './Messages/Messages.component';
import { ReviewsComponent } from './Reviews/Reviews.component';
import { ListComponent } from './List/List.component';
import { AddListComponent } from './AddList/AddList.component';
import { ProfileComponent } from './Profile/Profile.component';

import { AdminRoutes } from './admin.routing';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
   // Change this to your upload POST address:
    url: 'https://httpbin.org/post',
    maxFilesize: 50,
    acceptedFiles: 'image/*'
  };

@NgModule({
  imports: [
    CommonModule,
    DropzoneModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(AdminRoutes),
  ],
  declarations: [ 
    MessagesComponent,
    ReviewsComponent,
    ListComponent,
    AddListComponent,
    ProfileComponent
  ],
  providers: [
   {
     provide: DROPZONE_CONFIG,
     useValue: DEFAULT_DROPZONE_CONFIG
   }
 ]
})

export class AdminModule {}
