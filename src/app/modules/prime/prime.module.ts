import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {SkeletonModule} from 'primeng/skeleton';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    SkeletonModule,
    TableModule,
    DialogModule
  ],
  exports: [
    ButtonModule,
    SkeletonModule,
    TableModule,
    DialogModule
  ]
})
export class PrimeModule { }
