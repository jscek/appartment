import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingCrownComponent } from './king-crown.component';

describe('KingCrownComponent', () => {
  let component: KingCrownComponent;
  let fixture: ComponentFixture<KingCrownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KingCrownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KingCrownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
