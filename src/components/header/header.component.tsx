import React from 'react';
import styles from './header.module.scss'

export interface HeaderProps {}

export const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>List of Countries</h1>
        </header>
    );
};