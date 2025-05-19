class Player {
    #score = 0;
    #numLives = 10;
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    //점수 반환 함수
    getScore() {
        return this.#score;
    }
    //점수 업데이트 함수
    updateScore(newScore) {
        this.#score = newScore
    }
    //도발 함수
    taunt() {
        console.log("BooYah!")
    }
    //패배시 함수
    loseLife() {
        this.#numLives -= 1;
    }
}

const player1 = new Player("blue", "steele");
console.log(player1.getScore())
console.log(player1.updateScore(20))
console.log(player1.getScore())

// const player2 = new Player("charlie", "brown");
// player2.taunt();