import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {SkeletonModule} from 'primeng/skeleton';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {SelectButtonModule} from 'primeng/selectbutton';
import {FileUploadModule} from 'primeng/fileupload';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    SkeletonModule,
    TableModule,
    DialogModule,
    InputTextModule,
    SelectButtonModule,
    FileUploadModule,
    CardModule
  ],
  exports: [
    ButtonModule,
    SkeletonModule,
    TableModule,
    DialogModule,
    InputTextModule,
    SelectButtonModule,
    FileUploadModule,
    CardModule
  ]
})
export class PrimeModule { }
