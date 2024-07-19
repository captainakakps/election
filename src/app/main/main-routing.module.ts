import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SetupElectionComponent } from './setup-election/setup-election.component';
import { SetupCandidatesComponent } from './setup-candidates/setup-candidates.component';
import { EnterResultsComponent } from './enter-results/enter-results.component';
import { MainComponent } from './main.component';
import { SetupPollingAgentComponent } from './setup-polling-agent/setup-polling-agent.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: DashboardComponent,
        pathMatch: 'full',
      },
      {
        path: 'setup-election',
        component: SetupElectionComponent,
        pathMatch: 'full',
      },
      {
        path: 'setup-candidates',
        component: SetupCandidatesComponent,
        pathMatch: 'full',
      },
      {
        path: 'setup-polling-agents',
        component: SetupPollingAgentComponent,
        pathMatch: 'full',
      },
      {
        path: 'enter-results',
        component: EnterResultsComponent,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
