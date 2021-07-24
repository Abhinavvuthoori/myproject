import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeluguminiComponent } from './telugumini.component';

describe('TeluguminiComponent', () => {
  let component: TeluguminiComponent;
  let fixture: ComponentFixture<TeluguminiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeluguminiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeluguminiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
