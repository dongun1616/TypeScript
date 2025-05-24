"use strict";
class Player {
    // #score: number = 0;
    constructor(first, last) {
        this.score = 0;
        this.first = first;
        this.last = last;
    }
    secretMethod() {
        console.log("secret method!");
    }
}
const elton = new Player("Elton", "Steele");
