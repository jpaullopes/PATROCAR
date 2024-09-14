import { menu, tipoOrdenacao, leituraArquivos,adicionarMontadora, exibicaoOrganizada, salvarDados, atributos,atualizarCadastros, removerElemento } from "./patrocar_utils.js"
import {print, getIntegerBetween, input, getPositiveInteger, myFilter,bubbleSort, meUpperCase} from "./utils.js"


function main(){
    let dadosMontadoras = leituraArquivos("montadoras.txt")//ler os dados o arquivo e armazenar
    let opcaoEscolhida = 1
    while(opcaoEscolhida !== 0){
        print(menu())
        opcaoEscolhida = getIntegerBetween('Escolha uma opção (0-7): ',0,7)

        if(opcaoEscolhida === 1){///criar
            const numeroDeMontadoras = getPositiveInteger("Número de montadoras a adicionar: ")
                adicionarMontadora(dadosMontadoras,numeroDeMontadoras)
                print("[ Nova(s) montadora(s) adicionada(s) com sucesso! ]")

        }else if(opcaoEscolhida === 2){//listar
            print(tipoOrdenacao())
            const tipoDeOrdem = getIntegerBetween('Escolha um tipo de ordem: ',1,2)
            print(atributos())
            const tipoDeAtributo = meUpperCase(input('Escolha um atributo: '))
            dadosMontadoras = bubbleSort(dadosMontadoras, tipoDeAtributo, tipoDeOrdem !== 1)
            print(exibicaoOrganizada(dadosMontadoras))
        }else if(opcaoEscolhida === 3){//atualizar

            print(exibicaoOrganizada(dadosMontadoras))
            const posicao = getIntegerBetween( 'Escolha a posição da montadora: ',1,dadosMontadoras.length) - 1
            const numeroAtributos = getIntegerBetween('Quantos atributos deseja alterar (1-3): ', 1, 3)
            atualizarCadastros(dadosMontadoras, posicao,numeroAtributos)
            
        }else if(opcaoEscolhida === 4){//remover
            print(exibicaoOrganizada(dadosMontadoras))
            const posicao = getIntegerBetween( 'Escolha a posição da montadora: ',1,dadosMontadoras.length) - 1
            dadosMontadoras = removerElemento(dadosMontadoras, posicao)
            
        }else if(opcaoEscolhida === 5){//filtrar
            print(atributos())
            const atributo = meUpperCase(input('Escolha o atributo para filtrar: '))
            const parteDoAtributo = input(`Digite a parte do atributo ${atributo}: `)
            const dadosFiltrados = myFilter((montadora) => montadora[atributo].includes(parteDoAtributo),dadosMontadoras)

            print(exibicaoOrganizada(dadosFiltrados))
            
        }else if(opcaoEscolhida === 6){//status
            print(`NÚMERO DE MONTADORAS CADASTRADAS : [${dadosMontadoras.length}]`)
            
        }else if(opcaoEscolhida === 7){//salvar
            salvarDados(dadosMontadoras)
            print("[ Dados salvos com sucesso! ]")
        }
    }
    salvarDados(dadosMontadoras)
    print("[ Dados salvos com sucesso! ]")
    print("[ Programa encerrado! ]")
}

main()