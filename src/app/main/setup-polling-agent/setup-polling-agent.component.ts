import { Component } from '@angular/core';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-setup-polling-agent',
  templateUrl: './setup-polling-agent.component.html',
  styleUrls: ['./setup-polling-agent.component.css'],
})
export class SetupPollingAgentComponent {
  title: string = 'polling-agent';
  name: string = '';
  gender: string = '';
  contact: string = '';
  picture: File | null = null;
  candidates: any[] = [];

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
      contact: this.contact,
      picture: this.picture,
    };
    this.candidateService.addCandidate(candidate);
    this.candidates = this.candidateService.getCandidates();
    this.reset();
  }

  reset() {
    this.name = '';
    this.gender = '';
    this.contact = '';
    this.picture = null;
  }
}
