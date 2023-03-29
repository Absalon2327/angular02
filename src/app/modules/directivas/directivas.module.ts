import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivasRoutingModule } from './directivas-routing.module';
import { NgIFComponent } from './pages/ng-if/ng-if.component';
import { NgSwitchComponent } from './pages/ng-switch/ng-switch.component';
import { BindingComponent } from './pages/binding/binding.component';


@NgModule({
  declarations: [
    NgIFComponent,
    NgSwitchComponent,
    BindingComponent
  ],
  imports: [
    CommonModule,
    DirectivasRoutingModule
  ]
})
export class DirectivasModule { }
