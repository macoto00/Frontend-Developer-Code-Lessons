// =============
// == Pirates ==
// =============

class Pirate {
    constructor() {
        this.intoxication = 0;
        this.isAlive = true;
        this.hasPassedOut = false;
    }

    drinkSomeRum() {
        if (this.isAlive) {
            this.intoxication++;
            console.log("Cheers, matey! 🍻");
        } else {
            console.log("He's dead.");
        }
    }

    howsItGoingMate() {
        if (this.isAlive) {
            if (this.intoxication < 4) {
                console.log("Pour me anudder!");
            } else {
                console.log("Arghh, I'ma Pirate. How d'ya d'ink its goin?");
                this.hasPassedOut = true;
                this.intoxication = 0;
            }
        } else {
            console.log("He's dead.");
        }
    }

    brawl(anotherPirate) {
        if (this.isAlive && anotherPirate.isAlive) {
            const outcome = Math.random();
            if (outcome < 0.33) {
                this.isAlive = false;
                console.log("This pirate has died!");
            } else if (outcome < 0.66) {
                anotherPirate.isAlive = false;
                console.log("The other pirate has died!");
            } else {
                this.hasPassedOut = true;
                anotherPirate.hasPassedOut = true;
                console.log("Both pirates have passed out.");
            }
        } else {
            console.log("One of them is already dead.");
        }
    }

    die() {
        this.isAlive = false;
        console.log("He's dead.");
    }
}

/*

This Pirate class contains methods to handle drinking rum, 
checking their intoxication level, engaging in a brawl, and dying. 
Each method includes checks to see if the pirate is still alive and functional.

Next, let's move on to the Ship class and its functionalities for managing a crew and battles!

*/

class Ship {
    constructor() {
        this.crew = [];
        this.captain = null;
    }

    fillShip() {
        this.captain = new Pirate();
        const numberOfPirates = Math.floor(Math.random() * 114); // Maximum of 113 pirates
        for (let i = 0; i < numberOfPirates; i++) {
            this.crew.push(new Pirate());
        }
    }

    displayShipInfo() {
        console.log(`Captain's Intoxication: ${this.captain.intoxication}`);
        console.log(`Captain's State: ${this.captain.isAlive ? 'Alive' : 'Dead'}`);
        const alivePirates = this.crew.filter(pirate => pirate.isAlive).length;
        console.log(`Number of Alive Pirates in Crew: ${alivePirates}`);
    }

    battle(otherShip) {
        const thisShipScore = this.crew.filter(pirate => pirate.isAlive).length - this.captain.intoxication;
        const otherShipScore = otherShip.crew.filter(pirate => pirate.isAlive).length - otherShip.captain.intoxication;

        if (thisShipScore > otherShipScore) {
            console.log('This ship wins the battle!');
            this.partyTime();
            otherShip.handleLoss();
            return true;
        } else {
            console.log('Other ship wins the battle!');
            otherShip.partyTime();
            this.handleLoss();
            return false;
        }
    }

    partyTime() {
        this.crew.forEach(pirate => {
            const randomRum = Math.floor(Math.random() * 6); // Drinking random amount of rum
            for (let i = 0; i < randomRum; i++) {
                pirate.drinkSomeRum();
            }
        });
        this.captain.drinkSomeRum();
    }

    handleLoss() {
        const numberOfLosses = Math.floor(Math.random() * (this.crew.filter(pirate => pirate.isAlive).length + 1));
        for (let i = 0; i < numberOfLosses; i++) {
            const randomPirateIndex = Math.floor(Math.random() * this.crew.length);
            this.crew[randomPirateIndex].die();
        }
    }
}

// Example usage:
const ship1 = new Ship();
const ship2 = new Ship();

ship1.fillShip();
ship2.fillShip();

ship1.displayShipInfo();
ship2.displayShipInfo();

ship1.battle(ship2);

/*

This Ship class includes methods to fill the ship with pirates and a captain, 
display ship information, handle battles between ships, initiate a party after a battle, 
and manage losses based on the battle outcome.

We've covered a significant portion of the Ship class. Next, we'll proceed to implement 
the Armada and related functionalities as described in the task.

*/

class Armada {
    constructor() {
        this.ships = [];
    }

    addShip(ship) {
        this.ships.push(ship);
    }

    war(otherArmada) {
        let thisIndex = 0;
        let otherIndex = 0;

        while (thisIndex < this.ships.length && otherIndex < otherArmada.ships.length) {
            const thisShip = this.ships[thisIndex];
            const otherShip = otherArmada.ships[otherIndex];

            const thisWins = thisShip.battle(otherShip);
            if (thisWins) {
                otherIndex++;
            } else {
                thisIndex++;
            }
        }

        return thisIndex === this.ships.length;
    }
}

/*

The Armada class maintains a list of ships and includes the addShip method 
to add a ship to the armada and the war method for engaging in a war with another armada.

Next, we'll create the WarApp class to simulate a war between two armadas 
as described in the task. Let's proceed with that.

*/

class WarApp {
    static main() {
        const armada1 = new Armada();
        const armada2 = new Armada();

        // Filling armadas with ships
        for (let i = 0; i < 5; i++) {
            const ship1 = new Ship();
            const ship2 = new Ship();
            ship1.fillShip();
            ship2.fillShip();
            armada1.addShip(ship1);
            armada2.addShip(ship2);
        }

        console.log('Armada 1:');
        armada1.ships.forEach((ship, index) => {
            console.log(`Ship ${index + 1}:`);
            ship.displayShipInfo();
        });

        console.log('Armada 2:');
        armada2.ships.forEach((ship, index) => {
            console.log(`Ship ${index + 1}:`);
            ship.displayShipInfo();
        });

        console.log('Let the war begin!');
        const armada1Wins = armada1.war(armada2);

        console.log(`Armada 1 ${armada1Wins ? 'wins' : 'loses'} the war!`);
    }
}

// Run the war simulation
WarApp.main();

/*

This WarApp class simulates the creation of two armadas, filling them with ships, 
displaying ship information, and then starting a war between them.

This implementation covers the creation and simulation of a war between two armadas 
consisting of ships with crews of pirates. Each ship engages in battle, 
and the armada winning the most battles wins the war.

Let's extend the existing setup to include the BattleApp class, which orchestrates 
the battle between two ships. We'll then ensure that the main method within BattleApp 
initiates the battle between two ships:

*/

class BattleApp {
    static main() {
        const ship1 = new Ship();
        const ship2 = new Ship();

        ship1.fillShip();
        ship2.fillShip();

        console.log('Ship 1:');
        ship1.displayShipInfo();

        console.log('Ship 2:');
        ship2.displayShipInfo();

        console.log('Let the battle begin!');
        const result = ship1.battle(ship2);

        console.log(`Ship 1 ${result ? 'wins' : 'loses'} the battle!`);
    }
}

// Run the battle simulation
BattleApp.main();

/*

This BattleApp class manages a battle between two ships. It creates two ships, 
fills them with crews, displays ship information, and then initiates the battle.

Additionally, to ensure everything ties together, the WarApp and BattleApp are 
independent classes that can be executed separately to simulate different 
scenarios—either a full-scale war between armadas or a single battle between two ships.

*/