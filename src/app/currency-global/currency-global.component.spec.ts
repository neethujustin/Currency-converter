import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyGlobalComponent } from './currency-global.component';

describe('CurrencyGlobalComponent', () => {
  let component: CurrencyGlobalComponent;
  let fixture: ComponentFixture<CurrencyGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
