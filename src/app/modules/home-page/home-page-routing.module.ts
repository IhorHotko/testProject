import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ERoutes } from '../../core/enums/routes.enum';

import { HomePageComponent } from './home-page.component';

const routes: Routes = [
  {
    path: ERoutes.EMPTY,
    component: HomePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
