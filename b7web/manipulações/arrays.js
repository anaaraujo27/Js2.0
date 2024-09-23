let lista = ['Ovo', 'farinha', 'corante', 'massa']



let res = lista
console.logg(res)

/*
    Com arrays:
toString() - junta os itens com vírgula

join() - junta os itens apartir de um caracterie colocado e transforma-os em uma string

indexOf() - procura por um item no array e mostra onde ele está

pop() - remove o ultimo item

shift() - remove o primeiro item

push() -  adciona um novo item 

splice(remove, itens) - deleta um item da lista

concat() - junta dois arrays

sort() - ordena o array em ordem alfabetica

reverse() - ordena os itens de tras para frente

*/

let numeros = [45, 4, 9, 16, 25]
let numeros2 = []

numeros2 = numeros.map(function(item) {
    return item * 2

})

for (let i in numeros) {
    numeros2.push(numeros[i] * 2)
}

res = numeros2
console.log(res)