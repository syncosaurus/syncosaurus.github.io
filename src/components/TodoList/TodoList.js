import { useState, useEffect } from 'react'
import { TodoListClient } from './TodoListClient.js'
import Signal from '../Puzzle/Signal.jsx'
import SignalVertical from '../Puzzle/SignalVertical.jsx'

export default function TodoList() {
  const [todoList, setTodoList] = useState([])
  const [windowWidth, setWindowWidth] = useState()

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    window.addEventListener('resize', e => setWindowWidth(e.target.innerWidth))
  }, [])

  function handleSubmit(newTodo) {
    let newTodoList = [...todoList, newTodo]

    setTodoList(newTodoList)
  }

  function handleDelete(id) {
    let filteredTodoList = todoList.filter(todo => todo.id !== id)
    setTodoList(filteredTodoList)
  }

  const divStyle = {
    border: '40px solid',
    borderImage: 'url(' + '/landing/Client-window2.svg' + ') 25 25',
  }
  if (windowWidth < 1094) {
    return (
      <div className="grid grid-cols-1 gap-0 justify-center">
        <TodoListClient
          serverTodoList={todoList}
          onSubmit={handleSubmit}
          onDelete={handleDelete}
          latency={0}
          interactable={true}
          narrow={true}
          client={1}
        />
        <SignalVertical />
        <TodoListClient
          serverTodoList={todoList}
          onSubmit={handleSubmit}
          onDelete={handleDelete}
          latency={1000}
          interactable={false}
          narrow={true}
          client={2}
        />
      </div>
    )
  }

  return (
    <div className="flex">
      <TodoListClient
        serverTodoList={todoList}
        onSubmit={handleSubmit}
        onDelete={handleDelete}
        latency={0}
        interactable={true}
        narrow={false}
      />
      <Signal />
      <TodoListClient
        serverTodoList={todoList}
        onSubmit={handleSubmit}
        onDelete={handleDelete}
        latency={1000}
        interactable={false}
        narrow={false}
      />
    </div>
  )
}
