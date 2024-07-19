import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupElectionComponent } from './setup-election.component';

describe('SetupElectionComponent', () => {
  let component: SetupElectionComponent;
  let fixture: ComponentFixture<SetupElectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetupElectionComponent]
    });
    fixture = TestBed.createComponent(SetupElectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
