import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HindisongsComponent } from './hindisongs.component';

describe('HindisongsComponent', () => {
  let component: HindisongsComponent;
  let fixture: ComponentFixture<HindisongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HindisongsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HindisongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
