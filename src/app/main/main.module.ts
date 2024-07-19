import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { SetupElectionComponent } from './setup-election/setup-election.component';
import { EnterResultsComponent } from './enter-results/enter-results.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MainComponent } from './main.component';
import { SetupCandidatesComponent } from './setup-candidates/setup-candidates.component';
import { SetupPollingAgentComponent } from './setup-polling-agent/setup-polling-agent.component';

@NgModule({
  declarations: [
    SetupElectionComponent,
    EnterResultsComponent,
    DashboardComponent,
    MainComponent,
    SetupCandidatesComponent,
    SetupPollingAgentComponent,
  ],
  imports: [CommonModule, MainRoutingModule, FormsModule, NgApexchartsModule],
  exports: [MainComponent],
})
export class MainModule {}
