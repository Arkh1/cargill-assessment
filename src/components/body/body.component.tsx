import React from 'react';
import styles from './body.module.scss'

export interface BodyProps {
    children: any
}

export const Body = ({ children }: BodyProps) => {
    return (
        <section className={styles.body}>
            { children }
        </section>
    );
};