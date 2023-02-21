import React, { useState } from 'react';

export default function TodoList() {
    const [todos, setTodos] = useState([
        {id: '1', text: '공부 하기', status: 'active'},
        {id: '2', text: '밥먹기', status: 'completed'},
    ]);
    return (
        <section>
            <ul>
                {todos.map((item) => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        </section>
    );
}

