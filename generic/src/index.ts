// const nums: number[]= [];
// const nums: Array<number> = [];
// const colors: Array<string> = [];

// const inputEl = document.querySelector<HTMLInputElement>("#username")!;
// inputEl.value = "generic"

// const btn = document.querySelector<HTMLButtonElement>(".btn")!;

//제네릭 함수 예시
function identity<T>(item: T): T {
    return item;
}

identity<number>(7)
identity<string>("seven")

//랜덤 제네릭 함수 예시
function getRandomElement<T>(list: T[]): T {
    const randIdx = Math.floor(Math.random() * list.length)
    return list[randIdx]
}

// console.log(getRandomElement<string>(["one", "two", "three"]))
// console.log(getRandomElement<number>([1, 2, 3]))

getRandomElement([20, 30, 40, 50])

//여러 타입을 가지는 제네릭 함수 예시
function merge<T extends object, U extends object>(object1: T, object2: U) {
    return {
        ...object1,
        ...object2
    }
}

const comboObj = merge({ name: "colt" }, { num: [9, 23] })

interface Lengthy {
    length: number;
}

function printDoubleLength(thing: Lengthy): number {
    return thing.length * 2;
}

// console.log(printDoubleLength("asdasd"))
// console.log(printDoubleLength(234324))

//제네릭 기본 타입 파라미터 예시
function makeEmptyArray<T = number>(): T[] {
    return [];
}

const nums = makeEmptyArray();
const bools = makeEmptyArray<boolean>();

//제네릭 클래스 예시
interface Song {
    title: string;
    artist: string;
}
interface Video {
    title: string;
    creator: string;
    resolution: string;
}

class PlayList<T> {
    public queue: T[] = [];
    add(el: T) {
        this.queue.push(el)
    }
}

const songs = new PlayList<Song>()
songs.add({ title: "stronger", artist: "ben" })


const videos = new PlayList<Video>()
videos.add({ title: "crazy", creator: "lim", resolution: "1920x1080" })
console.log(songs, videos)