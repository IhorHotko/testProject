import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ERoutes } from '../../core/enums/routes.enum';

import { ReposPageComponent } from './repos-page.component';


const routes: Routes = [
  {
    path: ERoutes.EMPTY,
    component: ReposPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReposPageRoutingModule { }
