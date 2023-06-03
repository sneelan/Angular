import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2Componenta } from './child2.component';

describe('Child2Component', () => {
  let component: Child2Componenta;
  let fixture: ComponentFixture<Child2Componenta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Child2Componenta ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child2Componenta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
