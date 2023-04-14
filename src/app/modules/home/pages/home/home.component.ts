import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { FutboolService } from '../../servicio/futbool.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private futService: FutboolService, private sanitizer: DomSanitizer){

  }
  ngOnInit(): void {
    this.llenarDatos();
  }

  datos:any;
  videoURL: string ="https://www.youtube.com/watch?v=uQ8960IV-2o&list=RDuQ8960IV-2o&start_radio=1";
  year = new Date();
  imagen: string = "";

  llenarDatos(){
    this.futService.obtenerDatos().subscribe(response => {
      this.datos = response;
      this.imagen = this.datos.results[0].strPoster;
      console.log(this.datos);
    })
  }

  get video(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
   }

}
