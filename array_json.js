/*************************************************************************************
 * Objetivo: manipular dados em ARRAY e JSON
 * Data: 05/03/2026
 * Autor: gabriel renato
 * Versão: 1.0
 ************************************************************************************/

/*
    [ ] -> representa um objeto do tipo ARRAY
    { } -> representa um objeto do tipo JSON

    ARRAY -> UM ESPAÇO NA MEMORIA PARA ARMAZENAR dados sem a necessidade de criar outros objetos
        Ex:
            let nome = 'jose'
            let nome2 = 'maria'
            let nome3 = 'joao'



               indices      0       1       3    (posições)
            let nomes = ['jose', 'maria', 'joao']  --> fica assim no array


    
    JSON -> é um espaço na memoria para armazenar dados com chave e valor
        Ex:
            let nome      =       'jose'
            let telefone  =       '123456789'
            let email     =       'jose@gmail.com



                           atributo         atributo                   atributo
                            chave   valor    chave           valor      chave        valor
            let cliente = {"nome": "jose", "telefone": "123456789", "email": "jose@gmail.com"}



*/



//criando objetos do tipo ARRAY
const listadealunos   = [ 'jose', 'maria', 'luiz', 'antonio', 'carlos' ] // da pra colocar numeros ou booleanos dentro tbm
const listadeclientes = []
const listadefornecedores = []

const exibirdados = function () {
    //exibe o objeto ARRAY com o seu conteudo
    console.log(listadealunos)

    //exibe o tipo de dados de um indice
    console.log(typeof(listadealunos[2]))

    //exibe o objeto ARRAY com o formato de tabela, mostrando indice e o conteudo
    console.table(listadealunos)

    //exibe apenas o indece selecionado dentro dos []
    console.log(listadealunos[3])


    console.log(`o nome do aluno é: ${listadealunos[0]}`)
    console.log(`o nome do aluno é: ${listadealunos[1]}`)
    console.log(`o nome do aluno é: ${listadealunos[2]}`)
    console.log(`o nome do aluno é: ${listadealunos[3]}`)
    console.log(`o nome do aluno é: ${listadealunos[4]}`)

    //Usando o while
    console.log('\n**********EXEMPLO COM O WHILE********** ')
    let cont =0
    while (cont<5) {
        console.log(`o nome do aluno é: ${listadealunos[cont]}`)
        cont+=1
    }
    
    //usando o for
    console.log('\n**********EXEMPLO COM O FOR********** ')
    for(let contador =1; contador< 5; contador++)
        console.log(`o nome do aluno é: ${listadealunos[contador]}`)


    //usando o for each  -> faz apenas repetição no ARRAY, apenas nele
    console.log('\n**********EXEMPLO COM O FOR EACH********** ')
    listadealunos.forEach(function(aluno){
        console.log(`o nome do aluno é: ${aluno}`)
    })

    //usando o for of  -> faz apenas repetição no ARRAY, apenas nele
    console.log('\n**********EXEMPLO COM O FOR OF********** ')
    for(aluno of listadealunos){
        console.log(`o nome do aluno é: ${aluno}`)
    }

     //usando o for in  -> faz apenas repetição no ARRAY, apenas nele
     console.log('\n**********EXEMPLO COM O FOR IN********** ')
     for (item in listadealunos) {
        console.log(`o nome do aluno é: ${item}`)
        
     }

     //retorna a quantidade de itens em um array
     console.log(listadealunos.length)

}

const manipulardados = function(){
    //adicionar elementos de forma manual pelo indice
    listadeclientes[0] = 'jose da silva'
    listadeclientes[1] = 'maria da silva'
    listadeclientes[2] = 'luiz da silva'
    listadeclientes[3] = 'ana da silva'
    listadeclientes[4] = 'beatriz da silva'
    listadeclientes[5] = 'anta da silva'
    listadeclientes[6] = 'thiago da silva'

    console.log(listadeclientes)

    //permite add novos elementos no array, sempre no final
    listadefornecedores.push('antonio')
    listadefornecedores.push('caio')
    listadefornecedores.push('luiz')
    listadefornecedores.push('hugo', 'maria', 'andre')

    console.log(listadefornecedores)
}

exibirdados()