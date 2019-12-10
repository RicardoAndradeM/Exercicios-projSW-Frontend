function pessoa(nome) {
	let _nome = nome;
	return {
		fale: function () {return "oi meu nome é" + _nome},
		set_nome: function (nome) {_nome = nome}
	}
}

let p = pessoa("Ricardo");
console.log(p.fale());
p.set_nome("outra pessoa");
console.log(p.fale());
pessoa._nome = "deu errado";
console.log(p.fale());
