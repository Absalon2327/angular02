import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { ListarComponent } from './pages/listar/listar.component';
import { MascotaComponent } from './pages/mascota/mascota.component';

const routes: Routes = [
  {path: 'listar', component:ListarComponent, title:'Listado de Mascotas'},
  {path: 'card', component:CardComponent, title:'Mascotas'},
  {path: ':id', component:MascotaComponent, title:'Detalle'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MascotasRoutingModule { }
