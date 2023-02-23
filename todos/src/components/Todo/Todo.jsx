import React, {useState} from 'react';
import {FaTrashAlt} from 'react-icons/fa';
import {AiOutlineClockCircle, AiOutlineCheck} from 'react-icons/ai';
import styles from './Todo.module.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Todo({todo, onUpdate, onDelete}) {
    const {id, text, status} = todo;
    const handleChange = (e) => {
        // 체크박스가 선택되면 상태값은 done
        const status = e.target.checked ? 'done' : 'act';
        // todo의 status값을 변경
        onUpdate({...todo, status})
    };
    const handleDelete = () => onDelete(todo);
    const [startDate, setStartDate] = useState(new Date());

    return (
        <li className={styles.todo}>
            <input className={styles.checkbox} type="checkbox" id={id} checked={status === 'done'} onChange={handleChange} />
            {/* <div className={styles.checkicon}><AiOutlineCheck/></div> */}
            {/* <span className={styles.checkmark}></span> */}
            <div>
                <label className={styles.text} htmlFor={id}>{text}</label>
                <div className={styles.clock}>
                    <AiOutlineClockCircle/>
                    <span className={styles.title}>DUE DATE</span>
                    <span>
                        <DatePicker className={styles.datepicker} selected={startDate} dateFormat="yyyy-MM-dd" onChange={(date) => setStartDate(date)} />
                    </span>
                </div>
            </div>
            <div className={styles.icon}><button onClick={handleDelete}><FaTrashAlt/></button></div>
        </li>
    );
}