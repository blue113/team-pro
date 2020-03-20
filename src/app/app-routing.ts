import { Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { VideosComponent } from './videos/videos.component';
import { ErrorComponent } from './core/error/error.component';
import { NoAccessComponent } from './core/error/no-access.component';
import { PageNotFoundComponent } from './core/error/page-not-found.component';

export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: LandingComponent },
  { path: 'all-videos', pathMatch: 'full', component: VideosComponent },
  { path: 'xpb', pathMatch: 'full', component: LandingComponent },
  { path: 'error', component: ErrorComponent },
  { path: '401', pathMatch: 'full', component: NoAccessComponent }, // NO ACCESS
  { path: '404', pathMatch: 'full', component: PageNotFoundComponent }, // NOT FOUND
   {
    path: 'category',
    loadChildren: './category/category.module#CategoryModule'
  },

  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];
