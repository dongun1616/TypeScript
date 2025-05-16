const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.getElementById("todoform")!;

function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    console.log("Submit")
}

form.addEventListener("submit", handleSubmit)

// btn.addEventListener("click", function () {
//     alert(input.value);
//     input.value = "";
// })

// let mystery: unknown = "Hello World!"

// const numChars = (mystery as string).length
// console.log(numChars);