import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewencapsComponent } from './viewencaps.component';

describe('ViewencapsComponent', () => {
  let component: ViewencapsComponent;
  let fixture: ComponentFixture<ViewencapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewencapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewencapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
