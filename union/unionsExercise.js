// 1번
var highScore = 1;
highScore = 2;
highScore = true;
// 2번
var stuff = [1, 2, 3];
var colors = [];
// 6번
function greet(person) {
    if (typeof person === "string") {
        console.log("Hello, ".concat(person));
    }
    else {
        for (var _i = 0, person_1 = person; _i < person_1.length; _i++) {
            var p = person_1[_i];
            console.log("Hello, ".concat(p));
        }
    }
}

greet(["Tom", "Lim"])