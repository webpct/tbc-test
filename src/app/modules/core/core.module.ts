import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { PrimeModule } from '../prime/prime.module';
import { ButtonLinkComponent } from './components/button-link/button-link.component';



@NgModule({
  declarations: [
    InputComponent,
    ButtonLinkComponent
  ],
  exports: [
    InputComponent,
    ButtonLinkComponent
  ],
  imports: [
    PrimeModule,
    CommonModule
  ]
})
export class CoreModule { }
