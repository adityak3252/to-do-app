import React, {useState,useEffect} from "react";
import './App.css';
//importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //state stuff
  const [inputText, setInputText] = useState("");
  const [todos, setToDos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilterTodos] =useState([]);
  //run only once
  useEffect(() => {
    const getLocalTodos = () => {
      if(localStorage.getItem("todos") === null) {
        localStorage.setItem("todos",JSON.stringify([]));
      } else {
        let todoLocal = JSON.parse(localStorage.getItem("todos"));
        setToDos(todoLocal);
      }
    }
    getLocalTodos();
  }, []);
  //use effect
  useEffect(() => {
     //function stuff
  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilterTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  }
  //save locally
  const saveLocalTodos = () => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }
    filterHandler();
    saveLocalTodos();
  },[todos,status]);
  return (
    <div className="App">
      <header>
        <h1>
          Aditya's To Do List
        </h1>
      </header> 
      <Form 
        inputText={inputText} 
        todos={todos} 
        setToDos={setToDos} 
        setInputText={setInputText} 
        setStatus={setStatus}
        />
      <TodoList 
        setToDos={setToDos} 
        todos={todos} 
        filteredTodos={filteredTodos}
        />
    </div>
  );
}

export default App;
