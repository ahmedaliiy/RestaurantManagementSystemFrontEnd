import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResturantsListComponent } from './resturants-list/resturants-list.component';
import { ResturantsAddComponent } from './resturants-add/resturants-add.component';
import { ResturantsUpdateComponent } from './resturants-update/resturants-update.component';
import { ResturantsDetailsComponent } from './resturants-details/resturants-details.component';


const routes: Routes = [
  { path: '', component: ResturantsListComponent },
  { path: 'create', component: ResturantsAddComponent },
  { path: 'edit/:id', component: ResturantsUpdateComponent },
  { path: 'details/:id', component: ResturantsDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResturantsRoutingModule { }