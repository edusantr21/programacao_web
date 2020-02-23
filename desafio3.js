Desafio 03
Turma: 66641
Aluno: Eduardo Santos
Matéria: Programação Web

1º)R=

var x = {}
_________________________________________________
2º)R=

var pessoa = { //objeto
            nome: "Eduardo",
            sobrenome: "Rodrigues",
            sexo: "Masculino",
            idade: 20,
            altura: 1.79,
            peso: 65,
            andando: false,
            caminhouQuantosMetros: 0,
_________________________________________________
3º)R=

var pessoa = { //objeto
            nome: "Eduardo",
            sobrenome: "Rodrigues",
            sexo: "Masculino",
            idade: 20,
            altura: 1.79,
            peso: 65,
            andando: false,
            caminhouQuantosMetros: 0,
fazerAniversário : function (){ //metodo
    return(this.idade ++)
    }
}
_________________________________________________
4º)R=

andar : function (distancia) { //metodo II
        this.caminhouQuantosMetros += distancia;
        this.andando = true
    }
_________________________________________________
5º)R=

parar : function () { //metodo III
        this.andando=false
    }
_________________________________________________
6º)R=

nomeCompleto : function () { //metodo IV
        return('Olá! Meu nome é: '+ this.nome+' '+ this.sobrenome)
    }
_________________________________________________
7º)R=

mostrarIdade : function () { //metodo V
        return('Olá, eu tenho '+ this.idade+' '+'anos')
    }
_________________________________________________
8º)R=

mostrarPeso : function () { //metodo VI
        return('Eu peso '+ this.peso+' '+'Kg')
    }
_________________________________________________
9º)R=

mostrarAltura : function () { //metodo VII
        return('Minha altura é '+ this.altura+' '+'m')
    }
_________________________________________________
10º)R=

pessoa.nomeCompleto() // Olá, meu nome é eduardo rodrigues
pessoa.mostrarIdade() // olá, eu tenho 20 anos
pessoa.mostrarPeso() // eu peso 65 kg
pessoa.mostrarAltura() // minha altura é 1.79 m
fazerAniversário()
fazerAniversário()
fazerAniversário()
pessoa.mostrarIdade() // olá, eu tenho 23 anos
pessoa.andar(1)
pessoa.andar(2)
pessoa.andar(3)
pessoa.andando //true
pessoa.parar()
pessoa.andando // false
pessoa.caminhouQuantosMetros // 6
_________________________________________________
11ºR=

apresentacao : function (){
			var pron = 'o'
			var year =  'anos'
			var qtdMetros = 'metros'
				if (this.sexo == 'feminino'){
					pron = 'a'
				}
				if (this.idade = 1){
					year = 'anos'
				}
				if (this.caminhouQuantosMetros == 1){
					qtdMetros = 'metros'
				}
				return Olá, eu sou '+pron+' '+pessoa.nome+' '+pessoa.sobrenome+', tenho '+pessoa.idade+' '+year+', '+pessoa.altura+', meu peso é '+pessoa.peso+' e, hoje caminhei '+pessoa.caminhouQuantosMetros+' '+qtdMetros+'
}
