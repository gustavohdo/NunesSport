import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';
import { ProdutoEditComponent } from './produto-edit/produto-edit.component';

const routes: Routes = [
  { path: '', component: TabelaProdutosComponent },
  { path: 'add', component: ProdutoFormComponent },
  { path: 'edit', component: ProdutoEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
