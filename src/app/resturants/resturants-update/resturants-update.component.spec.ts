import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantsUpdateComponent } from './resturants-update.component';

describe('ResturantsUpdateComponent', () => {
  let component: ResturantsUpdateComponent;
  let fixture: ComponentFixture<ResturantsUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResturantsUpdateComponent]
    });
    fixture = TestBed.createComponent(ResturantsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
