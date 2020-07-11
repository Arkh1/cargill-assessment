import React from 'react';
import styles from './country.module.scss';
import { Card } from '../card/card.component';

export interface CountryProps {
    name?: string,
    capital?: string,
    language?: string,
    currency?: string,
    population?: string
}

export const Country = ({ name, ...otherProps }: CountryProps) => (
    <Card title={name}>
        <ul className={styles.details}>
            { Object.entries(otherProps).map(([key, value]: any[]) =>
                <li><strong className={styles.key}>{key}:</strong> { value }</li>)
            }
        </ul>
    </Card>
);