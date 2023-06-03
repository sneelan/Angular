import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1Componenta } from './child1.component';

describe('Child1Component', () => {
  let component: Child1Componenta;
  let fixture: ComponentFixture<Child1Componenta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Child1Componenta ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child1Componenta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
