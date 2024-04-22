// import { useState } from 'react'
// import Syncosaurus from 'syncosaurus'
// import { useSubscribe } from 'syncosaurus'
// import mutators from '../mutators.js'

// const synco = new Syncosaurus({
//   mutators,
//   userID: '1234',
//   server: import.meta.env.VITE_DO_URL,
// })

// synco.launch('yourRoomID')

// export default function App() {
//   const [inputValue, setInputValue] = useState('')

//   function handleChange(e) {
//     setInputValue(e.target.value)
//   }

//   function handleSubmit(e) {
//     e.preventDefault()
//     synco.mutate.addTodo({
//       id: uuidv4(),
//       text: inputValue,
//     })

//     setInputValue('')
//   }

//   function handleDelete(id) {
//     synco.mutate.removeTodo({ id })
//   }

//   const todos = useSubscribe(
//     synco,
//     tx => {
//       let todoObject = tx.scan(key => {
//         return key.includes('todo')
//       })
//       return Object.values(todoObject)
//     },
//     []
//   )

//   return (
//     <div>
//       <form>
//         <input type="text" value={inputValue} onChange={handleChange} />
//         <button onClick={handleSubmit}>Add Todo</button>
//       </form>
//       <ul>
//         {todos.map(todo => (
//           <li key={todo.id}>
//             {todo.text}
//             <button onClick={() => handleDelete(todo.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }
