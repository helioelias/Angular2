import { Injectable } from '@angular/core';

//o uso do decorator @Injectable permite que seja feita a 
//injeção de dependencia do serviço

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }
  
  getCursos(){
  
	return ['Java', 'Ext JS', 'Angular'];
  
  }
}
