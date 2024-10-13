

/*function mostre() {
    let imagem = document.getElementById("imagem").files[0]

    let img = document.createElement('img')
    img.src = URL.createObjectURL(imagem)

    document.getElementById("area").appendChild(img) 
}*/

function mostre() {
    let reader = new FileReader()
    let imagem = document.getElementById('imagem').files[0]

    reader.onloadend = function() {
        let img = document.createElement('img')
        img.src = reader.result
        img.width = 200

        document.getElementById('area').appendChild(img)
    }

    reader.readAsDataURL(imagem)
}