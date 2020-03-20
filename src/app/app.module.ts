import { AppComponent } from './app.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import {
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { appRoutes } from './app-routing';
import { LandingComponent } from './landing/landing.component';
import { NgModule } from '@angular/core';

import { OwlModule } from 'ngx-owl-carousel';
import { ServicedialogboxComponent } from './landing/servicedialogbox/servicedialogbox.component';

import { NgxSmartModalModule } from 'ngx-smart-modal';
import { VideosComponent } from './videos/videos.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    CookieModule.forRoot(),
    CoreModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    OwlModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
    NgxSmartModalModule.forRoot()
  ],
  entryComponents: [ServicedialogboxComponent],
  declarations: [AppComponent, LandingComponent, ServicedialogboxComponent, VideosComponent,],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
