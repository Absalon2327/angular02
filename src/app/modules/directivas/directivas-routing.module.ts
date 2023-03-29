import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/pages/home/home.component';
import { NgIFComponent } from './pages/ng-if/ng-if.component';

const routes: Routes = [
  {path:'',component:HomeComponent,title:'Home'},
  {path:'ngIF',component:NgIFComponent,title:'ngIF'},
  {path:'binding',component:NgIFComponent,title:'BinDing'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivasRoutingModule { }
