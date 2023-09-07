import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdComponent } from './curd.component';

describe('CurdComponent', () => {
  let component: CurdComponent;
  let fixture: ComponentFixture<CurdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurdComponent]
    });
    fixture = TestBed.createComponent(CurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
