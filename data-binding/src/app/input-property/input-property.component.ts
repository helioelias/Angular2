import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  inputs: ['nomeCurso:nome']
})
export class InputPropertyComponent implements OnInit {

  //@Input('nome') nomeCurso: string = ''; //criado o decorator para permitir a utilização da propriedade nome
  
  nomeCurso: string = ''; //utilizando a declaração do input no @Component

  constructor() { }

  ngOnInit() {
  }

}
