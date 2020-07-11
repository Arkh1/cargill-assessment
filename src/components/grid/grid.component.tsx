import React, { useState, useMemo } from 'react';
import styles from './grid.module.scss';
import { GridHeader } from '../gridHeader/gridHeader.component';
import { GridBody } from '../gridBody/gridBody.component';
import { GridFooter } from '../gridFooter/gridFooter.component';

export interface GridProps {
    columnHeaders: string[],
    data: any[],
    selectCb?: any
}

export const Grid = (props: GridProps) => {
    const {
        columnHeaders,
        data,
        selectCb
    } = props;
    const SORT_DIRECTION = {
        ASCENDING: 'ascending',
        DESCENDING: 'descending',
    };
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
    let sortedData = [...data];

    useMemo(() => {
        if (sortConfig.key !== '') {
            sortedData.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === SORT_DIRECTION.ASCENDING ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === SORT_DIRECTION.ASCENDING ? 1 : -1;
                }
                return 0;
            });
        }
        return sortedData;
    }, [data, sortConfig]);

    const sortColumn = (e: any, key: string) => {
        let direction = SORT_DIRECTION.ASCENDING;
        if (sortConfig.key === key && sortConfig.direction === SORT_DIRECTION.ASCENDING) {
            direction = SORT_DIRECTION.DESCENDING;
        }
        setSortConfig({ key, direction });
    };

    return (
        <table className={styles.grid}>
            <GridHeader columnHeaders={columnHeaders} sortCb={sortColumn} />
            <GridBody data={sortedData} selectCb={selectCb} />
            <GridFooter columnHeaders={columnHeaders} />
        </table>
    );
};