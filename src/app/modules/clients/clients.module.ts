import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { PrimeModule } from '../prime/prime.module';
import { ClientsComponent } from './clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientFormComponent } from './components/client-form/client-form.component';

@NgModule({
  declarations: [
    ClientsListComponent,
    ClientsComponent,
    ClientFormComponent
  ],
  imports: [
    CommonModule,
    PrimeModule,
    ClientsRoutingModule
  ],
})
export class ClientsModule { }
