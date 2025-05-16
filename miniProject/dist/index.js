"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.getElementById("todoform");
function handleSubmit(e) {
    e.preventDefault();
    console.log("Submit");
}
form.addEventListener("submit", handleSubmit);
// btn.addEventListener("click", function () {
//     alert(input.value);
//     input.value = "";
// })
// let mystery: unknown = "Hello World!"
// const numChars = (mystery as string).length
// console.log(numChars);
