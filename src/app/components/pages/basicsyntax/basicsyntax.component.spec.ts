import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicsyntaxComponent } from './basicsyntax.component';

describe('BasicsyntaxComponent', () => {
  let component: BasicsyntaxComponent;
  let fixture: ComponentFixture<BasicsyntaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicsyntaxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicsyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
