import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FutboolService {

  private urlAPI = 'https://www.thesportsdb.com/api/v1/json/3/eventslast.php?id=133602'

  constructor(private htt: HttpClient) {

   }
   public obtenerDatos(): Observable<any>{
      return this.htt.get<any>(this.urlAPI);
    }
}
