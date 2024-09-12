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

export function insertionSort(array, atributo, reverse = false) {
    // Loop de ordenação
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;

        // Comparação com base no atributo especificado
        while (j >= 0 && key[atributo] < array[j][atributo]) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
    
    return array;
}



function invertorLista(lista){
    const listaTemporaria = []
    for(let i = lista.length - 1;i >= 0;i--){
        listaTemporaria.push(lista[i])
    }
    return listaTemporaria
}

export function myFilter(func,array){
    const tempList = []
    for(let i = 0;i < array.length;i++){
        if(func(array[i])){
            tempList.push(array[i])
        }
    }
    return tempList
}