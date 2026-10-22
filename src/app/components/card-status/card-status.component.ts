import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonIcon,
  IonBadge
} from '@ionic/angular/standalone'

@Component({
  selector: 'app-card-status',
  templateUrl: './card-status.component.html',
  styleUrls: ['./card-status.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonIcon,
    IonBadge
  ]
})
export class CardStatusComponent  implements OnInit {
  @Input() titulo:string = 'eduardo legal';
  @Input() subtitulo:string = '';
  @Input() status:string = 'Normal';
  @Input() corStatus:string = 'success';

  constructor() { }

  ngOnInit() {}

}