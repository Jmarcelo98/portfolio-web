import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { CardSobreComponent } from './card-sobre/card-sobre.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';



@NgModule({
  declarations: [
    InicioComponent,
    CardSobreComponent,
    HabilidadesComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class InicioModule { }
