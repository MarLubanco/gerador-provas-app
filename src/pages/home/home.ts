import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  people: any[] = [
    {
      "materia": "Java",
      "professor": 'Thomé'
    },
    {
      "materia": "Banco de Dados",
      "professor": 'Lubanco'
    },
    {
      "materia": "Engenharia de Software",
      "professor": "Tony Stark"
    },
    {
      "materia": "Teste Automatizado",
      "professor": 'Steve Rogers'
    },
    {
      "materia": "Desenvolvimento Web",
      "professor": 'Marcelo'
    }
  ];

  constructor(public navCtrl: NavController) {

  }

}
