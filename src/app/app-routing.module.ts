import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'account', pathMatch: 'full' },
  {
    path: 'account',
    loadChildren: () =>
      import('../app/account/account.module').then((m) => m.AccountModule), //Lazy load account module
    data: { preload: true },
  },
  {
    path: 'app/main',
    loadChildren: () =>
      import('../app/main/main.module').then((m) => m.MainModule), //Lazy load account module
    data: { preload: true },
  },
  { path: '**', redirectTo: '/app/main/dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
