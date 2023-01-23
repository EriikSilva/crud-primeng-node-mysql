import { Component, OnInit } from '@angular/core';
import { ApplicationConfig } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { ApiService } from '../funcionarios/funcionarios.service';

@Component({
  selector: 'app-estatistica',
  templateUrl: './estatistica.component.html',
  styleUrls: ['./estatistica.component.scss'],
})
export class EstatisticaComponent implements OnInit {
  data: any;
  dados: any;
  chartOptions: any;
  teste: any;

  qtdFuncionarios: any;
  qtdAtivo: any;
  qtdDemitidos:any;
  qtdSuspensos:any;
  subscription: Subscription;

  config: ApplicationConfig;

  constructor(private funcionariosService: ApiService) {}

  ngOnInit(): void {
    this.funcionariosService.getFuncionarios().subscribe((res: any) => {
      // console.log('q',res.funcionarios)
      this.dados = res.funcionarios;

      this.qtdFuncionarios = Object.keys(this.dados).length;

      this.qtdAtivo = this.dados.filter((dados) => {
        return dados.nome_cargo == 'Ativo';
      });

      this.qtdDemitidos = this.dados.filter((dados) => {
        return dados.nome_cargo == 'Demitido';
      });

      this.qtdSuspensos = this.dados.filter((dados) => {
        return dados.nome_cargo == 'Suspenso';
      });



      // console.log(this.qtdAtivo.length);

      //  console.log('filtrar,',Object.keys(this.dados))
      // console.log('filtrou,',Object.keys(res))

      this.data = {
        labels: ['Funcionarios',  'Ativos','Suspensos','Demitidos' ],
        datasets: [
          {
            data: [
              this.qtdFuncionarios,
              this.qtdAtivo.length,  
              this.qtdSuspensos.length,
              this.qtdDemitidos.length,  
              ],
            backgroundColor: ['#260ecf','#289609', '#deda09', '#d90f0f'],
            hoverBackgroundColor: ['#260ecf', '#289609', '#deda09','#d90f0f'],
          },
        ],
      };
    });
  }
}
