import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsListComponent } from './pages/clients-list/clients-list.component';
import { ClientsResolver } from './resolvers/clients/clients.resolver';
import { CreateClientComponent } from './pages/create-client/create-client.component';
import { ClientDetailsComponent } from './pages/client-details/client-details.component';

const routes: Routes = [
  {
    path: 'clients',
    component: ClientsListComponent,
    resolve: {
      clients: ClientsResolver
    }
  },
  {
    path: 'clients/add',
    component: CreateClientComponent,
    resolve: {
      clients: ClientsResolver
    }
  },
  {
    path: 'clients/:id',
    component: ClientDetailsComponent,
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
