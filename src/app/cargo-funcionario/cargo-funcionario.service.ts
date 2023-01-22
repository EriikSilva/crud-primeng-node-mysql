import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargoFuncionarioService {

  cargosFuncionariosApi = 'http://localhost:3000/cargoFuncionario/'

  constructor(private _http:HttpClient) { }

  getCargosFuncionarios(){
    return this._http.get('http://localhost:3000/cargoFuncionario/')
  }


  
  

}
