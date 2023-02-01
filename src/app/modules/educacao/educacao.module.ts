import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducacaoRoutingModule } from './educacao-routing.module';
import { EducacaoComponent } from './educacao.component';


@NgModule({
  declarations: [
    EducacaoComponent
  ],
  imports: [
    CommonModule,
    EducacaoRoutingModule
  ]
})
export class EducacaoModule { }
