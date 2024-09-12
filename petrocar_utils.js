import { readFileSync,writeFile } from 'fs'
import { ulid } from "ulidx"
import { input,getPositiveInteger,insertionSort, myFilter } from './utils.js'


export function menu(){//EXIBIÇÃO DO MENU
    return `------ [ PETRO-CARS ] ------
[ 1 ] - ADICIONAR MONTADORA
[ 2 ] - LISTAR MONTADORA(S)
[ 3 ] - ATUALIZAR MONTADORA
[ 4 ] - REMOVER MONTADORA
[ 5 ] - FILTRAR
[ 6 ] - SATATUS
[ 7 ] - SALVAR
[ 0 ] - SAIR
----------------------------`
}

export function tipoOrdenacao(){
    return `----------------------------
[ 1 ] - CRESCENTE(↑)
[ 2 ] - DESCRESCENTE(↓)
----------------------------`
}

export function atributos(){
    return `----------------------------
        [ ATRIBUTOS ]
NOME
PAÍS
ANO DE FUNDAÇÃO
----------------------------`
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

        montadora["ID"] = listaDados[0].toString()
        montadora["NOME"] = listaDados[1].toString()
        montadora["PAÍS"] = listaDados[2].toString()
        montadora["ANO DE FUNDAÇÃO"] = parseInt(listaDados[3])

        dadosMontadoras.push(montadora)
    }

    return dadosMontadoras
}

export function exibicaoMontadoras(montadoras) {
    let exibicao = `----------------------------\n            [ LISTA DE MONTADORAS ]\n`;
    for (let i = 0; i < montadoras.length; i++) {
        exibicao += `[ ${i + 1} ] | ID [${montadoras[i]["ID"]}] | NOME [${montadoras[i]["NOME"]}] | PAÍS [${montadoras[i]["PAÍS"]}] | ANO DE FUNDAÇÃO [${montadoras[i]["ANO DE FUNDAÇÃO"]}]\n`;
    }
    return exibicao;
}

export function exibicaoOrganizada(listaMontadoras, atributoOrdenacao, opcao) {
    const montadorasOrganizadas = insertionSort(listaMontadoras, atributoOrdenacao, opcao === 1 ? false : true);
    return exibicaoMontadoras(montadorasOrganizadas);
}


export function adicionarMontadora(listaMontadoras){
    const montadora = {}

    montadora["ID"] = ulid()
    montadora["NOME"] = input('Nome da montadora: ')
    montadora["PAÍS"] = input('País de origem da montadora: ')
    montadora["ANO DE FUNDAÇÃO"] = getPositiveInteger('Ano de fundação da montadora: ')

    listaMontadoras.push(montadora)

}

export function atualizarCadastros(listaMontadoras,posicao){
    const montadora = {}

    montadora["ID"] = ulid() //não sei se é adequado eu refazer o ulid ou não, qualquer coisa eu altero para contiuar o mesmo
    montadora["NOME"] = input('Nome da montadora: ')
    montadora["PAÍS"] = input('País de origem da montadora: ')
    montadora["ANO DE FUNDAÇÃO"] = getPositiveInteger('Ano de fundação da montadora: ')

    listaMontadoras.push(montadora)

    listaMontadoras[posicao] = montadora
}


export function removerElemento(listaMontadoras,posicao){
    listaMontadoras.slice(0,posicao).concat(listaMontadoras.slice(posicao + 1))
}

