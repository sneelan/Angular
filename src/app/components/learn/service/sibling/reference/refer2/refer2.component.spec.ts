import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Refer2Component } from './refer2.component';

describe('Refer2Component', () => {
  let component: Refer2Component;
  let fixture: ComponentFixture<Refer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Refer2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Refer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
