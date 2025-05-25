"use strict";
// class Player {
//     readonly first: string;
//     readonly last: string;
//     private score: number = 0;
//     // #score: number = 0;
//     constructor(first: string, last: string) {
//         this.first = first;
//         this.last = last
//     }
//     private secretMethod(): void {
//         console.log("secret method!")
//     }
// }
class Player {
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    secretMethod() {
        console.log("secret method!");
    }
    //풀네임을 가져오는 getter설정
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    //score점수를 가져오는 getter설정
    get score() {
        return this._score;
    }
    //score점수를 수정하는 setter설정
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score canot be negative!");
        }
        this._score = newScore;
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.idAdmin = true;
    }
    maxScore() {
        this._score = 9999;
    }
}
const elton = new Player("Elton", "Steele", 100);
elton.fullName;
elton.score = 99;
