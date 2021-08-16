import { ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { GetMovimentostService } from 'src/app/services/get-movimentost.service';

export interface Data {
  datMes: number;
  datAno: number;
  desProduto: number;
  codCosif: number;
  numLancamento: number;
  desDescricao: string;
  valValor:string;
}

@Component({
  selector: 'app-display-table',
  templateUrl: './display-table.component.html',
  styleUrls: ['./display-table.component.css']
})
export class DisplayTableComponent implements OnInit{
  displayedColumns: string[] = ['datMes', 'datAno', 'codCosif', 'desProduto', 'numLancamento', 'desDescricao', 'valValor'];
  dataSource : any[] = [];
  reloadCounter: any = 0;
  mySubscription: any;

  constructor(private router: Router,private service : GetMovimentostService){
  }

    async ngOnInit() {
      await this.getTableData();
    }

    async getTableData(){
      await this.service.getData().then((data: any[]) => {
        data.forEach(obj => {
         obj.desProduto = obj.produto.desProduto;
         obj.codCosif = obj.produtoCosif.codCosif;
      });
        this.dataSource = data;
      });
    }
    refreshComp(){
    window.location.reload();
}
}
