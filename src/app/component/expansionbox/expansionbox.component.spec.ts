import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionboxComponent } from './expansionbox.component';

describe('ExpansionboxComponent', () => {
  let component: ExpansionboxComponent;
  let fixture: ComponentFixture<ExpansionboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpansionboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
