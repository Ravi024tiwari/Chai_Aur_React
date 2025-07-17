import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/SimpleTodo'
function App() {

  return (
    <div>
      <h1 className='bg-red-400 ' >Learn About Redux-toolKit..</h1>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App
