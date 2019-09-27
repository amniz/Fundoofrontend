import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MydialogueComponent } from './mydialogue.component';

describe('MydialogueComponent', () => {
  let component: MydialogueComponent;
  let fixture: ComponentFixture<MydialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MydialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MydialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
