import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }    from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetProdutosCosifService {

  constructor(private http: HttpClient) { }

  async getData() : Promise<any>{
    return this.http.get('/api/produtoscosif').
    toPromise();
  }
}
