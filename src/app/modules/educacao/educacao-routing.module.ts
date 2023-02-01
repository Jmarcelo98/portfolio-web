import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacaoComponent } from './educacao.component';

const routes: Routes = [
  {
    path: '',
    component: EducacaoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducacaoRoutingModule { }
