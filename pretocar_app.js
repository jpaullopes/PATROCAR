import { menu, tipoOrdenacao, leituraArquivos, adicionarMontadora, exibicaoOrganizada, salvarDados, atributos,atualizarCadastros, removerElemento } from "./petrocar_utils.js"
import {print, getIntegerBetween, input, getPositiveInteger} from "./utils.js"
import { ulid } from "ulidx"


function main(){
    const dadosMontadoras = leituraArquivos("montadoras.txt")//ler os dados o arquivo e armazenar
    let opcaoEscolhida = 1
    while(opcaoEscolhida !== 0){
        print(menu())
        opcaoEscolhida = getIntegerBetween('text',0,7)

        if(opcaoEscolhida === 1){///criar
            const numeroDeMontadoras = getPositiveInteger("Número de montadoras adicionadas: ")
            for(let i = 0;i < numeroDeMontadoras;i++){
                adicionarMontadora(dadosMontadoras)
                print("[ Montadora adicionada com sucesso! ]")
            }

        }else if(opcaoEscolhida === 2){//listar
            print(dadosMontadoras)
            print(tipoOrdenacao())
            const tipoDeOrdem = getIntegerBetween('text2',1,2)
            print(atributos())
            const tipoDeAtributo = input('Escolha o atributo: ')
            print(exibicaoOrganizada(dadosMontadoras,tipoDeAtributo,tipoDeOrdem))
        }else if(opcaoEscolhida === 3){//atualizar
            print(tipoOrdenacao())
            const tipoDeOrdem = getIntegerBetween('text2',1,2)
            print(atributos())
            const tipoDeAtributo = input('Escolha o atributo: ')
            print(exibicaoOrganizada(dadosMontadoras,tipoDeAtributo,tipoDeOrdem))
            const posicao = getIntegerBetween( 'Escolha a posição da montadora: ',1,dadosMontadoras.length) - 1
            dadosMontadoras = atualizarCadastros(dadosMontadoras,posicao)
            
        }else if(opcaoEscolhida === 4){//remover
            const posicao = getIntegerBetween( 'Escolha a posição da montadora: ',1,dadosMontadoras.length) - 1
            dadosMontadoras = removerElemento(dadosMontadoras,posicao)
            
        }else if(opcaoEscolhida === 5){//filtrar
            pass
            
        }else if(opcaoEscolhida === 6){//status
            print(`NÚMERO DE MONTADORAS CADASTRADAS : [${dadosMontadoras.length}]`)
            
        }else if(opcaoEscolhida === 7){//salvar
            salvarDados(dadosMontadoras)
            print("Dados salvos com sucesso!")
        }
    }
    salvarDados(dadosMontadoras)
}

main()