"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
btn.addEventListener("click", function () {
    alert(input.value);
    input.value = "";
});
// let mystery: unknown = "Hello World!"
// const numChars = (mystery as string).length
// console.log(numChars);
