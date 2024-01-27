import { Observable } from 'rxjs';
import { TabelaProdutosService } from './tabela-produtos.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent implements OnInit {
  constructor( 
    private tabelaProdutosService: TabelaProdutosService, 
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar ){

    this.produtos = this.tabelaProdutosService.getProdutos();

  }
  produtos: Observable<Produto[]>;

  displayedColumns = ['codProduto', 'nomeProduto', 'descProduto', 'preco', 'actions']

  onAdd() {
    this.router.navigate(['add'], { relativeTo: this.route });
  }

  edit(codProduto: number) {
    this.tabelaProdutosService.getProduto(codProduto).subscribe(result => {
      localStorage.setItem('produtoEditado', JSON.stringify(result));
      this.router.navigate(['edit'], { relativeTo: this.route });
    }, error => {
      this.snackBar.open('Erro ao tentar editar produto!' , '', {duration: 2000});
    });
  }

  delete(codProduto: number){
    this.tabelaProdutosService.deleteProduto(codProduto).subscribe(result => {
      this.snackBar.open('Produto Excluído!', '', {duration: 5000});
      window.location.reload();

    }, error => {
      this.snackBar.open('Erro ao tentar excluir produto!', '', {duration: 2000});
    });
  }
  ngOnInit(): void {
    
  }
}
