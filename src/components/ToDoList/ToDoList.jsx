import React, { useState, useEffect } from 'react'
import styles from "./ToDoList.module.css"
import ToDoListItem from '../ToDoListItem/ToDoListItem';

const TodosList = () => {
    const [isLoading, setIsLoading] = useState([false]);
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                setIsLoading(true);

                const res = await fetch("https://jsonplaceholder.typicode.com/todos");
                const data = await res.json();
                setTodos(data);

            } catch (error) {
                console.log("error");
            } finally {
                setIsLoading(false);
            }
        }

        fetchTodos();
    }, []);

    if(isLoading) {
        return (
            <div>
                Loading....
            </div>
        )
    }

    return (
        <div className={styles.wrapper}>
            {todos.map(item => (
                <ToDoListItem key={item.id} {...item}/>
            ))}

        </div>
    )
}

export default TodosList