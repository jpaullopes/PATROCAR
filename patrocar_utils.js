import { readFileSync,writeFile } from 'fs'
import { ulid } from "ulidx"
import { input,getPositiveInteger, myFilter, bubbleSort, meuCapitalize } from './utils.js'


export function menu(){//EXIBIÇÃO DO MENU
    return `-------------------- [ PETRO-CARS ] --------------------   
[ 1 ] - ADICIONAR MONTADORA
[ 2 ] - LISTAR MONTADORA(S)
[ 3 ] - ATUALIZAR MONTADORA
[ 4 ] - REMOVER MONTADORA
[ 5 ] - FILTRAR
[ 6 ] - SATATUS
[ 7 ] - SALVAR
[ 0 ] - SAIR
--------------------------------------------------------`
}

export function tipoOrdenacao(){
    return `--------------------------------------------------------
                [ TIPO DE ORDENAÇÃO ]
[ 1 ] - CRESCENTE(↑)
[ 2 ] - DESCRESCENTE(↓)
--------------------------------------------------------`              
}

export function atributos(){
    return `--------------------------------------------------------
                    [ ATRIBUTOS ]
|   NOME   |    PAÍS    |    ANO DE FUNDAÇÃO     |
--------------------------------------------------------`
}

export function salvarDados(dadosMontadora){
    let linhas = ``
    for(let i = 0;i < dadosMontadora.length;i++){
    linhas += `${dadosMontadora[i]["ID"]}#${dadosMontadora[i]["NOME"]}#${dadosMontadora[i]["PAÍS"]}#${dadosMontadora[i]["ANO DE FUNDAÇÃO"]}\n`
    }
    writeFile('montadoras.txt', linhas, (err) => {
        if (err) {
          throw err;
        }
      })
}

export function leituraArquivos(arquivo){
    const dados = readFileSync(arquivo,'utf-8')
    const linhas = dados.split("\n")
    const dadosMontadoras = []

    for(let i = 0;i < linhas.length;i++){
        if(linhas[i] === ''){
            continue
        }
        const listaDados = linhas[i].split("#")
        const montadora = {}

        montadora["ID"] = listaDados[0]
        montadora["NOME"] = listaDados[1]
        montadora["PAÍS"] = listaDados[2]
        montadora["ANO DE FUNDAÇÃO"] = parseInt(listaDados[3])

        dadosMontadoras.push(montadora)
    }

    return dadosMontadoras
}

export function exibicaoOrganizada(listaMontadoras) {
    let exibicao = `--------------------------------------------------------           
                [ LISTA DE MONTADORAS ]\n`
    for (let i = 0; i < listaMontadoras.length; i++) {
        exibicao += `--------------------------------------------------------
POSIÇÃO         | [ ${i + 1} ]           
NOME            | [ ${listaMontadoras[i].NOME} ]
ID              | [ ${listaMontadoras[i].ID} ]
PAÍS            | [ ${listaMontadoras[i].PAÍS} ]
ANO DE FUNDAÇÃO | [ ${listaMontadoras[i]["ANO DE FUNDAÇÃO"]} ]\n` 
    }
    return exibicao;
}


export function adicionarMontadora(listaMontadoras,numeroDeMontadoras){
    for(let i = 0;i < numeroDeMontadoras;i++){
        let montadora = {}
        montadora["ID"] = ulid()
        montadora["NOME"] = meuCapitalize(input('Nome da montadora: '))
        montadora["PAÍS"] = meuCapitalize(input('País de origem da montadora: '))
        montadora["ANO DE FUNDAÇÃO"] = getPositiveInteger('Ano de fundação da montadora: ')
        
        listaMontadoras.push(montadora)
    }
}

export function atualizarCadastros(listaMontadoras,posicao,numeroAtributos){
    for(let i = 0;i < numeroAtributos;i++){
        const atributo = input('Escolha o atributo que deseja alterar: ')
        if(atributo === "ANO DE FUNDAÇÃO"){
            listaMontadoras[posicao][atributo] = getPositiveInteger(`Altere o ${atributo}: `)
        }else{
            listaMontadoras[posicao][atributo] = meuCapitalize(input(`Altere o ${atributo}: `))
        }
    }
}



export function removerElemento(listaMontadoras,posicao){
    let listaMontadorasTemporaria = []
    for(let i = 0;i < listaMontadoras.length;i++){
        if(i !== posicao){
            listaMontadorasTemporaria.push(listaMontadoras[i])
        }
    }
    return listaMontadorasTemporaria
}


