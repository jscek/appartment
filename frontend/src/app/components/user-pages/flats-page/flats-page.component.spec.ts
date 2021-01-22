import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatsPageComponent } from './flats-page.component';

describe('FlatsPageComponent', () => {
  let component: FlatsPageComponent;
  let fixture: ComponentFixture<FlatsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
