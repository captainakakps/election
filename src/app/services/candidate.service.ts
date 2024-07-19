import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CandidateService {
  private candidates: any[] = [];
  constructor() {}
  addCandidate(candidate: any) {
    const value = localStorage.getItem('candidates');
    if (value) {
      this.candidates = [...JSON.parse(value), candidate];
    } else {
      this.candidates.push(candidate);
    }

    localStorage.setItem('candidates', JSON.stringify(this.candidates));
  }

  addPolling(candidate: any) {
    const value = localStorage.getItem('candidates');
    if (value) {
      this.candidates = [...JSON.parse(value), candidate];
    } else {
      this.candidates.push(candidate);
    }

    localStorage.setItem('candidates', JSON.stringify(this.candidates));
  }

  getCandidates() {
    const value: any = localStorage.getItem('candidates');
    return JSON.parse(value) ?? [];
  }
}
