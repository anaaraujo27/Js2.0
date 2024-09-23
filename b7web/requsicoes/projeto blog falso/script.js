// https://jsonplaceholder.typicode.com/posts

// Etapa 1 - ler os posts e exibir na tela

async function lerPosts() {
    let postArea = document.querySelector('.posts')
    postArea.innerHTML = 'Carregando...'

        let response = await fetch('https://jsonplaceholder.typicode.com/posts')
        let json = await response.json()

        if(json.length > 0) {
            postArea.innerHTML  = ''

            for(let i in json) {
                let postHTML = `<h1>${json[i].title}</h1><p>${json[i].body}</p><hr/>`
                postArea.innerHTML += postHTML
            }

        } else {
            postArea.innerHTML = 'Ouve um problema na conexão, sinto muito 😵'
        }
} 



// Etapa 2 - adicionar um novo post

   let title = document.querySelector('#titleField').value = ''
    let body = document.querySelector('#bodyField').value = ''

async function addNewPost(title, body) {
    await fetch('https://jsonplaceholder.typicode.com/posts', {
        
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            body,
            userId: 2
        })
    })

 

    lerPosts()

}

document.querySelector('#insertButton').addEventListener('click', () => {
    let title = document.querySelector('#titleField').value
    let body = document.querySelector('#bodyField').value

    if(title && body) {
        addNewPost(title, body)
    } else {
        alert('Preencha todos os campos!')
    }
})


lerPosts();
