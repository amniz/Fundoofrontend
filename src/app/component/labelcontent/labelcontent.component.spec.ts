import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelcontentComponent } from './labelcontent.component';

describe('LabelcontentComponent', () => {
  let component: LabelcontentComponent;
  let fixture: ComponentFixture<LabelcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
