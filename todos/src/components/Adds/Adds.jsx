import React, { useState } from 'react';
import {HiPencil} from 'react-icons/hi';
// 고유 id값 만들기
import { v4 as uuidv4 } from 'uuid';
import styles from './Adds.module.css'

export default function Adds({onAdd}) {
    // 기본값은 빈 문자열
    const [text, setText] = useState('');
    const handleChange = (e) => setText(e.target.value);
    const handleSubmit = (e) => {
        // 새로고침해도 값이 사라지지 않게 이벤트 비활성화
        e.preventDefault();
        // 텍스트의 좌우 여백 없애기
        if (text.trim().length === 0) {return ;}
        // Todo를 추가하면 uuid값, 내용, 상태값이 전달
        onAdd({id: uuidv4(), text, status: 'act'})
        // input값이 submit되면 박스내용을 초기화
        setText('');
    }
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input className={styles.input} type="text" placeholder='Add Todos ...' value={text} onChange={handleChange}/>
            <button className={styles.btn}><HiPencil/></button>          
        </form>
    );
}

// const clearInput = () => {
//     const input = document.querySelector(".input")[0];
//     input.value = "";
// }
  
// const clearBtn = document.getElementById("clear-btn");
// clearBtn.addEventListener("click", clearInput);