import React from 'react';

export default function Todo({todo}) {
    const [text, status] = todo;
    return (
        <li>
            <input type="checkbox" name="" id="statuscheck" />
            <label htmlFor="statuscheck">{text}</label>
        </li>
    );
}

