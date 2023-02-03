import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducacaoRoutingModule } from './educacao-routing.module';
import { EducacaoComponent } from './educacao.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    EducacaoComponent
  ],
  imports: [
    CommonModule,
    EducacaoRoutingModule,
    MatCardModule
  ]
})
export class EducacaoModule { }
