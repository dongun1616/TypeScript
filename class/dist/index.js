class Player {
    static description = "Player In Our Game"
    #score = 0;
    #numLives = 10;
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    //풀네임을 반환하는 getters
    get fullName() {
        return `${this.first} ${this.last}`
    }
    //점수 반환 getters
    get score() {
        return this.#score;
    }

    //점수를 수정하는 setters
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score mush be positive!")
        }
        this.#score = newScore
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



class AdminPlayer extends Player {
    constructor(powers) {
        super();
        this.powers = powers;
    }
    isAdmin = true;
}
const admin = new AdminPlayer("admin", "mcadim");
console.log(admin.score)




// const player1 = new Player("blue", "steele");
// console.log(player1.score)
// player1.score = 200
// console.log(player1.score)
// console.log(player1.fullName)

// console.log(Player.description)

// const player2 = new Player("charlie", "brown");
// player2.taunt();