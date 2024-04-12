

const numeros = [11, 15, 18, 14, 12, 13, 1971 ]

let maiorNum = 0

function numMaior (numeros){

    for (let i = 0; i < numeros.length; i++) {
        
        if (numeros[i] > maiorNum){
        maiorNum = numeros[i]
        }
            }

    return maiorNum
}

console.log(numMaior(numeros))




