
var nomeDoPersonagem = document.querySelector('#personagemm');
var corDosOlhos = document.querySelector('#olhos');
var anoDeNascimento = document.querySelector('#nascimento');
var corDoCabelo = document.querySelector('#cabelo');;
var generoo = document.querySelector ('#genero');
var corDaPele = document.querySelector ('#pele');
var valorMassa = document.querySelector ('#massa');
var alturaa = document.querySelector ('#altura');

var formulario = document.querySelector('form');


var charactersName = document.querySelector ('#charactersName');


function buscarPersonagem(personagem) {
    fetch(`https://swapi.dev/api/people/${personagem}/`) 
    .then(function(response) {
    return response.json();
 
})
    .then(function(Dados) {
    console.log(Dados);
        
        nomeDoPersonagem.innerHTML = "Personagem: " + Dados.name;
        corDosOlhos.innerHTML = "Cor dos olhos: " + Dados.eye_color;
        anoDeNascimento.innerHTML = "Ano de nascimento: " + Dados.birth_year;
        corDoCabelo.innerHTML = "Cor do cabelo: " + Dados.hair_color;
        generoo.innerHTML = "Gênero: " + Dados.gender;
        corDaPele.innerHTML = "Cor da pele: " + Dados.skin_color;
        valorMassa.innerHTML = "Massa: " + Dados.mass;
        alturaa.innerHTML = "Altura: " + Dados.height;


    });
}

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    buscarPersonagem(charactersName.value);
});



   