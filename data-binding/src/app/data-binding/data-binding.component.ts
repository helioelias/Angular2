import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css']
  styles: [
	`
		.highlight{
		background-color: yellow;
		font-weight: bold;	
		}
	`
  ]  
})
export class DataBindingComponent implements OnInit {

	url: string = 'http://loaiane.com';
	cursoAngular: boolean = true;
	urlImagem = 'http://lorempixel.com/400/200/nature/';

	valorAtual: string = '';
	valorSalvo = '';
	
	isMouseOver: boolean = false;
	
	nome: string = 'abc';
	
	pessoa: any = {
		nome: 'def',
		idade: 20		
	}
	
	getValor(){
		return 1;
	}
	
	getCurtirCurso(){
		return true;
	}
	
	botaoClicado(){
		alert("Botão Clicado!");
	}
	
	onKeyUp(evento: KeyboardEvent){
		console.log(); //fazendo um cast para evitar erros <HTMLInputElement>
		
		this.valorAtual = (<HTMLInputElement>evento.target).value;
		
	}
	
	salvarValor(valor){
		this.valorSalvo = valor;	
	}
	
	onMouseOverOut(){
		this.isMouseOver  = !this.isMouseOver;
	}
	
	constructor() { }

	ngOnInit() {
	}

}
