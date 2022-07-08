import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import { ClientsListComponent } from './clients-list/clients-list.component';

@NgModule({
  declarations: [
    ClientsListComponent
  ],
  imports: [
    CommonModule,
    TableModule,
  ],
})
export class ClientsModule { }
