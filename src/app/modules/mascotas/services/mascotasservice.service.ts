import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IMascota } from '../interface/mascotas.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MascotasserviceService {
  private baseURL: string = environment.baseUrl; //url backend

  constructor(private httpClient: HttpClient) {
    console.log('Esta funcionando');
  }

  get mascotas() {
    return this.httpClient.get<IMascota[]>('http://localhost:3000/mascotas');
  }

  obtenerAll(): any {
    return new Promise((resolve) => {
      this.httpClient
        .get<IMascota[]>('http://localhost:3000/mascotas')
        .subscribe((data) => {
          resolve(data);
        });
    });
  }

  buscarMascota(termino: string): Observable<IMascota[]> {
    if (termino.length > 1) {
      return this.httpClient.get<IMascota[]>(
        `${this.baseURL}/?q=${termino}&_limit=5`
      );
    } else {
      return this.httpClient.get<IMascota[]>(`${this.baseURL}`);
    }
  }

  buscarMascotaByID(id: string): Observable<IMascota> {
    if (id.length >= 1) {
      console.log('id recibido', id);
      return this.httpClient.get<IMascota>(
        `${this.baseURL}/${id}`
      );
    } else {
      return this.httpClient.get<IMascota>(`${this.baseURL}`);
    }
  }

  //con promesa
  public obtenerById(id:string):any{

    return new Promise(resolve=>{
      return this.httpClient.get<IMascota>(`${this.baseURL}/${id}`)
      .subscribe(data=>{
        resolve(data);
      });
    });

}

  eliminarMascotaByID(id: string): Observable<IMascota> {
    if (id.length >= 1) {
      console.log('id recibido', id);
      return this.httpClient.delete<IMascota>(
        `${this.baseURL}/${id}`
      );
    } else {
      return this.httpClient.get<IMascota>(`${this.baseURL}`);
    }
  }


}
