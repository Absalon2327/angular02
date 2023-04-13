import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMascota } from '@modules/mascotas/interface/mascotas.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() obj!: IMascota;

  @Output() mascota = new EventEmitter();

  eliminarMascota(id:string){
    this.mascota.emit(id);
  }
}
