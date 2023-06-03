import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleshareComponent } from './simpleshare.component';

describe('SimpleshareComponent', () => {
  let component: SimpleshareComponent;
  let fixture: ComponentFixture<SimpleshareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleshareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleshareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
