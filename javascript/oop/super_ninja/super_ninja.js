class Ninja {
    constructor(name) {
    this.name = name;
    this.health = 1;
    this.speed = 3;
    this.strength = 3;
    }
    sayName() {
        console.log(this.name)
    }
    showStats() {
        console.log(this.health)
        console.log(this.speed)
        console.log(this.strength)
    }
    drinkSnake() {
        this.health += 10;
        console.log(this.health)
    }
}
const ninja1 = new Ninja("name");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSnake();


class Sensei extends Ninja {
    constructor(){
        super('sensei')
        this.wisdom = 10;
    }
    speakWisdom() {
        this.drinkSnake();
        console.log('wise message')
    }
    showWisdom(){
        console.log(this.wisdom)
    }
}

const sensei1 = new Sensei();
sensei1.speakWisdom();
sensei1.showWisdom();
sensei1.sayName();