import { test, beforeEach } from 'node:test'
import assert from 'node:assert/strict'
import { addTask, getTasks, clearTasks, deleteTask } from './todo.js'

// The list lives in the module, so empty it before each test.
beforeEach(() => clearTasks())

test('a new list is empty', () => {
  assert.deepEqual(getTasks(), [])
})

test('addTask adds a task last in the list', () => {
  addTask('Wash clothes')
  addTask('Do the dishes')
  assert.deepEqual(getTasks(), ['Wash clothes', 'Do the dishes'])
})

test('addTask throws on an empty task', () => {
  assert.throws(() => addTask(''), /valid task/)
})

test('deleteTask removes by number, starting at 1', () => {
  addTask('Wash clothes')
  addTask('Do the dishes')
  assert.equal(deleteTask(1), 'Wash clothes')
  assert.deepEqual(getTasks(), ['Do the dishes'])
})
