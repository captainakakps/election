import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupCandidatesComponent } from './setup-candidates.component';

describe('SetupCandidatesComponent', () => {
  let component: SetupCandidatesComponent;
  let fixture: ComponentFixture<SetupCandidatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetupCandidatesComponent]
    });
    fixture = TestBed.createComponent(SetupCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
