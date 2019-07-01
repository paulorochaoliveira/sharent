import { Routes } from '@angular/router';

import { UserProfileComponent } from './UserProfile/UserProfile.component';
import { AddListingComponent } from './AddListing/AddListing.component';
import { AboutComponent } from './About/About.component';

export const PagesRoutes: Routes = [{
  path: 'user-profile',
  component: UserProfileComponent
},
{
  path: 'user-profile',
  component: UserProfileComponent
},
{
  path: 'about-us',
  component: AboutComponent
},
{
  path: 'add-listing',
  component: AddListingComponent
}];
