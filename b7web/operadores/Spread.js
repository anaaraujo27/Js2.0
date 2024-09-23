// Operador Spread

// Array
let nome = ['Ana', 'Beatriz']

let sobrenome = [...nome, 'Silva', 'Araújo']

console.log(sobrenome)


// Objeto
let info = {
    nome: 'Maria',
    sobrenome: 'Eduarda',
    cor: 'preta',
    idade: 70 
}

let nova = {
    ...info,
    cabelo: 'loiro',
    altura: 1.30    
}

console.log(nova)