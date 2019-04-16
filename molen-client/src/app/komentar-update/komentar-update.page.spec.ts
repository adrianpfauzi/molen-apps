import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KomentarUpdatePage } from './komentar-update.page';

describe('KomentarUpdatePage', () => {
  let component: KomentarUpdatePage;
  let fixture: ComponentFixture<KomentarUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KomentarUpdatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KomentarUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
