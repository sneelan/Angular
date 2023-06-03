import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastrserviceComponent } from './toastrservice.component';

describe('ToastrserviceComponent', () => {
  let component: ToastrserviceComponent;
  let fixture: ComponentFixture<ToastrserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastrserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastrserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
