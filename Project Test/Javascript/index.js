let FormGroup= document.querySelector(".form-group");
let TodoMain= document.querySelector(".todo-main");

let SaveTodo= document.querySelector("#save-todo");
let TodoButton= document.querySelector("#Todo-button");

let Name= document.querySelector("#name");
let Description= document.querySelector("#description");
let Priority= document.querySelector("#priority");


TodoButton.addEventListener("click", ()=>{
    TodoMain.classList.remove("d-none")
});

SaveTodo.addEventListener("click", ()=>{
    TodoMain.classList.add("d-none");

    alert("Response Saved Successfully...");
});


SaveTodo.addEventListener("click",()=>{
    let user={
        name: Name.value,
        description: Description.value,
        priority: option.value,
    };

    let userList= localStorage.getItem("users");
    userList= userList=== null ? [] : JSON.parse("users");
    console.log(userList);
});


