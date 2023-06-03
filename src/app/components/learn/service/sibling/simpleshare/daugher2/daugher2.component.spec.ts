import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Daugher2Component } from './daugher2.component';

describe('Daugher2Component', () => {
  let component: Daugher2Component;
  let fixture: ComponentFixture<Daugher2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Daugher2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Daugher2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
