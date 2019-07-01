import { Routes } from '@angular/router';
import { GridFullWidthComponent } from './GridFullWidth/GridFullWidth.component';
import { ListingDetailTwoComponent } from './ListingDetailTwo/ListingDetailTwo.component';

export const ListingRoutes: Routes = [
{
  path: 'grid/full-width',
  component: GridFullWidthComponent
},
{
  path: 'detail/version2/:id',
  component: ListingDetailTwoComponent
}];
