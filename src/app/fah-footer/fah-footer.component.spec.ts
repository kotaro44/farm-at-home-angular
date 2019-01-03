import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FahFooterComponent } from './fah-footer.component';

describe('FahFooterComponent', () => {
  let component: FahFooterComponent;
  let fixture: ComponentFixture<FahFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FahFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FahFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
