import React, { FunctionComponent } from 'react';
import styles from './country.module.scss';
import { Card } from '../card/card.component';

export interface CountryProps {
    name?: string,
    alpha2Code?: string,
    capital?: string,
    language?: string,
    currency?: string,
    population?: string
}

export const Country: FunctionComponent<CountryProps> = ({ name, ...otherProps }) => (
    <Card title={name}>
        <ul className={styles.details}>
            { Object.entries(otherProps).map(([key, value]: string[]) =>
                <li><strong className={styles.key}>{key}:</strong> { value }</li>)
            }
        </ul>
    </Card>
);