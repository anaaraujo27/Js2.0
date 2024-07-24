// http://jsonplaceholder.typicode.com/posts

async function clicou() {
    // Metodos: GET (pega informacoes), POST (manda informacoes), PUT (alterar uma informacao ja existente), DELETE (deleta alguma informacao)
    let response = await fetch('http://jsonplaceholder.typicode.com/posts')
    let json = await response.json()
    alert(`Titulo do primeiro post: ${json[0].title}`)

        /*.then((response) => {
            //console.log(data.status) - mostra o status da requisicao
            return response.json()
        })

        .then((json) => {
            alert(`Titulo do primeiro post: ${json[0].title}`)
        })
        .catch((error) => {
            console.log('Algo deu problema')
            console.log(error)
            alert('ha um problema na requisicao')
        })
        .finally (() => {
            alert('OPA, acabou tudo!')
        })*/
    
        alert('clicou!!')
}

async function inseriu() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {

        method: 'POST   ',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Texto aleatorio',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero itaque, et nulla,tempore voluptates sit illo exercitationem incidunt eligendi voluptatem similique ut, saepe numquam illum consequatur commodi non aspernatur placeat!',
            userId: 2
        })
    })

    let json = await response.json()
    console.log(json)
 
}


document.querySelector('#inserir').addEventListener('click', inseriu)
document.querySelector('#Botao').addEventListener('click', clicou)

/* 

Funcoes do Promisse :
> .than = (retirna oque deve fazer quando a funcao for retornada)
> .catch = (recebe um callbeck para executar caso algo da requisicao der errado)
> .finally = (e executado se der certo ou errado)

*/

// informacoes importantes sobre requisicoes:
// 200 - resposta de sucesso 
// 201 - mandei criar alguma coisa e deu certo
// 206 - resposta em varios pedacos

// redirecionamento
// 301 - a url acessada mudou

//respostas de erro do cliente
// 400 - a requisicao esta errada
// 401 - esta tentando acessar algo que nao tem autorizacao
// 403 - aquela url foi proibida de ser acessada
// 404 - quando a url que esta tentando ser acessada nao existe
// 405 - o metodo que esta proibido para aquela url

// Respostas de erro do servidor
// 500 - o navegador nao sabe o que aconteceu

