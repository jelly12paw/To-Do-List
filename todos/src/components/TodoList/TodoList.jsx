import React, { useState } from 'react';
import Adds from '../Adds/Adds';

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    return (
        <section>
            <ul>
                {todos.map((item) => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
            <Adds />
        </section>
    );
}

