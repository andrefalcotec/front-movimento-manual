import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }    from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetProdutosService {

  constructor(private http: HttpClient) { }

  async getData() : Promise<any>{
    return this.http.get('/api/produtos').
    toPromise();
  }
}
