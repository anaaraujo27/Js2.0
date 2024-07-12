// Guerreiro ou Mago 
// Pequeno Monstro ou Grande Monstro

class Character {

    _life = 1
    maxLife = 1
    attack = 0
    defense = 0

    constructor(name) {
        this.name = name
    }

    get life() {
        return this._life
    }

    set life() {
        this._life  = newLife < 0 ? 0 : newLife 
    }

}

class Guerreiro extends Character {
    constructor(name) {
        super (name)
        this.life = 100
        this.maxLife = this.life
        this.attack = 10
        this.defense = 8
    }
}

class Mago extends Character {
    constructor(name) {
        super (name)
        this.life = 80
        this.maxLife = this.life
        this.attack = 15
        this.defense = 3
    }
}

class MonstroPequeno extends Character {
    constructor() {
        super('Little Monster')
        this.life = 40
        this.maxLife = this.life
        this.attack = 4
        this.defense = 4
    }
}

class MonstroGrande extends Character {
    constructor() {
        super('Big Monster')
        this.life = 120
        this.maxLife = this.life
        this.attack = 16
        this.defense = 6
    }
}

class Stage {
    constructor(fighter1, fighter2, fighter1EL, fighter2EL) {
        this.fighter1 = fighter1
        this.fighter2 = fighter2
        this.fighter1EL = fighter1EL
        this.fighter2EL = fighter2EL
    }

    start() {
        this.update()
        // Evento do botão de atacar

        this.figther1EL.querySelector('.Botaodeataque').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2))
        this.figther2EL.querySelector('.Botaodeataque').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1))
    }

    update() {
        // fighter 1
        this.fighter1EL.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life} HP`
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife * 100)
        this.fighter1EL.querySelector('.bar').style.width = `${f1Pct}%`
        // fighter 2
        this.fighter2EL.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life} HP`
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife * 100)
        this.fighter2EL.querySelector('.bar').style.width = `${f2Pct}%`
    }

    doAttack(attacking, attacked) {
        
        if(attacking.life <= 0 || attacked.life <= 0) {
            console.log('Atacando pessoa morta')
            return;
        }

        let attackFactor = (Math.random() * 2).toFixed(2)
        let defenseFactor = (Math.random() * 2).toFixed(2)

        let actualAttack = attacking.attack * attackFactor
        let actualDefense = attacked.defense * defenseFactor

        if(actualAttack > actualDefense) {
            attacked.life -= actualAttack;
            console.log(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano ao ${attacked.name}`)
        } else {
            console.log(`${attacked.name} conseguiu defender.`)
        }

        console.log(actualAttack)

        this.update();
    }

}