import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KomentarPage } from './komentar.page';

describe('KomentarPage', () => {
  let component: KomentarPage;
  let fixture: ComponentFixture<KomentarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KomentarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KomentarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
