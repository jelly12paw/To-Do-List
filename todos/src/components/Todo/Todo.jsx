import React from 'react';

export default function Todo({todo, onUpdate}) {
    const [text, status] = todo;
    const handleChange = (e) => {
        // 체크박스가 선택되면 상태값은 done
        status = e.target.checked ? 'done' : 'active';
        // todo의 status값을 변경
        onUpdate({...todo, status})
    };
    return (
        <li>
            <input type="checkbox" id="statuscheck" checked={status === 'done'} onChange={handleChange} />
            <label htmlFor="statuscheck">{text}</label>
        </li>
    );
}

