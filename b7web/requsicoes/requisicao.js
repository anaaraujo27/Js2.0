// http://jsonplaceholder.typicode.com/posts

function clicou() {
    let req = fetch('http://jsonplaceholder.typicode.com/posts')
    
    req.then((data) => {
        return data.json()
    })

    .then((json) => {
        alert(`Titulo do primeiro post: ${json[0].title}`)
    })
}

document.querySelector('#Botao').addEventListener('click', clicou)