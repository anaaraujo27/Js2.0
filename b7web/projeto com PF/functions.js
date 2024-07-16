const defaulCharacter = {
    name: '',
    life: 1,
    maxLife: 1,
    attack: 0,
    defense: 0
}

const Guerreiro = (name) => {
    
    return {
    ...defaulCharacter,
    name,
    life: 100,
    maxLife: 100,
    attack: 10,
    defense: 8
    }
}

const Mago = (name) => {
    return {
        ...defaulCharacter,
        name,
        life: 50,
        maxLife: 50,
        attack: 14,
        defense: 3
    }
}


const PequenoMonstro = () => {
    return {
        ...defaulCharacter,
        name: 'Pequeno Monstro',
        life: 40,
        maxLife: 40,
        attack: 4,
        defense: 4
    }
}

const GrandeMonstro = () => {
    return {
        ...defaulCharacter,
        name: 'Grande Monstro',
        life: 120,
        maxLife: 120,
        attack: 16,
        defense: 6
    }
}

const stage = {
    lutador1: null,
    lutador2: null,
    lutador1El: null,
    lutador2El:null,

    start(lutador1 ,lutador2, lutador1El, lutador2El) {
        this.lutador1 = lutador1
        this.lutador2 = lutador2
        this.lutador1El = lutador1El
        this.lutador2El = lutador2El

        this.lutador1El.querySelector('.Botaodeataque').addEventListener('click', () => this.doAttack(this.lutador1, this.lutador2))
        this.lutador2El.querySelector('.Botaodeataque').addEventListener('click', () => this.doAttack(this.lutador2, this.lutador1))

        this.update()
    },
 
    update() {
        //lutador 1
        this.lutador1El.querySelector('.name').innerHTML = `${this.lutador1.name} - ${this.lutador1.life.toFixed(1)} HP`
        let f1pct = (this.lutador1.life / this.lutador1.maxLife) * 100;
        this.lutador1El.querySelector('.bar').style.width = `${f1pct}%`

        //lutador 2
        this.lutador2El.querySelector('.name').innerHTML = `${this.lutador2.name} - ${this.lutador2.life.toFixed(1)} HP`
          let f2pct = (this.lutador2.life / this.lutador2.maxLife) * 100;
        this.lutador2El.querySelector('.bar').style.width = `${f2pct}%`
    },

    doAttack(attacking, attacked) {
        if(attacking.life <= 0 || attacked.life <= 0) {
            log.addMensage('Estao mortos')
            return;
        }

        const attackFactor = (Math.random() * 2)toFixed(2)
        const defenseFactor = (Math.random() * 2)toFixed(2)


        const actualAttack = attacking.attack * attackFactor
        const actualDefense = attacked.defense * defenseFactor

        if(actualAttack > actualDefense) {
            attackFactor.life -= actualAttack
            attacked.life = attacked.life < 0 ? 0 : attacked.life
            log.addMensage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`)
        }else {
            log.addMensage(`${attacked.name} conseguiu defender`)
        }

        this.update()
    }

}

const log = {
    list: [],
    addMensage(msg) {
        this.list.push(msg)
        this.render()
    },
    render() {
        const LogEl = document.querySelector('.log')
        LogEl.innerHTML = ''

        for(let i in this.list) {
                LogEl.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
}