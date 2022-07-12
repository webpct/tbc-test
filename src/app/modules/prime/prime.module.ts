import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {SkeletonModule} from 'primeng/skeleton';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {SelectButtonModule} from 'primeng/selectbutton';
import {FileUploadModule} from 'primeng/fileupload';
import {ChipModule} from 'primeng/chip';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';
import {PanelModule} from 'primeng/panel';
import { TagModule } from 'primeng/tag';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';


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
    CardModule,
    ChipModule,
    DividerModule,
    PanelModule,
    TagModule,
    DropdownModule,
    ProgressBarModule
  ],
  exports: [
    ButtonModule,
    SkeletonModule,
    TableModule,
    DialogModule,
    InputTextModule,
    SelectButtonModule,
    FileUploadModule,
    CardModule,
    ChipModule,
    DividerModule,
    PanelModule,
    TagModule,
    DropdownModule,
    ProgressBarModule
  ]
})
export class PrimeModule { }
