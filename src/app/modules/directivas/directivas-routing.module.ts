import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/pages/home/home.component';
import { NgIFComponent } from './pages/ng-if/ng-if.component';
import { BindingComponent } from './pages/binding/binding.component';
import { NgStyleComponent } from './pages/ng-style/ng-style.component';
import { NgClassComponent } from './pages/ng-class/ng-class.component';
import { NgModelComponent } from './pages/ng-model/ng-model.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'ngIF', component: NgIFComponent, title: 'ngIF' },
  { path: 'binding', component: BindingComponent, title: 'BinDing' },
  { path: 'ngStyle', component: NgStyleComponent, title: 'NgStyle' },
  { path: 'ngClass', component: NgClassComponent, title: 'NgClass' },
  { path: 'ngModel', component: NgModelComponent, title: 'NgModel' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectivasRoutingModule {}
