import React, { useEffect, useState } from 'react';
import Adds from '../Adds/Adds';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css'

export default function TodoList({filter}) {
    const [todos, setTodos] = useState(readTodosFromLocalStroage);
    const handleAdd = (todo) => {
        // Add된 todo를 todos 리스트에 추가
        setTodos([...todos, todo])
    };
    // status값이 변경된 id의 값을 찾아 status값을 변경
    const handleUpdate = (updated) => setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
    // todo값 삭제
    const handleDelete = (deleted) => setTodos(todos.filter((t) => (t.id !== deleted.id)))
    // 로컬스토리지에 todo값을 json으로 변환하여 저장 (새로고침해도 사라지지않음)
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);    
    // status값에 따라 해당 값만 보여주기
    const filtered = getFilteredItem(todos, filter);
    return (
        <section className={styles.container}>
            <ul className={styles.items}>
                {filtered.map((item) => (
                    <Todo key={item.id} todo={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
                ))}
            </ul>
            <Adds onAdd={handleAdd}/>
        </section>
    );
}

function readTodosFromLocalStroage() {
    const todos = localStorage.getItem('todos');
    // todos를 읽어왔을 때 비어있지 않으면 json으로 변환
    return todos ? JSON.parse(todos) : [];
}

function getFilteredItem(todos, filter) {
    if (filter === 'all') {
        return todos;
    } return todos.filter((todo => todo.status === filter));
};