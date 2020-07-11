import React from 'react';
import styles from './gridHeader.module.scss';

export interface GridHeaderProps {
    columnHeaders: any[],
    sortCb?: any
}

export const GridHeader = ({ columnHeaders, sortCb }: GridHeaderProps) => (
    <thead className={styles.header}>
        <tr className={styles.row}>
            { columnHeaders.map(({ displayName, field }: any, index: number) => {
                return (
                    <th key={field} className={styles.cell}>
                        <div onClick={(e: any) => sortCb(field)}>
                            { displayName }
                        </div>
                    </th>
                )
            })}
        </tr>
    </thead>
);