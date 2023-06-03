import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonimportComponent } from './jsonimport.component';

describe('JsonimportComponent', () => {
  let component: JsonimportComponent;
  let fixture: ComponentFixture<JsonimportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonimportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonimportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
