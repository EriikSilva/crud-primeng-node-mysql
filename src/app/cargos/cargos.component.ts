import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CargosService } from './cargos.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.scss']
})
export class CargosComponent implements OnInit {

  cargos:any;
  criarCargoDialog:boolean
  submitted: boolean = false;

  constructor(
    private cargosService:CargosService,
    private messageService: MessageService,
  ){}


  ngOnInit(): void {
    
    this.cargosService.getCargos()
    .subscribe((res:any) => {
      console.log('funcionou?', res.cargos);
      
      this.cargos = res.cargos;
    });
  }

  lerCargos(){
    this.cargosService.getCargos().subscribe((res: any) => {
      this.cargos = res.cargos;
    });
  }

  cargoForm = new FormGroup({
    nome_cargo: new FormControl('', Validators.required),
  })

  dialogCriarCargo(){
    this.criarCargoDialog = true;
    this.cargoForm.reset();
  }
  hideDialog() {
    this.criarCargoDialog = false
    this.cargoForm.reset();
  }

  inserirCargo(){
    // console.log(this.cargoForm.value)
    if (this.cargoForm.valid) {
      this.cargosService.postCargo(this.cargoForm.value)
      .subscribe((res:any) => {
        this.messageService.add({
          key: 'inserir',
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Funcionario Inserido Com Sucesso',
        });
        this.cargoForm.reset();
        this.hideDialog();
        this.lerCargos();
      })
    }
  }
}
