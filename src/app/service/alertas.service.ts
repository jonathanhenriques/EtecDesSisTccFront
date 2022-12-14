import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertaComponent } from '../componentes/alerta/alerta.component';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(
    private bsModalService: BsModalService
  ) { }

  private showAlert(message: string, type: string) {
    const bsModalRef: BsModalRef = this.bsModalService.show(AlertaComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;
  }

  showAlertDanger(message: string) {
    this.showAlert(message, 'alert-danger');
  }

  showAlertSuccess(message: string) {
    this.showAlert(message, 'alert-success');
  }

  showAlertInfo(message: string) {
    this.showAlert(message, 'alert-info');
  }

  // showAlertPersonalizado(message: string, type: string) {
  //   this.showAlert(message, 'alert-' + type);
  // }
}
