import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class TabelaProdutosService {

  apiUrl = 'https://nunes-sports-bff.vercel.app'
  constructor(private httpClient: HttpClient) { }

  getProdutos() {
    return this.httpClient.get<Produto[]>(this.apiUrl+'/produto/produtos');
  }

  postProduto(produto: Produto) {
    return this.httpClient.post<Produto>(this.apiUrl+'/produto/inserirProduto', produto)
  }

  getProduto(codProduto: Number) {
    return this.httpClient.post<Produto>(this.apiUrl+'/produto/produto', {"codProduto" : codProduto})
  }

  updateProduto(produto: Produto) {
    return this.httpClient.patch(this.apiUrl+'/produto/update', produto);
  }

  deleteProduto(codProduto: Number) {
    return this.httpClient.post(this.apiUrl+'/produto/deletarProduto', {"codProduto" : codProduto});
  }
}
