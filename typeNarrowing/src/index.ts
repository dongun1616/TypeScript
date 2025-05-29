//typeof 가드 예시
function triple(value: number | string) {
    if (typeof value === "string") {
        return value.repeat(3);
    }
    return value * 3;
}

console.log(triple("type"))

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
console.log(printLetters("play"))

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

console.log(getRuntime({ title: "Amadeus", duration: 140 }))
console.log(getRuntime({
    title: "Amadeus",
    numEpisodes: 80, episodeDuration: 30
}))