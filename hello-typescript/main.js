var minhaVar = 'minha variavel';
function minhaFunc(x, y) {
    return x + y;
}
//ES 6 ou ES 2015
//http://es6-features.org
var num = 2;
var PI = 3.14;
//Arrow functions
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; }); // ES 2015
//http://babeljs.io/
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
//tipando variaveis
var n1 = 'sdfdf';
//n1 = 4; // error
var n2 = 'sdfdf';
n2 = 4;
