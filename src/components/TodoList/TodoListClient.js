import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import addIcon from './icon_add.png'
import deleteIcon from './icon_delete.png'

export function TodoListClient({
  serverTodoList,
  onSubmit,
  onDelete,
  latency,
  interactable,
  narrow,
}) {
  const [inputValue, setInputValue] = useState('')
  const [localTodoList, setLocalTodoList] = useState(serverTodoList)
  const [displayErrorMessage, setDisplayErrorMessage] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLocalTodoList(serverTodoList)
    }, latency)
  }, [serverTodoList])

  function handleChange(e) {
    setInputValue(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (inputValue === '') {
      setDisplayErrorMessage(true)
      setTimeout(() => {
        setDisplayErrorMessage(false)
      }, 3000)

      return
    }

    let newTodo = {
      id: uuidv4(),
      text: inputValue,
    }

    let newLocalTodoList = [...localTodoList, newTodo]

    setLocalTodoList(newLocalTodoList)
    onSubmit(newTodo)
    setInputValue('')
  }

  function handleDelete(id) {
    let filteredLocalTodoList = localTodoList.filter(todo => todo.id !== id)
    setLocalTodoList(filteredLocalTodoList)
    onDelete(id)
  }

  return (
    <div
      className={
        narrow
          ? 'container inline-block w-[300px] m-0 p-0 min-h-80'
          : 'container inline-block w-[400px] m-0 p-0 min-h-80'
      }
      style={
        !interactable
          ? { ...divStyle, pointerEvents: 'none', opacity: '.5' }
          : divStyle
      }
    >
      <h3>{!interactable ? 'Todo List (Client 2)' : 'Todo List (Client 1)'}</h3>
      {displayErrorMessage ? (
        <p style={errorStyling}>Must enter a value</p>
      ) : (
        <></>
      )}
      <form>
        <input
          type="text"
          placeholder="Enter new todo"
          name="todo"
          value={inputValue}
          onChange={handleChange}
        />
        <button style={addButtonStyle} onClick={handleSubmit}>
          <img src={addIcon} />
        </button>
      </form>
      <ul style={listStyle}>
        {localTodoList.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button
              style={deleteButtonStyle}
              onClick={() => handleDelete(todo.id)}
            >
              <img src={deleteIcon} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

const divStyle = {
  border: '40px solid',
  borderImage: 'url(' + '/landing/Client-window2.svg' + ') 35 35',
}

const deleteButtonStyle = {
  backgroundColor: 'white',
  border: 'none',
  cursor: 'pointer',
  textAlign: 'right',
}

const addButtonStyle = {
  backgroundColor: 'white',
  border: 'none',
  cursor: 'pointer',
  verticalAlign: '-3px',
}

const listStyle = {
  listStyleType: 'none',
  paddingLeft: '0px',
}

const errorStyling = {
  color: 'red',
}
