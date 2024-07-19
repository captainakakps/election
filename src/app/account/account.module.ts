import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AccountComponent } from './account.component';

@NgModule({
  declarations: [LoginComponent, AccountComponent],
  imports: [CommonModule, AccountRoutingModule, FormsModule],
  exports: [AccountComponent],
})
export class AccountModule {}
