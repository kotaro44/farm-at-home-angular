import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FahProductCardComponent } from './fah-product-card.component';

describe('FahProductCardComponent', () => {
  let component: FahProductCardComponent;
  let fixture: ComponentFixture<FahProductCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FahProductCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FahProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
