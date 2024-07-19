import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/services/candidate.service';
import { ElectionService } from 'src/app/services/election.service';
import { ResultsService } from 'src/app/services/results.service';

@Component({
  selector: 'app-enter-results',
  templateUrl: './enter-results.component.html',
  styleUrls: ['./enter-results.component.css'],
})
export class EnterResultsComponent implements OnInit {
  pollingStations: any[] = [];
  candidates: any = [];
  selectedPollingStation = '';
  selectedCandidate = null;
  votes = null;
  results: any[] = [];
  addResult = false;

  constructor(
    private resultService: ResultsService,
    private candidateService: CandidateService,
    private electionsService: ElectionService
  ) {}

  ngOnInit(): void {
    this.results = this.resultService.getResults();
    this.candidates = this.candidateService.getCandidates();
    this.pollingStations = this.electionsService.getPollingStations();
  }

  enterResults() {
    const result = {
      pollingStation: this.selectedPollingStation,
      candidate: this.candidates.find(
        (x: any) => x.name === this.selectedCandidate
      ),
      votes: this.votes,
    };
    this.resultService.saveResults(result);
    this.results = this.resultService.getResults();
    this.selectedPollingStation = '';
    this.selectedCandidate = null;
    this.votes = null;
    this.addResult = false;
  }
}
