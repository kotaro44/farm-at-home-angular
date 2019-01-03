import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FahHeaderComponent } from './fah-header.component';

describe('FahHeaderComponent', () => {
  let component: FahHeaderComponent;
  let fixture: ComponentFixture<FahHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FahHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FahHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
