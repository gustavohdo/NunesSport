import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TabelaProdutosService } from '../tabela-produtos/tabela-produtos.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-produto-edit',
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.css']
})
export class ProdutoEditComponent implements OnInit{
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private router: Router, 
    private route: ActivatedRoute, 
    private tabelaProdutosService: TabelaProdutosService,
    private snackBar: MatSnackBar ) {
    this.form = this.formBuilder.group({
      nomeProduto: [null],
      codProduto: [null],
      descProduto: [null],
      preco: [null]
    });
  }

  ngOnInit(): void {
    console.log('ngOnInit do ProdutoEditComponent');

    const produtosEditadosString = localStorage.getItem('produtoEditado');

    if (produtosEditadosString) {
      const produtosEditados = JSON.parse(produtosEditadosString);
  
      console.log('Dados do produtoEditado:', produtosEditados);
  
      // Certifique-se de que os nomes dos campos correspondam exatamente às propriedades no objeto
      if (produtosEditados.length > 0) {
        const produtoEditado = produtosEditados[0];
  
        this.form.patchValue({
          nomeProduto: produtoEditado.nomeProduto,
          codProduto: produtoEditado.codProduto,
          descProduto: produtoEditado.descProduto,
          preco: produtoEditado.preco
        });
  
        // Limpa o item do localStorage após recuperar as informações
        localStorage.removeItem('produtoEditado');
      }
    }
  }

  onSubmit() {
    this.tabelaProdutosService.updateProduto(this.form.value).subscribe((result) => {
      this.snackBar.open('Produto salvo com sucesso!', '', {duration: 5000});
      this.router.navigate([''], { relativeTo: this.route });
    }, (error) => {
      this.snackBar.open('Erro ao salvar produto!', '', {duration: 2000});
    });
  }

  onCancel() {
    this.router.navigate([''], { relativeTo: this.route });
  }
}
