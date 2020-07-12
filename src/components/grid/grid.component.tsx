import React, { useState, useMemo, FunctionComponent } from 'react';
import styles from './grid.module.scss';
import { GridHeader } from '../gridHeader/gridHeader.component';
import { GridBody } from '../gridBody/gridBody.component';
import { GridFooter } from '../gridFooter/gridFooter.component';
import { IGridHeader } from '../../types/index';
import { SORT_DIRECTION } from '../../consts/index';
import * as ArrayUtils from '../../utils/array.util';

export interface GridProps {
    columnHeaders: IGridHeader[],
    data: any[],
    selectCb?: any
}

export const Grid: FunctionComponent<GridProps> = ({columnHeaders = [], data = [], selectCb}) => {
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
    const sortedData = useMemo(() => ArrayUtils.getSortedData(sortConfig, data), [sortConfig, data]);

    const sortColumn = (key: string) => {
        let direction = SORT_DIRECTION.ASCENDING;
        if (sortConfig && sortConfig.key === key && sortConfig.direction === SORT_DIRECTION.ASCENDING) {
            direction = SORT_DIRECTION.DESCENDING;
        }
        setSortConfig({ key: key, direction });
    };

    return (
        <>
            <div className={styles.gridContainer}>
                <table className={styles.grid}>
                    <GridHeader columnHeaders={columnHeaders} sortCb={sortColumn} />
                    <GridBody data={sortedData} selectCb={selectCb} />
                    <GridFooter columnHeaders={columnHeaders} />
                </table>
            </div>
        </>
    );
};