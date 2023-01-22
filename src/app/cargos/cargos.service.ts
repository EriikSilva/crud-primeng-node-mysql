import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargosService {

  constructor(private _http:HttpClient) { }

  cargosApi = 'http://localhost:3000/cargos/'


  getCargos(){
    return this._http.get(`${this.cargosApi}`)
  }


  postCargo(data:any){
    return this._http.post(`${this.cargosApi}`, data)
  }

}
