import React, { useState } from 'react';
import Adds from '../Adds/Adds';

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const handleAdd = (todo) => {
        console.log(todo);
        // Add된 todo를 todos 리스트에 추가
        setTodos([...todos, todo])
    };
    return (
        <section>
            <ul>
                {todos.map((item) => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
            <Adds onAdd={handleAdd}/>
        </section>
    );
}