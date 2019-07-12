import { Routes } from '@angular/router';

import { MessagesComponent } from './Messages/Messages.component';
import { ReviewsComponent } from './Reviews/Reviews.component';
import { ListComponent } from './List/List.component';
import { AddListComponent } from './AddList/AddList.component';
import { ProfileComponent } from './Profile/Profile.component';
import { AuthGuard } from '../session/auth.guard';

export const AdminRoutes: Routes = [
{
  path: 'messages',
  component: MessagesComponent
},
{
  path: 'reviews',
  component: ReviewsComponent
},
{
  path: 'list',
  component: ListComponent,
  canActivate: [AuthGuard]
},
{
  path: 'add-list',
  component: AddListComponent
},
{
  path: 'edit/:prodId',
  component: AddListComponent
},
{
  path: 'profile',
  component: ProfileComponent
}];
