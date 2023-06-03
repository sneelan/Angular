import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Daugher1Component } from './daugher1.component';

describe('Daugher1Component', () => {
  let component: Daugher1Component;
  let fixture: ComponentFixture<Daugher1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Daugher1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Daugher1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
