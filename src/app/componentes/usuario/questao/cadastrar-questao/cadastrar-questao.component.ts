import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alternativa } from 'src/app/model/Alternativa';
import { CategoriaQuestao } from 'src/app/model/CategoriaQuestao';
import { Questao } from 'src/app/model/Questao';
import { QuestaoImpl } from 'src/app/model/QuestaoImpl';
import { Usuario } from 'src/app/model/Usuario';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { CategoriaProvaService } from 'src/app/service/categoria-prova.service';
import { CategoriaQuestaoService } from 'src/app/service/categoria-questao.service';
import { QuestaoService } from 'src/app/service/questao.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-cadastrar-questao',
  templateUrl: './cadastrar-questao.component.html',
  styleUrls: ['./cadastrar-questao.component.scss']
})
export class CadastrarQuestaoComponent implements OnInit {

  usuario: Usuario = new Usuario();
  questao: Questao = new QuestaoImpl();
  categoriaQuestao: CategoriaQuestao = new CategoriaQuestao();

  idProva: number = 0;
  idUsuario: number = environment.id;
  idCategoriaQuestao: number = 0;

  listaCategoriaQuestao: CategoriaQuestao[] = [];

  //nao utilizados
  qtdItens: number = 3;
  listaAlternativas: Alternativa[] = [];
  listaVazia: Alternativa[] = [];

  constructor(
    private router: Router,
    private alertas: AlertasService,
    private questaoService: QuestaoService,
    private authService: AuthService,
    private categoriaProvaService: CategoriaProvaService,
    private categoriaQuestaoService: CategoriaQuestaoService,
    private lertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0, 0);


    AuthService.verificaLogado(this.alertas, this.router);

    this.findAllCategoriaQuestao();
    // this.findByIdUsuario();


  }

  // qtdAlternativas(qtd: number) {
  //   for (let i = 0; i < qtd; i++) {
  //     this.listaAlternativas.push(new Alternativa());
  //   }
  // }



  pegaCategoriaQuestaoSelecionada(event: any) {
    this.idCategoriaQuestao = event.target.value;
  }

  findAllCategoriaQuestao() {
    this.categoriaQuestaoService.getAllCategoriaQuestao().subscribe((categoriaQuestaoResp: CategoriaQuestao[]) => {
      this.listaCategoriaQuestao = categoriaQuestaoResp;
    })
  }

  findCategoriaQuestaoById() {
    this.categoriaQuestaoService.getByIdCategoriaQuestao(this.idCategoriaQuestao).subscribe((resp: CategoriaQuestao) => {
      this.categoriaQuestao = resp;
      // this.questao.categoria = resp;
    })
  }


  findByIdUsuario() {
    this.authService.getByIdUsuario(this.idUsuario).subscribe((usuarioResp: Usuario) => {
      this.usuario = usuarioResp;
      // alert(this.usuario.id);
    });
  }



  // qq: any = {

  //   "instituicao": "string",
  //   "ano": "2022-08-23",
  //   "imagem": "string",
  //   "texto": "string",
  //   "categoria": {"id": 1},
  //   "criador": {"id": 1}
  // }


  cadastrarQuestao() {

    
    this.categoriaQuestao.id = this.idCategoriaQuestao;
    this.questao.categoria = this.categoriaQuestao;


    this.usuario.id = this.idUsuario;
    this.questao.criador = this.usuario


    this.questaoService.postQuestao(this.questao).subscribe((questaoResp: Questao) => {
      this.questao = questaoResp;
      this.alertas.showAlertSuccess('Questão criada com sucesso!');
      this.questao = new QuestaoImpl();

    })
  }

}


