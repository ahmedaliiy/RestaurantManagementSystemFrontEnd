import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantsAddComponent } from './resturants-add.component';

describe('ResturantsAddComponent', () => {
  let component: ResturantsAddComponent;
  let fixture: ComponentFixture<ResturantsAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResturantsAddComponent]
    });
    fixture = TestBed.createComponent(ResturantsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
