import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ErrorComponent } from './error/error.component';
import { PrimeModule } from '../prime/prime.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    DashboardPageComponent,
    ErrorComponent,
  ],
  imports: [
    CoreModule,
    PrimeModule,
    CommonModule,
  ]
})
export class DashboardModule { }
