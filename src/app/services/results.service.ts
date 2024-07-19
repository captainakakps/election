import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  private results: any[] = [];
  constructor() {}
  saveResults(result: any) {
    const value = localStorage.getItem('results');
    if (value) {
      this.results = [...JSON.parse(value), result];
    } else {
      this.results.push(result);
    }
    localStorage.setItem('results', JSON.stringify(this.results));
  }

  getResults() {
    const value: any = localStorage.getItem('results');
    return JSON.parse(value) ?? [];
  }
}
