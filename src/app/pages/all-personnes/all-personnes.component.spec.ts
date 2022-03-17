import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPersonnesComponent } from './all-personnes.component';

describe('AllPersonnesComponent', () => {
  let component: AllPersonnesComponent;
  let fixture: ComponentFixture<AllPersonnesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPersonnesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPersonnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
