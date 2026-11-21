const tasks = []

export function addTask(task) {
  // 1. Throw an Error if task is empty
  if (!task) {
    throw new Error('Please enter a valid task.')
  }

  // 2. Add the task last in the list
  tasks.push(task)

  // 3. Return the new length of the list
  return tasks.length
}

export function getTasks() {
  // 4. Return a copy of the list, so nobody outside can change it
  return [...tasks]
}

export function deleteTask(number) {
  // 5. Throw an Error if number is outside 1 .. tasks.length
  if (number < 1 || number > tasks.length) {
    throw new Error('Please enter a valid task number.')
  }
  // 6. Remove the task and return it
  return tasks.splice(number - 1, 1)[0]
}

export function clearTasks() {
  // 7. Empty the list (the tests need this)
  tasks.length = 0
}

export function getTasksAsJson() {
  const list = []
  for (let i = 0; i < tasks.length; i++) {
    list.push({ number: i + 1, task: tasks[i] })
  }
  return JSON.stringify(list, null, 2)
}
