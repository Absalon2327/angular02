import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FutboolService } from './servicio/futbool.service';

@NgModule({
  declarations: [
    HomeComponent,
    DetalleComponent,
    NotFoundComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule, HttpClientModule],
  providers:[
    FutboolService
  ]
})
export class HomeModule {}
