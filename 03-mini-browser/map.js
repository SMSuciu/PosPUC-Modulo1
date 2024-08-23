//Tdd - Test Driven DEvelopent
var novoMapa = new Map();

class HistoryMap{
    
}

//Mesmo que inclua varios registros iguais, so armazena 1. Evita spam. 
novoMapa.set('11/01/83 - 11:11 - URL', {title:'Titulo do site',});
novoMapa.set('11/01/83 - 11:11 - URL', {title:'Titulo do site',});
novoMapa.set('11/01/83 - 11:11 - URL', {title:'Titulo do site',});
novoMapa.set('11/01/83 - 11:15 - URL', {title:'Titulo do site',});


var resultado = novoMapa;
console.log(resultado);