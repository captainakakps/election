import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ElectionService {
  private elections: any[] = [];
  private pollingStations: any[] = [];
  constructor() {}
  createElection(election: any) {
    const value = localStorage.getItem('elections');
    if (value) {
      this.elections = [...JSON.parse(value), election];
    } else {
      this.elections.push(election);
    }
    localStorage.setItem('elections', JSON.stringify(this.elections));
  }

  addPollingStation(item: any) {
    const value = localStorage.getItem('polling-stations');
    if (value) {
      this.pollingStations = [...JSON.parse(value), item];
    } else {
      this.pollingStations.push(item);
    }
    localStorage.setItem(
      'polling-stations',
      JSON.stringify(this.pollingStations)
    );
  }

  getPollingStations() {
    const value: any = localStorage.getItem('polling-stations');
    return JSON.parse(value) ?? [];
  }

  getElections() {
    const value: any = localStorage.getItem('elections');
    return JSON.parse(value) ?? [];
  }
}
