import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alternativa } from 'src/app/componentes/model/Alternativa';
import { Questao } from 'src/app/componentes/model/Questao';
import { AlertasService } from 'src/app/service/alertas.service';
import { AlternativaService } from 'src/app/service/alternativa.service';
import { AuthService } from 'src/app/service/auth.service';
import { QuestaoService } from 'src/app/service/questao.service';

@Component({
  selector: 'app-atualizar-alternativa',
  templateUrl: './atualizar-alternativa.component.html',
  styleUrls: ['./atualizar-alternativa.component.scss']
})
export class AtualizarAlternativaComponent implements OnInit {

  
  alternativa: Alternativa = new Alternativa();
  questao: Questao = new Questao();
  idAlternativa: number = 0;


  constructor(
    private alertas: AlertasService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alternativaService: AlternativaService,
    private questaoService: QuestaoService
  ) { }

  ngOnInit() {
    AuthService.verificaLogado(this.alertas, this.router);
    this.idAlternativa = this.activatedRoute.snapshot.params['id'];

    this.getAlternativaById();
  }

  a =   {
    "id": 0,
    "texto": "uma",
    "foto": "string",
    "questao": {"id": 2}
  }

  atualizarAlternativa(){
    this.questao.id = this.idAlternativa;
    this.alternativa.questao = this.questao;
    // alert(this.questao.id);
    this.alternativaService.putAlternativa(this.alternativa).subscribe((alternativaResp: Alternativa) => {
      this.alternativa = alternativaResp;
      this.alertas.showAlertSuccess('Alternativa atualizada com sucesso!');
      this.alternativa = new Alternativa();
      this.voltarPagina();
    })
  }

getAlternativaById(){
    this.alternativaService.getAlternativaById(this.idAlternativa).subscribe((alternativaResp: Alternativa) => {
      this.alternativa = alternativaResp;
    })
  }

  // getQuestaoById(){
  //   this.questaoService.getByIdQuestao(this.idQuestao).subscribe((questaoResp: Questao) => {
  //     this.questao = questaoResp;
  //   })
  // }

  // atualizarQuestao(){
  //   this.questaoService.putQuestao(this.questao).subscribe((questaoResp: Questao) => {
  //     this.questao = questaoResp;
  //   })
  // }

  voltarPagina(){
    window.history.back();
  }

}
