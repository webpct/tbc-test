import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ClientsModule } from './modules/clients/clients.module';
import { DashboardPageComponent } from './modules/dashboard/dashboard-page/dashboard-page.component';
import { ClientsListComponent } from './modules/clients/clients-list/clients-list.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
  },
  {
    path: 'clients',
    component: ClientsListComponent
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
