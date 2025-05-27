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
    constructor(
        public first: string,
        public last: string,
        protected _score: number
    ) { }

    private secretMethod(): void {
        console.log("secret method!")
    }
    //풀네임을 가져오는 getter설정
    get fullName(): string {
        return `${this.first} ${this.last}`;
    }

    //score점수를 가져오는 getter설정
    get score(): number {
        return this._score
    }
    //score점수를 수정하는 setter설정
    set score(newScore: number) {
        if (newScore < 0) {
            throw new Error("Score canot be negative!")
        }
        this._score = newScore;
    }
}

class SuperPlayer extends Player {
    public idAdmin: boolean = true;
    maxScore() {
        this._score = 9999
    }
}

const elton = new Player("Elton", "Steele", 100)
elton.fullName;
elton.score = 99;

interface Colorful {
    color: string;
}

class Bike implements Colorful {
    constructor(public color: string) { }
}

class Jacket implements Colorful {
    constructor(public brand: string, public color: string) { }
}

const bike1 = new Bike("red");
const jacket1 = new Jacket("Prada", "black")

//고용인 클래스
abstract class Employee {
    constructor(public first: string, public last: string) { }
    abstract getPay(): number;
    greet() {
        console.log("Hello!")
    }
}

//정직원 클래스
class FullTimeEmployee extends Employee {
    constructor(first: string, last: string, private salary: number) {
        super(first, last)
    }
    getPay(): number {
        return this.salary;
    }
}

//알바생 클래스
class PartTimeEmployee extends Employee {
    constructor(first: string,
        last: string,
        private hourlyRate: number,
        private hoursWorked: number) {
        super(first, last)
    }
    getPay(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}

const betty = new FullTimeEmployee("Betty", "White", 95000);
console.log(betty.getPay())

const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);
console.log(bill.getPay())

