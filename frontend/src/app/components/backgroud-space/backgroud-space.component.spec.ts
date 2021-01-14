import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroudSpaceComponent } from './backgroud-space.component';

describe('BackgroudSpaceComponent', () => {
  let component: BackgroudSpaceComponent;
  let fixture: ComponentFixture<BackgroudSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroudSpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroudSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
