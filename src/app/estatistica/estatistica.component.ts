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
  qtdDesenvolvedor: any;
  qtdAnalista:any;
  qtdTester:any;
  subscription: Subscription;

  config: ApplicationConfig;

  constructor(private funcionariosService: ApiService) {}

  ngOnInit(): void {
    this.funcionariosService.getFuncionarios().subscribe((res: any) => {
      // console.log('q',res.funcionarios)
      this.dados = res.funcionarios;

      // this.qtdFuncionarios = Object.keys(this.dados).length;

      this.qtdAnalista = this.dados.filter((dados) => {
        return dados.nome_cargo ==='Analista';
      });

      this.qtdDesenvolvedor = this.dados.filter((dados) => {
        return dados.nome_cargo === 'Desenvolvedor';
      });

      this.qtdTester = this.dados.filter((dados) => {
        return dados.nome_cargo ===  'Tester';
      });

      // console.log(this.qtdAtivo.length);

      //  console.log('filtrar,',Object.keys(this.dados))
      // console.log('filtrou,',Object.keys(res))

      this.data = {
        labels: ['Analista','Desenvolvedor','Tester' ],
        datasets: [
          {
            data: [
              // this.qtdFuncionarios,
              this.qtdAnalista.length,  
              this.qtdDesenvolvedor.length,
              this.qtdTester.length,  
              ],
            backgroundColor: ['#289609', '#deda09', '#d90f0f'],
            hoverBackgroundColor: ['#289609', '#deda09','#d90f0f'],
          },
        ],
      };
    });
  }
}
