import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TchildComponent } from './tchild.component';

describe('TchildComponent', () => {
  let component: TchildComponent;
  let fixture: ComponentFixture<TchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
