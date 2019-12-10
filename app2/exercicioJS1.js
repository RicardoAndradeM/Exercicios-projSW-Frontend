function create_turma(disciplina, vagas){
	return {
		disiciplina:disciplina,
		numeroDeVagas:vagas,
		listaDeAlunos:[],
		matricule:function (aluno) {
			if (this.numeroDeVagas > 0) {
				this.numeroDeVagas--;
				this.listaDeAlunos.push(aluno);
				return true;
			} else {
				return false;
			}
		},
		alunos:function () {
			return this.listaDeAlunos
		},
		vagas: function () {
			return this.numeroDeVagas
		}
	}
}

let t = create_turma("recreio",2);
console.log("--turma inicialmente--");
console.log(t.alunos());
console.log(t.vagas());
console.log("--matriculando primeira pessoa--");
console.log(t.matricule("tome"));
console.log(t.alunos());
console.log(t.vagas());
console.log("--matriculando segunda pessoa--");
console.log(t.matricule("amanda"));
console.log(t.alunos());
console.log(t.vagas());
console.log("--matriculando pessoa sem ter vagas--");
console.log(t.matricule("sebastiao"));
console.log(t.alunos());
console.log(t.vagas());
