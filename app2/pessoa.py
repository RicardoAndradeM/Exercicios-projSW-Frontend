class Pessoa:
    def __init__(self,nome):
        self.nome = nome

    def fale(self):
        return "oi meu nome é %s" % self.nome

p = Pessoa("Ricardo")
print(p.fale())
