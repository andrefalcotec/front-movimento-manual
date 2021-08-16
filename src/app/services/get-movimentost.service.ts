import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }    from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class GetMovimentostService {


  constructor(private http: HttpClient) { 

  }

  async getData() : Promise<any>{
    return await this.http.get('/api/movimentos').
    toPromise();
  }

  async setData(data: any) : Promise<any>{
    let retorno;

    this.http.post('http://localhost:9000/api/movimentos', data)
    .subscribe(
      resultado => {
        console.log(resultado)
        retorno = resultado;
      },
      erro => {
        if(erro.status == 400) {
          console.log(erro);
        }
      }
    );
  }
}
