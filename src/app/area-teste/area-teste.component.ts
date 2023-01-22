import { Component } from '@angular/core';
import { ApiService } from '../funcionarios/funcionarios.service';

@Component({
  selector: 'app-area-teste',
  templateUrl: './area-teste.component.html',
  styleUrls: ['./area-teste.component.scss']
})
export class AreaTesteComponent {


  constructor(
    private funcionariosService: ApiService,
  ){}






}
