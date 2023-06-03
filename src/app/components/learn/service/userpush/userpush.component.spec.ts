import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpushComponent } from './userpush.component';

describe('UserpushComponent', () => {
  let component: UserpushComponent;
  let fixture: ComponentFixture<UserpushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserpushComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserpushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
