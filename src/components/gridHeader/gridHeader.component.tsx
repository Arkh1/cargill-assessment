import React from 'react';
import styles from './gridHeader.module.scss';

export interface GridHeaderProps {
    columnHeaders: string[],
    sortCb?: any
}

export const GridHeader = (props: GridHeaderProps) => {
    const {
        columnHeaders,
        sortCb
    } = props;

    return (
        <thead className={styles.header}>
            <tr className={styles.row}>
                { columnHeaders.map((columnHeader: string, index: number) => {
                    return (
                        <th key={columnHeader} className={styles.cell}>
                            <div onClick={(e: any) => sortCb(e, columnHeader)}>
                                { columnHeader }
                            </div>
                        </th>
                    )
                })}
            </tr>
        </thead>
    );
};