import React from 'react';
import styles from './header.module.scss'

export interface HeaderProps {}

export const Header = () => {
    return (
        <header className={styles.header}>
            <h1>A Fantastic List of Countries</h1>
        </header>
    );
};