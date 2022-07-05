import React, { useEffect, useState } from 'react'
import { v4 } from 'uuid'
import { deleteTodo, fetchAllTodo, postTodo, updateTodo } from './api/todo'
import TodoItem from './components/TodoItem'
import "./css/Todo.css"

const Todo = () => {
    const [todoItems, setTodoItems] = useState([])
    const [todo, setTodo] = useState("")
    const [updateTask, setUpdateTask] = useState(null)

    const handleAddTodo = async () => {
        if(todo) {
            const item = {
                id: v4(),
                todo
            }

            // Push to our DB
            const data = await postTodo(item)

            // Push to todoItems array
            setTodoItems(prev => [...prev, data])

            // Clear the input
            setTodo("") 
        }
    }

    const handleEdit = async (id) => {
        const item = todoItems.find(item => item.id === id)
        setUpdateTask(item)
    }

    const handleDelete = async (id) => {
        const data = await deleteTodo(id)
        setTodoItems(data)
    }

    const handleUpdateTodo = async () => {
        const index = todoItems.findIndex(item => item.id === updateTask.id)

        // Update from backend
        const data = await updateTodo(updateTask, updateTask.id)

        const oldTodo = todoItems
        oldTodo.splice(index, 1, data)

        setTodoItems(oldTodo)
        setUpdateTask(null)
    }

    useEffect(() => {
        ;( async () => {
            const data = await fetchAllTodo()
            setTodoItems(data)
        })()
    }, [])

    return (
        <div className="todo">
            <div className="container">
                {
                    updateTask ? (
                        <div className="todo-input-container">
                            <input type="text" value={updateTask.todo} onChange={(e) => setUpdateTask(prev => ({...prev, todo: e.target.value}) )} className="todo-input" />
                            <button className="todo-btn" onClick={handleUpdateTodo}>Update Todo</button>
                        </div>
                    ) : (
                        <div className="todo-input-container">
                            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} className="todo-input" placeholder='Enter task...' />
                            <button className="todo-btn" onClick={handleAddTodo}>Add Todo</button>
                        </div>
                    )
                }
               

                <div className="todo-wrapper">
                        {
                            todoItems.length ? (
                                todoItems.map(_todo => (
                                    <TodoItem 
                                        key={_todo.id}
                                        text={_todo.todo} 
                                        handleEdit={() => handleEdit(_todo.id)} 
                                        handleDelete={() => handleDelete(_todo.id)} 
                                    />
                                ))
                            ) : (
                                <p>No Todo yet</p>
                            )
                        }
                    
                </div>
            </div>
        </div>
    )
}

export default Todo