import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnapiComponent } from './learnapi.component';

describe('LearnapiComponent', () => {
  let component: LearnapiComponent;
  let fixture: ComponentFixture<LearnapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnapiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
