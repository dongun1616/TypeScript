interface Todo {
    text: string;
    completed: boolean;
}

const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.getElementById("todoform")!;
const list = document.getElementById("todolist")!;

const todos: Todo[] = readTodos();
todos.forEach(createTodo);

//todo 목록을 읽어오는 함수
function readTodos(): Todo[] {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null) return [];
    return JSON.parse(todosJSON)
}

//todo 목록을 저장하는 함수
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos))
}

//폼을 제출해 todo 목록에 추가하는 함수
function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    const newTodo: Todo = {
        text: input.value,
        completed: false,
    }
    createTodo(newTodo)
    todos.push(newTodo);

    saveTodos();
    input.value = "";
}

//todo에서 리스트와 체크박스를 생성하는 함수
function createTodo(todo: Todo) {
    const newLi = document.createElement("li")
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox"
    checkbox.checked = todo.completed;

    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked;
        saveTodos();
    })

    newLi.append(todo.text)
    newLi.append(checkbox)
    list.append(newLi)
}

form.addEventListener("submit", handleSubmit)

//test script

// btn.addEventListener("click", function () {
//     alert(input.value);
//     input.value = "";
// })

// let mystery: unknown = "Hello World!"

// const numChars = (mystery as string).length
// console.log(numChars);