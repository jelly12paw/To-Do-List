import React from 'react';
import {FaTrashAlt} from 'react-icons/fa';

export default function Todo({todo, onUpdate, onDelete}) {
    const {id, text, status} = todo;
    const handleChange = (e) => {
        // 체크박스가 선택되면 상태값은 done
        const status = e.target.checked ? 'done' : 'act';
        // todo의 status값을 변경
        onUpdate({...todo, status})
    };
    const handleDelete = () => onDelete(todo);
    return (
        <li>
            <input type="checkbox" id={id} checked={status === 'done'} onChange={handleChange} />
            <label htmlFor={id}>{text}</label>
            <button onClick={handleDelete}><FaTrashAlt/></button>
        </li>
    );
}

