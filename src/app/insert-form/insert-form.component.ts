import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { GetProdutosCosifService } from 'src/app/services/get-produtos-cosif.service';
import { GetProdutosService } from 'src/app/services/get-produtos.service';
import { DisplayTableComponent } from '../display-table/display-table.component';
import { GetMovimentostService } from '../services/get-movimentost.service';

export interface Produto {
  codProduto: string;
  desProduto: string;
}

@Component({
  selector: 'app-insert-form',
  templateUrl: './insert-form.component.html',
  styleUrls: ['./insert-form.component.css'],
})
export class InsertFormComponent implements OnInit {

  async ngOnInit() {
    await this.getProduto();
    await this.getProdutoCosif();
    await this.getMovimentoManual();

  }
  
  isDisabled:boolean = true;

  produtoList : any[] = [];
  produtoCosifList: any;
  movimentoManualList: any;

  constructor(private GetProdutosCosifService: GetProdutosCosifService, private GetProdutosService: GetProdutosService,private GetMovimentostService : GetMovimentostService, private DisplayTableComponent: DisplayTableComponent) {}

  async getProduto(){
    await this.GetProdutosService.getData().then((data: any[]) => {
      this.produtoList = data;
    });
  }

  async getProdutoCosif(){
    this.GetProdutosCosifService.getData().then((data: any[]) => {
      this.produtoCosifList = data;
    });
  }
  async getMovimentoManual(){
    await this.GetMovimentostService.getData().then((data: any[]) => {
      this.movimentoManualList = data;
    });
  }

  async submitForm(movimentoManualForm :NgForm) {
    let data = movimentoManualForm.value;
    this.isDisabled = true;
    data.codUsuario = "TESTE";
    data.numLancamento = this.defineID(this.movimentoManualList, data);
    this.GetMovimentostService.setData(data);
    this.DisplayTableComponent.refreshComp();
  }

  defineID(movimentoManual: any ,data: any ){
    let mesmoMes: any[] = [];
    let maior: any;
    movimentoManual.forEach((mov: any ) => {
      if (mov.datMes == data.datMes && mov.datAno == data.datAno) {
        mesmoMes.push(mov);
      }
    });
    if (mesmoMes.length == 0) {
      return 1;
    }else{
      maior = Math.max.apply(Math, mesmoMes.map(function(o) { return o.numLancamento; }))
    }

    return maior + 1;
  }

}
