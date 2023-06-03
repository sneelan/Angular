import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HookdemoComponent } from './hookdemo.component';

describe('HookdemoComponent', () => {
  let component: HookdemoComponent;
  let fixture: ComponentFixture<HookdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HookdemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HookdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
