import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }

  apiUrl = 'http://localhost:3000/funcionarios/'
  apiCargoFuncionario = 'http://localhost:3000/cargoFuncionario/'
  // cargosFuncionariosApi = 'http://localhost:3000/cargoFuncionario/'

  getFuncionarios(){
    return this._http.get(`${this.apiUrl}`)
  }
  get1Funcionario(id:any){
    let id_funcionario = id;
    return this._http.get(`${this.apiUrl}${id_funcionario}`)
  }

  postFuncionario(data:any){
    return this._http.post(`${this.apiUrl}`, data)
  }

  postCargoFuncionario(data:any){
    return this._http.post(`${this.apiCargoFuncionario}`, data)
  }
  
  patchFuncionario(data:any, id:any){
    let id_funcionario = id;
    
    return this._http.patch(`${this.apiUrl}${id_funcionario}`, data);
  }

  deletarFuncionario(id: any){
    let id_funcionario = id;
    return this._http.delete(`${this.apiUrl}${id_funcionario}`);
  }
}
