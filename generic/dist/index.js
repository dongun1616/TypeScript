"use strict";
// const nums: number[]= [];
// const nums: Array<number> = [];
// const colors: Array<string> = [];
// const inputEl = document.querySelector<HTMLInputElement>("#username")!;
// inputEl.value = "generic"
// const btn = document.querySelector<HTMLButtonElement>(".btn")!;
//제네릭 함수 예시
function identity(item) {
    return item;
}
identity(7);
identity("seven");
//랜덤 제네릭 함수 예시
function getRandomElement(list) {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
// console.log(getRandomElement<string>(["one", "two", "three"]))
// console.log(getRandomElement<number>([1, 2, 3]))
getRandomElement([20, 30, 40, 50]);
//여러 타입을 가지는 제네릭 함수 예시
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
const comboObj = merge({ name: "colt" }, { num: [9, 23] });
function printDoubleLength(thing) {
    return thing.length * 2;
}
// console.log(printDoubleLength("asdasd"))
// console.log(printDoubleLength(234324))
//제네릭 기본 타입 파라미터 예시
function makeEmptyArray() {
    return [];
}
const nums = makeEmptyArray();
const bools = makeEmptyArray();
class PlayList {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
const songs = new PlayList();
songs.add({ title: "stronger", artist: "ben" });
const videos = new PlayList();
videos.add({ title: "crazy", creator: "lim", resolution: "1920x1080" });
console.log(songs, videos);
