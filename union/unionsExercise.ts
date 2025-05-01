// 1번
let highScore: number | boolean = 1
highScore = 2;
highScore = true;

// 2번
let stuff: number[] | string[] = [1, 2, 3]

// 3번
type SkillLevel =
    | "Beginner"
    | "Intermediate"
    | "Advanced"
    | "Expert"

// 4번
type SkiSchoolStudent = {
    name: string;
    age: number;
    sport: "ski" | "snowboard"
    level: SkillLevel
}

// 5번
type RGB = {
    r: number;
    g: number;
    b: number;
}
type HSL = {
    h: number;
    s: number;
    l: number;
}
let colors: (RGB | HSL)[] = []

// 6번
function greet(person: string | string[]): void {
    if (typeof person === "string") {
        console.log(`Hello, ${person}`)
    } else {
        for (let p of person) {
            console.log(`Hello, ${p}`)
        }
    }
}