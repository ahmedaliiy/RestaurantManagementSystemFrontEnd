import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/resturants', pathMatch: 'full' },
  { path: 'resturants', loadChildren: () => import('./resturants/resturants.module').then(m => m.ResturantsModule) },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }