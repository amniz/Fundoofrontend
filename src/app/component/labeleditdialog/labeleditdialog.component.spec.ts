import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeleditdialogComponent } from './labeleditdialog.component';

describe('LabeleditdialogComponent', () => {
  let component: LabeleditdialogComponent;
  let fixture: ComponentFixture<LabeleditdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabeleditdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabeleditdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
