let proto_pessoa = {
    fale: function () {
        return "oi, eu sou " + this.nome;
    }
};
function create_pessoa(nome) {
    let pessoa = Object.create(proto_pessoa);
    pessoa.nome = nome;
    return pessoa;
}
let p1 = create_pessoa("teste");
let p2 = create_pessoa("teste2");
let p3 = create_pessoa("teste3");
console.log(p1.fale());
console.log(p3.fale());
console.log(p3.fale());
