import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaTesteComponent } from './area-teste/area-teste.component';
import { CargosComponent } from './cargos/cargos.component';
import { EstatisticaComponent } from './estatistica/estatistica.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';

const routes: Routes = [
  {
    path:'funcionarios',
    component:FuncionariosComponent
  },
  {
    path:'teste',
    component: AreaTesteComponent
  },
  {
    path:'cargos',
    component:CargosComponent
  },
  {
    path:'estatistica',
    component:EstatisticaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
