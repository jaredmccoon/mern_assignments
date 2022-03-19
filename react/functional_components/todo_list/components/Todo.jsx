import React, {useState} from 'react';

const Todo = () => {
    const [newTodo, setNewTodo] = useState("");
    const [todos, setTodos] = useState([]);

    
    const onSubmitHandler = e =>{
        e.preventDefault();
        if (newTodo==="") return;
        setNewTodo("");
        setTodos([...todos, {newTodo}]);
    }

    const onChangeHandler = e => {
        e.preventDefault();
        setNewTodo(e.target.value)
    };


    const handleTodoupdate = (upidx) =>{
        document.getElementById(upidx).style = "text-decoration: line-through";
    }

    const handleTodoDelete = (delidx) =>{
        let removeTodo = todos.filter((todo,i)=>{
            return i!==delidx;
        });
        setTodos(removeTodo);
    }

    return (
        <>
            <form onSubmit = {onSubmitHandler}>
            <div>
                <label>todo</label>
                <input type="text" onChange={onChangeHandler} value={newTodo}/>
                <input type="submit"/>
            </div>
            </form>
            <div>
                {todos.map((todo, i) => (
                    <div>
                        <h2 id={i}>{todo.newTodo}</h2>
                        <input onClick = {()=>handleTodoupdate(i)}type="checkbox"/>
                        <button onClick = {()=>handleTodoDelete(i)}>Delete</button>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Todo;