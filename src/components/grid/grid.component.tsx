import React, { useState, useMemo } from 'react';
import styles from './grid.module.scss';
import { GridHeader } from '../gridHeader/gridHeader.component';
import { GridBody } from '../gridBody/gridBody.component';
import { GridFooter } from '../gridFooter/gridFooter.component';

export interface GridProps {
    columnHeaders: any[],
    data: any[],
    selectCb?: any
}

export const Grid = ({columnHeaders, data, selectCb}: GridProps) => {
    const SORT_DIRECTION = {
        ASCENDING: 'ascending',
        DESCENDING: 'descending',
    };
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
    const sortedData = useMemo(() => {
        let sortableData = [...data];
        if (sortConfig.key !== '') {
            sortableData.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === SORT_DIRECTION.ASCENDING ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === SORT_DIRECTION.ASCENDING ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableData;
    }, [data, sortConfig, SORT_DIRECTION.ASCENDING]);

    const sortColumn = (key: string) => {
        /*sortableData.sort((a,b) => a[formattedKey].localeCompare(b[formattedKey]));
        setSortedData(sortableData);*/

        let direction = SORT_DIRECTION.ASCENDING;
        if (sortConfig && sortConfig.key === key && sortConfig.direction === SORT_DIRECTION.ASCENDING) {
            direction = SORT_DIRECTION.DESCENDING;
        }
        setSortConfig({ key: key, direction });
    };

    return (
        <div className={styles.gridContainer}>
            <table className={styles.grid}>
                <GridHeader columnHeaders={columnHeaders} sortCb={sortColumn} />
                <GridBody data={sortedData} selectCb={selectCb} />
                <GridFooter columnHeaders={columnHeaders} />
            </table>
        </div>
    );
};