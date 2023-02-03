import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoComponent } from './contato.component';
import { MatCardModule } from '@angular/material/card';
import { EmailComponent } from './email/email.component';
import { LinkedinComponent } from './linkedin/linkedin.component';


@NgModule({
  declarations: [
    ContatoComponent,
    EmailComponent,
    LinkedinComponent
  ],
  imports: [
    CommonModule,
    ContatoRoutingModule,
    MatCardModule
  ]
})
export class ContatoModule { }
