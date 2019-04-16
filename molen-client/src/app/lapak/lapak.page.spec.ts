import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LapakPage } from './lapak.page';

describe('LapakPage', () => {
  let component: LapakPage;
  let fixture: ComponentFixture<LapakPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LapakPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LapakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
