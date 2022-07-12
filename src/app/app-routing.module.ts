import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ClientsModule } from './modules/clients/clients.module';
import { DashboardPageComponent } from './modules/dashboard/dashboard-page/dashboard-page.component';
import { ErrorComponent } from './modules/dashboard/error/error.component';
import { clientRoutes } from './modules/clients/clients-routing'

const routes: Routes = [
  ...clientRoutes,
  {
    path: '',
    component: DashboardPageComponent,
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    DashboardModule,
    ClientsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
