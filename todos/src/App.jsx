import Header from "./components/header"
import TodoItems from "./components/todoItems"
import AddItems from "./components/addItems"
import "./style.css"
function App() {

  return (
    <div className="todo-container">
      <Header heading ="Todos" />
      <TodoItems complete ="true" name="Eat" />
      <TodoItems name="cut" />
      <TodoItems  name="walk"/>
      <TodoItems name="slow" />
      <AddItems />
    </div>
  )
}

export default App
