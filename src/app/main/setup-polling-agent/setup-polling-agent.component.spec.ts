import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupPollingAgentComponent } from './setup-polling-agent.component';

describe('SetupPollingAgentComponent', () => {
  let component: SetupPollingAgentComponent;
  let fixture: ComponentFixture<SetupPollingAgentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetupPollingAgentComponent]
    });
    fixture = TestBed.createComponent(SetupPollingAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
