import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingminiComponent } from './trendingmini.component';

describe('TrendingminiComponent', () => {
  let component: TrendingminiComponent;
  let fixture: ComponentFixture<TrendingminiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingminiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingminiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
