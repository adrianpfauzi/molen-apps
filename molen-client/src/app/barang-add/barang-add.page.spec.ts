import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarangAddPage } from './barang-add.page';

describe('BarangAddPage', () => {
  let component: BarangAddPage;
  let fixture: ComponentFixture<BarangAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarangAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarangAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
