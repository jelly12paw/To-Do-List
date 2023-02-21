import React, { useState } from 'react';
import Adds from '../Adds/Adds';
import Todo from '../Todo/Todo';

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const handleAdd = (todo) => {
        // Add된 todo를 todos 리스트에 추가
        setTodos([...todos, todo])
    };
    // status값이 변경된 id의 값을 찾아 status값을 변경
    const handleUpdate = (updated) => setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
    return (
        <section>
            <ul>
                {todos.map((item) => (
                    <Todo key={item.id} todo={item} onUpdate={handleUpdate} />
                ))}
            </ul>
            <Adds onAdd={handleAdd}/>
        </section>
    );
}