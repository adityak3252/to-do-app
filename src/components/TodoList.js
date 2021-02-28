import React from "react";
import Todo from "./Todo";

const TodoList = ({todos, setToDos, filteredTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo setToDos={setToDos} todos={todos} key={todo.id} todo={todo} text={todo.text}/>
                ))}
            </ul>
        </div>
    );
};
export default TodoList;