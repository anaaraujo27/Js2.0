function rodar() {
    timer = setTimeout(function() {
        document.querySelector('.demo').innerHTML = 'rodou'
    }, 1000)
}

function parar() {
    clearTimeout(timer)
}




    


 