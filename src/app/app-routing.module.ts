import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { NotFoundComponent } from './modules/home/pages/not-found/not-found.component';

//Matriz de objetos para las rutas.
const routes: Routes = [
  /* Entre llaves definiremos cada una de las rutas */
  {
    path: ``,
    component: SkeletonComponent,
    children : [
      {path: '', loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule)},
      {path: 'directivas', loadChildren: () => import('@modules/directivas/directivas.module').then(m => m.DirectivasModule)},
      {path: 'mascotas', loadChildren: () => import('@modules/mascotas/mascotas.module').then(m => m.MascotasModule)}
    ]
  },
  //{path:'**', redirectTo:'',pathMatch:'full'}
   {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [
    //indicamos al enrutador cuales son las rutas de la aplicación
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
