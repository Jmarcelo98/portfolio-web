import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoComponent } from './contato.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    ContatoComponent
  ],
  imports: [
    CommonModule,
    ContatoRoutingModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class ContatoModule { }
