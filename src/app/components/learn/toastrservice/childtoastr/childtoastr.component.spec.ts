import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildtoastrComponent } from './childtoastr.component';

describe('ChildtoastrComponent', () => {
  let component: ChildtoastrComponent;
  let fixture: ComponentFixture<ChildtoastrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildtoastrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildtoastrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
