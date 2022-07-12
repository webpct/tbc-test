import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsListComponent } from './pages/clients-list/clients-list.component';
import { ClientsResolver } from './resolvers/clients/clients.resolver';
import { CreateClientComponent } from './pages/create-client/create-client.component';
import { ClientDetailsComponent } from './pages/client-details/client-details.component';
import { ClientDetailsResolver } from './resolvers/client-details/client-details.resolver';

export const clientRoutes: Routes = [
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
  },
  {
    path: 'clients/:id',
    component: ClientDetailsComponent,
    resolve: {
      clientDetails: ClientDetailsResolver
    }
  },
];
