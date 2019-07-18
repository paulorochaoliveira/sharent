import { Routes } from '@angular/router';
import { GridFullWidthComponent } from './GridFullWidth/GridFullWidth.component';
import { ListFullWidthComponent } from './ListFullWidth/ListFullWidth.component';
import { ListingDetailTwoComponent } from './ListingDetailTwo/ListingDetailTwo.component';

export const ListingRoutes: Routes = [
{
  path: 'grid/full-width/:category/:name',
  component: GridFullWidthComponent
},
{
  path: 'grid/full-width',
  component: GridFullWidthComponent
},
{
  path: 'detail/version2/:id',
  component: ListingDetailTwoComponent
},
{
  path: 'list/full-width/:category/:name',
  component: ListFullWidthComponent
},
{
  path: 'list/full-width',
  component: ListFullWidthComponent
}];
