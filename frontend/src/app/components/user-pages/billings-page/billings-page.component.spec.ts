import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingsPageComponent } from './billings-page.component';

describe('BillingsPageComponent', () => {
  let component: BillingsPageComponent;
  let fixture: ComponentFixture<BillingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
