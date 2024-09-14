import { question } from "readline-sync"

export function input(text){
    return question(text)
}

export function print(text){
    return console.log(text)
}

export function getIntegerBetween(text,min,max){
    let number = parseInt(input(text))
    while(number < min || number > max){
        print("Valor inválido!")
        number = parseInt(input(text))
    }
    return number
}


export function getPositiveInteger(text){
    let number = parseInt(input(text))
    while(number < 0){
        print("Valor inválido!")
        number = parseInt(input(text))
    }
    return number
}

export function bubbleSort(lista, atributo, reverse = false) {
    let listaCopia = lista.slice()
    let n = listaCopia.length
    for(let i = 0;i < n - 1;i++){
        for(let j = 0; j < n - i - 1;j++){
            if(reverse ? (listaCopia[j][atributo] < listaCopia[j + 1][atributo]) : (listaCopia[j][atributo] > listaCopia[j + 1][atributo])){
                let temporario = listaCopia[j]
                listaCopia[j] = listaCopia[j + 1]
                listaCopia[j + 1] = temporario
            }
        }
    }
    return listaCopia
}


export function myFilter(func, array) {
    const tempList = []
    for (let i = 0; i < array.length; i++) {
        if (func(array[i])) {
            tempList.push(array[i])
        }
    }
    return tempList
}

export function meUpperCase(texto) {
    let novaPalavra = '' 
    for(let i = 0; i < texto.length; i++) {
        let valorCaractere = texto.charCodeAt(i)   
        if(valorCaractere >= 97 && valorCaractere <= 122) {
            novaPalavra += String.fromCharCode(valorCaractere - 32)
        }else {
            novaPalavra += texto[i]
        }
    }   
    return novaPalavra
}

function meuLowerCase(texto) {
    let novaPalavra = ''
    for(let i = 0; i < texto.length; i++) {
        let valorCaractere = texto.charCodeAt(i)
        if(valorCaractere >= 65 && valorCaractere <= 90) {
            novaPalavra += String.fromCharCode(valorCaractere + 32)
        }else {
            novaPalavra += texto[i]
        }
    }
    return novaPalavra
}

export function meuCapitalize(texto) {
    let primeiraLetra = meUpperCase(texto[0])
    let restoTexto = meuLowerCase(texto.slice(1))
    
    return primeiraLetra + restoTexto
}