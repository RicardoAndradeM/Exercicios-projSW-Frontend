function  Pessoa(nome) {
	this.nome = nome;
	this.fale = () =>  "oi, eu sou " + this.nome;
}

let p = new Pessoa("Ricardo");
console.log(p.fale());
