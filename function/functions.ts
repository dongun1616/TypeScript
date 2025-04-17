function square(num: number): number {
    return num * num;
}

console.log(square(3));

const doSomeThing = (person: string, age: number, isFunny: boolean) => { };

function greet(person: string = "stranger") {
    return `Hi there, ${person}!`;
}

console.log(greet())


console.log(doSomeThing("ChickenFace", 78, true));

function printTwice(msg: string) {
    console.log(msg);
    console.log(msg);
}