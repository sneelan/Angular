import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventshareComponent } from './eventshare.component';

describe('EventshareComponent', () => {
  let component: EventshareComponent;
  let fixture: ComponentFixture<EventshareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventshareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventshareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
