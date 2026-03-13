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
const listadealunos   = [ 'jose', 'maria', 'luiz', 'antonio', 'carlos', ] // da pra colocar numeros ou booleanos dentro tbm
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

    console.table(listadeclientes)

    //permite add novos elementos no array, sempre no final
    listadefornecedores.push('antonio')
    listadefornecedores.push('caio')
    listadefornecedores.push('luiz')
    listadefornecedores.push('hugo', 'maria', 'andre')

    console.table(listadefornecedores)

//permite add novos elementos no array, sempre no inicio
//apos add o elemento, ele reorganiza todos os outros itens
    listadefornecedores.unshift('luciano')
    console.table(listadefornecedores)


    //permite add novo elemento em uma determinada posição no array, e permite apagar um conteudo determinado no array
    //splice(indice, quantidade de elementos, 'novo conteudo') para adicionar
    //splice(indice, quantidade de elementos q deseja remover)
    listadefornecedores.splice(3,0,'bernardo')
    console.table(listadefornecedores)

//permite remover o ultimo elento do array
    listadefornecedores.pop()
    console.table(listadefornecedores)


    //permite remover o primeiro elemento do array
    //apos ele remover, ira reorganizar todos os elementos
    listadefornecedores.shift()
    console.table(listadefornecedores)


}

function remove(nome) {
    
   // let contador = 0
   // let qtd = listadealunos.length

   // while(contador< qtd){
  //      console.table(listadealunos)
  //      console.log('-------------------------------------')

   // if (nome == listadealunos[contador]) {
  //      listadealunos.splice(contador,1)
  //      console.table(listadealunos)
  //  }
  //  contador++
 //   }




 //--------------------------------------------------
    //for(contador in listadealunos){
   //     if (nome == listadealunos[contador]){
   //         listadealunos.splice(contador,1)

   //         console.table(listadealunos)
   //     }
  //  }
    



  //indexOF() -> retorna o indice referente ao conteudo q esta sendo pesquisado
  listadealunos.splice(listadealunos.indexOf(nome), 1)
  console.table(listadealunos)



}


const verificaritem = function (nome) {
    //verifica se o conteudo existe dentro do array e retorna true ou false
    return listadealunos.includes(nome)
}



const manipularDadosJSON = function () {
    //criando um objeto JSON
    //estrutura do JSON é chave (atributo) : valor(conteúdo)
    let aluno = {"id":1, "nome":"jose da silva", "ra":1122879714, "email":"jose@gmail.com", "ativado": false}

    console.table(aluno)

    //exibe o conteudo de um atributo do JSON
    console.log(aluno.nome)
    console.log(aluno.email)

    //adiciona um novo atributo ou substitui um atributo no JSON ja existente
    aluno.telefone = '11 97116-8999'
    aluno.data_nascimento ='01/12/2006'
    console.log (aluno)

    //remove um atributo do JSON
    delete aluno.ativado
    console.log (aluno)

    aluno.ra = 123456789
    console.log (aluno)

    aluno.nota = null
    console.log (aluno)
}

const cadastrodeprodutos = function () {
    let cores = [
                
                    {"id":1, "cor":"branco",  "hexa":"#ffffff"},
                    {"id":2, "cor":"preto",   "hexa":"#000000"},
                    {"id":3, "cor":"azul",    "hexa":"#0000ff"},
                    {"id":4, "cor":"amarelo", "hexa":"#ffff00"},
                    {"id":5, "cor":"rosa",    "hexa":"#ffb5c0"}
                 ]       

                 console.log(cores)
    let marcas = [
                    {"id":1, "marca":"nvidia",   "telefone":"1 800-797-6530" ,   "email":"nvidia@gmail.com"},
                    {"id":2, "marca":"intel",    "telefone":"1 800-545-6780" ,   "email":"intel@gmail.com"},
                    {"id":3, "marca":"amd",      "telefone":"55 0800-444-1186" , "email":"corporate.pressinquiry@amd.com"},
                    {"id":4, "marca":"mancer",   "telefone":"47 3305-5150" ,     "email":"rma@mancer.com.br"},
                    {"id":5, "marca":"positivo", "telefone":"41 3316-7417" ,     "email":"positivo.alfa@positivo.com.br"},
                    {"id":6, "marca":"lenovo",   "telefone":"0800-701-4815" ,    "email":" premier_br@lenovo.com."},
                 ]            



    let produtos = [
                    {  "id":1,
                       "nome":"monitor",
                       "descricao":"monitor de 27 polegadas",
                       "valor": 1500,
                       "quantidade": 20,
                       "cor": [
                            cores[0].cor,
                            cores[1].cor
                       ],
                       "marca": [
                                marcas[1].marca
                       ]
                    },
                    {  "id":2,
                        "nome":"teclado",
                        "descricao":"teclado magnetico rgb",
                        "valor": 400,
                        "quantidade": 500,
                        "cor": cores,
                        "marca": [
                                 marcas[3].marca,
                                 marcas[4].marca,
                                 marcas[5].marca
                        ]
                     },
                     {  "id":3,
                        "nome":"mouse",
                        "descricao":"mouse sem fio rgb",
                        "valor": 90,
                        "quantidade": 160,
                        "cor": [
                            cores[1].cor,
                            cores[3].cor,
                            cores[4].cor
                       ],
                        "marca": [
                                 marcas[5].marca,
                                 marcas[4].marca,
                                 marcas[3].marca,
                                 marcas[1].marca,
                        ]
                     },

                  ]


                  


                 // console.log(produtos)
                //  console.log('---------------------------------')
                //  console.table(produtos)
                //  console.log(produtos)
                //  console.log('---------------------------------')
                //  console.log(produtos[0].cor)
                //  console.log('---------------------------------')
                for(let contador =0; contador< 3; contador++)
                    console.log(produtos[contador])

                  console.log('\n---------------------------------\n') 
                

                produtos.forEach(function (produto) {
                    console.log(`Produto: ${produto.nome}`)
                    console.log(`Quantidade: ${produto.quantidade}`)
                    console.log(`Valor: ${produto.valor}`)
                    console.log(`Cor: `)

                    produto.cor.forEach(function (corproduct){
                        console.log(`   ${corproduct}`)
                    })
                    console.log(`Marca`)
                    produto.marca.forEach(function (marcaproduto) {
                        console.log(`  ${marcaproduto}`)
                    })

                    console.log(`\n--------------------------------\n`)

                  })

                
                  
//----------------------------------------------------------------------
                  //exibindo todas as cores referentes ao produto monitor
                 // ------------------------------------------------------
                  

                 //cores.forEach(function(itemcor){
                    
                //})
                 
}


cadastrodeprodutos()
//manipularDadosJSON()
//remove('jose')
//module.exports ={
//remove,
//listadealunos
//}


