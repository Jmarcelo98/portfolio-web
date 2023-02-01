import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienciaRoutingModule } from './experiencia-routing.module';
import { ExperienciaComponent } from './experiencia.component';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
    ExperienciaComponent
  ],
  imports: [
    CommonModule,
    ExperienciaRoutingModule,
    MatExpansionModule,
    MatButtonModule
  ]
})
export class ExperienciaModule { }
