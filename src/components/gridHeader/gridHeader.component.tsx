import React, { FunctionComponent } from 'react';
import styles from './gridHeader.module.scss';
import { IGridHeader } from '../../types/index';

export interface GridHeaderProps {
    columnHeaders: IGridHeader[],
    sortCb: (field: string) => void
}

export const GridHeader: FunctionComponent<GridHeaderProps> = ({ columnHeaders = [], sortCb }) => (
    <thead className={styles.header}>
        <tr className={styles.row}>
            { columnHeaders.map(({ displayName, field }: IGridHeader, index: number) => (
                <th key={field} className={styles.cell}>
                    <div onClick={() => sortCb(field)}>{ displayName }</div>
                </th>
            ))}
        </tr>
    </thead>
);