import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonInput,
  IonButton,
  IonList,
  IonBadge,
  IonLabel
} from '@ionic/angular/standalone';
import { CardStatusComponent } from 'src/app/component/card-status/card-status.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardStatusComponent,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonItem,
    IonInput,
    IonButton,
    IonList,
    IonBadge,
    IonLabel
  ]
})
export class LoginPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() { }

  irParaCadastro(){
    this.router.navigate(['/cadastro'])
  }

  EntrarComId(idUsuario: number){
    this.router.navigate(['/detalhes', idUsuario])
  }
}