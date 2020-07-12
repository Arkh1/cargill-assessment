import React, { FunctionComponent } from 'react';
import styles from './body.module.scss'

export interface BodyProps {}

export const Body: FunctionComponent<BodyProps> = ({ children }) => {
    return (
        <section className={styles.body}>
            { children }
        </section>
    );
};