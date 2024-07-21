// http://jsonplaceholder.typicode.com/posts

function clicou() {
    fetch('http://jsonplaceholder.typicode.com/posts').then((data) => {
        return data.json();
    })
    .then((data) => {
        console.log(data)
    })
}

document.querySelector('#Botao').addEventListener('click', clicou)