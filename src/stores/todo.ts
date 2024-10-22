import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', () => {
  const todoList = ref<any[]>([])
  const selectedTodos = ref([])

  function getTodos() {
    todoList.value = JSON.parse(localStorage.getItem('todos')!)
  }

  function createTodo(todo: any) {
    // todoList.value.push(todo)
    let todos = JSON.parse(localStorage.getItem('todos')!)

    if (!todos)
      todos = []

    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos))
    window.dispatchEvent(new Event('localstorage-change'))
  }

  window.addEventListener('localstorage-change', (event) => {
    getTodos()
  })

  return { todoList, getTodos, createTodo }
})
