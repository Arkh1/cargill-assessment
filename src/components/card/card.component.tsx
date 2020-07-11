import React, { useState } from 'react';
import styles from './card.module.scss';

export interface CardProps {
    title: string,
    children: any
}

export const Card = (props: CardProps) => {
    const {
        title,
        children
    } = props;

    if (!title) {
        return null;
    }

    return (
        <div className={styles.card} role="region" id="cardInfo" aria-live="polite">
            <h3 className={styles.title}>
                { title }
            </h3>
            <div className={styles.content}>
                { children }
            </div>
        </div>
    );
};