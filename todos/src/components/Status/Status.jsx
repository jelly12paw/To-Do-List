import React from 'react';
import styles from './Status.module.css';
import {HiOutlineSquare2Stack} from 'react-icons/hi2';
import {BsCalendarCheck, BsListTask, BsCheck2All} from 'react-icons/bs';
import {BiLoaderAlt} from 'react-icons/bi';

export default function Status({ filters, filter, onFilterChange, iconStatus }) {
    return (
        <header className={styles.header}>
            <div className={styles.today}>
                <div className={styles.title}>
                    <BsCalendarCheck/>
                    <div>today</div>
                </div>
                <p>FEB 22</p>
            </div>
            <div className={styles.status}>
                <div className={styles.title}>
                    <HiOutlineSquare2Stack/>
                    <div>status</div>
                </div>
                <ul className={styles.filters}>
                    {filters.map((value, index) => 
                    <li className={styles.filter} key={index}>
                        <button className={value} onClick={() => onFilterChange(value)}>
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