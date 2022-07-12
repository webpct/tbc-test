import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsListComponent } from './pages/clients-list/clients-list.component';
import { PrimeModule } from '../prime/prime.module';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateClientComponent } from './pages/create-client/create-client.component';
import {  HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { ClientDetailsComponent } from './pages/client-details/client-details.component';
import { AccountFormComponent } from './components/account-form/account-form.component';

@NgModule({
  declarations: [
    ClientsListComponent,
    ClientFormComponent,
    CreateClientComponent,
    ClientDetailsComponent,
    AccountFormComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    PrimeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CoreModule
  ],
})
export class ClientsModule { }
