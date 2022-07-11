import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsListComponent } from './pages/clients-list/clients-list.component';
import { PrimeModule } from '../prime/prime.module';
import { ClientsComponent } from './clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateClientComponent } from './pages/create-client/create-client.component';
import {  HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { ClientDetailsComponent } from './pages/client-details/client-details.component';

@NgModule({
  declarations: [
    ClientsListComponent,
    ClientsComponent,
    ClientFormComponent,
    CreateClientComponent,
    ClientDetailsComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    PrimeModule,
    ClientsRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CoreModule
  ],
})
export class ClientsModule { }
