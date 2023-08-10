import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { ReposPageComponent } from './repos-page.component';

import { ReposPageRoutingModule } from './repos-page-routing.module';



@NgModule({
  declarations: [
    ReposPageComponent
  ],
  imports: [
    CommonModule,
    ReposPageRoutingModule

  ]
})
export class ReposPageModule { }
