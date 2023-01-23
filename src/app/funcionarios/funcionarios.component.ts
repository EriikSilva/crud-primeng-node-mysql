import { Component, OnInit } from '@angular/core';
import { ApiService } from './funcionarios.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MessageService,
  ConfirmationService,
  LazyLoadEvent,
} from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { CargosService } from '../cargos/cargos.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss'],
})
export class FuncionariosComponent implements OnInit {
  funcionarios: any;
  teste: any;
  teste2:any;
  teste3: any;
  cargoID: any;
  criarFuncionariosDialog: boolean;
  atualizarFuncionarioDialog: boolean;
  deletarFuncionarioDialog: boolean;
  cargoSelecionado = '';
  cargos: any;

  value:Date;

  loading: boolean;
  position: string;

  getParamId: any;

  first = 0;
  last: number;
  totalRecords: number;
  rows = 5;

  submitted: boolean = false;

  constructor(
    private funcionariosService: ApiService,
    private cargosService: CargosService,
    private messageService: MessageService,
    private router: ActivatedRoute,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    // console.log(this.router.snapshot.paramMap.get('id_funcionario'), 'getid');

    this.funcionariosService.getFuncionarios().subscribe((res: any) => {
      this.funcionarios = res.funcionarios;
      
      //pro filtro de data
      this.funcionarios.forEach(funcionario => funcionario.criado_em = new Date(funcionario.criado_em));
      this.funcionarios.forEach(funcionario => funcionario.atualizado_em = new Date(funcionario.atualizado_em));
      this.funcionarios.forEach(funcionario => funcionario.nome_cargo = funcionario.nome_cargo)
    });

    this.cargosService.getCargos().subscribe((res: any) => {
      this.cargos = res.cargos;
  
    });
 
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  isLastPage(): boolean {
    return this.funcionarios
      ? this.first === this.funcionarios.length - this.rows : true;
  }
  isFirstPage(): boolean {
    return this.funcionarios ? this.first === 0 : true;
  }

  lerFuncionarios() {
    this.funcionariosService.getFuncionarios().subscribe((res: any) => {
      this.funcionarios = res.funcionarios;
    });
  }

  funcionarioForm = new FormGroup({
    nome_completo: new FormControl('', Validators.required),
    cargo_id: new FormControl('', Validators.required),
  });

  getEventValue($event: any) {
    // console.log('oq vc ta digitando ai => ',$event.target.value)
    return $event.target.value;
  }
  //DIALOGS
  hideDialog() {
    this.criarFuncionariosDialog = false;
    this.atualizarFuncionarioDialog = false;
    this.deletarFuncionarioDialog = false;
    this.funcionarioForm.reset();
  }

  dialogCriar() {
    this.criarFuncionariosDialog = true;
    this.funcionarioForm.reset();
  }
  dialogAtualizar(id: any) {
    this.getParamId = id;
    this.atualizarFuncionarioDialog = true;

    this.funcionariosService
      .get1Funcionario(this.getParamId)
      .subscribe((res: any) => {
        console.log('AQUI OH',res)
        this.funcionarioForm.patchValue({
          nome_completo: res.funcionario.nome_completo,   
   
        });
      });
  }

  //CRIAR
  inserirFuncionario(cargoSelecionado: any) {
    // console.log(cargoSelecionado.id)

    this.funcionarioForm.value.cargo_id = cargoSelecionado.id;

    console.log('form aaqui', this.funcionarioForm.value);

    //NOTA:DA UM JEITO DE ENFIAR ISSO NA OTA TABELA
    //NOTA: lazy loading e paginator

    if (this.funcionarioForm.valid) {
      this.funcionariosService
        .postFuncionario(this.funcionarioForm.value)
        .subscribe((res) => {
          console.log('res do funcionario', res);
          this.messageService.add({
            key: 'inserir',
            severity: 'success',
            summary: 'Sucesso',
            detail: 'Funcionario Inserido Com Sucesso',
          });

          // this.funcionarioForm.reset();
          this.hideDialog();
          this.lerFuncionarios();
        });
    } else {
      this.messageService.add({
        key: 'error',
        severity: 'error',
        summary: 'Error ao inserir',
        detail: 'Preencha os campos obrigatorios',
      });
      this.submitted = true;
    }
  }

  //ATUALIZAR FUNCIONARIO
  atualizarFuncionario(cargoSelecionado:any) {
    // console.log("@@",this.router.snapshot.paramMap.get('id_funcionario'), 'getid');
    // console.log('FUNCIONOU?', this.getParamId);

    this.funcionarioForm.value.cargo_id = cargoSelecionado.id;

    console.log('form aaqui', this.funcionarioForm.value);

    console.log(this.funcionarioForm.value);
    this.funcionariosService
      .patchFuncionario(this.funcionarioForm.value, this.getParamId)
      .subscribe((res: any) => {
        this.messageService.add({
          key: 'funcionarioAtualizado',
          severity: 'success',
          summary: 'Usuario Atualizado',
          detail: 'O usuario foi atualizado com sucesso',
        });

        this.lerFuncionarios();
        this.hideDialog();
      });
  }

  ConfirmarExclusao(id: any, position: string) {
    this.position = position;

    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir este funcionário?',
      accept: () => {
        this.funcionariosService.deletarFuncionario(id).subscribe((res) => {
          console.log(res);
          this.messageService.add({
            key: 'funcionarioDeletado',
            severity: 'success',
            summary: 'Usuario Deletado',
            detail: 'O usuario foi deletado com sucesso',
          });
          this.lerFuncionarios();
        });
      },
      key: 'positionDialog',
    });
  }
}
