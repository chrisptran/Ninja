class Ninja {

    constructor(name, health = 0, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log("My name is: " + this.name);
        return this;
    }

    showStats() {
        console.log("Ninja Name: " + this.name);
        console.log("Ninja Health: " + this.health);
        console.log("Ninja Speed: " + this.speed);
        console.log("Ninja Strength: " + this.strength);
        return this;
    }

    drinkSake() {
        this.health += 10;
        console.log("You drank sake and now your health is " + this.health);
        return this;
    }
}

const ninja1 = new Ninja("chris");

// ninja1.sayName();
 ninja1.showStats();

// ninja1.drinkSake();

class Sensei extends Ninja {
    constructor(name, strength, speed, health, wisdom) {
        super(name, strength, speed, health);
        this.wisdom = wisdom;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("Wisdom: " + this.wisdom);
    }

    showStats() {
        super.showStats();
    }
}


const sensei1 = new Sensei("chrispyy", 200, 10, 10, "so coool");

sensei1.speakWisdom();
sensei1.showStats();

