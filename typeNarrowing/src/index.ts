//typeof 가드 예시
function triple(value: number | string) {
    if (typeof value === "string") {
        return value.repeat(3);
    }
    return value * 3;
}


//truthiness 가드 예시
const printLetters = (word?: string) => {
    if (word) {
        for (let char of word) {
            console.log(char);
        }
    }
    else {
        console.log("Not pass in a word!!")
    }
}

//Equality(=) 좁히기 예시
function someDemo(x: string | number, y: string | boolean) {
    if (x === y) {
        return x.toUpperCase()
    }
}

//In연산자 좁히기 예시
interface Movie {
    title: string,
    duration: number,
}

interface TVShow {
    title: string,
    numEpisodes: number,
    episodeDuration: number
}
//상영시간을 반환하는 함수
function getRuntime(media: Movie | TVShow) {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration;
}

// console.log(getRuntime({ title: "Amadeus", duration: 140 }))
// console.log(getRuntime({
//     title: "Amadeus",
//     numEpisodes: 80, episodeDuration: 30
// }))

//instanceof 좁히기 예시
function printFullDate(date: string | Date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    }
    else {
        console.log(new Date(date).toUTCString())
    }
}

//타입 명제 예시
interface Cat {
    name: string,
    numLives: number
}
interface Dog {
    name: string,
    breed: string
}

function isCat(animal: Cat | Dog): animal is Cat {
    return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog): void {
    if (isCat(animal)) {
        animal
    }
}

//판별 유니온 예시
interface Rabbit {
    kind: "rabbit";
    name: string;
    weight: number;
    age: number;
}
interface Cow {
    kind: "cow";
    name: string;
    weight: number;
    age: number;
}
interface Pig {
    kind: "pig";
    name: string;
    weight: number;
    age: number;
}
interface Sheep {
    kind: "sheep";
    name: string;
    weight: number;
    age: number;
}

type FarmAnimal = Pig | Rabbit | Cow | Sheep;

function getFarmAnimalSound(animal: FarmAnimal) {
    switch (animal.kind) {
        case ("pig"):
            return "Oink!";
        case ("cow"):
            return "Moooo!";
        case ("rabbit"):
            return "Guncho!";
        default:
        // const _exhaustiveCheck: never = animal
        // return _exhaustiveCheck;
    }
}

const stevie: Cow = {
    kind: "cow",
    name: "Stevie Gun",
    weight: 20,
    age: 3
}

console.log(getFarmAnimalSound(stevie))