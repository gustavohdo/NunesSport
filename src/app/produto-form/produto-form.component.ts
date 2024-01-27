import { TabelaProdutosService } from './../tabela-produtos/tabela-produtos.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent {

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

  onSubmit() {
    this.tabelaProdutosService.postProduto(this.form.value).subscribe(result => {
      this.snackBar.open('Produto salvo com sucesso!', '', {duration: 5000});
      this.router.navigate([''], { relativeTo: this.route });
    }, error => {
      this.snackBar.open('Erro ao salvar produto!', '', {duration: 2000});
    });
  }

  onCancel() {
    this.router.navigate([''], { relativeTo: this.route });
  }
}
