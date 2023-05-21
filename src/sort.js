document.addEventListener("DOMContentLoaded", () => {
  addingEventListeners()
});

let taskObjArr = []

// 1. get the form and add an event listener
function addingEventListeners() {
  document
  .getElementById("create-task-form")
  .addEventListener("submit", handleFormSubmit)
  document.getElementById("sort-tasks").addEventListener("change", sortTasks)
}

function handleFormSubmit(e) {
e.preventDefault()
console.log(e)
const task = e.target["new-task-description"].value
const priorityLevel = parseInt(e.target.priority.value)

const taskObj = {task, priorityLevel}
taskObjArr.push(taskObj)

console.log(taskObjArr)

sortTasks()
displayTasks()

}

function displayTasks() {
  const taskUl = document.getElementById("tasks")
  taskUl.innerHTML = ""

  taskObjArr.forEach((task) => {
    const taskLi = document.createElement("li")
    const deleteButton = document.createElement("button")
    
    deleteButton.textContent = "x"
    deleteButton.addEventListener("click", (e) => deleteTask (e, task))
    
    taskLi.textContent = task.task + " "
    taskLi.style.color = getPriorityColor(task.priorityLevel)
    taskLi.appendChild(deleteButton)
    taskUl.appendChild(taskLi)
  })
 }

 function deleteTask(e, task) {
  console.log(e)
  taskObjArr = taskObjArr.filter((element) => element.task !== task.task)
  e.target.parentNode.remove()

 }

 function getPriorityColor(priorityLevel) {
  if (priorityLevel === 1) {
    return "red"
  } else if (priorityLevel === 2) {
    return "blue"
  } else {
    return "green"
  }
 }

 function sortTasks() {
  const sortTasksSelect = document.getElementById("sort-tasks")
  if (sortTasksSelect.value === "h-l") {
    taskObjArr.sort((a, b) => a.priorityLevel - b.priorityLevel)
  } else {
    taskObjArr.sort((a, b) => b.priorityLevel - a.priorityLevel)
  }
  console.log(taskObjArr)
  displayTasks()
 }