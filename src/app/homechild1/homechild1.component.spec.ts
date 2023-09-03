import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homechild1Component } from './homechild1.component';

describe('Homechild1Component', () => {
  let component: Homechild1Component;
  let fixture: ComponentFixture<Homechild1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Homechild1Component]
    });
    fixture = TestBed.createComponent(Homechild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
