class Ninja {

    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log("My name is: " + this.name);
    }

    showStats() {
        console.log("Ninja Name: " + this.name);
        console.log("Ninja Strength: " + this.strength);
        console.log("Ninja Speed: " + this.speed);
        console.log("Ninja Health: " + this.health);
    }

    drinkSake() {
        this.health += 10;
        console.log("You drank sake and now your health is " + this.health);
    }
}

const ninja1 = new Ninja("Chris", 10);

ninja1.sayName();
ninja1.showStats();

ninja1.drinkSake();