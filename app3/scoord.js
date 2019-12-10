module.exports ={
	disciplina:function (id, nome, creditos, preRequisito) {
		_nome = nome;
		_id = id
		return {
			creditos:creditos,
			pre_requisitos:preRequisito,
			id: function () {
				return _id
			},
			get_nome: function () {
				return _nome
			},
			set_nome: function (nome) {
				_nome = nome
			}
		}
	}
}
