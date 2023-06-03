import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalreferenceComponent } from './localreference.component';

describe('LocalreferenceComponent', () => {
  let component: LocalreferenceComponent;
  let fixture: ComponentFixture<LocalreferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalreferenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
