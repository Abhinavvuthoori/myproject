import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopartistsminiComponent } from './topartistsmini.component';

describe('TopartistsminiComponent', () => {
  let component: TopartistsminiComponent;
  let fixture: ComponentFixture<TopartistsminiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopartistsminiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopartistsminiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
