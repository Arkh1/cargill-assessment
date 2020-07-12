import React, { FunctionComponent, ChangeEvent } from 'react';
import styles from './search.module.scss';

export interface SearchProps {
    searchCb: (query: string) => void
}

export const Search: FunctionComponent<SearchProps> = ({ searchCb }) => {
    const handleChange = (e: ChangeEvent) => {
        searchCb(e.target.value);
    };

    return (
        <form className={styles.search}>
            <input placeholder="Search for a country..." onChange={handleChange} className={styles.input} type="text" />
        </form>
    );
};
