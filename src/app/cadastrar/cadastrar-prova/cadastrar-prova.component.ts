import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Alternativa } from '../../model/Alternativa';
import { CategoriaProva } from '../../model/CategoriaProva';
import { CategoriaQuestao } from '../../model/CategoriaQuestao';
import { Prova } from '../../model/Prova';
import { Questao } from '../../model/Questao';
import { Usuario } from '../../model/Usuario';
import { AlertasService } from '../../service/alertas.service';
import { AuthService } from '../../service/auth.service';
import { CategoriaProvaService } from '../../service/categoria-prova.service';
import { CategoriaQuestaoService } from '../../service/categoria-questao.service';
import { ProvaServiceService } from '../../service/prova-service.service';

@Component({
  selector: 'app-cadastrar-prova',
  templateUrl: './cadastrar-prova.component.html',
  styleUrls: ['./cadastrar-prova.component.scss']
})
export class CadastrarProvaComponent implements OnInit {


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
    private provaService: ProvaServiceService,
    private authService: AuthService,
    private categoriaProvaService: CategoriaProvaService,
    private categoriaQuestao: CategoriaQuestaoService,
    private lertas: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0);
    // if(environment.token == '') {
    //   this.alertas.showAlertDanger('Sua sessão expirou. Faça login novamente!');
    //   this.router.navigate(['/entrar']);
    // }

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
