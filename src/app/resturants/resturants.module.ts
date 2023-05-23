import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ResturantsListComponent } from './resturants-list/resturants-list.component';
import { ResturantsAddComponent } from './resturants-add/resturants-add.component';
import { ResturantsUpdateComponent } from './resturants-update/resturants-update.component';
import { ResturantsDetailsComponent } from './resturants-details/resturants-details.component';
import { ResturantsService } from './resturants.service';
import { ResturantsRoutingModule } from './resturants-routing.module';

@NgModule({
  declarations: [
    ResturantsListComponent,
    ResturantsAddComponent,
    ResturantsUpdateComponent,
    ResturantsDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ResturantsRoutingModule
  ],
  providers: [
    ResturantsService
  ]
})
export class ResturantsModule { }