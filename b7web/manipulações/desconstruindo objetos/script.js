let person = {
    nome: 'Lorena',
    sobrenome: 'Leptak',
    sexo: 'fem',
    aparência: {
        raça: 'loira',
        cor: 'branca',
        altura: 1.63
    }
}

//let {nome, sobrenome, idade = 14} = person

//console.log(nome, sobrenome, idade)
//let {nome, sobrenome, aparência:{cor, raça}} = person

//console.log(nome, sobrenome, cor, raça)


function pegarNomeCompleto(nome, sobrenome) {
    return `${nome}  ${sobrenome}`
}

console.log(pegarNomeCompleto(person))