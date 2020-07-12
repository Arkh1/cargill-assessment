import React, { FunctionComponent } from 'react';
import styles from './header.module.scss'

export interface HeaderProps {}

export const Header: FunctionComponent<HeaderProps> = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Countries of the World</h1>
        </header>
    );
};