import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';

import { TesteComponent } from 'src/app/teste/teste.component';
import { SharedModule } from '../shared/shared.module';
import { AtualizarAlternativaComponent } from './alternativa/atualizar-alternativa/atualizar-alternativa.component';
import { CadastrarAlternativaComponent } from './alternativa/cadastrar-alternativa/cadastrar-alternativa.component';
import { DeletarAlternativaComponent } from './alternativa/deletar-alternativa/deletar-alternativa.component';
import { RemoverAlternativaDaQuestaoComponent } from './alternativa/remover-alternativa-da-questao/remover-alternativa-da-questao.component';
import { AtualizarUsuarioComponent } from './atualizar-usuario/atualizar-usuario.component';
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { AtualizarCategoriaProvaComponent } from './categoria-prova/atualizar-categoria-prova/atualizar-categoria-prova.component';
import { CadastrarCategoriaProvaComponent } from './categoria-prova/cadastrar-categoria-prova/cadastrar-categoria-prova.component';
import { DeletarCategoriaProvaComponent } from './categoria-prova/deletar-categoria-prova/deletar-categoria-prova.component';
import { AtualizarCategoriaQuestaoComponent } from './categoria-questao/atualizar-categoria-questao/atualizar-categoria-questao.component';
import { CadastrarCategoriaQuestaoComponent } from './categoria-questao/cadastrar-categoria-questao/cadastrar-categoria-questao.component';
import { DeletarCategoriaQuestaoComponent } from './categoria-questao/deletar-categoria-questao/deletar-categoria-questao.component';
import { DeletarUsuarioComponent } from './deletar-usuario/deletar-usuario.component';
import { EntrarComponent } from './entrar/entrar.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { NavegacaoBarComponent } from './navegacao-bar/navegacao-bar.component';
import { AtualizarProvaComponent } from './prova/atualizar-prova/atualizar-prova.component';
import { CadastrarProvaComponent } from './prova/cadastrar-prova/cadastrar-prova.component';
import { DeletarProvaComponent } from './prova/deletar-prova/deletar-prova.component';
import { GaleriaProvasComponent } from './prova/galeriaprovas/galeria-provas.component';
import { MuralProvasComponent } from './prova/mural-provas/mural-provas.component';
import { MuralSprintsComponent } from './prova/mural-sprints/mural-sprints.component';
import { AtualizarQuestaoComAlternativaComponent } from './questao/atualizar-questao-com-alternativa/atualizar-questao-com-alternativa.component';
import { AtualizarQuestaoComponent } from './questao/atualizar-questao/atualizar-questao.component';
import { CadastrarQuestaoComProvaComponent } from './questao/cadastrar-questao-com-prova/cadastrar-questao-com-prova.component';
import { CadastrarQuestaoComponent } from './questao/cadastrar-questao/cadastrar-questao.component';
import { DeletarQuestaoComponent } from './questao/deletar-questao/deletar-questao.component';
import { MuralQuestoesComponent } from './questao/mural-questoes/mural-questoes.component';
import { RemoverQuestaoProvaComponent } from './questao/remover-questao-prova/remover-questao-prova.component';
import { SelecionarQuestoesComponent } from './questao/selecionar-questoes/selecionar-questoes.component';
import { QuizzComponent } from './quizz/quizz.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { UsuarioRoutingModule } from './usuario-routing.module';




@NgModule({
  declarations: [

    CadastrarUsuarioComponent,
    AtualizarUsuarioComponent,
    DeletarUsuarioComponent,

    AtualizarCategoriaProvaComponent,
    CadastrarCategoriaProvaComponent,
    DeletarCategoriaProvaComponent,

    AtualizarCategoriaQuestaoComponent,
    CadastrarCategoriaQuestaoComponent,
    DeletarCategoriaQuestaoComponent,

    EntrarComponent,
    HomeComponent,

    AtualizarProvaComponent,
    CadastrarProvaComponent,
    DeletarProvaComponent,
    GaleriaProvasComponent,
    MuralProvasComponent,
    MuralSprintsComponent,

    RemoverQuestaoProvaComponent,
    MuralQuestoesComponent,
    DeletarQuestaoComponent,
    AtualizarQuestaoComponent,
    CadastrarQuestaoComponent,
    AtualizarQuestaoComAlternativaComponent,
    SelecionarQuestoesComponent,
    CadastrarQuestaoComProvaComponent,
    CadastrarQuestaoComponent,

    CadastrarAlternativaComponent,
    AtualizarAlternativaComponent,
    DeletarAlternativaComponent,
    RemoverAlternativaDaQuestaoComponent,

    BoasVindasComponent,

    QuizzComponent,

    ResultadosComponent,

    NavComponent,
    NavegacaoBarComponent,

    TesteComponent,




    
    

    

  ],
  imports: [
    CommonModule,
    // BrowserModule,
    FormsModule,
    // HttpClientModule,
    // BrowserAnimationsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true,
      preventDuplicates: true
    }
     
    ),
    // RouterModule,
    
    UsuarioRoutingModule,

    SharedModule,
  ],
  exports: [
    CadastrarQuestaoComProvaComponent,
  ]
})
export class UsuarioModule { }
