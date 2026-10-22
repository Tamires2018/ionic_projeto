import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';

import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonToolbar
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';

import {
  arrowForwardOutline,
  chevronForwardOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonButton,
    IonIcon
  ]
})
export class LandingPageComponent {

  constructor() {
    addIcons({
      arrowForwardOutline,
      chevronForwardOutline
    });
  }

  irParaLogin(): void {
    window.location.href = '/login';
  }

  irParaCadastro(): void {
    window.location.href = '/cadastro';
  }

  irParaPersonagens(): void {
    document
      .getElementById('personagens')
      ?.scrollIntoView({
        behavior: 'smooth'
      });
  }

  mostrarMensagem(): void {
    alert(
      'A Vontade do Fogo nunca desaparece'
    );
  }

}