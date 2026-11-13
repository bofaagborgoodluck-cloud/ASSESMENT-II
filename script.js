const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (input.value.trim() === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = input.value;

    span.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    const del = document.createElement("button");
    del.textContent = "Delete";
    del.className = "delete";

    del.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(del);

    list.appendChild(li);

    input.value = "";
});