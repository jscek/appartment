import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoiningPopupComponent } from './joining-popup.component';

describe('JoiningPopupComponent', () => {
  let component: JoiningPopupComponent;
  let fixture: ComponentFixture<JoiningPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoiningPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoiningPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
