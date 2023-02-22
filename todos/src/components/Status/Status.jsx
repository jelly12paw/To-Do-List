import React, { useState } from 'react';
// styles
import styles from './Status.module.css';
// icons
import {HiOutlineSquare2Stack} from 'react-icons/hi2';
import {BsCalendarCheck, BsListTask, BsCheck2All} from 'react-icons/bs';
import {BiLoaderAlt} from 'react-icons/bi';

export default function Status({ filters, filter, onFilterChange }) {
    const [dateState] = useState(new Date());
    return (
        <header className={styles.header}>
            <div className={styles.today}>
                <div className={styles.title}>
                    <BsCalendarCheck/>
                    <div>today</div>
                </div>
                <p>
                    {' '}
                    {dateState.toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                    })}
                </p>
            </div>
            <div className={styles.status}>
                <div className={styles.title}>
                    <HiOutlineSquare2Stack/>
                    <div>status</div>
                </div>
                <ul className={styles.filters}>
                    {filters.map((value, index) => 
                    <li key={index}>
                        <button className={`${value} ${filter === value && styles.selected}`} onClick={() => onFilterChange(value)}>
                            <div className={value === 'all' ? styles.show : styles.disappear}><BsListTask /></div>
                            <div className={value === 'act' ? styles.show : styles.disappear}><BiLoaderAlt /></div>
                            <div className={value === 'done' ? styles.show : styles.disappear}><BsCheck2All /></div>
                            <p>{value}</p>
                        </button>
                    </li>)}
                </ul>
            </div>
        </header>
    );
}