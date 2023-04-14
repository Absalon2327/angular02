import { Component, OnInit } from '@angular/core';
import { IMascota } from '@modules/mascotas/interface/mascotas.interface';
import Swal from 'sweetalert2';
import { MascotasserviceService } from '../../services/mascotasservice.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {
  mascotas: IMascota[] = []; //array de mascotas
  mascota!: IMascota; //array de mascotas
  parametroBuscar: String = ''; //parámetro de búsqueda
  mascotasP: any[] = [];
  datosM: string[] = [];
  datos: any[] = ['usuario1', 30, true, "{'salario':200}"];
  idmascota: string = '';
  //Inyectar el servicio
  constructor(private mascotasService: MascotasserviceService) {}

  ngOnInit(): void {
    this.mascotasService.mascotas.subscribe((resp) => {
      this.mascotas = resp;
    });
  }

  estraerAll() {
    // obtener por consola
    this.mascotasService.obtenerAll().then(async (resp: IMascota[]) => {
      console.log(resp);
      //repaso insentando datos de mascotas desde el archivo json
      resp.forEach((obj) => {
        this.mascotasP.push(obj);
        this.datosM.push(JSON.stringify(obj));
      });
      let jsonArray = JSON.parse(this.datosM[0]);
      for (const key in jsonArray) {
        console.log('llave', key, jsonArray[key]);
      }

      const { raza, des, ...datos } = jsonArray; //destructurando el json
      //console.log(des);

      const [obj1, obj2, obj3, ...losOtros] = resp; //destructurando el arreglo
    });
  }

  buscar(): void {
    //método para buscar
  }

  obtenerAll() {
    this.mascotasService.obtenerAll().then(async (resp: IMascota[]) => {
      console.log('resp', resp);
      //reapso

      resp.forEach((obj) => {
        this.mascotasP.push(obj);
        this.datosM.push(JSON.stringify(obj));
      });
    });
  }

  buscarMascota() {
    this.mascotasService
      .buscarMascota(this.parametroBuscar.toLocaleLowerCase())
      .subscribe((resp: IMascota[]) => {
        this.mascotas = resp;
      });
  }

  buscarMascotaByID() {
    this.mascotasService
      .buscarMascotaByID(this.parametroBuscar.toLocaleLowerCase())
      .subscribe((resp: IMascota) => {
        this.mascota = resp;
      });
  }

  ObtenerId(imascota: string) {
    console.log(imascota);
    this.idmascota = imascota;
    const alert = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });
    alert
      .fire({
        title: '¿Estas seguro?',
        text: '¡No podrás revertir esto!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, Borrar',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          alert.fire('Eliminalo!', 'El Perrito ha sido eliminado', 'success');
          this.mascotasService
            .eliminarMascotaByID(imascota)
            .subscribe((resp) =>
              this.mascotasService.mascotas.subscribe(
                (respn) => (this.mascotas = respn)
              )
            );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          alert.fire('Cancelado', 'Registro almacenado :)', 'error');
        }
      });
  }
}
