import { Routes } from '@angular/router';

import { AdminPanelLayoutComponent } from './layouts/adminPanel/AdminPanelLayout.component';
import { FrontendPanelLayoutComponent } from './layouts/frontendPanel/FrontendPanel.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AuthGuard } from './session/auth.guard';

export const AppRoutes: Routes = [
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
}, 
{
  path: 'listing',
  redirectTo: 'listing/grid/full-width',
  pathMatch: 'full',
}, 
{
  path: 'about',
  redirectTo: 'pages/about-us',
  pathMatch: 'full',
}, 
{
  path: '',
  component: FrontendPanelLayoutComponent,
  children: [{
    path: 'home',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'listing',
    loadChildren: './listing/listing.module#ListingModule'
  },
  {
    path: 'pages',
    loadChildren: './pages/pages.module#PagesModule'
  }]
}, 
{
  path: 'admin',
  component: AdminPanelLayoutComponent,
  canActivate: [AuthGuard],
  children: [{
    path: '',
    loadChildren: './adminPages/admin.module#AdminModule'
  }]
},
{
  path: 'session',
  component: AuthLayoutComponent,
  children: [{
    path: '',
    loadChildren: './session/session.module#SessionModule'
  }]
}
];
