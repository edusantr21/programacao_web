var isTruthy = (value) =>{
    if(value){
            return true
    }else{
            return false
    }
}
isTruthy(0)
isTruthy(On)
isTruthy(null)
isTruthy(undefined)
isTruthy(false)
isTruthy(NaN)
isTruthy('')
isTruthy(document.all)

isTruthy(1)
isTruthy([])
isTruthy({})
isTruthy(true)
isTruthy('1')
isTruthy(1+'1')
isTruthy(8)
isTruthy(9)
isTruthy(10)
isTruthy('x')

var carro = {
        marca: 'marca',
        modelo: 'modelo',
        placa: 'ano',
        ano: 0101,
        cor: 'cor'
        quantasPortas: 2,
        assentos: 5,
        quantidaDePessoas: 0
}

carro.mudarCor = function mudarCor(cor){
        this.cor = cor
}

carro.obterCor = function obterCor(){
        return this.cor
}

carro.obterModelo = function obterModelo(){
        return this.modelo
}

carro.obterMarca = function obterMarca(){
        return this.marca
}

carro.obterMarcaModelo = function obterMarcaModelo(){
        return 'Esse carro é um '+this.obterMarca()+' '+this.obterModelo()
}

carro.addPessoas = function addPessoas(value){


        var pessoas = 'pessoas'

        if(5-this.quantidaDePessoas== 1){
                  pessoas = 'pessoa'
        }

        if(this.quantidadeDePessoas+value >=5){
                return 'O carro já está lotado'
        }

        if(this.quantidadeDePessoas+value >5){
                var x = 5-this.quantidadeDePessoas
                return 'Só cabem mais '+x+' '+pessoas+' no carro'
        }

        this.quantidadeDePessoas+=value

        return 'Já temos '+this.quantidadeDePessoas+' pessoas no carro'
{


carro.obterCor() //'cor'
carro.mudarCor('azul') //azul
carro.obterMarca() //'marca'
carro.obterModelo() //'modelo'
carro.addPessoas(2) //'Já temos 2 pessoas no carro'
carro.addPessoas(4) //'Só cabem mais 3 pessoas no carro'
carro.addPessoas(3) //'Já temos 5 pessoas no carro'
carro.addPessoas(10) //'O carro já está lotado'
//5
