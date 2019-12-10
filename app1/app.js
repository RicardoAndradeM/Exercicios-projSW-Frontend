function main() {
    fetchDisciplinas();
    let botao = document.querySelector('button');
    botao.addEventListener('click', subimitDisciplina);
}
function fetchDisciplinas() {
    let lista = document.querySelector('#disciplinas');
    lista.innerHTML = "";
    let URL = 'https://lab01-projsw-ufcg.herokuapp.com/api/disciplinas';
    fetch(URL)
    .then(myResposnse => myResposnse.json())
    .then(disciplinas => {
        window.disciplinas = disciplinas;
        disciplinas.forEach(element => {
            let container = document.createElement('div')
            let disciplina = document.createElement('p');
            let botao = document.createElement('button');
            botao.value = element.id;
            botao.innerText = "Apagar"
            botao.addEventListener('click',_ => apagaDisciplina(botao.value))
            disciplina.innerText = `nome: ${element.nome} nota: ${element.nota}`;
            container.appendChild(disciplina);
            container.appendChild(botao);
            lista.appendChild(container);
        });
    });
}

function subimitDisciplina(){
    let URL = 'https://lab01-projsw-ufcg.herokuapp.com/api/disciplinas';
    let nome = document.querySelector('#nome');
    let nota = document.querySelector('#nota');
    let myBody = `{ "nome":"${nome.value}", "nota":"${nota.value}"}`
    console.log(myBody);
    let myHeader = new Headers({"Content-Type":"application/json"});
    let myInit = {
        method:'post',
        body: myBody,
        headers: myHeader
    }
    fetch(URL,myInit)
    .then(myResposnse => myResposnse.json())
    .then(resultado => {
        console.log(resultado);
        fetchDisciplinas();
    });
}

function apagaDisciplina(id) {
    let URL = 'https://lab01-projsw-ufcg.herokuapp.com/api/disciplinas/';
    let myInit = {method:'DELETE'};
    fetch(URL + id,myInit)
    .then(myResposnse => myResposnse.json())
    .then(mensage => {
        console.log(mensage);
        fetchDisciplinas();
    });
}

main();