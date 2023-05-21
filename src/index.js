document.addEventListener("DOMContentLoaded", () => {
  addingEventListeners()
});


// 1. get the form element and attach an
//  event listener to the form

function addingEventListeners() {
  document
  .getElementById("create-task-form")
  .addEventListener("submit", handleFormSubmit)
}

function handleFormSubmit(e) {
e.preventDefault()
// console.log(e)
const task = e.target["new-task-description"].value

displayTask(task)

}

function displayTask(task) {
  const taskUl = document.getElementById("tasks")
  
  const taskLi = document.createElement("li")
  
  taskLi.textContent = task
  taskUl.appendChild(taskLi)
  
 }