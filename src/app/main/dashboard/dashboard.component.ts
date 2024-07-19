import { Component } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexXAxis,
} from 'ng-apexcharts';
import { ResultsService } from 'src/app/services/results.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  results: any[] = [];
  public chartOptions: Partial<ChartOptions>;

  constructor(private resultService: ResultsService) {
    this.chartOptions = {
      series: [],
      chart: {
        type: 'bar',
      },
      xaxis: {
        categories: [],
      },
      title: {
        text: 'Election Results',
      },
    };
  }

  ngOnInit(): void {
    this.results = this.resultService.getResults();

    this.updateChart();
  }

  updateChart() {
    const categories = Array.from(
      new Set(this.results.map((result) => result.candidate.name))
    );
    const seriesData = categories.map((candidate) => {
      return this.results
        .filter((result) => result.candidate.name === candidate)
        .reduce((total, result) => total + result.votes, 0);
    });

    this.chartOptions.series = [
      {
        name: 'Votes',
        data: seriesData,
      },
    ];
    this.chartOptions.xaxis = {
      categories: categories,
    };
  }
}
