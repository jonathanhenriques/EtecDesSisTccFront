import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alternativa } from 'src/app/model/Alternativa';
import { CategoriaProva } from 'src/app/model/CategoriaProva';
import { CategoriaQuestao } from 'src/app/model/CategoriaQuestao';
import { Prova } from 'src/app/model/Prova';
import { Questao } from 'src/app/model/Questao';
import { Usuario } from 'src/app/model/Usuario';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { CategoriaProvaService } from 'src/app/service/categoria-prova.service';
import { CategoriaQuestaoService } from 'src/app/service/categoria-questao.service';
import { ProvaServiceService } from 'src/app/service/prova-service.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-cadastrar-questao',
  templateUrl: './cadastrar-questao.component.html',
  styleUrls: ['./cadastrar-questao.component.scss']
})
export class CadastrarQuestaoComponent implements OnInit {

  usuario: Usuario = new Usuario();
  prova: Prova = new Prova();
  questao: Questao = new Questao();
  categoriaProva: CategoriaProva = new CategoriaProva();

  idProva: number = 0;
  idUsuario: number = environment.id;
  idCategoriaProva: number = 0;
  idCategoriaQuestao: number = 0;

  listaCategoriaProva: CategoriaProva[] = [];
  listaCategoriaQuestao: CategoriaQuestao[] = [];

  qtdItens: number = 3;
  listaAlternativas: Alternativa[] = [];

  constructor(
    private router: Router,
    private alertas: AlertasService,
    private provaService: ProvaServiceService,
    private authService: AuthService,
    private categoriaProvaService: CategoriaProvaService,
    private categoriaQuestao: CategoriaQuestaoService,
    private lertas: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0);
   

    AuthService.verificaLogado(this.alertas, this.router);

    this.findAllCategoriaProva();
    this.findByIdUsuario();
    this.findByICategoriaProva();
    this.qtdAlternativas(3);
    
  }

  qtdAlternativas(qtd: number){
    for(let i = 0; i < qtd; i++){
      this.listaAlternativas.push(new Alternativa());
    }
  }

  pegaCategoriaProvaSelecionada(event: any) {
    this.idCategoriaProva = event.target.value;
  }

  pegaCategoriaQuestaoSelecionada(event: any){
    this.idCategoriaQuestao = event.target.value;
  }

  findAllCategoriaQuestao(){
    this.categoriaQuestao.getAllCategoriaQuestao().subscribe((categoriaQuestaoResp: CategoriaQuestao[]) => {
      this.listaCategoriaQuestao = categoriaQuestaoResp;
    })
  }

  findAllCategoriaProva(){
    this.categoriaProvaService.getAllCategoriaProva().subscribe((categoriaProvaResp: CategoriaProva[]) => {
      this.listaCategoriaProva = categoriaProvaResp;
    })
  }

  findByIdUsuario(){
    this.authService.getByIdUsuario(this.idUsuario).subscribe((usuarioResp: Usuario) => {
      this.usuario = usuarioResp;
    });
  }

  findByICategoriaProva(){
    this.categoriaProvaService.getByIdCategoriaProva(this.idCategoriaProva).subscribe((categoriaProvaResp: CategoriaProva) => {
      this.categoriaProva = categoriaProvaResp;
    });
  }

  postProva(){
    this.prova.id = this.idProva;
    this.prova.categoria = this.categoriaProva;
  }

}
