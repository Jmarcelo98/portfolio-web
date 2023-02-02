import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: 'contato',
    loadChildren: () => import('./modules/contato/contato.module').then(m => m.ContatoModule)
  },
  {
    path: 'experiencia',
    loadChildren: () => import('./modules/experiencia/experiencia.module').then(m => m.ExperienciaModule)
  },
  {
    path: 'educacao',
    loadChildren: () => import('./modules/educacao/educacao.module').then(m => m.EducacaoModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
