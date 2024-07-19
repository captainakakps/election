import { Component } from '@angular/core';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-setup-candidates',
  templateUrl: './setup-candidates.component.html',
  styleUrls: ['./setup-candidates.component.css'],
})
export class SetupCandidatesComponent {
  title: string = 'Candidate';
  name: string = '';
  gender: string = '';
  email: string = '';
  constituency: string = '';
  picture: File | null = null;
  candidates: any[] = [];
  addcandidate: boolean = false;

  constructor(private candidateService: CandidateService) {
    this.candidates = this.candidateService.getCandidates();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.picture = file;
    }
  }

  addCandidate() {
    const candidate = {
      title: this.title,
      name: this.name,
      gender: this.gender,
      email: this.email,
      constituency: this.constituency,
      picture: this.picture,
    };
    this.candidateService.addCandidate(candidate);
    this.candidates = this.candidateService.getCandidates();
    // Clear input fields
    this.reset();
  }
  reset() {
    this.name = '';
    this.gender = '';
    this.email = '';
    this.constituency = '';
    this.picture = null;
    this.addcandidate = false;
  }
}
