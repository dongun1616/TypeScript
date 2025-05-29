"use strict";
//typeof 가드 예시
function triple(value) {
    if (typeof value === "string") {
        return value.repeat(3);
    }
    return value * 3;
}
console.log(triple("type"));
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
console.log(printLetters("play"));
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
console.log(getRuntime({ title: "Amadeus", duration: 140 }));
console.log(getRuntime({ title: "Amadeus", numEpisodes: 80, episodeDuration: 30 }));
