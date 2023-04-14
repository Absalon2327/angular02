import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMascota } from '@modules/mascotas/interface/mascotas.interface';
import { switchMap } from 'rxjs';
import Swal from 'sweetalert2';
import { MascotasserviceService } from '../../services/mascotasservice.service';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.scss'],
})
export class MascotaComponent implements OnInit {
  mascota!: IMascota;

  constructor(
    private activatedRoute: ActivatedRoute,
    private mascotaService: MascotasserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //como devuelve un observable
    //witchMap, operador de transformación
    this.buscarMascotaID();
    this.eliminarMascota();
  }

  buscarMascotaID() {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.mascotaService.buscarMascotaByID(id)))
      .subscribe((resp: IMascota) => {
        this.mascota = resp;
      });
  }

  eliminarMascota() {
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
        text: `¡No podrás revertir esto!`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, Borrar',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          alert.fire('Eliminalo!', 'El Perrito ha sido eliminado', 'success');
          this.activatedRoute.params
            .pipe(
              switchMap(({ id }) => this.mascotaService.eliminarMascotaByID(id))
            )
            .subscribe((resp: IMascota) => {
              this.mascota = resp;
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          alert.fire('Cancelado', 'Registro almacenado :)', 'error');
        }
      });

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.mascotaService.eliminarMascotaByID(id)))
      .subscribe((resp: IMascota) => {
        this.mascota = resp;
      });
  }

  regresar() {
    //pra ir a la ruta indicada
    this.router.navigate(['mascotas/listar']);
  }

  getMascota():void{//obtine los datos de la mascota por id por consola
    const id= this.activatedRoute.snapshot.paramMap.get('id');
    this.mascotaService.buscarMascotaByID(id || '').subscribe(resp=>console.log(resp))
    /*this.mascotaService.mascotaById(id || '').subscribe((resp:IMascota)=>{
      this.mascota=resp;
    });*/
  }

  getMascotaPromesaById():void{//obtine los datos de la mascota por id promesa
    const id= this.activatedRoute.snapshot.paramMap.get('id');
    this.mascotaService.obtenerById(id || '').then(async(mascota:IMascota)=>{
    console.log("El response de la promesa",mascota);
    });
    /*this.mascotaService.obtenerById(id || '').then(async(mascota:IMascota)=>{
      console.log("Resultado de la promesa");
      this.mascota=mascota;
      });*/
  }
}
