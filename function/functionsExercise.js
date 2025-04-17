function twoFer(name) {
    if (name === void 0) { name = "you"; }
    return "one for ".concat(name, ", one for me");
}
function isLeapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    }
    else if (year % 400 === 0) {
        return true;
    }
    return false;
}
console.log(twoFer());
console.log(twoFer("Lim"));
console.log(isLeapYear(2012));
console.log(isLeapYear(2013))