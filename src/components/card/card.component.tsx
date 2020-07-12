import React, { FunctionComponent } from 'react';
import styles from './card.module.scss';

export interface CardProps {
    title?: string
}

export const Card: FunctionComponent<CardProps> = ({ title, children }) => (
    <div className={`${styles.card} ${title ? '' : styles.hidden}`} role="region" id="cardInfo" aria-live="polite">
        <h3 className={styles.title}>
            { title }
        </h3>
        <div className={styles.content}>
            { children }
        </div>
    </div>
);