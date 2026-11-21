import { addTask, getTasks, deleteTask, getTasksAsJson } from './todo.js'
addTask('Wash clothes')
addTask('Do the dishes')
addTask('Go for a walk')
addTask('Study backend')

console.log(getTasks())

function printTasks() {
  const tasks = getTasks()
  if (tasks.length === 0) {
    console.log('Your to-do list is empty.')
    return
  }
  console.log('Your to-do list:')
  for (let i = 0; i < tasks.length; i++) {
    console.log(`${i + 1}. ${tasks[i]}`)
  }
  // The same loop, written shorter with forEach and an arrow function:
  // tasks.forEach((task, index) => console.log(`${index + 1}. ${task}`))
}

printTasks()

const removed = deleteTask(4)
printTasks()
console.log(`You removed "${removed}" from the to do list!`)

try {
  deleteTask(42)
} catch (error) {
  console.log(error.message)
}

console.log(getTasksAsJson())
console.log(' ---- ')

function printTasksFromJson() {
  const list = JSON.parse(getTasksAsJson())
  if (list.length === 0) {
    console.log('Your to-do list is empty.')
    return
  }
  console.log('Your to-do list:')
  for (let i = 0; i < list.length; i++) {
    console.log(`${list[i].number}. ${list[i].task}`)
  }
}

printTasksFromJson()
