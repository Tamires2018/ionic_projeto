import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonBackButton,
  IonTitle,
  IonButtons
}  from '@ionic/angular/standalone'

import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonBackButton,
    IonButtons,
    IonTitle,
    CommonModule
  ]
})
export class DetalhesPage  implements OnInit {
  itemId: string | null = ''

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.itemId = this.route.snapshot.paramMap.get('id')
    console.log('Id recebido pela rota: ', this.itemId)
  }

}
