var minhaVar = 'minha variavel';

function minhaFunc(x, y) {

	return x + y;

}

//ES 6 ou ES 2015
//http://es6-features.org
let num = 2;
const PI = 3.14;

//Arrow functions
var numeros = [1, 2, 3];
numeros.map(function(valor) {
	return valor * 2;
});
numeros.map(valor => valor * 2); // ES 2015

//http://babeljs.io/

class Matematica {

	soma(x, y) {
		return x + y;
	}

}


//tipando variaveis
var n1: string = 'sdfdf';
//n1 = 4; // error

var n2: any = 'sdfdf';
n2 = 4;


