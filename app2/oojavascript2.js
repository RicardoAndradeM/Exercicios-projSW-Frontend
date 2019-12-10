function criaPessoa(nome) {
	return {
		nome:nome,
		fale: function() {
			return "Olá meu nome é " + this.nome;
		}
	};
}

let pessoa = criaPessoa("Ricardo");
console.log(pessoa.fale());
