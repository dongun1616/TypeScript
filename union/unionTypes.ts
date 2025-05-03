let age: number | string = 23;
age = "24"


type Point = {
    x: number;
    y: number;
};

type Loc = {
    lat: number;
    long: number;
};

let coordinates: Point | Loc = { x: 1, y: 34 }
coordinates = { lat: 321.213, long: 23.334 }

function printAge(age: number | string) {
    console.log(`You are ${age} years old`)
}



printAge(23)
printAge("23")

function calculateTax(price: number | string, tax: number) {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""))
    }
    return price * tax
}

// const stuff: (number | string)[] = [1, 2, "3"]
// const stuff2: number[] | string[] = [1,2,3] or ["2","3","4"]

let zero: 0 = 0
let mood: "Happy" | "Sad" = "Happy";
mood = "Sad"

type DayOfWeek =
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday"

let today: DayOfWeek = "Wednesday"