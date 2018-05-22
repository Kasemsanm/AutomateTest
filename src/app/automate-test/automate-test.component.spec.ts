import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomateTestComponent } from './automate-test.component';

describe('AutomateTestComponent', () => {
  let component: AutomateTestComponent;
  let fixture: ComponentFixture<AutomateTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomateTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomateTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
