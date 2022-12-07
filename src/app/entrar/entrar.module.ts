import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntrarComponent } from './entrar.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [EntrarComponent],
  imports: [
    CommonModule,
    RouterModule ,
    ReactiveFormsModule,
    SharedModule

  ]
  // ,exports:[EntrarComponent]
})
export class EntrarModule { }
