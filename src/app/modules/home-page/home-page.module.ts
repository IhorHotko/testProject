import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomePageComponent } from './home-page.component';

import { HomePageRoutingModule } from './home-page-routing.module';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
