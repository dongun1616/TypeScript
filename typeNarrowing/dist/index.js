"use strict";
//typeof 가드 예시
function triple(value) {
    if (typeof value === "string") {
        return value.repeat(3);
    }
    return value * 3;
}
//truthiness 가드 예시
const printLetters = (word) => {
    if (word) {
        for (let char of word) {
            console.log(char);
        }
    }
    else {
        console.log("Not pass in a word!!");
    }
};
//Equality(=) 좁히기 예시
function someDemo(x, y) {
    if (x === y) {
        return x.toUpperCase();
    }
}
//상영시간을 반환하는 함수
function getRuntime(media) {
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
function printFullDate(date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    }
    else {
        console.log(new Date(date).toUTCString());
    }
}
function isCat(animal) {
    return animal.numLives !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        animal;
    }
}
function getFarmAnimalSound(animal) {
    switch (animal.kind) {
        case ("pig"):
            return "Oink!";
        case ("cow"):
            return "Moooo!";
        case ("rabbit"):
            return "Guncho!";
        default:
            const _exhaustiveCheck = animal;
            return _exhaustiveCheck;
    }
}
const stevie = {
    kind: "cow",
    name: "Stevie Gun",
    weight: 20,
    age: 3
};
console.log(getFarmAnimalSound(stevie));
