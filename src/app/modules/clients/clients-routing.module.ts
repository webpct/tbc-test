import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientsResolver } from './resolvers/clients/clients.resolver';

const routes: Routes = [
  {
    path: 'clients',
    component: ClientsListComponent,
    resolve: {
      clients: ClientsResolver
    }
  },
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
