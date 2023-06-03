import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Refer1Component } from './refer1.component';

describe('Refer1Component', () => {
  let component: Refer1Component;
  let fixture: ComponentFixture<Refer1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Refer1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Refer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
