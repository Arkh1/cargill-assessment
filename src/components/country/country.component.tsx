import React from 'react';
import styles from './country.module.scss';

export interface CountryProps {
    name?: string,
    capital?: string,
    language?: string,
    currency?: string
}

export const Country = (props: CountryProps) => {
    const {
        name,
        capital,
        language,
        currency
    } = props;

    return (
        <div className={styles.card}>
            <h3>{ name }</h3>
            <div className={styles.details}>
                <div>Capital  City: { capital }</div>
                <div>Language: { language }</div>
                <div>Currency: { currency }</div>
            </div>
        </div>
    );
};