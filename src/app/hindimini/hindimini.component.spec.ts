import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HindiminiComponent } from './hindimini.component';

describe('HindiminiComponent', () => {
  let component: HindiminiComponent;
  let fixture: ComponentFixture<HindiminiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HindiminiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HindiminiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
