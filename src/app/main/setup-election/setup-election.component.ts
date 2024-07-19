import { Component, OnInit } from '@angular/core';
import { ElectionService } from 'src/app/services/election.service';

@Component({
  selector: 'app-setup-election',
  templateUrl: './setup-election.component.html',
  styleUrls: ['./setup-election.component.css'],
})
export class SetupElectionComponent implements OnInit {
  electionName: string = '';
  date: string = '';
  constituency: string = '';
  pollingStation: string = '';
  pollingStationManager: string = '';
  pollingStations: any[] = [];
  add = false;

  elections: any[] = [];

  constructor(private electionService: ElectionService) {}

  ngOnInit(): void {
    this.elections = this.electionService.getElections();
  }

  addPollingStation(pollingStation: string) {
    this.pollingStations.push({
      name: pollingStation,
      manager: this.pollingStationManager,
    });

    this.electionService.addPollingStation({
      name: pollingStation,
      manager: this.pollingStationManager,
    });
  }

  createElection() {
    const election = {
      name: this.electionName,
      date: this.date,
      constituency: this.constituency,
      pollingStations: this.pollingStations,
    };
    this.elections.push(election);
    this.electionService.createElection(election);
    this.add = false;
  }
}
