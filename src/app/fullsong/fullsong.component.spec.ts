import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullsongComponent } from './fullsong.component';

describe('FullsongComponent', () => {
  let component: FullsongComponent;
  let fixture: ComponentFixture<FullsongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullsongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullsongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
