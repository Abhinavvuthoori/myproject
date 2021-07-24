import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelugusongsComponent } from './telugusongs.component';

describe('TelugusongsComponent', () => {
  let component: TelugusongsComponent;
  let fixture: ComponentFixture<TelugusongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelugusongsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelugusongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
