import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ERoutes } from './core/enums/routes.enum';

const routes: Routes = [
  {
    path: ERoutes.EMPTY,
    loadChildren: () => import('src/app/modules/home-page/home-page.module').then((m) => m.HomePageModule)
  },
  {
    path: ERoutes.OTHER,
    redirectTo: ERoutes.EMPTY
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
