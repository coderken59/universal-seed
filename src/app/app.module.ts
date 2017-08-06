import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../features/home/home.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'lazy', loadChildren: '../features/+lazy/lazy.module#LazyModule' }
    ])
  ],
  providers: [],
  exports: [AppComponent]
})
export class AppModule { }
