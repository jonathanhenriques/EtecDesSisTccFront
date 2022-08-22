import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prova } from 'src/app/model/Prova';
import { Usuario } from 'src/app/model/Usuario';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { ProvaServiceService } from 'src/app/service/prova-service.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-mural-provas',
  templateUrl: './mural-provas.component.html',
  styleUrls: ['./mural-provas.component.scss']
})
export class MuralProvasComponent implements OnInit {


  usuario: Usuario = new Usuario();
  prova: Prova = new Prova();

  idUsuario: number = environment.id;

  listaProvas: Prova[] = [];

  constructor(
    private router: Router,
    private alertas: AlertasService,
    private provaService: ProvaServiceService,
    private authService: AuthService
  ) { }

  ngOnInit(){

    AuthService.verificaLogado(this.alertas, this.router);
    this.usuario.id = this.idUsuario;
    this.findByIdUsuario();
    this.listaProvas = this.usuario.provas;
    
    
  }

  findByIdUsuario(){
    this.authService.getByIdUsuario(this.idUsuario).subscribe((usuarioResp: Usuario) => {
      this.usuario = usuarioResp;
      this.listaProvas = usuarioResp.provas;
    })
  }

  // findProvasUsuario(){
  //   this.authService.getByIdUsuario(this.idUsuario).subscribe((usuarioResp: Usuario) => {
  //     this.listaProvas = usuarioResp.provas;
  //     this.listaProvas.forEach(p => {
  //       alert(p.nome);
  //     });
  //   })
  // }



}
