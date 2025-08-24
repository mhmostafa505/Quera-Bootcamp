const form = document.getElementById("new-task-form");
const input = document.getElementById("new-task-input");
const submit = document.getElementById("new-task-submit");
const taskList = document.getElementById("todosContainer");
const deleteButton = document.getElementById("delete");
const error = document.getElementById("errorContainer");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTask = input.value;

  if (newTask === "") {
    error.style.setProperty("display", "block");
    error.style.setProperty("animation", "fadeIn 0.3s");
    error.style.setProperty("opacity", "100");
    setTimeout(() => {
      error.style.setProperty("display", "none");
    }, 2000);
    return;
  }

  // TODO: Add task to taskList
  taskList.innerHTML = `
  <li class="todos__todo">
  <p>${newTask}</p>
  <img src="./img/trash_can_img.pn" alt="delete" id="delete" class="todos__todo--trash">
  </li>
  `;
  // TODO: Reset form input
  input.value = "";
});

taskList.addEventListener("click", (e) => {
  // TODO: Complete task when clicked on task item
  e.target.style.setProperty("text-decoration", "line-through");
  e.target.style.setProperty("background-color", "#c9c8c8");
  if (e.target instanceof HTMLParagraphElement) {
    e.target.parentElement.style.backgroundColor = "#c9c8c8";
  }
  // TODO: Delete task item
  if (e.target instanceof HTMLImageElement) {
    e.target.parentElement.remove();
  }
});
