let char = new Guerreiro('Ana')
let monster = new MonstroPequeno()

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char')
    document.querySelector('#monster')
)

stage.start()