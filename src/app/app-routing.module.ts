import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';

//Matriz de objetos para las rutas.
const routes: Routes = [
  /* Entre llaves definiremos cada una de las rutas */
  {
    path: ``,
    component: SkeletonComponent,
    children : [
      {path: '', loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule)}
    ]
  }
];

@NgModule({
  imports: [
    //indicamos al enrutador cuales son las rutas de la aplicación
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
