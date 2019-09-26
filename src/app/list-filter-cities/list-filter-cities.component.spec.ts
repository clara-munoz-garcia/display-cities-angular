import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFilterCitiesComponent } from './list-filter-cities.component';

describe('ListFilterCitiesComponent', () => {
  let component: ListFilterCitiesComponent;
  let fixture: ComponentFixture<ListFilterCitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFilterCitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFilterCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
