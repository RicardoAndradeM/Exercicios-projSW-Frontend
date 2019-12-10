function criaPessoa(nome) {
	let novaPessoa = new Object();
	novaPessoa.nome = nome;
	novaPessoa.fale = () => {
		return "Ola meu nome é " + novaPessoa.nome;
	};
	return novaPessoa;
}

let pessoa = criaPessoa("Ricardo");
console.log(pessoa.fale())
