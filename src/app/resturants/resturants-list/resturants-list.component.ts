import { Component, OnInit } from '@angular/core';
import { Resturant } from '../resturant.interface';
import { ResturantsService } from '../resturants.service';

@Component({
  selector: 'app-resturants-list',
  templateUrl: './resturants-list.component.html',
  styleUrls: ['./resturants-list.component.css']
})
export class ResturantsListComponent implements OnInit {
  resturants: Resturant[] = [];

  constructor(private resturantsService: ResturantsService) { }

  ngOnInit(): void {
    this.getResturants();
  }

  getResturants(): void {
    this.resturantsService.getResturants()
    .subscribe(resturants => this.resturants = resturants);
  }

  editResturant(id: number): void {
  }

  deleteResturant(id: number): void {
    if (confirm('Are you sure you want to delete this resturant?')) {
      this.resturantsService.deleteResturant(id)
        .subscribe(() => {
          this.getResturants();
        });
    }
  }
}
